mod random;
use random::random_range;

use core::fmt;
use std::{
    collections::HashSet,
    fmt::{Display, Write},
};

pub type Position = (usize, usize);

pub enum OpenResult {
    Mine,
    NoMine(u8), // only 8, save space
}

#[derive(Debug)] // Needed to write tests?
pub struct Minesweeper {
    width: usize,
    height: usize,
    open_fields: HashSet<Position>,
    mines: HashSet<Position>, // Not an optimal data structure
    flagged_fields: HashSet<Position>,
}

impl Display for Minesweeper {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        // Iterate over board
        for y in 0..self.height {
            for x in 0..self.width {
                // Get board position
                let pos = (x, y);

                // If the board position is closed, display a purple square
                if !self.open_fields.contains(&pos) {
                    f.write_str("🟪 ")?; // Return result, must catch
                }
                // If the position is open and contains a mine, display a bomb
                else if self.mines.contains(&pos) {
                    f.write_str("💣 ")?;
                }
                // If the position is open and not a mine, display the number of neighboring mines
                else {
                    write!(f, " {} ", self.neighboring_mines(pos))?;
                }
            }

            f.write_char('\n')?; // Return result, must catch
        }
        Ok(())
    }
}

impl Minesweeper {
    // Constructor?
    pub fn new(width: usize, height: usize, mine_count: usize) -> Minesweeper {
        Minesweeper {
            width,
            height,
            open_fields: HashSet::new(),
            mines: {
                let mut mines = HashSet::new();

                // Random insert mines into the field
                // Ran when initialized
                while mines.len() < mine_count {
                    mines.insert((random_range(0, width), random_range(0, height)));
                }

                mines
            },
            flagged_fields: HashSet::new(),
        }
    }

    // Neighbor Iterator
    // By returning an iterating, we save memory?
    // and make the code more module
    pub fn iter_neighbors(&self, (x, y): Position) -> impl Iterator<Item = Position> {
        let width = self.width;
        let height = self.height;

        // Go through each neighboar of the provided position
        (x.max(1) - 1..=(x + 1).min(width - 1))
            .flat_map(move |i| (x.max(y) - 1..=(y + 1).min(height - 1)).map(move |j| (i, j)))
            .filter(move |&pos| pos != (x, y))
    }

    // Find the neighboring mines
    pub fn neighboring_mines(&self, pos: Position) -> u8 {
        self.iter_neighbors(pos)
            .filter(|pos| self.mines.contains(pos))
            .count() as u8
    }

    // Action: Open the provided position
    pub fn open(&mut self, position: Position) -> OpenResult {
        self.open_fields.insert(position);

        let is_mine = self.mines.contains(&position);

        if is_mine {
            OpenResult::Mine
        } else {
            OpenResult::NoMine(0)
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::Minesweeper;

    #[test]
    fn test() {
        let mut ms = Minesweeper::new(10, 10, 20);

        ms.open((5, 5));

        println!("{}", ms);
    }
}
