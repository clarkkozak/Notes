pub fn reply(message: &str) -> &str {
    let msg = message.trim();

    if msg.is_empty() {
        return "Fine. Be that way!";
    }

    let is_alpha = msg.chars().any(char::is_alphabetic);

    let is_all_caps = msg == msg.to_uppercase();

    let is_question = msg.ends_with('?');

    if is_all_caps && is_question && is_alpha {
        "Calm down, I know what I'm doing!"
    } else if is_question {
        "Sure."
    } else if is_all_caps && is_alpha {
        "Whoa, chill out!"
    } else {
        "Whatever."
    }
}
