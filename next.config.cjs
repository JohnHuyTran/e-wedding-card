/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	eslint: {
		dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
	typescript: {
		
		ignoreBuildErrors: true,
	  },
};

module.exports = nextConfig;
