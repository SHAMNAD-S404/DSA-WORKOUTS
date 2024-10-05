//? FINDING MIN AND MAX VALUE OF AN ARRAY

//* This approach ensures that you find the maximum and minimum elements in a single pass through the array,
//* making it efficient with a time complexity of O(n) and a space complexity of O(1)

function minMax(array){

    if (array.length===0) {
        return 'empty array'
    }


    //INITIALIZING FIRST  ELEMENT AS ITS VALUE
    let min = array[0]
    let max = array[0]

    for (let i = 0; i <= array.length; i++) {
        
        //COMPARTING AND ASSIGNING VALUES
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min ) {
            min = array[i]
        }
       
    }
    return {min,max}
}



const array  = [10,20,33,50,44,66,88,5]
const result = minMax(array)
console.log(`min element ${result.min} , max element :${result.max} `);