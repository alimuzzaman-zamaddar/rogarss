"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function CartCancelPage() {
  const qp = useSearchParams();
  const router = useRouter();

  const reason = qp.get("reason") || ""; 
  const sessionId =
    qp.get("session_id") || qp.get("sid") || qp.get("checkout_session");

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white border border-[#E0E0E0] p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-family-gloock mb-3">
          Payment Canceled
        </h1>

        <p className="text-gray-700">
          Looks like your payment didn’t go through or was canceled.
        </p>
        {reason && (
          <p className="text-gray-600 mt-2">
            Reason: <b>{reason}</b>
          </p>
        )}
        {sessionId && (
          <p className="text-gray-500 text-xs mt-1">
            Session:{" "}
            <code className="bg-gray-100 px-2 py-0.5 rounded">{sessionId}</code>
          </p>
        )}

        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <button
            onClick={() => router.back()}
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Go Back
          </button>
          <Link
            href="/cart"
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Review Cart
          </Link>
          <Link
            href="/products"
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Keep Browsing
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          If funds were held by your bank, they should auto-release shortly.
        </p>
      </div>
    </section>
  );
}
