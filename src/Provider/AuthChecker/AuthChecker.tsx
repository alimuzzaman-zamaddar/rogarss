"use client";
import { ReactNode, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useGetMeQuery } from "@/hooks/auth.api";
import { logout, setCredentials } from "@/redux/slices/authSlice";

const authPaths = ["/auth/login", "/auth/register"];
const publicPaths = ["/", "/about", "/contact", "/pricing"];
const protectedPaths = ["/dashboard", "/profile", "/settings"];

export default function AuthChecker({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  const isAuthPage = authPaths.includes(pathname);
  const isPublicPage = publicPaths.includes(pathname);
  const isProtectedPage = protectedPaths.some(p => pathname.startsWith(p));

  const { data, error, isLoading } = useGetMeQuery(undefined, {
    skip: !token || !!user,
  });

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    if (isPublicPage) return;


    if (token && isAuthPage) {
      router.replace("/dashboard");
      return;
    }
    
    if (!token && isProtectedPage) {
      router.replace("/auth/login");
      return;
    }

    if (token && data && !user) {
      dispatch(setCredentials({ token, user: data }));
    }

    // Token invalid
    if (token && error) {
      dispatch(logout());
      router.replace("/auth/login");
    }
  }, [
    hydrated,
    token,
    data,
    error,
    isAuthPage,
    isProtectedPage,
    isPublicPage,
    router,
    dispatch,
    user,
  ]);

  const loading =
    !hydrated ||
    (isProtectedPage && (!token || (!user && isLoading))) ||
    (token && isAuthPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
        <style jsx>{`
          .loader {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #c98575;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}

