import { Button, Input } from "@chakra-ui/react";
import Image from "next/image";

export default function HomeGettingStarted() {
  return (
    <div className="flex justify-between items-center w-[95%] ml-auto mr-auto pt-5">
      <div className="gap-8 flex flex-col">
        <h1>Getting started with Yurikaza VPN is easier than ever</h1>
        <p>
          Secure your browsing, protect your privacy, and explore the power of
          blockchain. Be among the first to experience Yurikaza VPN.
        </p>
        <Input placeholder="Email..." />
        <Button className="gap-4">
          Join the Beta
          <Image
            src="/icons/tail-right.svg"
            alt="tail-right"
            width={10}
            height={10}
          />
        </Button>
      </div>
      <div>
        <Image
          src="/GlobeImage.png"
          alt="Globe image"
          width={500}
          height={50}
        />
      </div>
    </div>
  );
}
