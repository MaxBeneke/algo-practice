class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let oldTail = this.tail
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    shift() {
        if(!this.head) return undefined;
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let targetNode;
        if (index >= this.length / 2) {
            let i = this.length - 1;
            targetNode = this.tail
            while (i > index) {
                targetNode = targetNode.prev;
                i--;
            }
        } else if (index < this.length / 2) {
            let i = 0;
            targetNode = this.head
            while (i < index) {
                targetNode = targetNode.next;
                i++;
            }
        }
        return targetNode;
    }
    set(index, val) {
        var targetNode = this.get(index)
        if (targetNode) {
            targetNode.val = val;
            return true;
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)

        var newNode = new Node(val)
        var prevNode = this.get(index-1)
        var afterNode = prevNode.next

        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var targetNode = this.get(index)
        targetNode.next.prev = targetNode.prev;
        targetNode.prev.next = targetNode.next;
        targetNode.next = null;
        targetNode.prev = null;

        this.length--;
        return targetNode;
    }
    reverse(){
        if (!this.head) return undefined;
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;
        return this;
    }
}