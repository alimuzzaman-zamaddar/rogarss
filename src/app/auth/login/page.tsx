"use client";
import bgImage from "../../../assets/cards/loginbg.png";
import { useForm } from "react-hook-form";
import { LoginBody } from "@/types/api";
import { EmailSvg, LockSvg } from "@/Components/SvgContainer/SvgContainer";
import Link from "next/link";
import Image from "next/image";
import image from "../../../assets/cards/loginpage.png";
import Container from "@/Components/commonComponents/Container";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>();

  const onSubmit = (data: LoginBody) => {
    console.log("Submitted:", data);
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
      <Container>
      <div className="my-10">
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
              <h3 className="auth_title">Log in</h3>
              <p className="auth_sub_title">
                Sign in to your account to continue
              </p>
            </div>
            <div className="w-full ">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                {/* Email Field */}
                <div className="mb-6 w-full">
                  <label className="block text-base font-family-gloock text-gray-800 mb-2 ">
                    Email Address
                  </label>
                  <div className="flex items-center px-4 py-3.5 bg-white w-full">
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

                {/* Password Field */}
                <div className="mb-6 w-full">
                  <label className="block text-base font-family-gloock text-black mb-2">
                    Password
                  </label>
                  <div className="flex items-center px-4 py-3.5   bg-white w-full">
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      placeholder="Enter your password"
                      className="flex-1 outline-none text-sm text-sub-text bg-transparent"
                    />
                    <LockSvg />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Forget Password */}
                <div className="text-right mb-6">
                  <Link
                    href="#"
                    className="text-xs font-semibold text-black transition-all cursor-pointer"
                  >
                    Forget Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-bg-pink  py-3 hover:bg-white text-base xl:text-xl font-family-gloock text-black border border-bg-pink duration-500 hover:border-alt-border transition-all mb-5 cursor-pointer"
                >
                  Login
                </button>
              </form>

              <div className="">
                <Link href="sign-up-name">
                  <button className="w-full border border-alt-border text-base xl:text-xl font-family-gloock hover:border-bg-pink text-black py-3 hover:bg-bg-pink duration-500 transition-all cursor-pointer">
                    Create Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        </Container>
    </section>
  );
}

/*
Next.js 13+ Routing Guide (App Router) with folder structure:

1. Basic route:
/app/demo/page.tsx  --> Serves at route "/demo"

2. Nested route:
/app/demo/demo-details/page.tsx  --> Serves at route "/demo/demo-details"

3. Dynamic routes with parameters (like :id or :slug):
To create a dynamic route, create a folder with the parameter name wrapped in square brackets

Example:
/app/demo/[id]/page.tsx  --> Serves at route "/demo/:id"

Inside the page component for a dynamic route, you can access the param (id, slug, etc.) from the "params" prop:

Example:

```tsx
interface PageProps {
  params: {
    id: string;  // or slug: string;
  };
}

const DemoIdPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params; // get the dynamic param value here

  return <div>Dynamic route with id: {id}</div>;
};

export default DemoIdPage;*/
