/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
4 = 2 * 2, 5 = 5 * 1, 6 = 3 * 2, 27 = 3 * 3 * 3
Prime number can only be devided by itself and 1 ex: 19 = 19 * 1
prime number only has 2 factors
*/
function factors(num1) { // finds all factors
    var factor = [];
    for (var i = 1; i <= num1 / 2; i++) {
        for (var j = 1; j <= num1 / 2; j++) {
            if (i * j == num1) { // iterate through all numbers to find what numbers multiply to equal the number
                factor.push(i); // push to an array of factors
            }
        }
    } return factor;
}

function isPrime(factorArr) { //Find if factors are prime
    var output = []; //init array output of primes
    for (var array = 0; array < factorArr.length; array++) {
        var array1 = [];
        for (var i = 1; i <= factorArr[array] / 2; i++) {
            for (var j = 1; j <= factorArr[array] / 2; j++) {
                if (i * j == factorArr[array]) { // finds all factors again
                    array1.push(factorArr[array]);
                    array1.push(factorArr[i]);
                }
            }
        } if (array1.length <= 2) { //If there are less than or equal to two factors in the array push them to an output array
            output.push(factorArr[array]);
        } 
    } return output;
}

function highestValue(primeArray) {
    var last = 0;
    last = primeArray.length;
    console.log(primeArray[last - 1]); // selects last value in array (highest)
}

function isHighestPrimeFactor(find) { //combines all functions
    highestValue(isPrime(factors(find)));
}

isHighestPrimeFactor(600851475143);

//Didn't work with multiples of 2
//Would return undefined for already prime numbers
//Extremely slow, could not compute 600851475143