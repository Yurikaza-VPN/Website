"use client";

import Image from "next/image";
import { Button, Input } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import getEmailAdress from "@/app/api/reciveEmail";
import { useState } from "react";

export default function HomeGettingStarted() {
  const [email, setEmail] = useState("");

  const mutation = useMutation({ mutationFn: getEmailAdress });

  const getEmail = (e: any) => {
    e.preventDefault();
    mutation.mutate({ email: email });
  };

  return (
    <div className="flex py-12 justify-between items-center w-[95%] ml-auto mr-auto pt-5">
      <div className="gap-8 flex flex-col">
        <h1 className="!text-[#000] text-[4rem]">
          Getting started with Yurikaza VPN is easier than ever
        </h1>
        <p className="text-[2rem] text-[#4d4d4d]">
          Secure your browsing, protect your privacy, and explore the power of
          blockchain. Be among the first to experience Yurikaza VPN.
        </p>
        <form onSubmit={getEmail} method="post">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5"
            style={{
              borderColor: "#000",
              height: "3rem",
            }}
          />
          <Button
            type="submit"
            className="flex gap-4 !h-[3rem] !w-[9rem]"
            style={{
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            Join the Beta
            <Image
              src="/icons/tail-right.svg"
              alt="tail-right"
              width={10}
              height={10}
            />
          </Button>
        </form>
      </div>
      {/* 
      <div>
        <Image
          src="/GlobeImage.png"
          alt="Globe image"
          width={1000}
          height={50}
        />
      </div>
      */}
    </div>
  );
}
