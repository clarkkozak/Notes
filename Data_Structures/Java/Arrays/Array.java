package Arrays;

public class Array {
  private int size;
  private int index;
  private int[] array;
  
  public Array(int size) {
    this.size = size;
    this.array = new int[size];
  }

  public void insert(int number) {
    if (size > index) {
      resize();
    }
    array[index++] = number;
  }

  public void print() {
    for (int i = 0; i < index; i++) {
      System.out.println(array[i]);
    }
  }

  public int size() {
    return index;
  }

  public void removeAt(int number) {
    index--;
  }

  public int indexOf(int number) {
    for (int i = 0; i < array.length; i++)
      if (number == array[i])
        return i;
    
    return -1;
  }

  private void resize() {
    int[] newArray = new int[size * 2];
    for (int i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    
    this.array = newArray;
  }

}
