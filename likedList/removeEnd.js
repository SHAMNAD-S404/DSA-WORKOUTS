//? REMOVE NODE FROM END

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

    deleteEnd(){
        if(this.head === null || this.head.next === null)  return 

        let current  = this.head
        let previous = current

        while(current !== null){

            previous = current
            current  = current.next
        }

        previous.next = null
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

list.deleteEnd()
list.print()