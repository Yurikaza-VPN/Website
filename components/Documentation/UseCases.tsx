import React from "react";

export default function UseCases() {
  return (
    <div className="py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Use Cases
        </h1>
        <div className="space-y-10">
          {/* Personal Privacy Protection */}
          <div>
            <h2 className="text-2xl font-semibold text-black-600 mb-4">
              Personal Privacy Protection
            </h2>
            <p className="text-gray-700">
              <strong>Scenario:</strong> You’re an individual who values privacy
              and wants to keep your online activities hidden from prying eyes,
              such as ISPs, government surveillance, or hackers.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>How Yurikaza Helps:</strong> Yurikaza VPN routes your
              internet traffic through a decentralized network of nodes,
              ensuring that your data remains encrypted and your IP address is
              masked. The use of blockchain technology ensures that session data
              cannot be tampered with or monitored by a central authority.
            </p>
          </div>

          {/* Secure Business Communications */}
          <div>
            <h2 className="text-2xl font-semibold text-black-600 mb-4">
              Secure Business Communications
            </h2>
            <p className="text-gray-700">
              <strong>Scenario:</strong> Your company requires a secure method
              for employees to access sensitive information remotely, especially
              in an era where remote work is increasingly common.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>How Yurikaza Helps:</strong> Yurikaza VPN provides a
              robust solution for encrypting corporate communications, ensuring
              that sensitive data transmitted over the internet is secure from
              potential breaches. The decentralized nature of the network
              reduces the risk of single points of failure, which are common in
              traditional VPN services.
            </p>
          </div>

          {/* Bypassing Censorship and Geo-restrictions */}
          <div>
            <h2 className="text-2xl font-semibold text-black-600 mb-4">
              Bypassing Censorship and Geo-restrictions
            </h2>
            <p className="text-gray-700">
              <strong>Scenario:</strong> You’re in a country where internet
              access is restricted, or certain websites and services are blocked
              due to government censorship or geo-restrictions.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>How Yurikaza Helps:</strong> Yurikaza VPN allows you to
              bypass these restrictions by routing your connection through nodes
              in regions where the content is accessible. The decentralized
              network makes it difficult for governments or ISPs to block
              access, providing you with greater freedom on the internet.
            </p>
          </div>

          {/* Protecting Sensitive Data in Public Networks */}
          <div>
            <h2 className="text-2xl font-semibold text-black-600 mb-4">
              Protecting Sensitive Data in Public Networks
            </h2>
            <p className="text-gray-700">
              <strong>Scenario:</strong> You frequently use public Wi-Fi
              networks, such as in cafes or airports, where your data could be
              vulnerable to eavesdropping or man-in-the-middle attacks.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>How Yurikaza Helps:</strong> When connected to a public
              network, Yurikaza VPN encrypts your internet traffic, ensuring
              that your personal information, passwords, and other sensitive
              data are protected from malicious actors who might be monitoring
              the network.
            </p>
          </div>

          {/* Decentralized Internet Access */}
          <div>
            <h2 className="text-2xl font-semibold text-black-600 mb-4">
              Decentralized Internet Access
            </h2>
            <p className="text-gray-700">
              <strong>Scenario:</strong> You support the concept of a
              decentralized internet where power is distributed among users
              rather than centralized in large corporations or governments.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>How Yurikaza Helps:</strong> By using Yurikaza VPN, you
              contribute to a decentralized network that empowers users,
              distributes control, and prevents central authorities from
              monopolizing internet access or data. This supports a free and
              open internet where users maintain control over their privacy and
              data.
            </p>
          </div>

          {/* Developers and Tech Enthusiasts */}
          <div>
            <h2 className="text-2xl font-semibold text-black-600 mb-4">
              Developers and Tech Enthusiasts
            </h2>
            <p className="text-gray-700">
              <strong>Scenario:</strong> You’re a developer or tech enthusiast
              interested in contributing to or exploring a cutting-edge
              decentralized VPN technology.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>How Yurikaza Helps:</strong> Yurikaza VPN is an
              open-source project that invites developers to participate in its
              development, experiment with blockchain-based networking, and
              contribute to the evolution of secure, decentralized internet
              technologies. By running a node or contributing code, you can be
              part of an innovative community pushing the boundaries of online
              privacy and security.
            </p>
          </div>

          {/* Journalists and Activists */}
          <div>
            <h2 className="text-2xl font-semibold text-black-600 mb-4">
              Journalists and Activists
            </h2>
            <p className="text-gray-700">
              <strong>Scenario:</strong> As a journalist, activist, or
              researcher, you need to protect your communications and data from
              surveillance, particularly when working in regions with oppressive
              regimes.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>How Yurikaza Helps:</strong> Yurikaza VPN provides a
              secure and anonymous way to communicate, share information, and
              access resources without the risk of being tracked or censored.
              Its decentralized nature makes it difficult for authorities to
              shut down or monitor, ensuring your work remains private and
              protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
