//? SORT OUT VALUES IN STACK 

 class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length  === 0;
    }

    size(){
        return this.items.length;
    }

    peek(){

        if (this.isEmpty()) {
            return 'empty stack'
        }

        return this.items[this.items.length-1]
    }

    push(value){
        return this.items.push(value)
    }

    pop(){

         if (this.isEmpty()) {
             return 'empty stack'
         } else {
            return this.items.pop()
         }
    }

    printList(){

        if (this.isEmpty()) {
            return 'empty stack'
        }

        this.items.forEach(item => console.log(item))
    }
 }

 //function to reverse string
 function reverseStack(stack){

    const tempStack = new Stack() // creating a temp instance for sorting purpose

    while (!stack.isEmpty()) {  // if stack is not empty 

        let current = stack.pop()  //assigning values to current to compare

        while (!tempStack.isEmpty() && tempStack.peek() > current) { //if tempstack have element and its top value is greter than current

            stack.push(tempStack.pop()) //remove that value from tempstock and pushing to stack
        }

        tempStack.push(current) //add values to tempstack
    }

    while(!tempStack.isEmpty()){
        stack.push(tempStack.pop()) //adding values back to main stak after sort
    }

    
 }


    const stack = new Stack()

    for (let i = 1; i <= 10; i++) {
        
        stack.push(i)
    }

    stack.push(789)

    reverseStack(stack);

    stack.printList()