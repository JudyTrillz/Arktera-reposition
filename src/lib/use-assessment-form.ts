import { useCallback, useEffect, useRef, useState } from "react";
import {
  type AssessmentFormData,
  type StageIndex,
  initialAssessmentData,
  validateStage,
} from "@/lib/assessment-form";
import { useToast } from "@/components/ui/toast";

const STORAGE_KEY = "arktera-assessment-v1";
// How long a saved-but-abandoned session is honored before we treat it as
// stale and start the visitor fresh. Measured from their last edit, not
// from when they first started — so a form they're actively working
// through (even across a refresh) never expires mid-session.
const EXPIRY_MS = 24 * 60 * 60 * 1000;
const SAVE_DEBOUNCE_MS = 400;

export const TOTAL_STAGES = 4;
export const REVIEW_STEP = 4;

type PersistedShape = {
  data: AssessmentFormData;
  step: number;
  savedAt: number;
};

function readStorage(): PersistedShape | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedShape;
    if (!parsed || typeof parsed.savedAt !== "number" || !parsed.data) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(data: AssessmentFormData, step: number) {
  if (typeof window === "undefined") return;
  try {
    const payload: PersistedShape = { data, step, savedAt: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Storage unavailable (private browsing, quota, etc.) — fail silently;
    // the form still works, it just won't persist across a refresh.
  }
}

function clearStorage() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

// Whether the visitor has actually entered anything yet. Guards both the
// autosave (no point persisting an untouched form) and the resume banner
// (no point welcoming someone "back" to a session with nothing in it).
function hasProgress(data: AssessmentFormData): boolean {
  return Object.entries(data).some(([key, value]) => {
    if (Array.isArray(value)) {
      if (key === "socialLinks") return value.some((v) => v.trim() !== "");
      return value.length > 0;
    }
    return typeof value === "string" && value.trim() !== "";
  });
}

export function useAssessmentForm() {
  const { showToast } = useToast();
  const [hydrated, setHydrated] = useState(false);
  const [resumed, setResumed] = useState(false);
  const [data, setData] = useState<AssessmentFormData>(initialAssessmentData);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [returnToReview, setReturnToReview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Hydrate from localStorage once, on mount. This has to run in an effect
  // (localStorage isn't available during SSR/initial render), and the one
  // moment we sync the whole form in from that external source is this
  // "did we have a session in progress" check — a single bounded sync, not
  // a derived-state loop, so the cascading-render concern this lint rule
  // guards against doesn't apply here.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const saved = readStorage();
    if (saved) {
      const expired = Date.now() - saved.savedAt > EXPIRY_MS;
      if (expired || !hasProgress(saved.data)) {
        clearStorage();
      } else {
        setData(saved.data);
        setStep(saved.step);
        setResumed(true);
      }
    }
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Debounced autosave whenever the data or step changes, after hydration.
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!hydrated || submitted) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      if (hasProgress(data)) {
        writeStorage(data, step);
      } else {
        clearStorage();
      }
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [data, step, hydrated, submitted]);

  const updateField = useCallback(
    <K extends keyof AssessmentFormData>(key: K, value: AssessmentFormData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => {
        if (!prev[key as string]) return prev;
        const next = { ...prev };
        delete next[key as string];
        return next;
      });
    },
    [],
  );

  const toggleArrayValue = useCallback(
    (key: keyof AssessmentFormData, value: string, max?: number) => {
      setData((prev) => {
        const current = (prev[key] as string[]) ?? [];
        const exists = current.includes(value);
        let next: string[];
        if (exists) {
          next = current.filter((v) => v !== value);
        } else {
          if (max && current.length >= max) return prev;
          next = [...current, value];
        }
        return { ...prev, [key]: next };
      });
      setErrors((prev) => {
        if (!prev[key as string]) return prev;
        const next = { ...prev };
        delete next[key as string];
        return next;
      });
    },
    [],
  );

  // Returns null on success, or the ordered list of failing field keys (so
  // the caller can scroll the first one into view) when validation blocks
  // the advance.
  const goNext = useCallback((): string[] | null => {
    if (step < TOTAL_STAGES) {
      const stageErrors = validateStage(step as StageIndex, data);
      const keys = Object.keys(stageErrors);
      if (keys.length > 0) {
        setErrors(stageErrors);
        return keys;
      }
    }
    setErrors({});
    setDirection(1);
    if (returnToReview) {
      setReturnToReview(false);
      setStep(REVIEW_STEP);
    } else {
      setStep((s) => Math.min(s + 1, REVIEW_STEP));
    }
    return null;
  }, [step, data, returnToReview]);

  const goBack = useCallback(() => {
    setErrors({});
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const editSection = useCallback((targetStage: StageIndex) => {
    setErrors({});
    setDirection(-1);
    setReturnToReview(true);
    setStep(targetStage);
  }, []);

  const submit = useCallback(async () => {
    setSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/assessment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
          },
          body: JSON.stringify({
            ...data,
            socialLinks: data.socialLinks.map((link) => link.trim()).filter(Boolean),
          }),
        },
      );

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ??
            result?.message ??
            "We couldn't submit your assessment. Please try again.",
        );
      }

      clearStorage();
      setResumed(false);
      setSubmitted(true);
      showToast("Assessment submitted successfully!", "success");
    } catch (error) {
      console.error("Assessment submission failed:", error);

      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrors({ submit: message });
      showToast(message, "error");
    } finally {
      setSubmitting(false);
    }
  }, [data, showToast]);

  const startOver = useCallback(() => {
    clearStorage();
    setData(initialAssessmentData);
    setStep(0);
    setDirection(1);
    setErrors({});
    setResumed(false);
    setReturnToReview(false);
    setSubmitted(false);
  }, []);

  const dismissResumeBanner = useCallback(() => setResumed(false), []);

  return {
    hydrated,
    resumed,
    dismissResumeBanner,
    data,
    step,
    direction,
    errors,
    returnToReview,
    submitted,
    submitting,
    updateField,
    toggleArrayValue,
    goNext,
    goBack,
    goToStep: setStep,
    editSection,
    submit,
    startOver,
  };
}
