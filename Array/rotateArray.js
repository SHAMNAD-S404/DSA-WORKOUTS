//?  rotate an array by k positions.

//* This method ensures that the array is rotated by k positions in-place with O(n)
//* O(1) space complexity.



function rotateArray(array,k){

    let length = array.length

    //TO CHECK K IS GREATER THAN LENGTH OR NOT USING MODE
    k = k % length;
    let start = 0
    let end   = k-1
    
    while (start < end) {

        //SWAPPIN ELEMENTS
        let temp     = array[start]
        array[start] = array[end]
        array[end]   = temp

        //INCREASE AND DECREASE START AND END TO MOVE ARRAY ELEMENTS
        start++;
        end--;
    }

    return array
}

let array = [10,20,30,40,50,60,70]
const position = 5

//CALLING ARRAY AND PRINTING IS OUTPUT
console.log(rotateArray(array,position))