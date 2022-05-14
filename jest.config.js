module.exports = {
  rootDir: __dirname,
  verbose: true,
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
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/views/**/*.vue",
    "<rootDir>/src/utils/**/*.js",
    "!**/node_modules/**",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
