// What if I try to malloc WAY too much memory?
// https://www.youtube.com/watch?v=Fq9chEBQMFE

// A great YouTube videos describing how malloc is used to assign virtual memory depending on it's usage.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ONE_GB (1 << 30)
#define LARGE_NUM 10000L

void virtualMemory()
{
  int count = 0;

  while (1)
  {
    // The Opertering System is lying to you
    // Sureee you can have it (let's see what he does with it)
    // OS doesn't care how much VM you have until you try to use it
    // Parent: "sureee you can build a sailboat. Why don't you draw up some plans?"
    // Child: "ugh real work, nvm" -> doesn't matter how much we assign.
    if (malloc(ONE_GB) == NULL)
    {
      printf("malloc refused after %d GB\n", count);
      return;
    }
    printf("got %d GB\n", ++count);
  }
}

// BE CAREFUL WITH THIS FUNCTION
void settingVirtualMemory()
{
  int count = 0;

  while (1)
  {
    // making this variable available so we can set / use the memory
    int *p = malloc(ONE_GB);
    if (p == NULL)
    {
      printf("malloc refused after %d GB\n", count);
      return;
    }
    memset(p, 1, ONE_GB);
    printf("got %d GB\n", ++count);
  }
}

// BE CAREFUL WITH THIS FUNCTION
void sneakySettingVirtualMemory()
{
  int *blocks[LARGE_NUM];

  // allot to each block
  for (int i = 0; i < LARGE_NUM; i++)
  {
    blocks[i] = malloc(ONE_GB);
    if (blocks[i] == NULL) {
      printf("done at %i\n", i);
      break;
    }
  }

  // attempt to write to each block
  for (int i = 0; i < LARGE_NUM; i++)
  {
    memset(blocks[i], 2, ONE_GB);
    printf("Wrote to %i Gigs\n", i);
  }
}


int main()
{
  virtualMemory();
  // BE CAREFUL WITH THESE FUCTION
  // settingVirtualMemory();
  // sneakySettingVirtualMemory();
  return 0;
}
