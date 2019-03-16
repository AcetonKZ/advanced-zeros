module.exports = function getZerosCount(number, base) {
  
function factZeroCountDec(num) {//function get count of *tail* zeros in factorial in decimal
let n = 1;  //power counter
let result = 0;
  while ( num/Math.pow(5,n) > 1) {
    result=result+Math.floor(num/Math.pow(5,n));
    n++;
  }
  return result;
}  


return factZeroCountDec(number);
}