

function findDuplicate(arr) {

    let hashTable={}
    let duplicate=[]

    for(let i=0;i<arr.length;i++) {

        if(hashTable[arr[i]]!==undefined) {
            hashTable[arr[i]]++;
        } else {

            hashTable[arr[i]]=1;

        }

    }

    for(let key in hashTable) {
        if(hashTable[key]>1) {
            duplicate.push(parseInt(key))
        }
    }

    return duplicate;
}

let arr=[1,2,3,4,5,2,3,6,7,8,9,1];

console.log(findDuplicate(arr));