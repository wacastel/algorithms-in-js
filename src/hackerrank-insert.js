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

function insert(root, value) {
    if (!root) {
        return new Node(value);
    }
    let currentNode = root;
    while (true) {
        if (value < currentNode.data) {
            if (!currentNode.left) {
                currentNode.left = new Node(value);
                return root;
            }
            currentNode = currentNode.left;
        }
        else if (value > currentNode.data) {
            if (!currentNode.right) {
                currentNode.right = new Node(value);
                return root;
            }
            currentNode = currentNode.right;
        } else {
            return root;
        }
    }
}

function levelOrder(root) {
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let currentNode = queue.shift();
        result.push(currentNode.data);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    let result2 = result.join(" ");
    return result2;
}

function preOrder(node) {
    if (node === null) {
        return;
    }
    process.stdout.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
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
    tree.root = insert(null, m[0]);
    for (var i=1; i<n; i++) {
        tree.root = insert(tree.root, m[i]);
    }
    preOrder(tree.root);
}