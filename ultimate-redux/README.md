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
    entities
      - products
      - categories
      - cart
    auth
      - authToken
      - currentUser
    ui 
      - loading 
      - productPage
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
    - you don't need to start with redux either
      - if all you have is a hammer, everything looks like a nail
      - you don't need to solve all problems with Redux
        - we like to be on autopilot as humans
     
### Lesson 4 
#### Setting up Dev Env
  - use the `redux-starer` that comes with the course
    - it uses webpack, package.json, npm