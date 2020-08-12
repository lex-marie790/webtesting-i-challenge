module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {

}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairItem = item;
  repairItem.durability = 100;
  return { ...repairItem };
}

function get(item) {
  return { ...item };
}
