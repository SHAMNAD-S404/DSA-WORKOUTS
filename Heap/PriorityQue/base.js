//? IMPLEMENT A PRIORITY QUEUE WITH PRIORITY USING MAX HEAP

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

    insert(value,priority){

        const element = {value,priority}
        this.heap.push(element)
        this.heapifyUp()
    }

    heapifyUp(){

        let index = this.heap.length - 1;

        while (index > 0) {
            
            const parent = this.getParentIndex(index)

            if (this.heap[index].priority > this.heap[parent].priority) {
                
                [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]]
                index = parent
            }else{
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

        let index = 0;
        const length = this.heap.length;
        const newRoot = this.heap[0]

        while (true) {
            
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let leftChild,rightChild
            let swap = null;


            if (leftChildIndex < length) {

                leftChild = this.heap[leftChildIndex]

                if (leftChild.priority > newRoot.priority) {
                    
                    swap = leftChildIndex
                }
                
            }


            if (rightChildIndex < length) {

                rightChild = this.heap[rightChildIndex]

                if ( (swap === null && rightChild.priority > newRoot.priority) ||
                     (swap !== null && rightChild.priority > leftChild.priority) ) {
                    
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

 const heap = new MaxHeap()

 heap.insert('have dinner', 10)
 heap.insert('Trie',12)
 heap.insert('complete heap sort',20)
 heap.insert('sleep',1)
 heap.insert('revise',6)

 console.log(heap.heap)
