//* This implementation of linear search is straightforward and works for both sorted and unsorted arrays. It has a time complexity of O(n)
//* because it may need to check every element in the array in the worst case. The space complexity is O(1).because it only uses a constant amount of extra space.

function linearSearch(array,target){
    for(let i =0 ; i <array.length ; i++){
        if (array[i] === target) {
            return i;
        }
    }

    return 'not found'
}


const array  = [10,20,30,50,40,80,33]
const target = 33;
console.log(linearSearch(array,target)); 