"use client";

import Container from "@/Components/commonComponents/Container";
import { useMemo, useState } from "react";
import image from "../../../../public/Med Spa Louisville KY.png"
import { useRouter } from "next/navigation";
import PackageDetailsModal from "@/Components/Package/PackageDetailsModal";
import { Pkg, useCheckoutPackageMutation, useGetPackagesQuery,  } from "@/redux/slices/shop/packageApi";
import ClinicInfoSection from "@/Components/common/ClinicInfoSection";

const money = (n: number) =>
  n.toLocaleString(undefined, { style: "currency", currency: "USD" });

type CheckoutValues = {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  zip_code: string;
};

export default function PackagesPage() {
  const router = useRouter();
  const { data, isFetching, isError } = useGetPackagesQuery();
  const list = data?.data ?? [];

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [form, setForm] = useState<CheckoutValues>({
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "BD",
    phone: "",
    zip_code: "",
  });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (p: Pkg) =>
        p.package_name.toLowerCase().includes(q) ||
        (p.package_description || "").toLowerCase().includes(q)
    );
  }, [query, list]);

  const total = useMemo(
    () =>
      selected.reduce((sum, id) => {
        const pkg = list.find((p: Pkg) => p.id === id);
        return sum + (pkg?.package_price || 0);
      }, 0),
    [selected, list]
  );

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const [checkoutPackage] = useCheckoutPackageMutation();

  const openCheckoutModal = () => {
    if (selected.length === 0) {
      alert("Please select at least one package.");
      return;
    }
    setOpenCheckout(true);
  };

  const handleBookNowSingle = (id: number) => {
    if (!selected.includes(id)) {
      setSelected((prev) => [...prev, id]);
    }
    setOpenCheckout(true);
  };

  const handleSubmitCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setCheckingOut(true);

      const APP_URL = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;

      const payload = {
        package_ids: selected,
        sub_total_amount: total,
        discount_amount: 0,
        total_amount: total,
        address1: form.address1,
        address2: form.address2 || "",
        city: form.city,
        state: form.state,
        country: form.country,
        phone: form.phone,
        zip_code: form.zip_code,
        success_redirect_url: `${APP_URL}/cart/success?amount=${total}&currency=USD`,
        cancel_redirect_url: `${APP_URL}/cart/cancel?reason=user_canceled`,
      };

      const res = await checkoutPackage(payload).unwrap();
      const url = res?.data;
      if (url) {
        window.location.href = url;
      } else {
        alert("No payment URL returned.");
      }
    } catch (err: any) {
      alert(err?.data?.message || "Checkout failed");
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <Container>
      <ClinicInfoSection
        imageSrc={image}
        openingLines={[
          { value: "Monday – Wednesday" },
          { label: "Friday", value: "9:00 AM – 5:00 PM" },
        ]}
        contact={{
          phone: "(702) 609-5915",
          email: "info@estevezaesthetics.com",
          address: "4020 Pecos McLeod, Las Vegas, NV 89121",
        }}
      />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-family-gloock text-3xl md:text-4xl mb-6">
          Packages
        </h1>
        <div className="mb-5">
          <div className="flex items-center gap-3 border border-neutral-200 bg-white px-4 py-3">
            <span className="text-neutral-400">🔍</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search service"
              className="flex-1 outline-none"
            />
          </div>
        </div>
        <div className="space-y-4">
          {isFetching && (
            <div className="border bg-white p-6">Loading packages…</div>
          )}
          {isError && (
            <div className="border bg-white p-6 text-red-600">
              Failed to load packages.
            </div>
          )}
          {!isFetching &&
            !isError &&
            filtered.map((pkg: Pkg) => {
              const isSelected = selected.includes(pkg.id);
              return (
                <div
                  key={pkg.id}
                  className="bg-white border border-neutral-200 px-5 sm:px-6 py-5 grid grid-cols-12 items-center"
                >
                  <div className="col-span-12 md:col-span-4">
                    <p className="font-medium">{pkg.package_name}</p>
                  </div>

 
                  <div className="hidden md:block md:col-span-4 text-neutral-500">
                    Expires In 180 Days from purchase
                  </div>

                  <div className="col-span-6 md:col-span-2">
                    <button
                      onClick={() => setDetailsId(pkg.id)}
                      className="text-[#C98575] hover:underline"
                    >
                      View Details
                    </button>
                  </div>

                  <div className="col-span-3 md:col-span-1 font-semibold text-right">
                    {money(pkg.package_price)}
                  </div>

                  <div className="col-span-3 md:col-span-1 flex items-center justify-end gap-2">
                    <span className="hidden sm:block">
                      {isSelected ? "Selected" : "Select"}
                    </span>
                    <button
                      onClick={() => toggleSelect(pkg.id)}
                      aria-label="Toggle select"
                      className={[
                        "h-5 w-5 rounded-full border flex items-center justify-center",
                        isSelected ? "border-black" : "border-neutral-400",
                      ].join(" ")}
                    >
                      {isSelected ? (
                        <span className="h-2.5 w-2.5 rounded-full bg-black" />
                      ) : null}
                    </button>
                  </div>
                  <div className="col-span-12 mt-4 md:hidden">
                    <button
                      onClick={() => handleBookNowSingle(pkg.id)}
                      className="px-4 py-2 border border-neutral-300"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-lg">
            Total: <b>{money(total)}</b>
            <span className="ml-3 text-neutral-500">
              ({selected.length} selected)
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={openCheckoutModal}
              disabled={selected.length === 0}
              className={[
                "px-5 py-2 border border-neutral-300",
                selected.length === 0 ? "opacity-50 cursor-not-allowed" : "",
              ].join(" ")}
            >
              Book selected
            </button>
          </div>
        </div>
      </section>

      <PackageDetailsModal
        open={!!detailsId}
        onClose={() => setDetailsId(null)}
        packageId={detailsId}
      />

      {openCheckout && (
        <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 className="text-lg font-semibold">Checkout</h3>
              <button
                onClick={() => setOpenCheckout(false)}
                className="h-9 w-9 rounded-full border border-neutral-300"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmitCheckout} className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1">Address Line 1</label>
                  <input
                    value={form.address1}
                    onChange={(e) =>
                      setForm({ ...form, address1: e.target.value })
                    }
                    required
                    className="w-full border border-neutral-300 px-3 py-2"
                    placeholder="Street address"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Address Line 2</label>
                  <input
                    value={form.address2}
                    onChange={(e) =>
                      setForm({ ...form, address2: e.target.value })
                    }
                    className="w-full border border-neutral-300 px-3 py-2"
                    placeholder="Apartment, suite, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">City</label>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    required
                    className="w-full border border-neutral-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">State</label>
                  <input
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    required
                    className="w-full border border-neutral-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Country</label>
                  <input
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, country: e.target.value })
                    }
                    required
                    className="w-full border border-neutral-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Zip code</label>
                  <input
                    value={form.zip_code}
                    onChange={(e) =>
                      setForm({ ...form, zip_code: e.target.value })
                    }
                    required
                    className="w-full border border-neutral-300 px-3 py-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm mb-1">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                    className="w-full border border-neutral-300 px-3 py-2"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-lg">
                  Total: <b>{money(total)}</b>
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenCheckout(false)}
                    className="px-5 py-2 border border-neutral-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={checkingOut}
                    className="px-5 py-2 border border-[#E0E0E0] bg-white hover:bg-[#F2DED9] transition disabled:opacity-60"
                  >
                    {checkingOut ? "Processing…" : "Pay now"}
                  </button>
                </div>
              </div>

              <p className="text-xs text-neutral-500 mt-3">
                Selected: {selected.length} package(s)
              </p>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}
