
//* USING JS REVERSE METHOD

function reverse(str){
    return str.split('').reverse().join('')
}
let str = 'helo' 
console.log(reverse(str));

//************************************************************************************* */

//? USING TO POINTER METHOD

//* Time Complexity: O(n), where n is the length of the string. Each character is processed once.
//* Space Complexity: O(n), for the array that holds the characters of the string

function reverseNormal(str){

    if(str.length === 0 ) return 'empty string' ;

    let arr = str.split('') //converting string to array
    let left = 0
    let right = arr.length -1;

    while(left < right ){
        let temp   = arr[left]
        arr[left]  = arr[right]
        arr[right] = temp;
        left ++ ;
        right -- ;
    }

    return arr.join('') //converting array to string
}

const string = 'welcome'
//CALLING THE FUNCTION AND PRINT THE OUTPUT
console.log(reverseNormal(string));


//******************************************************************************************** */

//? USING RECURSION 

//* Time Complexity: O(n), where n is the length of the string. Each character is processed once.
//* Space Complexity: O(n),due to the recursion stack.

function reverseRecursively(str){

    if (str.length <=1) return str

    return reverseRecursively(str.slice(1)) + str[0]
        
    
}


const string2 = 'Razal kv'
console.log(reverseRecursively(string2))






