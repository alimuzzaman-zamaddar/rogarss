import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

type ReusableSectionCardProps = {
  id: string;
  bgColor?: string;
  title: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
  index?: number;
};

const DynamicTextSection = ({
  id,
  bgColor = "",
  title,
  description,
  buttonText,
  buttonLink,
  titleClassName = "card_title_black",
  descriptionClassName = "card_description",
  buttonClassName = "card_button_black",
}: ReusableSectionCardProps) => {
  return (
    <section className="section_padding">
      <div
        id={id}
        className={`flex justify-center items-center ${bgColor} p-5 xl:py-10 2xl:py-18`}
      >
        <div className="w-full 3xl:w-[80%] flex flex-col justify-center items-center">
          <h2 data-aos="fade-up" className={`${titleClassName} text-center`}>
            {title}
          </h2>

          <div data-aos="fade-up">
            {description.map((desc, index) => (
              <p
                className={`mb-10 ${descriptionClassName} text-center`}
                key={index}
              >
                {desc}
                {index < description.length - 1 && <br />}
              </p>
            ))}
          </div>

          <button>
            <Link
              href={buttonLink}
              className="flex justify-center items-center gap-1"
            >
              <span className={`${buttonClassName} flex items-center gap-1`}>
                {buttonText} <IoArrowForward />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicTextSection;
