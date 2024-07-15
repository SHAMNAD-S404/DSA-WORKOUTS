//? Write a function to find the second largest element in an array.


function findSecondLargest(array){

    let largest = -Infinity
    let SecondLarge = -Infinity

    for (let i = 0; i < array.length; i++) {
       
        if (array[i] > largest) {
            SecondLarge = largest
            largest = array[i]
        }else if (array[i] > SecondLarge && array[i] !== largest) {
            SecondLarge = array[i]
        }
        
    }

    return SecondLarge;
}



const arr=[1,3,7,0,5];
console.log(findSecondLargest(arr)); // Output: 5
