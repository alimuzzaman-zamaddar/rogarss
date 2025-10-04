"use client";
import { useState } from "react";
import bgImage from "../../../assets/auth/Createanaccountpage.png";
import { useForm } from "react-hook-form";
import { signupPassBody } from "@/types/api";
import Image from "next/image";
import image from "../../../assets/auth/beauty-natural-woman-studio 1.png";
import Container from "@/Components/commonComponents/Container";
import { Eye, EyeOff } from "lucide-react";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupPassBody>();

  const onSubmit = (data: signupPassBody) => {
    console.log("Form Data Submitted: ", data);
    return data;
  };

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => setShowPass(!showPass);
  const toggleConfirmPassword = () => setShowConfirm(!showConfirm);

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundColor: "#666",
        backgroundBlendMode: "overlay",
      }}
      className="flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover"
    >
      <div className="my-10">
        <Container>
          <div className="bg-white flex justify-center items-center gap-10 md:p-8 relative">
            <div className="flex-1 hidden xl:block bg-bg-pink">
              <Image
                className="w-full object-cover h-[530px]"
                src={image}
                alt="contact image"
              />
            </div>

            <div className="flex-1 bg-[#F9FAFB] p-5 md:p-8">
              <div className="mb-10">
                <h1 className="auth_title">Create new password</h1>
                <p className="auth_sub_title">
                  Set a strong password to secure your account
                </p>
              </div>
              <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  {/* Password Field */}
                  <div className="mb-6">
                    <label className="block text-base font-family-gloock text-black mb-2">
                      Create new password
                    </label>
                    <div className="flex items-center px-4 py-3.5 bg-white ">
                      <input
                        type={showPass ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                        })}
                        placeholder="Enter your new password"
                        className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                      />
                      <button type="button" onClick={togglePassword}>
                        {showPass ? (
                          <EyeOff className="w-5 h-5 text-gray-500" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="mb-6">
                    <label className="block text-base font-family-gloock text-black mb-2">
                      Confirm Password
                    </label>
                    <div className="flex items-center px-4 py-3.5 bg-white ">
                      <input
                        type={showConfirm ? "text" : "password"}
                        {...register("conformpassword", {
                          required: "Password is required",
                        })}
                        placeholder="Enter your confirm password"
                        className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                      />
                      <button type="button" onClick={toggleConfirmPassword}>
                        {showConfirm ? (
                          <EyeOff className="w-5 h-5 text-gray-500" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                    {errors.conformpassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.conformpassword.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-bg-pink py-3 hover:bg-white text-base xl:text-xl font-family-gloock text-black border border-bg-pink duration-500 hover:border-alt-border transition-all mb-5 cursor-pointer"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Overlay using Tailwind CSS */}
    </section>
  );
}
