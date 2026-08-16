"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "error" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      className="border bg-card p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const phone = String(data.get("phone") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const body = String(data.get("message") ?? "").trim();

        if (!name || !phone || !body) {
          setStatus("error");
          setMessage("Name, phone, and message are required.");
          return;
        }
        if (email && !email.includes("@")) {
          setStatus("error");
          setMessage("Enter a valid email or leave it blank.");
          return;
        }

        setStatus("success");
        setMessage(
          "Captured in this preview only. The form does not send mail yet. Use WhatsApp or a store visit for a real enquiry.",
        );
        form.reset();
      }}
    >
      <h2 className="font-heading text-xl font-medium tracking-[-0.02em]">Write to the floor</h2>
      <FieldGroup className="mt-6">
        <Field data-invalid={status === "error" || undefined}>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={status === "error" || undefined}
          />
          <FieldDescription>Optional.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" name="message" rows={5} required />
        </Field>
        {status === "error" ? <FieldError>{message}</FieldError> : null}
        {status === "success" ? (
          <p role="status" className="text-sm text-primary">
            {message}
          </p>
        ) : null}
        <Button type="submit" variant="highlight" size="xl">
          Send preview message
        </Button>
      </FieldGroup>
    </form>
  );
}
