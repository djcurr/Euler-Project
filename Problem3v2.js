/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

function highestPrimeNumber(num) {
    if (num % 2 == 0 && num / 2 != 1) { //divide by 2 until not possible
        do {
            num /= 2;
        } while (num % 2 == 0 && num / 2 != 1);
    }
        for (var i = 3; i < Math.sqrt(num); i++) { //divide the result by an increasing number until not possible
            if (num % i == 0) {
                num /= i;
            }
        }   
     console.log(num);
}

highestPrimeNumber(600851475143);
//Much faster