//? Write a function to sort an array of objects by a specific property using quick sort.
//? Each object represents a person with name and age properties. Sort the array by the age property.

function quickSort(array){

    if(array.length <= 1) return array

    let pivot = array[array.length-1]

    let left  = []
    let right = []

    for (let i = 0; i < array.length-1; i++) {
        
        if (array[i].age < pivot.age) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
        
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}


const people=[
    {name: "John",age: 25},
    {name: "Jane",age: 20},
    {name: "Bill",age: 30},
    {name: "Emily",age: 22}
];

console.log(quickSort(people));