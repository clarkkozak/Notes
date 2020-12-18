package Arrays;


/**
 * ArrayMain
 */
public class ArrayMain {
  
  public static void main(String[] args) {
    // Exercise
    Array numbers = new Array(3);
    numbers.insert(10);
    numbers.insert(20);
    numbers.insert(30);
    numbers.insert(40);
    numbers.removeAt(2);
    // System.out.println(numbers.indexOf(10));// 0 
    // System.out.println(numbers.indexOf(100)); // -1
    numbers.print(); // 10, 20, 30

  }
}