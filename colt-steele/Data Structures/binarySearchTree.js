class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let compare = this.root
            while (true) {
                if (val === current.val) return undefined;
                if (compare.val < newNode.val) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
        return this;
    }
    contains(val) {
        if (!this.root) return false;
        var current = this.root;
        var found = false;
        while(current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS() {
        let queue = [];
        let data = [];
        let node = this.root;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
        return data;
    }
    DFSPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}