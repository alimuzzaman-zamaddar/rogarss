"use client";

import { useEffect, useState } from "react";
import bgImage from "../../../assets/auth/Createanaccountpage.png";
import { useForm } from "react-hook-form";
import type { signupPassBody } from "@/types/api";
import Image from "next/image";
import image from "../../../assets/auth/beauty-natural-woman-studio 1.png";
import Container from "@/Components/commonComponents/Container";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useRegisterMutation } from "@/redux/auth/authApi";

export default function Page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<signupPassBody>();

  // pull name+email saved from step 1
  const [signupInfo, setSignupInfo] = useState<{
    fullname: string;
    email: string;
  }>({
    fullname: "",
    email: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("signup-info");
    if (stored) {
      setSignupInfo(JSON.parse(stored));
    }
  }, []);

  // RTK Query mutation
  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: signupPassBody) => {
    // basic client-side confirm check
    if (data.password !== data.conformpassword) {
      setError("conformpassword", {
        type: "validate",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      // API expects: name, email, password, password_confirmation, agree_to_terms
      await registerUser({
        name: signupInfo.fullname,
        email: signupInfo.email,
        password: data.password,
        password_confirmation: data.conformpassword,
        agree_to_terms: 1,
      }).unwrap();

      toast.success("Account created!");
      localStorage.removeItem("signup-info");
      router.replace("/booking"); // token+user stored via setCredentials in onQueryStarted
    } catch (e: any) {
      // Try to surface a useful error message
      const apiMsg =
        e?.data?.message ||
        e?.data?.errors?.[Object.keys(e?.data?.errors || {})[0]]?.[0] ||
        "Registration failed. Please try again.";
      toast.error(apiMsg);
    }
  };

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const togglePassword = () => setShowPass((s) => !s);
  const toggleConfirmPassword = () => setShowConfirm((s) => !s);

  const password = watch("password");

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
            {/* Left */}
            <div className="flex-1 hidden xl:block bg-bg-pink">
              <Image
                className="w-full object-cover h-[530px]"
                src={image}
                alt="contact image"
                priority
              />
            </div>

            {/* Right */}
            <div className="flex-1 bg-[#F9FAFB] p-5 md:p-8">
              <div className="mb-10">
                <h1 className="auth_title">Create an account</h1>
                <p className="auth_sub_title">
                  Please create an account to continue using our service
                </p>
                {/* Show who we’re registering, if present */}
                {(signupInfo.fullname || signupInfo.email) && (
                  <p className="text-sm text-sub-text mt-2">
                    Signing up as{" "}
                    <span className="font-medium">{signupInfo.fullname}</span> (
                    {signupInfo.email})
                  </p>
                )}
              </div>

              <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  {/* Password Field */}
                  <div className="mb-6">
                    <label className="block text-base font-family-gloock text-black mb-2">
                      Password
                    </label>
                    <div className="flex items-center px-4 py-3.5 bg-white">
                      <input
                        type={showPass ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Minimum 8 characters",
                          },
                        })}
                        placeholder="Enter your password"
                        className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                      />
                      <button
                        type="button"
                        onClick={togglePassword}
                        aria-label="toggle password"
                      >
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
                    <div className="flex items-center px-4 py-3.5 bg-white">
                      <input
                        type={showConfirm ? "text" : "password"}
                        {...register("conformpassword", {
                          required: "Confirm password is required",
                          validate: (v) =>
                            v === password || "Passwords do not match",
                        })}
                        placeholder="Re-enter your password"
                        className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPassword}
                        aria-label="toggle confirm password"
                      >
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
                    disabled={isLoading}
                    className={`w-full bg-bg-pink py-3 text-base xl:text-xl font-family-gloock text-black border border-bg-pink duration-500 transition-all mb-5 cursor-pointer ${
                      isLoading
                        ? "opacity-60 pointer-events-none"
                        : "hover:bg-white hover:border-alt-border"
                    }`}
                  >
                    {isLoading ? "Creating account..." : "Sign Up"}
                  </button>

                  <div>
                    <Link href="login">
                      <button
                        type="button"
                        className="w-full border border-alt-border text-base xl:text-xl font-family-gloock hover:border-bg-pink text-black py-3 hover:bg-bg-pink duration-500 transition-all cursor-pointer"
                      >
                        Already have an account?
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
