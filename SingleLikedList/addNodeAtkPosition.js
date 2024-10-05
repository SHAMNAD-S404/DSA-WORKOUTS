//? Add a node at specific position

class Node {
    constructor(value){
        this.value = value
        this.next  = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(value){
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
    }

    findPosition(value,target){

        const newNode = new Node(value)

        if (this.head.value === target) {
            newNode.next = this.head
            this.head = newNode
            return
        }

        let current = this.head
        while(current.value !== target){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode

    }

    print(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next 
        }
    }
}

const list=new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)

list.findPosition(10,5)

list.print()
