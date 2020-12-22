#include <stdio.h>

// Exercise 1-8
int main() {
  int c, nl, tabs, blanks;

  // I don't fully understand why I have to initals these
  nl = tabs = blanks = 0;
  // Oh I think I know why. Otherwise the compiler thinks they are undefined
  // Therefore, if they aren't incremented the compiler guesses the largest or smallest integer
     
  // Here what pal says:
  // Oh Jesus. Always initialize your variables on the stack or they'll be garbage random values from memory
  // Generally we space things out, one declaration and initialization per line. 
  // And don't declare all your variables at the top despite the examples... 
  // starting in C99 you can declare and initialize wherever you want, so right before using them is best
  // In this case you're good since it's right before they're used in the while, but yes init to 0
  // And I'd recommend unsigned since you're never gonna have a negative count, 
  // or even better, size_t which is designed to hold sizes or counts of things 

  while ((c = getchar()) != EOF) {
    if (c == '\n') 
      nl++; 
    if (c == '\t') 
      tabs++;      
    if (c == ' ') 
      blanks++;     
  }
     
  printf("%d\n", nl);
  printf("%d\n", tabs);
  printf("%d\n", blanks);

  return 0;
}
