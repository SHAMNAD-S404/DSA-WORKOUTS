//? Given k sorted arrays, merge them into a single sorted array using a min-heap.
//   const arrays=[
//       [1,3,5],
//       [2,4,6],
//       [0,9,10]
//      ];

class MinHeap {
    constructor() {
        this.heap=[]
    }

    getParentIndex(index) {
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index) {
        return 2*index+1;
    }

    getRightChildIndex(index) {
        return 2*index+2;
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp() {

        let index=this.heap.length-1

        while(index>0) {
            const parent=this.getParentIndex(index)

            if(this.heap[index]<this.heap[parent]) {

                [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]
                index=parent

            } else {
                break;
            }
        }
    }

    removeMin() {

        if(this.heap.length===0) return 'empty'

        const min=this.heap[0]
        const end=this.heap.pop()

        if(this.heap.length>0) {
            this.heap[0]=end
            this.heapifyDown()
        }

        return min;
    }

    heapifyDown() {

        let index=0;
        let length=this.heap.length;
        let newRoot=this.heap[0]

        while(true) {

            const leftChildIndex=this.getLeftChildIndex(index)
            const rightChildIndex=this.getRightChildIndex(index)
            let leftChild,rightChild;
            let swap=null

            if(leftChildIndex<length) {

                leftChild=this.heap[leftChildIndex]

                if(leftChild<newRoot) {
                    swap=leftChildIndex
                }
            }


            if(rightChildIndex<length) {

                rightChild=this.heap[rightChildIndex]

                if((swap===null&&rightChild<newRoot)||(swap!==null&&rightChild<leftChild)) {

                    swap=rightChildIndex
                }
            }


            if(swap===null) break

            this.heap[index]=this.heap[swap]
            this.heap[swap]=newRoot
            index=swap
        }
    }
}

function mergeSortArray(arr){

    const heap = new MinHeap()

    //concating array
    const array = arr.reduce((acc,curr) => acc.concat(curr),[])

    for(const element of array){
        heap.insert(element)
    }

    const result = []
    //sorting
    while(heap.heap.length){
        result.push(heap.removeMin())
    }

    return result;

}

const arrays=[
    [1,3,5],
    [2,4,6],
    [0,9,10]
];

console.log(mergeSortArray(arrays));
