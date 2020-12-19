all: metronome debug

metronome: metronome.c
	$(CC) metronome.c -o metronome 
	# -O0 -Wall -Wextra -pedantic -pedantic-errors

debug: metronome.c
	$(CC) metronome.c -o metronome.debug -ggdb3

clean-all:
	rm metronome metronome.debug

clean:
	rm metronome