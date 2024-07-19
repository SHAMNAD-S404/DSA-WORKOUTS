//* TIME Complexity
/**   
   1> Merge sort is a divide-and-conquer algorithm that splits the array into two halves, recursively sorts each half, and
    then merges the sorted halves.
   2> The array is divided in half at each step, leading to a logarithmic number of divisions.
      Each division results in log⁡n\log nlogn levels of recursion.
   3> At each level of recursion, the merging process involves iterating over the entire array, which is an O(n) operation.
      Therefore, the time complexity of merge sort is O(nlog⁡n) in the worst, best, and average cases.

 */
//* SPACE Complexity
/*
    Merge sort requires additional space proportional to the size of the input array to hold the temporary arrays created
    during the merging process.
    This is because merge sort is not an in-place sorting algorithm and requires O(n) extra space for merging the arrays.
    Therefore, the space complexity is O(n).
*/
//* The time complexity is O(nlog⁡n) due to the division and merging process,and the space complexity is O(n) due to the extra space needed for temporary arrays during merging.



 function mergeArray(array){

        if(array.length <= 1 ){
            return array;
        }

        //SPLIT ARRAY AND CALL RECURSION
        let mid   = Math.floor(array.length/2)
        let left  = mergeArray(array.slice(0,mid));
        let right = mergeArray(array.slice(mid));

        //CALLING MERGE AND CONVERT FUNCTION 
        return merge(left,right)
 }

 function merge(left,right){

    //INITILIZING A TEMPORARY ARRAY 
    let temp = []
    let i    = 0;
    let j    = 0;

    // Compare elements from left and right subarrays and merge them into result
    while( i< left.length && j<right.length ) {

        if(left[i] < right[j] ){
            temp.push(left[i]);
            i++ ;
        }else{
            temp.push(right[j])
            j++ ;
        }
    }

    //MERGING ARRAY 
    return temp.concat(left.slice(i)).concat(right.slice(j))
 }


let array=[1,2,44,55,42,51,3,7,8,99];
console.log(mergeArray(array));