/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Add trailing slash to all generated URLs
  trailingSlash: true,
  // Optional: Change the output directory (default is 'out')
  distDir: "dist", // Example: Change output to 'dist'
  // ... other configurations
};

export default nextConfig;
