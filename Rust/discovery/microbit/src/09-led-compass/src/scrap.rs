6use core::f32::consts::PI;

#[derive(Debug)]
enum Direction {
    North,
    NorthEast,
    East,
    SouthEast,
    South,
    SouthWest,
    West,
    NorthWest,
}

fn main() {
    let theta = -2.748893572;

    // Figure out the direction based on theta
    let dir = if theta < -7. * PI / 8. {
        Direction::East
    } else if theta < -5. * PI / 8. {
        Direction::SouthEast
    } else if theta < -3. * PI / 8. {
        Direction::South
    } else if theta < -PI / 8. {
        Direction::SouthWest
    } else if theta < PI / 8. {
        Direction::West
    } else if theta < 3. * PI / 8. {
        Direction::NorthWest
    } else if theta < 5. * PI / 8. {
        Direction::North
    } else if theta < 7. * PI / 8. {
        Direction::NorthEast
    } else {
        Direction::East
    };

    let direction = match theta {
        x if x > 7. * PI / 8. && x <= PI => Direction::East,
        x if x > -7. * PI / 8. && x <= -5. * PI / 8. => Direction::SouthEast,
        x if x > -5. * PI / 8. && x <= -3. * PI / 8. => Direction::South,
        x if x > -3. * PI / 8. && x <= -PI / 8. => Direction::SouthWest,
        x if x > -PI / 8. && x <= PI / 8. => Direction::West,
        x if x > PI / 8. && x <= 3. * PI / 8. => Direction::NorthWest,
        x if x > 3. * PI / 8. && x <= 5. * PI / 8. => Direction::North,
        x if x > 5. * PI / 8. && x <= 7. * PI / 8. => Direction::NorthEast,
        _ => Direction::East,
    };

    println!("{:?}", dir);
    println!("{:?}", direction);
}

