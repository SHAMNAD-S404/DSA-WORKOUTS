//? find the intersection of the two array 

function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(arrayIntersection(arr1, arr2)); // [3, 4]
