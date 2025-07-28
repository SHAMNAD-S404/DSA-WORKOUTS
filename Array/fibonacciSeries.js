//?  USING RECURSION METHOD

//* what is fibonacci series ? answer =  (0, 1, 1, 2, 3, 5, 8, 13, …)
// every element sum is sum of previous two element.
// its starting two elements are 0,1 , from third element its value is sum of previous two elements
// a fib series length must should be more than 2.

//? ************************************************************************************************************************** */
//* Time  Complexity : O(2n)                                                                                                   *
//* Space Complexity : O(n)                                                                                                    *
//? ************************************************************************************************************************** */

 function fibonacciSeries(num){

    if (num < 2)  return num;

     return fibonacciSeries(num-1) + fibonacciSeries(num-2)
 }

 console.log(fibonacciSeries(8));



//? ************************************************************************************************************************** */

            //* USING NORMAL ITERATE METHODS

function fib(num){
    let fib = [0,1]

    for(let i =2; i<=num ; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib;
}

console.log(fib(9))
