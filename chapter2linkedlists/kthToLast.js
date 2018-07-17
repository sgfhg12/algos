function Node(val, next=null){
    this.val = val; 
    this.next = next; 
  }
  
  function kthToLast(k, head){
    if(head === null) return null;  
    let count = 0; 
    let current = head; 
    while(current){
        current = current.next;
        count++
    }
    for(let i = 1; i < count - k; i++){
      head = head.next; 
      console.log(head)
    }
    return head; 
  }
  
  let a = new Node('a')
  let b = new Node('b')
  let c = new Node('c')
  let d = new Node('d')
  
  a.next = b
  b.next = c
  c.next = d
  
  kthToLast(1, a)
  
  // time O(n)
  //space O(1)