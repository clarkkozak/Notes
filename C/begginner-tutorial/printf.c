#include <stdio.h>

/*
%c 	character
%d 	decimal (integer) number (base 10)
%e 	exponential floating-point number
%f 	floating-point number
%i 	integer (base 10)
%o 	octal number (base 8)
%s 	a string of characters
%u 	unsigned decimal (integer) number
%x 	number in hexadecimal (base 16)
%% 	print a percent sign
\% 	print a percent sign
*/


// From the bug section in the main pages
// Code such as printf(foo); often indicates a bug, since foo may  contain
// a  % character.  If foo comes from untrusted user input, it may contain
// %n, causing the printf() call to write to memory and creating  a  security hole.


int main(int argc, char const *argv[])
{
  printf("%d\n", argc);
  // printf("%s\n", *argv);
  // printf("%s\n", argv[0]);

   int ch;
   float test = .1283128301823;
   int one;

   // Numbers and Chars. Different format specifier same value
   for( ch = 75 ; ch <= 100; ch++ ) {
      printf("ASCII value = %d, Character = %c\n", ch , ch );
   }

   //Integer
  //  printf('%i', one);

   // Float
   printf("Float: %f\n", test);

   // Octal
   printf("Octal: %o\n", ch);
   // hexadecimal
   printf("hexadecimal: %o\n", ch*2);


  int i;
  for(i=0;i<argc;i++)
  {
    // Strings
    printf("This is argument number %d: %s\n", i, argv[i]);
  }

  // Zero filled
  printf("Zeros %03d\n", 0);

  perror("This is a perror test");

  return 0;
}