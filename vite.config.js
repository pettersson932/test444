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
          statements: 80, // Fail if statement coverage is below 80%
          branches: 80, // Fail if branch coverage is below 80%
          functions: 80, // Fail if function coverage is below 80%
          lines: 80, // Fail if line coverage is below 80%
        },
      },
    },
  },
});
