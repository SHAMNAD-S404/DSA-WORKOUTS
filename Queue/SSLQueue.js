//? IMPLEMENT A QUEUE WITH A SINGLE LINKED LIST

 class Node{
     constructor(value){
        this.value = value
        this.next  = null
     }
 }

 class Queue {

    constructor(){
        
        this.first  = null
        this.last   = null
        this.length = 0; 
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

    enqueue(value){

        const newNode = new Node(value)

        if (this.first === null) {
            this.first = newNode
        } else {
            this.last.next = newNode
        }
        
        this.last = newNode
        this.length++;
    }

    dequeue(){

        if (this.isEmpty()) {
            return 'stack is empty'
        }

        const value = this.first.value
        this.first = this.first.next;

        if (this.first === null) {
            this.last = null
        }

        this.length--;
        return value;
    }

    peek(){

        if (this.isEmpty()) {
            return ' empty queue'
        }

        return this.first.value;
    }

    printList(){

        if (this.isEmpty()) {
            return 'empty queue'
        }

        let current = this.first

        while(current){
            console.log(current.value);
            current = current.next
        }
    }

 }

 const queue = new Queue()

 console.log( queue.isEmpty());
 
 for(let i=5;i<12;i++){
    queue.enqueue(i)
 }

 queue.printList()

 console.log(queue.peek());