
 class Graph {
    constructor() {
        
        this.adjList = new Map()
    }

    addVertex(vertex){

        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex,[])
        }
    }

    addEdges(v1,v2){

        if (!this.adjList.has(v1)) {
            this.addVertex(v1)
        }
        if (!this.adjList.has(v2)) {
            this.addVertex(v2)
        }

        this.adjList.get(v1).push(v2)
        this.adjList.get(v2).push(v1)
    }

    dfsRecursive(vertex,visited = new Set()){

        if(!vertex) return null

        visited.add(vertex)
        console.log(vertex);

        for(let next of this.adjList.get(vertex)){

            if (!visited.has(next)) {
                this.dfsRecursive(next,visited)
            }
        }
        

    }


    dfs(startVertex){
        this.dfsRecursive(startVertex)
    }

    display(){
        for(let [v,e] of this.adjList){
            console.log(v,e);
            
        }
    }
 }

 const g = new Graph

 g.addVertex('A')
 g.addVertex('B')
 g.addVertex('C')
 g.addVertex('D')
 g.addVertex('E')


 g.addEdges('A','B')
 g.addEdges('A','C')
 g.addEdges('B','D')
 g.addEdges('B','E');
 g.addEdges('C','D')

 console.log('dfs travel');

 g.dfs('A')
 