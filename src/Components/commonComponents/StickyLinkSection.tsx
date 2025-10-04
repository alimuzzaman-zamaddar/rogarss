import React, { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import Container from "./Container";
import Link from "next/link";

interface SectionBar {
  id: string;
  path: string;
  label: string;
}

interface StickySectionProps {
  sectionBars: SectionBar[];
}

const StickyLinkSection: React.FC<StickySectionProps> = ({ sectionBars }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stickySection");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsSticky(rect.top <= 0); // When the section reaches top, set it sticky
      }
    };

    // Listen to scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="stickySection"
      className={`bg-bg-pink py-4 mt-10 3xl:mt-20 ${
        isSticky ? "fixed top-0 w-full z-10 bg-white shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
          {sectionBars?.map(bar => (
            <Link key={bar?.id} href={`#${bar?.path}`} className="link_text">
              {bar?.label}
              <IoArrowForward />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StickyLinkSection;
