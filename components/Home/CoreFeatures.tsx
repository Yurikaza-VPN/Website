import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default function HomeCoreFeatures() {
  return (
    <ul className="flex !justify-center !items-center gap-24 w-[80%] ml-auto mr-auto pt-12">
      <li className="inline-block w-[60%]">
        <Card
          style={{
            height: "20rem",
            backgroundColor: "#000",
          }}
        >
          <CardBody>
            <Image src="/icons/code.svg" width={50} height={30} alt="code" />
            <h1 className="py-8 !text-[white] text-[2rem] font-bold">
              Decentralized Network
            </h1>
            <p className="!text-[#C1C1C1] leading-8">
              Yurikaza VPN uses blockchain to power a decentralized network of
              nodes, eliminating single points of failure and boosting security
              and privacy.
            </p>
          </CardBody>
        </Card>
      </li>
      <li className="inline-block w-[60%]">
        <Card
          style={{
            height: "20rem",
            backgroundColor: "#000",
          }}
        >
          <CardBody>
            <Image src="/icons/Vector.svg" width={30} height={30} alt="code" />
            <h1 className="py-8 !text-[white] text-[2rem] font-bold">
              Military-Grade Encryption
            </h1>
            <p className="!text-[#C1C1C1] leading-8">
              Our VPN encrypts all data with military-grade protocols, ensuring
              your online activities are secure and private from any threats.
            </p>
          </CardBody>
        </Card>
      </li>
      <li className="inline-block w-[60%]">
        <Card
          style={{
            height: "20rem",
            backgroundColor: "#000",
          }}
        >
          <CardBody>
            <Image
              src="/icons/smartphone.svg"
              width={30}
              height={30}
              alt="code"
            />
            <h1 className="py-8 !text-[white] text-[2rem] font-bold">
              Enhanced Anonymity
            </h1>
            <p className="!text-[#C1C1C1] leading-8 w-[100%]">
              Experience true anonymity with Yurikaza VPN. Your connection is
              routed through multiple decentralized nodes, keeping your identity
              and data completely untraceable.
            </p>
          </CardBody>
        </Card>
      </li>
    </ul>
  );
}
