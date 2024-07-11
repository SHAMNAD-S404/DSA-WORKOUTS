//? Find Second largest number in an array

    // USING SINGLE PASS METHOD
//* Time Complexity: O(n), where nnn is the number of elements in the array. This is because we only pass through the array once.
//* Space Complexity: O(1), as we only use a constant amount of extra space.

 function find2ndLargest(array) {

        let first = -Infinity
        let second = -Infinity

        for (let i=0;i<array.length;i++){

            if (array[i] > first) {
                second = first
                first  = array[i]
            }else if (array[i] > second && array[i] !== first) {
                second = array[i]
            }
        }

        return second === -Infinity ? null : second
    }

const array = [10,20,30,40,50]
console.log(find2ndLargest(array))

//************************************************************************************** */

        //?USING RECURSION METHOD

//* Time Complexity: O(n), where n is the number of elements in the array. This is because we visit each element exactly once.
//* Space Complexity: O(n) due to the recursion stack in the worst case.

function find2ndLargestRecursive(arr){

        function helper(index,first,second) {

            if (index === arr.length ) {
                return second === -Infinity ? null: second
            }

            if (arr[index] > first) {
                second = first;
                first  = arr[index]
            } else if (arr[index] > second && arr[index] !== first) {
                second = arr[index]
            }

            return helper(index+1,first,second)
        }

    return helper(0,-Infinity,-Infinity)
}


const arr = [20,30,40,50,80]
console.log(find2ndLargestRecursive(arr));


