//* POST ORDER TRAVERSAL IN BINARY TREE SEARCH

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


    postOrderTraversal(rootNode,result =[]){

        if (rootNode !== null) {
            
            this.postOrderTraversal(rootNode.left,result)
            this.postOrderTraversal(rootNode.right,result)
            result.push(rootNode.value)
        }

        return result
    }

    print(){

        const result = this.postOrderTraversal(this.root)
        console.log(result);
    }
}

    const list = new BinarySearchTree()
    
    list.insert(6)
    list.insert(8)
    list.insert(7)
    list.insert(4)
    list.insert(5)
    list.insert(3)
    list.insert(10)
    list.insert(11)

    console.log(list.root);

    list.print()