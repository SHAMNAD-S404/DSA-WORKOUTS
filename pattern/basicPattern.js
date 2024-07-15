//*FUNCTION TO PRINT THIS OUTPUT
/*
1
22
333
4444
55555
 */

function printPattern(num){
    for(let i=1; i<=num; i++){
        let line = ''

        for(let j = 1; j<= i;j++){
            line += i
        }
        console.log(line);
    }
}

 printPattern(5)

//* ***************************************************************************************************************************

//? NEXT PATTERN QUESTION
// *
// **
// ***
// ****
// *****

function print(size){
    for(let i= 1;i<=size;i++){
        let line =''

        for(let j=1;j<= i;j++){
            line +=' * '
        }

        console.log(line);
    }
}

print(10)


//* ***************************************************************************************************************************

// *****
//  ****
//   ***
//    **
//     *

function patternDa(limit){
    for(let i = 0; i<limit ;i++){
        let space = ' '.repeat(i)
        let star = '*'.repeat(limit-i)

        console.log(space,star)
    }
}

patternDa(7)


    //?WITHOUT FUNCTION METHODS USING MANUAL LOOPS

    for(let i = 0 ; i<5 ; i++){
        let n='';

        //for adding spaces
        for(let j = 0 ; j<i ;j++){
            n +=' '
        }

        //for adding start
        for (let k = 0; k <5-i; k++) {          
            n+='*'
        }

        console.log(n);
       
    }
 console.log('-------------------------------------');

//* ***************************************************************************************************************************

/*    PATTERN
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/
 
function printz(num){
    for(let i=0;i<num ;i++){
        let n = ''

        //to print space
        for(let j=0; j< (num-i)-1 ;j++){
            n +=' '
        }

        //to print star
        for(let k=0;k<(i*2)+1 ;k++){
             n +='*'
        }

        console.log(n)
    }

    
    for( let i = num-1;i >= 1;i-- ){
        let n =''
        //for add space
        for(let j=0;j < num-i;j++){
            n+=' '
        }
        //for adding star
        for(let k=0;k <2*i -1;k++){
            n+='*'
        }
        console.log(n);
 }
}

printz(5)

  