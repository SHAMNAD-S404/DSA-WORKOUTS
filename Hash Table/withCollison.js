
class HashTable{
    constructor(size = 50){

        this.table = new Array(size)
        this.size  = size
    }

    hash(key){

        let hash =0;
        for (const str of key) {
            hash += str.charCodeAt(0)
        }

        return hash%this.size;
    }

    set(key,value){

        const index = this.hash(key)

        if (!this.table[index]) {
            this.table[index] =[]
        }

        for(let i=0;i<this.table[index].length;i++){

            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value
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
                if (bucket[i][0]===key) {
                    bucket.splice(i,1)
                    return true
                }
            }
        }

        return false
    }

    display(){
        return this.table.forEach(item => console.log(item))
    }

}

const list = new HashTable()

list.set('name','shammi')

console.log(list.get('name'));
list.set('name','adil')
console.log(list.get('name'));
list.set('phone',8968776)
list.display()
console.log(list.remove('phone'));