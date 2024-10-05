//? SORT AN ARRAY USING QUICK SORT

//* TIME => BEST  CASE O(n logn)
//* TIME => AVERAGE  CASE O(n logn)
//* TIME => WORST  CASE O(n²) => MAINLY OCCUR WHEN APPLYING ALREADY SORTED ARRAY .
//* FOR EXAMPLE ALL TIME ITS TAKE PIVOT VALUE AS LARGER ELEMENT OR SMALLER ELEMENT ITS LEAD TO ONE SUB-ARRAY INSTEAD TWO ITS MOVE ON DEPTH

//* SPACE => BEST CASE O(n logn)
//* SPACE => AVERAGE CASE O(n logn)
//* SPACE => WORST CASE O(n²)


function quickSort(array){
    
    //base case
    if(array.length <= 1 ) return array;

    let pivot  = array[array.length-1]

    let left  = []
    let right = []

    for (let i = 0; i < array.length-1; i++) {
        
        if (array[i] < pivot) {

            left.push(array[i])
        }else{

            right.push(array[i])
        }
        
    }

    // Recursively sort the left and right sub-arrays and concatenate them with the pivot

    return [...quickSort(left),pivot,...quickSort(right)]


}


const array = [5,7,8,9,6,8,12,2,3]



console.log(quickSort(array));