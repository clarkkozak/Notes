package Arrays;

public class Array {
  private int count;
  private int[] array;
  
  public Array(int length) {
    this.array = new int[length];
  }

  public void insert(int number) {
    if (array.length == count)
      resize();

    array[count++] = number;
  }

  public void print() {
    for (int i = 0; i < count; i++)
      System.out.println(array[i]);
  }

  // [0, 1, 2]
  public void removeAt(int index) {
    int[] newArray = new int[array.length];
    boolean targetFound = false;
    if (index >= count || index < 0)
      throw new IllegalArgumentException();
    
    for (int i = 0; i < newArray.length - 1 ; i++) {
      if (i == index) {
        targetFound = true;
      } 

      if (targetFound) {
        newArray[i] = array[i + 1];
      } else {
        newArray[i] = array[i];
      }


    }

    array = newArray;

    count--;
  }

  public int indexOf(int number) {
    for (int i = 0; i < array.length; i++)
      if (number == array[i])
        return i;
    
    return -1;
  }

  private void resize() {
    int[] newArray = new int[array.length * 2];

    for (int i = 0; i < array.length; i++)
      newArray[i] = array[i];
    
    array = newArray;
  }

}
