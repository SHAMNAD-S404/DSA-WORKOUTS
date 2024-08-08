//? Find the 3rd smallest element in the array [7, 10, 4, 3, 20, 15] using a min-heap.

class MinHeap{
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

        let index = this.heap.length-1

        while (index > 0) {
            const parent = this.getParentIndex(index)

            if (this.heap[index] < this.heap[parent]) {
                
                [this.heap[parent],this.heap[index]]  = [this.heap[index],this.heap[parent]]
                index = parent

            } else {
                break;
            }
        }
    }

    removeMin(){

        if(this.heap.length === 0) return 'empty'

        const min = this.heap[0]
        const end = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = end
            this.heapifyDown()
        }

        return min;
    }

    heapifyDown(){

        let index = 0;
        let length = this.heap.length;
        let newRoot = this.heap[0]

        while (true) {
            
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let leftChild,rightChild;
            let swap = null

            if (leftChildIndex < length) {
                
                leftChild = this.heap[leftChildIndex]

                if (leftChild < newRoot) {
                    swap = leftChildIndex
                }
            }


            if (rightChildIndex < length) {
                
                rightChild = this.heap[rightChildIndex]

                if ((swap === null && rightChild < newRoot) || (swap !== null && rightChild < leftChild)) {
                    
                    swap = rightChildIndex
                }
            }


            if(swap === null) break

            this.heap[index] = this.heap[swap]
            this.heap[swap]  = newRoot
            index = swap
        }
    }
}

const heap = new MinHeap()

const arr = [7, 10, 4, 3, 20, 15]

for(const value of arr){
    heap.insert(value)
}

function kthSmallest(k){


    if(heap.heap.length < k) return false

    let result;

    for(let i =0;i<k;i++){
        result = heap.removeMin()
    }

    return result;
}

console.log(kthSmallest(3));


