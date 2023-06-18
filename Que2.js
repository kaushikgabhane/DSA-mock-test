class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy head node to hold the result
    let current = dummyHead; // Pointer to the current node
    let carry = 0; // Variable to store the carry
  
    while (l1 !== null || l2 !== null) {
      let sum = carry; // Initialize sum with carry
  
      if (l1 !== null) {
        sum += l1.val; // Add the value from the first list
        l1 = l1.next;
      }
  
      if (l2 !== null) {
        sum += l2.val; // Add the value from the second list
        l2 = l2.next;
      }
  
      carry = Math.floor(sum / 10); // Calculate the carry
      current.next = new ListNode(sum % 10); // Create a new node with the sum's digit
      current = current.next; // Move the pointer to the next node
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry); // If there's still a carry, create a new node
    }
  
    return dummyHead.next; // Return the result linked list (excluding the dummy head)
  }
  
  // Create linked list l1: [2, 4, 3]
  let l1 = new ListNode(8);
  l1.next = new ListNode(9);
  l1.next.next = new ListNode(7);
  
  // Create linked list l2: [5, 6, 4]
  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  // Call the addTwoNumbers function
  let result = addTwoNumbers(l1, l2);
  
  // Print the result
  let output = [];
  while (result !== null) {
    output.push(result.val);
    result = result.next;
  }
  console.log(output); 