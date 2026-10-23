"use client";

import { FieldShell } from "@/components/ui/form/field-shell";
import { inputClasses } from "@/components/ui/form/styles";
import { ChoiceGroup } from "@/components/ui/form/choice-group";
import { StageHeading } from "@/components/sections/assessment/stage-heading";
import {
  inquiryVolumeOptions,
  newClientOptions,
  revenueChangeOptions,
  revenueCurrencyOptions,
  revenueRangesByCurrency,
  trackedMetricOptions,
  trackingToolOptions,
} from "@/lib/assessment-form";
import type { StageProps } from "@/components/sections/assessment/types";

export function StagePerformance({ data, errors, updateField, toggleArrayValue }: StageProps) {
  const ranges = data.revenueCurrency ? revenueRangesByCurrency[data.revenueCurrency] : undefined;

  return (
    <div>
      <StageHeading
        eyebrow="Stage 4 of 4"
        title="Business Performance & Additional Context"
        body="Your goals and challenges provide important context. A little information about your current business performance will help us prepare for a more useful assessment conversation. Where exact figures are unavailable, choose the closest estimate — it's fine if you don't track every metric."
      />

      <div className="flex flex-col gap-8">
        <FieldShell
          label="Approximately how many new inquiries does your business receive in a typical month?"
          anchorId="monthlyInquiries"
          required
          error={errors.monthlyInquiries}
        >
          <ChoiceGroup
            name="Monthly inquiries"
            options={inquiryVolumeOptions}
            value={data.monthlyInquiries ? [data.monthlyInquiries] : []}
            onToggle={(v) => updateField("monthlyInquiries", v)}
            variant="pill"
          />
        </FieldShell>

        <FieldShell
          label="Approximately how many new clients does your business gain in a typical month?"
          anchorId="monthlyNewClients"
          required
          error={errors.monthlyNewClients}
        >
          <ChoiceGroup
            name="Monthly new clients"
            options={newClientOptions}
            value={data.monthlyNewClients ? [data.monthlyNewClients] : []}
            onToggle={(v) => updateField("monthlyNewClients", v)}
            variant="pill"
          />
        </FieldShell>

        <FieldShell
          label="How has your business revenue changed over the past 3 to 6 months?"
          anchorId="revenueChange"
          required
          error={errors.revenueChange}
        >
          <ChoiceGroup
            name="Revenue change"
            options={revenueChangeOptions}
            value={data.revenueChange ? [data.revenueChange] : []}
            onToggle={(v) => updateField("revenueChange", v)}
            variant="pill"
          />
        </FieldShell>

        <div className="rounded-2xl border border-ink/10 p-6">
          <FieldShell
            label="Approximately how much revenue does your business generate in a typical month?"
            optional
            helper="An estimate is sufficient. Select the currency that applies to your business."
          >
            <ChoiceGroup
              name="Revenue currency"
              options={revenueCurrencyOptions}
              value={data.revenueCurrency ? [data.revenueCurrency] : []}
              onToggle={(v) => {
                const next = v === data.revenueCurrency ? "" : v;
                updateField("revenueCurrency", next);
                updateField("revenueRange", "");
                updateField("revenueOtherEstimate", "");
              }}
              variant="pill"
            />
          </FieldShell>

          {ranges && (
            <FieldShell label="Revenue range" anchorId="revenueRange" error={errors.revenueRange} className="mt-6">
              <ChoiceGroup
                name="Revenue range"
                options={ranges}
                value={data.revenueRange ? [data.revenueRange] : []}
                onToggle={(v) => updateField("revenueRange", v === data.revenueRange ? "" : v)}
                variant="pill"
              />
            </FieldShell>
          )}

          {data.revenueCurrency === "OTHER" && (
            <FieldShell
              label="Approximate monthly revenue"
              htmlFor="revenueOtherEstimate"
              optional
              helper="Share a rough figure in your own currency, or leave blank if you'd prefer not to say."
              className="mt-6"
            >
              <input
                id="revenueOtherEstimate"
                type="text"
                value={data.revenueOtherEstimate}
                onChange={(e) => updateField("revenueOtherEstimate", e.target.value)}
                className={inputClasses(false)}
              />
            </FieldShell>
          )}
        </div>

        <FieldShell
          label="Which business performance data do you currently track?"
          anchorId="trackedMetrics"
          required
          error={errors.trackedMetrics}
          helper={!errors.trackedMetrics ? "Select all that apply." : undefined}
        >
          <ChoiceGroup
            name="Tracked metrics"
            options={trackedMetricOptions}
            value={data.trackedMetrics}
            onToggle={(v) => toggleArrayValue("trackedMetrics", v)}
            multiple
            variant="pill"
          />
        </FieldShell>

        {data.trackedMetrics.includes("other") && (
          <FieldShell
            label="Which other metrics do you track?"
            htmlFor="trackedMetricsOther"
            optional
            error={errors.trackedMetricsOther}
          >
            <input
              id="trackedMetricsOther"
              type="text"
              value={data.trackedMetricsOther}
              onChange={(e) => updateField("trackedMetricsOther", e.target.value)}
              className={inputClasses(!!errors.trackedMetricsOther)}
            />
          </FieldShell>
        )}

        <FieldShell
          label="How do you currently record and review business performance?"
          anchorId="trackingTools"
          required
          error={errors.trackingTools}
        >
          <ChoiceGroup
            name="Tracking tools"
            options={trackingToolOptions}
            value={data.trackingTools}
            onToggle={(v) => toggleArrayValue("trackingTools", v)}
            multiple
            variant="pill"
          />
        </FieldShell>

        {data.trackingTools.includes("other") && (
          <FieldShell
            label="Which tools or methods do you use?"
            htmlFor="trackingToolsOther"
            optional
            error={errors.trackingToolsOther}
          >
            <input
              id="trackingToolsOther"
              type="text"
              value={data.trackingToolsOther}
              onChange={(e) => updateField("trackingToolsOther", e.target.value)}
              className={inputClasses(!!errors.trackingToolsOther)}
            />
          </FieldShell>
        )}

        <FieldShell
          label="What is the most important result you want to achieve in the next 6 to 12 months?"
          htmlFor="mainResult"
          required
          error={errors.mainResult}
          helper={
            !errors.mainResult
              ? "Be as specific as you can. Include a target, such as a revenue goal or a desired number of new clients, if you have one."
              : undefined
          }
        >
          <textarea
            id="mainResult"
            rows={4}
            value={data.mainResult}
            onChange={(e) => updateField("mainResult", e.target.value)}
            className={`resize-y ${inputClasses(!!errors.mainResult)}`}
          />
        </FieldShell>

        <FieldShell
          label="Is there anything else we should know before reviewing your assessment?"
          htmlFor="additionalContext"
          optional
        >
          <textarea
            id="additionalContext"
            rows={4}
            value={data.additionalContext}
            onChange={(e) => updateField("additionalContext", e.target.value)}
            className={`resize-y ${inputClasses(false)}`}
          />
        </FieldShell>
      </div>
    </div>
  );
}
