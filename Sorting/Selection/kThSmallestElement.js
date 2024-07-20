//? Use selection sort to find the Kth smallest element in an unsorted array.
//? Example: Input: [7,10,4,3,20,15],K=3,Output: 7

function selectionSort(array,target){

    for (let i = 0; i < array.length; i++) {
        
        let min = i

        for (let j = i+1; j < array.length; j++) {
            
            if (array[j] < array[min]) {
                min = j;
            }            
        }

        if (min !== i) {
            
            let temp   = array[i]
            array[i]   = array[min]
            array[min] = temp
        }

        if( i === target) return array[target - 1]
        
    }

    return 'not  found'
    
}

const array = [7,10,4,3,20,15]
const target = 3

console.log(selectionSort(array,target));

