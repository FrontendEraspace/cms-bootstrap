import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

/** @type {import('next').NextConfig} */
const nextConfig = withHydrationOverlay({
  reactStrictMode: true,
});

export default nextConfig;
