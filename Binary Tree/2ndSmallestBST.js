 
 class Node{
    constructor(value){
        this.value = value
        this.left  = null
        this.right = null
    }
 }

 class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){

        const node = new Node(value)

        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){

        if (node.value < root.value) {

            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left,node)
            }

        } else {

            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right,node)
            }
            
        }
    }

    findMin(root){

        while(root.left !== null){
            root = root.left
        }

        return root;
    }


    socondSmallest(root){

        if(root === null || root.left === null && root.right === null){
            return null
        }

        let parent = null
        let current = root

        while(current.left !== null){

            parent = current
            current = current.left
        }

        if(current.right !== null){
            return this.findMin(current.right).value
        }

        return parent.value
    }
 }

 const list = new BinarySearchTree()

 list.insert(66)
 list.insert(44)
 list.insert(55)
 list.insert(6)
 list.insert(77)
 list.insert(8)
 list.insert(99)

 console.log(list.socondSmallest(list.root));
 

