#include <stdio.h>

int main()
{
  double nc; // to cope with even BIGGER numbers use a double (double precision float)
  
  for (nc = 0; getchar() != EOF; ++nc)
    ; // null statement. Put on another line to make it visible  

  printf("%.0f\n", nc); // printf uses %f for both float and double; 
  // %.0f suppresses the printing of the decimal point and the fraction part, which is zero.

  // Note that both for and while loop will not affect the edge case of 0
  // If there is nothing to do, nothing is done, even if that means never going through the loop body.
  // Programs should act intelligently when given zero-length input.
  
  return 0;
}
