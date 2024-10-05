//?  Write a function to rotate an array by k positions to the right.

function rotateArray(array,k){

    let position = 0;
    let newArray =[]

    for (let i = k+1; i < array.length; i++) {
       newArray[position] = array[i]
        position++
    }

    let index = 0;
    for (let j = position; j < array.length; j++) {       
         newArray[position] = array[index]

         position++
         index++
        
    }

    return newArray
}


const arr=[1,2,3,4,5];
const k=2;
console.log(rotateArray(arr,k)); // Output: [4, 5, 1, 2, 3]