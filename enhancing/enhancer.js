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
  const failItem = item;
  if (failItem.enhancement < 15) {
    failItem.durability = failItem.durability - 5;
  } else {
    failItem.durability = failItem.durability - 10
  } if (failItem.enhancement > 16) {
    failItem.enhancement = failItem.enhancement - 1
  }
  return {...failItem};
};

function repair(item) {
  const repairItem = item;
  repairItem.durability = 100;
  return { ...repairItem };
};

function get(item) {
  const getItem = item;
  if(getItem.enhancement > 0) {
    getItem.name = `[+${getItem.enhancement}] ${getItem.name}`
  }
  return { ...getItem }; 
};
