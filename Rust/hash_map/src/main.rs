use std::collections::HashMap;

fn main() {
    let magazine = "two times three is not four"
        .split_whitespace()
        .collect::<Vec<&str>>();
    let note = "two times two is four"
        .split_whitespace()
        .collect::<Vec<&str>>();

    let mut repo: HashMap<&str, i32> = HashMap::new();
    let mut sentence: HashMap<&str, i32> = HashMap::new();

    for word in magazine {
        *repo.entry(word).or_insert(0) += 1;
    }

    for word in note {
        *sentence.entry(word).or_insert(0) += 1;
    }

    let mut res = true;

    for (word, count) in sentence {
        match repo.get(word) {
            Some(value) => {
                if count > *value {
                    res = false
                }
            }
            None => res = false,
        }
    }

    println!("{}", res);
}
