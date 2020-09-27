/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
4 = 2 * 2, 5 = 5 * 1, 6 = 3 * 2, 27 = 3 * 3 * 3
Prime number can only be devided by itself and 1 ex: 19 = 19 * 1
12: what can 12 be devided by? 2, 
prime number only has 2 factors
*/
function factors(num1) {
    var factor = [];
    for (var i = 1; i <= num1 / 2; i++) {
        for (var j = 1; j <= num1 / 2; j++) {
            if (i * j == num1) { // finds factors
                factor.push(i); 
            }
        }
    } return factor;
}

function isPrime(factorArr) {
    var output = [];
    for (var array = 0; array < factorArr.length; array++) {
        var array1 = [];
        for (var i = 1; i <= factorArr[array] / 2; i++) {
            for (var j = 1; j <= factorArr[array] / 2; j++) {
                if (i * j == factorArr[array]) { // finds factors
                    array1.push(factorArr[array]);
                    array1.push(factorArr[i]);
                }
            }
        } if (array1.length <= 2) {
            output.push(factorArr[array]);
        } 
    } return output;
}

function highestValue(primeArray) {
    var last = 0;
    last = primeArray.length;
    console.log(primeArray[last - 1]);
}

function isHighestPrimeFactor(find) {
    highestValue(isPrime(factors(find)));
}


isHighestPrimeFactor(7);
