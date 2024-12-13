// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Simulate browser environment with jsdom
    globals: true, // Global variables like `describe`, `it`, `expect`, etc.
    setupFiles: "./src/setupTests.js", // Path to setup file (for jest-dom and other setups)
    coverage: {
      reporter: ["text", "lcov"], // Text output in terminal, lcov for HTML report
      reportsDirectory: "./coverage", // Directory where coverage reports will be stored
      threshold: {
        global: {
          statements: 50, // Fail if statement coverage is below 80%
          branches: 50, // Fail if branch coverage is below 80%
          functions: 50, // Fail if function coverage is below 80%
          lines: 50, // Fail if line coverage is below 80%
        },
      },
    },
  },
});
