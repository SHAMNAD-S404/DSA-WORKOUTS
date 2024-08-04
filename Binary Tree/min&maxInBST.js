
//       10
//      /  \
//     5    15
//    / \   / \
//   2   8 12  20


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

    insertNode(root,newNode){

        if (newNode.value < root.value) {
            
            if (root.left === null) {
                root.left = newNode
            } else {
                return this.insertNode(root.left,newNode)
            }

        } else {

            if (root.right === null) {
                root.right = newNode
            } else {
                return this.insertNode(root.right,newNode)
            }
            
        }
    }

    findMin(){

        let root = this.root
        while(root.left !== null){
            root = root.left
        }
        return root;

    }

    findMax(){

        let root = this.root

        while(root.right !== null){
            root = root.right
        }
        return root.value
    }
} 

 const list = new BinarySearchTree()

 list.insert(10)
 list.insert(20)
 list.insert(12)
 list.insert(7)
 list.insert(2)

 console.log(list.findMin());
 console.log(list.findMax());
 
