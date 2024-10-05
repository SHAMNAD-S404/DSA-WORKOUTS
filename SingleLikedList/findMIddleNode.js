//? Find the Middle node value in ssl

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

        while(fast !==null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        return slow ? slow.value : null
    }

    print(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }
}

const list = new LinkedList()

list.append(10)
list.append(11)
list.append(12)
list.append(13)
list.append(14)
list.append(15)
list.append(16)

list.print()

console.log(`find mid :`, list.findMid())
