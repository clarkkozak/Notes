package LinkedLists;

public class LinkedList {
  private Node first;
  private Node last;

  public LinkedList() {
    this.first = null;
    this.last = null;
  }

  public void print() {
    var current = first;
    while(current != null) {
      System.out.println(current.value);
      current = current.next;
    }
  }

  // addFirst
  public void addFirst(int value) {
    if (isEmpty()) {
      first = new Node(value);
      last = first;
    }
    else {
      var temp = first;
      first = new Node(value);
      first.next = temp; 
    }
  }

  public boolean isEmpty() {
    return first == null && last == null;
  }

  // addLast
  public void addLast(int value) {
    if (isEmpty()) {
      first = new Node(value);
      last = first;
      return;
    }

    var current = first;
    
    while(current != null) {
      if (current == last) {
        current.next = new Node(value);
        last = current.next;
        break;
      }
      current = current.next;
    }
    
  }

  // deleteFirst
  public void deleteFirst() {
    if (isEmpty())
      throw new IllegalArgumentException();

    first = first.next;
  }


  // deleteLast
  public void deleteLast() {
    if (isEmpty())
      throw new IllegalArgumentException();
     
    if (first.next == null) {
      first = null;
      return;
    }  

    var current = first;
    Node previous = null;
    while (current != null) {
      if (current == last) {
        previous.next = null;
        last = previous;
      }
      previous = current;
      current = current.next;
    }

  }
  
  // contains
  public boolean contains(int value) {
    return indexOf(value) != -1;
  }

  // indexOf
  public int indexOf(int value) {
    if (isEmpty())
     return -1;
      
    var current = first;
    int count = 0;

    while (current != null) {
      if (current.value == value)
        return count;

      current = current.next;
      ++count;
    }

    return -1;
  }

}
