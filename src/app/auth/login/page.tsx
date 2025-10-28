"use client";
import bgImage from "../../../assets/cards/loginbg.png";
import { useForm } from "react-hook-form";
import { EmailSvg, LockSvg } from "@/Components/SvgContainer/SvgContainer";
import Link from "next/link";
import Image from "next/image";
import image from "../../../assets/cards/loginpage.png";
import Container from "@/Components/commonComponents/Container";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/redux/auth/authApi";

type LoginBody = {
  email: string;
  password: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>();

  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

const onSubmit = async (form: LoginBody) => {
  try {
    const res = await login({
      email: form.email,
      password: form.password,
    }).unwrap();

    const payload = res?.data; 
    if (payload?.token) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("email", payload.email ?? "");
      localStorage.setItem("role", payload.role ?? "");
      localStorage.setItem("user", JSON.stringify(payload));
    }

    toast.success("Logged in successfully");
    router.replace("/");
  } catch (e: any) {
    const msg =
      e?.data?.message ||
      e?.data?.errors?.[Object.keys(e?.data?.errors || {})[0]]?.[0] ||
      "Login failed. Please check your credentials.";
    toast.error(msg);
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
      <Container>
        <div className="my-10">
          <div className="bg-white flex justify-center items-center gap-10 md:p-8 relative">
            <div className="flex-1 hidden xl:block bg-bg-pink">
              <Image
                className="w-full object-cover h-[530px]"
                src={image}
                alt="contact image"
                priority
              />
            </div>
            <div className="flex-1 bg-[#F9FAFB] p-5 md:p-8">
              <div className="mb-10">
                <h3 className="auth_title">Log in</h3>
                <p className="auth_sub_title">
                  Sign in to your account to continue
                </p>
              </div>

              <div className="w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
                  <div className="mb-6 w-full">
                    <label className="block text-base font-family-gloock text-black mb-2">
                      Password
                    </label>
                    <div className="flex items-center px-4 py-3.5 bg-white w-full">
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
                  <div className="text-right mb-6">
                    <Link
                      href="/auth/reset-password"
                      className="text-xs font-semibold text-black transition-all cursor-pointer"
                    >
                      Forget Password?
                    </Link>
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
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </form>

                <div>
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
