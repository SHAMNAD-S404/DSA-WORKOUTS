//* CHECK A TREE IS BST OR NOT 

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

    insertNode(root,node){

        if (node.value < root.value) {
            
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left,node)
            }

        } else {
            
            if (root.right === null ) {
                root.right = node
            } else {
                this.insertNode(root.right,node)
            }
        }
    }


    isBST(root,min = -Infinity, max = Infinity){

        if(root === null) return true  //base case

        if(root.value <= min || root.value >= max ) return false;

        return this.isBST(root.left, min, root.value) && this.isBST(root.right, root.value , max)

    }
}

const list = new BinarySearchTree()

list.insert(5)
list.insert(9)
list.insert(7)
list.insert(11)
list.insert(15)

console.log(list.isBST(list.root));
