package Arrays;


/**
 * ArrayMain
 */
public class ArrayMain {
  
  public static void main(String[] args) {
    Array numbers = new Array(3);
    numbers.insert(2); 
    numbers.insert(-166); 
    numbers.insert(5); 

    numbers.print();
    numbers.reverse();
    numbers.print();
  }
}