"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function NavigationBar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      ),
    },
    {
      name: "Badge",
      href: "/badge",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 10.5l1 -1a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4l2 -2" />
          <path d="M13.5 6.5l4 4" />
          <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
        </svg>
      ),
    },
    {
      name: "Profile",
      href: "/profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-t-gray-300 shadow-md z-50 py-2 mobile:rounded-t-3xl lmobile:rounded-t-3xl tablet:rounded-none desktop:rounded-none ldesktop:rounded-none laptop:rounded-none">
      <div className="mx-auto flex flex-row justify-around w-3/4 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div className="flex flex-col items-center cursor-pointer">
                <div
                  className={`${
                    isActive ? "text-blue-500" : "text-gray-600"
                  } transition-colors`}
                >
                  {item.icon}
                </div>
                <p
                  className={`mt-1 text-sm ${
                    isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
