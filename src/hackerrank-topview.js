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

function topView(root) {
    if (!root) {
        return [];
    }
    let queue = [[root, 0]];
    let result = [];
    let viewMap = new Map();
    let minHD = 0, maxHD = 0;
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
    for (let i = minHD; i <= maxHD; i++) {
        result.push(viewMap.get(i));
    }
    let result2 = result.join(" ");
    console.log(result2);
    return result2;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
});

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
    for (var i=0; i<n; i++) {
        tree.root = tree.insert(tree.root, m[i]);
    }

    topView(tree.root);
}