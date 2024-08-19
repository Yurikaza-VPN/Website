import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-24 flex-col text-center">
      <h1 className="text-[4rem] font-extrabold max-[800px]:text-[2.2rem]">
        Next-Gen VPN, Powered by <br /> Blockchain.
      </h1>
      <p className="!text-[#C1C1C1] text-[1rem] w-[40%] leading-7 ml-auto mr-auto py-5 max-[800px]:text-[0.8rem] max-[800px]:w-[80%]">
        Yurikaza VPN: Revolutionizing online privacy with blockchain technology.
        Our decentralized network ensures unparalleled security and speed. Join
        us as we build the future of VPN services. Currently in development—stay
        tuned for our launch!
      </p>
      <div className="buttons flex gap-4 items-center ml-auto mr-auto pt-4">
        <Link
          href={{
            pathname: "/documentation",
            query: { data: "overview" },
          }}
        >
          <Button className="!bg-[#C1C1C1] !text-[#000000] w-[17rem] !h-[3rem] bg-opacity-[55%] flex gap-16">
            Read Documentation
            <Image
              src="./icons/tail-right.svg"
              alt="tail-right"
              width={15}
              height={15}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
