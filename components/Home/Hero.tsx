import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-24 flex-col text-center">
      <h1 className="text-[4rem] font-extrabold">
        Next-Gen VPN, Powered by <br /> Blockchain.
      </h1>
      <p className="!text-[#C1C1C1] text-[1rem] w-[40%] leading-7 ml-auto mr-auto py-5">
        Yurikaza VPN: Revolutionizing online privacy with blockchain technology.
        Our decentralized network ensures unparalleled security and speed. Join
        us as we build the future of VPN services. Currently in development—stay
        tuned for our launch!
      </p>
      <div className="buttons flex gap-4 items-center ml-auto mr-auto pt-4">
        <Button className="!bg-[#C1C1C1] !text-[#000000] w-[12rem] !h-[3rem] bg-opacity-[55%] flex gap-16">
          Join the Beta
          <Image
            src="./icons/tail-right.svg"
            alt="tail-right"
            width={15}
            height={15}
          />
        </Button>
        <p>Learn More</p>
      </div>
    </div>
  );
}
