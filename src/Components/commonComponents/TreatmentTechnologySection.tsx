import Link from "next/link";
import Container from "./Container";
import bgImage from "@/assets/cards/bgpink.png";
import { IoArrowForward } from "react-icons/io5";
import { TreatmentTechnologySectionProps } from "@/types/api";

const TreatmentTechnologySection = ({
  title,
  title_des,
  buttonText,
  buttonClassName = "card_button_black",
  buttonLink,
}: TreatmentTechnologySectionProps) => {
  return (
    <Container>
      <div
        className="flex flex-col-reverse lg:flex-row lg:gap-10 2xl:gap-20 p-5 md:p-7 lg:p-10 xl:p-14 2xl:p-25 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        {/* Left */}
        <div className="flex-1">
          <p className="card_description !text-primary-black mb-10">{title_des}</p>
          <button className={buttonClassName}>
            <Link href={buttonLink}>
              <span className="flex items-center gap-1">
                {buttonText}
                <IoArrowForward />
              </span>
            </Link>
          </button>
        </div>

        {/* Right */}
        <div className="flex-1">
          <h5 className="card_title_black">{title}</h5>
        </div>
      </div>
    </Container>
  );
};

export default TreatmentTechnologySection;
