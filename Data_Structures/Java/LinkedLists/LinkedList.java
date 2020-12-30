package LinkedLists;

import java.util.NoSuchElementException;

public class LinkedList {

  // I knew it!!! I thought it would be best to have this as a private class!
  private class Node {
    private int value;
    private Node next;
    public Node(int value) {
      this.value = value;
    }
  
    @Override
    public String toString() {
      return String.valueOf(value);
    }
  }

  private Node first;
  private Node last;
  private int size;

  public LinkedList() {
    this.first = null;
    this.last = null;
  }

  public void print() {
    var current = first;
    while (current != null) {
      System.out.println(current.value);
      current = current.next;
    }
  }

  // addFirst
  public void addFirst(int value) {
    // if (isEmpty()) {
    //   first = new Node(value);
    //   last = first;
    // } else {
    //   var temp = first;
    //   first = new Node(value);
    //   first.next = temp;
    // }

      Node node = new Node(value); // extract new Node
      if (isEmpty()) {
        first = last = node; // assigns on same line
      } else {
        node.next = first; // use new nodes properties
        first = node;
      }
    size++;
  }

  // hmm. Why not have it public? private is okay, yet I see this as fine.
  public boolean isEmpty() {
    return first == null;  // if first is null, so is last.
  }

  // addLast
  public void addLast(int value) {
    // if (isEmpty()) {
    //   first = new Node(value); // declared new Node twice
    //   last = first;
    //   return;
    // }

    // var current = first;

        

    // while (current != null) { // unnecessary loop
    //   if (current == last) {
    //     current.next = new Node(value); // declared new Node twice
    //     last = current.next;
    //     break;
    //   }
    //   current = current.next;
    // }

    // Oh lord his is much better
    Node node = new Node(value);

    if (isEmpty()) {
      
      first = last = node; // assigning on the same line 
    } else {
      last.next = node; // taking advantage of the last 
      last = node;
    }
    size++;
  }

  // deleteFirst
  public void deleteFirst() {
    if (isEmpty())
      throw new NoSuchElementException();

    // What if it only has one item? We need to reset next and let
    if (hasOneItem()) {
      first = last = null;
    } else {
      // If I don't remove this link, then the Garbage Collector won't remove it from memory
      // I forgot to remove the link from the first head
      var second = first.next;
      first.next = null; 
      first = second;
    }
    size--;
  }

  // deleteLast
  public void deleteLast() {
    if (isEmpty())
      throw new NoSuchElementException();

    if (hasOneItem()) {
      first = last = null; 
    } else {
      // My implementation is correct, yet his creates a reusable method + is more readable.
      Node previous = getPrevious(last); // abstract logic to a reusable method
      last = previous;
      last.next = null;
    }

    size--;
  }

  private Node getPrevious(Node node) {
    var current = first;
    while (current != null) {
      if (current.next == node) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  private boolean hasOneItem() {
    return first == last;
  }

  // contains
  public boolean contains(int value) {
    return indexOf(value) != -1;
  }

  // indexOf
  public int indexOf(int value) {
    var current = first;
    int index = 0;

    while (current != null) {
      if (current.value == value)
        return index;

      current = current.next;
      ++index;
    }

    return -1;
  }

  public int size() {
    return this.size;
  }

  public int[] toArray() {
    int[] array = new int[size];
    int index = 0;
    var current = first;

    while (current != null) {
      array[index++] = current.value;
      current = current.next;
    }

    return array;
  }

  // So I don't mind his answer
  // Although, It made me want to adjust mine.
  public void reverse() {
    // I considered throwing an exception here.
    // I don't see the need. 
    if (isEmpty() || hasOneItem())
      return;
    
    // I considered using getPrevious.
    // However, by not using it,
    // we don't need extra traversals on the list
    Node previous = null;
    Node current = first;
    Node next = current.next;

    // This condition is irrelevant because we need to update current.next until next is null.
    while (true) {

      current.next = previous;

      // This is our true condition, yet we need to do the previously one more time.
      if (next == null) break;

      previous = current;
      current = next;
      next = next.next;
    }

    var temp = first;
    first = last;
    last = temp;
  }

  public int kthNodeFromTheEnd(int k) {

    if (k > this.size || this.size == 0 || k <= 0) {
      throw new IllegalArgumentException();
    }

    Node current = first;
    Node kthNode = current;

    // Set current k nodes apart from kthNode
    for (int i = 0; i < k; i++) {
      current = current.next;
    }

    // Move both pointers till current is at the end
    while (current != null) {
      kthNode = kthNode.next;
      current = current.next;
    }

    return kthNode.value;
  }

  // Find the middle of a linked list in one pass.
  // If the list has an even number of nodes, there would be two middle nodes. 
  // (Note: Assume that you don’t know the size of the list ahead of time.) 
  public void printMiddle() {

    if (isEmpty()) {
      return;
    }

    if (hasOneItem() || hasTwoItems()) {
      this.print();
      return;
    }

    Node current = first;
    Node middle = current;
    int count = 0;

    // Find the size or end of the list
    while (current != null) {
      count++;
      current = current.next;
    }
    
    // Move middle note to the middle
    for (int i = 1; i < count / 2; i++) {
      middle = middle.next;
    }

    // If the size if even, print out the first of the two middle
    if (count % 2 == 0)  {
      System.out.println(middle.value);  
    }
    
    System.out.println(middle.next.value);      
  }

  private boolean hasTwoItems() {
    return first.next == last;
  }

}
