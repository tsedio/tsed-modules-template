// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  rootDir: __dirname,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "<rootDir>/coverage",

  // moduleDirectories: ["node_modules", "packages"],
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [],
  moduleNameMapper: {},

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    // global: {
    //   branches: 70,
    //   functions: 70,
    //   lines: 70,
    //   statements: 70
    // }
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.[jt]s?(x)",
    "<rootDir>/**/src/**/?(*.)+(spec|test).[tj]s?(x)",
    "<rootDir>/**/test/**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  // A map from regular expressions to paths to transformers
  transform: {
    "\\.(ts)$": "ts-jest"
  },

  preset: "ts-jest",

  modulePathIgnorePatterns: ["<rootDir>/lib", "<rootDir>/dist"],
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: []
};
