#include <stdio.h>

int main(int argc, char const *argv[])
{
  printf("%d\n", argc);
  printf("%s\n", *argv);
  printf("%s\n", argv[0]);
  return 0;
}