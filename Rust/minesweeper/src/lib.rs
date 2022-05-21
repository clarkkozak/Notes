mod minesweeper;
mod random;

use std::cell::RefCell;

use minesweeper::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str); // From browser
}

// WASM is only 1 thread anyone, so this is  okay?
thread_local! {
    // RefCell has "interior mutability"
    // Circumvents the  borrow check and add it to the runtime checker?
    // Adds a bit of  overhead
    static MINESWEEPER: RefCell<Minesweeper> = RefCell::new(Minesweeper::new(10, 10, 15));
}

#[wasm_bindgen(js_name = getState )]
pub fn get_state() -> String {
    MINESWEEPER.with(|ms| ms.borrow().to_string())
}

// Only strings and numbers for WASM; no tuples
#[wasm_bindgen(js_name = openField)]
pub fn open_field(x: usize, y: usize) {
    MINESWEEPER.with(|ms| {
        ms.borrow_mut().open((x, y));
    })
}

// Only strings and numbers for WASM; no tuples
#[wasm_bindgen(js_name = toggleFlag)]
pub fn toggle_flag(x: usize, y: usize) {
    MINESWEEPER.with(|ms| {
        ms.borrow_mut().toggle_flag((x, y));
    })
}
