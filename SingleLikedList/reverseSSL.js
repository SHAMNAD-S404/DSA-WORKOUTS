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

    reverseList(){

        let previous = null
        let current  = this.head

        while(current !== null){

            let next     = current.next
            current.next = previous
            previous     = current
            current      = next 
        }
        this.head = previous
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

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)

list.reverseList()

list.print()