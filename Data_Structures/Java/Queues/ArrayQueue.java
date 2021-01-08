package Queues;

import java.util.Arrays;

public class ArrayQueue {
  private int front;
  private int rear;
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
    return Arrays.toString(items);
  }


  public void enqueue(int item) {
    if (isFull()) {
      throw new IllegalStateException();
    }
    
    // this seems like cheating yet why not?
    // he used a *circular array* to fix this. 
    // which makes sense because an Array Out of bounds error is still possible
    // with this implementation
    // if (isEmpty()) {
    //   front = 0;
    //   rear = 0;
    // }

    // items[count++] = item;

    // if (count >= 1){
    //   rear++;
    // }

    items[rear] = item;
    rear = (rear + 1) % items.length;
    count++;

  }

  public int dequeue() {
    if (isEmpty()) {
      throw new IllegalArgumentException();
    }

    var item = items[front];
    items[front] = 0;
    front = (front + 1) % items.length;
    count--;
    return item;
  }

  public boolean isEmpty() {
    return count == 0;
  }

  public int peek() {
    return items[front];
  }
  //  T = 2
  // [10, 20, 30]
  //  H = 1
  //  C = 3

  public boolean isFull() {
    return items.length == count;
  }
}
