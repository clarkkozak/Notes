package Queues;

import java.util.PriorityQueue;

// import java.util.Queue;

import java.util.Stack;

// import java.util.ArrayDeque;

public class QueueMain {
  public static void main(String[] args) {
    ArrayQueue queue = new ArrayQueue(5);

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    System.out.println(queue);
    // reverse(queue);
    // System.out.println(queue);

    QueueStack sQueue = new QueueStack();
    sQueue.enqueue(10);
    sQueue.enqueue(20);
    sQueue.enqueue(30);
    // System.out.println(sQueue.dequeue());
    // reverse(sQueue);
    // System.out.println(sQueue.dequeue());

    PriorityQueue<Integer> pQueue = new PriorityQueue<>();
    pQueue.add(5); 
    pQueue.add(3); 
    pQueue.add(1); 
    pQueue.add(4); 

    while (!pQueue.isEmpty()){
      System.out.println(pQueue.remove());
    }
  
  }

  public static void reverse(QueueStack queue) {
    Stack<Integer> stack = new Stack<>();

    while(!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }

    while (!stack.isEmpty()) {
      queue.enqueue(stack.pop());
    }
  }
}
