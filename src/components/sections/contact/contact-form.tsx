"use client";

import { useRef, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase/client";
import { Reveal } from "@/components/ui/reveal";
import { Button, ArrowIcon } from "@/components/ui/button";
import { inputClasses } from "@/components/ui/form/styles";
import { useToast } from "@/components/ui/toast";
import { SendFlyAnimation } from "@/components/ui/send-fly-animation";
import { assessmentHref, siteConfig } from "@/lib/site-config";

const nextSteps = [
  {
    number: "01",
    title: "We Review Your Message",
    body: "We'll read your inquiry and consider the context behind your question, request, or proposed project.",
  },
  {
    number: "02",
    title: "We Get in Touch",
    body: "We'll respond within one business day to address your inquiry or discuss the most appropriate next step.",
  },
  {
    number: "03",
    title: "We Determine the Next Step",
    body: "Depending on your inquiry, we may answer your questions, discuss a potential engagement, or recommend a more suitable way to proceed. Our aim is to understand what you need before recommending a solution.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M15 24.5l6 6L33 18"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      first_name: String(formData.get("firstName") ?? "").trim(),
      last_name: String(formData.get("lastName") ?? "").trim(),
      business: String(formData.get("businessName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("contact", {
        body: contactData,
      });

      if (error) {
        console.error("Contact submission failed:", error);
        showToast("We couldn't send your message. Please try again.", "error");
        return;
      }

      setSubmitted(true);
      showToast("Message sent successfully!", "success");
    } catch (error) {
      console.error("Contact submission error:", error);
      showToast("A connection error occurred. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="send-message" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-arktera">
        {submitted ? (
          <Reveal
            className="mx-auto max-w-xl rounded-[1.75rem] border border-ink/10 px-8 py-16 text-center sm:px-14 sm:py-20"
            id="message-sent">
            <div role="status" aria-live="polite" className="flex flex-col items-center">
              <CheckIcon />
              <h2 className="mt-7 font-display text-[clamp(1.8rem,3vw+1rem,2.6rem)] leading-[1.1] tracking-tight text-ink text-balance">
                Message Sent Successfully!
              </h2>
              <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink/60">
                Thank you for contacting Arktera Systems. We&apos;ve received your message
                and appreciate you reaching out.
              </p>
              <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink/60">
                We&apos;ll review your inquiry and get back to you within{" "}
                <strong className="font-semibold text-ink">one business day</strong>. We
                look forward to connecting with you.
              </p>
              <div className="mt-8 border-t border-ink/10 pt-6">
                <p className="font-display text-lg text-ink">Arktera Systems</p>
                <p className="mt-1 text-[0.9rem] italic text-ink/50">
                  The business comes first. The solution follows.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button href="/" tone="light" variant="outline">
                  Return Home
                </Button>
                <Button href="/insights" tone="light" variant="outline">
                  Explore Insights
                </Button>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Send Us a Message
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.8rem,2.4vw+1rem,2.8rem)] leading-[1.1] tracking-tight text-ink text-balance">
                Complete the form below to get in touch.
              </h2>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink/60">
                Whether you have a question, want to explore a potential engagement, or
                simply need more information, give us a little context so we can respond
                appropriately.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-6"
                noValidate={false}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-sans text-[0.85rem] font-medium text-ink/70">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      className={`mt-2 ${inputClasses()}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-sans text-[0.85rem] font-medium text-ink/70">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      className={`mt-2 ${inputClasses()}`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block font-sans text-[0.85rem] font-medium text-ink/70">
                    Business Name <span className="text-ink/40">(optional)</span>
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    className={`mt-2 ${inputClasses()}`}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-[0.85rem] font-medium text-ink/70">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={`mt-2 ${inputClasses()}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-[0.85rem] font-medium text-ink/70">
                      Phone Number <span className="text-ink/40">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={`mt-2 ${inputClasses()}`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-sans text-[0.85rem] font-medium text-ink/70">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className={`mt-2 ${inputClasses()}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-[0.85rem] font-medium text-ink/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`mt-2 resize-y ${inputClasses()}`}
                  />
                </div>

                <div className="mt-2 flex flex-col items-start gap-4">
                  <button
                    ref={submitButtonRef}
                    type="submit"
                    disabled={submitting}
                    data-cursor-hover
                    className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-ink px-8 font-sans text-[0.95rem] font-medium text-paper transition-colors duration-300 ease-out hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60">
                    {submitting ? (
                      <>
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowIcon className="text-paper" />
                      </>
                    )}
                  </button>
                  <SendFlyAnimation active={submitting} anchorRef={submitButtonRef} />
                  <p className="text-[0.88rem] text-ink/45">
                    We aim to respond to inquiries within one business day.
                  </p>
                </div>
              </form>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-10">
              <div>
                <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  What Happens Next?
                </p>
                <div className="mt-5 flex flex-col gap-6">
                  {nextSteps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="font-display text-sm text-ink/30">
                        {step.number}
                      </span>
                      <div>
                        <p className="font-display text-base text-ink">{step.title}</p>
                        <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/55">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-ink/10 p-7">
                <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Prefer Email?
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
                  You can also reach us directly at:
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  data-cursor-hover
                  className="mt-2 inline-block font-display text-lg text-ink transition-colors hover:text-accent">
                  {siteConfig.email}
                </a>
                <p className="mt-3 text-[0.85rem] text-ink/45">
                  We aim to respond within one business day.
                </p>
              </div>

              <div className="rounded-2xl bg-ink p-7 text-paper">
                <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Looking for a More Detailed Business Review?
                </p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-paper/65">
                  If you&apos;re looking to understand what&apos;s holding back your
                  business performance and where improvements may create the greatest
                  commercial value, our{" "}
                  <strong className="font-semibold text-paper">
                    Free Revenue Assessment
                  </strong>{" "}
                  is a separate starting point.
                </p>
                <div className="mt-6">
                  <Button
                    href={assessmentHref}
                    tone="dark"
                    variant="solid"
                    className="w-full sm:w-auto">
                    Get a Free Revenue Assessment
                  </Button>
                </div>
                <p className="mt-5 text-[0.85rem] text-paper/50">
                  Not sure how to answer the questions or what information you&apos;ll
                  need?
                </p>
                <a
                  href={assessmentHref}
                  data-cursor-hover
                  className="mt-1 inline-block font-sans text-[0.92rem] font-medium text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
                  Schedule a Free Assessment Session
                </a>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
