"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo } from "react";
import type { RootState } from "@/redux/store";
import { logout } from "@/redux/slices/authSlice";
import Container from "@/Components/commonComponents/Container";

const MENU = [
  { label: "Services", href: "/booking" },
  { label: "Packges", href: "#" },
  { label: "Gift Card", href: "#" },
];

export default function bookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const user = useSelector((s: RootState) => s.auth.user);

  const current = useMemo(
    () => MENU.find((m) => m.href === pathname)?.label ?? "booking",
    [pathname]
  );

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/auth/login");
  };

  const initials = (user?.name || "")
    .split(" ")
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

  return (
    <section className="min-h-screen w-full bg-[#F8F8F8] text-primary-black">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-alt-border">
        <div>
          <Container>
            <div className="h-16 flex items-center justify-between gap-4">
              <div className=" flex items-center gap-3">
                <span className="hidden md:inline-block h-5 w-[1px] bg-alt-border" />

                <nav className="p-3 space-y-2 flex">
                  {MENU.map((item, index) => {
                    console.log(item);
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className={[
                          "group flex items-center justify-between",
                          "px-4 py-3 ",
                          active ? "text-bg-pink " : " hover:text-bg-pink ",
                        ].join(" ")}
                        onClick={() => setOpen(false)}
                      >
                        <span
                          className={[
                            "font-family-gilmer text-sm",
                            active
                              ? "text-primary-black"
                              : "text-secondary-black",
                          ].join(" ")}
                        >
                          {item.label}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition">
                          <svg width="16" height="16" viewBox="0 0 24 24">
                            <path
                              d="M9 18l6-6-6-6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleLogout}
                  className="hidden sm:inline-flex px-3 py-1.5 rounded-[4px] border border-[#E3B7AE] text-primary-black hover:bg-bg-pink/60 transition font-family-gilmer text-sm"
                >
                  Logout
                </button>
                <div className="w-9 h-9 rounded-full bg-bg-pink grid place-items-center font-family-gloock text-sm">
                  {initials || "U"}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <div className="flex">
        <main className="flex-1 bg-white">
          <div>
            <section className="p-4">
              <div className=" p-4">{children}</div>
            </section>
          </div>
        </main>
      </div>
    </section>
  );
}
