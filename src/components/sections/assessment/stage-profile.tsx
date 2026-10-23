"use client";

import { FieldShell } from "@/components/ui/form/field-shell";
import { inputClasses } from "@/components/ui/form/styles";
import { ChoiceGroup } from "@/components/ui/form/choice-group";
import { StageHeading } from "@/components/sections/assessment/stage-heading";
import { industryOptions, teamSizeOptions, businessAgeOptions } from "@/lib/assessment-form";
import type { StageProps } from "@/components/sections/assessment/types";

export function StageProfile({ data, errors, updateField }: StageProps) {
  function updateSocialLink(index: number, value: string) {
    const next = [...data.socialLinks];
    next[index] = value;
    updateField("socialLinks", next);
  }
  function addSocialLink() {
    updateField("socialLinks", [...data.socialLinks, ""]);
  }
  function removeSocialLink(index: number) {
    const next = data.socialLinks.filter((_, i) => i !== index);
    updateField("socialLinks", next.length ? next : [""]);
  }

  return (
    <div>
      <StageHeading
        eyebrow="Stage 1 of 4"
        title="Business Profile"
        body="Tell us a little about your business so we can better understand your operations and the context behind your goals."
      />

      <div className="flex flex-col gap-7">
        <div className="grid gap-6 sm:grid-cols-2">
          <FieldShell label="First Name" htmlFor="firstName" required error={errors.firstName}>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              value={data.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              className={inputClasses(!!errors.firstName)}
            />
          </FieldShell>
          <FieldShell label="Last Name" htmlFor="lastName" required error={errors.lastName}>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              value={data.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              className={inputClasses(!!errors.lastName)}
            />
          </FieldShell>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FieldShell label="Business Email Address" htmlFor="email" required error={errors.email}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={inputClasses(!!errors.email)}
            />
          </FieldShell>
          <FieldShell label="Business Name" htmlFor="businessName" required error={errors.businessName}>
            <input
              id="businessName"
              type="text"
              autoComplete="organization"
              value={data.businessName}
              onChange={(e) => updateField("businessName", e.target.value)}
              className={inputClasses(!!errors.businessName)}
            />
          </FieldShell>
        </div>

        <FieldShell
          label="Business Website"
          htmlFor="website"
          optional
          error={errors.website}
          helper={!errors.website ? "If your business has a website, share the link." : undefined}
        >
          <input
            id="website"
            type="text"
            inputMode="url"
            placeholder="https://yourbusiness.com"
            value={data.website}
            onChange={(e) => updateField("website", e.target.value)}
            className={inputClasses(!!errors.website)}
          />
        </FieldShell>

        <FieldShell
          label="Business Social Media Links"
          optional
          helper="Share links to your business's social media profiles, where applicable."
        >
          <div className="flex flex-col gap-3">
            {data.socialLinks.map((link, i) => (
              <div key={i} className="flex gap-2.5">
                <input
                  type="text"
                  inputMode="url"
                  placeholder="https://instagram.com/yourbusiness"
                  value={link}
                  onChange={(e) => updateSocialLink(i, e.target.value)}
                  className={inputClasses(false)}
                />
                {data.socialLinks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSocialLink(i)}
                    aria-label="Remove link"
                    data-cursor-hover
                    className="shrink-0 rounded-xl border border-ink/15 px-3.5 text-ink/50 transition-colors hover:border-accent hover:text-accent"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addSocialLink}
              data-cursor-hover
              className="self-start font-sans text-[0.85rem] font-semibold text-ink transition-colors hover:text-accent"
            >
              + Add another link
            </button>
          </div>
        </FieldShell>

        <FieldShell
          label="What Industry Does Your Business Operate In?"
          anchorId="industry"
          required
          error={errors.industry}
        >
          <ChoiceGroup
            name="Industry"
            options={industryOptions}
            value={data.industry ? [data.industry] : []}
            onToggle={(v) => updateField("industry", v)}
            variant="pill"
          />
        </FieldShell>

        <FieldShell
          label="What Services Does Your Business Provide?"
          htmlFor="services"
          required
          error={errors.services}
          helper={!errors.services ? "Briefly describe your main services or what clients pay your business to do." : undefined}
        >
          <input
            id="services"
            type="text"
            value={data.services}
            onChange={(e) => updateField("services", e.target.value)}
            className={inputClasses(!!errors.services)}
          />
        </FieldShell>

        <div className="grid gap-6 sm:grid-cols-2">
          <FieldShell label="City / State / Region" htmlFor="cityRegion" required error={errors.cityRegion}>
            <input
              id="cityRegion"
              type="text"
              value={data.cityRegion}
              onChange={(e) => updateField("cityRegion", e.target.value)}
              className={inputClasses(!!errors.cityRegion)}
            />
          </FieldShell>
          <FieldShell label="Country" htmlFor="country" required error={errors.country}>
            <input
              id="country"
              type="text"
              autoComplete="country-name"
              value={data.country}
              onChange={(e) => updateField("country", e.target.value)}
              className={inputClasses(!!errors.country)}
            />
          </FieldShell>
        </div>

        <FieldShell label="How Many People Work in Your Business?" anchorId="teamSize" required error={errors.teamSize}>
          <ChoiceGroup
            name="Team size"
            options={teamSizeOptions}
            value={data.teamSize ? [data.teamSize] : []}
            onToggle={(v) => updateField("teamSize", v)}
            variant="pill"
          />
        </FieldShell>

        <FieldShell label="How Long Has Your Business Been Operating?" anchorId="businessAge" required error={errors.businessAge}>
          <ChoiceGroup
            name="Business age"
            options={businessAgeOptions}
            value={data.businessAge ? [data.businessAge] : []}
            onToggle={(v) => updateField("businessAge", v)}
            variant="pill"
          />
        </FieldShell>
      </div>
    </div>
  );
}
