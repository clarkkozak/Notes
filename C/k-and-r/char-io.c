// EOF is an integer defined in <stdio.h>
#include <stdio.h>

int main()
{
  // We must declare c to be a type big enough to hold any value that getchar returns. 
  // We can't use char since c must be big
  // enough to hold EOF in addition to any possible char
  // Therefore we use `int`
  int c;

  // A *text stream* is a sequence of characters divided into lines; 
  // each line consists of zero or more characters followed by a newline character. 
  // It is the responsibility of the library to make each input or output stream confirm this model;
  // the C programmer using the library need not worry about how lines are represented outside the program.


  // getchar reads the next input character from a text stream and returns that as its value.
  // EOF ,for ``end of file''.
  while((c = getchar()) != EOF) {
    // prints the contents of the integer variable c as a character, usually on the screen.
    // putchar(c);
    // printf("%d\n", c != EOF); // Exercise 1-6
  }
    // printf("%d\n", c != EOF); // Exercise 1-6


  // printf("%x\n", EOF); // Exercise 1-7
  // printf("%o\n", EOF); // Exercise 1-7
  // printf("%f\n", EOF); // Exercise 1-7
  // printf("%c\n", EOF); // Exercise 1-7

  return 0;
}
