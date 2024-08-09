//? The problem "Top K Frequent Elements" asks us to find the k most frequent elements in an array.For example,given the array[1,1,1,2,2,3] and k=2,the two most frequent elements are 1 and 2,because 1 appears 3 times and 2 appears 2 times.

//*    Approach:
//* Count the Frequencies: Use a map(or object) to count how many times each element appears in the array.
//* Use a Max-Heap: Insert each element into a max-heap based on its frequency.
//* Extract Top K Elements: Extract the top k elements from the max-heap,which are the most frequent elements.


class MaxHeap {
    constructor() {
        this.heap=[];
    }

    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }

    getLeftChildIndex(index) {
        return 2*index+1;
    }

    getRightChildIndex(index) {
        return 2*index+2;
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){

        let index = this.heap.length -1;

        while (index > 0) {
            
            const parent = this.getParentIndex(index)

            if (this.heap[index].freq >  this.heap[parent].freq) {
                
                [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
                index = parent;

            } else {
                break;
            }
        }
    }

    removeMax(){

        if(this.heap.length === 0) return null;

        const max = this.heap[0]
        const end = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = end
            this.heapifyDown()
        }

        return max
    }

    heapifyDown(){

        let index = 0;
        const length = this.heap.length
        const newRoot = this.heap[0]

        while (true) {
            
            const leftChildIndex  = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let leftChild,rightChild
            let swap = null;

            if (leftChildIndex < length) {
                
                leftChild = this.heap[leftChildIndex]

                if (leftChild.freq > newRoot.freq) {
                    
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                
                rightChild = this.heap[rightChildIndex]

                if ((swap === null && rightChild.freq > newRoot.freq) || (swap !== null && rightChild.freq > leftChild.freq)) {
                    
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


// Function to find the top K frequent elements

function topKFrequent(arr,k){

    // Step 1: Count frequencies of elements
    const frequencyMap = new Map();

    for(let num of arr){

        frequencyMap.set(num,( frequencyMap.get(num) || 0) + 1 )
    }

    // Step 2: Use a max-heap to store elements based on their frequency
    const heap = new MaxHeap()

    //here we inserted values to heap
    for(let [num,freq] of frequencyMap.entries()){

        heap.insert({num,freq})
    }

    // Step 3: Extract the top K elements
    const result = []

    for(let i=0;i<k;i++){
        result.push(heap.removeMax())
    }

    return result;
}

const arr=[1,1,1,2,2,3];
const k=2;
console.log(topKFrequent(arr,k));