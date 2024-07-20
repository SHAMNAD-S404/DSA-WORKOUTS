//? DELETE MIDDLE NODE  FROM A SLL
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
        let previous = slow
        while(fast !== null && fast.next !== null){
            previous = slow
            slow = slow.next
            fast = fast.next.next
        }
        
        if (slow !== null) {
            previous.next = slow.next
        }else{
            return 'empty'
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
const list=new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)

list.findMid()
list.print()

