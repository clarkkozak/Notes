package Arrays;


/**
 * ArrayMain
 */
public class ArrayMain {
  
  public static void main(String[] args) {
    Array numbers = new Array(3);
    numbers.insert(2); // 2 
    numbers.insert(-166); 
    numbers.insert(5); // 5
    numbers.insert(30); // 30
    numbers.insert(30);  

    Array numbers2 = new Array(3);
    numbers2.insert(30); // 30
    numbers2.insert(59);
    numbers2.insert(5); // 5
    numbers2.insert(3);
    numbers2.insert(2); // 2 
    numbers2.insert(-19);
    
    
    Array intersects = numbers2.intersects(numbers);
    intersects.print();

  }
}