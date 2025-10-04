"use client";
import Image from "next/image";
import Container from "@/Components/commonComponents/Container";
import { IoArrowForward } from "react-icons/io5";
import { blogs } from "@/Components/Data/data";
import Link from "next/link";

export const RecentBlogs = () => {
  return (
    <div className="section_padding">
      <Container>
        {/* Upper part */}
        <div>
          <p data-aos="fade-up" className="section_sub-title text-center">
            Recent blog
          </p>

          <h3 data-aos="fade-up" className="section_title !mb-5 text-center">
            Beyond the Mirror
          </h3>
          <p
            data-aos="fade-up"
            className="section_description mb-10 text-center max-w-[1122px] mx-auto"
          >
            Expert Tips, Practical Advice, and Heartfelt Stories on Home
            Management, Childcare, and Domestic Support. Stay informed,
            inspired, and empowered with insights from industry professionals
            and real-life experiences.
          </p>
        </div>

        {/* Map */}
        <div className="mt-10 md:mt-15">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-5 lg:gap-x-6 3xl:gap-x-8">
            {blogs?.map((blog, i) => (
              <div key={i} className=" flex flex-col justify-between">
                <div className="space-y-2 md:space-y-3 3xl:space-y-4">
                  <Image
                    data-aos="fade-up"
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-[280px] lg:h-[320px] 2xl:h-[400px] 3xl:h-[600px]"
                  />

                  <p
                    data-aos="fade-up"
                    className="text-sub-text 2xl:text-lg font-family-gilmer"
                  >
                    {blog.date}
                  </p>

                  <h2
                    data-aos="fade-up"
                    className="lg:text-lg 2xl:text-xl 3xl:text-2xl leading-[164%] text-primary-black font-family-gloock"
                  >
                    {blog.title}
                  </h2>
                </div>
                <div className="mt-6">
                  <Link href="/blog">
                    <button className="px-4 2xl:px-6 py-2 2xl:py-3 bg-bg-pink text-primary-black 2xl:text-lg 3xl:text-xl leading-[164%] capitalize hover:bg-transparent border border-transparent hover:border-alt-border  duration-500 flex items-center gap-3 cursor-pointer">
                      Learn More
                      <IoArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
