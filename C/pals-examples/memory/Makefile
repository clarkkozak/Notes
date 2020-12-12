all: pal malloc debug

pal: pal.c
	$(CC) pal.c -o pal -O0 -Wall -Wextra -pedantic -pedantic-errors

malloc: malloc.c
	$(CC) malloc.c -o malloc -O0 -Wall -Wextra -pedantic -pedantic-errors
	
debug: pal.c
	$(CC) pal.c -o pal.debug -ggdb3

clean-all:
	rm pal pal.debug memory

clean:
	rm pal