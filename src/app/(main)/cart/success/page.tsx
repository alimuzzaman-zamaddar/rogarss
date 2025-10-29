"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function CartSuccessPage() {
  const qp = useSearchParams();
  const router = useRouter();

  const sessionId =
    qp.get("session_id") || qp.get("sid") || qp.get("checkout_session");
  const amount = qp.get("amount"); 
  const currency = (qp.get("currency") || "USD").toUpperCase();
  const email = qp.get("email") || "";
  const orderId = qp.get("order_id") || qp.get("oid") || "";

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white border border-[#E0E0E0] p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-family-gloock mb-3">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-700">
          Thank you—your order has been received and is now being processed.
        </p>

        <div className="mt-4 space-y-1 text-sm text-gray-700">
          {amount && (
            <p>
              Paid:{" "}
              <b>
                {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency,
                }).format(Number(amount))}
              </b>
            </p>
          )}
          {email && (
            <p>
              Receipt will be sent to: <b>{email}</b>
            </p>
          )}
          {orderId && (
            <p>
              Order ID: <b>{orderId}</b>
            </p>
          )}
          {sessionId && (
            <p className="text-gray-500 text-xs">
              Session:{" "}
              <code className="bg-gray-100 px-2 py-0.5 rounded">
                {sessionId}
              </code>
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <button
            onClick={() => router.push("/")}
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Go Home
          </button>
          <Link
            href="/cart"
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            View Cart
          </Link>
          <Link
            href="/product"
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Continue Shopping
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Keep this page for your records. If you closed the tab accidentally, a
          receipt link is in your email (if provided).
        </p>
      </div>
    </section>
  );
}
