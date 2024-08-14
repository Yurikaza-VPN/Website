import Image from "next/image";

export default function HomeCoreFeatures() {
  return (
    <div className="w-[95%] !ml-auto !mr-auto !justify-center">
      <ul className="flex !justify-center  pt-5 items-center">
        <li>
          <Image src="/icons/code.svg" width={50} height={30} alt="code" />
          <h1 className="py-8 !text-[white] text-[2rem] font-bold">
            Decentralized Network
          </h1>
          <p className="!text-[#C1C1C1] leading-8 w-[70%]">
            Yurikaza VPN uses blockchain to power a decentralized network of
            nodes, eliminating single points of failure and boosting security
            and privacy.
          </p>
        </li>
        <li>
          <Image src="/icons/Vector.svg" width={30} height={30} alt="code" />
          <h1 className="py-8 !text-[white] text-[2rem] font-bold">
            Military-Grade Encryption
          </h1>
          <p className="!text-[#C1C1C1] leading-8 w-[70%]">
            Our VPN encrypts all data with military-grade protocols, ensuring
            your online activities are secure and private from any threats.
          </p>
        </li>
        <li>
          <Image
            src="/icons/smartphone.svg"
            width={30}
            height={30}
            alt="code"
          />
          <h1 className="py-8 !text-[white] text-[2rem] font-bold">
            Enhanced Anonymity
          </h1>
          <p className="!text-[#C1C1C1] leading-8 w-[70%]">
            Experience true anonymity with Yurikaza VPN. Your connection is
            routed through multiple decentralized nodes, keeping your identity
            and data completely untraceable.
          </p>
        </li>
      </ul>
    </div>
  );
}
