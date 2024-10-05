//? Find the 3rd largest element in the array [7, 10, 4, 3, 20, 15] using a max-heap.

 class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2*index +1;
    }

    getRightChildIndex(index){
        return 2*index +2;
    }

    insert(value){

        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        
        let index = this.heap.length-1;

        while(index > 0){

            const parent = this.getParentIndex(index)

            if (this.heap[index] > this.heap[parent]) {
                
                [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]]
                index = parent;

            } else {
                break;
            }
        }
    }

    removeMax(){
        
        if(this.heap.length === 0) return null

        const max = this.heap[0]
        const end = this.heap.pop()

        if (this.heap.length > 0) {

            this.heap[0] = end
            this.heapifyDown()
        }

        return max;
    }

    heapifyDown(){

        let index = 0
        const length = this.heap.length
        const newRoot = this.heap[0]

        while (true) {
            
            const leftChildIndex  = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let rightChild,leftChild
            let swap = null


            if (leftChildIndex < length) {
                
                leftChild = this.heap[leftChildIndex]

                if (leftChild > newRoot) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                
                rightChild = this.heap[rightChildIndex]

                if ((swap === null && rightChild > newRoot) || (swap !== null && rightChild > leftChild)) {
                    
                    swap = rightChildIndex
                }
            }

            if(swap === null) break;

            this.heap[index] = this.heap[swap]
            this.heap[swap]  = newRoot
            index = swap

        }
    }
 }
 
 function kthLargest(arr,k){

    const heap = new MaxHeap()

    //INSERTING
    for(const value of arr){
        heap.insert(value)
    }

    //REMOVING
    let result;

    for(let i=0;i<k;i++){

        result = heap.removeMax()
    }

    return result

 }

 const array = [7, 10, 4, 3, 20, 15]

 console.log(kthLargest(array,3));
 
