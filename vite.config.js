import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { host: "localhost", port: 5175 },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js",
    // coverage: {
    //   reporter: ["text", "json", "html"],
    // },
  },
});