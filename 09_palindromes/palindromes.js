const palindromes = function (str) {
  str = str.replace(/\W/g, '').toLowerCase();
  if (str.length % 2 === 0) {
    let half1 = str.slice(0,str.length/2);
    let half2 = str.slice(str.length/2).split('').reverse().join('');
    return half1 === half2;
  } else if (str.length % 2 === 1){
    let half1 = str.slice(0, Math.floor(str.length/2));
    let half2 = str.slice(half1.length + 1).split('').reverse().join('');
    return half1 === half2;
  }
  return 'ERROR';
};

// Do not edit below this line
module.exports = palindromes;
