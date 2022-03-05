fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}


const I_AM_A_CONSTANT: u32 = 42;

// potentially be able to change this
// HOWEVER, that's a data race
static mut TRUTH: bool = I_AM_A_CONSTANT == 42;


fn main() {
    let s = "Hello";
    let i = 42;
    let b = true;
    let c = 'c';
    let d = String::from("test");

    println!("Can we print types? Yes!");
    println!("---------------");
    print_type_of(&c);
    print_type_of(&b);
    print_type_of(&s); // &str
    print_type_of(&i); // i32:
    print_type_of(&main); // playground::main
    print_type_of(&print_type_of::<i32>); // playground::print_type_of<i32>
    print_type_of(&{ || "Hi!" }); // playground::main::{{closure}}
    print_type_of(&d); 
    
    println!();
    println!("Variables, Constants, and unsafe");
    println!("---------------");
    let x = 5;
    println!("{}", x);
    let x = true; 
    println!("{}", x);
    
    unsafe {
        println!("Is I_AM_A_CONSTANT_42? {}", TRUTH);
        TRUTH = false;
        println!("{} or {}", I_AM_A_CONSTANT == 42, TRUTH);
    }
    
    
    // Type Casting
    let t_x: u32 = 10;
    let t_y = 8u8;
    // let t_z: usize = t_x + t_y; // This fails. It DOES NOT like you casting things like this
                // ^^^ expected `u32`, found `u8`
                // help: you can convert a `u32` to a `usize` and panic if the converted value doesn't fit
    
    let t_w: usize = t_x as usize + t_y as usize;
    let t_v: usize = (t_x + (t_y as u32)) as usize;
    
    println!("{},{}", t_w, t_v);
    
    println!();
    println!("Compound Types");
    println!("---------------");
    let arr: [i32; 5] = [1, 2, 3, 4, 5]; 
    let arr_1: [u8; 8] = [1u8; 8];
    let compound_x = arr[1];
    
    let tup = (1, true, 'h');
    let inte = tup.0;
    let boole = tup.1;
    let chara = tup.2;
    
    println!("{:?}, {:?} , {:?}, {:?}, {}, {}, {}", arr, arr_1, compound_x, tup, inte, boole, chara);

    println!();
    println!("Structs");
    println!("---------------");
    let tony = User {
     active: true,
     username: String::from("Tony"),
     email: String::from("Oohbaby42@haskell.org"),
     sign_in_count: 12345
    };
    
    println!("{} has logged in {} times!", tony.username, tony.sign_in_count);
    
    if tony.active == true {
      println!("Email {} is active!", tony.email);
    }
    
    // Structs are fixed sized in the stack
    // The data can be variable in a heap
    // Are structs mutable? You have to mark it as mutable!
    // A mutable reference to the variable; in the fields they can be mutated
    
    
    // Tuple Struct
    struct RBGColor(u8, u8, u8);
    let color = RBGColor(183, 65, 14); // color of rust
    println!("Ths color of rust is: R: {}, G: {}, B {}", color.0, color.1, color.2);
    
    // Enums
    println!();
    println!("Enums");
    println!("---------------");
    
    
    enum Color {
    //  you can number enums if you'd like
        // RGB(u8, u8, u8),
        // Named(String),
        HexRBG(u32),
    }
    // let e_color = Color::Named(String::from("Rust"));
    // let e_color = Color::RGB(183, 65, 14);
    let e_color = Color::HexRBG(12009742);
     
    match e_color {
        // Color::RGB(r, g, b) => println!("R:{}, G:{}, B:{}", r, g, b),
        // Color::Named(s) => println!("{}", s),
        Color::HexRBG(v) => println!("{:#06x}", v) 
    }
    
    println!();
    println!("Control Flow");
    println!("---------------");
    
    
    println!();
    println!("If Statements");
    println!("---------------");
    
    let if_x = 42;
    if if_x % 2 == 2 {
    // Why not macros in C++?
    // Well debugging is really difficult 
    // Rust has better error handling?
    // Check the HTML formatter macro in the 
        println!("The answer is an even number");
    } else {
        println!("The answer is an odd number");
    }
    
    let if_y = if if_x % 2 == 0 {
        if_x / 2
    } else {
        3 * if_x + 1
    };
    
    println!("{}", if_y);

    // Rust has a unit type!
    let unit_x: () = if true {};
    println!("{:?}", unit_x);
    // Unit type is size 0
    // Don't take up any space
    // I am NOTHING
    // Hashset? 2nd value is nothing?
    // Very fast? Hash set gets optimized?
    // All function that don't return a type return a unit type
  
    println!();
    println!("While Statement");
    println!("---------------");
    
    // let mut while_x = 42;
    // let mut biggest_num = while_x;
    // while while_x != 1 {
    //     while_x = if while_x % 2 == 0 { while_x / 2 } else { 3 * while_x + 1 };
    //     biggest_num = biggest_num.max(while_x)
    // }
    
    // println!("{}", biggest_num);
    // assert_eq!(64, biggest_num);
    
    println!();
    println!("Loop Statement");
    println!("---------------");

    let fact_n = 5;
    let mut counter = 1;
    let mut tmp = 1;
    let fact = loop {
        if counter == fact_n {
            break tmp
        }
        counter += 1;
        tmp *= counter;
    };
    println!("{}", fact);

    println!();
    println!("For loop");
    println!("---------------");

    // i is NOT mutated?!
    // It is an iterator! It's a functional program idea on how to traverse a data structure
    for i in 1..=15 {
        let fizz = i % 3 == 0;
        let buzz = i % 5 == 0;
        print!("{}: ", i);
        if fizz {
            print!("fizz");
        } 
        if buzz {
            print!("buzz")
        }
        println!()
    }
    
    let iter_arr = [8u8; 5];
    let mut sum = 0;
    for i in iter_arr.into_iter() {
        sum+= i;
    }
    println!("{}", sum);
    // better way to do this!
    // Yes! folding!
    
        println!();
    println!("For loop");
    println!("---------------");
    let match_age: i32 = 42;
    // You MUST use all the cases, Rust will yell at you
    match match_age {
        0..=17 => println!("No beer"),
        120.. => println!("Are you sure you want beer?"),
        _ => println!("Yes beer. but don't do it") // eh, I don't care, wild card
    }
    // Can't use floating point numbers in match arms. You can do ranges, but not the specifics like PI
    
    let another_age: i32 = 42;
    let can_buy_alcohol = match another_age {
        0..=17 | 120.. => false, // or pattern match
        _ => true
    };
    assert!(can_buy_alcohol);
    
    println!();
    println!("Functions");
    println!("---------------");
    print_me(42);
    assert_eq!(12, mult(3, 4));    

    fn print_me(x: i32) {
        println!("{}", x);
    }
    
    fn mult(x: i32, y: i32) -> i32 {
        x * y
    }
    
    // Recursive
    // Must return, must be the same types
    fn fib_r(n: u32) -> u32 {
        match n {
            0 | 1 => n,
            _ => fib_r(n - 1) + fib_r(n - 2)
        }
    }
    
    assert_eq!(55, fib_r(10));
    
    // Higher order functions
    fn double(x: i32) -> i32 {
        x * 2
    }
    
    let d_arr = [1 , 2 ,3, 4];
    assert_eq!([2, 4, 6, 8], d_arr.map(double));
    
    // Closures 

    let c_double = |x| x * 2;
    assert_eq!(8, c_double(4)); // infers the types that you are using, so you don't need to be explicit about the type
    
    let s_arr = [1, 2, 3];
    assert_eq!([2, 4, 6], s_arr.map(|x| x * 2));
    
    println!();
    println!("Problem with Functions");
 
    // DON'T DO THIS  
    fn sign_in_user(mut user: User) -> User {
        user.sign_in_count += 1;
        user.active = true;
        user
    }
    
    // Re-defining a variable
    let tony = sign_in_user(tony); // don't do this. it's mutating and reassigning your values 
    assert_eq!(12346, tony.sign_in_count);
    assert!(tony.active);
    
    fn length_of_username(user: User) -> usize {
        user.username.len()
    }
    
    // This doesn't compile?
    // You can't use it again
    let l = length_of_username(tony); // if you used tony here
    println!("{}", l);
    assert_eq!(4, 1);
    assert!(tony.active) // you can't use tony here
    
}

struct User {
    active: bool,
    username: String, // String is a struct, "an object"
    email: String,
    sign_in_count: u64,
}
