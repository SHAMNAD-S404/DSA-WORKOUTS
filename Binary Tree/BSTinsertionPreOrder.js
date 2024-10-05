
//* PREORDER TRAVERSAL IN A BINARY SEARCH TREE

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

        const newNode  = new TreeNode(value)

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

    preOrderTraversal(rootNode,result = []){

        if (rootNode !== null) {
            
            result.push(rootNode.value)
            this.preOrderTraversal(rootNode.left,result)
            this.preOrderTraversal(rootNode.right,result)
        }

        return result

    }

    print(){

        const result = this.preOrderTraversal(this.root)
        console.log(result);
    }
}

 const list = new BinarySearchTree()

 list.insert(5)
 list.insert(3)
 list.insert(8)
 list.insert(2)
 list.insert(13)
 list.insert(4)

 console.log(list.root);

 list.print()