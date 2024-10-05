//? SORT AN A ARRAY USING SORT ALGORITHAM

//* TIME COMPLIXITY IS "O(N²)" QUADRIC . BECAUSE ITS CONTAIN TWO LOOPS
//* SPACE COMPLIXITY IS "O(1)"


function selectionSort(array){

    for (let i = 0; i < array.length; i++) {
        
        let min = i; // assuming the current position is the minimus

        // Loop through the rest of the array to find the actual minimum element
        for (let j = i+1; j < array.length; j++) {
            
            if (array[j] < array[min]) {
                min=j; // Update minIndex if a smaller element is found
            }
            
        }

        // If minIndex has changed, swap the elements
        if (min !== i) {
            
            let temp   = array[i]
            array[i]   = array[min]
            array[min] = temp
        }
        
    }

    return array;
}


const array = [8,5,6,9,7,1,2,3,4]

console.log(selectionSort(array))