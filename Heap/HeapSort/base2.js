
function swap(arr,index,root){
    [arr[index],arr[root]] = [arr[root],arr[index]]
}


function heapify(arr,length,index){

    let root = index
    let leftIndex = 2*index+1
    let rightIndex = 2*index+2

    if (leftIndex < length && arr[leftIndex] > arr[root]) {
        root = leftIndex
    }

    if (rightIndex < length && arr[rightIndex] > arr[root]) {
        root = rightIndex        
    }

    if (root !== index) {
        swap(arr,index,root)
    }
}


function heapSort(arr){

    const length = arr.length-1;

    for(let index=Math.floor(length/2);index>=0;index--){

        heapify(arr,length,index)
    }

    for(let index = length;index>0;index--){
        swap(arr,0,index)
        heapify(arr,index,0)
    }
}




const arr = [22,555,888,11,66,44,88]

heapSort(arr)
console.log(arr);
