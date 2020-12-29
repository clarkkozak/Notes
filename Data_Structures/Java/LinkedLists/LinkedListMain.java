package LinkedLists;

import java.util.Arrays;

public class LinkedListMain {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.addLast(40);
    list.addLast(50);
    list.addLast(60);
    list.addLast(70);

    list.reverse();
    list.print();
  }
}
