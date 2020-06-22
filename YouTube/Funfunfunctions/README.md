[Unit testing: How to get your team started - FunFunFunction #2](https://www.youtube.com/watch?v=TWBDa5dqrl8)

Bugs suck for everyone. Don't write code with bugs in it.

1. One simple rule: No commits, without tests.

- If a commit does not have a unit test, it does not go into a repository

2. Teach with mandatory code review

- Unit testing = flossing
- Mandatory code review to teach each other how to unit test
  - break the tests >:D
    - delete a line and see if the test still passes

3. Unbraid your code

- When you first start writing unit tests, you will run into huge f$*@&@%$ wall.
- It's sound like this: "but this code is too complex to unit test!"

- Latin:

  - complex = braided
  - simplex = separate, i.e. units

- Your code needs to be in units to unit tests

- We have design patterns to modularize our code:
  injection
  - if we have coupled code, we can inject units into each other
  - this way we can separate the units to a testable size, and still test the behavior
  - Easier to mock
    facade
  - we are not testing the 3rd party API, mocking those would suck
    - we only are testing one part of the 3rd party API
  - Encapsulate the 3rd party API in a facade; to then have simple method
