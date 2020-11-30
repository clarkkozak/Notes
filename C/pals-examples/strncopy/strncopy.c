#include "stdio.h"
#include "stdlib.h"
#include "string.h"

int main(int argc, char const *argv[])
{
  const char * const fromBuf = "test";

  char toBuf[129] = {0};
  
  printf("%s\n", toBuf);

  strncpy(toBuf, fromBuf, sizeof(toBuf - 1));

  printf("%s\n", toBuf);

  return EXIT_SUCCESS;
}
