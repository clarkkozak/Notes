mod minesweeper;
mod random;

use minesweeper::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str); // From browser
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name)); // Use it in Rust code..?
}
