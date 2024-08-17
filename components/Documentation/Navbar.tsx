import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-5 bg-none !text-[#C1C1C1]">
      <div className="flex gap-1 pb-8">
        <Link href="/">
          <h1 className="font-bold text-xl">Yurikaza VPN</h1>
        </Link>
        <ul className="flex justify-between w-[25%] ml-auto mr-auto text-center items-center gap-8 text-black">
          <Link href="#">
            <li>Home</li>
          </Link>
          <Link href="/documentation">
            <li>Document</li>
          </Link>
          <li>Contact</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}
