//?  ADD NODE AT MIDDLE OF A NODE LIST 

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
            while(current.next !== null){

                current = current.next
            }
            current.next = newNode
        }
    }

    findMid(){
        let slow = this.head
        let fast = this.head

        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    appendAtMid(value){
        const newNode = new Node(value)
        const mid = this.findMid()

        if (mid !== null) {
            newNode.next = mid.next
            mid.next = newNode
        }else{
            this.head = newNode
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

const list  = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)

list.appendAtMid(999)

list.print()