//? Write a function to move all zeroes in an array to the end while maintaining the relative order of the other elements.

function moveZeros(array){
    let nonZero = 0;

    for (let i = 0; i < array.length; i++) {
       if (array[i] !==0 ) {
            array[nonZero] = array[i]
            nonZero++;
       }       
    }

    //to add zero to balance spaces
    for (let j = nonZero; j < array.length; j++) {
        
        array[nonZero] = 0;
        nonZero++
    }

    return array

}

const arr=[0,1,0,3,12];
console.log(moveZeros(arr)); // Output: [1, 3, 12, 0, 0]