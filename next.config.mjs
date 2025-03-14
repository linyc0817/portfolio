import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
