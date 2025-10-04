"use client";

import { useParams, notFound } from "next/navigation";
import { blogPosts } from "@/Components/Data/data";
import Image from "next/image";
import Container from "@/Components/commonComponents/Container";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const Page = () => {
  const params = useParams();
  const id = params?.id as string; 

  console.log(id);
  

  // if (!id || isNaN(Number(id))) {
  //   notFound();
  // }

  const blogId = Number(id);
  const blog = blogPosts.find(post => post.id === blogId);
console.log(blog)
  const blogs = blogPosts;

  if (!blog) {
    notFound();
  }

  return (
    <section className="pb-20">
      <Container>
        <div>
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full h-[700px] object-cover"
            width={1000}
            height={400}
          />
          <div className="flex flex-col xl:flex-row mt-20">
            <div className="w-full xl:w-[25%]">
              <h4 className="text-xl xl:text-2xl font-family-gloock leading-[164%] text-black">
                {blog.category}
              </h4>
              <p className="text-xl xl:text-2xl font-family-gilmer leading-[164%] text-sub-text">
                {blog.date}
              </p>
            </div>
            <div className="gap-5 w-full xl:w-[75%]">
              {blog.details.map((section, index) => (
                <div key={index} className="mt-6">
                  <h3 className="text-2xl xl:text-[32px] font-family-gloock leading-[164%] text-primary-black mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sub-light">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 ">
            {blogs.slice(0, 3).map((blog, index) => (
              <div
                data-aos="fade-up"
                className="p-6 bg-white shadow-[-1px_5px_30px_0px_rgba(0,0,0,0.08)]"
                key={index}
              >
                <Image
                  data-aos="fade-up"
                  src={blog.image}
                  alt={blog.title || `blog-${index}`}
                  className="w-full h-[300px] object-cover"
                  width={800}
                  height={300}
                />
                <div className="mt-4 flex flex-col justify-between gap-3.5 min-h-[250px]">
                  <div>
                    <h2 className="blog_title">{blog.title}</h2>
                    <p className="section_description truncate-lines-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">{blog.date}</p>
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
        </div>
      </Container>
    </section>
  );
};

export default Page;
