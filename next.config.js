/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY:
      "AIzaSyC_anNIk3aPsyNhPQM_fLqQ1yoEKjlSGk0",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "jobie-farm.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "jobie-farm",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

module.exports = nextConfig;
