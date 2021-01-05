package Stacks;

import java.util.EmptyStackException;

/*
  Implement two stacks in one array.
  Support these operations:  
  
  - push1() // to push in the first stack
  - push2() // to push in the second stack
  - pop1()
  - pop2()
  - isEmpty1()
  - isEmpty2()
  - isFull1()
  - isFull2()
  
  Make sure your implementation is space efficient. 
  (hint: do not allocate the same amount of space by dividing the array in half.) 
*/

/* 
  Off the bat it's not clear if he wants space to be to be define as both of them, or one of them.
  Because he is asking for 2 `isFull` methods,
  it makes it sounds like that we are dividing the 
  Stack in half

  Instead, I'm gonna multiple it by 2 and see where I get.
*/

public class TwoStack {
  private int items[];
  private int size;
  private int topOfStack1 = 0; // 0, 2, 4, 6, 8 ...
  private int topOfStack2 = 1; // 1, 3, 5, 7, 9 ...

  public TwoStack(int size) {
    this.size = size;
    this.items = new int[size * 2];
  }

  public void push1(int item) {
    if (isFull1()) {
      throw new StackOverflowError();
    }

    items[topOfStack1] = item;
    topOfStack1 += 2;
  }
  
  public void push2(int item) {
    if (isFull2()) {
      throw new StackOverflowError();
    }
    
    items[topOfStack2] = item;
    topOfStack2 += 2;
    
  }

  public void pop1() {
    if (isEmpty1()) {
      throw new EmptyStackException();
    }
    
    
  }
  public void pop2() {
    if (isEmpty2()) {
      throw new EmptyStackException();
    }
    
  }
  
  public boolean isFull1() {
    return (topOfStack1 + 1) / 2 == size;
  }

  public boolean isFull2() {
    return (topOfStack2) / 2 == size;
  }
  
  public boolean isEmpty1() {
    return topOfStack1 == 0;
  }
  
  public boolean isEmpty2() {
    return topOfStack2 == 1;
  }

}
