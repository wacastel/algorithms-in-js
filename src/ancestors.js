class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Finder {

    constructor(){
        this.results = [];
    }
    
    findAncestors(node, target) {
        if (!node) {
            return false;
        }

        if (node.data === target) {
            return true;
        }

        if (this.findAncestors(node.left, target) || this.findAncestors(node.right, target)) {
            //console.log(node.data);
            this.results.push(node.data);
            return true;
        }

        return false;
    }
}

function findLowestCommonNumber(arr1, arr2) {
  const set2 = new Set(arr2);
  let lowestCommon = Infinity;

  for (const num of arr1) {
    if (set2.has(num) && num < lowestCommon) {
      lowestCommon = num;
    }
  }

  return lowestCommon === Infinity ? undefined : lowestCommon;
}

// Example usage:
const root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

const targetNode = 60;
const targetNode2 = 40;
console.log(`Ancestors of ${targetNode} are:`);
//findAncestors(root, targetNode);

let finder = new Finder();
let finder2 = new Finder();
finder.findAncestors(root, targetNode);
console.log(finder.results);

console.log(`Ancestors of ${targetNode2} are:`);
finder2.findAncestors(root, targetNode2);
console.log(finder2.results);
let lowestCommon = findLowestCommonNumber(finder.results, finder2.results);
console.log('lowestCommon: ', lowestCommon);