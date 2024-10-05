//? MOVE ALL ZERO ELEMENT TO LEFT SIDE OF THE ARRAY

//* Time Complexity: O(n) where n is the number of elements in the array. This is because we iterate through the array twice (once to move non-zero elements and once to fill zeroes).
//* Space Complexity:O(1)  since we are modifying the array in place and not using any extra space proportional to the input size.


 function moveZero(array){

    //INITALIZING INDEX FOR NON ZERO ELEMENTS
    let nonZero = 0

    //ITERATIN TO ARRAY TO ADD NON ZERO ELEMENTS IN RIGHT SIDE 
    for(let i=0 ; i<array.length ; i++){

        if (array[i] !== 0) {

            array[nonZero] = array[i]
            nonZero ++; //INCREASING NON ZERO INDEX FOR ADDING NEXT ELEMENT
        }
    }

    //filling zero's to balance space
    for (let i = nonZero; i < array.length; i++) {
        
        array[i] = 0;
        
    }

    return array
 }


let array = [10,0,20,0,30,0,40,0]

//CALLING FUNCTION AND PRINTING ITS OUTPUT
console.log(moveZero(array))