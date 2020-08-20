const enhancer = require("./enhancer.js");
// test away!

describe("repair(item)", () => {
  it("should restore an item's durability to 100", () => {
    // Arrange
    const originalItem = {};

    const repairedItem = {
      ...originalItem,
      durability: 100,
    };

    // Act
    const result = enhancer.repair(originalItem);

    // Assert
    expect(result).toEqual(repairedItem);
    expect(originalItem).not.toEqual(repairedItem);
  });
});
