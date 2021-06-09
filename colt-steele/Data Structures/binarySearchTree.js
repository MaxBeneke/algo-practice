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
}