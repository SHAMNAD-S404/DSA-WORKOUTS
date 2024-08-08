 class MinHeap{
     constructor(){
        this.heap = []
     }

     getParentIndex(index){
        return Math.floor((index - 1)/2)
     }

     getLeftChild(index){
        return 2*index+1
     }

     getRightIndex(index){
        return 2*index+2
     }

     insert(value){

        this.heap.push(value)
        this.heapifyUp()
     }

     heapifyUp(){

        let index = this.heap.length-1

        while(index > 0){

            let parent = this.getParentIndex(index)

            if(this.heap[parent] > this.heap[index]){

                [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]

                index = parent
            }else{
                break;
            }
        }
     }


     remove(){

        if(this.heap.length === 0) return null

        const min = this.heap[0]
        const end = this.heap.pop()

        if(this.heap.length > 0){
            this.heap[0] = end
            this.heapifyDown()
        }

        return min
     }

     heapifyDown(){

        let index = 0
        const length = this.heap.length
        let newRoot = this.heap[0]

        while (true) {
            
            const leftChildIndex = this.getLeftChild(index)
            const rightChildIndex = this.getRightIndex(index)
            let leftChild,rightChild
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
            index = swap; 
        }
     }
 }

const heap=new MinHeap()

heap.insert(7)
heap.insert(9)
heap.insert(10)
heap.insert(4)
heap.insert(3)
heap.insert(15)

console.log(heap.heap);

heap.insert(2)
heap.insert(10)

console.log(heap.heap);

console.log(heap.remove());

console.log(heap.heap);