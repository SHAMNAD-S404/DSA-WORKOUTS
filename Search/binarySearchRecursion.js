
//? BINARY SEARCH WITH RECURSION
//* Sort an Array in assending order

 function binaryRecursion(array,target,left,right){

    if (left > right) {
      return 'not found'
    }

    let mid = Math.floor((left+right)/2)

    if (array[mid] === target) {

        return `The value ${target} found at position ${mid}`

    }else if( array[mid] < target ){  //If Mid value is lesserthan our target then our target is on the right side of array . 

      return binaryRecursion(array,target,mid+1,right)

    }else{    // If Mid value is greaterthan our target then value must be in left side of array

      return binaryRecursion(array,target,left,mid-1)
    }

 }



  const array = [1,2,3,4,5,6,7]
  const target = 5
  
  //CALLING FUNCTION 
  console.log(binaryRecursion(array,target,0,array.length-1))