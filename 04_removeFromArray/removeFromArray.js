const removeFromArray = function(values, ...valuesToRemove) {
  let returnArr = [...values];
  for (const val of valuesToRemove) {
    if (returnArr.indexOf(val) !== -1) {
      returnArr.splice(returnArr.indexOf(val), 1);
    }
  }
  return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
