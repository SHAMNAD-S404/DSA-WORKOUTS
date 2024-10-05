
class Node{
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
            while(current.next !==null){
                current = current.next
            }
            current.next = newNode
        }

    }

    addAtStart(value){
         
        const newNode = new Node(value)
        newNode.next  = this.head
        this.head     = newNode 
    }

    deleteNode(value){
        if (this.head === null) {
            return
        }

        if (this.head.value === value) {
            this.head = this.head.next
            return
        }

        let current  = this.head
        let previous = null

        while(current !== null && current.value !== value){
            previous = current
            current  = current.next;
        }

        if (current !==null) {
            previous.next = current.next
            return
        }
    }

    printAll(){
        let current = this.head
        while(current !==null){
            console.log(current.value);
            current = current.next
        }
    }
}

const list = new LinkedList()

list.append(9999)
list.append(888)
list.append(22)
list.append(55)

list.addAtStart(555555)
list.deleteNode(888)

list.printAll()