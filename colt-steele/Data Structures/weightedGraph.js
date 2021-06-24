class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    // dijkstra(start, end) {
    //     let distanceArr = this.adjacencyList.keys();
    //     let distances = {};
    //     distanceArr.forEach(obj => obj === start ? distances[obj] = 0 : distances[obj] = Infinity)
    //     let queue = new SimplePriorityQueue();
    //     distanceArr.forEach(obj => {
    //        if (obj !== start) queue.enqueue(obj.node, obj.weight)
    //     })
    //     let previous = {};
    //     distanceArr.forEach(obj => previous[obj] = null)

    //     while(queue.length) {
    //         let node = queue.dequeue();
    //         if (node === end) break;
    //         this.adjacencyList[node].forEach(obj => {

    //         })
    //     }
    // }
    
}

class SimplePriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}