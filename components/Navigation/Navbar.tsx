import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-5 bg-none !text-[white]">
      <h1 className="font-bold text-xl">Yurikaza VPN</h1>
      <ul className="flex justify-between w-[25%] ml-auto mr-auto text-center items-center">
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
      <Link href="#HomeGettingStarted" className="scroll-smooth">
        <Button _activeLink="#" className="!bg-[#C1C1C1] !text-[#000000]">
          Get started free
        </Button>
      </Link>
    </div>
  );
}
