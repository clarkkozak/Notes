#include "stdio.h"
#include "stdlib.h"
#include "string.h"

// How to "safely" work with strings in C
int main()
{

  // You also might have noticed that I did a const char * const. 
  // This means not only are the contents constant but the pointer itself also can't be changed.
  // I actually forget which const you are removing by removing the one after the *, but I think it's the pointer constness 

  const char * const fromBuf = "test";

  // That braced 0 means explicitly write the first byte as the value 0, 
  // then the rest of it also gets zeroed,
  // which is implied when you don't supply any further comma separated values.
  // Shorthand way to init the array to 0s

  char toBuf[129] = {0};
  char toBuf2[129] = {0};
  
  printf("%s\n", toBuf);

  // The sizeof will give you 129 without the -1.
  // You need the -1 because if you write a string to the whole buffer,
  // the last byte will no longer be a null byte, 
  // this the computer could go and print out all kinds of garbage next to that char array in memory until it hits the next null byte
  
  strncpy(toBuf, fromBuf, sizeof(toBuf - 1));

  printf("%s\n", toBuf);
  
  // snprintf doesn't work this way.
  // It always writes the last byte into the string as a null so you just give it the max buffer size directly and it's safe
  snprintf(toBuf2, sizeof(toBuf2), toBuf);
  printf("%s\n", toBuf2);


  // As you can see the extremely tiny details matter a lot in this language. 
  // It's either a form of hell or a thing of beauty for perfectionists like us lol
  return EXIT_SUCCESS;
}
