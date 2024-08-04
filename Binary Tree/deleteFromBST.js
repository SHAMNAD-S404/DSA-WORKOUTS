//* REMOVE A VALUE FROM BST

class TreeNode {
    constructor(value){

        this.value  = value
        this.left   = null
        this.right  = null
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

        return root
    }


    findMax(root){

        while(root.right !== null){
            root = root.right
        }
        return root;
    }

    deleteNode(root,value){

        if(root === null) return null 

        if (value < root.value) {

            root.left = this.deleteNode(root.left,value)

        }else if (value > root.value) {

            root.right = this.deleteNode(root.right,value)

        }else{ //* WHEN VALUE FOUND

            //If there is only a one child or no child situation
            if(root.left === null) return root.right;
            if(root.right === null) return root.left;

            //If the node have both child
            const minNode = this.findMin(root.right)
            root.value   = minNode.value
            root.right    = this.deleteNode(root.right,minNode.value)
            
        }

        return root;
    }

    //* INORDER TRAVERSAL

    inorderTraversal(root,result =[]){

        if (root !== null) {

            this.inorderTraversal(root.left,result)
            result.push(root.value)
            this.inorderTraversal(root.right,result)
        }

        return result;
    }

     print(){

        if(this.root === null) return 'empty'
        const result = this.inorderTraversal(this.root)
        console.log(result);
           
     }   
}

const list = new BinarySearchTree()

list.insert(5)
list.insert(4)
list.insert(9)
list.insert(7)
list.insert(3)
list.insert(10)


list.print()
console.log(list.root);

list.deleteNode(list.root,7)

list.print()
console.log(list.root);




