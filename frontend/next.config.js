/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mandacaru.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ufc.br",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.freeiconspng.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.freecreatives.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
