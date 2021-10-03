use assert_cmd::Command;
use predicates::prelude::*;
use std::fs;

type TestResult = Result<(), Box<dyn std::error::Error>>;

#[test]
fn runs() -> TestResult {
  let mut cmd = Command::cargo_bin("echor")?;
  cmd.arg("hello").assert().success();
  Ok(())
}

#[test]
fn dies_no_args() -> TestResult {
  let mut cmd = Command::cargo_bin("echor")?;
  cmd.assert()
    .failure()
    .stderr(predicate::str::contains("USAGE"));
  Ok(())
}

#[test]
fn hello1() -> TestResult {
  let out_file = "tests/expected/hello1.txt";
  let expected = fs::read_to_string(out_file)?;
  let mut cmd = Command::cargo_bin("echor")?;
  cmd.arg("Hello there").assert().success().stdout(expected);
  Ok(())
}

#[test]
fn hello2() -> TestResult {
  let expected = fs::read_to_string("tests/expected/hello2.txt")?;
  let mut cmd = Command::cargo_bin("echor")?;
  cmd.args(vec!["Hello", "there"])
  .assert()
  .success()
  .stdout(expected);
  Ok(())
}