//? find the length of the total nodes in a sll

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

    sizeOfNode(){
        if (this.head === null) {
            return `empty`
        }

        let count   = 0
        let current = this.head
        while(current !== null){
            count ++
            current = current.next
        }

        return count
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

list.append(50)
list.append(150)
list.append(250)

list.print()

console.log(list.sizeOfNode());