"use client";

import Container from "@/Components/commonComponents/Container";
import { BoltSvg } from "@/Components/SvgContainer/SvgContainer";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useGetProductsQuery } from "@/redux/slices/shop/productApi";
import { useAddCartMutation } from "@/redux/slices/shop/cartApi";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const imgURL = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_ASSET_URL || "";
  return `${base}/${path}`.replace(/([^:]\/)\/+/g, "$1");
};

const priceUSD = (v: number) =>
  v.toLocaleString(undefined, { style: "currency", currency: "USD" });

export default function ProductApiPage() {
  const searchParams = useSearchParams();
  const wantedId = Number(searchParams.get("id") || 0);

  const { data, isFetching, isError } = useGetProductsQuery();
  const list = data?.data ?? [];
  const router = useRouter();
  const product = useMemo(() => {
    if (!list.length) return undefined;
    if (wantedId) return list.find((p) => p.id === wantedId) || list[0];
    return list[0];
  }, [list, wantedId]);

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "benefit">("desc");
  const [addCart, { isLoading: adding }] = useAddCartMutation();

  const benefitsText =
    "Deep hydration and improved elasticity\nBrightens and evens look of tone\nSafe for delicate eye area\nNo needles, no downtime\nPerfect pre-event glow";

  const onAdd = async () => {
    if (!product || qty < 1) return;
    try {
      await addCart({ product_id: product.id, quantity: qty }).unwrap();
      router.push("/cart");
      toast.success("Added to cart.");
    } catch (e: any) {
      toast.error(e?.data?.message || "Failed to add to cart");
            router.push("/auth/login");
    }
  };

  if (isFetching) {
    return (
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-16 mt-30 xl:mt-40">
          <div className="h-6 w-40 mb-6 bg-neutral-200 animate-pulse" />
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-6 h-[50vh] bg-neutral-100 animate-pulse" />
            <div className="xl:col-span-6 space-y-3">
              <div className="h-6 w-3/4 bg-neutral-200 animate-pulse" />
              <div className="h-4 w-full bg-neutral-100 animate-pulse" />
              <div className="h-4 w-5/6 bg-neutral-100 animate-pulse" />
              <div className="h-10 w-40 bg-neutral-200 animate-pulse" />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (isError || !product) {
    return (
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-16 mt-30 xl:mt-40">
          <p className="text-red-600">Unable to load product.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <section className=" px-4 sm:px-6 lg:px-8 xl:px-10 py-6 lg:py-10 mt-30 xl:mt-40">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 xl:gap-6 items-center border border-neutral-200 bg-white">
          <div className="xl:col-span-6">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] xl:aspect-[4/3]">
              <Image
                src={imgURL(product.image)}
                alt={product.product_name}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="xl:col-span-6 p-4 sm:p-6 lg:p-8 xl:p-10">
            <h1 className="font-family-gloock text-2xl md:text-3xl xl:text-4xl leading-snug">
              {product.product_name}
            </h1>

            <p className="mt-4 md:mt-6 text-neutral-600 leading-relaxed text-sm md:text-base">
              {product.short_description}
            </p>

            <div className="mt-5 md:mt-8 text-2xl md:text-3xl xl:text-3xl font-semibold">
              {priceUSD((product.price || 0) * Math.max(0, qty))}
            </div>

            <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center self-stretch sm:self-auto">
                <button
                  aria-label="Decrease quantity"
                  className="h-11 w-11 md:h-12 md:w-12 border border-neutral-300 text-xl"
                  onClick={() => setQty((q) => Math.max(0, q - 1))}
                >
                  –
                </button>
                <div className="h-11 w-16 md:h-12 md:w-20 border border-neutral-300 flex items-center justify-center text-base md:text-lg">
                  {String(qty).padStart(2, "0")}
                </div>
                <button
                  aria-label="Increase quantity"
                  className="h-11 w-11 md:h-12 md:w-12 border border-neutral-300 text-xl"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button
                onClick={onAdd}
                disabled={qty < 1 || adding}
                className={[
                  "h-11 md:h-12 px-6 md:px-8",
                  "bg-[#EED4CC] text-black font-semibold tracking-wide",
                  "border border-[#EED4CC]",
                  "transition-colors",
                  "w-full sm:w-auto",
                  qty < 1 || adding
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-white",
                ].join(" ")}
              >
                {adding ? "Adding…" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-6 border border-neutral-200 bg-white">
          <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("desc")}
              className={[
                "px-3 sm:px-4 py-2 sm:py-3 text-sm border whitespace-nowrap",
                activeTab === "desc"
                  ? "bg-white border-neutral-300"
                  : "bg-neutral-100 border-transparent",
              ].join(" ")}
            >
              More Description
            </button>
            <button
              onClick={() => setActiveTab("benefit")}
              className={[
                "px-3 sm:px-4 py-2 sm:py-3 text-sm border whitespace-nowrap",
                activeTab === "benefit"
                  ? "bg-white border-neutral-300"
                  : "bg-neutral-100 border-transparent",
              ].join(" ")}
            >
              Benefit
            </button>
          </div>

          <div className="p-4 sm:p-6 pt-2">
            {activeTab === "desc" ? (
              <p className="text-neutral-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {product.long_description}
              </p>
            ) : (
              <div className="flex flex-col gap-2 sm:gap-3">
                {benefitsText.split("\n").map((line, index) => (
                  <p
                    key={index}
                    className="text-neutral-700 leading-relaxed flex items-start gap-2 text-sm md:text-base"
                  >
                    <span className="mt-1 shrink-0">
                      <BoltSvg />
                    </span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
