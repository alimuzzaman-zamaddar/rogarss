"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/Components/commonComponents/Container";
import { LogoSvg, MessageSvg } from "@/Components/SvgContainer/SvgContainer";
import { useSystemSettingQuery } from "@/redux/slices/cms/homeSlice";

const imgURL = (p?: string) => {
  if (!p) return "";
  if (p.startsWith("http")) return p;
  const base = process.env.NEXT_PUBLIC_ASSET_URL || "";
  return `${base}/${p}`.replace(/([^:]\/)\/+/g, "$1");
};

export const Footer = () => {
  const { data } = useSystemSettingQuery();
  const s = data?.data;
  const phone = s?.phone || "702 609-5915";
  const opening1 = s?.opening_time_one || "Monday, Wednesday";
  const opening2 = s?.opening_time_two || "Friday : 9:00 AM - 5:00 PM";
  const address = s?.address || "4020 Pecos McLeod, Las Vegas, NV 89121";
  const footerLogo = s?.footer_logo || s?.logo;
  const siteTitle =
    s?.title || "Estevez Aesthetics Medical Spa, Las Vegas, NV.";
  const copyright =
    s?.copyright_text || `© ${new Date().getFullYear()} ${siteTitle}`;

  return (
    <footer className="bg-bg-pink text-black py-8">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
          <div className="w-full text-center lg:text-left">
            <Link href="/faq">
              <p className="footer_text cursor-pointer">FAQ</p>
            </Link>

            <p className="footer_text">Phone:</p>
            <p className="footer_text mb-6">
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="hover:underline"
              >
                {phone}
              </a>
            </p>

            <p className="footer_text">{opening1}</p>
            <p className="footer_text">{opening2}</p>
          </div>

          <div className="w-full ">
            <Link
              href="/"
              className="block w-[100px] mx-auto lg:w-[200px] 2xl:w-[250px] h-[60px] lg:h-[100px] 2xl:h-[150px]"
            >
              {footerLogo ? (
                <Image
                  src={imgURL(footerLogo)}
                  alt={siteTitle}
                  width={250}
                  height={150}
                  className="w-full h-full object-contain"
                  priority
                />
              ) : (
                <LogoSvg />
              )}
            </Link>
          </div>

          <div className="w-full  text-center lg:text-right">
            <p className="footer_text">Address:</p>
            <p className="footer_text">{address}</p>

            <a
              href={`sms:${phone.replace(/[^\d+]/g, "")}`}
              className="bg-white text-primary-black px-6 py-2 lg:py-3 rounded-full cursor-pointer flex mx-auto xl:mx-0 xl:ml-auto items-end justify-end gap-2 w-fit mt-5"
              aria-label="Text us"
            >
              <MessageSvg />
              <span>Text Us</span>
            </a>
          </div>
        </div>

        <div className="text-sm text-[16px] text-center font-family-gilmer leading-[164%] mt-5 lg:mt-12">
          <p>{copyright}</p>
        </div>
      </Container>
    </footer>
  );
};
