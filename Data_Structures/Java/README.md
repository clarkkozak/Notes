# Data Structures in Java

This is from the [Code With Mosh Data Structures](https://codewithmosh.com/p/data-structures-algorithms) series.

I highly suggest his work as it's simply expressed and well made.

I also suggest looking at other resources, and I believe he would to. His courses are the start of software development, not the end.

## Part 1 - Linear Data Structures
- Getting Started
- The Big O Notation 
- Arrays 
- Linked Lists 
- Stacks 
- Queues 
- Hash Tables 

### Getting Started 

Make sure to go through and solve the problems.
  - I didn't listen to this. I watched the videos once, then I forget the solutions, and try to code what my answer.

I'm not getting the source code yet cause I'll get the answers after I'm done coding along. Then compare at the end.

### Big O Notation

See the [Big O Cheat Sheet](https://github.com/clarkkozak/Notes/blob/master/Data_Structures%2FJava%2Fbig-o-cheat-sheet.pdf)

### Arrays

#### Understanding Arrays
  - Lookup - O(1)
    - You know the index of an item, you know where it is in memory.
  
  - Insert / Resize - O(n)
    - We need to know the size of the the array.

  - Remove - O(n)
    - best case O(1)
       - it's at the end and don't need to shift the values
    - worst case O(n)  
       - it's at the beginning and need to shift the values

#### Arrays in Java
  See [ArrayMain.java](https://github.com/clarkkozak/Notes/blob/master/Data_Structures%2FJava%2FArrays%2FArrayMain.java#L10)