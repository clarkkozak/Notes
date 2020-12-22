#include <stdio.h>

// Exercise 1-8
int main() {
  //
  int c;
  size_t nl = 0;
  size_t tabs = 0;
  size_t blanks = 0;

  // Here what pal says:
  // Oh Jesus. Always initialize your variables on the stack or they'll be garbage random values from memory
  // Generally we space things out, one declaration and initialization per line. 
  // And don't declare all your variables at the top despite the examples... 
  // starting in C99 you can declare and initialize wherever you want, so right before using them is best
  // In this case you're good since it's right before they're used in the while, but yes init to 0
  // And I'd recommend unsigned since you're never gonna have a negative count, 
  // or even better, size_t which is designed to hold sizes or counts of things 

  while ((c = getchar()) != EOF) {
    // pre-increment instead post. 
    // postincrement without optimization creates a copy of the variable.
    // if you're not assigning anything while using the increment operator,
    //    it should just be preincrement
    // https://stackoverflow.com/a/2020205/2176143 for more reading
    if (c == '\n') 
      ++nl; 
    if (c == '\t') 
      ++tabs;      
    if (c == ' ') 
      ++blanks;     
  }
     
  printf("%d\n", nl);
  printf("%d\n", tabs);
  printf("%d\n", blanks);

  return 0;
}
