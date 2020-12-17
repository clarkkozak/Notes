# Arrays

An array is a collection of homogeneous (similar) types of data elements in
contiguous memory. An array is a linear data structure because all elements of an
array are stored in linear order. The various elements of the array are referenced
by their index value also known as the subscript

## Advantages of using arrays
1. Elements are stored in adjacent memory locations; hence, searching is very
fast, as any element can be easily accessed.
2. Arrays do not support dynamic memory allocation, so all the memory
management is done by the compiler.

## Limitations of using arrays
1. Insertion and deletion of elements in arrays is complicated and very time-consuming, as it requires the shifting of elements.
2. Arrays are static; hence, the size must be known in advance.
3. Elements in the array are stored in consecutive memory locations which may
or may not be available.


## Address of an Array item
Q. An array is given intmarks[6] = { 34, 53, 87, 100, 98, 65 } calculate the address of marks[3] if the base address is 3000.

My A. 3020                               

Correct answer = 3004. int are 2 bytes, not 4. 

wait the book is wrong too. They start their index at 1, not zero. So the actual correct answer would be 3006

## Operations

- Traversing an array
- Inserting an element in an array
- Deleting an element in an array
- Searching an element in an array
- Merging of two array