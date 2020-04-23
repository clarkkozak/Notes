## Lesson 6.

### Steps
  - Set up a CRA app
  - Create a failing test in src/components
    - Do this with `shallow` `expect` and `toMatchSnapshot`

### Notes
  - Notice we wrote a failing test FIRST
  - Step 2, next video, we will satifies the test

### Lesson 7
  - Create app
  - What is a snapshot
    - A snapshot will help show the difference of your app when making changes to it.

### Lesson 8 
  - Write test to check intalization of state
  - Find and simulate a click
  - Satisfy the tests after writing them

### Lesson 9
  - write test to render node in gift list
  - learn about test pollution by simulating 2 clicks to a test

### Lesson 10
  - Behavior driven development
    - Given, When, then
    - Example: Given notes, when deleting, then remove the notes
    - BDD consists of scenerios / specfications

### Lesson 11
  - describe to organize the tests
  - beforeEach to helps for a BDD approach (when clicking)
  - afterEach helps reset state to prevent test pollution

### Lesson 12
  - learn .simulate('change', eventObj )


### Lesson 13 
  - learn .exists() .toBe().
    - when expecting a boolean (like .exist), use toBe as an assertion
  - write a test on the App to check if it renders a Gift

### Lesson 14
  - Finshes app functionality
  - add removeGift to App (parent) component
  - learn .instance to test result on parent
  - learn jest.fn() to test function on child

### Lesson 15
  - test coverage
    - see if you get all the hit points and logic
    - ` yarn test --coverage --watchAll=false`
    - adds "jest" to package.json with collectCoverageFrom options
    - modulizar logic into helpers folder
      - seperates tests further
    - Unsure why app.js has a bunch of uncovered lines in coverage report