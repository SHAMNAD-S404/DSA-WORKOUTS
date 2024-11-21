//? rotate array to the right 

function rotateArray(arr, k) {
    k = k % arr.length; // Handle cases where k > arr.length
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2)); // [4, 5, 1, 2, 3]
