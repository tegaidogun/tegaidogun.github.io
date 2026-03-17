import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		domains: [],
		unoptimized: true,
	},
	experimental: {
		optimizePackageImports: ["lucide-react"],
	},
	turbopack: {},
};

export default nextConfig;
