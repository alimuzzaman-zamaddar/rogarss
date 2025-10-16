/** @type {import('next').NextConfig} */
const siteUrl = process.env.NEXT_PUBLIC_ASSET_URL;

// Default fallback domain
let domain = "example.com";

if (siteUrl) {
  try {
    const parsed = new URL(siteUrl);
    domain = parsed.hostname;
  } catch {
    console.warn("⚠️ Invalid NEXT_PUBLIC_ASSET_URL, using fallback domain.");
  }
} else {
  console.warn("⚠️ NEXT_PUBLIC_ASSET_URL not set, using fallback domain.");
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: domain,
        port: "", // Optional: leave empty unless using custom port
        pathname: "/**", // Allow all image paths
      },
    ],
  },
};

module.exports = nextConfig;
