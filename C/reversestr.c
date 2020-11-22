#include <stdio.h>
#include <string.h>

int main(void)
{
  char str[] = "this is a test";
  char newStr[strlen(str)];  
  int count = 0;
  int i;

  for (int i = strlen(str) - 1; i >= 0; i--)
  {
    newStr[count] = str[i];
    count++;
  }

  printf("%s", newStr);
  return 1; 
}
