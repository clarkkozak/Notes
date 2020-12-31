package Stacks;

import java.util.Stack;

public class StacksMain {
  public static void main(String[] args) {
    Stack<Integer> stack = new Stack<>();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    System.out.println(stack);
    int top = stack.pop();
    System.out.println(top);
    int newTop = stack.peek();
    System.out.println(stack);
    System.out.println(newTop);
    // uncommon to search for an item, yet it is available
    // stack.search(20)
  }
}
