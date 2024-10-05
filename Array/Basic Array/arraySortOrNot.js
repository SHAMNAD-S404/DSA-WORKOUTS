//?  Write a function to check if an array is sorted in ascending order.

function isSorted(array){
    for (let i = 0; i < array.length-1; i++) {

       if (array[i] > array[i+1]) {
            return false
       }
        
    }

    return true;
}

const arr=[1,2,3,4,5];
console.log(isSorted(arr)); // Output: true