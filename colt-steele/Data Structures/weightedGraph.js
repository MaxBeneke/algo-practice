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
    Dijkstra(start, finish) {
        const nodes = new SimplePriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // to return at end
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
               for(let neighbor in this.adjacencyList[smallest]) {
                   //find neighboring node
                   let nextNode = this.adjacencyList[smallest][neighbor];
                   //calculate new distance to neighboring node
                   let candidate = distances[smallest] + nextNode.weight;
                   let nextNeighbor = nextNode.node
                   if (candidate < distances[nextNeighbor]) {
                       //updating new smallest distance to neighbor
                       distances[nextNeighbor] = candidate;
                       //updating previous - How we got to neighbor
                       previous[nextNeighbor] = smallest;
                       //enqueue PQ with new priority;
                       nodes.enqueue(nextNeighbor, candidate);
                   }
               }
            }
        }
        return path.concat(smallest).reverse();
    }
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