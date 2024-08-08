//? Insertion and Extraction

// Insert the following elements into a min-heap in the given order: [10,20,15,30,40,50,100,25,45]
// After each insertion,show the state of the heap.
// Extract the minimum element from the heap until it is empty.Show the state of the heap after each extraction

class MinHeap{
    constructor() {
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2*index+1
    }

    getRighChildIndex(index){
        return 2*index + 2;
    }

    insert(value){

        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){

        let index = this.heap.length -1

        while (index > 0) {
            
            const parent = this.getParentIndex(index)

            if (this.heap[index] < this.heap[parent]) {
                
                [this.heap[index],this.heap[parent]] = [this.heap[parent] , this.heap[index]]
                index = parent
            }else{
                break;
            }
        }
    }

    removeMin(){

        if(this.heap.length === 0) return null

        const min = this.heap[0]
        const end = this.heap.pop()

        if (this.heap.length > 0) {
            
            this.heap[0] = end
            this.heapifyDown()
        }

        return min
    }

    heapifyDown(){

        let index = 0;
        const length = this.heap.length
        const newRoot = this.heap[0]

        while (true) {
            
            const leftChildIndex    = this.getLeftChildIndex(index)
            const rightChildIndex   = this.getRighChildIndex(index)
            let leftChild,rightChild
            let swap = null

            if (leftChildIndex < length) {
                
                leftChild = this.heap[leftChildIndex]

                if (leftChild <  newRoot) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                
                rightChild = this.heap[rightChildIndex]


                if ((swap ===  null && rightChild < newRoot) || (swap !==null && rightChild < leftChild)) {
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

const heap=new MinHeap()



const arr = [10,20,15,30,40,50,100,5,45]

for (const element of arr) {
    heap.insert(element)
    console.log(heap.heap);
    
}

const length = heap.heap.length

while(heap.heap.length>0) {
    console.log(`Extracted: ${heap.removeMin()}, Heap: [${heap.heap.join(", ")}]`);
}
