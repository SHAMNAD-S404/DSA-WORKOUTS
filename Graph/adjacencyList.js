
class Graph{
    constructor(){

        this.adjList = new Map()
    }

    // Method to add a vertex to the graph
    addVertex(vertex){

        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex,[]) // Initialize the vertex with an empty list
        }
    }

    //Method to add an edge between two vertices
    addEdge(vertex1,vertex2){

        if (this.adjList.has(vertex1 && this.adjList.has(vertex2))) {
            
            //Add the edge from vertex1 to vertex2
            this.adjList.get(vertex1).push(vertex2)
            //Add the edge from vertex2 to vertex1
            this.adjList.get(vertex2).push(vertex1)

        } else {
            
            console.log('one or both vertex not found');
            
        }

    }

    display(){
        for(let [vertex,edges] of this.adjList){

            console.log(`vertex = ${vertex} and edges = ${edges}`);
            
        }
    }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')

// Add edges between the vertices

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','D');
g.addEdge('D','E');

g.display()