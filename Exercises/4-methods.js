"use strict";

const methods = iface => {
  const resultIHateTests = [];
  for (const key in iface) {
    if (typeof iface[key] === "function") {
      resultIHateTests.push([key, iface[key].length]);
    }
  }
  return resultIHateTests;
};
module.exports = { methods };
