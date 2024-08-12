import Image from "next/image";

export default function HomeCoreFeatures() {
  return (
    <div className="flex justify-between w-[95%] ml-auto mr-auto pt-5 flex-col">
      <ul>
        <li>
          <Image src="/icons/code.svg" width={30} height={30} alt="code" />
          <h1>Decentralized Network</h1>
          <p>
            Yurikaza VPN uses blockchain to power a decentralized network of
            nodes, eliminating single points of failure and boosting security
            and privacy.
          </p>
        </li>
        <li>
          <Image src="/icons/Vector.svg" width={30} height={30} alt="code" />
          <h1>Military-Grade Encryption</h1>
          <p>
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
          <h1>Enhanced Anonymity</h1>
          <p>
            Experience true anonymity with Yurikaza VPN. Your connection is
            routed through multiple decentralized nodes, keeping your identity
            and data completely untraceable.
          </p>
        </li>
      </ul>
    </div>
  );
}
