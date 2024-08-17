/** @type {import('next').NextConfig} */
import i18n from "./next-i18next.config.js";

const nextConfig = {
  i18n: i18n.i18n,
  reactStrictMode: true,
  output: "standalone",
};

export default nextConfig;
