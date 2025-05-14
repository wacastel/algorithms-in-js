class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function ancestors(root, target) {
    let results = [];
    let currentNode = root;
    while (currentNode) {
        if (target === currentNode.data) {
            return results;
        }
        if (target < currentNode.data) {
            results.push(currentNode.data);
            currentNode = currentNode.left;
        }
        if (target > currentNode.data) {
            results.push(currentNode.data);
            currentNode = currentNode.right;
        }
    }
    return [];
}

function lowestCommonNumber(arr1, arr2) {
    let result = Infinity;
    for (num1 in arr1) {
        console.log(arr1[num1]);
        for (num2 in arr2) {
            if (arr1[num1] === arr2[num2] && result > arr1[num1]) {
                console.log('*** we have a match! ***');
                result = arr1[num1];
            }
        }
    }
    return result == Infinity ? undefined : result;
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(20);
let target1 = 20;
let results1 = ancestors(root, target1); // [10, 15]
let target2 = (12);
let results2 = ancestors(root, target2); // [10, 15]
console.log("The ancestors of ", target1, " are: ");
console.log(results1);
console.log("The ancestors of ", target2, " are: ");
console.log(results2);
let lca = lowestCommonNumber(results1, results2)
console.log("LCA: ", lca);
