#![no_main]
#![no_std]

use core::fmt::Write;
use cortex_m::prelude::_embedded_hal_serial_Write;
use cortex_m_rt::entry;
use heapless::Vec;
use panic_rtt_target as _;
use rtt_target::{rprint, rprintln, rtt_init_print};

use microbit::{
    hal::prelude::*,
    hal::uarte,
    hal::uarte::{Baudrate, Parity},
};

mod serial_setup;
use serial_setup::UartePort;

#[entry]
fn main() -> ! {
    rtt_init_print!();
    let board = microbit::Board::take().unwrap();

    let mut serial = {
        let serial = uarte::Uarte::new(
            board.UARTE0,
            board.uart.into(),
            Parity::EXCLUDED,
            Baudrate::BAUD115200,
        );
        UartePort::new(serial)
    };

    // A buffer with 32 bytes of capacity
    let mut buffer: Vec<u8, 32> = Vec::new();
    loop {
        let byte = nb::block!(serial.read()).unwrap();

        match buffer.push(byte) {
            Ok(_) => {
                rprint!("{}", byte as char);
            }
            Err(_) => {
                rprintln!("Buffer cleared. 32 chars or less please");
                buffer.clear();
            }
        }

        if byte == 13 {
            rprintln!("\nYou pressed enter");

            loop {
                match buffer.pop() {
                    Some(byte) => nb::block!(serial.write(byte)).unwrap(),
                    None => {
                        nb::block!(serial.write(byte)).unwrap();
                        buffer.clear();
                        break;
                    }
                }
            }
        }
    }
}
