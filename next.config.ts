import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateStaticParams: async () => {
    const { categories, blocks } = require('./data/blocks')
    return {
      staticParams: [
        { path: ['/'] },
        ...categories.map((category: string) => ({ path: [`/${category}`] })),
        ...blocks.map((block: { category: string; slug: string }) => ({ path: [`/${block.category}`, block.slug] }))
      ]
    }
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
