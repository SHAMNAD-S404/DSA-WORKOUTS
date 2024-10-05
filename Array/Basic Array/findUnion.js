//? Write a function to find the union of two arrays.

function findUnion(arr1,arr2){
    return [...new Set(arr1.concat(arr2))]
}


const arr1=[1,2,3,4,5];
const arr2=[4,5,6,7,8];
console.log(findUnion(arr1,arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]