package Arrays;


/**
 * ArrayMain
 */
public class ArrayMain {
  
  public static void main(String[] args) {
    Array numbers = new Array(3);
    numbers.insert(1); 
    numbers.insert(3); 
    numbers.insert(4);

    numbers.print();

    System.out.println("\n");

    numbers.insertAt(0, 0);
    numbers.insertAt(5, 4);
    numbers.print();
  }
}