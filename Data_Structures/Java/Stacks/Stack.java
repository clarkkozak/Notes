package Stacks;

import java.util.Arrays;

public class Stack {
  private int[] array;
  private int top;

  public Stack(int size) {
    this.array = new int[size];
  }

  @Override
  public String toString() {
    return Arrays.toString(array);
  }

  public void push(int item) {
    if (isFull()) {
      throw new StackOverflowError();
    }

    array[top++] = item;
  }

  public int pop() {
    if (isEmpty()) {
      throw new EmptyStackException();
    }

    return array[--top];
  }

  public int peek() {
    if (isEmpty()) {
      throw new EmptyStackException();
    }

    return array[top - 1];
  }

  public boolean isFull() {
    return array.length == top;
  }

  public boolean isEmpty() {
    return top == 0;
  }
}
