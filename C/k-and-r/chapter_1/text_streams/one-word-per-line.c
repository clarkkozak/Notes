/* Exercise 1-12. Write a program that prints its input one word per line. */
#include <stdio.h>

#define IN 1 /* Inside a word */
#define OUT 2 /* Outside a word */

int main()
{
  int c;
  int state = OUT;

  /* There is probably a cleaner way, yet I'm satisfied with this. */
  while ((c = getchar()) != EOF) {
    if (state == IN) {
      putchar(c);
    } 

    if (c == ' ' || c == '\n' || c == '\t') {
      putchar('\n');
      state = OUT;
    } else if (state == OUT) {
      putchar(c);
      state = IN;
    }
  }

  putchar('\n');

  return 0;
}
