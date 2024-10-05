//? SORT THIS ARRAY IN DESCENDING ORDER USING SELECTION SORT


function selectionSort(array){

    for (let i = 0; i < array.length; i++) {
        
        let max = i;

        for (let j = i+1; j < array.length; j++) {
            
            if (array[j] > array[max]) {
                max = j;
            }            
        }

        if (max !== i) {
            let temp   = array[i]
            array[i]   = array[max]
            array[max] = temp 
        }
        
    }

    return array;

}

const array = [5,4,2,3,9,8,7,4,10]

console.log(selectionSort(array));