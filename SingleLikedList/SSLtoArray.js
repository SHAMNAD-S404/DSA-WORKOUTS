//? CONVERTING LINKED LIST TO AN  ARRAY


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

    print() {
        let current=this.head
        while(current!==null) {
            console.log(current.value);
            current=current.next
        }
    }

    toArray(){
        let array = []
        let current = this.head

        while(current !== null){
            array.push(current.value)
            current = current.next
        }
        return array
    }
   
}

const list = new LinkedList()

list.append (1)
list.append (2)
list.append (3)
list.append (4)
list.append (5)
list.append (6)
list.append (7)

list.print()

const arr = list.toArray()
console.log(arr);

