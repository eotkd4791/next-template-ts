export default {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  testPathIgnroePatterns: ["<rootDir>/node_modules", "<rootDir>/.next"],
  testEnvironment: "jsdom",
  verbose: true,
};
