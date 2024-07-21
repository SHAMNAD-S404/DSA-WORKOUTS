//? SORT THIS ARRAY IN ASCENDING ORDER USING MERGE SORT

function mergeSort(array){

    if(array.length <= 1) return array

    const mid   = Math.floor(array.length/2)
    const left  = array.slice(0,mid)
    const right = array.slice(mid)

    const leftArr  = mergeSort(left)
    const rightArr = mergeSort(right)

    return merge(leftArr,rightArr)
}

function merge(left,right){

    let result=[];

    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result,...left,...right]
}


const Input = [38,27,43,3,9,82,10]
console.log(mergeSort(Input));