"use client";
import { useState } from "react";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import { blogPosts } from "@/Components/Data/data";
import Image from "next/image";
import bgImg from "../../../assets/blogPost/brunette-girl-posing-with-flowers.png";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import img from "../../../assets/contact/brunette-girl-posing-with-flowers.png"
import { useGetBlogsQuery } from "@/redux/slices/blogSlice";

const POSTS_PER_PAGE = 9;

export default function Page() {
  const { data, isLoading, error } = useGetBlogsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = data?.data.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  console.log(data?.data);

    if (isLoading) return <div className="text-center py-20">Loading...</div>;
    if (error)
      return (
        <div className="text-center text-red-500 py-20">
          Failed to load blogs.
        </div>
      );


  return (
    <section>
      <Container>
        <div className="pb-20">
          {/* Banner Section */}
          <div className="mb-20">
            <BannerSection
              bgImages={[1, 2, 3].map(
                () =>
                  `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
              )}
              heading={data?.name}
              description="Your Guide to Radiant Skin & Timeless Beauty"
            />
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 ">
            {currentPosts.map((blog: any, index: number) => (
              <div
                data-aos="fade-up"
                className="p-6 bg-white shadow-[-1px_5px_30px_0px_rgba(0,0,0,0.08)]"
                key={index}
              >
                <Image
                  data-aos="fade-up"
                  src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${blog.image}`}
                  alt={blog.title || `blog-${index}`}
                  className="w-full lg:h-[250px] xl:h-[300px] object-cover"
                  width={800}
                  height={300}
                />
                <div className="mt-4 flex flex-col justify-between gap-3.5 min-h-[250px]">
                  <div className="">
                    <h2 className="blog_title">{blog.title}</h2>
                    <p className="section_description truncate-lines-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                      {blog.created_at
                        ? new Date(blog.created_at).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "N/A"}
                    </p>

                    <Link href={`/blog/${blog.id}`}>
                      <button className="w-13 h-13 text-2xl rounded-full flex items-center text-pink-border justify-center duration-500 hover:bg-bg-pink bg-white border border-pink-border hover:border-bg-pink hover:text-black transition cursor-pointer">
                        <IoArrowForward />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-3 mt-16">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-20 h-10 xl:text-[22px] flex items-center justify-center duration-500 border cursor-pointer transition ${
                currentPage === currentPage + 1
                  ? "bg-bg-pink text-black border-bg-pink"
                  : "bg-white text-primary-black border-alt-border hover:bg-bg-pink hover:border-bg-pink hover:text-black"
              }`}
            >
              <IoArrowBack />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 flex items-center justify-center text-lg  font-semibold  ${
                  page === currentPage
                    ? "bg-bg-pink text-black"
                    : "bg-secondary-bg text-sub-text"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-20 h-10 xl:text-[22px] flex items-center justify-center duration-500 border cursor-pointer transition ${
                currentPage === currentPage + 1
                  ? "bg-bg-pink text-black border-bg-pink"
                  : "bg-white text-primary-black border-alt-border hover:bg-bg-pink hover:border-bg-pink hover:text-black"
              }`}
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
        <DynamicContactUs image={img} />;
      </Container>
    </section>
  );
}
