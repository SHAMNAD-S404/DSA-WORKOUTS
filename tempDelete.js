
class Node {
    constructor (value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    insert(value){

        const node = new Node(value)

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

    findMin(root){

        while( root !== null){
            root = root.left
        }

        return root;
    }


    delete(root,value){

        if(root === null) return null
        
        if (value < root.value) {
            root.left  = this.delete(root.left,value)
        } else if(value > root.value) {
            root.right = this.delete(root.right,value)
        }else{

            if(root.left  === null) return root.right;
            if(root.right === null) return root.left;

            const min = this.findMin(root.right)

            root.value = min.value
            root.right = this.delete(root.right,min.value)
        }

        return root;
    }

    inOrder(root,result = []){

        if(root !== null){

            this.inOrder(root.left,result)
            result.push(root.value)
            this.inOrder(root.right,result)
        }
        return result;
    }

    findHeight(root){

        if(root === null) return -1

        const leftHeight = this.findHeight(root.left)
    }

   kthElement(root,k){

    const result = []

    const order = (root) => {

        if(root === null || result.length >= k) return

        order(root.left)
        result.push(root.value)
        order(root.right)
    }

    order(root)
    return result[k-1]
   }

 search(root,value){

    if(root === null) return false

    if(root.value === value) return true

    if(value < root.value){
        return this.search(root.left,value)
    }else{
        return this.search(root.right,value)
    }
 }


    
}

const list = new Tree()

list.insert(11)
list.insert(22)
list.insert(3)
list.insert(5)
list.insert(88)
list.insert(7)
list.insert(8)
list.insert(9)

console.log(list.inOrder(list.root));

list.delete(list.root,22)

console.log(list.kthElement(list.root,5));

console.log(list.search(list.root,88));



