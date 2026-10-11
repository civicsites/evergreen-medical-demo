"use client";

import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { demoAppointmentDates } from "@/lib/demo-appointment-dates";

const services = [
  { id: "family", label: "Family Medicine" },
  { id: "psych", label: "Psychiatry" },
  { id: "tele", label: "Telehealth Visit" },
] as const;

const visitTypes = [
  { id: "new", label: "New patient consultation (demo)" },
  { id: "follow", label: "Follow-up visit (demo)" },
  { id: "wellness", label: "Annual wellness exam (demo)" },
] as const;

export function AppointmentScheduler() {
  const dates = demoAppointmentDates;
  const [service, setService] = useState<(typeof services)[number]["id"]>("family");
  const [visitType, setVisitType] = useState<(typeof visitTypes)[number]["id"]>("new");
  const [dateId, setDateId] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [demoRef, setDemoRef] = useState("");

  const serviceLabel = services.find((s) => s.id === service)?.label ?? "";
  const visitLabel = visitTypes.find((v) => v.id === visitType)?.label ?? "";
  const dateLabel = dates.find((d) => d.id === dateId)?.label ?? "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dateId) return;
    setDemoRef(`DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
    setConfirmed(true);
  }

  function resetDemo() {
    setConfirmed(false);
    setDateId("");
    setDemoRef("");
  }

  if (confirmed) {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-teal" aria-hidden />
        <h3 className="font-display mt-4 text-2xl font-semibold text-navy">
          Demonstration confirmation
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-muted leading-relaxed">
          This is a simulated booking only. No appointment was saved and no personal
          information was collected.
        </p>
        <dl className="mx-auto mt-6 max-w-md rounded-xl bg-white p-4 text-left text-sm">
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
            <dt className="font-semibold text-navy">Service:</dt>
            <dd>{serviceLabel}</dd>
            <dt className="font-semibold text-navy">Visit type:</dt>
            <dd>{visitLabel}</dd>
            <dt className="font-semibold text-navy">Date:</dt>
            <dd>{dateLabel}</dd>
            <dt className="font-semibold text-navy">Reference:</dt>
            <dd>{demoRef}</dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={resetDemo}
          className="mt-6 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light"
        >
          Try another demo booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8"
      aria-labelledby="scheduler-heading"
    >
      <div className="mb-6 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-950">
        <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
        <p>
          <strong>Interactive demonstration:</strong> Select options below to preview a
          booking flow. Do not enter real names, contact details, or health information.
        </p>
      </div>

      <fieldset className="space-y-4">
        <legend className="font-display text-lg font-semibold text-navy">Select a service</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {services.map((s) => (
            <label
              key={s.id}
              className={`cursor-pointer rounded-xl border-2 p-4 text-sm font-medium transition-colors ${
                service === s.id
                  ? "border-teal bg-teal/5 text-navy"
                  : "border-navy/10 hover:border-teal/40"
              }`}
            >
              <input
                type="radio"
                name="service"
                value={s.id}
                checked={service === s.id}
                onChange={() => setService(s.id)}
                className="sr-only"
              />
              {s.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="font-display text-lg font-semibold text-navy">
          Appointment type
        </legend>
        <div className="space-y-2">
          {visitTypes.map((v) => (
            <label
              key={v.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 text-sm ${
                visitType === v.id
                  ? "border-teal bg-teal/5"
                  : "border-navy/10 hover:border-teal/40"
              }`}
            >
              <input
                type="radio"
                name="visitType"
                value={v.id}
                checked={visitType === v.id}
                onChange={() => setVisitType(v.id)}
                className="h-4 w-4 accent-teal"
              />
              {v.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8 space-y-4">
        <legend className="font-display text-lg font-semibold text-navy">
          Simulated available dates
        </legend>
        <select
          value={dateId}
          onChange={(e) => setDateId(e.target.value)}
          required
          className="w-full rounded-xl border-2 border-navy/10 bg-white px-4 py-3 text-navy focus:border-teal focus:outline-none"
          aria-label="Choose a demonstration appointment date"
        >
          <option value="">Select a date…</option>
          {dates.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </select>
      </fieldset>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-teal py-3.5 text-sm font-semibold text-white hover:bg-teal-light md:w-auto md:px-10"
      >
        Confirm demonstration appointment
      </button>
    </form>
  );
}
