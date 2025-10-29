"use client";

import { useEffect, useMemo, useState } from "react";
import {
  useGetCategoriesQuery,
  useGetTreatmentsQuery,
  useGetAvailabilityQuery,
  useBookServiceMutation,
  type Category,
  type Treatment,
} from "@/redux/slices/cms/bookingApi";
import ClinicInfoSection from "@/Components/common/ClinicInfoSection";
import image from "../../../public/Med Spa Louisville KY.png"


const currency = (v: string | number) => {
  const n = typeof v === "string" ? Number(v) : v;
  if (Number.isNaN(n)) return "$0.00";
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
};
const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
const fmtYMD = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function Calendar({
  value,
  onChange,
}: {
  value: Date;
  onChange: (d: Date) => void;
}) {
  const [view, setView] = useState<Date>(value);
  useEffect(() => setView(value), [value]);

  const grid = useMemo(() => {
    const first = new Date(view.getFullYear(), view.getMonth(), 1);
    const startDay = first.getDay(); 
    const daysInMonth = new Date(
      view.getFullYear(),
      view.getMonth() + 1,
      0
    ).getDate();

    const cells: { date: Date; currentMonth: boolean }[] = [];


    for (let i = 0; i < startDay; i++) {
      const d = new Date(first);
      d.setDate(first.getDate() - (startDay - i));
      cells.push({ date: d, currentMonth: false });
    }


    for (let i = 1; i <= daysInMonth; i++) {
      cells.push({
        date: new Date(view.getFullYear(), view.getMonth(), i),
        currentMonth: true,
      });
    }

    while (cells.length < 42) {
      const last = cells[cells.length - 1].date;
      const d = new Date(last);
      d.setDate(last.getDate() + 1);
      cells.push({ date: d, currentMonth: d.getMonth() === view.getMonth() });
    }

    return cells;
  }, [view]);

  const sameYMD = (a: Date, b: Date) => fmtYMD(a) === fmtYMD(b);

  return (
    <div className="p-4 border border-[#E0E0E0] bg-white">
      <div className="flex items-center justify-between mb-3">
        <button
          className="px-3 py-1 border border-[#E0E0E0] bg-white"
          onClick={() =>
            setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))
          }
        >
          ‹
        </button>
        <div className="font-family-gloock text-lg">
          {view.toLocaleString(undefined, { month: "long", year: "numeric" })}
        </div>
        <button
          className="px-3 py-1 border border-[#E0E0E0] bg-white"
          onClick={() =>
            setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))
          }
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
          <div key={index} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {grid.map(({ date, currentMonth }, i) => {
          const active = sameYMD(date, value);
          return (
            <button
              key={i}
              onClick={() => onChange(date)}
              className={[
                "py-2 text-sm",
                "border border-[#E0E0E0]",
                currentMonth ? "bg-white" : "bg-gray-50 text-gray-400",
                active ? "ring-2 ring-black" : "",
                "hover:bg-bg-pink/30",
              ].join(" ")}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SummaryAndBilling({
  selectedTreatment,
  chosenTime,
  chosenDate,
  booking,
  onConfirm,
}: {
  selectedTreatment: Treatment | null;
  chosenTime: string | null;
  chosenDate: Date | null;
  booking: boolean;
  onConfirm: (billing: {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone?: string;
  }) => void;
}) {
  const [billing, setBilling] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    phone: "",
  });

  const subtotal = selectedTreatment ? Number(selectedTreatment.price) : 0;

  return (
    <div className="border border-[#E0E0E0] bg-white p-6">
      <h3 className="text-sm font-semibold tracking-[2px] mb-4">SUMMARY</h3>

      <div className="divide-y">
        <div className="flex justify-between py-3">
          <div>
            <div className="text-sm text-gray-600">Description</div>
            <div className="text-sm">
              {selectedTreatment?.treatment_name || "—"}
            </div>
            <div className="text-xs text-gray-500">
              {chosenDate ? chosenDate.toDateString() : "Pick a date"}{" "}
              {chosenTime ? `• ${chosenTime}` : ""}
            </div>
          </div>
          <div className="text-right text-sm">
            {selectedTreatment ? currency(selectedTreatment.price) : "—"}
          </div>
        </div>

        <div className="flex justify-between py-3">
          <div className="text-sm">Sub - Total</div>
          <div className="text-sm">{currency(subtotal)}</div>
        </div>

        <div className="flex justify-between py-3 font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-sm">{currency(subtotal)}</div>
        </div>
      </div>

      <h3 className="text-xl font-family-gloock mt-8 mb-4">Billing Address</h3>

      <div className="space-y-3">
        <input
          placeholder="Street address, PO box company name"
          className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
          value={billing.address1}
          onChange={(e) =>
            setBilling((s) => ({ ...s, address1: e.target.value }))
          }
        />
        <input
          placeholder="Apartment, suite, unit, building, floor, etc."
          className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
          value={billing.address2}
          onChange={(e) =>
            setBilling((s) => ({ ...s, address2: e.target.value }))
          }
        />
        <input
          placeholder="City name"
          className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
          value={billing.city}
          onChange={(e) => setBilling((s) => ({ ...s, city: e.target.value }))}
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="State"
            className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
            value={billing.state}
            onChange={(e) =>
              setBilling((s) => ({ ...s, state: e.target.value }))
            }
          />
          <input
            placeholder="Zip code"
            className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
            value={billing.zip}
            onChange={(e) => setBilling((s) => ({ ...s, zip: e.target.value }))}
          />
        </div>
        <input
          placeholder="Country (e.g., BD or United States)"
          className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
          value={billing.country}
          onChange={(e) =>
            setBilling((s) => ({ ...s, country: e.target.value }))
          }
        />
        <input
          placeholder="Phone"
          className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
          value={billing.phone}
          onChange={(e) => setBilling((s) => ({ ...s, phone: e.target.value }))}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={() => onConfirm(billing)}
          disabled={booking}
          className={`px-6 py-3 border border-[#E0E0E0] bg-white hover:bg-[#e9cfc8] transition flex items-center justify-center gap-2 ${
            booking ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {booking && (
            <span className="w-4 h-4 border-2 border-gray-400 border-t-black rounded-full animate-spin"></span>
          )}
          {booking ? "Booking…" : "Book this slot"}
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const { data: catRes } = useGetCategoriesQuery();
  const [search, setSearch] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const categories = (catRes?.data || catRes || []).filter((c: any) =>
    (c?.name || "").toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!activeCategoryId && categories.length) {
      setActiveCategoryId(categories[0].id);
    }
  }, [categories, activeCategoryId]);

  const { data: trtRes } = useGetTreatmentsQuery(activeCategoryId ?? 0, {
    skip: !activeCategoryId,
  });
  const treatments = trtRes?.data || [];
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(
    null
  );

  const [date, setDate] = useState<Date>(new Date());
  const ymd = fmtYMD(date);

  const { data: slotRes, isFetching: loadingSlots } = useGetAvailabilityQuery(
    selectedTreatment
      ? { treatmentId: selectedTreatment.id, date: ymd }
      : { treatmentId: 0, date: ymd },
    { skip: !selectedTreatment }
  );

  console.log(
    selectedTreatment
      ? { treatmentId: selectedTreatment.id, date: ymd }
      : { treatmentId: 0, date: ymd },
    { skip: !selectedTreatment }
  );

  const availabilityId = slotRes?.data?.availability_id ?? 0;
  const slots = slotRes?.data?.time_slots ?? [];
  console.log(slotRes);

  const [selectedSlot, setSelectedSlot] = useState<null | {
    id: number;
    time: string;
    pivot?: { availability_id: number; time_slot_id: number; status: string };
  }>(null);
  const [time, setTime] = useState<string | null>(null);

  const [bookService, { isLoading: booking }] = useBookServiceMutation();

  const handleConfirm = async (billing: any) => {
    if (!selectedTreatment || !time || !date || !selectedSlot) {
      alert("Please select treatment, date and time first.");
      return;
    }

    try {
      const subTotal = Number(selectedTreatment.price) || 0;
      const payload = {
        discount_amount: null,
        sub_total_amount: subTotal,
        total_amount: subTotal,
        coupon_code: null,
        address1: billing.address1,
        address2: billing.address2 || "",
        city: billing.city,
        state: billing.state,
        country: billing.country,
        phone: billing.phone || "0000000000",
        zip_code: billing.zip,
        cancel_redirect_url: `${origin}/booking/cancel`,
        success_redirect_url: `${origin}/booking/success`,
        services: [
          {
            treatment_id: selectedTreatment.id,
            availability_id:
              selectedSlot?.pivot?.availability_id || availabilityId,
            time_slot_id: selectedSlot?.pivot?.time_slot_id || selectedSlot.id,
            duration: selectedTreatment.duration || 60,
            details: time,
          },
        ],
      } as const;

      const res = await bookService(payload).unwrap();

      const checkoutUrl =
        typeof res?.data === "string" ? res.data : (res as any)?.data?.url;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error("Unexpected response shape:", res);
        alert("Could not open checkout. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      const msg =
        err?.data?.message ||
        err?.error ||
        "Failed to create booking. Please try again.";
      alert(msg);
    }
  };

  return (
    <section className="">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 border border-[#E0E0E0] bg-white p-4 ">
          <div className="mb-3">
            <input
              placeholder="Search"
              className="w-full border border-[#E0E0E0] bg-white px-3 py-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            {categories.map((c: Category) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategoryId(c.id);
                  setSelectedTreatment(null);
                  setTime(null);
                  setSelectedSlot(null);
                }}
                className={`w-full text-left px-3 py-2 border border-[#E0E0E0] ${
                  activeCategoryId === c.id ? "bg-[#F2DED9]" : "bg-white"
                }`}
              >
                {(c.name || "").toLowerCase()}
              </button>
            ))}
          </div>
        </aside>
        <main className="lg:col-span-6">
          <div className="bg-white border border-[#E0E0E0] p-4">
            {(treatments as Treatment[]).map((t) => (
              <div
                key={t.id}
                className="flex items-start justify-between py-5 border-b border-b-[#E0E0E0]"
              >
                <div>
                  <h3 className="text-lg font-family-gloock">
                    {t.treatment_name}
                  </h3>
                  {t.treatment_description && (
                    <p className="text-sm text-gray-600 mt-1 max-w-[42ch]">
                      {t.treatment_description}
                    </p>
                  )}
                  <div className="text-xs text-gray-500 mt-2">
                    {t.duration}min
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{currency(t.price)}</div>
                  <button
                    className={`mt-3 border border-[#E0E0E0] px-4 py-1 ${
                      selectedTreatment?.id === t.id
                        ? "bg-black text-white"
                        : "bg-white hover:bg-[#F2DED9]"
                    }`}
                    onClick={() => {
                      setSelectedTreatment(t);
                      setTime(null);
                      setSelectedSlot(null);
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-[#E0E0E0] p-4 mt-6">
            <h3 className="text-lg font-family-gloock mb-3">
              Select date and time
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Calendar value={date} onChange={setDate} />
              <div className="border border-[#E0E0E0] bg-white p-4">
                <div className="font-family-gloock text-lg mb-3">
                  {date.toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </div>

                {!selectedTreatment ? (
                  <div className="text-sm text-gray-500">
                    Select a treatment to see available time slots.
                  </div>
                ) : loadingSlots ? (
                  <div className="text-sm">Loading slots…</div>
                ) : slots.length === 0 ? (
                  <div className="text-sm">No slots available.</div>
                ) : (
                  <div className="space-y-2">
                    {slots.map((s, idx) => {
                      const available =
                        s?.pivot?.status?.toLowerCase?.() !== "unavailable";
                      const selected = time === s.time;
                      return (
                        <label
                          key={s.id ?? idx}
                          className={`flex items-center justify-between border border-[#E0E0E0] px-4 py-2 cursor-pointer ${
                            selected ? "bg-black text-white" : "bg-white"
                          } ${
                            !available ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <span>{s.time}</span>
                          <input
                            type="radio"
                            name="timeslot"
                            className="hidden"
                            checked={selected}
                            onChange={() => {
                              if (!available) return;
                              setTime(s.time);
                              setSelectedSlot(s);
                            }}
                            disabled={!available}
                          />
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <aside className="lg:col-span-3">
          <SummaryAndBilling
            selectedTreatment={selectedTreatment}
            chosenDate={date}
            chosenTime={time}
            onConfirm={handleConfirm}
            booking={booking}
          />
        </aside>
      </div>
    </section>
  );
}
