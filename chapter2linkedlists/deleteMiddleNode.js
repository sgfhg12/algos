function Node(val, next=null){
    this.val = val; 
    this.next = next; 
}

function deleteMiddleNode(node){
  if (node !== null || node.next !== null){
    node.val = node.next.val
    node.next = node.next.next
  }
  node = null; 
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
  
a.next = b
b.next = c
c.next = d