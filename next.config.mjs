/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srjkjjkcdhzrihqwtrzw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/products-images/**",
      },
      {
        protocol: "https",
        hostname: "srjkjjkcdhzrihqwtrzw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/collections-images/**",
      },
    ],
  },
};

export default nextConfig;
