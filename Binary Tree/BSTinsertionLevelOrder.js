
//* LEVEL ORDER TRAVERSEL IN BINARY SEARCH TREE

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
            
            if (rootNode.right === null ) {
                rootNode.right = newNode
            } else {
                this.insertNode(rootNode.right,newNode)
            }
        }
    }


    //* Level order Traversal

    levelOrderTraversel(){

        if(this.root === null) return [];

        const result = []
        const queue  = [this.root]

        while(queue.length > 0 ) {

            const node = queue.shift()
            result.push(node.value)
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }

        return result;
    }


}

    const list = new BinarySearchTree()

    list.insert(10)
    list.insert(15)
    list.insert(6)
    list.insert(17)
    list.insert(8)
console.log(list.levelOrderTraversel());
console.log(list.root);
