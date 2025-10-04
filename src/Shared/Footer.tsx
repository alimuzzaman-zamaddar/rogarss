"use client";
import { LogoSvg, MessageSvg } from "@/Components/SvgContainer/SvgContainer";
import Container from "@/Components/commonComponents/Container";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-bg-pink text-black py-8">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
          <div className="text-center lg:text-left">
            <Link href="/faq">
              <p className="footer_text cursor-pointer">FAQ</p>
            </Link>
            <p className="footer_text">Phone:</p>
            <p className="footer_text mb-6">702 609-5915</p>
            <p className="footer_text">Monday, Wednesday</p>
            <p className="footer_text">Friday : 9:00 AM - 5:00 PM</p>
          </div>

          <Link
            href="/"
            className="block w-[100px] mx-auto lg:w-[200px] 2xl:w-[250px] h-[60px] lg:h-[100px] 2xl:h-[150px]"
          >
            <LogoSvg />
          </Link>

          <div className="text-center lg:text-right">
            <p className="footer_text">Address:</p>
            <p className="footer_text">4020 Pecos McLeod,</p>
            <p className="footer_text">Las Vegas, NV 89121</p>
            <div className="bg-white text-primary-black px-6 py-2 lg:py-3 rounded-full cursor-pointer flex mx-auto xl:mx-0 xl:ml-auto items-end justify-end gap-2 w-fit mt-5">
              <MessageSvg />
              <span>Text Us</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-[16px] text-center font-family-gilmer leading-[164%] mt-5 lg:mt-12">
          <p>&copy; 2025 Estevez Aesthetics Medical Spa, Las Vegas, NV.</p>
        </div>
      </Container>
    </footer>
  );
};
