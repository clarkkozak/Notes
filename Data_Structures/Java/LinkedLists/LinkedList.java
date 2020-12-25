package LinkedLists;

public class LinkedList {
  private Node first;
  private Node last;

  public LinkedList() {
    this.first = new Node();
    this.last = new Node();
  }

  public void print() {
    System.out.println(first);
    System.out.println(first.next);
  }

  // addFirst
  public void addFirst(int value) {
    first.value = value;
  }

  // addLast
  // deleteFirst
  // deleteLast
  // contains
  // indexOf

}
