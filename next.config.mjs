/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
      {
        protocol: "https",
        hostname: "srjkjjkcdhzrihqwtrzw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/slider-images/**",
      },
      {
        protocol: "https",
        hostname: "srjkjjkcdhzrihqwtrzw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/header-imgs/**",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
        pathname: "/platform/profilepic/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

export default nextConfig;
