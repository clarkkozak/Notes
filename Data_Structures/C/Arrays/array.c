#include <stdio.h>

#define SIZE 5

int main(int argc, char const *argv[])
{
  // int -> Data type
  // numbers -> array name
  // [10] -> size
  int i, numbers [SIZE];

  // assign index 0 (first position) the value of 5
  // numbers[0] = 5;

  // type   name             size    values
  int numbers_at_complie_time[3] = { 1, 2, 3 }; // Initialization at Compile Time
  

  // Initialization at Runtime – Initialization of elements of the array at runtime
  // refers to the method of inputting the values from the keyboard.  

  for (i = 0; i < SIZE; i++)
  {
    scanf("%d", &numbers[i]);
  }

  for (i = 0; i < SIZE; i++)
  {
    printf("The value %d exists at the address %p\n", numbers[i], &numbers[i]);
  }


  return 0;
}
