"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "@/Components/commonComponents/Container";
import { IoArrowForward } from "react-icons/io5";

type FormData = {
  name: string;
  email: string;
  number: string;
  comments: string;
  terms: boolean;
};

interface ContactUsSectionProps {
  image: StaticImageData | string;
}

const DynamicContactUs = ({ image }: ContactUsSectionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <section className="section_padding !pt-5 lg:!pt-10 xl:!pt-14">
      <Container>
        <div className="flex flex-col-reverse xl:flex-row gap-7 xl:gap-10 3xl:gap-20">
          <div data-aos="fade-up" className="flex-1">
            {/* Left */}
            <div>
              <h1 className="section_title !mb-2 2xl:!mb-5">Contact us</h1>
              <p className="section_description mb-5 2xl:mb-10">
                Ready to look and feel your best? Book your appointment today or
                visit our spa for personalized treatments and care!
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 3xl:space-y-6 w-full"
              >
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Number Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    {...register("number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.number && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.number.message}
                    </p>
                  )}
                </div>

                {/* Comments Field */}
                <div>
                  <textarea
                    placeholder="Comments"
                    {...register("comments", {
                      required: "Comments are required",
                    })}
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 h-[100px] 2xl:h-[120px] 3xl:h-[150px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.comments && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.comments.message}
                    </p>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    {...register("terms", {
                      required: "You must agree to the terms",
                    })}
                    className="w-4 md:h-5 h-4 md:w-5 cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm md:text-base text-primary-black font-family-gilmer focus:outline-0 cursor-pointer"
                  >
                    I agree with terms of use and privacy policy
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.terms.message}
                  </p>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button type="submit" className="card_button_pink">
                    Submit
                    <span>
                      <IoArrowForward />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right */}
          <div data-aos="fade-up" className="flex-1">
            <Image
              src={image}
              alt="contact image"
              className="w-full h-fit md:h-[500px] xl:h-[550px] 2xl:h-[700px] 3xl:h-[800px] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicContactUs;
