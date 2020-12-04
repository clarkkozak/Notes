#include <stdio.h>

// This is a comment
/* print Fahrenheit-Celsius table
   for fahr - 0, 20, ..., 300 */

main()
{
  // declarations, with type integer (rather than a float)
  /*
  The range of both int and  float depends on the machine you are using; 
  16-bits int s, which lie between -32768 and +32767, are common, as are 32-bit ints.
  A float number is typically a 32-bit quantity, 
  with   at least six significant digits and magnitude generally between about 10^-38 and 10^38 .
  */
  int fahr, celsius; 
  int lower, upper, step;

  /*
    int and float , including:
    char character - a single byte
    short short integer
    long long integer
    double double-precision floating point
  */
  // also arrays, structures, and unions, pointers and functions that can return them


  // assignment
  lower = 3;
  upper = 300;
  step = 20;
  // Individual statements are terminated by semicolons.

  fahr = lower;

  // a loop
  // if with only one statement, doesn't need {} if indentation is used
  // placement of brackets aren't relavant, aim to make your code easy for people to read
  // Pick a style that suits you, then use it consistently.
  while(fahr <= upper) {
    celsius = 5 * (fahr - 32) / 9; // integer division truncates: any fractional part is discarded
    printf("%d\t%d\n", fahr, celsius); 
    printf("%3d %6d\n", fahr, celsius); // to print the first number of each line in a field three digits wide, and the second in a field six digits wide

    // By the way, printf is not part of the C language; there is no input or output defined in C
    // itself. printf is just a useful function from the standard library of functions that are normally
    // accessible to C programs
    
    fahr = fahr + step;
  }
  return 0;
}
