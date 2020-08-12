module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const successItem = item
  if(successItem.enhancement === 20) {
    return { ...successItem };
  } else {
    successItem.enhancement = successItem.enhancement + 1;
      return { ...successItem };
  };
};

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairItem = item;
  repairItem.durability = 100;
  return { ...repairItem };
};

function get(item) {
  return { ...item };
}
