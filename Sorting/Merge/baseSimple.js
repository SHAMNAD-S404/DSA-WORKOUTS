

function mergeSort(array){

    if(array.length <= 1 ) return array

    const mid   = Math.floor(array.length/2)
    const left  = array.slice(0,mid)
    const right = array.slice(mid)

    const leftArr  = mergeSort(left)
    const rightArr = mergeSort(right) 

    return merge(leftArr,rightArr)
}

function merge(left,right){

    const result = []

    while(left.length && right.length){

        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result,...left,...right]
}


const array=[5,7,8,9,4,6,5,10,7]

console.log(mergeSort(array));