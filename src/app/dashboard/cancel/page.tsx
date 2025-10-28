"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CancelPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4">
      <div className="max-w-xl w-full bg-white border border-[#E0E0E0] p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-family-gloock mb-3">
          Payment Cancelled
        </h1>
        <p className="text-gray-700 mb-6">
          Your checkout was cancelled. You can choose another slot or try again.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => router.back()}
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Go Back
          </button>
          <Link
            href="/booking"
            className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition"
          >
            Choose Another Slot
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          If money was deducted, it will be auto-reversed or visible as a
          pending hold.
        </p>
      </div>
    </section>
  );
}
