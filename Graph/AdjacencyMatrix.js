
 class Graph{
    constructor(size){

    //Initialize a 2D array (matrix) with zeros to represent no edges between vertices
        this.adjMatrix = Array.from({length:size},()=> Array(size).fill(0))
        this.size = size

    }
    //Method to add an edge between two vertices
    addEdge(i,j){

        //Set the value at (src, dest) and (dest, src) to 1 to indicate an edge
        this.adjMatrix[i][j] =1
        this.adjMatrix[j][i] =1
    }

    display(){
        console.log(this.adjMatrix);
        
    }
 }

 const g = new Graph(5)

g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,2);
g.addEdge(1,3);

g.display()