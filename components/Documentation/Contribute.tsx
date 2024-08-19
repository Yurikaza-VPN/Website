import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Contribute() {
  return (
    <div>
      <h1 className="text-6xl pb-8">Contribute to Yurikaza VPN</h1>
      <p>
        We're always looking for passionate contributors to help us improve
        Yurikaza VPN. Whether you're a developer, tester, or writer, your
        contributions can make a difference. Our project is hosted on GitHub,
        where you can find the source code, documentation, and issues. To get
        started, simply clone the repository, explore the codebase, and submit
        pull requests with your enhancements. We also welcome feedback and ideas
        in our community forums. Join us in building a more private and secure
        internet for everyone!
      </p>
      <Link
        href="https://github.com/Yurikaza-VPN"
        className="flex gap-3 items-center text-xl"
      >
        <FaGithub size={30} />
        Github
      </Link>
    </div>
  );
}
