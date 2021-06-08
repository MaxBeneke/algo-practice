class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        var toDelete = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else{
            this.first = toDelete.next;
            toDelete.next = null;
        }
        this.size--;
        return toDelete;
    }
}