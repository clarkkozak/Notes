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

### Skip Lessons for style and next project setup setup
---

### Lesson 22
  - setBalance action creator
  - constant
  - make your functions exportable
  - what is your expected action?
    - test action and constant

### Lesson 23
  - Setup a redux store
  - connect() a componet to the store
  - test that the compoent displays a balance
  - display balance via prop

### Lesson 24
  - Test that a component exists in another
    - if it's using redux and connect(), make sure you test for the connected component
    - log wrapper.debug() to debug

### Lesson 25
  - Adds withdarw and despoit to redux
  - simiplar pattern each action creator, different logic each reducer

### Lesson 26
  - test first
    - does the input exist?
    - does it update the state properly?
  - parseInt(number, 10) puts a string into a number using the decimal system

### Lesson 27
  - Withdraw and deposit functionality
    - we already tested the actions / reducers, we need to test the functionality within `Wallet`
  - connect reducers to `Wallet`
  - expect the mock functionality to equal what we expect

### Lesson 28
  - test to see if the balance exists after re-intializing
  - use a second reducer, `balanceReducer2` to test this, as if we are "reloading" the browser
  - jest makes a DOM structure, so cache can be read

### Lesson 29
  - What are async actions
    - actions in redux that allow for asynchronous behavior
    - api request doesn't block the app
    - api call happens in the background
  - use redux middleware - Redux Thunk (returns a promise)

### Lesson 30
  - install redux-mock-store fetch-mock and redux-thunk
  - get URL for coindesk bitcoin api

### Lesson 31
  - redux-thunk can take functions and satifiy the api calls within them, and return an action that has the data that we want
  - using a mock store, a mock fetch method, a mock response, we test the expected action to match our success mockReponse 
  - we satifiy this test by dispatching the promised data from the fetched command

### Lesson 32
  - bitcoin reducer
    - expect the reducer to return the bitcoin data properly
  - Note that a lot of these tests for redux are lonely or solitary tests. The behavior of the application don't work, currenlty, we only know that the reducers work
  - we need to have both the balance and bitcoin reducers properly functional (next video)

### Lesson 33
  - combine reducers in a test driven way
    - first check to see if it initalizes
  - apply redux thunk middleware
  - fix bug in wallet.jsx
    - only return (select) what object in the store is needed 