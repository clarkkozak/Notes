#include <stdio.h>

// It's bad practice to bury "magic numbers" like 300 and 20 in a program;
// A #define line defines a symbolic name or symbolic constant to be a particular string of characters:
#define LOWER   0   /* lower limit of table */ 
#define UPPER   300 /* upper limit */
#define STEP    20  /* step size */

// The quantities LOWER , UPPER and STEP are symbolic constants, not variables, so they do not appear in declarations. 
//Symbolic constant names are conventionally written in upper case so they can ber readily distinguished from lower case variable names.

// This is a comment
/* print Fahrenheit-Celsius table
   for fahr - 0, 20, ..., 300 */

int main()
{
  // Exercise 1-5. 
  // Modify the temperature conversion program to print the table in reverse order,
  // that is, from 300 degrees to 0.
  int fahr; 

  for (fahr = UPPER; fahr > LOWER; fahr = fahr - STEP)
    printf("%3d %6.1f\n", fahr, (5.0/9.0)*(fahr-32));
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
