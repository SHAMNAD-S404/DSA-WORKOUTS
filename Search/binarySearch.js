

 //?   Time Complexity:  O(log n)
 //*   where n is the number of elements in the array. This is because the algorithm divides the search interval in half with each iteration.
 //*   Here's a step-by-step breakdown:
 //* 1 > In each iteration, the algorithm eliminates half of the remaining elements from consideration.
 //* 2 > The maximum number of iterations needed is the number of times you can divide n by 2 before you get to 1, which is log2 n.
 //* 3 > Therefore, the time complexity is O(log n)



//? Space Complexity : O(1)

//* The space complexity of binary search is O(1) which means it requires a constant amount of space. This is because the algorithm only uses a few additional
//* variables (left ,right,mid) regardless of the size of the input array.

 /***************************************         ******************************************* */

 function binarySearch(array,target){
    let left  = 0 ;
    let right = array.length -1 ;

    while (left < right ) {
        let mid = Math.floor((left + right )/2 )

        if (array[mid] === target) {
            return mid

        }else if(array[mid] < target ) {
            left  = mid + 1
            
        }else{
            right = mid - 1 ;
        }
    }

    return 'not found'
 }


 const array  = [1,2,3,4,5,6,7,8]
 const target = 7 ;  
 const result = binarySearch(array,target)
 console.log(result);
