/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/quicknote",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/started",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
