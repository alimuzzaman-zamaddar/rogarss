import Image from "next/image";
import social from "../../../assets/service/social.png";
import Container from "@/Components/commonComponents/Container";
import {
  FacebookSvg,
  InstagramSvg,
  YoutubeSvg,
} from "@/Components/SvgContainer/SvgContainer";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

const icons = [
  {
    svg: FacebookSvg,
  },
  {
    svg: InstagramSvg,
  },
  {
    svg: YoutubeSvg,
  },
];

export const SocialMediaSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${social.src})` }}
      className="py-14 lg:py-22 bg-no-repeat bg-center bg-cover flex justify-center items-center"
    >
      <Container>
        <div data-aos="fade-up">
          <Heading
            data-aos="fade-up"
            Variant="h3"
            Txt="Share your Success with Us!"
            className="section_title !text-white text-center !mb-3 lg:!mb-4"
          />
          <Paragraph
            data-aos="fade-up"
            Txt="Follow us on these social channels to stay up-to-date with all of our Sparkle!"
            className="section_description !text-white text-center mb-10"
          />
        </div>

        <div className="flex justify-center gap-6">
          {icons.map((icon, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-black/10 backdrop-blur-[23.12px] p-4 lg:p-8 3xl:p-15 cursor-pointer"
            >
              {<icon.svg />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
