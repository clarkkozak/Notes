package Stacks;

import java.util.EmptyStackException;
import java.util.LinkedList;

public class StackLL {
  private LinkedList<Integer> items;

  public StackLL() {
    this.items = new LinkedList<Integer>();
  }

  @Override
  public String toString() {
    return items.toString();
  }

  public boolean isEmpty() {
    return items.isEmpty();
  }

  public void push(int item) {
    items.push(item);
  }

  public int pop() {
    if (isEmpty()) {
      throw new EmptyStackException();
    }
    
    return items.pop();
  }

  public int peek() {
    return items.getFirst();
  }
}
