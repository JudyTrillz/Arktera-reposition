"use client";

import { FieldShell } from "@/components/ui/form/field-shell";
import { inputClasses } from "@/components/ui/form/styles";
import { ChoiceGroup } from "@/components/ui/form/choice-group";
import { StageHeading } from "@/components/sections/assessment/stage-heading";
import {
  challengeOptions,
  CHALLENGES_MAX,
  challengeTimeframeOptions,
  challengeImpactOptions,
} from "@/lib/assessment-form";
import type { StageProps } from "@/components/sections/assessment/types";

export function StageChallenges({ data, errors, updateField, toggleArrayValue }: StageProps) {
  return (
    <div>
      <StageHeading
        eyebrow="Stage 3 of 4"
        title="Business Challenges"
        body="Every business faces different constraints. Tell us which challenges you are currently experiencing so we can better understand what may be affecting your business performance."
      />

      <div className="flex flex-col gap-8">
        <FieldShell
          label="Which challenges are you currently experiencing in your business?"
          anchorId="challenges"
          error={errors.challenges}
          helper={
            !errors.challenges
              ? `${data.challenges.length} of ${CHALLENGES_MAX} selected — you don't need to know what is causing them.`
              : undefined
          }
        >
          <ChoiceGroup
            name="Business challenges"
            options={challengeOptions}
            value={data.challenges}
            onToggle={(v) => toggleArrayValue("challenges", v, CHALLENGES_MAX)}
            multiple
            max={CHALLENGES_MAX}
          />
        </FieldShell>

        {data.challenges.includes("other") && (
          <FieldShell
            label="Briefly describe the challenge"
            htmlFor="challengeOther"
            required
            error={errors.challengeOther}
          >
            <input
              id="challengeOther"
              type="text"
              value={data.challengeOther}
              onChange={(e) => updateField("challengeOther", e.target.value)}
              className={inputClasses(!!errors.challengeOther)}
            />
          </FieldShell>
        )}

        {data.challenges.length > 0 && (
          <FieldShell
            label="You selected one or more challenges. What have you noticed happening in your business that makes these issues important?"
            htmlFor="mainChallengeDetail"
            optional
            helper="Share a recent example, when the problem tends to occur, or how it affects your business. You do not need to know the underlying cause."
          >
            <textarea
              id="mainChallengeDetail"
              rows={4}
              value={data.mainChallengeDetail}
              onChange={(e) => updateField("mainChallengeDetail", e.target.value)}
              className={`resize-y ${inputClasses(false)}`}
            />
          </FieldShell>
        )}

        <FieldShell label="When Did You First Notice These Challenges?" anchorId="challengeTimeframe" required error={errors.challengeTimeframe}>
          <ChoiceGroup
            name="Challenge timeframe"
            options={challengeTimeframeOptions}
            value={data.challengeTimeframe ? [data.challengeTimeframe] : []}
            onToggle={(v) => updateField("challengeTimeframe", v)}
            variant="pill"
          />
        </FieldShell>

        <FieldShell
          label="How Much Are These Challenges Affecting Your Business?"
          anchorId="challengeImpact"
          required
          error={errors.challengeImpact}
        >
          <ChoiceGroup
            name="Challenge impact"
            options={challengeImpactOptions}
            value={data.challengeImpact ? [data.challengeImpact] : []}
            onToggle={(v) => updateField("challengeImpact", v)}
            columns={2}
          />
        </FieldShell>
      </div>
    </div>
  );
}
