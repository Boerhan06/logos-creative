/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as static site (generates /out folder)
  output: 'export',
  // Image handling: disable Next.js image optimization for static export
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
