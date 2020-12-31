package Stacks;

import java.util.Stack;

public class StacksMain {
  public static void main(String[] args) {
    // String name = "Clark";
    // String reverseName = reverse(name);
    // System.out.println(name);
    // System.out.println(reverseName);

    String expression = "[<>{}()";
    System.out.println(isBalanced(expression));


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
    if (str == null) {
      throw new IllegalArgumentException();
    }
    Stack<Character> stack = new Stack<>();
    String openingBrackets = "[{<(";
    String closingBrackets = "]}>)";
    boolean result = false;
  
    for (char ch : str.toCharArray()) {
      var closingBracketIndex = closingBrackets.indexOf(ch);
      if (openingBrackets.indexOf(ch) != -1) {
        result = false;
      } 
      if (closingBracketIndex != -1) {
        while (!stack.isEmpty()) {
          char possibleBracket = stack.pop();
          var openingBracketIndex = openingBrackets.indexOf(possibleBracket);
          if (openingBracketIndex != -1) {
            if (openingBracketIndex == closingBracketIndex) {
              result = true;
              break;
            } else {
              return false;
            }
          }
          result = false;
        }
      }
            
      stack.push(ch);
    }
    
    
    return result;    
  }

}
