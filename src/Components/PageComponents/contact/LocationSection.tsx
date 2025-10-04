import Container from "@/Components/commonComponents/Container";

export const LocationSection = () => {
  return (
    <div className="">
      <div className="section_padding">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8">
          <div className="w-full">
            <h6
              data-aos="fade-up"
              className="text-2xl 2xl:text-3xl 3xl:text-[44px] font-family-gloock leading-[164%] tracking-[2.64px] text-primary-black mb-5"
            >
              Location
            </h6>
            <p
              data-aos="fade-up"
              className="section_description 2xl:!text-2xl !text-sub-text mb-2.5"
            >
              Glo & Sparkle Aesthetics & MedSpe
            </p>
            <p
              data-aos="fade-up"
              className="section_description 2xl:!text-2xl !text-sub-text mb-2.5"
            >
              10607 Quaker Ave Suite 103
            </p>
            <p
              data-aos="fade-up"
              className="section_description 2xl:!text-2xl !text-sub-text"
            >
              Lubbock, TX 79424
            </p>
          </div>
          <div className="w-full">
            <h6
              data-aos="fade-up"
              className="text-2xl 2xl:text-3xl 3xl:text-[44px] font-family-gloock leading-[164%] tracking-[2.64px] text-primary-black mb-5"
            >
              Our Hours
            </h6>
            <p
              data-aos="fade-up"
              className="section_description 2xl:!text-2xl !text-sub-text mb-2.5"
            >
              Mon-Sat : 12pm- 6pm
            </p>
            <p
              data-aos="fade-up"
              className="section_description 2xl:!text-2xl !text-sub-text"
            >
              Sunday : 12pm- 6pm
            </p>
          </div>
          <div className="w-full">
            <h6
              data-aos="fade-up"
              className="text-2xl 2xl:text-3xl 3xl:text-[44px] font-family-gloock leading-[164%] tracking-[2.64px] text-primary-black mb-5"
            >
              Contact Us
            </h6>
            <p
              data-aos="fade-up"
              className="section_description 2xl:!text-2xl !text-sub-text mb-2.5"
            >
              Phone : 806-310-9038
            </p>
            <p
              data-aos="fade-up"
              className="section_description 2xl:!text-2xl !text-sub-text"
            >
              Email : info@estevezaesthetics.com
            </p>
          </div>
        </div>
        <div className="">
          <div data-aos="fade-up" className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.165038662449!2d-115.10305052375399!3d36.116848205920974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c52985bb847b%3A0x27dc818de78bd223!2s4020%20Pecos-McLeod%20Interconnect%2C%20Las%20Vegas%2C%20NV%2089121%2C%20USA!5e1!3m2!1sen!2sbd!4v1752723084179!5m2!1sen!2sbd"
              className="w-full"
              height="440"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
