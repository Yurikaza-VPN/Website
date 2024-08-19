import React from "react";

export default function Installation() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        How to Become a Node in Yurikaza VPN
      </h1>
      <p>
        Becoming a node in the Yurikaza VPN network allows you to actively
        contribute to the security and functionality of a decentralized,
        blockchain-based VPN service. By running a node, you help maintain the
        network's distributed architecture, ensuring that users can securely and
        privately connect to the internet. Here’s how you can set up and run
        your own node:
      </p>
      <h1 className="text-3xl pt-5 pb-3">1. System Requirements</h1>
      <p>
        The system requirements vary depending on the node type that the
        Yurikaza network automatically assigns to you, based on your machine's
        capabilities and your uptime:
      </p>

      <p>
        The system requirements vary depending on the node type that the
        Yurikaza network automatically assigns to you, based on your machine's
        capabilities and your uptime:
      </p>

      <h3>Light Node:</h3>
      <ul>
        <li>
          <strong>CPU:</strong> Dual-core processor (2 cores).
        </li>
        <li>
          <strong>RAM:</strong> 4 GB.
        </li>
        <li>
          <strong>Storage:</strong> 50 GB SSD.
        </li>
        <li>
          <strong>Internet Connection:</strong> Minimum upload speed of 5 Mbps.
        </li>
        <li>
          <strong>Uptime:</strong> Suitable for machines that may not be online
          continuously.
        </li>
      </ul>

      <h3>Full Node:</h3>
      <ul>
        <li>
          <strong>CPU:</strong> Quad-core processor (4 cores).
        </li>
        <li>
          <strong>RAM:</strong> 16 GB.
        </li>
        <li>
          <strong>Storage:</strong> 500 GB SSD.
        </li>
        <li>
          <strong>Internet Connection:</strong> Minimum upload speed of 10 Mbps.
        </li>
        <li>
          <strong>Uptime:</strong> Requires consistent online presence to handle
          data validation and storage.
        </li>
      </ul>

      <h3>Archive Node:</h3>
      <ul>
        <li>
          <strong>CPU:</strong> High-performance processor (8 cores or more).
        </li>
        <li>
          <strong>RAM:</strong> 32 GB or more.
        </li>
        <li>
          <strong>Storage:</strong> 2 TB SSD (or more, depending on historical
          data accumulation).
        </li>
        <li>
          <strong>Internet Connection:</strong> Minimum upload speed of 20 Mbps.
        </li>
        <li>
          <strong>Uptime:</strong> Requires high uptime to maintain the entire
          history of session data and serve as a critical resource for the
          network.
        </li>
      </ul>

      <p>
        <strong>Operating System:</strong> Linux (preferred), Windows, or macOS
        for all node types.
      </p>
      <p>
        <strong>Network Configuration:</strong> Open necessary ports in your
        firewall and router to allow the node to communicate with other nodes in
        the Yurikaza network.
      </p>

      <h2>2. Download and Install the Yurikaza VPN Software</h2>
      <ul>
        <li>
          Visit the{" "}
          <a href="https://github.com/Yurikaza-VPN">
            Yurikaza GitHub repository
          </a>{" "}
          to download the latest version of the Yurikaza VPN software.
        </li>
        <li>
          Follow the installation instructions for your operating system. You
          may need to install dependencies such as Docker if required by the
          Yurikaza software.
        </li>
      </ul>

      <h2>3. Automatic Node Type Assignment</h2>
      <p>
        In the Yurikaza VPN network, the system automatically assigns your node
        type based on the strength of your machine and the amount of time you
        spend participating in the network.
      </p>
      <ul>
        <li>
          <strong>Performance Evaluation:</strong> When you set up your node,
          the software evaluates your hardware capabilities (CPU, RAM, storage,
          and bandwidth) and how consistently your node remains online.
        </li>
        <li>
          <strong>Node Type Assignment:</strong>
        </li>
        <ul>
          <li>
            <strong>Light Nodes:</strong> Assigned to machines with lower specs
            or those online for shorter periods.
          </li>
          <li>
            <strong>Full Nodes:</strong> Assigned to more powerful machines that
            can handle extensive data processing and storage.
          </li>
          <li>
            <strong>Archive Nodes:</strong> Assigned to the most robust machines
            with significant storage capacity and uptime, maintaining the entire
            history of session data.
          </li>
        </ul>
      </ul>
      <p>
        You don’t need to worry about selecting your node type—the Yurikaza
        network will handle that based on your machine's performance and
        availability.
      </p>

      <h2>4. Start Your Node</h2>
      <ul>
        <li>Run the Yurikaza VPN software with your configured settings.</li>
        <li>
          Monitor the logs to ensure your node connects to the network and
          begins syncing data.
        </li>
        <li>
          The initial synchronization may take some time as it downloads and
          verifies the necessary session data, depending on the assigned node
          type.
        </li>
      </ul>

      <h2>5. Mobile Node Options (Under Development)</h2>
      <p>
        We are actively developing mobile applications that will allow users to
        run Yurikaza nodes directly from their smartphones. These apps will
        automatically assign light node functionality, making it easier to
        contribute with minimal hardware requirements.
      </p>
      <p>
        While these apps are still in development, you can stay updated on their
        progress and be among the first to try them once they’re available.
      </p>

      <h2>6. Contribute to the Network</h2>
      <ul>
        <li>
          Once set up, your node will participate in maintaining the Yurikaza
          VPN network, validating session requests, storing data, and helping
          secure the network.
        </li>
        <li>
          Ensure your node remains online as much as possible to maximize its
          contribution and potentially be assigned a higher node type over time.
        </li>
      </ul>

      <h2>7. Stay Updated</h2>
      <ul>
        <li>
          Regularly check for software updates on the{" "}
          <a
            href="https://github.com/Yurikaza-VPN"
            className="underline"
            target="_blank"
          >
            Yurikaza GitHub repository
          </a>{" "}
          to ensure your node is running the latest version.
        </li>
        <li>
          Participate in the Yurikaza community to stay informed about best
          practices, new features, and improvements.
        </li>
      </ul>

      <p>
        By becoming a node in the Yurikaza VPN network, you play a crucial role
        in supporting a decentralized, secure, and private internet. The network
        automatically assigns your node type based on your machine's
        capabilities and your participation, ensuring the best use of resources
        across the network. Stay tuned for our mobile app development for an
        even more accessible way to join the network!
      </p>
    </div>
  );
}
