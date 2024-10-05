//? Write a recursive function to calculate the power of a number.
//? The function should take two integers, base and exponent, and return the result of base raised to the power of exponent.

//* Power of a number means   2³=2×2×2=8

        //? Using Math.pow inbuilt function


function findPower(base,exponent){

    return Math.pow(base,exponent)

}

const base  = 5
const exponent = 3

console.log(findPower(base,exponent));

//************************************************************************************************************************** */

        //? NORAMAL ITERATING FUNCTION 

    let result = 1;
    for (let i = 1; i <=exponent; i++) {
    result  = result*base
        
    }
    console.log(result);

//************************************************************************************************************************** */

//?         USING RECURSION METHOD 

  function power(base,exponent){

    if(exponent === 0 ) return 1

    return base * power(base,exponent-1)
  }
  

  const base2 = 4
  const exponent2 = 5

  console.log(power(base2,exponent2))