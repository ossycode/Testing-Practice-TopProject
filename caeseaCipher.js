 export function caeseaCipher(str, shiftNum) {
     let lowerCaseStr = str.toLowerCase()
     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
     let newString = '';

     for (let i = 0; i < lowerCaseStr.length; i++){
         let currentLetter = lowerCaseStr[i];

         if (currentLetter === ' ') {
             newString += currentLetter;
             continue;
         }
         let currentIndex = alphabet.indexOf(currentLetter)
         let newIndex = currentIndex + shiftNum;

         if (newIndex > 25 ) newIndex = newIndex - 26;

         if(newIndex < 0 ) newIndex = newIndex + 26;

         if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase();
         }
         else newString += alphabet[newIndex]
     }
     return newString

}




