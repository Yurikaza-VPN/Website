import React from "react";

export default function Overview() {
  return (
    <div>
      <h1 className="text-6xl !color-[#C1C1C1] pb-3">Introduction</h1>
      <ul>
        <li>
          <h1 className="text-3xl pt-5 pb-3">What is a blockchain?</h1>
          <p className="pb-2 ">
            A blockchain is a public database that is updated and shared across
            many computers in a network.
          </p>
          <p className="pb-2">
            "Block" refers to data and state being stored in consecutive groups
            known as "blocks". If you send ETH to someone else, the transaction
            data needs to be added to a block to be successful.
          </p>
          <p className="pb-2">
            "Chain" refers to the fact that each block cryptographically
            references its parent. In other words, blocks get chained together.
            The data in a block cannot change without changing all subsequent
            blocks, which would require the consensus of the entire network.
          </p>
          <p className="pb-2 leading-7">
            Every computer in the network must agree upon each new block and the
            chain as a whole. These computers are known as "nodes". Nodes ensure
            everyone interacting with the blockchain has the same data. To
            accomplish this distributed agreement, blockchains need a consensus
            mechanism.
          </p>
          <p className="pb-2 leading-7">
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
          <h1 className="text-3xl pt-5 pb-3">Project Overview: </h1>
          <p>
            Yurikaza VPN is a decentralized VPN service built on blockchain
            technology. Each node in the network acts as an independent VPN
            server, providing users with enhanced security, privacy, and
            anonymity.
          </p>
        </li>
        <li>
          <h1 className="text-3xl pt-5 pb-3">Current Status:: </h1>
          <p>
            The project is currently under development, with ongoing work on
            core features and infrastructure. This document provides an overview
            of the architecture, setup process, and roadmap.
          </p>
        </li>
      </ul>
    </div>
  );
}
