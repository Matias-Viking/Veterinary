/// <reference types="vitest"/>
import "reflect-metadata";
import { defineConfig } from "vitest/config";

export default defineConfig({
    root: __dirname,
    test: {
        envDir: "./",
        setupFiles: ["vitest/env-vars.ts"],
        globals: true,
        environment: "node",
        include: ["tests/**/*.test.ts"],
        reporters: ["verbose"],
        coverage: {
            reporter: ["text", "html", "lcov"],
            include: ["src/**/*.ts"],
            exclude: ["**/*.test.ts", "**/*.spec.ts", "tests/**"],
        },
    },
});
