package Stacks;

public class StacksMain {

  public static void main(String[] args) {
    // String name = "Clark";
    // String reverseName = reverse(name);
    // System.out.println(name);
    // System.out.println(reverseName);

    // String string = "{([])";
    // Expression expr = new Expression();
    // System.out.println(expr.isBalancedAns(string));
    TwoStack twoStack = new TwoStack(3);

  
    System.out.println(twoStack.isEmpty1());
    System.out.println(twoStack.isEmpty2());
    twoStack.push1(1);
    twoStack.push2(2);
    twoStack.push1(3);
    twoStack.push2(4);
    twoStack.push1(5);
    twoStack.push2(6);

    System.out.println(twoStack.isFull1());
    System.out.println(twoStack.isFull2());


  }
}
