//? Modify the insertion sort algorithm to sort an array in descending order.


function insertionSort(array){

    for (let i = 1; i < array.length; i++) {
        
        let current = array[i]
        let j = i - 1;

        while (j >=0 && array[j]< current) {
            
            array[j+1] = array[j]
            j--;
        }

        array[j+1] = current
        
    }

    return array
}

const array=[5,8,7,9,6,4,2,10];

console.log(insertionSort(array));
