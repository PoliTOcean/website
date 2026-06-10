/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    unoptimized: false,
  },
  allowedDevOrigins: [
    "192.168.56.1",
    "192.168.56.1:3000",
    "localhost",
    "*.ngrok-free.app",
    "*.ngrok.app",
    "*.ngrok.io"
  ]
};

export default nextConfig;
