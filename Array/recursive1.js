
//? Write a recursive function that calculates the sum of the digits of a given number.
//? Example:
//? Input: 1234
//? Output: 10(because 1+2+3+4 = 10)

//* Time Complexity: O(log⁡10(n))
//* Space Complexity: O(log⁡10(n))


function findSum(num){
    if(num === 0) return 0 // base case

    // num%10 using to extract the last element

    return (num % 10) + findSum(Math.floor(num/10))  //Math.floor(num%10) used to remove lase element b4 next recursive call back

}  


console.log(findSum(12345))