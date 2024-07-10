//?  Two Sum: Write a function to find two numbers in an array that add up to a given target.

//* Time Complexity: O(n), where nnn is the number of elements in the array. The algorithm
//* iterates through the array once, and each lookup and insertion operation in the hash map (object) takes average O(1) time.

//* Space Complexity: O(n), where n is the number of elements in the array. The space complexity is primarily determined by 
//* the space used by the hash map.


 function twoSum(array,target){

     let map={} //intializing empty obj to store numbers and their indices

     for(let i=0; i<array.length; i++){

        let diff = target - array[i];

         // Check if the diff (needed number to reach target) exists in the map

        if (map.hasOwnProperty(diff)) {

            
            return [map[diff],i] //Return the indices of the two numbers
        }

        //Store the current number and its index in the map
        map[array[i]] = i ;
     }
     //if there is nothing then returning empty arraY
     return []
 }

 let array = [10,7,13,40,50]
 const target = 20;
 
 //CALLING FUNCTION AND PRINTING OUT
 console.log(twoSum(array,target))
