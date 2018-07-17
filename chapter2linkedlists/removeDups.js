function Node(val, next=null){
    this.val = val; 
    this.next = next; 
  }
  
  function removeDups(head){
    if(!head) return;
    let set = new Set(head.val); 
    while(head && head.next){
      if(set.has(head.next.val)){
        head.next = head.next.next
      }else {
        set.add(head.next.val)
      }
      head = head.next
    }
  }
  
  // time O(n)
  // space O(1)