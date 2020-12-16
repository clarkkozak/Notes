package Arrays;

import java.util.Arrays;

/**
 * ArrayMain
 */
public class ArrayMain {
  
  public static void main(String[] args) {
    // int[] num = new int[3]; 
    int[] numbers = { 10, 20, 30 }; // short hand if you know the values
    numbers[0] = 5; // setting a value
    System.out.println(numbers); // prints the address in memory
    System.out.println(Arrays.toString(numbers)); // prints the address in memory
    System.out.println(numbers.length); // Doesn't change dynamically. A Fixed number.
  }
}