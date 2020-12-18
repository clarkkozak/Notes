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
    if (index >= count || index < 0)
      throw new IllegalArgumentException();
    
    for (int i = index; i < count; i++)
        array[i] = array[i + 1];

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

  public int max() {
    int max = array[0];
    
    for (int i = 1; i < count; i++)
      if (max < array[i])
        max = array[i];

    return max;
  } 
}
