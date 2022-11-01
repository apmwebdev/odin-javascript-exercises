const ftoc = function(tempInFar) {
  return Math.round((tempInFar - 32) / 1.8 * 10) / 10;
};

const ctof = function(tempInCels) {
  return Math.round((tempInCels * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
