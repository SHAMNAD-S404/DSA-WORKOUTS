//? Write a function to reverse the elements of an array.


function reverse(array){ 

    let left = 0
    let right= array.length -1

    while(left < right){
        let temp     = array[left]
        array[left]  = array[right]
        array[right] = temp
        left ++
        right --;
    }

    return array
}


const arr=[1,2,3,4,5];
console.log(reverse(arr)); // Output: [5, 4, 3, 2, 1]