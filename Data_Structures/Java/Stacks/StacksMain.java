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
    // TwoStack twoStack = new TwoStack(3);

  
    // System.out.println(twoStack.isEmpty1());
    // System.out.println(twoStack.isEmpty2());
    // twoStack.push1(1);
    // twoStack.push2(2);
    // twoStack.push1(3);
    // twoStack.push2(4);
    // twoStack.push1(5);
    // twoStack.push2(6);

    // System.out.println(twoStack.isFull1());
    // System.out.println(twoStack.isFull2());

    // MinStack minStack = new MinStack();

    // minStack.push(10);
    // minStack.push(20);
    // minStack.push(30);
    // System.out.println(minStack);
    // minStack.pop();
    // minStack.pop();
    // minStack.pop();
    // System.out.println(minStack);

    StackLL stackLL = new StackLL();
    System.out.println(stackLL.isEmpty());
    stackLL.push(10);
    System.out.println(stackLL.isEmpty());
    stackLL.push(20);
    stackLL.push(30);
    System.out.println(stackLL);
    System.out.println(stackLL.pop());
    System.out.println(stackLL);
    System.out.println(stackLL.peek());

  }
}
