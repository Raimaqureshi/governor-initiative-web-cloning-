/** @type {import('next').NextConfig} */
const config = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.governorsindh.com',
          pathname: '/**', 
        },
        {
          protocol: 'https',
          hostname: '1drv.ms',
          pathname: '/**', 
        },
      ],
    },
  };
  
  export default config;
  