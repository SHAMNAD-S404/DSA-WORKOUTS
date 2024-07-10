 
//* Time Complexity

//* the time complexity in the worst case is O(n2).
//* The best-case time complexity is O(n).
//* Average case O(n2)

//*Space Complexity

//* Bubble sort is an in-place sorting algorithm, meaning it doesn't require any additional storage beyond the input array.
//* The space complexity is O(1).


 
 function bubbleSort(array){

    let sort;
    do {
        sort = false
        for(let i= 0 ; i <array.length -1 ; i++ ){

            if (array[i]> array[i+1]) {
                [array[i],array[i+1]] = [array[i+1], array[i]]
                sort = true
            }
        }
        
    } while (sort);

    return array
 }
 
 let array = [1,22,2,3,4,55,5,6]
 console.log(bubbleSort(array))