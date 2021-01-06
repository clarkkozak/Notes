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

package Stacks;

import java.util.EmptyStackException;
import java.util.LinkedList;

public class MinStack {
  private LinkedList<Integer> items;

  public MinStack() {
    this.items = new LinkedList<Integer>();
  }

  @Override
  public String toString() {
    return items.toString();
  }

  public int min() {
    return items.getFirst();
  }

  public void push(int item) {
    items.push(item);; 
  }

  public int pop() {
    if (isEmpty()) {
      throw new EmptyStackException();
    }

    return items.pop();
  }

  public boolean isEmpty() {
    return items.isEmpty();
  }
}
