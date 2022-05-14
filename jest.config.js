module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js",
  },
  moduleFileExtensions: ["js", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  testMatch: ["<rootDir>/test/**/*.spec.js"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,vue}", "!**/node_modules/**"],
  coverageDirectory: "<rootDir>/coverage",
};
