const withPlugins = require('next-compose-plugins');
const images = require('next-images');

const siteConfig = {
  siteName: 'From Design to Development'
};

module.exports = withPlugins([
  images
], {
  env: {
    ...siteConfig,
    NEXT_PUBLIC_siteName: siteConfig.siteName
  }
});