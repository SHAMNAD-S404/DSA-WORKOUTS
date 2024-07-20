//? Implement Bubble Sort to sort a singly linked list.
//? Example: Input: 4->3->1->2,Output: 1->2->3->4
//* HERE WE CHANGING NODE NOT VALUES

class Node {
    constructor(value) {

        this.value=value
        this.next=null
    }
}

class LinkedList {
    constructor() {
        this.head=null
    }

    append(value) {
        const newNode=new Node(value)

        if(this.head===null) {
            this.head=newNode
        } else {

            let current=this.head
            while(current.next!==null) {
                current=current.next
            }
            current.next=newNode
        }
    }

    bubbleSort() {
        
        let sorted
       

        do {
            sorted = false
            let current = this.head
            let prev = null

            while(current !== null && current.next !== null){

                if (current.value > current.next.value) {

                    let next     = current.next
                    current.next = next.next
                    next.next    = current

                    if (prev === null) {
                        this.head = next
                    }else{
                        prev.next = next
                    }

                    prev  = next
                    sorted = true
                    
                }else {

                    prev = current
                    current = current.next

                }
            }
            
        } while (sorted);
    }

    printList() {

        let current=this.head
        while(current!==null) {

            console.log(current.value);
            current=current.next
        }
    }
}

const list=new LinkedList()

for(let i=10;i>0;i--) {
    list.append(i)
}

list.bubbleSort()
list.printList()