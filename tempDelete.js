function findDuplicate(arr) {
    let hashTable={}; // Create an empty object to store the counts of each value
    let duplicate=[]; // Array to store the duplicate values

    // Populate the hash table with counts of each value
    for(let i=0;i<arr.length;i++) {
        if(hashTable[arr[i]]!==undefined) {
            hashTable[arr[i]]++;
        } else {
            hashTable[arr[i]]=1;
        }
    }

    let maxCount=0; // Variable to store the maximum count of duplicates
    let minCount=Infinity; // Variable to store the minimum count of duplicates
    let maxValue; // Variable to store the value with the most duplicates
    let minValue; // Variable to store the value with the least duplicates (but more than 1)

    // Iterate through the hash table to find duplicates and their counts
    for(let key in hashTable) {
        if(hashTable[key]>1) {
            duplicate.push(parseInt(key)); // Add duplicates to the array

            console.log(key);
            // Update the value with the most duplicates
            if(hashTable[key]>maxCount) {
                maxCount=hashTable[key];
                maxValue=parseInt(key);
            }

            // Update the value with the least duplicates (but more than 1)
            if(hashTable[key]<minCount) {
                minCount=hashTable[key];
                minValue=parseInt(key);
            }
        }
    }

    console.log(`Value with most duplicates: ${maxValue}, Count: ${maxCount}`);
    console.log(`Value with least duplicates: ${minValue}, Count: ${minCount}`);

    return duplicate;
}

let arr=[1,2,2,3,3,4,3,4,5,2,3,6,7,8,9,1];

console.log(findDuplicate(arr));
