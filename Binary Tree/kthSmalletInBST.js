
class TreeNode{
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

    kthSmallest(root,k){

        const result = []

        const inOrder = (node) =>{

            if(node === null || result.length >= k) return;

            inOrder(node.left)
            result.push(node.value)
            inOrder(node.right)
        }

        inOrder(root)

        return result[k-1]
    }

    inOrderTraversal(root,result =[]){

        if (root !== null) {

            this.inOrderTraversal(root.left,result)
            result.push(root.value)
            this.inOrderTraversal(root.right,result)
            
        }

        return result
    }


}


const list = new BinarySearchTree()

list.insert (5)
list.insert (4)
list.insert (9)
list.insert (7)
list.insert (3)
list.insert (10)



console.log(list.inOrderTraversal(list.root));

console.log(list.kthSmallest(list.root,5));




