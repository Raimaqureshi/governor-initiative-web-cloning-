import { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.governorsindh.com',
        pathname: '/**', // Optional: Matches all paths
      },
      {
        protocol: 'https',
        hostname: '1drv.ms',
        pathname: '/**', // Optional: Matches all paths
      },
    ],
  },
};

export default config;
