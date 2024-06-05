const { withFaust } = require("@faustwp/core");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.ranafrica.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ranafrica.wpenginepowered.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ranafricastg.wpenginepowered.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "localhost:3000",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rananet.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  env: {
    GOOGLE_TRANSLATION_CONFIG: JSON.stringify({
      languages: [
        { title: "Arabic", name: "ar" },
        { title: "Chinese (Simplified)", name: "zh-CN" },
        { title: "Chinese (Traditional)", name: "zh-TW" },
        { title: "English", name: "en" },
        { title: "Français", name: "fr" },
        { title: "Japanese", name: "ja" },
        { title: "Portuguese", name: "pt" },
        { title: "Russian", name: "ru" },
        { title: "Spanish", name: "es" },
      ],
      defaultLanguage: "en",
    }),
  },
};
const withFaustConfig = {
  previewDestination: "/previews",
};
module.exports = withFaust(nextConfig, withFaustConfig);
