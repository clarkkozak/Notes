package LinkedLists;

import java.util.Arrays;
import java.util.LinkedList;

public class LinkedListMain {
  public static void main(String[] args) {
    LinkedList<Integer> list = new LinkedList<Integer>();
    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.addFirst(5);
    list.addFirst(1);
    list.removeLast();
    list.removeFirst();
    list.contains(10);
    list.remove(0);
    System.out.println(list.contains(10));
    System.out.println(list.indexOf(20));
    System.out.println(list.size());
    System.out.println(list);
    var array = list.toArray();
    System.out.println(Arrays.toString(array));

  }
}
