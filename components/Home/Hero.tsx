import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-5 flex-col">
      <h1>Next-Gen VPN, Powered by Blockchain.</h1>
      <p>
        Yurikaza VPN: Revolutionizing online privacy with blockchain technology.
        Our decentralized network ensures unparalleled security and speed. Join
        us as we build the future of VPN services. Currently in development—stay
        tuned for our launch!
      </p>
      <div className="buttons">
        <Button>Join the Beta</Button>
        <p>Learn More</p>
      </div>
    </div>
  );
}
