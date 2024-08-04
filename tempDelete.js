function kthSmallest(root,k){
    const result = []

    const inOrder = (node) => {

        if(node === null || result.length >= k) return

        inOrder(node.left)
        result.push(node.value)
        inOrder(node.right)
    }

    inOrder(root)

    return result[k-1]
}