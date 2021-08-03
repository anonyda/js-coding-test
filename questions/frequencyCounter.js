/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {

   if(typeof(str) !== 'string'){
      throw new Error ('Invalid Input');
   }
   let vowelObj = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0
   }

   for(let char of str){
      if(vowelObj[char.toLowerCase()] != undefined){
         vowelObj[char.toLowerCase()] += 1; 
      }
   }

   
   return vowelObj;
};

module.exports = frequencyCounter;
