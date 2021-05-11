import {expect} from "chai";
import index from "./index";

describe("Fake", () => {
  it("should do something", () => {
    expect(index.version).to.equal(require("../package.json").version);
  });
});
