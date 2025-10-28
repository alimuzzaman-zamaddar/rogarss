"use client";
import { useState, useEffect } from "react";
import bgImage from "../../../assets/auth/Createanaccountpage.png";
import { useForm } from "react-hook-form";
import { signupPassBody } from "@/types/api";
import Image from "next/image";
import image from "../../../assets/auth/beauty-natural-woman-studio 1.png";
import Container from "@/Components/commonComponents/Container";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "@/redux/auth/authApi";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupPassBody>();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();

  useEffect(() => {
    const e = localStorage.getItem("reset-email");
    setEmail(e);
  }, []);

  const onSubmit = async (data: signupPassBody) => {
    if (!email) {
      toast.error("Missing email — please restart reset flow.");
      return;
    }
    try {
      await resetPassword({
        email,
        password: data.password,
        password_confirmation: data.conformpassword,
      }).unwrap();

      toast.success("Password reset successful. Please log in.");
      localStorage.removeItem("reset-email");
      router.replace("/auth/login");
    } catch (e: any) {
      toast.error(e?.data?.message || "Failed to reset password");
    }
  };

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
                  {/* Password */}
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
                      <button
                        type="button"
                        onClick={() => setShowPass((s) => !s)}
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

                  {/* Confirm */}
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
                      <button
                        type="button"
                        onClick={() => setShowConfirm((s) => !s)}
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

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-bg-pink py-3 text-base xl:text-xl font-family-gloock text-black border border-bg-pink duration-500 transition-all mb-5 cursor-pointer ${
                      isLoading
                        ? "opacity-60 pointer-events-none"
                        : "hover:bg-white hover:border-alt-border"
                    }`}
                  >
                    {isLoading ? "Updating..." : "Continue"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
