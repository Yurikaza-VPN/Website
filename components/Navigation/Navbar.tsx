"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@saas-ui/react";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-5 bg-none !text-[white]">
      <h1 className="font-bold text-xl">Yurikaza VPN</h1>
      <ul className="flex justify-between w-[25%] ml-auto mr-auto text-center items-center max-[800px]:hidden max-[1100px]:w-[40%]">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link
          href={{
            pathname: "/documentation",
            query: { data: "overview" },
          }}
        >
          <li>Documentation</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <Link
        href={
          pathname === "/"
            ? "#HomeGettingStarted"
            : {
                pathname: "/documentation",
                query: { data: "overview" },
              }
        }
        className="scroll-smooth max-[800px]:hidden"
      >
        <Button _activeLink="#" className="!bg-[#C1C1C1] !text-[#000000]">
          {pathname === "/" ? "Get started free" : "Read Documentation"}
        </Button>
      </Link>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center min-[800px]:hidden"
      >
        <HamburgerIcon />
      </button>
      {isOpen ? (
        <div className="flex !flex-col items-center bg-black absolute left-0 top-0 h-full w-[50%] min-[800px]:hidden">
          <ul className="!text-start flex flex-col gap-2 pb-4 pt-8 justify-between w-[25%] ml-auto mr-auto items-start min-[800px]:hidden min-[1100px]:w-[40%]">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link
              href={{
                pathname: "/documentation",
                query: { data: "overview" },
              }}
            >
              <li>Documentation</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <Link
            href={
              pathname === "/"
                ? "#HomeGettingStarted"
                : {
                    pathname: "/documentation",
                    query: { data: "overview" },
                  }
            }
            className="scroll-smooth min-[800px]:hidden"
          >
            <Button _activeLink="#" className="!bg-[#C1C1C1] !text-[#000000]">
              {pathname === "/" ? "Get started free" : "Read Documentation"}
            </Button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
