
class HashTable {

    constructor(size = 50){
        this.table = new Array(size) //Initialize an array to store the key-value pairs
        this.size  = size; // Define the size of the hash table
    }

    // Simple hash function that converts a key into an index
    hash(key){

        let hash = 0;
        for (const str of key) {
            hash += str.charCodeAt(0)
        }

        return key % this.size;
    }

    // Insert a key-value pair into the hash table
    set(key,value){

        const index = this.hash(key) // Compute the index using the hash function

        // Initialize an empty array at the index if it doesn't exist
        if ( !this.table[index]) {
            this.table[index] = []
        }

        // Add the key-value pair to the array at the index
        this.table[index].push([key,value])

    }

    // Retrieve a value by its key from the hash table

    get(key) {

        const index=this.hash(key)  // Compute the index using the hash function
        const bucket = this.table[index]  // Get the bucket (array) at the computed index

        if (bucket) {
            
            for (const [k,v] of bucket) {
                if (k === key) {
                    return v; // Return the value if the key matches
                }
            }
        }

        return 'key value found'


    }

    // Remove a key-value pair from the hash table
    remove(key){

        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            
            for (let i = 0; i < bucket.length; i++) {
                
                if (bucket[i][0] === key ) {
                    bucket.splice(i,1)
                    return true
                }
                
            }
        }

        return false;
    }


}

const hashTable = new HashTable()
hashTable.set('name','jhony')
hashTable.set('age',55)

console.log(hashTable.get("age"));
console.log(hashTable.get('name'));

hashTable.remove('name')

console.log(hashTable.get('name'));