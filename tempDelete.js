

 class Node{
    constructor(value){
        this.value = value
        this.next  = null
    }
 }

 class Stack{
    constructor(){
        this.top = null
        this.count = 0
    }

    isEmpty(){
        return this.top === null
    }

    size(){
        return this.count;
    }

    push(value){

        const newNode = new Node(value)

        if (this.top) {
            newNode.next = this.top
        }

        this.top = newNode
        this.count++
    }

    pop(){

        if (this.isEmpty()) {
            return 'empty stack'
        }

        const value = this.top.value
        this.top = this.top.next
        return value
    }

    printList(){

        if (this.isEmpty) {
            return 'empty stack'
        }

        let current = this.top
        while(current){
            console.log(current.value);
            current = current.next
        }
    }
 }

 const stack = new Stack()

 stack.push(10)
 stack.push(11)
 stack.push(12)

 console.log(stack.size());
 
 console.log(stack.pop());