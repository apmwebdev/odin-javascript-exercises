const fibonacci = function(num) {
  num = parseInt(num);
  if (num < 1) return 'OOPS';
  
  let seq = [];
  for (let i = 0; i < num; i++) {
    let seqNum = i;
    if (i < 2) {
      seqNum = 1;
    } else {
      seqNum = seq[i-1] + seq[i-2];
    }
    seq.push(seqNum);
  }
  return seq.pop();
};

// Do not edit below this line
module.exports = fibonacci;
