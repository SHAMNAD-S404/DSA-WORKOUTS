//?    REMOVE DUPLICATE ELEMENTS FROM AN ARRAY

                    //? 1 ST METHOD USING 'SET' OPERATOR

//* Time Complexity: O(n) where n is the number of elements in the array. This is because inserting elements
//* into a "Set" and iterating through the array both take linear time.

//* Space Complexity: O(n) since a ' Set '  requires additional space proportional to the number of unique elements in the array.


 function removeDuplicate(array){

    //RETURN ARRAY WITH UNIQUE ELEMENTS
    return [...new Set(array)]

 }

let array = [10,20,30,40,10,20,30,33,40]

//CALLING THE FUNCTION AND PRINTING ITS OUTPUT
console.log(removeDuplicate(array))


//*************************************************************************************** */

         //? USING OBJECT

//* Both Time and Space complixity is O(n)

 function removeDup(arr2){

    //intializing an empty object 
    let seen = {}
    let uniq = []

    //iterate over array and finding uniq elements
    for(let i=0 ; i<arr2.length ; i++){

        if (!seen[arr2[i]]) {

            seen[arr2[i]] = true
            uniq.push(arr2[i])
        }
    }

    return uniq
 }


let array2 = [10,10,20,20,30]

console.log(removeDup(array2))
