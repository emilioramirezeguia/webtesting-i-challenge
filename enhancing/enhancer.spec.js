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

describe("fail(item)", () => {
  it("should decrease durability by 5 if enhancement is less than 15", () => {
    // Arrange
    const originalItem1 = {
      enhancement: 10,
      durability: 5,
    };

    const failedItem1 = {
      ...originalItem1,
      durability: originalItem1.durability - 5,
    };

    // Act
    const result1 = enhancer.fail(originalItem1);

    // Assert
    expect(result1).toEqual(failedItem1);
    expect(result1).toHaveProperty("durability", 0);
  });

  it("should decrease durability by 10 if enhancement is 15 or more", () => {
    // Arrange
    const originalItem2 = {
      enhancement: 15,
      durability: 10,
    };

    const failedItem2 = {
      ...originalItem2,
      durability: originalItem2.durability - 10,
    };

    // Act
    const result2 = enhancer.fail(originalItem2);

    // Assert
    expect(result2).toEqual(failedItem2);
    expect(result2).toHaveProperty("durability", 0);
  });

  it("should decrease enhancement level by 1 if enhancement is greater than 16", () => {
    // Arrange
    const originalItem3 = {
      enhancement: 20,
    };

    const failedItem3 = {
      ...originalItem3,
      enhancement: originalItem3.enhancement - 1,
    };

    // Act
    const result3 = enhancer.fail(originalItem3);

    // Assert
    expect(result3).toEqual(failedItem3);
    expect(result3).toHaveProperty("enhancement", 19);
  });
});
