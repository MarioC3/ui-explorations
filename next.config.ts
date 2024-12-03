import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    transpilePackages: ['jotai-devtools'],
	experimental: {
		swcPlugins: [
			['@swc-jotai/react-refresh', {}],
			['@swc-jotai/debug-label', {}],
		],
	},
};

export default nextConfig;
