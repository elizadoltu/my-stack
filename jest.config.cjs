module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    ".+\\.(css|scss|png|jpg|jpeg|gif|svg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  }
};
