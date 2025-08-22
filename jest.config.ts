import { createDefaultPreset } from "ts-jest";

/** @type {import("jest").Config} **/
const tsJestTransformCfg = createDefaultPreset().transform;

export default {
  testEnvironment: "jsdom", // for React testing
  transform: {
    ...tsJestTransformCfg,
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};