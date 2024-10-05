
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

    deleteMid() {

        let slow=this.head
        let fast=this.head
        let previous=null

        while(fast!==null&&fast.next!==null) {
            previous=slow
            slow=slow.next
            fast=fast.next.next
        }

        previous.next=slow.next
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

for(let i=2;i<10;i++) {
    list.append(i)
}



list.deleteMid()

list.printList()