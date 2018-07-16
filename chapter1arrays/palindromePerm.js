//Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. 

function palindromePermutation(str) {

    let chars = new Set()
    for(let i = 0; i < str.length; i++){
      let char = str[i]
      if(chars.has(str[i])){
        chars.delete(str[i])
      } else {
         chars.add(str[i])
      }
    }
    return chars.size === 1 || chars.size === 0 
  }
  
  // time O(n)
  // space O(n)
  
  palindromePermutation('tacocat');