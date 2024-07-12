
class Node{
    constructor(value){
        this.value = value;
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
            while(current.next !== null ){
                current = current.next
            }
            current.next = newNode
        }
    }

    addAtStart(value){

        const newNode = new Node(value)
        newNode.next  = this.head;
        this.head     = newNode 
    }

    deleteNode(value){
        
        if (this.head === null) { //if node is empty 
            return
        }

        //IF THE HEAD NODE IS WANTED TO DELETED
        if (this.head.value === value) {
            this.head = this.head.next
            return
        }

        //FIND THE NODE TO BE DELETED AND ITS PREVIOUS NODE TO CHANGE REFERENCE
        let current  = this.head
        let previous = null;
        
        while(current !== null && current.value !== value){

            previous = current;
            current  = current.next 
        }

        // If the node to be deleted was found, remove it
        if (current !== null) {
            previous.next = current.next
            return `success`
        }else{
            return `not found`
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

//create instance of linked list and call the linked list 
const list = new LinkedList()

list.append(1111)
list.append(2222)
list.append(3333)

list.addAtStart(9999)
list.deleteNode(2222)
console.log(list.deleteNode(8585));

list.printList()