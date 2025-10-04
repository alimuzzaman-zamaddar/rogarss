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

  // Countdown Timer
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
                <h1 className="auth_title">Enter the verification code</h1>
                <p className="auth_sub_title">
                  We sent a verification code to your email, check your email
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
                <div className="flex justify-center gap-4 ">
                  {/* 4 Inputs for Verification Code */}
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
                    className="w-full bg-bg-pink py-3 border border-bg-pink text-base xl:text-xl text-black hover:bg-white hover:border-alt-border hover:bg-white focus:outline-none"
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

// "use client";

// import { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { useRouter } from "next/navigation";

// const VerificationCodePage = () => {
//   const { handleSubmit, control } = useForm<{ verificationCode: string[] }>();
//   const [secondsLeft, setSecondsLeft] = useState(25);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const router = useRouter();

//   const onSubmit = (data: { verificationCode: string[] }) => {
//     console.log("Verification Code Submitted: ", data);
//     // Continue to the next step (e.g., reset password)
//     router.push("/reset-password");
//   };

//   const resendCode = () => {
//     setSecondsLeft(25);
//     setIsResendDisabled(true);
//     // Call your resend verification code logic here
//   };

//   return (
//     <main className="flex items-center justify-center h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h1 className="text-2xl font-semibold text-center mb-4">
//           Enter the verification code
//         </h1>
//         <p className="text-center text-gray-600 mb-6">
//           We sent a verification code to your email, check your email.
//         </p>

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex justify-center gap-4 mb-6"
//         >
//           {/* 4 Inputs for Verification Code */}
//           {[...Array(4)].map((_, index) => (
//             <Controller
//               key={index}
//               name={`verificationCode.${index}`} // Correctly using dot notation for array indices
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   {...field}
//                   type="text"
//                   maxLength={1}
//                   className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl"
//                   autoFocus={index === 0} // Auto focus first input
//                 />
//               )}
//             />
//           ))}
//         </form>

//         <button
//           type="submit"
//           className="w-full bg-pink-500 py-3 text-white text-xl rounded-lg hover:bg-pink-600 focus:outline-none"
//         >
//           Continue
//         </button>

//         <div className="mt-4 text-center">
//           <p className="text-gray-600">Don’t receive the code?</p>
//           <button
//             onClick={resendCode}
//             disabled={isResendDisabled}
//             className={`text-red-500 ${
//               isResendDisabled ? "cursor-not-allowed" : ""
//             }`}
//           >
//             Resend in {secondsLeft} second
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default VerificationCodePage;
