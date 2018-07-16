function stringComp(str){
    let count = 0; 
    let result = '';
    for(let i = 0; i < str.length; i++){
      count++
      if(str[i] !== str[i+1]){
        result += str[i] + count;
        count = 0;
      }
    }
    return result;
  }
  
  stringComp('aaabaa')
  
  //O(n) time
  //O(n) space