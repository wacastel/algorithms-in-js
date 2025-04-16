class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value, node = this.root) {
      if (this.root === null) {
        this.root = new Node(value);
        return;
      }
  
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
        } else {
          this.insert(value, node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
        } else {
          this.insert(value, node.right);
        }
      }
    }
  
    delete(value, node = this.root, parent = null) {
      if (node === null) return;
  
      if (value < node.value) {
        this.delete(value, node.left, node);
      } else if (value > node.value) {
        this.delete(value, node.right, node);
      } else {
        // Found the node to delete
        if (node.left && node.right) {
          let successor = this.findMin(node.right);
          node.value = successor.value;
          this.delete(successor.value, node.right, node);
        } else {
          const child = node.left || node.right;
  
          if (parent === null) {
            this.root = child;
          } else if (parent.left === node) {
            parent.left = child;
          } else {
            parent.right = child;
          }
        }
      }
    }
  
    findMin(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  }
  