//? Write a function to remove duplicate elements from an array.

function removeDuplicates(array){
    return [...new Set(array)]
}


const arr=[1,2,2,3,4,4,5];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
