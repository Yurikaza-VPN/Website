import { Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-5 bg-none !text-[white]">
      <h1 className="font-bold text-xl">Yurikaza VPN</h1>
      <ul className="flex justify-between w-[25%] ml-auto mr-auto text-center items-center">
        <li>Home</li>
        <li>Document</li>
        <li>Contact</li>
        <li>Support</li>
      </ul>
      <Button _activeLink="#" className="!bg-[#C1C1C1] !text-[#000000]">
        Get started free
      </Button>
    </div>
  );
}
