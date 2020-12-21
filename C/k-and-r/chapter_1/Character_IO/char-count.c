#include <stdio.h>
int main()
{
  long nc; // long integers are at least 32-bits
  // Although on some machines, int and long are the same size,
  // on others an int is 16 bits, with a maximum value of 32767,
  // and it would take relatively little input to overflow an int counter.


  nc = 0;
  while(getchar() != EOF) 
    ++nc; // a new operator, ++ , which means increment by one. can be prefix ++nc or posfix ++nc

  printf("%ld\n", nc);   // %ld tells printf that the corresponding argument is a long integer.

  return 0;
}
