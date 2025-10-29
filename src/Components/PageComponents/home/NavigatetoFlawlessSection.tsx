"use client";

import Container from "@/Components/commonComponents/Container";
import Link from "next/link";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import image1 from "../../../assets/home/Image (2).png"
import { LineSvg } from "@/Components/SvgContainer/SvgContainer";

 const sectionBars = [
  { id: 1, path: "/botox", label: "Botox" },
  { id: 2, path: "/dsport", label: "Dysport" },
  { id: 3, path: "dermal", label: "Dermal Fillers" },
  { id: 4, path: "morpheus8", label: "Morpheus8" },
  { id: 5, path: "plasma", label: "Opus Plasma" },
  { id: 6, path: "tetra", label: "Tetra CO2" },
  { id: 7, path: "botox", label: "ClearLift" },
];

export const NavigatetoFlawlessSection = () => {
  return (
    <div className="section_padding">
      <div>
        <h3
          data-aos="fade-up"
          className="section_title !mb-5 3xl:!mb-7 text-center"
        >
          Navigate to Flawless Skin
        </h3>

        <p
          data-aos="fade-up"
          className="section_description mb-7 xl:mb-10 2xl:mb-12 3xl:mb-20 max-w-[1125px] text-center mx-auto"
        >
          Wondering what treatment will help you achieve your desired look? Why
          not book a free consultation? You can even opt for a cool 3D
          photography session to capture your face and body. This way, you’ll
          get a clear idea of what to expect with some awesome "before" photos
          to kick off your aesthetic journey, and later, "after" photos to track
          your progress. Let’s make your aesthetic goals a reality!
        </p>
      </div>

      <div className="xl:block hidden bg-[#FBFBFB] py-4 mt-10 3xl:mt-20 my-20">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
            {sectionBars?.map((bar, index) => (
              <Link
                key={bar?.id}
                href={`#${bar?.path}`}
                scroll={true}
                className="link_text"
              >
                {bar?.label}
                {index === 0 && <LineSvg />}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <DynamicCardSection
        image={image1}
        title="Morpheus8"
        description="Reveal smoother, firmer, and more youthful-looking skin with Morpheus8 at Estevez Aesthetics. Our skilled providers use this cutting-edge treatment to help you regain confidence in your skin without surgery. "
        buttonText="Learn More"
        sectionSubTitle="Pdo thread lifts in Lubbock"
        buttonClassName="card_button_pink"
        titleClassName="card_title_pink"
        descriptionClassName="card_description"
        buttonLink="#"
        index={1}
      />
    </div>
  );
};
