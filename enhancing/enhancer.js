module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const modifiedItem = {
    ...item,
  };

  if (item.enhancement === 20) {
    modifiedItem.enhancement;
  } else {
    modifiedItem.enhancement++;
  }

  return modifiedItem;
}

function fail(item) {
  const failedItem = {
    ...item,
  };

  if (item.enhancement < 15 && item.durability >= 5) {
    failedItem.durability -= 5;
  } else if (item.enhancement >= 15 && item.durability >= 10) {
    failedItem.durability -= 10;
  } else if (item.enhancement > 16 && item.enhancement <= 20) {
    failedItem.enhancement--;
  } else {
    console.log("This item is not valid.");
  }

  return failedItem;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
