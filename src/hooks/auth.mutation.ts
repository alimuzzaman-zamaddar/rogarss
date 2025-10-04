import { useMutation, useQuery } from "@tanstack/react-query";
import {
  GetUserDataFunc,
  LoginFunc,
  LogOutFunc,
  OtpVerifyFunc,
  RegisterFunc,
  ResetPasswordFunc,
  VerifyEmailFunc,
} from "./auth.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// get user data:
export const useGetUserData = (token: string) => {
  return useQuery({
    queryKey: ["user", token],
    queryFn: GetUserDataFunc,
    enabled: !!token, // Only run the query if token is truthy
    refetchInterval: 1000 * 60 * 60, // refetch every hour
  });
};

// Register:
export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: payload => RegisterFunc(payload),
    onSuccess: data => {
      toast.success("Registration Successful");
      if (data?.token) {
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Login:
export const useLogin = () => {
  const router = useRouter();
  // const { setLoading, setToken } = useAuth();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: payload => LoginFunc(payload),
    onSuccess: data => {
      toast.success("Login Successful");
      if (data?.success) {
        if (data?.data?.token) {
          // setToken(data?.data?.token);
          router.push("/");
        }
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// logout:
export const useLogOut = () => {
  const router = useRouter();
  // const { setLoading, clearToken } = useAuth();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: LogOutFunc,
    onSuccess: () => {
      // clearToken();
      router.push("/auth/login");
      toast.success("User Logged out Successfully");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// verify email:
export const useVerifyEmail = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["verify-email"],
    mutationFn: payload => VerifyEmailFunc(payload),
    onSuccess: data => {
      if (data?.email) {
        // router.push("/auth/verify-otp", { state: { email: data.email } });
        toast.success("Otp sent to your email address");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.data?.email?.[0]);
    },
  });
};

// verify otp:
export const useVerifyOtp = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["verify-otp"],
    mutationFn: payload => OtpVerifyFunc(payload),
    onSuccess: data => {
      if (data) {
        toast.success("Otp verified successfully");
        // router.push("/auth/reset-password", {
        //   state: { email: data.email, key: data?.password_reset_token },
        // });
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// reset password:
export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: payload => ResetPasswordFunc(payload),
    onSuccess: data => {
      if (data) {
        toast.success("Password reset successfully");
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
