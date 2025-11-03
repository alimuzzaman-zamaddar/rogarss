"use client";

import Container from "@/Components/commonComponents/Container";
import Link from "next/link";

import { LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Image from "next/image";

 const sectionBars = [
   { id: 1, path: "/botox", label: "Botox" },
   { id: 2, path: "/dysport", label: "Dysport" },
   { id: 3, path: "/dermal-fillers", label: "Dermal Fillers" },
   {
     id: 4,
     path: "/morpheus8-microneedling-skin-tightening",
     label: "Morpheus8",
   },
   { id: 5, path: "/tetra-c02-laser", label: "Tetra CO2" },
   { id: 7, path: "/clear-lift", label: "ClearLift" },
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
          <div
            data-aos="flip-left"
            data-aos-duration="3000"
            className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base"
          >
            {sectionBars?.map((bar, index) => (
              <Link
                key={bar?.id}
                href={`${bar?.path}`}
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
      <section className="relative h-screen w-full">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="absolute inset-0"
        >
          <Image
            src="https://i.ibb.co/MkV85mmq/woman-walks-streets-chicago.jpg"
            alt="Background Image"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
        </div>
        <Container>
          <div
            data-aos="flip-left"
            data-aos-duration="3000"
            className="absolute left-0 top-0 h-full w-full md:w-2/6 bg-secondary-black/70 bg-blur-2xl flex items-center"
          >
            <div className="p-8 md:p-16">
              <h5 className="section_sub-title !text-white">
                Pdo thread lifts in Lubbock
              </h5>

              <h2 data-aos="fade-up" className="card_title_black !text-white">
                Morpheus8
              </h2>
              <p data-aos="fade-up" className="card_description !text-white">
                Reveal smoother, firmer, and more youthful-looking skin with
                Morpheus8 at Estevez Aesthetics. Our skilled providers use this
                cutting-edge treatment to help you regain confidence in your
                skin without surgery.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
