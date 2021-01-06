package Queues;

import java.util.Queue;

import java.util.Stack;

import java.util.ArrayDeque;

public class QueueMain {
  public static void main(String[] args) {
    Queue<Integer> queue = new ArrayDeque<>();

    queue.add(10);
    queue.add(20);
    queue.add(30);
    System.out.println(queue);
    reverse(queue);
    System.out.println(queue);


  }

  public static void reverse(Queue<Integer> queue) {
    Stack<Integer> stack = new Stack<>();

    while(!queue.isEmpty()) {
      stack.push(queue.remove());
    }

    while (!stack.isEmpty()) {
      queue.add(stack.pop());
    }
  }
}
