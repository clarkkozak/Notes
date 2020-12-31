package Stacks;

import java.util.Stack;

public class StacksMain {
  public static void main(String[] args) {
    String name = "Clark";
    String reverseName = reverse(name);
    System.out.println(name);
    System.out.println(reverseName);

  }

  public static String reverse(String str) {
    String revString = "";
    Stack<Character> charStack = new Stack<>();

    for (int i = 0; i < str.length(); i++) {
      charStack.push(str.charAt(i));
    }

    while(!charStack.isEmpty()) {
      revString += charStack.pop();
    }

    return revString;
  }

}
