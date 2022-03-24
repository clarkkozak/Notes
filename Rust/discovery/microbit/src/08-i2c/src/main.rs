#![deny(unsafe_code)]
#![no_main]
#![no_std]

#[allow(unused_imports)]
use micromath::F32Ext;

use cortex_m_rt::entry;
use panic_rtt_target as _;
use rtt_target::rtt_init_print;

use microbit::{
    display::blocking::Display, hal::prelude::*, hal::timer::Timer, hal::twim,
    pac::twim0::frequency::FREQUENCY_A,
};

use lsm303agr::{AccelOutputDataRate, Lsm303agr, Measurement};

#[entry]
fn main() -> ! {
    rtt_init_print!();
    let board = microbit::Board::take().unwrap();

    let i2c = { twim::Twim::new(board.TWIM0, board.i2c_internal.into(), FREQUENCY_A::K100) };

    let mut timer = Timer::new(board.TIMER0);

    let mut display = Display::new(board.display_pins);

    let full_board = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ];

    // Code from documentation
    let mut sensor = Lsm303agr::new_with_i2c(i2c);
    sensor.init().unwrap();
    sensor.set_accel_odr(AccelOutputDataRate::Hz50).unwrap();
    loop {
        if sensor.accel_status().unwrap().xyz_new_data {
            let data = sensor.accel_data().unwrap();
            let acceleration_in_g = get_overall_acceleration(data);

            if acceleration_in_g > 2000.0 {
                display.show(&mut timer, full_board, 500);
            }
        }
    }
}

fn get_overall_acceleration(data: Measurement) -> f32 {
    let x = data.x.pow(2);
    let y = data.y.pow(2);
    let z = data.z.pow(2);
    let agg = (x + y + z) as f32;
    return agg.abs().sqrt();
}
