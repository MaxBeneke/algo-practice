class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[value] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(el => el !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(el => el !== v1);
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start)

        return result;
    }
    // DFSIterative(start) {
    //     let S = [];
    //     const result = [];
    //     const visited = {};
    //     S.push(start);
    //     result.push(start)
    //     while (S.length > 0) {
    //         let vertex = S.pop();
    //         if (!visited[vertex]) {
    //             visited[vertex] = true;
    //             result.push(vertex);
    //             S.push(...this.adjacencyList[vertex])
    //         }
    //     }
    // }
    DFIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        
        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
    }
}
