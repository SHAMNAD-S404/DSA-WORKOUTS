//? ADD A NODE AT BEGINNING
class Node{
    constructor(value){
        this.value = value;
        this.next  = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
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

    addAtBeginning(value){
        const newNode = new Node(value)
        newNode.next  = this.head
        this.head     = newNode
    }


    printAllList(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }
}

const call = new LinkedList()

call.append(1000)
call.append(2000)
call.append(3000)
call.append(4000)

call.addAtBeginning(999)

call.printAllList()
