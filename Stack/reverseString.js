//? REVERSE A STRING USING STACK

 class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){

        if (this.isEmpty()) {
            return 'empty stack'
        }else{
            return this.items.length;
        }
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

    peek(){

        if (this.isEmpty()) {
            return 'empty stack'
        } else {
            return this.items[this.items.length-1]
        }
    }

    printList(){

        if (this.isEmpty()) {
            return 'empty stack'
        } else {
            this.items.forEach(item => console.log(item))
        }
    }
 }


 function reverseString(string){

    const stack = new Stack()

    for (const str of string) {

        stack.push(str)
    }

    let reverse = ''
    while(!stack.isEmpty()){
      reverse+= stack.pop()
    }

    return reverse
 }


 const word = 'shamnad'

 console.log(reverseString(word));