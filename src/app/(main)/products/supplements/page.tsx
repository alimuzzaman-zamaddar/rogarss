import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import contactImage from "../../../../assets/contact/contact.png";
import bgImg from "../../../../assets/products/brunette-girl-posing-with-flowers.png";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export default function page() {

  return (
    <section>
      <Container>
        <div className="">
          <BannerSection
            bgImages={[bgImg.src, bgImg.src, bgImg.src]}
            heading="Supplements"
            description="Your Guide to Radiant Skin & Timeless Beauty"
          />
        </div>
        {/* Pass the injectableData as props */}
        <div className="">
          <section className="section_padding xl:px-6">
            {/* Title and Subtitle */}
            <div className="text-center mb-25">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-[62px] font-normal not-italic leading-[164%] tracking-[2.48px] font-family-gloock text-pink-border mb-2.5">
                Supplements
              </h2>
              <p className="text-xl xl:text-[24px] font-normal not-italic leading-[164%] text-sub-text capitalize font-family-gilmer ">
                Your Guide To Radiant Skin & Timeless Beauty
              </p>
            </div>

            {/* Categories Section */}
            <div className="flex justify-center items-center">
              <div className="border-r border-l border-alt-border">
                <div
                  data-aos="fade-up"
                  className="flex flex-col justify-center items-center p-10 "
                >
                  <h3 className="xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-normal not-italic leading-[132%] tracking-[1.6px] capitalize font-family-gloock text-primary-black text-center mb-2 lg:mb-7 xl:mb-10">
                    Brightening Serum
                  </h3>
                  <Link
                    href={"#"}
                    className="mt-4 text-base lg:text-xl xl:text-[24px] font-normal not-italic leading-[164%] capitalize text-sub-text text-center font-family-gilmer flex items-center gap-1 xl:gap-3"
                  >
                    Learn More
                    <span>
                      <IoArrowForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <DynamicContactUs image={contactImage} />.
      </Container>
    </section>
  );
}
