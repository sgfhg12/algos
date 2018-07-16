function isUnique(str){
    let chars = new Set();
    for(let i = 0; i < str.length; i++){
      if(chars.has(str[i])){
        return false;
      } else {
        chars.add(str[i])
      }
    }
    return true;
  }
  // time O(n)
  //space O(n)
  
  function isUniqueInPlace(str){
    str = str.split('').sort();
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i+1]){
        return false;
      }
    }
    return true;
  }
  
  // time O(n)
  // space O(1)