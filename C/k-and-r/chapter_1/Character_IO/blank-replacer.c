#include <stdio.h>


// Exercise 1-9
int main()
{
  int c, pChar;

  while ((c = getchar()) != EOF) {
    if (pChar == ' ' && c == ' ') {
      continue;
    } else {
      putchar(c);
      pChar = c;
    }
  }
  printf('\n');

  return 0;
}
