package LinkedLists;

import java.util.Arrays;

public class LinkedListMain {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    list.addFirst(10);
    list.addLast(10);

    var arr = list.toArray();
    System.out.println(Arrays.toString(arr));
    
    list.deleteFirst();
    list.deleteLast();
    System.out.println(list.size()); 
  }
}
