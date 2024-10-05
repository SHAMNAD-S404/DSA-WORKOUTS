

function mergeSort(array){

  if(array.length <= 1) return array

  let mid = Math.floor(array.length/2)
  let left = array.slice(0,mid)
  let right = array.slice(mid)

  let leftArray = mergeSort(left)
  let rightArray = mergeSort(right)

  return merge(leftArray,rightArray)

}

function merge(left,right){

    let result= []

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