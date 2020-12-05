#include <stdio.h>

// This is a comment
/* print Fahrenheit-Celsius table
   for fahr - 0, 20, ..., 300 */

int main()
{
  // Exercise 1-5. 
  // Modify the temperature conversion program to print the table in reverse order,
  // that is, from 300 degrees to 0.
  int fahr; 

  for (fahr = 300; fahr > 0; fahr = fahr - 20)
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
