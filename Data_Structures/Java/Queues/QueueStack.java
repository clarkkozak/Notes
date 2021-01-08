package Queues;

import java.util.Stack;

public class QueueStack {
  private Stack<Integer> stackBack = new Stack<>();
  private Stack<Integer> stackFront = new Stack<>();

  // O(1)
  public void enqueue(int item) {
      stackBack.push(item);
  }

  // O(n)
  public int dequeue() {
    if (isEmpty()) {
      throw new IllegalArgumentException();
    }

    moveStackOneToStackTwo();

    return stackFront.pop();
  }

  private void moveStackOneToStackTwo() {
    while (!stackBack.isEmpty()) {
      stackFront.push(stackBack.pop());
    }
  }

  public boolean isEmpty() {
    return stackBack.isEmpty() && stackFront.isEmpty();
  }

  // O(n) 
  // I forgot the peek method
  public int peek() {
    if (isEmpty()) {
      throw new IllegalArgumentException();
    }

    moveStackOneToStackTwo();
    
    return stackFront.peek();
  }  
}
