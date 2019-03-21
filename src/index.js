//module.exports = function getZerosCount(number, base) {
//  
//function factZeroCountDec(num) {//function get count of *tail* zeros in factorial in decimal
//let n = 1;  //power counter
//let result = 0;
//  while ( num/Math.pow(5,n) >= 1) {
//    result=result+Math.floor(num/Math.pow(5,n));
//    n++;
//  }
//  return result;
//}  
//
//return factZeroCountDec(number);
//return parseInt(factZeroCountDec(number)).toString(base);
//}

module.exports = function getZerosCount(number, base) {
  // your implementation
    let fs=[]; // work array
    let divider=2; // divider
    while(divider<base){
        while(base%divider==0){
            fs.push(divider);
            base/=divider;
        }
        divider++;
    }
    if (base>1){
        fs.push(base);
    }

    let zeros=[]; // work array for zeros
	//calculate the number of zeros
    for (let i=0;i<fs.length;i++){
        let cnt=0; //counter
        for (let j=i;j<fs.length;j++) {
            if (fs[i]===fs[j]){
                cnt++;
            }else{
                count=cnt;
                break;
            }
        }
        let result=0;
        let j=fs[i];
        while(true){
            result+=(number-number%j)/j;
            j*=fs[i];
            if(j>number){
                break;
            }
        }
        zeros.push((result-result%cnt)/cnt); //push result to work array
    }
    return Math.min.apply(Math,zeros); //returns the minimum number of zeros
}