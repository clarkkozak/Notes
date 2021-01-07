package Queues;

// import java.util.Queue;

import java.util.Stack;

// import java.util.ArrayDeque;

public class QueueMain {
  public static void main(String[] args) {
    ArrayQueue queue = new ArrayQueue(5);

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    System.out.println(queue);
    reverse(queue);
    System.out.println(queue);


  }

  public static void reverse(ArrayQueue queue) {
    Stack<Integer> stack = new Stack<>();

    while(!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }

    while (!stack.isEmpty()) {
      queue.enqueue(stack.pop());
    }
  }
}
