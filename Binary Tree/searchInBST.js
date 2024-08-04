
//? Implement the search method to check if a given value exists in a BST.
//? Given a BST and a value, return true if the value exists in the BST,otherwise return false.

 class TreeNode{

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

        const newNode = new TreeNode(value)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }


    insertNode(rootNode,newNode){

        if (newNode.value < rootNode.value) {
            
            if (rootNode.left === null) {
                rootNode.left = newNode
            } else {
                this.insertNode(rootNode.left,newNode)
            }

        } else {
            
            if (rootNode.right === null) {
                rootNode.right = newNode
            } else {
                this.insertNode(rootNode.right,newNode)
            }
        }
    }

    search(root,target){

        if(root === null ) return false
        if(root.value === target) return true

        if (target < root.value) {
           return this.search(root.left,target)
        } else {
           return this.search(root.right,target)
        }

    }


 }

 const list = new BinarySearchTree()

 list.insert(5)
 list.insert(4)
 list.insert(9)
 list.insert(7)
 list.insert(3)
 list.insert(9)

console.log(list.search(list.root,6));



