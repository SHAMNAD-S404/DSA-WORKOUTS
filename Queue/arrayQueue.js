//?  IMPLEMENT A ARRAY QUEUE WITH BASIC OPERATIONS

class Queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length;
    }

    peak(){

        if (this.isEmpty()) {
            return 'empty array'
        }

        return this.items[0];
    }

    enqueue(value){
        return this.items.push(value)
    }

    dequeue(){
        return this.items.shift()
    }

    printList(){

        if (this.isEmpty()) {
            return 'empty array'
        }

        this.items.forEach(item => console.log(item))
    }
}

const queue = new Queue()

for (let i = 0; i < 10; i++) {    
    queue.enqueue(i)
}

queue.dequeue()

queue.printList()