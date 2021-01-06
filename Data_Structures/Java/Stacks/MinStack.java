/*

Design a stack that supports push, pop and retrieving the minimum value in constant time.
For example, we populate our stack with [5, 2, 10, 1] (from left to right). 
  stack.min() // 1
  stack.pop()
  stack.min() // 2
*/

/*

I don't know if I can figure this one out!

At first, I thought an Array would be a good item, do some type of index magic.
Yet I don't see a way to do it in O(1)

So I thought a LinkedList might help me look at the problem different... 
ANd I'm still unsure, because of what may be in the middle

Honestly, it kind of sounds like a MinHeap with using a Stack...
yet i don't think Mosh would try to do that as that's in his part 2

So, I think it's an array now, with some type of index magic.
*/

/*

Okay I looked up the answer. Yet it makes sense to me now and i'm going to try to type it out from memory

*/

package Stacks;

import java.util.Stack;

public class MinStack {
  private Stack<Integer> stack;
  private Stack<Integer> minStack;

  public MinStack() {
    this.stack = new Stack<Integer>();
    this.minStack = new Stack<Integer>();
  }

  public void push(int item) {
    stack.push(item);

    if (minStack.isEmpty() || item < min()) {
      minStack.push(item);
    }
  }

  public int pop() {
    var value = stack.pop();
    
    if (value == min()) {
      minStack.pop();
    }

    return value;
  }

  public int min() {
    return minStack.peek();
  }

}
