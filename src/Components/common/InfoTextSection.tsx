import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

type InfoSectionProps = {
  subtitle?: string;
  title: string;
  descriptions: string[];
  buttonText?: string;
  buttonLink?: string;
  buttonVariant?: "pink" | "black";
  center?: boolean; // for alignment (centered vs left-aligned)
};

export default function InfoTextSection({
  subtitle,
  title,
  descriptions,
  buttonText,
  buttonLink,
  buttonVariant = "pink",
  center = true,
}: InfoSectionProps) {
  return (
    <section
      className={`section_padding bg-white ${
        center ? "text-center" : "text-left"
      }`}
    >
      {/* Subtitle */}
      {subtitle && (
        <h5 data-aos="fade-up" className="section_sub-title">
          {subtitle}
        </h5>
      )}

      {/* Title */}
      <h2 data-aos="fade-up" className="card_title_black">
        {title}
      </h2>

      {/* Descriptions */}
      {descriptions?.map((desc, idx) => (
        <p
          data-aos="fade-up"
          key={idx}
          className={`card_description ${center ? "mx-auto" : ""} mb-6`}
        >
          {desc}
        </p>
      ))}

      {/* Button */}
      {buttonText && buttonLink && (
        <div className="mt-10">
          <Link
            href={buttonLink}
            className={`${
              buttonVariant === "pink"
                ? "card_button_pink"
                : "card_button_black"
            } mx-auto w-fit`}
          >
            {buttonText}
            <IoArrowForward />
          </Link>
        </div>
      )}
    </section>
  );
}
