//check for duplicate values 

function hasDuplicates(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}


const arr = [1, 2, 3, 4, 5, 1];
console.log(hasDuplicates(arr)); // true
