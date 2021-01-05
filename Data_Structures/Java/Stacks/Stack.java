package Stacks;

import java.util.Arrays;

public class Stack {
  private int[] items;
  private int top;

  public Stack(int size) {
    this.items = new int[size];
  }

  @Override
  public String toString() {
    var content = Arrays.copyOfRange(items, 0, top);
    return Arrays.toString(content);
  }

  public void push(int item) {
    if (isFull()) {
      throw new StackOverflowError();
    }

    items[top++] = item;
  }

  public int pop() {
    if (isEmpty()) {
      throw new EmptyStackException();
    }

    return items[--top];
  }

  public int peek() {
    if (isEmpty()) {
      throw new EmptyStackException();
    }

    return items[top - 1];
  }

  public boolean isFull() {
    return items.length == top;
  }

  public boolean isEmpty() {
    return top == 0;
  }
}
