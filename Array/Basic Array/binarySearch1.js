//? Given an array of integers nums sorted in ascending order, 
//? find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].


function searchRange(array,target){

    let left = 0
    let right = array.length -1
    let result =[]

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if (array[mid] === target) {
            result.push(mid)
            
            left = mid + 1
            right = mid + 1
        }else if(array[mid] < target){
            left = mid +1
        }else{
            right = mid-1
        }

    }

    return result.length > 0 ? result : [-1,-1]
}


const nums=[5,7,7,8,8,10];
const target=8;
console.log(searchRange(nums,target)); // Output: [3, 4]
