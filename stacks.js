// Stack

// functions: push, pop, peek, length

// var letters = []; // this is our stack

// var word = "racecar";

// var rword = "";

// // put letters of word into stack
// for (var i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// // pop off the stack in reverse order
// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }

// if (rword === word) {
//   console.log(word + " is a palindrome.");
// } else {
//   console.log(word + " is not a plindrome.");
// }

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Adds a value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and return the value at the end of the stack
  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}


let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("JoelSpinelli");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());