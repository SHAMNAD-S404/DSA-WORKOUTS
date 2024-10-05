//? CONVERT AN ARRAY TO LINKED LIST 

class Node {
    constructor(value){
        this.value = value
        this.next  = null
    }
}

class LinkedList {
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
    print(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }

    static fromArray(arr){
        const link = new LinkedList()
        for(let value of arr){
            link.append(value)
        }
        return link
    }
}

const array = [10,20,300,40,50,60]
const list = LinkedList.fromArray(array)
list.print()
