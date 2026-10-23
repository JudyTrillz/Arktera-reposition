"use client";

import { useEffect, useRef } from "react";
import { useAssessmentForm, REVIEW_STEP } from "@/lib/use-assessment-form";
import { isStageValid, type StageIndex } from "@/lib/assessment-form";
import { ProgressStepper } from "@/components/ui/form/progress-stepper";
import { StepTransition } from "@/components/ui/form/step-transition";
import { ResumeBanner } from "@/components/sections/assessment/resume-banner";
import { StageProfile } from "@/components/sections/assessment/stage-profile";
import { StageObjectives } from "@/components/sections/assessment/stage-objectives";
import { StageChallenges } from "@/components/sections/assessment/stage-challenges";
import { StagePerformance } from "@/components/sections/assessment/stage-performance";
import { Review } from "@/components/sections/assessment/review";
import { AssessmentSuccess } from "@/components/sections/assessment/success";
import { SendFlyAnimation } from "@/components/ui/send-fly-animation";

const STAGE_COMPONENTS = [
  StageProfile,
  StageObjectives,
  StageChallenges,
  StagePerformance,
];

export function AssessmentForm() {
  const form = useAssessmentForm();
  const anchorRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [form.step]);

  function handleContinue() {
    const failedKeys = form.goNext();
    if (failedKeys && failedKeys.length > 0) {
      requestAnimationFrame(() => {
        document
          .getElementById(failedKeys[0])
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  if (!form.hydrated) {
    return (
      <section id="assessment-form" className="bg-paper py-24 text-ink sm:py-32">
        <div className="container-arktera flex justify-center">
          <div
            className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-accent"
            aria-hidden="true"
          />
          <span className="sr-only">Loading your assessment…</span>
        </div>
      </section>
    );
  }

  if (form.submitted) {
    return (
      <section id="assessment-form" className="bg-paper py-24 text-ink sm:py-32">
        <div className="container-arktera">
          <AssessmentSuccess />
        </div>
      </section>
    );
  }

  const StageComponent = form.step < REVIEW_STEP ? STAGE_COMPONENTS[form.step] : null;
  const completedStages = [0, 1, 2, 3].map((s) =>
    isStageValid(s as StageIndex, form.data),
  );
  const allStagesValid = completedStages.every(Boolean);
  const onReview = form.step === REVIEW_STEP;

  return (
    <section id="assessment-form" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        <div ref={anchorRef} className="scroll-mt-28" />

        <div className="mx-auto max-w-3xl">
          {form.resumed && (
            <ResumeBanner
              onDismiss={form.dismissResumeBanner}
              onStartOver={form.startOver}
            />
          )}

          <ProgressStepper step={form.step} completedStages={completedStages} />

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-ink/10 p-6 sm:mt-12 sm:p-10">
            <StepTransition stepKey={form.step} direction={form.direction}>
              {StageComponent ? (
                <StageComponent
                  data={form.data}
                  errors={form.errors}
                  updateField={form.updateField}
                  toggleArrayValue={form.toggleArrayValue}
                />
              ) : (
                <Review
                  data={form.data}
                  onEdit={(stage: StageIndex) => form.editSection(stage)}
                />
              )}
            </StepTransition>

            {onReview && !allStagesValid && (
              <p className="mt-8 rounded-xl bg-accent/[0.07] px-5 py-4 text-[0.88rem] leading-relaxed text-ink/70">
                One or more sections above are missing a required answer. Use that
                section&apos;s <strong className="font-semibold">Edit</strong> link to
                complete it before submitting.
              </p>
            )}

            <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink/10 pt-7">
              {form.step > 0 ? (
                <button
                  type="button"
                  onClick={form.goBack}
                  data-cursor-hover
                  className="font-sans text-[0.92rem] font-medium text-ink/60 transition-colors hover:text-ink">
                  &larr; Back
                </button>
              ) : (
                <span />
              )}

              {onReview ? (
                <>
                  <button
                    ref={submitButtonRef}
                    type="button"
                    onClick={form.submit}
                    disabled={form.submitting || !allStagesValid}
                    data-cursor-hover
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-ink px-8 font-sans text-[0.95rem] font-medium text-paper transition-colors duration-300 ease-out hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50">
                    {form.submitting ? (
                      <>
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper"
                          aria-hidden="true"
                        />
                        Submitting…
                      </>
                    ) : (
                      "Submit Assessment"
                    )}
                  </button>
                  <SendFlyAnimation active={form.submitting} anchorRef={submitButtonRef} />
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleContinue}
                  data-cursor-hover
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-ink px-8 font-sans text-[0.95rem] font-medium text-paper transition-colors duration-300 ease-out hover:bg-accent">
                  {form.returnToReview ? "Save & Return to Review" : "Continue"}
                  <span aria-hidden="true">&rarr;</span>
                </button>
              )}
            </div>

            {form.errors.submit && (
              <p
                role="alert"
                className="mb-4 rounded-xl border border-red-300 bg-red-50 px-5 py-4 text-sm leading-relaxed text-red-800">
                {form.errors.submit}
              </p>
            )}
          </div>

          <p className="mt-6 text-center text-[0.82rem] text-ink/40">
            Your progress is saved automatically on this device, so a refresh won&apos;t
            make you start over.
          </p>
        </div>
      </div>
    </section>
  );
}
