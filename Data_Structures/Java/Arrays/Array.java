// Check out git commit 50d3a4d428a8d02c02f17d75c36509d60254edb4 
// for my original answers without comments
package Arrays;

public class Array {
  private int count;
  private int[] array;

  public Array(int length) {
    this.array = new int[length];
  }

  public void insert(int number) {
    resizeIfRequired();
    
    array[count++] = number;
  }



  public void print() {
    for (int i = 0; i < count; i++)
      System.out.println(array[i]);
  }

  public int size() {
    return count;
  }

  public void removeAt(int index) {
    if (index >= count || index < 0)
      throw new IllegalArgumentException();
    
    // left shift
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

  // First thing I like about the answer
  // I don't usual use if statements in functions like this
  // Yet since it's class based, I love it.
  private void resizeIfRequired() {
    if (array.length == count)
      resize();
  }

  // I don't like his answer because of negative numbers.
  // I'm sure it still works yet i feel that 0 may be the max numbers for things
  // I like the for each though
  public int max() {
    // O(n)...I knew that
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
    // He doesn't choice the smaller count size ;)

    // His solution is much cleaner than mine,
    // Yet i'm unsure on the count part an efficency.
    // His seems to create extra zeros in the print.
    // Which i'm unsure why... idk how to make quick tests in Java so i'll
    // leave it it at "answer read"

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

    // oh yeah I can use the count prop within the class. I like his better.
    // I thought his answer was gonna to have O(1) space complexity
    for (int i = 0; i < count; i++)
      newArray[i] = array[count - i - 1];

    // for (int j = 0, i = array.length - 1; j < newArray.length; i--, j++)
    //   newArray[j] = array[i];

    array = newArray;
  }

  public void insertAt(int item, int index) {
    if (index < 0 || index > count)
      throw new IllegalArgumentException();

    resizeIfRequired();

    // right shift
    // um why count - 1?
    // does mine work even?
    // it doesn't seem to matter...why?
    // it seems because i'm copying nothing into some twice, instead of once
    // also, count - 1 will prevent any potential out of bounds. I'm unsure of an edge case, yet that is the case.
    // All and all i'm satisfied with my solution as it very very close to the instructors answer
    for (int i = count - 1; i >= index; i--)
      array[i + 1] = array[i];
    
    array[index] = item;

    count++;
  }
}
