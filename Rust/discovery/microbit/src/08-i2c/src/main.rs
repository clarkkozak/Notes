#![no_main]
#![no_std]

use core::str;

use cortex_m_rt::entry;
use panic_rtt_target as _;
use rtt_target::{rprintln, rtt_init_print};

#[cfg(feature = "v1")]
use microbit::{
    hal::twi,
    hal::uart,
    hal::uart::{Baudrate, Parity},
    pac::twi0::frequency::FREQUENCY_A,
};

#[cfg(feature = "v2")]
use microbit::{
    hal::twim,
    hal::uarte,
    hal::uarte::{Baudrate, Parity},
    pac::twim0::frequency::FREQUENCY_A,
};

use core::fmt::Write;
use heapless::Vec;
use lsm303agr::{AccelOutputDataRate, Lsm303agr, MagOutputDataRate};
use microbit::hal::prelude::*;
use nb::block;

#[cfg(feature = "v2")]
mod serial_setup;
#[cfg(feature = "v2")]
use serial_setup::UartePort;

#[entry]
fn main() -> ! {
    rtt_init_print!();
    let board = microbit::Board::take().unwrap();

    #[cfg(feature = "v1")]
    let mut serial = {
        uart::Uart::new(
            board.UART0,
            board.uart.into(),
            Parity::EXCLUDED,
            Baudrate::BAUD115200,
        )
    };

    #[cfg(feature = "v2")]
    let mut serial = {
        let serial = uarte::Uarte::new(
            board.UARTE0,
            board.uart.into(),
            Parity::EXCLUDED,
            Baudrate::BAUD115200,
        );
        UartePort::new(serial)
    };

    #[cfg(feature = "v1")]
    let i2c = { twi::Twi::new(board.TWI0, board.i2c.into(), FREQUENCY_A::K100) };

    #[cfg(feature = "v2")]
    let i2c = { twim::Twim::new(board.TWIM0, board.i2c_internal.into(), FREQUENCY_A::K100) };

    let mut sensor = Lsm303agr::new_with_i2c(i2c);
    sensor.init().unwrap();
    sensor.set_accel_odr(AccelOutputDataRate::Hz50).unwrap();
    sensor.set_mag_odr(MagOutputDataRate::Hz50).unwrap();
    let mut sensor = sensor.into_mag_continuous().ok().unwrap();

    loop {
        let mut buffer: Vec<u8, 32> = Vec::new();

        loop {
            let byte = block!(serial.read()).unwrap();

            if byte == 13 {
                break;
            }

            if buffer.push(byte).is_err() {
                write!(serial, "error: buffer full\r\n").unwrap();
                break;
            }

            write!(serial, "{}\r\n", byte as char).unwrap();
        }

        if str::from_utf8(&buffer).unwrap().trim() == "a" {
            while !sensor.accel_status().unwrap().xyz_new_data {}

            let data = sensor.accel_data().unwrap();
            write!(
                serial,
                "Accelerometer: x {} y {} z {}\r\n",
                data.x, data.y, data.z
            )
            .unwrap();

            rprintln!("Accelerometer: x {} y {} z {}", data.x, data.y, data.z);
        } else if str::from_utf8(&buffer).unwrap().trim() == "m" {
            while !sensor.mag_status().unwrap().xyz_new_data {}

            let data = sensor.mag_data().unwrap();
            write!(
                serial,
                "Magnetometer: x {} y {} z {}\r\n",
                data.x, data.y, data.z
            )
            .unwrap();

            rprintln!("Magnetometer: x {} y {} z {}", data.x, data.y, data.z);
        } else {
            write!(serial, "error: command not detected\r\n").unwrap();
        }
    }
}
