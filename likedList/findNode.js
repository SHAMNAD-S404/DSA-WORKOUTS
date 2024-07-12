
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

    findNode(value){

        let current = this.head
        let position = 1;

        while(current !== null){
            if (current.value === value) {
                return `found at ${position} node `
            }
            current = current.next
            position ++
        }

        return `value not found`
    }

    printList(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }
}

const list = new LinkedList()

list.append(11)
list.append(22)
list.append(33)

console.log(list.findNode(22));