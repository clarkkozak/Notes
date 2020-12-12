all: strncopy debug

strncopy: strncopy.c
	$(CC) strncopy.c -o strncopy -O0 -Wall -Wextra -pedantic -pedantic-errors

debug: strncopy.c
	$(CC) strncopy.c -o strncopy.debug -ggdb3

clean-all:
	rm strncopy strncopy.debug

clean:
	rm strncopy