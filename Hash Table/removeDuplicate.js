//? REMOVE DUPLICATE VALUES FORM ARRAY USING HASH TABLE 

function removeDuplicate(arr){

    let hash = {}
    let result = []

    for(let i=0 ; i< arr.length;i++){

        if (!hash[arr[i]]) {
            hash[arr[i]] = true
            result.push(arr[i])
        }
    }

    return result;
}

const array = [1,1,2,2,3,3,4,4,5,6,7,8]

console.log(removeDuplicate(array));