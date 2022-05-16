module.exports = {
  rootDir: __dirname,
  verbose: false,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // "^vue$": "vue/dist/vue.common.js",
  },
  moduleFileExtensions: ["js", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  testMatch: ["<rootDir>/_test_/**/*.spec.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.vue",
    "<rootDir>/src/utils/**/*.js",
    "!**/node_modules/**",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 50,
      statements: 60,
    },
  },
};
