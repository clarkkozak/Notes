fn main() {
    let n = 5;
    let mut counter = 1;
    let mut tmp = 1;
    let fact = loop {
        if counter == n {
            break tmp;
        }
        counter += 1;
        tmp *= counter;
    };
    println!("{}", fact);
    assert_eq!(120, fact);
}
