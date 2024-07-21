//?  Given two sorted arrays, merge them into a single sorted array using the merge step of merge sort.



function merge(left,right) {

    let result=[]

    while(left.length&&right.length) {
        if(left[0]<right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result,...left,...right]
}


const arr1=[1,3,5]
const arr2=[2,4,6]

console.log(merge(arr1,arr2));
