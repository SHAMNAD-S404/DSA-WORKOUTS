
 //fuction to swap elements in an array
 function swap(arr,i,root){
    [arr[i],arr[root]] = [arr[root],arr[i]]
 }


 function heapify(arr,size,i){

    let root = i
    let leftIndex = 2*i+1;
    let rightIndex = 2*i+2;

    //checking left child is larger than root
    if (leftIndex < size && arr[leftIndex] > arr[root]) {
        root = leftIndex
    }

    //checking right child is larger than new root after leftIndex
    if (rightIndex < size && arr[rightIndex] > arr[root]) {
        root = rightIndex
    }


    //if max value is not the root then
    if (root !== i) {
        swap(arr,i,root)

        //Recursively heapify the affected sub-tree
        heapify(arr,size,root)
    }


 }



function heapSort(arr){

    const length = arr.length-1;

    //build a max heap
    for(let i = Math.floor(length/2); i>=0 ;i--){

        heapify(arr,length,i)
    }


    // Extract elements from the heap one by one
    for(let i=length;i>0;i--) {

        swap(arr,0,i)

        heapify(arr,i,0)
    }


}

const arr=[12,11,13,5,6,7]

heapSort(arr)

console.log(arr);


