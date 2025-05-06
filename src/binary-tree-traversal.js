// Define the binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Level Order Traversal function
function levelOrderTraversal(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    console.log('queue: ', queue);

    while (queue.length > 0) {
        const levelSize = queue.length;
        console.log('level size: ', levelSize);
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            console.log('current node: ', currentNode.val);
            currentLevel.push(currentNode.val);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            
            console.log('currentLevel: ', currentLevel);
            console.log('queue: ', queue);
        }

        result.push(currentLevel);

        console.log('result: ', result);
    }
    return result;
}

// Creating a sample binary tree:
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, null, new TreeNode(6));

console.log(levelOrderTraversal(root));
// Output: [[1], [2, 3], [4, 5, 6]]
