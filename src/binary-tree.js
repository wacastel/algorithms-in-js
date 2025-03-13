class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}

class BST {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
          this.root = newNode;
          return;
      }
      let current = this.root;
      while (true) {
          if (value < current.data) {
              if (!current.left) {
                  current.left = newNode;
                  return;
              }
              current = current.left;
          } else {
              if (!current.right) {
                  current.right = newNode;
                  return;
              }
              current = current.right;
          }
      }
  }
}

// Inorder traversal (Left-Root-Right)
function printInorder(node) {
    if (node) {
      printInorder(node.left);
      //console.log(node.data);
      document.getElementById('binary-tree').innerHTML += `${node.data} `;
      printInorder(node.right);
    }
  }

// Function to perform level-order traversal
function levelOrderTraversal(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.data);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(currentLevel);
  }

  return result;
}

function print2DArray(array2D) {
  console.log("2D array contents:")
  //let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  for (let i = 0; i < array2D.length; i++) {
    let rowString = "";
    for (let j = 0; j < array2D[i].length; j++) {
      rowString += array2D[i][j] + " ";
    }
    console.log(rowString);
  }
}

// Function to print BST in ASCII format
function printBST(root) {
  console.log('Printing BST in ASCII:');
  if (!root) return console.log("(empty tree)");

  let level = 0;
  const nodeLevels = [];
  traverse(root, 0, nodeLevels);

  nodeLevels.forEach((nodes, i) => {
      const repeatValue = (1 << (nodeLevels.length - i)) - 1;
      const indent = " ".repeat(repeatValue);
      const paddingInBetween = " ".repeat(repeatValue * 2);
      console.log(indent + nodes.join(paddingInBetween));
  });
}

// Level-order traversal utility function for printing the tree in ASCII format
function traverse(node, level, nodeLevels) {
  if (!node) return;

  if (!nodeLevels[level]) nodeLevels[level] = [];
  nodeLevels[level].push(node.data);

  traverse(node.left, level + 1, nodeLevels);
  traverse(node.right, level + 1, nodeLevels);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.getElementById('binary-tree').innerHTML += 'Inorder Traversal: ';
printInorder(root);
// Output: 4 2 5 1 3

const result = levelOrderTraversal(root);
console.log('level order traversal result: ', result);
document.getElementById('level-order-traversal').innerHTML += 'Level Order Traversal: ';
document.getElementById('level-order-traversal').innerHTML += `${result}`;
print2DArray(result);

// Create a BST and print it out in ASCII format:
const tree = new BST();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

printBST(tree.root);
/* 
Output:
        50
    30      70
  20  40  60  80
*/
