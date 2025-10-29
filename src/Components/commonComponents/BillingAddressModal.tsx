"use client";

import { useEffect, useRef, useState } from "react";

type SummaryLine = { label: string; value: string; bold?: boolean };

export type BillingValues = {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: BillingValues) => Promise<void> | void;

  /** Summary data shown on top */
  summaryTitle?: string;
  summary: SummaryLine[];

  /** Optional: show loading on submit button */
  submitting?: boolean;
};

export default function BillingAddressModal({
  open,
  onClose,
  onSubmit,
  summaryTitle = "SUMMARY",
  summary,
  submitting = false,
}: Props) {
  const [form, setForm] = useState<BillingValues>({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, onClose]);

  if (!open) return null;

  const handleChange =
    (key: keyof BillingValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40"
      aria-modal="true"
      role="dialog"
    >
      {/* Panel */}
      <div
        ref={dialogRef}
        className="
          w-full max-w-3xl
          bg-white shadow-xl
          rounded-t-2xl sm:rounded-2xl
          overflow-hidden
          /* Mobile: take most of the height; desktop: auto with max */
          max-h-[90vh] sm:max-h-[85vh]
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
          <h2 className="text-base sm:text-lg font-semibold">
            Billing Address
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="h-9 w-9 rounded-full border border-neutral-300 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="overflow-y-auto">
          {/* Summary */}
          <section className="px-4 sm:px-6 pt-4">
            <h3 className="text-xs sm:text-sm font-semibold tracking-[2px] mb-3">
              {summaryTitle}
            </h3>

            <div className="w-full border border-neutral-200">
              <div className="grid grid-cols-12 text-xs sm:text-sm bg-neutral-50 px-3 sm:px-4 py-2 border-b">
                <div className="col-span-9">Disciption</div>
                <div className="col-span-3 text-right">Amount</div>
              </div>

              {summary.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 px-3 sm:px-4 py-3 border-b last:border-b-0 text-[13px] sm:text-sm"
                >
                  <div
                    className={`col-span-9 ${row.bold ? "font-semibold" : ""}`}
                  >
                    {row.label}
                  </div>
                  <div
                    className={`col-span-3 text-right ${
                      row.bold ? "font-semibold" : ""
                    }`}
                  >
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-4 sm:px-6 py-5">
            <h3 className="text-lg font-semibold mb-4">Billing&nbsp;Address</h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Address Line 1</label>
                <input
                  value={form.address1}
                  onChange={handleChange("address1")}
                  placeholder="Street address, PO box company name"
                  className="w-full border border-neutral-300 px-3 py-2 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Address Line 2</label>
                <input
                  value={form.address2}
                  onChange={handleChange("address2")}
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  className="w-full border border-neutral-300 px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">City</label>
                <input
                  value={form.city}
                  onChange={handleChange("city")}
                  placeholder="City name"
                  className="w-full border border-neutral-300 px-3 py-2 bg-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1">State</label>
                  <input
                    value={form.state}
                    onChange={handleChange("state")}
                    placeholder="State"
                    className="w-full border border-neutral-300 px-3 py-2 bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Zip code</label>
                  <input
                    value={form.zip}
                    onChange={handleChange("zip")}
                    placeholder="#####"
                    className="w-full border border-neutral-300 px-3 py-2 bg-white"
                    inputMode="numeric"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Country</label>
                <select
                  value={form.country}
                  onChange={handleChange("country")}
                  className="w-full border border-neutral-300 px-3 py-2 bg-white"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Bangladesh</option>
                </select>
              </div>
            </div>

            {/* Footer actions */}
            <div className="flex items-center justify-end mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-neutral-300 mr-3"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className={[
                  "relative px-6 sm:px-8 py-2 bg-[#EED4CC] border border-[#EED4CC] text-black",
                  "hover:bg-white transition",
                  submitting ? "opacity-60 cursor-not-allowed" : "",
                ].join(" ")}
              >
                {submitting ? (
                  /* Loader (small spinner) */
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Submitting…
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    Submit
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
