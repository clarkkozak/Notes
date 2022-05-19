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

use nb::Error;

#[entry]
fn main() -> ! {
    const THRESHOLD: f32 = 0.5;

    rtt_init_print!();
    let board = microbit::Board::take().unwrap();

    let i2c = { twim::Twim::new(board.TWIM0, board.i2c_internal.into(), FREQUENCY_A::K100) };

    let mut countdown = Timer::new(board.TIMER0);
    let mut timer = Timer::new(board.TIMER1);

    let mut sensor = Lsm303agr::new_with_i2c(i2c);
    sensor.init().unwrap();
    sensor.set_accel_odr(AccelOutputDataRate::Hz50).unwrap();
    sensor.set_accel_scale(AccelScale::G16).unwrap();

    let mut buffer: Vec<i32, 64> = Vec::new();
    let mut max_g = 0.;
    let mut measuring = false;

    loop {
        // Wait till the status is complete
        while !sensor.accel_status().unwrap().xyz_new_data {}

        let g_x = sensor.accel_data().unwrap().x as f32 / 1000.0;

        if measuring {
            match countdown.wait() {
                Err(Error::WouldBlock) => {
                    if g_x > max_g {
                        max_g = g_x;
                    }
                }
                // Countdown is done
                Ok(_) => {
                    rprintln!("Max acceleration: {}g", max_g);

                    // Rest
                    max_g = 0.;
                    measuring = false;
                }
                Err(Error::Other(_)) => {
                    unreachable!();
                }
            }
        } else if g_x > THRESHOLD {
            rprintln!("Start!");
            measuring = true;
            max_g = g_x;

            // The documentation notes that the timer works at a frequency
            // of 1 Mhz, so in order to wait for 1 second we have to
            // set it to 1_000_000 ticks.
            countdown.start(1_000_000_u32);
        }
    }
}
