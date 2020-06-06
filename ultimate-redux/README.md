# Section 1

## Getting Started

### Lesson 1

#### What is Redux

state management library for JS apps

- use it for all frameworks or vanialla

Why do we need a state management library?

- having UI in sync based n
  - how did the state change?!

Flux, Redux, MobX

Store

- single source of truth
- like a db for the frontend
- we can see how, why, when, where the data change

Benefits

- centrzlied state
- makes data flow transparent and predicibily

### Lesson 2

#### Pros and Cons of Redux

Store setup:
entities - products - categories - cart
auth - authToken - currentUser
ui - loading - productPage
...

Using redux dev tools

- Time travel debugin
- log rocket
  - see the state through user log

Redux pros and cons

- Pros
  - Predictable State Change
  - Centralized state
  - Easy debuging
  - Perserve (cache) page state
  - undo / redo page state
  - ecosystem of addons
- Cons

  - Compelxity
  - verbosity

### Lesson 3

#### Is redux for you?

- what problem are you trying to solve
- what are you contrastnts?

  - what is the most optimial solutions based on the constraints
  - When not to used redux

    - Tight budget
    - Small to medium size app
    - simple ui/data flow
    - static data (static pages)

- BE AN ACTIVE PROBLEM SOLVER
  - Always think of your needs
  - you dont need to start with redux either
    - if all you have is a hammer, everything looks like a nail
    - you dont need to solve all problems with Redux
      - we like to be on autopilot as humans

### Lesson 4

#### Setting up Dev Env

- use the `redux-starer` that comes with the course
  - it uses webpack, package.json, npm

# Section 2

## Functional Programming in JavaScript

### Lesson 1

#### Introduction

- Redux is built on functional programming principles
- Understanding functional programming will make Redux easier to understand and use

### Lesson 2

#### What is Functional Programming

- Functional programming is one of many programming paradigms
- These paradigms helps guide how we should approach programming problems
  - Functional
  - Object-oriented
  - Procedural
  - Event-driven

Functional programming is decompassing a problem in to small reusable problems
takes some inputs and returns a result
doesn't mutatue / change data
we can take each small function to make more complex functions

Benefits

- more concise
- easily to debug
- easily to test
- more scable

JS isn't a functional language; it's multi-paratime

### Lesson 3

#### Functions as First-class Citizens

JS fundamental refresher

Functions

- Assing them to a varaible
- Pass as an argument
- Returns from other functions

_Skiped code_

### Lesson 4

#### Higher-order Functions

Higher order function

- takes a function
- returns a funtcion
- or both

Examples

- Array.map(function)
- setTime(function, 1000)

### Lesson 5

#### Function Composition

Coding example

- `wrapInDiv(toLowerCaes(trim(input)))`
  - problem -> the logic is going from right to left
    - this isn't human readable!

### Lesson 6

#### Composing and Piping

Using Lodash, a JS functional programming library

- compose (right to left)
- pipe (left to right)
- both take in functions and returns a function that runs each of them

### Lesson 7

#### Currying

- Technique coined by Haskel Curry

- wrapInDiv + wrapInSpan have a similar structure

  - how can we paramatized it?

- Use currying to return a function inside `_.pipe`

- See comments in currying.js and composition.js

### Lesson 8

#### Pure Functions

Another core concept in functional program

A pure function takes in the same arguments and returns the same results

Non-pure function

```js
function nonPureFunctino(number) {
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
  return age > minAge; // minAge is a global variable. Subject to change
}
```

Benefits

- Self-documenting
  - all of the what's needed for the function is definied.
  - doesn't depend on global variables
- Easiliy testable
- Concurrency
  - functions can be run in parallel
- Cacheable
  - if it's gonna be the same each time, we know the results each time
    - especially if they are intensive

### Lesson 9

#### Immutability

Pure functions and Immutatability are concepts that go together

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
  - no suprising down the road
- faster to detect change
  - JS compares the references, instead of each property
- concurrency

      - the function doesn't change data, it won't break the system if many run at once

  Should we always favor immutability?

- All appraoches has pros and cons

Cons

- Performance
  - Once very large, all values of the objects are being copied
- Memory overhead
  - libraries try to reduce this as much as possible
    - They use a technique called structural sharing

### Lesson 10

#### Updating Objects

Practicing immutability with Objects.

See objects.js

### Lesson 11

#### Updating Arrays

Practicing immutability with Arrays

See arrays.js

### Lesson 12

#### Enforcing Immutability

Use libraries to enfocrce immutatilibty

Examples:

- Immutable (Facebook)
- Immer (by MobX)
- Mori

### Lesson 13

#### Immutable.js

See immutable.js

### Lesson 14

#### Immer

See immer.js

# Section 3

## Redux Fundamentals

### Lesson 1

#### Introduction

Once you understand functional programming, you can move onto learning redux

### Lesson 2

#### Redux Architecture

Store

- Single source of truth
- Entire State of the application

  - Example
    ```js
    {
      categories: [],
      products: [],
      cart: {},
      uesr: {}
    }
    ```

- We cannot directly modify the store

  - we have to use functional programming
  - we need a funciton to update the `store` (i.e reducer)

  ```
  function reducer(store, action) {
    // have to make a good copy of the store
    // using an immutable libray will make this easier
      const updated = {...store}
  }
  ```

- How does the reducer know what part of the store it updates?
  - uses an `action`
  - each reducer will be responsible of updated a certain part of the store

Building blocks: - action (event) - dispatches an action to the store - store (frontend db) - the store is forwards the action to the reducer - reducer (event handler, pure functions) - takes the actions and returns the new state to the store

Why dispatch actions like this? - Send the actions through the same entrance point - allows to log each action - allows to add middleware

### Lesson 3

#### Your First Redux App

Creating a bug tracker

Steps to do so

- Design a the store
- Define actions
- Create reducers
- set up store

`npm i redux` to install

No UI for now

### Lesson 4

#### Designing the Store

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

### Lesson 5

#### Defining the Actions

What does our app do?
It can: - Add a bug - Mark a bug resolve - Delete a bug

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

````

### Lesson 6
#### Creating a Reducer

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

### Lesson 7
#### Creating the Store

See store.js

### Lesson 8
#### Dispatching Actions

See store.js

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'bug1',
  },
});

### Lesson 9
#### Subscribing to the Store

See index.js

store.subscribe(() => {
  console.log('store changed!', store.getState())
})

### Lesson 10
#### Action Types

See index.js
See types.js

- What's happening with the .dispatch method?
  - state = reducer (state, action)
  - notify subscribers

Redux has is quite small
  - additional libraries will make it easier to maintain

### Lesson 11
#### Action Creators

See actionCreators.js

This is a bit verbose:
  ```js
  store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
      description: 'bug2',
    },
  });
````

We can make it functional

### Lesson 12

#### Exercise

- Implement resolving a bug

See my solution in this commit.

### Lesson 13

#### Solution

His solution does it in one line with a ternary
