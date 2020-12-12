all: kilo debug

kilo: kilo.c
	$(CC) kilo.c -o kilo -O0 -Wall -Wextra -pedantic -pedantic-errors

debug: kilo.c
	$(CC) kilo.c -o kilo.debug -ggdb3

clean-all:
	rm kilo kilo.debug

clean:
	rm kilo