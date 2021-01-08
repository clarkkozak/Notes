package Queues;

import java.util.Stack;

public class QueueStack {
  private Stack<Integer> stackBack = new Stack<>();
  private Stack<Integer> stackFront = new Stack<>();

  // sB 30 20 10
  // sF 10 20 30
  //  q 10 20 30
  public void enqueue(int item) {
      stackBack.push(item);
  }

  public int dequeue() {
    if (isEmpty()) {
      throw new IllegalArgumentException();
    }

    while (!stackBack.isEmpty()) {
      stackFront.push(stackBack.pop());
    }
    return stackFront.pop();
  }

  public boolean isEmpty() {
    return stackBack.isEmpty() && stackFront.isEmpty();
  }
}
