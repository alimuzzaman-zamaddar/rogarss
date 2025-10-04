import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "@/redux/slices/authSlice";
import { setCredentials } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";
import { axiosSecure } from "./useAxiosSecure";
import { axiosPublic } from "./useAxiosPublic";

const QUERY_KEYS = {
  ME: "me" as const,
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationFn: (data: any) =>
      axiosPublic.post("/users/login", data).then((res: any) => res.data),
    onSuccess: (data: any) => {
      const token = data.data.token;
      const user: User = { ...data.data };
      delete (user as any).token;
      queryClient.setQueryData([QUERY_KEYS.ME], user);
      dispatch(
        setCredentials({
          token,
          user,
        })
      );
    },
  });
};

interface GetMeQueryOptions {
  enabled?: boolean;
  refetchOnMount?: boolean;
  skip?: boolean;
  refetchOnMountOrArgChange?: boolean;
}

export const useGetMeQuery = (arg1?: any, options?: GetMeQueryOptions) => {
  const axiosSecure = useAxiosSecure();
  const enabled =
    options?.skip !== undefined ? !options.skip : options?.enabled ?? true;
  const refetchOnMount =
    options?.refetchOnMountOrArgChange !== undefined
      ? options.refetchOnMountOrArgChange
      : options?.refetchOnMount ?? false;

  return useQuery<User, any>({
    queryKey: [QUERY_KEYS.ME],
    queryFn: () =>
      axiosSecure.get("/users/data").then((res: any) => res.data.data),
    enabled,
    refetchOnMount,
  });
};

// get user data:
export const GetUserDataFunc = async () => {
  const { data } = await axiosSecure.get("/api/users/data");
  return data;
};

// register:
export const RegisterFunc = async (payload: any) => {
  const { data } = await axiosPublic.post("/api/users/register", payload);
  return data?.data;
};

// login:
export const LoginFunc = async (payload: any) => {
  const { data } = await axiosPublic.post("/api/users/login", payload);
  return data;
};

// logout:
export const LogOutFunc = async () => {
  const { data } = await axiosSecure.post("/api/users/logout");
  return data?.data;
};

// verify email:
export const VerifyEmailFunc = async (payload: any) => {
  const { data } = await axiosPublic.post(
    "/api/users/login/email-verify",
    payload
  );
  return data?.data;
};

// otp verify:
export const OtpVerifyFunc = async (payload: any) => {
  const { data } = await axiosPublic.post(
    "/api/users/login/otp-verify",
    payload
  );
  return data?.data;
};

// reset password:
export const ResetPasswordFunc = async (payload: any) => {
  const { data } = await axiosPublic.post(
    "/api/users/login/reset-password",
    payload
  );
  return data?.data;
};
