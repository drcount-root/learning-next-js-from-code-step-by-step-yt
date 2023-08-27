/** @type {import('next').NextConfig} */
const nextConfig = {
  // to export static html from dynamic routes during production build
  // output:"export",
  redirects: async () => {
    return [
      {
        source: "/redirect",
        destination: "/",
        permanent: false,
      },
      {
        source: "/redirect2",
        destination: "/",
        permanent: false,
      },
      {
        source: "/redirectnest/:rednest",
        destination: "/",
        permanent: false,
      },
      {
        source: "/notpresent",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
