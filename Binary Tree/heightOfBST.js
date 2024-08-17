//? FIND THE HEIGHT OF THE BST TREE 

class TreeNode{

    constructor(value){

        this.value = value
        this.left  = null
        this.right = null   
    }
}

class BinarySearchTree{

    constructor(){
        this.root = null;
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

            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right,node)
            }
            
        }
    }

    findHeight(root) {

        if(root === null) return -1

        const leftHeight  = this.findHeight(root.left);
        const rightHeight = this.findHeight(root.right);

        return Math.max(leftHeight,rightHeight) +1;
    }

    


    
}

const list = new BinarySearchTree()

list.insert(7)
list.insert(9)
list.insert(11)
list.insert(16)
list.insert(6)
list.insert(9)

console.log(list.findHeight(list.root));

