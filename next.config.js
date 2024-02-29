/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },

    eslint: {
        dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: "file-loader",
            options: {
                outputPath: "images",
            },
        });
        return config;
    },

    output: "export",
};

module.exports = nextConfig;
