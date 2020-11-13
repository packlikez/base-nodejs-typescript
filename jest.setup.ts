declare module NodeJS {
  interface Global {
    td: object;
  }
}

global.td = require("testdouble");
require("testdouble-jest")(global.td, jest);
