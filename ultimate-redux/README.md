# Ultimate Redux Course Notes

## Section 1 Getting Started

### Lesson 1 What is Redux

state management library for JS apps

- use it for all frameworks or vanilla

Why do we need a state management library?

- having UI in sync based n
  - how did the state change?!

Flux, Redux, MobX

Store

- single source of truth
- like a db for the frontend
- we can see how, why, when, where the data change

Benefits

- centralized state
- makes data flow transparent and predictability

### Lesson 2 Pros and Cons of Redux

Example store setup:

- entities

  - products
  - categories
  - cart

- auth

  - authToken
  - currentUser

- ui
  - loading
  - productPage

etc.

Using redux dev tools

- Time travel debugging
- log rocket
  - see the state through user log

Redux pros and cons

- Pros
  - Predictable State Change
  - Centralized state
  - Easy debugging
  - Preserve (cache) page state
  - undo / redo page state
  - ecosystem of addons
- Cons

  - Complexity
  - verbosity

### Lesson 3 Is redux for you?

- what problem are you trying to solve
- what are your constraints?

  - what is the most optimal solutions based on the constraints
  - When not to used redux

    - Tight budget
    - Small to medium size app
    - simple ui/data flow
    - static data (static pages)

- BE AN ACTIVE PROBLEM SOLVER
  - Always think of your needs
  - you don't need to start with redux either
    - if all you have is a hammer, everything looks like a nail
    - you don't need to solve all problems with Redux
      - we like to be on autopilot as humans

### Lesson 4 Setting up Dev Env

- use the `redux-starer` that comes with the course
  - it uses webpack, package.json, npm

## Section 2 Functional Programming in JavaScript

### Lesson 1 Introduction

- Redux is built on functional programming principles
- Understanding functional programming will make Redux easier to understand and use

### Lesson 2 What is Functional Programming

- Functional programming is one of many programming paradigms
- These paradigms helps guide how we should approach programming problems
  - Functional
  - Object-oriented
  - Procedural
  - Event-driven

Functional programming is decomposing a problem in to small reusable problems
takes some inputs and returns a result
doesn't mutate / change data
we can take each small function to make more complex functions

Benefits

- more concise
- easily to debug
- easily to test
- more scalable

JS isn't a functional language; it's multi-paradigm

### Lesson 3 Functions as First-class Citizens

JS fundamental refresher

Functions

- Assign them to a variable
- Pass as an argument
- Returns from other functions

_Skipped code_

### Lesson 4 Higher-order Functions

Higher order function

- takes a function
- returns a function
- or both

Examples

- Array.map(function)
- setTime(function, 1000)

### Lesson 5 Function Composition

Coding example

- `wrapInDiv(toLowerCase(trim(input)))`
  - problem -> the logic is going from right to left
    - this isn't human readable!

### Lesson 6 Composing and Piping

Using Lodash, a JS functional programming library

- compose (right to left)
- pipe (left to right)
- both take in functions and returns a function that runs each of them

### Lesson 7 Currying

- Technique coined by Haskell Curry

- wrapInDiv + wrapInSpan have a similar structure

  - how can we parametrized it?

- Use currying to return a function inside `_.pipe`

- See comments in currying.js and composition.js

### Lesson 8 Pure Functions

Another core concept in functional program

A pure function takes in the same arguments and returns the same results

Non-pure function

```js
function nonPureFunction(number) {
  return number * Math.random();
}
```

Pure functions:

- No random values
- No current date/time
- No global state (DOM, files, db, etc)
- No mutation of parameters

**Reducers in Redux _must_ be pure**

Examples

```js
function isEligibleNonPure(age) {
  return age > minAge; // minAge is a global variable. Subject to change
}

function isEligiblePure(age, minAge) {
  return age > minAge; // minAge parameter. Allows for the same output each time
}
```

Benefits

- Self-documenting
  - all of the what's needed for the function is defined.
  - doesn't depend on global variables
- Easily testable
- Concurrency
  - functions can be run in parallel
- Cacheable
  - if it's gonna be the same each time, we know the results each time
    - especially if they are intensive

### Lesson 9 Immutability

Pure functions and Immutability are concepts that go together

Immutability

- Once created, cannot be changed
- take a copy, then change it

```js
let name = 'Jason';
let newString = name.toUpperCase(); // name is not affected
```

```js
let book = {}; // event with `const`. `const` prevents reassignment, not immutability
book.title = '...'; // objects and arrays are NOT immutable
```

Why immutability

- Predictability
  - no surprises down the road
- faster to detect change
  - JS compares the references, instead of each property
- concurrency

      - the function doesn't change data, it won't break the system if many run at once

  Should we always favor immutability?

- All approaches has pros and cons

Cons

- Performance
  - Once very large, all values of the objects are being copied
- Memory overhead
  - libraries try to reduce this as much as possible
    - They use a technique called structural sharing

### Lesson 10 Updating Objects

Practicing immutability with Objects.

See objects.js

### Lesson 11 Updating Arrays

Practicing immutability with Arrays

See arrays.js

### Lesson 12 Enforcing Immutability

Use libraries to enforce immutability

Examples:

- Immutable (Facebook)
- Immer (by MobX)
- Mori

### Lesson 13 Immutable.js

See immutable.js

### Lesson 14 Immer

See immer.js

## Section 3 Redux Fundamentals

### Lesson 1 Introduction

Once you understand functional programming, you can move onto learning redux

### Lesson 2 Redux Architecture

Store

- Single source of truth
- Entire State of the application

  - Example
    ```js
    {
      categories: [],
      products: [],
      cart: {},
      user: {}
    }
    ```

- We cannot directly modify the store

  - we have to use functional programming
  - we need a function to update the `store` (i.e reducer)

  ```
  function reducer(store, action) {
    // have to make a good copy of the store
    // using an immutable library will make this easier
      const updated = {...store}
  }
  ```

- How does the reducer know what part of the store it updates?
  - uses an `action`
  - each reducer will be responsible of updated a certain part of the store

Building blocks:

- action (event)
  - dispatches an action to the store
- store (frontend db)
  - the store is forwards the action to the reducer
- reducer (event handler, pure functions)
  - takes the actions and returns the new state to the store

Why dispatch actions like this?

- Send the actions through the same entrance point
- allows to log each action
- allows to add middleware

### Lesson 3 Your First Redux App

Creating a bug tracker

Steps to do so

- Design a the store
- Define actions
- Create reducers
- set up store

`npm i redux` to install

No UI for now

### Lesson 4 Designing the Store

What does our app have?

Bugs:

```js
{
  bugs: { // slice one
    id: 1,
    description: "",
    resolved: false,
  },
  currentUser: {} // slice 2
}
```

### Lesson 5 Defining the Actions

What does our app do?
It can:

- Add a bug
- Mark a bug resolve
- Delete a bug

Action example:

```js
{
  type: 'bugAdded', // serializable and descriptive (past-tense #opinion)
  payload: {
    description: '' // payload
  }
}
```

```js

{
  type: 'bugRemoved', // serializable and descriptive (past-tense #opinion)
  payload: {
  id: 1 // payload
  }
}

```

### Lesson 6 a Reducer

- Pure function is will always return the same thing
- Reducers must be a pure function
- We are not going to
  - UI changes
  - Not work with global state
  - Not gonna touch DOM elements
    - No API calls
  - Will be address later
    - Most be an isolated world
  - 2 arguments, and that's it.
    See reducer.js

### Lesson 7 the Store

See store.js

### Lesson 8 Actions

See store.js

store.dispatch({
type: 'bugAdded',
payload: {
description: 'bug1',
},
});

### Lesson 9 to the Store

See index.js

store.subscribe(() => {
console.log('store changed!', store.getState())
})

### Lesson 10 Action Types

See index.js
See types.js

- What's happening with the .dispatch method?
  - state = reducer (state, action)
  - notify subscribers

Redux has is quite small

- additional libraries will make it easier to maintain

### Lesson 11 Action Creators

See actionCreators.js (now called action.js)

This is a bit verbose:

```js
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'bug2',
  },
});
```

We can make it functional

### Lesson 12 Exercise

- Implement resolving a bug

See my solution in this commit.

### Lesson 13 Solution

His solution does it in one line with a ternary

## Section 4 Build Redux from Scratch

### Lesson 1

Redux is not as complex as we think. In this section we will build Redux from scratch

### Lesson 2 Store

When learning a new tool, it's good to learn it from the inside out.

```js
console.log(store);
/*
{…}
​
dispatch: function dispatch(action)
​
getState: function getState()
​
replaceReducer: function replaceReducer(nextReducer)
​
subscribe: function subscribe(listener)
​
Symbol(observable): function observable()
​
<prototype>: Object { … }
store.js:11:9

*/
```

Main methods for the redux store.
subscribe
dispatch
getState

Try to write your own!

see my-store.js

### Lesson 3 Private Properties

See customStore.js

### Lesson 4 Dispatching Actions

See index.js
See customStore.js

### Lesson 4 Subscribe to the store

See index.js
See customStore.js

## Section 5 Debugging Redux Applications

### Lesson 1 Intro

### Lesson 2 Redux DevTools

- Shows how to install the extension extension and set it up in Redux.
- See store.js

### Lesson 3 Basics of Redux DevTools

- Access it through developer tools (console)
- Different monitors
  - Log monitor
  - Inspector
  - Chart
- You can choice tabs of Redux projects. Make sure you select the right one

### Lesson 4 Inspector Monitor

Gives general overview on the features of Redux DevTools

### Lesson 5 Tracing

- By default tracing is not enabled.

  - `npm i redux-devtools-extensions`

- See changes in this commit.
- Go to Redux DevTools settings and set the path to the project and editor.
- Generate a source map to see the trace.
- Super cool feature that requires some configuration

### Lesson 6 Exporting and Importing the Store in Redux DevTools

- Export and Import state so you don't need to repeat yourself
- You can use service to do this as well, like LogRocket
- This way we can help users with unique bugs

## Section 6 Writing Clean Code

### Lesson 1 Introduction

Redux is know for having to write a lot of boilerplate code (i.e. code that is the same when you start out each time)

### Lesson 2 Structuring Files and Folders

current structure:

- src:
  - actions.js
  - reducers.s
  - types.js

new structure:

- src/:
  - store/
    - auth/
      - actions.js
      - reducers.s
      - types.js
    - bugs/
    - projects/
    - featureName/

ducks pattern:

- src/:
  - store/
    - auth.js
    - bugs.js
    - projects.js
    - featureName.js

Redux handles state management and shouldn't be coupled with UI

_don't name it redux_
name your artifacts (modules / components) based on their _roles_, not the name of the tech

### Lesson 3 Ducks Pattern

Implementing Ducks pattern. See difference in code commits

### Lesson 4 Redux Toolkit

Redux tool kit reduces boilerplate code and attempts to implement best practices

### Lesson 5 Creating the Store:

See configureStore.js code diff

Why use RTK for configuring the store?

- dev tools are put in automatically
- thunk is installed by default
- serialization and other default middleware

### Lesson 6 Creating Actions

Why use create action?

Reduce object pattern that is so common.

`const action = createAction('action-ed')`
`action.type` and `action.toString()` are the same

`action.action({ mustByIn: 'Object for the payload'})`

### Lesson 7 Creating Reducers

Why use createReducer?

Some people aren't familiar

- switch statements
- writing immutable code for state

See bugs.js and index.js in git diff

### Lesson 8 Creating Slices

`createSlice` take an object with a few options:

- `name`: The name of obj. Helps for organization
- `initialState`: The initial state of the slice
- `reducers`: an object of reducer functions

### Lesson 9 Exercise

See projects.js and index.js

## Section 7 Designing The Store

### Lesson 1 Introduction

### Lesson 2 Redux State vs Local State

Common question: Do we store all state in redux?

Approaches:

- Store Global State
  - Doesn't allow maximize redux
  - Better off using context
    - it's easy to implement
- Store All State
  - Unified data access
    - capability
    - debugging
  - Requires more Redux code

**_Exception_**

- Form state
  - Temporary variables don't have value in the store
  - Too many dispatches (on each keystroke)
    - makes debugging harder
  - Store form state locally in the components
    - don't update the store until the user submits the form

Use local state when it makes sense

### Lesson 3 Structuring a Redux Store

Know which data structure you are using.

- Arrays can be expensive if search by idea
- Objects will be quick as you can access a specific ID with a name

_Does order matter?_

- What problem do you need to solve? Fast look ups? Does order matter?
- What if you need both?

```
  {
    byId: {
      1: { ... },
      2: { ... },
      3: { ... },
    },
    allIds: [3, 1, 2]
  }
```

- Now we can order the array at the bottom without much difficult, and have speedy look ups

We will probably have many slices. Having a generic parent keeps them well organized.

```
  entities: {
    projects: [],
    bugs: [],
    tags: []
  },
  auth: { userId: 1, name: "John" },
  ui: {
    bugs: { query: "...", sortBy: "..." }
  }
```

### Lesson 4 Combining Reducers

- Store talks to the root reducer.
- The parent reducer passes it to its children until it finds the right action.

"What you understand is that in redux, multiple reducers can handle the same action"
"Each reducer is responsible for updating a slice in the store"

`bugsReducer` can only update the `bugs` property

See entities.js and reducers.js

### Lesson 5 Normalization

- We should not duplicate data in our store
  - we don't want to update multiple things in our store
- We do not want nested structures; as it's difficult to access
  - keep it as flat as possible

Wrong:

```js
[
  {
    id: 1,
    description: '',
    project: { id: 1, name: 'a' },
  },
  {
    id: 1,
    description: '',
    project: { id: 1, name: 'a' },
  },
];
```

Right:

```js
[
  {
    id: 1,
    description: '',
    projectId: 1,
  },
];
```

If using an API with non-normalized data, use [normalizr](https://www.npmjs.com/package/normalizr)

### Lesson 6 Selectors

What's wrong with this code?

```js
const unResolvedBugs = store.getState().entities.bugs.filter((bug) => !bug.resolved);
```

What if we want to use it in many places? Or change it's logic if our data structure changes?

```js
// Selector
// Takes state and return computed state
const getUnResolvedBugs = (state) => {
  state.entities.bugs.filter((bug) => !bug.resolved);
};
```

Naming convention:

- getThing
- selectThing
- thingSelector

### Lesson 7 Memoizing Selectors with Reselect

What's the problem with our selector `getUnResolvedBugs`?

```js
export const getUnResolvedBugs = (state) => state.entities.bugs.filter((bug) => !bug.resolved);

const x = getUnResolvedBugs(store.getState());
const y = getUnResolvedBugs(store.getState());
console.log(x === y); // false
```

We'd get 2 different arrays in memory. Therefore it's not optimized.
Say in React, if state changes, things are re-rendered.

Memoization is a technique for optimizing expensive functions.
Say we have a pure function: `f(x) => y`.
We can build a cache of inputs and outputs in an object: `{ input: 2, output: 2}`.
No need to re-computer the output. It's a single array in function.

Use a library called [reselect](https://www.npmjs.com/package/reselect)
(Note that we actually don't need to install it now, because it's included in `@reduxjs/toolkit`)

```js
export const getUnResolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

const x = getUnResolvedBugs(store.getState());
const y = getUnResolvedBugs(store.getState());
console.log(x == y); // true
```

### Lesson 8 Exercise

Add the ability to

- assign a bug to a team member
- get the list of bugs assigned to a team member

See commit cdd67f7

### Lesson 9 Solution

Things I didn't do right:

- Have an ID for each member
- Name variables to the smallest unit
- Use `createSelector`
- if `bugs` are being assigned to `users`
  - it belongs in the `bugs` slice

Why I didn't use a `createSelector`

This is what stumped me

```js
export const getBugsByUser = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === ???
)
```

Wrap it in a function! It returns the selector function

```js
export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
```

Call it like this

```js
const bugsFromFirstUser = getBugsByUser(1)(store.getState());
```

## Section 8 Middleware

Building block that allows us to cause side effects

### Lesson 1 Introduction

### Lesson 2 What is Middleware

### Lesson 3 Creating Middleware

### Lesson 4 Parameterizing Middleware

### Lesson 5 Dispatching Functions

### Lesson 6 Exercise

### Lesson 7 Solution
