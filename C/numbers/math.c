#include <stdio.h>
#include <math.h>

int main()
{
  double bigNum;
  
  bigNum = pow(1234, 50);

  printf("%G\n", bigNum);

  return 0;
}
