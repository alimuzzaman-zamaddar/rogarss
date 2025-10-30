"use client";

import { useGetPackageDetailsQuery } from "@/redux/slices/shop/packageApi";


export default function PackageDetailsModal({
  open,
  onClose,
  packageId,
}: {
  open: boolean;
  onClose: () => void;
  packageId: number | null;
}) {
  const { data, isFetching, isError } = useGetPackageDetailsQuery(
    packageId ?? 0,
    {
      skip: !open || !packageId,
    }
  );

  if (!open) return null;

  const details = data?.data;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b">
          <h3 className="text-lg font-semibold">Package details</h3>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-neutral-300"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {isFetching && <p>Loading…</p>}
          {isError && <p className="text-red-600">Failed to load details.</p>}

          {details && (
            <div className="space-y-3">
              <h4 className="text-xl font-medium">{details.package_name}</h4>
              <p className="text-neutral-700">{details.package_description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div className="border p-3">
                  <p className="text-sm text-neutral-500">Price</p>
                  <p className="font-semibold">
                    {details.package_price.toLocaleString(undefined, {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
                <div className="border p-3">
                  <p className="text-sm text-neutral-500">Duration</p>
                  <p className="font-semibold">
                    {details.package_duration} min
                  </p>
                </div>
                <div className="border p-3">
                  <p className="text-sm text-neutral-500">Sessions</p>
                  <p className="font-semibold">{details.package_session}</p>
                </div>
              </div>

              {details.package_session_details && (
                <div className="mt-4">
                  <p className="text-sm text-neutral-500 mb-1">
                    Session details
                  </p>
                  <p className="text-neutral-700">
                    {details.package_session_details}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
