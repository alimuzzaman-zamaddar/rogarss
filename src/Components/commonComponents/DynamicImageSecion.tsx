import { DynamicImageProps } from "@/types/api";
import Image from "next/image";
import DynamicHairRemoval from "@/Components/commonComponents/DynamicHairRemoval";
import Container from "./Container";

const DynamicImageSection = ({ img, isBox, cardData }: DynamicImageProps) => {
  return (
    <section className={`relative ${isBox ? "3xl:mb-80" : ""}`}>
      <Image
        className="w-full h-[400px] lg:h-[450px] 2xl:h-[90vh] object-cover"
        src={img}
        alt="section image"
        width={1800}
        height={700}
      />
      <div className="h-12 bg-bg-pink w-full"></div>

      {isBox && (
        <Container>
          <div className="3xl:absolute 3xl:-bottom-96 3xl:left-0 3xl:right-0 mx-auto w-fit">
            <DynamicHairRemoval
              title={cardData?.title || "Experience the Beauty of Smooth Skin"}
              sub_title={
                cardData?.subTitle ||
                "Consultation & Preparation at Esteves Aesthetics"
              }
              description={
                cardData?.description ||
                `Every journey begins with a thorough consultation. During your visit, our team will assess your tattoo's size, color, age, and depth, as well as your skin type and medical history. We’ll also outline a treatment plan tailored to your needs and discuss what to expect before, during, and after the procedure—so you feel confident every step of the way.`
              }
              buttonText={cardData?.buttonText || "Book Now"}
              buttonClassName={cardData?.buttonClassName || "card_button_pink"}
            />
          </div>
        </Container>
      )}
    </section>
  );
};

export default DynamicImageSection;
