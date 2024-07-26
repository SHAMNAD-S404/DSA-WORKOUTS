//? WRITE A FUNCTION TO IMPLEMENT STACK WIH QUEUE

  class StackWtihQueue{
        constructor(){

            this.queue1 =[]
            this.queue2 =[]
        }

        push(value){

            this.queue1.push(value)

            while(this.queue1.length > 0){
                this.queue2.push(this.queue1.shift())
            }

            [this.queue1,this.queue2] = [this.queue2,this.queue1]
        }

        isEmpty(){
            return this.queue1.length === 0;
        }

        pop(){
            if (this.isEmpty()) {
                return -1                
            }

            return this.queue1.shift()
        }
  }