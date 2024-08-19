import React from "react";

import Navbar from "@/components/Navigation/Navbar";
import { AppShell } from "@saas-ui/react";

import "./contact.css";
import { FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";

export default function page() {
  return (
    <AppShell>
      <div className="bg-[url('/Space-bg.png')] absolute -z-20 top-0 h-[200vh] w-[100vw]">
        <div className="bg-[url('/Square-bg.svg')] absolute -z-30 top-[0rem] h-[200vh] w-[100vw]"></div>
        <Navbar />
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl w-full ml-auto mr-auto">
          <h1 className="text-7xl font-bold text-center text-[white] my-12">
            Contact Us
          </h1>
          <p className="!text-[white] text-lg mb-6">
            We’re here to help! Whether you have questions, need support, or
            want to provide feedback, the Yurikaza VPN team is here to assist
            you. Your privacy and security are our top priorities, and we’re
            committed to ensuring you have the best experience with our service.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold !text-[white] mb-4">
              How to Reach Us
            </h2>

            <h3 className="text-xl font-semibold !text-[white] mb-2">Email</h3>
            <p className="!text-[white]">
              Email:{" "}
              <a
                href="mailto:yurikazavpn@gmail.com"
                className="!text-[white] font-medium border-b-2 border-gray-800 hover:text-gray-900 hover:border-gray-900 transition-colors"
              >
                yurikazavpn@gmail.com
              </a>
            </p>

            <h3 className="text-xl font-semibold !text-[white] mt-6 mb-2">
              Social Media
            </h3>
            <p className=" !text-[white] mb-4">
              Stay connected with us on social media for the latest updates and
              support:
            </p>
            <p className="!text-[white] flex flex-col gap-2">
              <a
                href="https://twitter.com/YurikazaVPN"
                target="_blank"
                className="text-white-800 font-medium  hover:text-gray-900 hover:border-gray-900 transition-colors flex gap-4 items-center"
              >
                <FaTwitter /> @YurikazaVPN
              </a>
              <br />
              <a
                href="https://www.linkedin.com/company/yurikaza-vpn"
                target="_blank"
                className="!text-[white] font-medium  hover:text-gray-900 hover:border-gray-900 transition-colors flex gap-4 items-center"
              >
                <FaLinkedin /> Yurikaza VPN
              </a>
              <br />
              <a
                href="https://www.reddit.com/r/YurikazaVPN"
                target="_blank"
                className="!text-[white] font-medium   hover:text-gray-900 hover:border-gray-900 transition-colors flex gap-4 items-center"
              >
                <FaReddit /> r/YurikazaVPN
              </a>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold !text-[white] mb-4">
              Feedback
            </h2>
            <p className="!text-[white]">
              We value your feedback and are always looking for ways to improve
              Yurikaza VPN. If you have suggestions, comments, or ideas, please
              let us know by sending an email to{" "}
              <a
                href="mailto:yurikazavpn@gmail.com"
                className="text-white-500 underline"
              >
                yurikazavpn@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold !text-[white] mb-4">
              Join the Yurikaza Community
            </h2>
            <p className="!text-[white] ">
              Interested in contributing to the Yurikaza VPN project? Visit our{" "}
              Contribute page to learn how you can get involved or check out our{" "}
              <a
                href="https://github.com/Yurikaza-VPN"
                className="text-white-500 underline"
              >
                GitHub repository
              </a>{" "}
              for the latest code and documentation.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
