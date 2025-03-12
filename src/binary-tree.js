class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
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

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
//root.right.left = new Node(6);
//root.right.right = new Node(7);

document.getElementById('binary-tree').innerHTML += 'Inorder Traversal: ';
printInorder(root);
// Output: 4 2 5 1 3
// Output: 4 2 5 1 6 3 7
const result = levelOrderTraversal(root);
console.log('level order traversal result: ', result);
document.getElementById('level-order-traversal').innerHTML += 'Level Order Traversal: ';
document.getElementById('level-order-traversal').innerHTML += `${result}`;
print2DArray(result);
