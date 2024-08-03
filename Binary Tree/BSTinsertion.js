//* INORDER TRAVERSAL IN BINARY SEARCH TREE

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
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(rootNode,newNode){

        if (newNode.value < rootNode.value) { //if its less than root node value we will add in left side of the 
            
                if (rootNode.left === null ) {
                    rootNode.left = newNode
                }else{
                    this.insertNode(rootNode.left,newNode)
                }
        }else{

            if (rootNode.right === null) {
                rootNode.right = newNode
            }else{
                this.insertNode(rootNode.right,newNode);
            }
        }
    }

    //* In order traversal


    inOrderTraversal( rootNode,result = [] ){

        if (rootNode !== null) {
            
            this.inOrderTraversal(rootNode.left,result);
            result.push(rootNode.value)
            this.inOrderTraversal(rootNode.right,result)
        }

        return result;
    }


    


    print(){
        const result = this.inOrderTraversal(this.root)
        console.log('in order Traversal',result);
    }
}


const bstTree = new BinarySearchTree()

bstTree.insert(10)
bstTree.insert(11)
bstTree.insert(8)
bstTree.print()