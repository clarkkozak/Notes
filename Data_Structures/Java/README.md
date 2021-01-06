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


### Linked Lists
#### Runtime Complexity
- Lookup
  - Index -> O(1)
  - Value -> O(1)
 
- Insertion
  - Start -> O(1)
  - Middle -> O(n)
  - End -> O(1)
 
- Removal
  - Start -> O(1) # assign pointer to null and reassign head
  - Middle -> O(n) 
  - End -> O(n) # We need to find the 2nd to last node for a singly linked list

#### LinkedLists in Java
Checkout [this file at this commit](https://github.com/clarkkozak/Notes/blob/master/Data_Structures/Java/LinkedLists/LinkedListMain.java)

#### Linked Lists vs Arrays

What problem are trying to solve?

- Space Complexity
  - Static arrays have a fixed size
  - Dynamic arrays grow by 50-100%
  - Linked Lists don't waste memory (although they use more)
  - Use an array if you know how many items you need to store
    - new ArrayList(100)

- Runtime Complexity
  - Arrays Look up by index is O(1), LL is O(n)
  - LL insertion at the beginning or end is O(1), Arrays is O(n) to shift values
  - Singly LL deleteFirst O(1), Array O(n)

#### Types of Linked Lists
  - Singly 
  - Doubly
    - Delete from End is O(1)
    - Takes more memory
  
  - Circular
    - Last item points to the first item
    - Examples:
      - playlists
      - tab cycles 

## Stacks
Overview:
  - Structure of Stacks
  - Runtime Complexity
  - Solving Real World problems
  - Building a Stack

### Use Cases
- Implement Undo Feature
- Build compilers (eg syntax checking)
- Evaluate expression (eg 1 + 2 * 3)
- Build navigation (forward/back)

### Structure of a Stack
- Think of a stack of books
- Last in Last Out (LIFO)
- A stack is a wrapper around a linked list or an array

#### Operations
  - push(item) // put an item on the stack
  - pop() // remove + return the first item
  - isEmpty() // bool
  - peak() // return the first item, yet don't remove it
  - All operations are of them are O(1)

## Queues

Metaphor: people waiting on a line to get to a bus

### Examples:
  - Printers
  - OS (processing to wait to run)
  - Web Server (requests coming in)
  - Live support system (wait for your time to talk to someone)

### Operations:
  - enque -> add to back
  - deque  -> remove from front
  - peek
  - isEmpty
  - isFull
  - All O(1)