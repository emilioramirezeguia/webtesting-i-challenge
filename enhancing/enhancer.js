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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
