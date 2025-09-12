const siteConfig = {
  siteName: 'From Design to Development'
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ...siteConfig,
    NEXT_PUBLIC_siteName: siteConfig.siteName
  }
};

module.exports = nextConfig;