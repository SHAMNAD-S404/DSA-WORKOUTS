
function quickSort(array){

    if(array.length <= 1 ) return array

    let pivot = array[array.length-1]
    let left   = []
    let right  = []

    for (let i = 0; i < array.length-1; i++) {
        
        if (array[i] > pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
        
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}



const array = [1,2,3,4,56,7,8,9]

console.log(quickSort(array));