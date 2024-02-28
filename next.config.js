/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
	typescript: {
		
		ignoreBuildErrors: true,
	  },
};

export default nextConfig;
