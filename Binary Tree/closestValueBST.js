//*  How to check the Closest Value to a Given Number in a BST ?

 class TreeNode{

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

    findClosest(root,target){

       if(root === null) return null

        let closest = root.value

        while(root !== null){

            if (Math.abs(target - closest) > Math.abs(target - root.value)) {
                closest = root.value
            }

            if (target < root.value) {
                root = root.left
            } else if(target > root.value) {
                root = root.right
            } else{
                break;
            }
        }

        return closest;      

    }

    inOrder(root,result = []){

        if(root !== null){

            this.inOrder(root.left,result)
            result.push(root.value)
            this.inOrder(root.right,result)
        }

        return result
    }
 }

 const list = new BinarySearchTree()

 list.insert(55)
 list.insert(3)
 list.insert(2)
 list.insert(44)
 list.insert(77)
 list.insert(88)
 list.insert(90)
console.log(list.inOrder(list.root));
 console.log(list.findClosest(list.root,40));


 
 