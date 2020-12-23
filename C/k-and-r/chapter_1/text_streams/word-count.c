// This is a bare-bones version of the UNIX program wc .
#include <stdio.h>

#define IN 0  // Inside a word
#define OUT 1 // Outside a word

// count lines, words, and characters in input

int main(int argc, char const *argv[])
{

  // I'm differing from the K+R example with initalizing on different lines...
  // According to Pal this is what the cool kids are doing

  int c;
  int nl = 0;      // number of lines
  int nw = 0;      // number of words
  int nc = 0;      // number of chars
  int state = OUT; // state whether you are in or out of a word

  while ((c = getchar()) != EOF)
  {
    ++nc;
    if (c == '\n')
      ++nl;
    if (c == ' ' || c == '\n' || c == '\t')
      state = OUT;
    else if (state == OUT) {
      state = IN;
      ++nw;
    }
  }

  printf("%d %d %d \n", nl, nw, nc);

  return 0;
}

// We prefer the symbolic constants IN and OUT to the literal values 1 and 0 because they make the program more readable. 
// In a program as tiny as this, it makes little difference, but in larger programs
// the increase in clarity is well worth the
// modest extra effort to write it this way from the beginning. 
// You'll also find that it's easier to make extensive changes in programs where 
// magic numbers appear only as symbolic constants.

// Exercise 1-11. 
// How would you test the word count program? 
// What kinds of input are most likely to uncover bugs if there are any?
// Seems like the tests past!

// My answers:
// Special characters &#(!*@#), brackets, extended ASCII, an empty file