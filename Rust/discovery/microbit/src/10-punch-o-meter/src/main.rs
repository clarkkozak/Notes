#![deny(unsafe_code)]
#![no_main]
#![no_std]

use cortex_m_rt::entry;
use heapless::Vec;
use panic_rtt_target as _;
use rtt_target::{rprintln, rtt_init_print};

#[cfg(feature = "v2")]
use microbit::{hal::prelude::*, hal::timer::Timer, hal::twim, pac::twim0::frequency::FREQUENCY_A};

use lsm303agr::{AccelOutputDataRate, AccelScale, Lsm303agr};

#[entry]
fn main() -> ! {
    rtt_init_print!();
    let board = microbit::Board::take().unwrap();

    let i2c = { twim::Twim::new(board.TWIM0, board.i2c_internal.into(), FREQUENCY_A::K100) };

    let mut timer = Timer::new(board.TIMER0);

    let mut sensor = Lsm303agr::new_with_i2c(i2c);
    sensor.init().unwrap();
    sensor.set_accel_odr(AccelOutputDataRate::Hz50).unwrap();
    sensor.set_accel_scale(AccelScale::G16).unwrap();

    let mut buffer: Vec<i32, 32> = Vec::new();

    loop {
        let data = sensor.accel_data().unwrap();
        timer.delay_ms(500_u32);
        buffer.push(data.x).unwrap();
        rprintln!("buffer {:?}", buffer);
    }
}
