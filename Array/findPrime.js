//? Find out the prime numbers from the array

//* The isPrime function has a time complexity of O(√n) for each number.
//* The overall time complexity for the findPrimes function is O(m√n),
//* where m is the number of elements in the array and n is the average value of the elements.

function primeNum(num){

    if (num <= 1) return false; //0 and 1 are not prime
    
    for(let i=2; i<=Math.sqrt(num);i++) {

        if ( num%i === 0 ) {
            return false
        }
    }
    return true
           
}


function findPrime(array){

    //The filter method iterates through each element and applies the isPrime function.
    return array.filter(primeNum)
}

let array = [1,2,3,4,5,6,7,11,13]

//CALLING FUNCTION PRINTING IS OUTPUT
console.log( findPrime(array) );


//************************************************************************************************************ */

//?                              USING RECURSIVE METHOD


function isPrime(num,divisor) {

    if(num<2) {
        return false
    }

    if(num===divisor) return true

    if(num%divisor===0) {
        return false
    }

    return isPrime(num,divisor+1)


}


console.log(isPrime(6,2));