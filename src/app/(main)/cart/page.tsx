"use client";

import Container from "@/Components/commonComponents/Container";
import Image from "next/image";
import { useMemo, useState } from "react";
import BillingAddressModal, {
  type BillingValues,
} from "@/Components/commonComponents/BillingAddressModal";
import {
  useGetCartsQuery,
  useApplyCouponMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useCheckoutMutation,
  type CartRow,
} from "@/redux/slices/shop/cartApi";
import toast from "react-hot-toast";


const priceUSD = (v: number) =>
  v.toLocaleString(undefined, { style: "currency", currency: "USD" });

const imgURL = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_ASSET_URL || "";
  return `${base}/${path}`.replace(/([^:]\/)\/+/g, "$1");
};

export default function CartPage() {

  const { data, isFetching, refetch } = useGetCartsQuery();
  const [applyCoupon, { isLoading: applying }] = useApplyCouponMutation();
  const [updateCart, { isLoading: updating }] = useUpdateCartMutation();
  const [deleteCart, { isLoading: deleting }] = useDeleteCartMutation();
  const [checkout, { isLoading: checkingOut }] = useCheckoutMutation();

  const rows: CartRow[] = data?.data ?? [];


  const [coupon, setCoupon] = useState("");
  const [couponMsg, setCouponMsg] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number>(0);


  const subtotal = useMemo(
    () =>
      rows.reduce(
        (sum, r) => sum + (Number(r.product?.price) || 0) * Number(r.quantity),
        0
      ),
    [rows]
  );
  const total = Math.max(0, subtotal - discountAmount);


  const onQtyChange = async (row: CartRow, next: number) => {
    try {
      await updateCart({
        cart_id: row.id,
        quantity: Math.max(0, next),
      }).unwrap();
      refetch();
    } catch (e: any) {
      toast.error(e?.data?.message || "Failed to update cart");
    }
  };

  const onRemove = async (row: CartRow) => {
    try {
      await deleteCart({ cart_id: row.id }).unwrap();
      refetch();
    } catch (e: any) {
      toast.error(e?.data?.message || "Failed to delete item");
    }
  };

  const onApplyCoupon = async () => {
    if (!coupon.trim()) {
      setCouponMsg("Please enter a coupon code.");
      return;
    }
    try {
      const res = await applyCoupon({
        coupon_code: coupon.trim(),
        sub_total: subtotal,
      }).unwrap();

      const maybeDiscount =
        (res as any)?.data?.discount_amount ??
        (res as any)?.data?.discount ??
        0;

      setDiscountAmount(Number(maybeDiscount) || 0);
      setCouponMsg(res.message || "Coupon applied.");
    } catch (e: any) {
      setDiscountAmount(0);
      setCouponMsg(e?.data?.message || "Invalid coupon.");
    }
  };

  const [openBill, setOpenBill] = useState(false);
  const [submittingBill, setSubmittingBill] = useState(false);

  const summaryLines = [
    ...(rows.length
      ? rows.map((r) => ({
          label: r.product.product_name,
          value: priceUSD(Number(r.product.price) * Number(r.quantity)),
        }))
      : []),
    { label: "Sub - Total", value: priceUSD(subtotal) },
    { label: "Total", value: priceUSD(total), bold: true },
  ];

  const onCheckoutSubmit = async (bill: BillingValues) => {
    setSubmittingBill(true);
    try {
      const payload = {
        total_amount: total,
        sub_total_amount: subtotal,
        discount_amount: discountAmount,
        address1: bill.address1,
        address2: bill.address2 || "",
        city: bill.city,
        state: bill.state,
        country: bill.country === "United States" ? "US" : bill.country, 
        phone: "0000000000", 
        success_redirect_url:
          "https://cdn.dribbble.com/userupload/23085506/file/original-014f9d8aa5827452030d68688d3928cf.jpg?resize=752x564&vertical=center",
        cancel_redirect_url:
          "https://cdn.dribbble.com/userupload/44483901/file/0a0a6e4f2208286443f5b729ba258b39.mp4",
        coupon_code: coupon || null,
        zip_code: bill.zip,
      };

      const res = await checkout(payload).unwrap();
      const url = (res?.data as string) || "";
      if (url) {
        window.location.href = url; 
      } else {
        toast.error("Could not open checkout. Please try again.");
      }
    } catch (e: any) {
      toast.error(e?.data?.message || "Checkout failed");
    } finally {
      setSubmittingBill(false);
    }
  };

  return (
    <Container>
      <section className="px-4 sm:px-6 lg:px-8 py-8 mt-30 xl:mt-40">
        <h1 className="font-family-gloock text-3xl md:text-4xl mb-6">Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="border border-neutral-200 bg-white">
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-neutral-200 text-sm font-semibold text-neutral-700">
                <div className="col-span-7">Product</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-1 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              {isFetching ? (
                <div className="p-6 text-neutral-600">Loading…</div>
              ) : rows.length === 0 ? (
                <div className="p-6 text-neutral-600">Your cart is empty.</div>
              ) : (
                rows.map((row) => {
                  const price = Number(row.product.price) || 0;
                  const qty = Number(row.quantity) || 0;
                  const line = price * qty;

                  return (
                    <div
                      key={row.id}
                      className="flex flex-col xl:flex-row gap-4 px-4 sm:px-6 py-4 border-b border-neutral-200"
                    >
                      <div className="md:col-span-7 flex gap-4">
                        <button
                          onClick={() => onRemove(row)}
                          aria-label="Remove item"
                          className="hidden md:flex h-10 w-10 items-center justify-center border border-neutral-300 rounded-full self-start mt-1 disabled:opacity-60"
                          disabled={deleting}
                          title="Remove"
                        >
                          ×
                        </button>

                        <div className="relative h-16 w-16 md:h-20 md:w-20 border border-neutral-200 shrink-0">
                          <Image
                            src={imgURL(row.product.image)}
                            alt={row.product.product_name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex md:hidden justify-between">
                            <button
                              onClick={() => onRemove(row)}
                              className="h-8 w-8 -ml-1 border border-neutral-300 rounded-full disabled:opacity-60"
                              title="Remove"
                              disabled={deleting}
                            >
                              ×
                            </button>
                          </div>
                          <p className="text-sm sm:text-base font-medium leading-snug">
                            {row.product.product_name}
                          </p>
                        </div>
                      </div>

                      <div className="md:col-span-2 flex md:block items-center justify-between">
                        <span className="md:hidden text-sm text-neutral-500">
                          Price
                        </span>
                        <span className="text-right w-full block">
                          {priceUSD(price)}
                        </span>
                      </div>

                      <div className="md:col-span-1 flex items-center justify-center gap-1">
                        <button
                          className="h-9 w-9 border border-neutral-300 disabled:opacity-60"
                          aria-label="Decrease quantity"
                          onClick={() => onQtyChange(row, Math.max(0, qty - 1))}
                          disabled={updating}
                        >
                          –
                        </button>
                        <input
                          value={qty}
                          onChange={(e) =>
                            onQtyChange(
                              row,
                              Math.max(0, Number(e.target.value) || 0)
                            )
                          }
                          className="h-9 w-12 border border-neutral-300 text-center"
                          inputMode="numeric"
                        />
                        <button
                          className="h-9 w-9  border border-neutral-300 disabled:opacity-60"
                          aria-label="Increase quantity"
                          onClick={() => onQtyChange(row, qty + 1)}
                          disabled={updating}
                        >
                          +
                        </button>
                      </div>

                      <div className="md:col-span-2 text-right">
                        {priceUSD(line)}
                      </div>

                      <div className="md:col-span-12 md:hidden">
                        <div className="mt-3 flex flex-col sm:flex-row gap-2">
                          <input
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="Coupon code"
                            className="flex-1 border border-neutral-300 px-3 py-2"
                          />
                          <button
                            onClick={onApplyCoupon}
                            disabled={applying}
                            className="bg-[#0F1B2A] text-white px-4 py-2 disabled:opacity-60"
                          >
                            {applying ? "Applying…" : "APPLY COUPON"}
                          </button>
                        </div>
                        {couponMsg && (
                          <p className="mt-2 text-sm text-neutral-600">
                            {couponMsg}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })
              )}

              {rows.length > 0 && (
                <div className="hidden md:flex items-center gap-3 px-6 py-4">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="max-w-sm w-full border border-neutral-300 px-3 py-2"
                  />
                  <button
                    onClick={onApplyCoupon}
                    disabled={applying}
                    className="bg-[#0F1B2A] text-white px-5 py-2 disabled:opacity-60"
                  >
                    {applying ? "Applying…" : "APPLY COUPON"}
                  </button>
                  <div className="text-neutral-500 ml-2">
                    {couponMsg ?? "Please enter a coupon code."}
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-neutral-200 bg-white">
              <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-50 font-semibold">
                Cart Totals
              </div>

              <div className="px-6 py-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>{priceUSD(subtotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Discount</span>
                    <span>-{priceUSD(discountAmount)}</span>
                  </div>
                )}

                <hr className="border-neutral-200" />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{priceUSD(total)}</span>
                </div>

                <button
                  onClick={() => setOpenBill(true)}
                  disabled={rows.length === 0 || checkingOut}
                  className={[
                    "mt-4 w-full bg-[#0F1B2A] text-white py-3 tracking-wide",
                    rows.length === 0 || checkingOut
                      ? "opacity-60 cursor-not-allowed"
                      : "",
                  ].join(" ")}
                >
                  {checkingOut ? "Processing…" : "PROCEED TO CHECKOUT"}
                </button>
              </div>
            </div>
          </aside>
        </div>

        <BillingAddressModal
          open={openBill}
          onClose={() => setOpenBill(false)}
          onSubmit={onCheckoutSubmit}
          submitting={submittingBill}
          summary={summaryLines}
        />
      </section>
    </Container>
  );
}
