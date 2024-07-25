
class HashTable {
    constructor(size = 50){
        this.table = new Array(size)
        this.size  = size;
    }

    hash(key){

        let hash = 0;
        for (const str of key) {
            hash += str.charCodeAt(0)
        }

        return hash % this.size;
    }

    set(key,value){

        const index = this.hash(key)
        
        if (!this.table[index]) {
            this.table[index] = []
        }

        this.table[index].push([key,value])
    }

    get(key){

        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            for (const [k,v] of bucket) {
                
                if (k=== key) {
                    return v;

                }
            }
        }

        return 'value not found'
    }

    remove(key){

        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            for(let i=0;i<bucket.length;i++){
                if (bucket[i][0] === key) {
                    bucket.splice(i,1)
                    return true
                }
            }
            
        }

        return false
    }
}

const hash = new HashTable()

hash.set('name','aswanth')
hash.set('batch','bck183')

console.log(hash.get('name'))

hash.remove('name')

console.log(hash.get('name'))