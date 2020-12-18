package Arrays;


/**
 * ArrayMain
 */
public class ArrayMain {
  
  public static void main(String[] args) {
    Array numbers = new Array(3);
    numbers.insert(50);
    numbers.insert(20);
    numbers.insert(30);
    System.out.println(numbers.max());
  }
}