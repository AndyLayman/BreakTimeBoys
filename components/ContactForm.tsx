"use client";

import { useState } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full bg-transparent border-b border-[#dcdcdc] py-3 text-base outline-none focus:border-ink transition-colors placeholder:text-[#9a9a9a]";

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
      <div className="border border-[#ececec] rounded-sm p-10">
        <h3 className="display font-bold text-2xl mb-3">Message sent.</h3>
        <p className="muted text-sm leading-relaxed">
          Thanks for reaching out — your message is on its way. We&apos;ll be in
          touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      {!endpoint && (
        <p className="text-xs text-[#c0392b] leading-relaxed">
          Heads up: set <code>NEXT_PUBLIC_FORMSPREE_ID</code> in your environment
          to enable form submissions (see README).
        </p>
      )}

      {/* honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="_subject"
        value="New inquiry from breaktimeboys.com"
      />

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow muted block mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow muted block mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="eyebrow muted block mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What can we help with?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow muted block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-solid disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden>→</span>
        </button>
        {status === "error" && (
          <p className="text-sm text-[#c0392b]">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
