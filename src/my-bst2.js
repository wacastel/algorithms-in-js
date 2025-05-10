class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(node) {
    if (!root) {
        return [];
    }
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let currentLevel = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            currentLevel.push(currentNode.data);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
}

function topView(node) {
    if (!root) {
        return [];
    }
    let queue = [[root, 0]];
    let viewMap = new Map();
    while (queue.length > 0) {
        let [currentNode, horizDist] = queue.shift();
        if (!viewMap.has(horizDist)) {
            viewMap.set(horizDist, currentNode.data);
        }

        if (currentNode.left) {
            queue.push([currentNode.left, horizDist - 1]);
        }
        if (currentNode.right) {
            queue.push([currentNode.right, horizDist + 1]);
        }
    }
    // note: we need to sort this by keys (horizontal distances)
    let result = viewMap.keys().sort((a, b) => a - b);
    return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node (4);
root.left.right = new Node(5);
root.right.right = new Node (6);

const result = levelOrderTraversal(root);
const topViewResult = topView(root);
console.log(result);
console.log(topViewResult); // 4 2 1 3 6
