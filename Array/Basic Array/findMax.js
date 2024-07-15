
//? Find the Maximum Element in an Array

function findMax(array){
    let max = -Infinity

    for (let i = 0; i < array.length; i++) {
       if (array[i] > max) {

        max = array[i]
       }
        
    }

    return max
}


const arr=[1,3,7,0,5];
console.log(findMax(arr)); // Output: 7