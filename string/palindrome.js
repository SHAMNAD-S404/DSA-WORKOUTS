//? HOW TO CHECK A STRING IS PALINDROM OR NOT 
//* USTING TWO POINTER METHOD

//* BOTH TIME AND SPACE COMPLEXITY IS O(n)

function palimdromCheck(word){

    if(word.length === 0 ) return 'empty string'

    word = word.toLowerCase()
    let start = 0;
    let end = word.length -1;

    while(start < end){
        if (word[start] !== word[end]) {
            return false;
        }
        start ++;
        end --;
    }

    return true;

}

const word = 'malayalam'
console.log( palimdromCheck(word))

//********************************************************************************************* */

//? USING RECURSIVE METHOD 

function palindromeRecursive(str,s,e){
    str = str.toLowerCase()

    if (s >= e) {
        return true
    }

    if (str[s] !== str[e]) {
        return false
    }
       return palindromeRecursive(str,s+1,e-1)


}

const helo = 'malayalam'
const start = 0;
const end = helo.length -1
console.log(palindromeRecursive(helo,start,end));