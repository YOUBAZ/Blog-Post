import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import "dotenv/config";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.BASE_URL || "http://localhost:3000",
      },
    },
  },
  plugins: [react()],
});
