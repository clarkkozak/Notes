package Stacks;

import java.util.Stack;

public class StacksMain {

  public static void main(String[] args) {
    // String name = "Clark";
    // String reverseName = reverse(name);
    // System.out.println(name);
    // System.out.println(reverseName);

    // String string = "{([])";
    // Expression expr = new Expression();
    // System.out.println(expr.isBalancedAns(string));
    Stack stack = new Stack();

    stack.push(30);
    stack.push(20);
    stack.push(10);
    System.out.println(stack);
    System.out.println(stack.peek());
    stack.pop();
    System.out.println(stack);
    System.out.println(stack.pop());

  }
}
