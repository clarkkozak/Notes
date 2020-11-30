all: pal debug

pal: pal.c
	$(CC) pal.c -o pal -O0 -Wall -Wextra -pedantic -pedantic-errors

debug: pal.c
	$(CC) pal.c -o pal-debug -ggdb3

clean-all:
	rm pal pal-debug

clean:
	rm pal