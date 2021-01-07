package Queues;

import java.util.Arrays;

public class ArrayQueue {
  private int head;
  private int tail;
  private int count;
  private int[] items;

  public ArrayQueue(int size) {
    if (size <= 0) {
      throw new IllegalArgumentException("size must be greater than 0");
    }

    this.items = new int[size];
  }

  @Override
  public String toString() {
    var content = Arrays.copyOfRange(items, head, tail);
    return Arrays.toString(content);
  }


  public void enqueue(int item) {
    if (isFull()) {
      throw new IllegalStateException();
    }
    
    // this seems like cheating yet why not?
    if (isEmpty()) {
      head = 0;
      tail = 0;
    }

    items[count++] = item;

    if (count >= 1){
      tail++;
    }

  }

  public int dequeue() {
    if (isEmpty()) {
      throw new IllegalArgumentException();
    }
    
    count--;
    return items[head++];
  }

  public boolean isEmpty() {
    return count == 0;
  }

  public int peek() {
    return items[head];
  }
  //  T = 2
  // [10, 20, 30]
  //  H = 1
  //  C = 3

  public boolean isFull() {
    return items.length == tail;
  }
}
