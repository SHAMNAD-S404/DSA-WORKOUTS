//? Modify the Bubble Sort algorithm to sort an array of strings in alphabetical order.
//? Example: Input: ["apple","orange","banana","grape"],Output: ["apple","banana","grape","orange"]
 //* TIME COMPLIXITY IS O(n²) QUADRIC

 function bubbleSort(array){

    let sorted;

    do {
        sorted = false
        for(let i = 0;i<array.length;i++){

            if (array[i] > array[i+1]) {
                
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp

                sorted = true
            }
        }
        
    } while (sorted);

    return array
 }



const strings= ["apple","orange","banana","grape"]
console.log(bubbleSort(strings))