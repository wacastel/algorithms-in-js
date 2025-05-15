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

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

/* head ends */

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
});

function ancestors(root, target) {
    let results = [];
    let currentNode = root;
    if (target == root.data) {
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
    let results2 = ancestors(root, v2);
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

/* tail begins */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _stdin = "";
var _stdin_array = "";
var _currentline = 0;

process.stdin.on('data', function(data) {
    _stdin += data;
});

process.stdin.on('end', function() {
    _stdin_array = _stdin.split("\n");
    solution();
});

function readLine() {
    return _stdin_array[_currentline++];
}

function solution() {

    var tree = new Tree();
    var n = parseInt(readLine());
    var m = readLine().split(" ").map(Number);
    var p = readLine().split(" ").map(Number);
    var v1 = p[0];
    var v2 = p[1];
    for (var i=0; i<n; i++) {
        tree.root = tree.insert(tree.root, m[i]);
    }
    lca(tree.root, v1, v2);
}