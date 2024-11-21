
class Node{
    constructor(value){
        this.value = value
        this.next  = null
        this.prev  = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value){
        const newNode = new Node(value)

        if (this.tail) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail  = newNode
        }else{
            this.head = newNode
            this.tail  = newNode
        }
    }

    print(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }
}

const list = new DoubleLinkedList()
list.append(10)
list.append(10)
list.append(10)
list.append(10)
list.append(10)

list.print()