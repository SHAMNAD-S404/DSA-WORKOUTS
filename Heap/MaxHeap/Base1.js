
class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index -1)/2)
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
            
            let parent = this.getParentIndex(index)

            if (this.heap[index] > this.heap[parent]) {
                
                [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]]
                index = parent

            }else{
                break;
            }
        }
    }

    remove(){

        if(this.heap.length === 0) return null

        const max = this.heap[0]
        const end = this.heap.pop()

        if(this.heap.length > 0) {

            this.heap[0] = end
            this.heapifyDown()
        }

        return max
    }

    heapifyDown(){

        let index = 0
        const length = this.heap.length
        const newRoot = this.heap[0]


        while (true) {
            
            const leftChildIndex  = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let leftChild,rightChild
            let swap = null
            
            if (leftChildIndex < length) {

                leftChild = this.heap[leftChildIndex]

                if (leftChild > newRoot) {
                    swap = leftChildIndex
                }
                
            }

            if (rightChildIndex < length) {
                
                rightChild = this.heap[rightChildIndex]

                if ((swap === null && rightChild > newRoot) || (swap !== null && rightChild > newRoot)) {
                    
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

const heap = new MaxHeap()

heap.insert(5)
heap.insert(6)
heap.insert(33)
heap.insert(77)
heap.insert(100)
heap.insert(88)
heap.insert(2)
heap.insert(34)

console.log(heap.heap);

console.log(heap.remove());

console.log(heap.heap);


