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
    // Null pointer exception!!!
    if (str == null) {
      throw new IllegalArgumentException();
    }
    
    Stack<Character> charStack = new Stack<>();
    
    // for (int i = 0; i < str.length(); i++) {
      for(char ch : str.toCharArray()) { // cleaner to work with a char than a index
        charStack.push(ch);
      }
      
    // Initialize before using, instead of having it at the top
    // Use a StringBuffer for I/O, since Strings are immutable in Java
    // String revString = "";
    StringBuffer revString = new StringBuffer();
    while(!charStack.isEmpty()) {
      // revString += charStack.pop();
      revString.append(charStack.pop());
    }

    return revString.toString();
    // return revString.toString();
  }

}
