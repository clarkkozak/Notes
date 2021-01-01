package Stacks;

import java.util.Stack;

public class StacksMain {
  public static void main(String[] args) {
    // String name = "Clark";
    // String reverseName = reverse(name);
    // System.out.println(name);
    // System.out.println(reverseName);

    String expression = ")(()";
    System.out.println(isBalancedAns(expression));

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

  public static boolean isBalanced(String str) {

    if (str == null) throw new IllegalArgumentException();

    if (str == "" ) return false;
    
    Stack<Character> stack = new Stack<>();
    String openingBrackets = "[{<(";
    String closingBrackets = "]}>)";

    for (char ch : str.toCharArray()) {
      // load up the stack
      stack.push(ch);

      // if there's a closing bracket
      if (closingBrackets.indexOf(ch) != -1) {
        // then unload the stack to check for next bracket
        while (!stack.isEmpty()) {
          char possibleBracket = stack.pop();
          // if we have the right bracket balanced 
          if (openingBrackets.indexOf(possibleBracket) == closingBrackets.indexOf(ch)) {
            // then get out of the loop
            break;
          }

          // if it isn't the right bracket
          if (openingBrackets.indexOf(possibleBracket) != -1) {
            // then it isn't balanced
            return false;
          }
        }    
      }
    }

    // If there's still something in the stack
    while(!stack.isEmpty()) {
      // check if it has a opening bracket without a closing bracket
      if (openingBrackets.indexOf(stack.pop()) != -1) {
        return false;
      }
    }
    return true;    
  }

  public static boolean isBalancedAns(String str) {
    Stack<Character> stack = new Stack<>();

  
    for (char ch : str.toCharArray()) {
      // why push anything but the chars we are looking for?
      if (ch == '(') {
        stack.push(ch);
      }
      if (ch == ')') {
        if (stack.isEmpty()) return false;
        stack.pop();
      }
    }

    return stack.isEmpty();
  }
}
