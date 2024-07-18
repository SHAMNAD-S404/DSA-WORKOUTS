
//? Write a recursive function that reverses a given string.

//* IN RECURSIVE METHOD

function reverseString(string){

    if (string === '') {
        return string
    }

    return string[string.length-1] + reverseString(string.slice(0,-1)) 


}


console.log(reverseString("helo"))





