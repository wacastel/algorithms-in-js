// Define the Node class
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define the Binary Search Tree class
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Recursive insert function (no private helper!)
    insert(value, node = this.root) {
      // If the tree is empty, set the root
      if (this.root === null) {
        this.root = new TreeNode(value);
        return;
      }
  
      // If we’re at a leaf position, insert the node
      if (value < node.value) {
        if (node.left === null) {
          node.left = new TreeNode(value);
        } else {
          this.insert(value, node.left);
        }
      } else {
        if (node.right === null) {
          node.right = new TreeNode(value);
        } else {
          this.insert(value, node.right);
        }
      }
    }

    contains(value, node = this.root) {
      if (value == node.value) {
        console.log('tree contains value ', value);
        return true;
      } else if (value < node.value) {
          if (node.left === null) {
            console.log('sorry! tree does not contain value ', value);
            return false;
          } else {
            return this.contains(value, node.left);
          }
      } else {
        if (node.right === null) {
          console.log('sorry! tree does not contain value ', value);
          return false;
        } else {
          return this.contains(value, node.right);
        }
      }
    }
  
    // In-order traversal to see the tree in sorted order
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(18);
  
  console.log("In-order Traversal:");
  tree.inOrderTraversal();
  tree.contains(15);
  tree.contains(16);