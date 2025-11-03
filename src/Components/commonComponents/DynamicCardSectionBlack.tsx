import Image from "next/image";
import Container from "./Container";

const DynamicCardSection = ({
  image,
  title,
  description,
  sectionSubTitle,
}: any ) => {
  return (
    <section className={`py-10 md:py-14 xl:py-20 2xl:py-24  `}>
      <Container>
        <div
          className={`flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row `}
        >
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="w-full 3xl:w-[35%] flex relative"
          >
            <Image
              className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
              src={image}
              alt="image"
              height={700}
              width={500}
            />
          </div>
          <div className="w-full 3xl:w-[65%]">
            {sectionSubTitle && (
              <h5 className="section_sub-title">{sectionSubTitle}</h5>
            )}

            <h2 data-aos="fade-up" className="card_title_black">
              {title}
            </h2>

            <p data-aos="fade-up" className="card_description">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicCardSection;
