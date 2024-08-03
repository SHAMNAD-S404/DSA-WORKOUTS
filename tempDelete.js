class Node{
    constructor(value){
        this.value = value
        this.left  = null
        this.right = null 
    }
}

class shamnad{
    constructor(){
        this.root = null
    }

    insert(value){

        const newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(rootNode,newNode){

        if ( newNode.value < rootNode.value) {
            
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

    levelOrder(){

        if(this.root === null) return []

        let result = []
        let queue = [this.root]

        while(queue.length > 0){

            const node = queue.shift()
            result.push(node.value)

            if(node.left !== null)  queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }

        return result
    }
}

const hi = new shamnad()

hi.insert(10)
hi.insert(11)
hi.insert(15)
hi.insert(1)
hi.insert(6)

console.log(hi.levelOrder());
