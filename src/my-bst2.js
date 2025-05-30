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
    let minHD = 0, maxHD = 0;
    let result = [];
    while (queue.length > 0) {
        let [currentNode, horizDist] = queue.shift();
        if (!viewMap.has(horizDist)) {
            viewMap.set(horizDist, currentNode.data);
            minHD = Math.min(minHD, horizDist);
            maxHD = Math.max(maxHD, horizDist);
        }

        if (currentNode.left) {
            queue.push([currentNode.left, horizDist - 1]);
        }
        if (currentNode.right) {
            queue.push([currentNode.right, horizDist + 1]);
        }
    }
    // note: we need to sort this by keys (horizontal distances)
    for (let i = minHD; i <= maxHD; i++){
        result.push(viewMap.get(i));
    }
    return result;
}

function insert(root, value) {
    if (!root) {
        return new Node(value);
    }
    console.log('inserting ', value, ' value into tree');
    let currentNode = root;
    while (true) {
        if (value < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = new Node(value);
                return root;
            }
            currentNode = currentNode.left;
        } else if (value > currentNode.data) {
            if (currentNode.right === null) {
                currentNode.right = new Node(value);
                return root;
            }
            currentNode = currentNode.right;
        } else {
            return root;
        }
    }
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

let tree = insert(null, 10);
tree = insert(tree, 5);
tree = insert(tree, 15);
tree = insert(tree, 3);
tree = insert(tree, 7);
tree = insert(tree, 13);
tree = insert(tree, 20);
console.log('tree: ', tree);
treeResult = levelOrderTraversal(tree);
console.log(treeResult);
