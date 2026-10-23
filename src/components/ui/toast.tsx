"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

type ToastType = "success" | "error";

type ToastItem = {
  id: number;
  type: ToastType;
  message: string;
};

type ToastContextValue = {
  showToast: (message: string, type: ToastType, duration?: number) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

// Error toasts linger longer than success toasts — a failure needs to be
// read and acted on, while a success toast just needs to be glimpsed
// before attention returns to the success screen it accompanies.
const DEFAULT_DURATION: Record<ToastType, number> = {
  success: 3200,
  error: 7000,
};

function SuccessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="var(--color-accent)" opacity="0.18" />
      <path
        d="M7.5 12.5l3 3L16.5 9"
        stroke="var(--color-accent)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="var(--color-accent-soft)" opacity="0.2" />
      <path d="M12 7.5v6" stroke="var(--color-accent-soft)" strokeWidth="2.25" strokeLinecap="round" />
      <circle cx="12" cy="16.25" r="1.2" fill="var(--color-accent-soft)" />
    </svg>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType, duration?: number) => {
      const id = ++idRef.current;
      setToasts((prev) => [...prev, { id, type, message }]);
      const timer = setTimeout(() => dismiss(id), duration ?? DEFAULT_DURATION[type]);
      timers.current.set(id, timer);
    },
    [dismiss],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-x-0 top-4 z-[300] flex flex-col items-center gap-3 px-4 sm:inset-x-auto sm:right-4 sm:items-end"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              role="status"
              initial={{ opacity: 0, y: -16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className={clsx(
                "pointer-events-auto flex w-full max-w-md items-start gap-3.5 rounded-2xl border-l-4 border-y border-r bg-ink px-5 py-4.5 text-paper",
                toast.type === "error"
                  ? "border-l-accent-soft border-y-accent-soft/20 border-r-accent-soft/20 shadow-[0_16px_48px_rgba(255,138,122,0.22),0_4px_16px_rgba(0,0,0,0.4)]"
                  : "border-l-accent border-y-accent/20 border-r-accent/20 shadow-[0_16px_48px_rgba(255,59,48,0.22),0_4px_16px_rgba(0,0,0,0.4)]",
              )}
            >
              {toast.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
              <p className="flex-1 text-[0.98rem] font-medium leading-snug text-paper">
                {toast.message}
              </p>
              <button
                type="button"
                onClick={() => dismiss(toast.id)}
                aria-label="Dismiss notification"
                data-cursor-hover
                className="shrink-0 text-paper/50 transition-colors hover:text-paper">
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}
