
function swap(arr,index,root){
    [arr[index],arr[root]] = [arr[root],arr[index]]
}

function heapify(arr,length,index){

    let root = index
    let leftIndex  = 2*index+1
    let rightIndex = 2*index+2


    if (leftIndex < length && arr[leftIndex] > arr[root]) {
        root = leftIndex
    }

    if (rightIndex < length && arr[rightIndex] > arr[root]) {
        root = rightIndex
    }

    if (root !== index) {
        swap(arr,index,root)
        heapify(arr,length.root)
    }
}



function heapSort(arr){

    const length = arr.length-1;

    for(let index = Math.floor(length/2);index>=0;index--){
        heapify(arr,length,index)
    }

    for(let index = length; index >0;index --){

        swap(arr,0,index)
        heapify(arr,index,0)
    }



}

const arr=[22,77,88,55,33,11,44,55,99]

heapSort(arr)

console.log(arr);
