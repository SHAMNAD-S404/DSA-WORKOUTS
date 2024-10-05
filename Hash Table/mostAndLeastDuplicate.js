
function duplicate(arr){

    let hash = {}
    let duplicate = []

    for(let i=0;i<arr.length;i++){

        if(hash[arr[i]] !== undefined){

            hash[arr[i]]++
        }else{
            hash[arr[i]] = 1
        }
            
    }

    let maxCount = 0
    let maxValue;
    let minCount = Infinity
    let minValue;

    for(let key in hash){

        if (hash[key] > 1) {
            
            duplicate.push(parseInt(key))

            if (hash[key] > maxCount) {
                
                maxCount = hash[key]
                maxValue = parseInt(key)
            }

            if (hash[key] < minCount) {
                
                minCount = hash[key]
                minValue = parseInt(key)
            }
        }
    }

    console.log(`Most occurence is ${maxValue} at ${maxCount} times`);
    console.log(`Least occurence is ${minValue} at ${minCount} times`);

    return duplicate
}

let arr=[1,2,2,3,3,4,3,4,5,2,3,6,7,8,9,1,99,99];

console.log(duplicate(arr));