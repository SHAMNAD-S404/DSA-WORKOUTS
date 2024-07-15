 //? Write a function to find the intersection of two arrays.

 function findIntersection(arr1,arr2){
    let newArray = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
           if (arr1[i] === arr2[j]) {
                newArray.push(arr1[i])
           }
            
        }
        
    }

    return newArray
 }


const arr1=[1,2,3,4,5];
const arr2=[4,5,6,7,8];
console.log(findIntersection(arr1,arr2)); // Output: [4, 5]


//************************************* USING SET METHOD  ******************************************************************* */


function findIntersection2(arr3,arr4){

    const array1 = new Set(arr3)
    const filter = arr4.filter(item => array1.has(item))

    return filter
}


const arr3=[1,2,3,4,5];
const arr4=[4,5,6,7,8];
console.log(findIntersection2(arr3,arr4));