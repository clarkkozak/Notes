// See Jacob Sorber's "Reverse String" video on YouTube
// https://youtu.be/dcBcgPGIMpo

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void reverse0(char *str) 
{
  int length = strlen(str);
  for (int i=0; i < length /2; i++) {
    char temp = str[i];
    str[i] = str[length-1-i];
    str[length-1-i] = temp;
  }
}

void reverse1(char *str) {
  int length = strlen(str);
  for(int i = 0, j = length - 1; i < j; i++, j--){
      char temp = str[i];
      str[i] = str[j];
      str[j] = temp;
  }
}

void reverse2(const char *s1, char *s2, size_t len) {
  int i, j;
  for(i = len - 1, j = 0; i>=0; i--, j++) 
    s2[j] = s1[i];
  
  s2[j] = '\0';
}

void reverse3(char *str) {
  char *end = str+strlen(str)-1;

  while(str < end) {
    char temp = *str;
    *str = *end;
    *end = temp;
    str++;
    end--;
  }
}

void reverse4(char *str, int length) {
  if (length <= 1) return;

  char tmp = str[0];
  str[0] = str[length - 1];
  str[length-1] = tmp;
  reverse4(str+1, length - 2);
}

char * reverse5(const char *str) {
  int length = strlen(str);
  char *result = malloc(length+1);

  for (int i = 0; i < length; i++){
    result[i] = str[length-1-i];
  }

  result[length] = 0;
  return result;
}

char * reverse6(const char *str) {
  char *result = malloc(strlen(str)+1);
  strcpy(result, str);
  reverse1(result);
  return result;
}


char * myReverse(const char *str) {
  char *newStr = malloc(strlen(str)+1);
  int count = 0;
  int i;

  for (int i = strlen(str) - 1; i >= 0; i--)
  {
    newStr[count] = str[i];
    count++;
  }

  return newStr;
}

// select a random Solutions 

int main(void)
{
  char *str = "test";
  char newstring[500];
  strcpy(newstring, str);
  reverse0(newstring);
  printf("%s\n", newstring);

  reverse1(newstring);
  printf("%s\n", newstring);

  // reverse2(newstring);
  // printf("%s\n", newstring);

  reverse3(newstring);
  printf("%s\n", newstring);

  reverse4(newstring, strlen(newstring));
  printf("%s\n", newstring);
  
  char * yay = reverse5("BOOM");
  printf("%s\n", yay);
  free(yay);

  char * test = reverse6("newstring");
  printf("%s\n", test);
  free(test);

  char * yes = reverse6("hooray malloc");
  printf("%s\n", yes);
  free(yes);
  
  return 1; 
}
