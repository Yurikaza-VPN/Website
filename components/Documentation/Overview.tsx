import Image from "next/image";
import React from "react";

export default function Overview() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Introduction
      </h1>
      <ul>
        <li>
          <h1 className="text-3xl  font-semibold text-gray-800 pt-5 mb-6">
            What is a blockchain?
          </h1>
          <p>
            A blockchain is a public database that is updated and shared across
            many computers in a network.
          </p>
          <p>
            "Block" refers to data and state being stored in consecutive groups
            known as "blocks". If you send ETH to someone else, the transaction
            data needs to be added to a block to be successful.
          </p>
          <p>
            "Chain" refers to the fact that each block cryptographically
            references its parent. In other words, blocks get chained together.
            The data in a block cannot change without changing all subsequent
            blocks, which would require the consensus of the entire network.
          </p>
          <p>
            Every computer in the network must agree upon each new block and the
            chain as a whole. These computers are known as "nodes". Nodes ensure
            everyone interacting with the blockchain has the same data. To
            accomplish this distributed agreement, blockchains need a consensus
            mechanism.
          </p>
          <p>
            Ethereum uses a proof-of-stake-based consensus mechanism. Anyone who
            wants to add new blocks to the chain must stake ETH - the native
            currency in Ethereum - as collateral and run validator software.
            These "validators" can then be randomly selected to propose blocks
            that other validators check and add to the blockchain. There is a
            system of rewards and penalties that strongly incentivize
            participants to be honest and available online as much as possible.
          </p>
        </li>
        <li>
          <div className="">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              How Yurikaza VPN Works
            </h2>

            <Image
              src="/Yurikaza VPN.png"
              alt="Yurikaza VPN"
              width={1000}
              height={1000}
            />
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                1. Decentralized Architecture
              </h3>
              <p className="text-gray-700 mb-6">
                Yurikaza VPN operates on a decentralized network of nodes, which
                fundamentally differentiates it from traditional VPN services.
                In a conventional VPN, all traffic routes through a centralized
                server or a small set of servers owned by the VPN provider. This
                centralization can create vulnerabilities, such as single points
                of failure or potential data leaks if the server is compromised.
              </p>
              <p className="text-gray-700">
                In contrast, Yurikaza VPN uses a distributed network of
                independent nodes. Each node functions as a VPN server, allowing
                users to connect securely and privately. Because these nodes are
                distributed globally and operate independently, the network is
                highly resilient. If one node goes offline, the network remains
                operational, with other nodes continuing to provide service.
                This architecture also makes it much more difficult for any
                single entity to control or disrupt the entire network.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                2. Blockchain Integration
              </h3>
              <p className="text-gray-700 mb-6">
                The Yurikaza VPN network is tightly integrated with blockchain
                technology. The blockchain serves as the backbone for
                maintaining the network's state and ensuring trust among all
                participants. Here’s how it works:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <strong>State Management:</strong> Every node in the Yurikaza
                  network maintains a copy of the network's current state. This
                  state includes information about all active sessions, node
                  availability, and user interactions. When a user initiates a
                  VPN session, this request triggers a state change that is
                  recorded on the blockchain.
                </li>
                <li>
                  <strong>Consensus Mechanism:</strong> The Yurikaza network
                  uses a consensus mechanism to ensure that all nodes agree on
                  the state of the network. This consensus is critical for
                  maintaining a secure and accurate record of all activities
                  within the network. The consensus mechanism ensures that all
                  nodes verify and validate session requests, preventing
                  unauthorized actions or tampering.
                </li>
                <li>
                  <strong>Immutable Record:</strong> Once a session request is
                  validated and recorded on the blockchain, it becomes an
                  immutable part of the network's history. This means that no
                  one can alter or delete this record, providing a transparent
                  and tamper-proof log of all activities. This feature is
                  essential for maintaining the integrity and security of the
                  VPN service.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                3. Session Management
              </h3>
              <p className="text-gray-700 mb-6">
                In Yurikaza VPN, the process of establishing and managing a VPN
                session is decentralized and automated. Here’s a step-by-step
                breakdown:
              </p>
              <ul className="list-decimal pl-6 space-y-4 text-gray-700">
                <li>
                  <strong>Session Request:</strong> When a user wants to connect
                  to the internet via Yurikaza VPN, they send a session request
                  to the network. This request includes necessary information,
                  such as the user's identity (secured via cryptographic keys)
                  and the desired node to connect through.
                </li>
                <li>
                  <strong>Validation and Execution:</strong> The network's nodes
                  collectively validate the session request. This involves
                  checking the user's credentials, ensuring the chosen node is
                  available, and verifying that the session complies with the
                  network's rules. Once validated, the session is established,
                  and the user is connected to the internet via the selected
                  node.
                </li>
                <li>
                  <strong>State Propagation:</strong> The details of the
                  session, including its start time, participating nodes, and
                  any relevant metadata, are propagated across the network and
                  recorded on the blockchain. This ensures that all nodes are
                  aware of the session and that the record is secure and
                  immutable.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                4. User Security and Privacy
              </h3>
              <p className="text-gray-700 mb-6">
                Security and privacy are at the core of Yurikaza VPN’s design.
                Several layers of protection ensure that users' data remains
                secure and their online activities private:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <strong>Cryptographic Protection:</strong> Yurikaza VPN
                  employs advanced cryptographic mechanisms to secure all data
                  transmitted through the network. This includes encryption of
                  the user’s data as it passes through the VPN, ensuring that it
                  cannot be intercepted or read by unauthorized parties.
                </li>
                <li>
                  <strong>User Anonymity:</strong> The decentralized nature of
                  the network helps preserve user anonymity. Unlike traditional
                  VPNs, where the provider could potentially monitor user
                  traffic, Yurikaza VPN distributes the data across multiple
                  nodes, making it nearly impossible to trace or monitor a
                  single user’s activity.
                </li>
                <li>
                  <strong>Authorization and Control:</strong> Only the user who
                  initiates a VPN session has the authority to terminate it.
                  This control is enforced by the network’s cryptographic
                  protocols, ensuring that no other party can interfere with or
                  hijack a user’s session.
                </li>
                <li>
                  <strong>Distributed Trust:</strong> The reliance on a
                  decentralized network means that trust is distributed among
                  all nodes rather than being concentrated in a single entity.
                  This reduces the risk of malicious behavior and ensures that
                  the network remains secure and reliable.
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <h1 className="text-3xl font-semibold text-gray-800 pt-5 mb-6">
            Current Status:{" "}
          </h1>
          <p>
            Yurikaza VPN is currently under active development. The team is
            focused on building and refining the core features and
            infrastructure that will power the network. This document serves as
            an overview of the project's architecture, setup process, and future
            roadmap. It provides a detailed look at how Yurikaza VPN is designed
            to revolutionize online privacy by combining the strengths of
            decentralized networks and blockchain technology.
          </p>
        </li>
        <li className="">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Additions and Enhancements
          </h2>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Blockchain Details
            </h3>
            <p className="text-gray-700">
              We’ve added more context around how blockchains work, including
              the importance of blocks, chaining, and consensus mechanisms.
              These additions help to explain the fundamental principles that
              make blockchain technology secure and reliable.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Yurikaza VPN Network
            </h3>
            <p className="text-gray-700">
              The Yurikaza VPN network section has been expanded to describe how
              the decentralized network functions and the benefits of using a
              blockchain-based system. This includes details on how nodes
              interconnect and maintain consensus to ensure the privacy and
              security of user data.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Security Focus
            </h3>
            <p className="text-gray-700">
              We’ve placed a strong emphasis on the security and privacy
              features of Yurikaza VPN. The enhancements focus on how
              cryptographic mechanisms ensure data integrity and user control,
              making sure that only authorized users can initiate or terminate
              VPN sessions.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

/*
          <h1 className="text-3xl  font-semibold text-gray-800 pt-5 mb-3">
            Project Overview:{" "}
          </h1>
          <Image
            src="/Yurikaza VPN.png"
            alt="Yurikaza VPN"
            width={1000}
            height={1000}
          />
          <p>
            Yurikaza VPN is a decentralized VPN service built on cutting-edge
            blockchain technology. It allows users to connect securely and
            privately through a network of distributed nodes, each acting as an
            independent VPN server.
          </p>
          <p>
            In the Yurikaza VPN network, there is a decentralized system of
            interconnected nodes. Each node in the Yurikaza network operates as
            a VPN server, and the state of this network is agreed upon by all
            participants. Every node maintains a copy of the network’s state,
            ensuring consensus and security across the entire system.
          </p>
          <p>
            Any user on the Yurikaza network can request to connect through a
            VPN node to access the internet securely and privately. When a
            connection request is made, the network verifies, validates, and
            executes the request. This process results in a state change across
            the network, which is recorded and propagated throughout all
            participating nodes.
          </p>
          <p>
            These connection requests are referred to as "session requests." The
            record of all sessions and the current state of the network is
            stored on the blockchain, which is maintained and agreed upon by all
            nodes.
          </p>
          <p>
            Cryptographic mechanisms ensure that once session data is verified
            and added to the blockchain, it cannot be altered or tampered with.
            These mechanisms also guarantee that only authorized users (such as
            the original requester) can initiate or terminate a VPN session,
            ensuring that user data remains secure and private.
          </p>
*/
