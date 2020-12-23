#include <stdio.h>

int main()
{
  float fahr, celsius; 
  float upper, lower, step;

  lower = -40;
  upper = 100;
  step = 10;

  celsius = lower;

  printf("%c\t%c\n", 'c', 'f');
  while (celsius <= upper)
  {
    fahr = (celsius * 9.0 / 5.0) + 32;
    printf("%3.0f %6.1f\n", celsius, fahr);
    celsius = celsius + step;
  }
  
  

  return 0;
}
