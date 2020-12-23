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

  public int size() {
    return count;
  }

  // [0, 1, 2]
  public void removeAt(int index) {
    if (index >= count || index < 0)
      throw new IllegalArgumentException();
    
    for (int i = index; i < count; i++)
        array[i] = array[i + 1];

    count--;
  }

  public int indexOf(int value) {
    for (int i = 0; i < array.length; i++)
      if (value == array[i])
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

  public int getItem(int index) {
    if (index > array.length - 1)
      throw new IllegalArgumentException();

    return array[index];
  }

  public boolean contains(int value) {
    for (int i = 0; i < array.length; i++)
    if (value == array[i])
      return true;
  
    return false;
  }

  public Array intersects(Array compareArray) {
    var smallerArraySize = compareArray.size() < this.count ? compareArray.size() : this.count;

    Array intersectArray = new Array(smallerArraySize);

    for (int i = 0; i < array.length; i++) {
      if (intersectArray.size() == smallerArraySize)
        break;
      for (int j = 0; j < compareArray.size(); j++) {
        if (array[i] == compareArray.getItem(j) && !intersectArray.contains(compareArray.getItem(j))) {
          intersectArray.insert(array[i]);
        }
      }
    }

    return intersectArray;
  }

  public void reverse() {
    var newArray = new int[array.length];

    for (int j = 0, i = array.length - 1; j < newArray.length; i--, j++)
      newArray[j] = array[i];

    array = newArray;
  }
}
