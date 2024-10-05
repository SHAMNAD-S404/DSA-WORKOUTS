    class TreeNode {
        constructor(value){

            this.value  = value
            this.left   = null
            this.right  = null

        }
    }

    class BinarySearchTree{
        constructor() {
            
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

        inOrderTraversal(root,result=[]){

            if (root !== null) {

                this.inOrderTraversal(root.left,result)
                result.push(root.value)
                this.inOrderTraversal(root.right,result)
            }

            return result;
        }

        lowestCommonAncestor(root,a,b){

            if(root===null) return null // If the root is null, return null (base case).

            // If both p and q are smaller than the current node, move to the left child.
            if (a.value < root.value && b.value < root.value) {
                return this.lowestCommonAncestor(root.left,a,b)
            }


            // If both p and q are larger than the current node, move to the right child.
            if (a.value > root.value && b.value > root.value) {
                return this.lowestCommonAncestor(root.right,a,b)
            }

            // If one node is on the left and the other is on the right, the current node is the LCA.
            return root;
        }
    }

    const list = new BinarySearchTree()

list.insert(5)
list.insert(4)
list.insert(9)
list.insert(7)
list.insert(3)
list.insert(9)

console.log(list.inOrderTraversal(list.root));

const a=3
const b=4

console.log(list.lowestCommonAncestor(list.root,a,b));



