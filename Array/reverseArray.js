
//* This approach ensures that the array is reversed in place without using any additional arrays or the built-in
//* 'reverse ' method . The time complexity of this algorithm is O(n) and the space complexity is O(1)

function reverseArray(array){

    let left = 0
    let right = array.length -1

    while (left < right) {
        
        //SWAPPING ARRAY ELEMENTS WITH TEMP VARIABLE
        let temp     = array[left]
        array[left]  = array[right]
        array[right] = temp

        //INCREMENT AND DECREMENT LEFT AND RIGHT VALUES TO MOVE TO NEXT ELEMENT
        left ++
        right --

    }

    return array

}

let arr = [10,20,55,44,33,11];
console.log(reverseArray(arr))