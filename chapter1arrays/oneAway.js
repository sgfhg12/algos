function oneAway (str1, str2){
    if((Math.abs(str1.length - str2.length)) > 1) return false; 
    
    let short = str1.length < str2.length ? str1 : str2; 
    let long = str1.length < str2.length ? str2 : str1;
    // gets the longer string 
  
    let diff = false;
    let ind1 = 0; 
    let ind2 = 0;
  
    while (ind1 < short.length && ind2 < long.length) {
      if (short[ind1] !== long[ind2]) {
        if(diff) return false;
        diff = true; 
        if(short.length === long.length) ind1++;
      } else {
        ind1++;
      }
      ind2++;
    }
    return true;
  }
  
  oneAway('pales', 'paleddd')
  
  // O(n) time 
  // O(1) space
  