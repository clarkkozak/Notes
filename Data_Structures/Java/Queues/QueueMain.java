package Queues;

import java.util.Queue;
import java.util.ArrayDeque;

public class QueueMain {
  public static void main(String[] args) {
    Queue<Integer> queue = new ArrayDeque<>();

    queue.add(10);
    queue.add(20);
    queue.add(30);
    System.out.println(queue);
    var front = queue.remove();
    System.out.println(front);
    System.out.println(queue);
  }
}
