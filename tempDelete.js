
class Graph{
    constructor(){
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

        if(!this.adjList.has(v2)) this.addVertex(v2)


        this.adjList.get(v1).push(v2)
        this.adjList.get(v2).push(v2)
    }

    
    dfsRecursive(start,visited = new Set()){

        if(!start) return null

        visited.add(start)

        console.log(start);

        for(let next of this.adjList.get(vertex)){

            if (!visited.has(next)) {
                this.dfsRecursive(next,visited)
            }
        }
        
    }

    dfs(start){
        this.dfsRecursive(start)
    }
}