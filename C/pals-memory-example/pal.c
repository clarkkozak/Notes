#include <stdlib.h>
#include <stdio.h>

int main(void)
{
    int *intPointer = malloc(sizeof(int));
    if (intPointer == NULL) {
        perror("Failed to allocate memory");
        return EXIT_FAILURE;
    }

    printf("pointer created at memory address %p "
           "with initial value %d\n",
           (void *)intPointer, *intPointer);

    *intPointer = 5;
    printf("The size of integer is %zu\n", sizeof(int));
    printf("now that address points to the value of %d\n",
           *intPointer);

    // dealloc'd or else we'd have a memory leak
    free(intPointer);
    return EXIT_SUCCESS;
}