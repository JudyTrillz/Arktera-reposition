"use client";

import { Reveal } from "@/components/ui/reveal";
import { StageHeading } from "@/components/sections/assessment/stage-heading";
import {
  type AssessmentFormData,
  type Option,
  type StageIndex,
  STAGE_META,
  industryOptions,
  teamSizeOptions,
  businessAgeOptions,
  objectiveOptions,
  challengeOptions,
  challengeTimeframeOptions,
  challengeImpactOptions,
  inquiryVolumeOptions,
  newClientOptions,
  revenueChangeOptions,
  revenueCurrencyOptions,
  revenueRangesByCurrency,
  trackedMetricOptions,
  trackingToolOptions,
} from "@/lib/assessment-form";

function labelFor(options: Option[], value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}
function labelsFor(options: Option[], values: string[]) {
  return values.map((v) => labelFor(options, v)).join(", ");
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-1 gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[13rem_1fr] sm:gap-4">
      <span className="font-sans text-[0.8rem] font-medium text-ink/45">{label}</span>
      <span className="text-[0.95rem] leading-relaxed text-ink">{value}</span>
    </div>
  );
}

function SectionCard({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 p-6 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-lg text-ink">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          data-cursor-hover
          className="shrink-0 font-sans text-[0.85rem] font-semibold text-accent transition-colors hover:text-ink"
        >
          Edit
        </button>
      </div>
      <div className="mt-3 flex flex-col divide-y divide-ink/8">{children}</div>
    </div>
  );
}

export function Review({
  data,
  onEdit,
}: {
  data: AssessmentFormData;
  onEdit: (stage: StageIndex) => void;
}) {
  const ranges = data.revenueCurrency ? revenueRangesByCurrency[data.revenueCurrency] : undefined;
  const revenueValue =
    data.revenueCurrency === "OTHER"
      ? data.revenueOtherEstimate || undefined
      : data.revenueRange && ranges
        ? labelFor(ranges, data.revenueRange)
        : undefined;

  return (
    <div>
      <StageHeading
        eyebrow="Final Step"
        title="Review Your Assessment"
        body="Take a moment to check what you've shared. You can edit any section before submitting — nothing has been sent yet."
      />

      <div className="flex flex-col gap-5">
        <Reveal>
          <SectionCard title={STAGE_META[0].title} onEdit={() => onEdit(0)}>
            <Row label="Name" value={[data.firstName, data.lastName].filter(Boolean).join(" ")} />
            <Row label="Email" value={data.email} />
            <Row label="Business Name" value={data.businessName} />
            <Row label="Website" value={data.website} />
            <Row
              label="Social Links"
              value={data.socialLinks.filter(Boolean).join(", ") || undefined}
            />
            <Row label="Industry" value={data.industry ? labelFor(industryOptions, data.industry) : undefined} />
            <Row label="Services" value={data.services} />
            <Row
              label="Location"
              value={[data.cityRegion, data.country].filter(Boolean).join(", ")}
            />
            <Row label="Team Size" value={data.teamSize ? labelFor(teamSizeOptions, data.teamSize) : undefined} />
            <Row
              label="Business Age"
              value={data.businessAge ? labelFor(businessAgeOptions, data.businessAge) : undefined}
            />
          </SectionCard>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionCard title={STAGE_META[1].title} onEdit={() => onEdit(1)}>
            <Row label="Priorities" value={labelsFor(objectiveOptions, data.objectives) || undefined} />
            <Row label="Other Outcome" value={data.objectiveOther} />
          </SectionCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionCard title={STAGE_META[2].title} onEdit={() => onEdit(2)}>
            <Row label="Challenges" value={labelsFor(challengeOptions, data.challenges) || undefined} />
            <Row label="Other Challenge" value={data.challengeOther} />
            <Row label="More Detail" value={data.mainChallengeDetail} />
            <Row
              label="First Noticed"
              value={data.challengeTimeframe ? labelFor(challengeTimeframeOptions, data.challengeTimeframe) : undefined}
            />
            <Row
              label="Impact"
              value={data.challengeImpact ? labelFor(challengeImpactOptions, data.challengeImpact) : undefined}
            />
          </SectionCard>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionCard title={STAGE_META[3].title} onEdit={() => onEdit(3)}>
            <Row
              label="Monthly Inquiries"
              value={data.monthlyInquiries ? labelFor(inquiryVolumeOptions, data.monthlyInquiries) : undefined}
            />
            <Row
              label="New Clients / Month"
              value={data.monthlyNewClients ? labelFor(newClientOptions, data.monthlyNewClients) : undefined}
            />
            <Row
              label="Revenue Trend"
              value={data.revenueChange ? labelFor(revenueChangeOptions, data.revenueChange) : undefined}
            />
            <Row
              label="Monthly Revenue"
              value={
                data.revenueCurrency
                  ? `${labelFor(revenueCurrencyOptions, data.revenueCurrency)}${revenueValue ? ` — ${revenueValue}` : ""}`
                  : undefined
              }
            />
            <Row label="Tracked Data" value={labelsFor(trackedMetricOptions, data.trackedMetrics) || undefined} />
            <Row label="Other Metrics" value={data.trackedMetricsOther} />
            <Row label="Tracking Method" value={labelsFor(trackingToolOptions, data.trackingTools) || undefined} />
            <Row label="Other Tools" value={data.trackingToolsOther} />
            <Row label="Main Goal" value={data.mainResult} />
            <Row label="Additional Context" value={data.additionalContext} />
          </SectionCard>
        </Reveal>
      </div>
    </div>
  );
}
