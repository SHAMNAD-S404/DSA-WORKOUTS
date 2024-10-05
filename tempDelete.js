

class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class SSL{
    
    constructor(){
      this.head = null
    }
    
    append(value){
      
      const newNode = new Node(value)
      
      if(this.head === null){
        this.head = newNode;
        
      }else {
        let current = this.head
        
        while(current.next !== null){
          
          current = current.next
        }
        current.next = newNode
      }
    }
    
    print(){
      
      let current = this.head
      while(current){
        console.log(current.value)
        current = current.next
      }
    }
    
  }
  
  const list = new SSL()
  
  
  for(let i = 10 ; i<=100 ; i+10){
    list.append(i)
  }
  
  list.print()
  
  
  