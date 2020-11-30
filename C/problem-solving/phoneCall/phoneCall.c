#include <stdio.h>

/*

Some phone usage rate may be described as follows:

    first minute of a call costs min1 cents,
    each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
    each minute after 10th costs min11 cents.

You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
*/

int phoneCall(int min1, int min2_10, int min11, int s) {
  int minutes = 0;
  int balance = s;
  
  // first minue = min1 cents
  if (balance - min1 >= 0) {
    balance -= min1;
    minutes++; 
  }
  
  if ((balance - min2_10) * 9 > 0 ) {
    if (balance / 9 > 0) {
      minutes += 9;
      balance -= min2_10 * 9;
    } else {
      minutes = balance / min2_10;
       balance -= min2_10 * (balance / min2_10);
    }
  }
  
  if (balance / min11 >= 0) {
    minutes += balance / min11;
  }
  
  return minutes; 
}


int main(int argc, char const *argv[])
{
  int mins = phoneCall(1, 2, 1, 1112);
  printf("%d", mins);
  return 0;
}
