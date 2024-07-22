
class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length;
    }

    push(value){
        this.items.push(value)
    }

    pop(){

        if (this.isEmpty()) {
            return 'stack is empty !'
        }

        return this.items.pop()
    }

    peek(){

        if (this.isEmpty()) {
            return 'stack is empty'
        }

        return this.items[this.items.length-1]
    }

    printList(){

        if (this.isEmpty()) {
            return ' stack is empty'
        }
        return this.items.join(',')
    }

   
}

    const stack = new Stack();

    for (let i = 0; i < 10; i++) {

        stack.push(i)
    }

    stack.pop()

    console.log(stack.peek());
    console.log(stack.printList());