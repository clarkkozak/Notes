package Stacks;

import java.util.Arrays;
import java.util.List;
import java.util.Stack;


public class Expression {
  private final List<Character> leftBrackets = Arrays.asList('(', '<', '[', '{');
  private final List<Character> rightBrackets = Arrays.asList(')', '>', ']', '}');

  public boolean isBalancedAns(String str) {
    if (str == null) {
      throw new IllegalArgumentException();
    }

    Stack<Character> stack = new Stack<>();

    for (char ch : str.toCharArray()) {
      // why push anything but the chars we are looking for?
      if (isLeftBracket(ch)) {
        stack.push(ch);
      }

      if (isRightBracket(ch)) {
        if (stack.isEmpty()) {
          return false;
        }

        char top = stack.pop();

        if (!bracketsMatch(ch, top)) {
          return false;
        }

      }
    }

    return stack.isEmpty();
  }

  private boolean bracketsMatch(char right, char left) {
    return leftBrackets.indexOf(left) == rightBrackets.indexOf(right);
  }

  private boolean isRightBracket(char ch) {
    return rightBrackets.contains(ch);
  }

  private boolean isLeftBracket(char ch) {
    return leftBrackets.contains(ch);
  }
}
