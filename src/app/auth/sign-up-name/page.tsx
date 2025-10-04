"use client";
import bgImage from "../../../assets/auth/Createanaccountpage.png";
import { useForm } from "react-hook-form";
import { signupBody } from "@/types/api";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "../../../assets/auth/beauty-natural-woman-studio 1.png";
import Container from "@/Components/commonComponents/Container";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupBody>();
  const router = useRouter();

  const onSubmit = (data: signupBody) => {
    localStorage.setItem("signup-info", JSON.stringify(data));
    router.push("sign-up-pass");
  };

  const handleNavigation = () => {
    router.push("login");
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
            {/* Left */}
            <div className="flex-1 hidden xl:block bg-bg-pink">
              <Image
                className="w-full object-cover h-[530px]"
                src={image}
                alt="contact image"
              />
            </div>

            {/* Right */}
            <div className="flex-1 bg-[#F9FAFB] p-5 md:p-8">
              <div className="mb-10">
                <h3 className="auth_title">Create an account</h3>
                <p className="auth_sub_title">
                  Please create an account to continue using our service
                </p>
              </div>
              <div className="w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  {/* Full Name */}
                  <div className="mb-6">
                    <label
                      htmlFor="fullname"
                      className="block text-base font-family-gloock text-gray-800 mb-2"
                    >
                      Full Name
                    </label>
                    <div className="flex items-center px-4 py-3.5 bg-white rounded">
                      <input
                        id="fullname"
                        type="text"
                        {...register("fullname", {
                          required: "Full Name is required",
                        })}
                        placeholder="Enter your full name"
                        className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                      />
                    </div>
                    {errors.fullname && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-base font-family-gloock text-gray-800 mb-2"
                    >
                      Email
                    </label>
                    <div className="flex items-center px-4 py-3.5 bg-white rounded">
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                        placeholder="Enter your email address"
                        className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Submit Button */}
                  <button className="w-full bg-bg-pink py-3 hover:bg-white text-base xl:text-xl font-family-gloock text-black border border-bg-pink duration-500 hover:border-alt-border transition-all mb-5 cursor-pointer">
                    Next
                  </button>
                </form>

                <div className="">
                  <button
                    onClick={handleNavigation}
                    className="w-full border border-alt-border text-base xl:text-xl font-family-gloock hover:border-bg-pink text-black py-3 hover:bg-bg-pink duration-500 transition-all cursor-pointer"
                  >
                    Already have an account?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
