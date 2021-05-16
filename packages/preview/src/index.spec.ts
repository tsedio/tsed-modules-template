import index from "./index";

describe("Fake", () => {
  it("should do something", () => {
    expect(index.version).toEqual(require("../package.json").version);
  });
});
