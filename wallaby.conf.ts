module.exports = function (wallaby) {
  return {
    files: [
      "./src/**/*.+(js|ts)",
      "./jest.setup.ts",
      { pattern: "/src/__tests__/**/*test.+(js|ts)", ignore: true },
    ],

    tests: ["/src/__tests__/**/*test.+(js|ts)"],

    env: {
      type: "node",
    },

    testFramework: "jest",

    // compilers: {
    //   "**/*.+(js|ts)": wallaby.compilers.babel(),
    // },

    // for node.js test you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  };
};
