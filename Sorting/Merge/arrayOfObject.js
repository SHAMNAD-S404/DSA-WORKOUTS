//? SORT THIS ARRAY OF OBJECT USING MERGE SORT


function mergeSort(array){

    if(array.length <= 1) return array

    const mid   = Math.floor(array.length/2)
    const left  = array.slice(0,mid)
    const right = array.slice(mid)
    
    const lefrArr = mergeSort(left)
    const righArr = mergeSort(right)

    return merge(lefrArr,righArr)
}

function merge(left,right){

    let result = []

    while (left.length && right.length) {
        
        if (left[0].age < right[0].age) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result,...left,...right]
}



const people=[
    {name: "John",age: 25},
    {name: "Jane",age: 20},
    {name: "Bill",age: 30},
    {name: "Emily",age: 22}
];

console.log(mergeSort(people));