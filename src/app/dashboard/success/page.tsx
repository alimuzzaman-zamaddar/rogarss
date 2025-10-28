"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const qp = useSearchParams();
  const router = useRouter();

  // Stripe often appends session params like ?session_id=...
  const sessionId = qp.get("session_id") || qp.get("sid");
  const amount = qp.get("amount"); // optional if you pass it back

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white border border-[#E0E0E0] p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-family-gloock mb-3">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-700 mb-1">
          Thank you! Your booking is confirmed.
        </p>
        {amount && (
          <p className="text-gray-600 mb-1">
            Paid: <b>${Number(amount).toFixed(2)}</b>
          </p>
        )}
        {sessionId && (
          <p className="text-gray-500 text-sm mb-6">
            Session ID:{" "}
            <code className="bg-gray-100 px-2 py-0.5 rounded">{sessionId}</code>
          </p>
        )}

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Go Home
          </button>
          <Link
            href="/dashboard"
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            View Bookings
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Keep this page for your records. A receipt has been sent to your email
          (if provided).
        </p>
      </div>
    </section>
  );
}
