"use client";
import Image, { StaticImageData } from "next/image";

type ContactInfo = {
  phone?: string;
  email?: string;
  address?: string;
};

type OpeningLine = { label?: string; value: string };

export default function ClinicInfoSection({
  imageSrc,
  imageAlt = "Clinic image",
  openingTitle = "Opening Time",
  openingLines = [
    { value: "Monday – Wednesday" },
    { label: "Friday", value: "9:00 AM – 5:00 PM" },
  ],
  contactTitle = "Contact",
  contact = {
    phone: "(702) 609-5915",
    email: "info@estevezaesthetics.com",
    address: "4020 Pecos McLeod, Las Vegas, NV 89121",
  },
}: {
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  openingTitle?: string;
  openingLines?: OpeningLine[];
  contactTitle?: string;
  contact?: ContactInfo;
}) {
  return (
    <section className="px-4 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 rounded-[24px] overflow-hidden">
        {/* LEFT: Image */}
        {imageSrc ? (
          <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[460px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>
        ) : (
          // Optional fallback if no image provided
          <div className="bg-neutral-100 flex items-center justify-center aspect-[16/9] lg:aspect-auto lg:min-h-[460px]">
            <p className="text-neutral-500 text-sm">No image available</p>
          </div>
        )}

        {/* RIGHT: Info Card */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          {/* Opening Time */}
          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-family-gloock text-black leading-tight">
              {openingTitle}
            </h3>
            <div className="mt-4 space-y-3">
              {openingLines?.map((line, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-neutral-700 leading-7"
                >
                  {line.label ? (
                    <>
                      <span className="font-medium">{line.label} : </span>
                      {line.value}
                    </>
                  ) : (
                    line.value
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-family-gloock text-black leading-tight">
              {contactTitle}
            </h3>
            <div className="mt-4 space-y-4">
              {contact?.phone && (
                <p className="text-sm sm:text-base text-neutral-700 leading-7">
                  <a
                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                    className="hover:underline"
                  >
                    {contact.phone}
                  </a>
                </p>
              )}
              {contact?.email && (
                <p className="text-sm sm:text-base text-neutral-700 leading-7 break-all">
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
              )}
              {contact?.address && (
                <p className="text-sm sm:text-base text-neutral-700 leading-7">
                  {contact.address}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
