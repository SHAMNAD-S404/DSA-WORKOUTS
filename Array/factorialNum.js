
//? find the factorial of a number

//* Time Complexity: O(n) for both iterative and recursive approaches,
//* as they involve a single loop or recursive calls up to n.

//* Iterative approach: O(1), as it uses a constant amount of space.

                //? 1> Iterative approach

 function factorialNum(num){

    if(num<0) return 'negtive num have no factorial'
    let result = 1;

    for(let i=1; i<=num; i++ ){
         result *= i;
    }

    return result;
 }


//CALLING FUNCTION AND PRINT OUTPUT
console.log(factorialNum(5));
console.log(factorialNum(4));


            //? USING RECURSIVE METHOD

//* Time Complexity: O(n) for both iterative and recursive approaches,
//* as they involve a single loop or recursive calls up to n.

//*Recursive approach: O(n) due to the recursion stack.


function factorialRecursive(num){

    if(num<0) return 'negative values have no factorial'
    if(num === 0) return 1

    return num*factorialRecursive(num-1)
}


console.log(factorialRecursive(5));
