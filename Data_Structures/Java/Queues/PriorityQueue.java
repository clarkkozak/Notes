package Queues;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Queue;

/**
 * PriorityQueue
 */
public class PriorityQueue {
  private Queue<Integer> queue;
  private ArrayList<Integer> list;

  public PriorityQueue() {
    this.queue = new ArrayDeque<Integer>();
    this.list = new ArrayList<Integer>();
  }

  public void enqueue(int item) {
    list.add(item);
    Collections.sort(list);

    emptyQueue();

    queue.addAll(list);
  }

  public int dequeue() {
    if (isEmpty()) {
      throw new IllegalArgumentException();
    }
    return queue.remove();
  }

  public int peek() {
    return queue.peek();
  }

  public boolean isEmpty() {
    return queue.isEmpty();
  }

  private void emptyQueue() {
    this.queue = new ArrayDeque<Integer>();
  } 


}