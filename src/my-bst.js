class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        let currentLevel = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            currentNode = queue.shift();
            currentLevel.push(currentNode.data);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            console.log('currentLevel: ', currentLevel);
        }
        result.push(currentLevel);
        console.log('result: ', result);
    }
    return result;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
console.log('input binary tree: ', root);
levelOrderTraversal(root);
