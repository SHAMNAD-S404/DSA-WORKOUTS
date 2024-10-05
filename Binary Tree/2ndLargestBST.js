class TreeNode {
    constructor(value){

        this.value = value
        this.left  = null
        this.right = null
    }
}

class BinarySearchTree{

    constructor() {
        this.root = null
    }

    insert(value){

        const node = new TreeNode(value)

        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root,node)
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

    findMax(root){

        while(root.right !== null){

            root = root.right
        }

        return root;
    }

    secondLargest(root){

        if(root === null || root.left === null && root.right === null){
            return null
        }

        let parent = null
        let current = root

        while(current.right !== null){
            parent = current
            current = current.right
        }

        if(current.left !==  null){
            return this.findMax(current.left).value
        }

        return parent;

    }

}

const list = new BinarySearchTree()

list.insert(9)
list.insert(8)
list.insert(77)
list.insert(6)
list.insert(55)
list.insert(44)
list.insert(22)

console.log(list.secondLargest(list.root));
