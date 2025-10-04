"use client";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/Components/commonComponents/Container";
import { IoArrowDown, IoArrowForward } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

import {
  CartSvg,
  LogoSvg,
  MenuSvg,
} from "@/Components/SvgContainer/SvgContainer";
import { useEffect, useState } from "react";
import DynamicServiceContent from "@/Components/commonComponents/DynamicServiceContent";
import {
  MenuBeforeAfter,
  MenuCategoryData,
  MenuCategoryData1,
  MenuConditionsTreated,
  MenuPatientResources,
} from "@/Components/Data/data";
import Image from "next/image";
import { PopupResponse } from "@/types/api";
import DynamicServiceContentProducts from "@/Components/commonComponents/DynamicServiceContentProducts";
const popupMenu: PopupResponse[] = [
  {
    id: 1,
    label: "About us",
    href: "/contact",
  },
  {
    id: 2,
    label: "Service",
  },
  {
    id: 3,
    label: "Conditions Treated",
  },
  {
    id: 4,
    label: "Patient Resources",
  },
  {
    id: 5,
    label: "Products",
  },
  {
    id: 6,
    label: "Before and After",
  },
  {
    id: 7,
    label: "Contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const aboutData = MenuCategoryData;
  const aboutData1 = MenuCategoryData1;
  const ConditionsTreated = MenuConditionsTreated;
  const PatientResources = MenuPatientResources;
  const beforeAfter = MenuBeforeAfter;
  const isHome = pathname === "/";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Service");
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 116);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${scrolling && isHome && "bg-white text-[#C98575] shadow"}
         ${!scrolling && isHome && "bg-transparent text-white"}
         ${!isHome && "bg-white text-[#C98575] shadow"}
         py-2 3xl:py-5 top-0 left-0 z-50 fixed w-full transition-all duration-300`}
    >
      <Container>
        <div className="w-full relative">
          <div className="flex justify-between items-center">
            {/* Left side - "Book an appointment" */}

            <Link
              href="/book-appointment"
              className="footer_text hidden xl:flex items-center space-x-5 flex-1"
            >
              <span>Book an appointment</span>
              <IoArrowForward />
            </Link>

            {/* Center - Logo */}
            <div className="flex-1 flex xl:justify-center xl:items-center">
              <Link
                href="/"
                className="block w-[100px] lg:w-[120px] 2xl:w-[150px] h-[60px] lg:h-[80px] 2xl:h-[100px]"
              >
                <LogoSvg />
              </Link>
            </div>

            {/* Right side - Contact, Language, Store, Menu */}
            <div className="hidden xl:flex justify-end items-center gap-10 3xl:gap-14 3xl:text-lg flex-1">
              <div>
                <p className="font-family-gilmer font-normal leading-[164%]">
                  702 609-5915
                </p>
                <p className="flex items-center gap-3 font-family-gilmer font-normal leading-[164%]">
                  English <IoArrowForward />
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center font-family-gilmer font-normal">
                  <CartSvg />
                </div>
                <p className="flex items-center gap-3 font-family-gilmer font-normal leading-[164%]">
                  Visit Store
                </p>
              </div>

              <div>
                {/* Menu Button (this toggles between Menu and Close icons) */}
                <p
                  className="flex gap-2 font-family-gilmer leading-[164%] cursor-pointer"
                  onClick={() => {
                    toggleModal();
                    setOpen(!open); // Toggle the open state
                  }}
                >
                  {isModalOpen ? (
                    <RiCloseLargeLine className="text-3xl text-[#C98575]" /> // Show Close Icon
                  ) : (
                    <MenuSvg /> // Show Menu Icon
                  )}
                  <span>Menu</span>
                </p>
              </div>
            </div>

            {/* Mobile menu btn */}
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden w-9 md:w-10 h-8.5 md:h-9.5 cursor-pointer grid place-items-center rounded text-white bg-pink-border"
            >
              <FaBars className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </Container>

      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-[3px] transition-opacity duration-300 xl:hidden z-50 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Mobile Sidebar */}
      <div
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } duration-500 transition-transform fixed top-0 z-[999] left-0 bg-[#fff] text-[#E08D81] p-5 lg:p-7 shadow-lg overflow-y-auto max-h-screen min-h-screen w-[250px] lg:w-[270px] xl:hidden`}
      >
        {/* Logo */}
        <Link href="/" className="block mx-auto w-[150px] h-[100px]">
          <LogoSvg />
        </Link>

        {/* Others */}
        <div className="flex flex-col gap-10 mt-10">
          <div>
            <p className="font-family-gilmer leading-[164%] ">702 609-5915</p>
            <p className="flex items-center gap-3 font-family-gilme leading-[164%]">
              English <IoArrowForward />
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex font-family-gilmer">
              <CartSvg />
            </div>
            <p className="flex items-center gap-3 font-family-gilmer font-normal leading-[164%]">
              Visit Store
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {/* Menu Button (this toggles between Menu and Close icons) */}
            <p
              className="flex gap-2 font-family-gilmer leading-[164%] cursor-pointer"
              onClick={() => {
                toggleModal();
                setOpen(!open); // Toggle the open state
              }}
            >
              {isModalOpen ? (
                <RiCloseLargeLine className="text-3xl text-[#C98575]" />
              ) : (
                <MenuSvg />
              )}
              <span>{isModalOpen ? "Close" : "Menu"}</span>
            </p>
          </div>

          <Link
            href="/book-appointment"
            className="font-family-gilmer leading-[164%] flex items-center gap-3"
          >
            <span>Book an appointment</span>
            <IoArrowForward />
          </Link>
        </div>

        {/* Cancel btn */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 cursor-pointer"
        >
          <RxCross2 className="text-xl !text-pink-border cursor-pointer" />
        </button>
      </div>

      {/* ======================= Modal for Menu ====================== */}
      {isModalOpen && (
        <div
          data-aos="fade-up"
          className="absolute w-screen h-[100vh] top-0 left-0 overflow-y-scroll bg-black z-50"
        >
          <div className="bg-white p-6">
            {/* Modal Content with Tabs */}
            <div>
              <div className="hidden xl:block bg-transparent text-[#C98575] py-4 z-50 w-full transition-all duration-300">
                <div className="w-full relative">
                  <div className="flex justify-between items-center">
                    {/* Left side - "Book an appointment" */}
                    <Link
                      href="/book-appointment"
                      className="footer_text hidden xl:flex items-center space-x-5 flex-1"
                    >
                      <span>Book an appointment</span>
                      <IoArrowForward />
                    </Link>

                    {/* Center - Logo */}
                    <div className="flex-1 flex justify-center items-center">
                      <Link
                        href="/"
                        className="block w-[100px] lg:w-[120px] 2xl:w-[150px] h-[60px] lg:h-[80px] 2xl:h-[100px]"
                      >
                        <LogoSvg />
                      </Link>
                    </div>

                    {/* Right side - Contact, Language, Store, Menu */}
                    <div className="hidden xl:flex justify-end flex-1 items-center gap-10 3xl:gap-14 3xl:text-lg">
                      <div>
                        <p className="font-family-gilmer font-normal leading-[164%]">
                          702 609-5915
                        </p>
                        <p className="flex items-center gap-3 font-family-gilmer font-normal leading-[164%]">
                          English <IoArrowForward />
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-center font-family-gilmer font-normal">
                          <CartSvg />
                        </div>
                        <p className="flex items-center gap-3 font-family-gilmer font-normal leading-[164%]">
                          Visit Store
                        </p>
                      </div>

                      <div>
                        {/* Menu Button (this toggles between Menu and Close icons) */}
                        <p
                          className="flex items-center gap-2 font-family-gilmer leading-[164%] cursor-pointer"
                          onClick={() => {
                            toggleModal();
                            setOpen(!open); // Toggle the open state
                          }}
                        >
                          {isModalOpen ? (
                            <RiCloseLargeLine className="text-3xl" />
                          ) : (
                            <MenuSvg />
                          )}
                          <span>Menu</span>
                        </p>

                        <p className="flex items-center gap-3 font-family-gilmer font-normal leading-[164%]">
                          Las Vegas, NV 89121
                        </p>
                      </div>
                    </div>

                    {/* Mobile menu btn */}
                    <button
                      onClick={() => setOpen(!open)}
                      className="xl:hidden w-9 md:w-10 h-8.5 md:h-9.5 cursor-pointer grid place-items-center rounded text-white bg-pink-border"
                    >
                      <FaBars className="text-xl md:text-2xl" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  gap-6 xl:mt-10 relative">
                <div className="flex justify-end items-end">
                  <p
                    className="cursor-pointer block xl:hidden text-pink-border absolute top-0 right-5"
                    onClick={() => {
                      toggleModal();
                      setOpen(!open);
                    }}
                  >
                    {isModalOpen ? (
                      <RiCloseLargeLine className="text-3xl" />
                    ) : (
                      <MenuSvg />
                    )}
                  </p>
                </div>
                {/* Tab Indicator */}
                <div className="tabs mb-4 flex flex-wrap justify-between bg-white 2xl:flex-row gap-4 xl:gap-8 cursor-pointer">
                  {popupMenu?.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.label === "Contact") {
                          // Redirect to the contact page
                          window.location.href = "/contact";
                        } else if (item.label === "About us") {
                          // Redirect to the contact page
                          window.location.href = "/about";
                        } else if (item.label === "Conditions Treated") {
                          // Redirect to the contact page
                          window.location.href = "/conditionstreated";
                        } else if (item.label === "Patient Resources") {
                          // Redirect to the contact page
                          window.location.href = "/patientresources";
                        } else {
                          setActiveTab(item?.label);
                        }
                      }}
                      className={`flex flex-col  items-center gap-2 tab py-2 px-5 3xl:py-5 font-family-gloock not-italic tracking-[0.48px] leading-[132%] 2xl:text-lg 3xl:text-[24px] text-primary-black cursor-pointer ${
                        activeTab === item?.label && ""
                      }`}
                    >
                      {item?.label}
                      <span>
                        {activeTab === item?.label ? <IoArrowDown /> : ""}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content cursor-pointer">
                  {activeTab === "About us" && <Link href="/contact"></Link>}
                  {activeTab === "Service" && (
                    <div className="w-full">
                      <DynamicServiceContent categories={aboutData1} />
                    </div>
                  )}
                  {activeTab === "Conditions Treated" && (
                    <div className="w-full">
                      <DynamicServiceContent categories={aboutData} />
                    </div>
                  )}
                  {activeTab === "Patient Resources" && (
                    <div className="w-full">
                      <DynamicServiceContent categories={ConditionsTreated} />
                    </div>
                  )}
                  {activeTab === "Products" && (
                    <div className="w-full">
                      <DynamicServiceContentProducts
                        categories={PatientResources}
                      />
                    </div>
                  )}
                  {activeTab === "Before and After" && (
                    <div className="w-full">
                      <div className="service-container grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
                        {beforeAfter.map((category, index) => (
                          <div key={index} className="service-category ">
                            <div className="relative w-full h-[200px] xl:h-[400px]">
                              <Image
                                src={category.image}
                                alt={category.name}
                                className="object-cover"
                                fill
                              />
                            </div>
                            <h2 className="blog_title !text-[#C98575] mt-10 mb-5 flex items-center gap-4">
                              {category.name} <IoArrowForward />
                            </h2>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeTab === "Contact" && (
                    <div className="w-full">
                      <DynamicServiceContent categories={aboutData1} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
