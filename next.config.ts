/** @type {import('next').NextConfig} */
const siteUrl = process.env.NEXT_PUBLIC_ASSET_URL;

let dynamicPattern = null;
if (siteUrl) {
  try {
    const u = new URL(siteUrl);
    dynamicPattern = {
      protocol: u.protocol.replace(":", ""),
      hostname: u.hostname,
      pathname: "/**",
    };
  } catch {
    console.warn(
      "⚠️ Invalid NEXT_PUBLIC_ASSET_URL, skipping dynamic image host."
    );
  }
} else {
  console.warn(
    "⚠️ NEXT_PUBLIC_ASSET_URL not set, no dynamic image host added."
  );
}

const nextConfig = {
  images: {
    remotePatterns: [
      ...(dynamicPattern ? [dynamicPattern] : []),
      { protocol: "https", hostname: "i.ibb.co", pathname: "/**" }, // ✅ correct host
    ],
  },
};

module.exports = nextConfig;
