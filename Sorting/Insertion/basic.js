
//?    WRITE A FUNCTION TO DO SORT AN ARRAY USING INSERTION SORT

//*    INSERTION SORT USING TWO LOOP FOR DOING OPERATION SO TIME COMPLIXITY IS "O(n²)" QUADRIC

function insertionSort(arr){

    for (let i = 1; i < array.length; i++) {
       
        let current = arr[i]
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j]
            j--  //decreasing j index to go to left side
        }

        arr[j+1] = current
        
    }

    return arr;
}

const array = [10,7,8,5,6,4,11]
console.log(insertionSort(array));