"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { IoArrowForward } from "react-icons/io5";

type FormData = {
  name: string;
  email: string;
  number: string;
  procedure: string;
  source: string;
  bestTime: string;
  language: string;
  comments: string;
};

export const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <div className=" section_padding">
      <div>
        <div className=" ">
          <h1 data-aos="fade-up" className="section_title mb-15 text-center">
            GetInTouch
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            {/* Name, Phone, Email */}
            <div className="flex flex-col xl:flex-row gap-6">
              <div data-aos="fade-up" className="w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" className="w-full">
                <input
                  type="number"
                  placeholder="Phone Number"
                  {...register("number", {
                    required: "Phone number is required",
                  })}
                  className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                />
                {errors.number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.number.message}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" className="w-full">
                <input
                  type="email"
                  placeholder=" Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Procedure + Source */}
            <div className="flex flex-col xl:flex-row gap-6">
              <div data-aos="fade-up" className="w-full">
                <input
                  type="text"
                  placeholder="Procedure of Interest"
                  {...register("procedure", {
                    required: "This field is required",
                  })}
                  className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                />
                {errors.procedure && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.procedure.message}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" className="w-full">
                <input
                  type="text"
                  placeholder="How Did You Hear of Us?"
                  {...register("source", {
                    required: "This field is required",
                  })}
                  className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                />
                {errors.source && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.source.message}
                  </p>
                )}
              </div>
            </div>

            {/* Best Time + Language */}
            <div className="flex flex-col xl:flex-row gap-6">
              <div data-aos="fade-up" className="w-full">
                <input
                  type="text"
                  placeholder="Best Time to Reach You"
                  {...register("bestTime", {
                    required: "This field is required",
                  })}
                  className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                />
                {errors.bestTime && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.bestTime.message}
                  </p>
                )}
              </div>

              <div data-aos="fade-up" className="w-full">
                <select
                  {...register("language", {
                    required: "This field is required",
                  })}
                  className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2] text-sub-text font-family-gilmer focus:outline-0"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                    hidden
                    className="text-sub-text font-family-gilmer"
                  >
                    Preferred Language
                  </option>
                  <option value="english">English</option>
                  <option value="bangla">Bangla</option>
                  <option value="hindi">Hindi</option>
                  <option value="arabic">Arabic</option>
                  {/* Add more options as needed */}
                </select>

                {errors.language && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.language.message}
                  </p>
                )}
              </div>
            </div>

            {/* Comments */}
            <div data-aos="fade-up">
              <textarea
                placeholder="How can we assist you with your aesthetics needs?"
                {...register("comments", { required: "Comments are required" })}
                className="w-full px-5 py-3 xl:py-[17px] bg-[#F2F2F2]  text-sub-text font-family-gilmer focus:outline-0"
                rows={7}
              />
              {errors.comments && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.comments.message}
                </p>
              )}
            </div>

            {/* Info Text */}
            <div data-aos="fade-up" className="flex items-center space-x-2">
              <p className="text-sm xl:text-base leading-[150%]">
                By sending this, you agree to be contacted by Glo & Sparkle via
                text, call or email. Standard rates my rates may apply. For more
                details, read our{" "}
                <span className="text-[#C98575] cursor-pointer">
                  Privacy Policy.
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <div data-aos="fade-up" className="">
              <button
                type="submit"
                className="px-20 py-2 xl:py-4 bg-bg-pink  text-primary-black text-lg xl:text-xl font-normal leading-[164%] capitalize hover:bg-transparent border border-transparent hover:border-alt-border  duration-500 flex items-center gap-4"
              >
                Submit
                <span>
                  <IoArrowForward />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
