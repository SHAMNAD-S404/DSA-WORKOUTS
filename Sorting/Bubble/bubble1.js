
 function bubbleSort(array){

    let sorted

  do{   
    sorted = false

    for(let i=0;i<array.length;i++){

        if (array[i] > array[i+1]) {

            let temp   = array[i]
            array[i]   = array[i+1]
            array[i+1] = temp

            sorted = true
        }
    }

    } while(sorted)

    return array
 }





const array  = [7,8,9,4,5,7,3,2,4]
console.log(bubbleSort(array));