/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    extend: {},
    screens: {
      'lg': '900px',
      // other breakpoints...
    },
  },
  eslint: {
    // ❗ Ignores ESLint errors during `next build`
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
