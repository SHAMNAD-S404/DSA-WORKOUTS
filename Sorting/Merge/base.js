//?  WRITE A FUNCTION TO SORT THE ARRAY USING MERGE SORT


    function mergeSort(array){


            if(array.length <= 1) return array; //base case

            //Divide: Split the array into two halves
            const mid=Math.floor(array.length/2)   // Find the middle index
            const left=array.slice(0,mid)         // Left half of the array
            const right=array.slice(mid)         // Right half of the array

            //Conquer: Recursively sort each half
            const sortedLeft  = mergeSort(left)
            const sortedRight = mergeSort(right)

            //Combine: Merge the sorted halves back together
            return merge(sortedLeft,sortedRight);


    }

    function merge(left,right){

            let result     = []
            let leftIndex  = 0
            let rightIndex = 0

            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    
                    result.push(left[leftIndex])
                    leftIndex++

                } else {

                    result.push(right[rightIndex])
                    rightIndex++;
                }
            }

        // If there are remaining elements in the left array, add them
        while(leftIndex<left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }

        // If there are remaining elements in the right array, add them
        while(rightIndex<right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }
            

            return result;

    }


const array = [5,7,8,9,4,6,5,10,7]

console.log(mergeSort(array));