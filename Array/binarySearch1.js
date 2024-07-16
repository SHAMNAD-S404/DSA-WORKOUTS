//? Given an array of integers nums sorted in ascending order, 
//? find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

function searchRange(array,target){

    function helper(isFirst){
        let left = 0
        let right = array.length -1
        let result = -1

        while (left <= right) {
            let mid = Math.floor((left+right)/2)

            if (array[mid] === target) {
                result = mid

                if (isFirst) {  //if its first then checking for left side there is any previous value that match targe to get first occurence
                    right = mid - 1
                }else{
                    left = mid + 1 //it its last occurence then cheking the right side for there have any other value that match the target to get last occurence
                }

            }else if (array[mid] < target) {
                left = mid + 1
            }else{
                right = mid - 1
            }
        }

        return result
    }

    const first = helper(true)

    if (first === -1) {
        return [-1,-1]
    }

    const last = helper(false)

    return [first,last]
}


const nums=[5,7,7,8,8,10,8,10];
const target=8;
console.log(searchRange(nums,target)); // Output: [3, 4]
