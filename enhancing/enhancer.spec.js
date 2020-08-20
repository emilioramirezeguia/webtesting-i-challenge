const enhancer = require("./enhancer.js");
// test away!

describe.skip("repair(item)", () => {
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

describe("success(item)", () => {
  it("should increase enhancement by 1 if level not 20", () => {
    // Arrange
    const originalItem1 = {
      enhancement: 18,
    };

    // Act
    const result1 = enhancer.success(originalItem1);

    // Assert
    expect(result1).toHaveProperty("enhancement", 19);
    expect(result1).not.toHaveProperty("enhancement", 18);
  });

  it("should not increase enhancement if level is 20", () => {
    // Arrange
    const originalItem2 = {
      enhancement: 20,
    };

    // Act
    const result1 = enhancer.success(originalItem2);

    // Assert
    expect(result1).toHaveProperty("enhancement", 20);
    expect(result1).not.toHaveProperty("enhancement", 21);
  });
});
