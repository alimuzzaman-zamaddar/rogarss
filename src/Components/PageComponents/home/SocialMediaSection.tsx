"use client";
import social from "../../../assets/service/social.png";
import Container from "@/Components/commonComponents/Container";
import {
  FacebookSvg,
  InstagramSvg,
  LinkedInIcon,
  XIcon,
  YoutubeSvg,
} from "@/Components/SvgContainer/SvgContainer";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import { useSocialMediaQuery } from "@/redux/slices/cms/homeSlice";

type SocialRow = {
  id: number;
  social_media: string; 
  profile_link: string; 
};

const iconMap: Record<string, React.ComponentType<any>> = {
  facebook: FacebookSvg,
  instagram: InstagramSvg,
  youtube: YoutubeSvg,
  twitter: XIcon, 
  x: XIcon,
  linkedin: LinkedInIcon, 
};

export const SocialMediaSection = () => {
  const { data, isLoading } = useSocialMediaQuery();

  const rows: SocialRow[] = Array.isArray(data?.data) ? data!.data : [];

  return (
    <section
      style={{ backgroundImage: `url(${social.src})` }}
      className="py-14 lg:py-22 bg-no-repeat bg-center bg-cover flex justify-center items-center"
      aria-label="Social media links"
    >
      <Container>
        <div data-aos="flip-up">
          <Heading
            data-aos="flip-down"
            Variant="h3"
            Txt="Share your Success with Us!"
            className="section_title !text-white text-center !mb-3 lg:!mb-4"
          />
          <Paragraph
            data-aos="flip-up"
            Txt="Follow us on these social channels to stay up-to-date with all of our Sparkle!"
            className="section_description !text-white text-center mb-10"
          />
        </div>
        {isLoading && (
          <div className="flex justify-center gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-14 h-14 lg:w-20 lg:h-20 rounded bg-white/20 animate-pulse"
              />
            ))}
          </div>
        )}

        {!isLoading && rows.length > 0 && (
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className="flex justify-center gap-6"
          >
            {rows
              .filter((r) => !!r.profile_link)
              .map((r) => {
                const key = r.social_media?.toLowerCase().trim();
                const Icon = iconMap[key];
                if (!Icon) return null;

                return (
                  <a
                    key={r.id}
                    href={r.profile_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                    className="bg-black/10 text-white hover:bg-black/20 backdrop-blur-[23.12px] p-4 lg:p-8 3xl:p-15 cursor-pointer transition"
                  >
                    <Icon />
                  </a>
                );
              })}
          </div>
        )}
        {!isLoading && rows.length === 0 && (
          <p className="text-center text-white/80">
            No social links available.
          </p>
        )}
      </Container>
    </section>
  );
};
