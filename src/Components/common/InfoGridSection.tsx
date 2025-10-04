type InfoGridSectionProps = {
  subtitle?: string;
  title: string;
  description?: string;
  items: {
    title: string;
    text: string;
  }[];
};

export default function InfoGridSection({
  subtitle,
  title,
  description,
  items,
}: InfoGridSectionProps) {
  return (
    <section className="section_padding bg-white text-center">
      <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)]p-5 xl:p-20 mb-20">
        {/* Intro */}
        {subtitle && (
          <h5 data-aos="fade-up" className="section_sub-title tracking-widest">
            {subtitle}
          </h5>
        )}
        <h2 data-aos="fade-up" className="card_title_black">
          {title}
        </h2>
        {description && (
          <p data-aos="fade-up" className="card_description mx-auto mb-12">
            {description}
          </p>
        )}
      </div>
      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-5 xl:gap-20 ">
        {items.map((item, idx) => (
          <div
            key={idx}
            className=" p5 xl:p-10 w-full md:w-[47.5%] bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)]"
          >
            <h3
              data-aos="fade-up"
              className="font-normal md:text-xl text-lg font-family-gloock  lg:text-2xl xl:text-[32px] mb-5 text-center"
            >
              {item.title}
            </h3>
            <p data-aos="fade-up" className="section_description text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
