import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  testEnvironment: "jsdom",
  verbose: true,
};

export default createJestConfig(customJestConfig);
