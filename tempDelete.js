
function findHeight(root){

    if(root === null) return -1

    const leftHeight  = this.findHeight(root.left)
    const rightHeight = this.findHeight(root.right)

    return Math.max(leftHeight,rightHeight) +1;
}

function findHeight(root){

    if(root === null) return -1

    const leftHeight = this.findHeight(root.left)
    const rightHeight= this.findHeight(root.right)

    return Math.max(leftHeight,rightHeight) +1;
}