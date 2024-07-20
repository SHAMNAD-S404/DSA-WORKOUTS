//? DELETE PREVIOUS NODE OF A EVEN NODE 

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

    removePrevious(){

        let beforePrev = null
        let previous   = this.head
        let current    = this.head.next
        
        while(current !== null){

            if (current.value % 2 ===0) {

                if (beforePrev === null) {
                    this.head = current
                }else{
                    beforePrev.next = current
                }
            }else{
                beforePrev = previous
            }

            previous = current
            current  = current.next
        }
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

 for (let i = 0; i < 15; i++) {
        list.append(i)
 }

 list.removePrevious()

 list.printList()