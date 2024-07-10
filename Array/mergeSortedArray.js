//?  function to merge two sorted arrays into one sorted array

//* Time Complexity: O(n+m), where nnn is the length of arr1 and mmm is the length of arr2.
//* This is because we iterate through all elements of both arrays once.

//*Space Complexity: O(n+m) , since we are creating a new array mergedArray to store the merged result.


 function mergeSort(array1,array2){

    //intializing i and j for iterate over two arrays
    let i = 0;
    let j = 0;
    let mergedArray =[];

    //SORTING BOTH ARRAYS AND THEN PUSHING TO NEW MERGED ARRAY
    while (i <= array1.length && j <array2.length) {
        
       if (array1[i] < array2[j]) {

            mergedArray.push(array1[i])
            i++; //increasing i index to point out nxt element in array1
       }else{
            mergedArray.push(array2[j])
            j++;
       }
    }

    /* IN SOME CASES BOTH ARRAYS LENGTH IS NOT EQUAL. IN THAT SITUATION WE NEED TO ADD 
       BALNCE ELEMENTS TO MERGED ARRAY
    */

     // Add remaining elements from arr1, if any
     while (i < array1.length) {
        mergedArray.push(array1[i])
        i++;
     }

     // Add remaining elements from arr1, if any
     while(j < array2.length){
        mergedArray.push(array2[j])
        j++;
     }

     return mergedArray;
 }


let array1 = [1,3,5,7,9]
let array2 = [2,4,6,8,10,11,12]

//CALLING FUNCTION AND PRINT RESULT
console.log( mergeSort(array1,array2) )