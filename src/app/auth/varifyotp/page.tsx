"use client";
import { useForm, Controller } from "react-hook-form";
import bgImage from "../../../assets/auth/Createanaccountpage.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "../../../assets/auth/beauty-natural-woman-studio 1.png";
import Container from "@/Components/commonComponents/Container";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const { handleSubmit, control } = useForm<{ verificationCode: string[] }>();
  const [secondsLeft, setSecondsLeft] = useState(25);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const onSubmit = (data: { verificationCode: string[] }) => {
    console.log("Verification Code Submitted: ", data);
    router.push("/reset-password");
  };

  useEffect(() => {
    if (secondsLeft === 0) {
      setIsResendDisabled(false);
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const resendCode = () => {
    setSecondsLeft(25);
    setIsResendDisabled(true);
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
                <h1 className="auth_title">Enter the verification code</h1>
                <p className="auth_sub_title">
                  We sent a verification code to your email, check your email
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
                <div className="flex justify-center gap-4 ">
                  {[...Array(4)].map((_, index) => (
                    <Controller
                      key={index}
                      name={`verificationCode.${index}`}
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          maxLength={1}
                          className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl"
                          autoFocus={index === 0}
                        />
                      )}
                    />
                  ))}
                </div>
                <div className="w-full flex justify-between mt-4">
                  <button
                    type="submit"
                    className="w-full bg-bg-pink py-3 border border-bg-pink text-base xl:text-xl text-black hover:bg-white hover:border-alt-border focus:outline-none"
                  >
                    Continue
                  </button>
                </div>
              </form>
              <div className="w-full flex justify-center mt-4">
                <p>
                  Don’t receive the code?{" "}
                  <span onClick={resendCode}>Resend </span>
                  in {secondsLeft} second
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
