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

        if(!this.adjList.has(v1)) this.addVertex(v1)
        if(!this.adjList.has(v2)) this.addVertex(v2)

        this.adjList.get(v1).push(v2)
        this.adjList.get(v2).push(v1)
    }

    bfs(start){

        let visited = new Set
        let queue = [start]

        while(queue.length > 0) {

            let vertex = queue.shift()

            if (!visited.has(vertex)) {
                
                visited.add(vertex)
                console.log(vertex);
                

                for(let next of this.adjList.get(vertex)){

                    if (!visited.has(next)) {
                        queue.push(next)
                    }
                }
            }


        }
    }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')

g.addEdges('A','B')
g.addEdges('A','C')
g.addEdges('B','D')


g.bfs('A')