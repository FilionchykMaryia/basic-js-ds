const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    this.rootNode === null ? this.rootNode = newNode : this.insertNode(this.rootNode, newNode);
  }

  insertNode(node, newNode){
    if (newNode.data < node.data) {
      node.left === null ? node.left = newNode : this.insertNode(node.left, newNode);
    } else {
      node.right === null ? node.right = newNode : this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    return (this.find(data) !== null) ? true : false;   
  }

  find(data) {
    return this.search(data, this.rootNode);
     
  }
  search(data, node) {
    if (node === null){
      return null;
    } else if (data < node.data) {
      return this.search(data, node.left);
    } else if (data > node.data) {
      return this.search(data, node.right);
    } else {
      return node;
    } 
  }

  findMinNode(node){
    if(node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.findMinNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
   }
}