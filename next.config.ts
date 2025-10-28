/** @type {import('next').NextConfig} */
const siteUrl = process.env.NEXT_PUBLIC_ASSET_URL;

let dynamicPattern = null;

if (siteUrl) {
  try {
    const u = new URL(siteUrl);
    dynamicPattern = {
      protocol: u.protocol.replace(":", ""), // "https" or "http"
      hostname: u.hostname, // e.g. cdn.example.com
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
      // If an ASSET_URL was provided and valid, include it
      ...(dynamicPattern ? [dynamicPattern] : []),

      // i.ibb — most ibb links use this host
      { protocol: "https", hostname: "i.ibb.co", pathname: "/**" },

      // If your link truly uses i.ibb.co.com keep this; otherwise you can remove it
      { protocol: "https", hostname: "i.ibb.co.com", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
