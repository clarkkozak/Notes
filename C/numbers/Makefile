all: math debug

math: math.c
	$(CC) math.c -o math -O0 -Wall -Wextra -pedantic -pedantic-errors

debug: math.c
	$(CC) math.c -o math.debug -ggdb3

clean-all:
	rm math math.debug

clean:
	rm math