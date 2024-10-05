
 //* Class Definition
 
 class MinHeap{
    constructor(){
        this.heap = [];
    }


     // function to get the parent index
     getParentIndex(index){
        return Math.floor((index -1)/2);
     }

     //function to get the left child index
     getLeftChildIndex(index){
        return 2*index + 1;
     }

     //function to get the right child index
     getRightChildIndex(index){
        return 2*index + 2;
     }


     //function to insert a new element
     insert(value){
        this.heap.push(value);
        this.heapifyUp();   //heapifyUp function is used rearrange elements after insertion of new element

     }


     //function to heapifyup after insertion
     heapifyUp(){

        let index = this.heap.length-1;  //taking last index to get the element where last added

        while (index > 0) {  // function only work if there element more than 1
           
            const parentIndex = this.getParentIndex(index)

            if(this.heap[parentIndex] > this.heap[index]){ //if new element is min value than root (parent) element value then swap

                [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]] //here destructing and assigning values after swapping

                index = parentIndex

            } else { //if root value is the min after the insertion of new element

                break;
            }
        }
     }

     //function to remove and return the min element
     removeMin(){

        if(this.heap.length === 0) return null; 

        const min = this.heap[0]
        const end = this.heap.pop()

        if(this.heap.length > 0){  //if there is more than 1 elements

            this.heap[0] = end;
            this.heapifyDown();   //To re-arranging values after deletion

        }

        return min;
     }

     // function to heapify down after removing the root
     heapifyDown(){

        let index = 0;
        const length = this.heap.length;
        const newRoot = this.heap[0];

        while (true) {
            
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let leftChild,rightChild;
            let swap = null;

            //IF left child is min value than new root element
            if (leftChildIndex < length) {
                
                leftChild = this.heap[leftChildIndex];

                if(leftChild < newRoot) {
                    
                    swap = leftChildIndex
                }
            }

            //If right child is min value than new root
            if (rightChildIndex < length) {
                
                rightChild = this.heap[rightChildIndex];

                if ( (swap === null && rightChild < newRoot) || (swap !== null && rightChild < leftChild)) {
                    
                    swap = rightChildIndex
                }
            }

            if(swap === null) break;

            this.heap[index] = this.heap[swap]
            this.heap[swap]  = newRoot
            index = swap;

        }   

     }

 }
 
 const heap = new MinHeap()

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

 console.log(heap.removeMin());

 console.log(heap.heap);
 
 
 
 