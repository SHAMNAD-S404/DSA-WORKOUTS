//creating a node instance and calling in node creation
 class Node{

    constructor(value){
        //sing node have two elements value and next reference
        this.value = value; //value of the current node
        this.next  = null; //primary set next ref as null
    }
 }

//here we creating linked list
 class LinkedList{ 

    constructor(){
        this.head = null //initially set head as null
    }

    // Method to add a new node to the end of the list
    append(value){

        const newNode = new Node(value) //calling the node we previously created

        if (this.head === null) {
            // If the list is empty, set the new node as the head
            this.head = newNode
        }else{
            // If the list is not empty, traverse to the end and add the new node

            let current = this.head
            while(current.next !== null){
                current = current.next;
            }
            //when current.next == null then its come to out of loop
            current.next = newNode; //here we set the refernce to new node in last previous node next element

        }


    }
     // Method to print the values of the linked list
    printList(){
        let current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }
 }

 //CREATING A NEW LINKED LIST WITH IT INSTANCE AND CALLING ITS APPEND FUNCTION TO ADD NODE
 const list = new LinkedList()

 list.append(10) //calling linked list append function and giving argument 10 as value to create a new node
 list.append(20)
 list.append(30)

 //print the list
 list.printList()
