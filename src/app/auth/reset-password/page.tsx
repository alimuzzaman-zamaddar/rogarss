"use client";
import bgImage from "../../../assets/auth/resetpassword-.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { EmailSvg } from "@/Components/SvgContainer/SvgContainer";
import Image from "next/image";
import image from "../../../assets/auth/resetpass.png";
import Container from "@/Components/commonComponents/Container";
import toast from "react-hot-toast";
import { useSendOtpMutation } from "@/redux/auth/authApi";

interface ResetPass {
  email: string;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPass>();
  const router = useRouter();
  const [sendOtp, { isLoading }] = useSendOtpMutation();

  const onSubmit = async (data: ResetPass) => {
    try {
      await sendOtp({ email: data.email }).unwrap();
      localStorage.setItem("reset-email", data.email);
      toast.success("Verification code sent to your email");
      router.push("/auth/verifyotp"); 
    } catch (e: any) {
      toast.error(e?.data?.message || "Failed to send verification code");
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
          <div className=" bg-white flex justify-center items-center gap-10 md:p-8 relative">
            {/* Left */}
            <div className="flex-1 hidden xl:block bg-bg-pink">
              <Image
                className="w-full object-cover h-[530px]"
                src={image}
                alt="contact image"
              />
            </div>

            {/* Right */}
            <div className="lex-1 bg-[#F9FAFB] p-5 md:p-8">
              <div className="mb-10">
                <h2 className="auth_title">Reset password</h2>
                <p className="auth_sub_title">
                  Enter your email to receive password reset instructions
                </p>
              </div>
              <div className="w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <div className="mb-6">
                    <label className="block text-base font-family-gloock text-gray-800 mb-2">
                      Email Address
                    </label>
                    <div className="flex items-center px-4 py-3.5 bg-white">
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        placeholder="Enter email your address"
                        className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                      />
                      <EmailSvg />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-bg-pink  py-3 text-base xl:text-xl font-family-gloock text-black border border-bg-pink duration-500 transition-all mb-5 cursor-pointer ${
                      isLoading
                        ? "opacity-60 pointer-events-none"
                        : "hover:bg-white hover:border-alt-border"
                    }`}
                  >
                    {isLoading ? "Sending..." : "Next"}
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
