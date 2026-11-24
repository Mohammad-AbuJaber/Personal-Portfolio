"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { profile } from "@/data/profile";
import { SendIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

// GitHub Pages can't run a backend, so messages go through Formspree when
// NEXT_PUBLIC_FORMSPREE_ID is set, and fall back to the visitor's mail app.
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const fieldStyles =
  "w-full rounded-[10px] border border-line-strong bg-bg px-3.5 text-[15px] text-ink placeholder:text-meta transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(response.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4.5 rounded-[20px] border border-line bg-surface p-6 sm:p-8"
    >
      <h3 className="font-display text-xl font-semibold sm:text-[22px]">Send me a message</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" className={`${fieldStyles} h-12`} />
        </Field>
        <Field label="Email">
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={`${fieldStyles} h-12`}
          />
        </Field>
      </div>

      <Field label="Message">
        <textarea
          name="message"
          rows={7}
          required
          placeholder="A role, a project, or just hello"
          className={`${fieldStyles} resize-y py-3`}
        />
      </Field>

      <Button type="submit" disabled={status === "sending"} className="min-h-[52px] text-base disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
        <SendIcon size={16} />
      </Button>

      <p role="status" className="min-h-5 text-sm">
        {status === "sent" && <span className="text-accent">Thanks! Your message is on its way.</span>}
        {status === "error" && (
          <span className="text-literal">
            Something went wrong. You can email me directly at {profile.email}.
          </span>
        )}
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm text-ink-soft">
      {label}
      {children}
    </label>
  );
}
