/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

// Fibonacci = num + prev num
// x(1) + y(2) = output(3), x(2) + y(3) = output(5), x(3) + y(5) = output(8), x(5) + y(8) = output(13);
var output = 0;
var x = 1;
var y = 2;
var store = 0;
var total = 2;
do {
    output = x + y;
    store = y; //store y to  set to x
    y = output;
    x = store; //set x = y
    if (output % 2 == 0) {
        total += output;
    }
} while (output < 4000000);

console.log(total);