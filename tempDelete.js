class HashTable{
    constructor(size = 50){

        this.table = new Array(size)
        this.size  = size
    }

    hash(key){

        let hash = 0

        for(let str of key){
            hash += str.charCodeAt(0)
        }

        return hash%this.size;
    }

    set(key,value){

        const index = this.hash(key)

        if (!this.table[index]) {
            this.table[index] = []
        }

        for(let i=0;i<this.table[index];i++){

            if (this.table[index][i][0] === key) {

                this.table[index][i][1] = value;
                return;
            }
        }

        this.table[index].push([key,value])
    }

    get(key){

        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            for(let [k,v] of bucket){
                if (k === key) {
                    return v;
                }
            }
        }

        return 'not found'
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

const list = new HashTable()

list.set('name','shamnad')
list.set('batch','bck183')

console.log(list.get('batch'));