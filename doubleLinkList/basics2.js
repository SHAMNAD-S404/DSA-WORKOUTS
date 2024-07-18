

    //! DOUBLE LINKED LIST WITH BASIC OPERATIONS

    class Node {
        constructor(value) {
            this.value=value
            this.next=null
            this.prev=null
        }
    }

    class DoubleLinkedList {
        constructor() {

            this.head=null
            this.tail=null
        }

        append(value) {

            const newNode=new Node(value)

            if(this.tail!==null) {
                this.tail.next=newNode
                newNode.prev=this.tail
                this.tail=newNode
            } else {

                this.head=newNode
                this.tail=newNode
            }
        }

        prepend(value) {

            const newNode=new Node(value)

            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode



        }

        insertEnd(value) {

            const newNode=new Node(value)

            newNode.prev=this.tail
            newNode.next=null
            this.tail.next=newNode
            this.tail=newNode
        }

        deleteHead() {
            if(this.head===null) return

            this.head=this.head.next
        }

        deleteTail() {

            if(this.tail===null&&this.tail.prev===null) return


            this.tail=this.tail.prev
            this.tail.next=null
        }

        printList() {

            let current=this.head
            while(current!==null) {
                console.log(current.value);
                current=current.next
            }
        }
    }

    const list=new DoubleLinkedList()

    for(let i=1;i<=12;i++) {
        list.append(i)
    }
    list.prepend(9999)
    list.insertEnd(813)
    list.deleteHead()
    list.deleteTail()
    list.printList()