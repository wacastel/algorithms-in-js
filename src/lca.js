class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
        node = new Node(data);
    }
     else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}

function ancestors(root, target) {
    let results = [];
    let currentNode = root;
    if (target === root.data) {
        results.push(root.data);
    }
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
    arr1.reverse();
    arr2.reverse();
    for (num1 in arr1) {
        //console.log(arr1[num1]);
        for (num2 in arr2) {
            if (arr1[num1] === arr2[num2]) {
                //console.log('*** we have a match! ***');
                return arr1[num1];
            }
        }
    }
    return undefined;
}

function lca(root, v1, v2) {
    let results1 = ancestors(root, v1);
    console.log("The ancestors of ", v1, " are: ");
    console.log(results1);
    let results2 = ancestors(root, v2);
    console.log("The ancestors of ", v2, " are: ");
    console.log(results2);
    let lca;
    if (results2.includes(v1)) {
        lca = v1;
    }
    else if (results1.includes(v2)) {
        lca = v2;
    }
    else {
        lca = lowestCommonNumber(results1, results2);
    }
    console.log(lca);
}

/*let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(20);

let root = new Node(1);
root.right = new Node(2);

let target1 = 1;
let results1 = ancestors(root, target1);
let target2 = (2);
let results2 = ancestors(root, target2);
console.log("The ancestors of ", target1, " are: ");
console.log(results1);
console.log("The ancestors of ", target2, " are: ");
console.log(results2);
let result = lowestCommonNumber(results1, results2)
console.log("LCA: ", result);*/

//let m = [9, 7, 8, 5, 6, 4, 3, 1];
//let v1 = 1;
//let v2 = 6;

let m = [8, 6, 5, 7, 11, 12, 13, 10, 9];
let v1 = 9;
let v2 = 12;
var tree = new Tree();
for (var i=0; i<m.length; i++) {
    tree.root = tree.insert(tree.root, m[i]);
}
console.log(tree.root);
lca(tree.root, v1, v2);
