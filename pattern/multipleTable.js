//?    WRITE A FUNCTION TO SHOW MULTIPLICATION TABLE OF  POWER OF A NUMBER

let n=1
for(let i=1;i <=10 ; i++){

    
    console.log(`${i} X ${n*2} = ${i*(n*2)}`)
    n = n*2

}

//1 X 2  =2
//2 X 4  =8
//3 X 8  =24
//4 X 16 =64
//5 X 32 =160



//*****************************************************************? USING JS METHODS *********************************************



function multiplicationTable(num){
    for(let i =1;i<=10;i++){
        
        let power = Math.pow(num,i)

        let result = i*power

        console.log(`${i} X ${power} = ${result}`);
    }
}

multiplicationTable(3)


//*****************************************************************?  *********************************************
