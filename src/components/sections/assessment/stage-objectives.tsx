"use client";

import { FieldShell } from "@/components/ui/form/field-shell";
import { inputClasses } from "@/components/ui/form/styles";
import { ChoiceGroup } from "@/components/ui/form/choice-group";
import { StageHeading } from "@/components/sections/assessment/stage-heading";
import { objectiveOptions, OBJECTIVES_MAX } from "@/lib/assessment-form";
import type { StageProps } from "@/components/sections/assessment/types";

export function StageObjectives({ data, errors, updateField, toggleArrayValue }: StageProps) {
  return (
    <div>
      <StageHeading
        eyebrow="Stage 2 of 4"
        title="Business Objectives"
        body="What would you most like to improve in your business over the next 6 to 12 months? Select up to three priorities that matter most to your business."
      />

      <FieldShell
        label="Priorities"
        anchorId="objectives"
        error={errors.objectives}
        helper={
          !errors.objectives
            ? `${data.objectives.length} of ${OBJECTIVES_MAX} selected`
            : undefined
        }
      >
        <ChoiceGroup
          name="Business objectives"
          options={objectiveOptions}
          value={data.objectives}
          onToggle={(v) => toggleArrayValue("objectives", v, OBJECTIVES_MAX)}
          multiple
          max={OBJECTIVES_MAX}
        />
      </FieldShell>

      {data.objectives.includes("other") && (
        <FieldShell
          label="Describe the business outcome you want to achieve"
          htmlFor="objectiveOther"
          required
          error={errors.objectiveOther}
          className="mt-6"
        >
          <input
            id="objectiveOther"
            type="text"
            value={data.objectiveOther}
            onChange={(e) => updateField("objectiveOther", e.target.value)}
            className={inputClasses(!!errors.objectiveOther)}
          />
        </FieldShell>
      )}
    </div>
  );
}
