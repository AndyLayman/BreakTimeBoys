"use client";

import { useState } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full bd bg-paper px-4 py-3 mono text-sm outline-none transition-shadow placeholder:opacity-40 focus:shadow-[4px_4px_0_0_#0a0a0a]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = FORM_ID ? `https://formspree.io/f/${FORM_ID}` : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bd hard p-8">
        <p className="label text-accent mb-3">[ Sent ]</p>
        <h3 className="display text-2xl mb-3">Message received.</h3>
        <p className="mono text-sm leading-relaxed opacity-80">
          Thanks for reaching out — your message is on its way. We&apos;ll be in
          touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bd hard p-6 md:p-8 space-y-6">
      {!endpoint && (
        <p className="mono text-xs leading-relaxed text-accent">
          // Set NEXT_PUBLIC_FORMSPREE_ID to enable submissions (see README).
        </p>
      )}

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New inquiry from breaktimeboys.com" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label block mb-2">
            [ Name ]
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="label block mb-2">
            [ Email ]
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="label block mb-2">
          [ Subject ]
        </label>
        <input id="subject" name="subject" type="text" placeholder="What can we help with?" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="label block mb-2">
          [ Message ]
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project…" className={`${inputClass} resize-none`} />
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-1">
        <button type="submit" disabled={status === "submitting"} className="btn btn-accent disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send Message"} <span aria-hidden>→</span>
        </button>
        {status === "error" && (
          <p className="mono text-xs text-accent">
            // Something went wrong. Try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
