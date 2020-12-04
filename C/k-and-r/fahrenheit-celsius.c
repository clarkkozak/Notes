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
  float fahr, celsius; 
  float lower, upper, step;

  /*
    int and float , including:
    char character - a single byte
    short short integer
    long long integer
    double double-precision floating point
  */
  // also arrays, structures, and unions, pointers and functions that can return them


  // assignment
  lower = 0; // lower limit of the temperature range on table
  upper = 300;  // upper limit 
  step = 20; // step size on the table
  // Individual statements are terminated by semicolons.

  fahr = lower;

  // a loop
  // if with only one statement, doesn't need {} if indentation is used
  // placement of brackets aren't relavant, aim to make your code easy for people to read
  // Pick a style that suits you, then use it consistently.
  while(fahr <= upper) {
    // celsius = 5 * (fahr - 32) / 9; // integer division truncates: any fractional part is discarded
    // integers 
    // printf("%d\t%d\n", fahr, celsius); 
    // printf("%3d %6d\n", fahr, celsius); // to print the first number of each line in a field three digits wide, and the second in a field six digits wide
    // fahr = fahr + step;
    
    // By the way, printf is not part of the C language; there is no input or output defined in C
    // itself. printf is just a useful function from the standard library of functions that are normally
    // accessible to C programs

    // floats

    // writing floating-point constants with explicit decimal points even when they have integral values
    // emphasizes their floating-point nature for human readers.
    celsius = (5.0/9.0) * (fahr-32.0);
    printf("%3.0f %6.1f\n", fahr, celsius);
    fahr = fahr + step;
 

  }
  return 0;
}

/*
%d print as decimal integer %d
%6d print as decimal integer, at least 6 characters wide
%f print as floating point
%6f print as floating point, at least 6 characters wide
%.2f print as floating point, 2 characters after decimal point
%6.2f print as floating point, at least 6 wide and 2 after decimal point
Among others, printf also recognizes %o for
*/

// Among others, printf also recognizes %o for octal, %x for hexadecimal, %c for character, %s for character string and %% for itself.
