//? Sort an array of objects by a specific property using insertion sort. 
//? Each object represents a person with name and age properties. Sort the array by the age property.


function insertionSort(array){

    for (let i = 1; i < array.length; i++) {
        
        let current = array[i]
        let j  = i - 1;

        while (j >= 0 && array[j].age > current.age) {

            array[j+1] = array[j]
            j--;            
        }

        array[j+1] = current
        
    }

    return array
}



const people=[
    {name: "John",age: 25},
    {name: "Jane",age: 20},
    {name: "Bill",age: 30},
    {name: "Emily",age: 22}
];

console.log(insertionSort(people));