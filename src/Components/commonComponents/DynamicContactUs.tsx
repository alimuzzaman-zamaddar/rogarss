"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "@/Components/commonComponents/Container";
import { IoArrowForward } from "react-icons/io5";
import { useSendContactFormMutation } from "@/redux/slices/contactSlice";

const DynamicContactUs = ({ image }: any) => {
  const [contactUs, { isLoading, isSuccess, error }] =
    useSendContactFormMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("number", values.number);
      formData.append("message", values.comments);

      await contactUs(formData).unwrap();
      reset();
    } catch (err) {
      console.error("Contact form error:", err);
    }
  };

  return (
    <section className="section_padding !pt-5 lg:!pt-10 xl:!pt-14">
      <Container>
        <div className="flex flex-col-reverse xl:flex-row gap-7 xl:gap-10 3xl:gap-20">
          {/* Left Side */}
          <div data-aos="fade-up" className="flex-1">
            <div>
              <h1 className="section_title !mb-2 2xl:!mb-5">Contact us</h1>
              <p className="section_description mb-5 2xl:mb-10">
                Ready to look and feel your best? Book your appointment today or
                visit our spa for personalized treatments and care!
              </p>

              {/* Response Messages */}
              {isSuccess && (
                <p className="mb-4 text-green-600 text-sm">
                  Thanks! Your message has been sent successfully.
                </p>
              )}
              {error && (
                <p className="mb-4 text-red-600 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 3xl:space-y-6 w-full"
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 bg-[#F2F2F2] text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {typeof errors.name === "string" ? errors.name : (errors.name as any)?.message}
                    </p>
                  )}
                </div>

                {/* Email */}
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
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 bg-[#F2F2F2] text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {typeof errors.email === "string" ? errors.email : (errors.email as any)?.message}
                    </p>
                  )}
                </div>

                {/* Number */}
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
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 bg-[#F2F2F2] text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.number && (
                    <p className="text-red-500 text-xs mt-1">
                      {typeof errors.number === "string" ? errors.number : (errors.number as any)?.message}
                    </p>
                  )}
                </div>

                {/* Comments */}
                <div>
                  <textarea
                    placeholder="Comments"
                    {...register("comments", {
                      required: "Comments are required",
                    })}
                    className="w-full px-3 2xl:px-5 py-2 2xl:py-4 h-[100px] 2xl:h-[120px] 3xl:h-[150px] bg-[#F2F2F2] text-sub-text font-family-gilmer focus:outline-0"
                  />
                  {errors.comments && (
                    <p className="text-red-500 text-xs mt-1">
                      {typeof errors.comments === "string" ? errors.comments : (errors.comments as any)?.message}
                    </p>
                  )}
                </div>

                {/* Terms Checkbox */}
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
                    className="text-sm md:text-base text-primary-black font-family-gilmer cursor-pointer"
                  >
                    I agree with terms of use and privacy policy
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1">
                    {typeof errors.terms === "string" ? errors.terms : (errors.terms as any)?.message}
                  </p>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="card_button_pink disabled:opacity-50"
                  >
                    {isLoading ? "Sending..." : "Submit"}
                    <span>
                      <IoArrowForward />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side Image */}
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
