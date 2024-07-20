//?  Use Bubble Sort to sort only the first half of an array, leaving the second half unchanged.
//?  Example: Input: [7,2,5,3,8,6,4,1],Output: [2,3,5,7,8,6,4,1] 

function bubbleSort(array){

    let mid = Math.floor(array.length/2)
    let sorted;

    do {

        sorted = false
        for(let i=0;i<mid;i++){

            if (array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp

                sorted = true
            }
        }
        
    } while (sorted);

    return array
}

const array=[7,2,5,3,8,6,4,1]
console.log(bubbleSort(array)); 