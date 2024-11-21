//* USING " REPLACE METHOD " 

let str = 'helohelo'
let newStr = str.replace(/e/g , '9')
console.log(newStr);

//************************************************************************************* */

//? USING ITERATE METHOD WITH LESS COMPLIXITY

//* Time Complexity: O(n) where n is the length of the string. The loop iterates through each character of the string once.
//* Space Complexity: O(n),where n is the length of the string.The result string grows linearly with the size of the input string.


function replaceString(word,oldChar,newChar) {
    
    let result = '';
    for (let i = 0; i < word.length; i++ ) {
       
       if (word[i] === oldChar) {
        result += newChar
       }else{
        result += word[i]
       } 
    }

    return result
}


const word = 'helohelo'
const replace = 'e';
const newValue = 88;
console.log(replaceString(word,replace,newValue));

//************************************************************************************ */

//?USING RECURSIVE METHOD

//* Time Complexity: O(n), where n is the length of the string. Each character is processed once.
//* Space Complexity: O(n),due to the recursion stack and the new string construction.



function replaceRecursive(word,oldChar,newChar){

    if (word.length ===0) return ''
        
    let newWord = ( word[0] === oldChar) ? newChar : word[0]

    return newWord + replaceRecursive(word.slice(1),oldChar,newChar)
    
}

const string  ='helohelo'
const old     ='e';
const newChar = 999;
console.log(replaceRecursive(string,old,newChar));