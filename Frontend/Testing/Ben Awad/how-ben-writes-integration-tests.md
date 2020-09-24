# How I like to Write Integration Tests in React
- Youtube Video: [How I like to Write Integration Tests in React](https://www.youtube.com/watch?v=is83bEK3n5A)
- [Code](https://github.com/benawad/apollo-mocked-provider-example/commits/1_test)
- [React Testing Library Example](https://testing-library.com/docs/react-testing-library/example-intro) 

## Notes

He is testing a simple todo app that uses Apollo

- Checkout [ApolloMockProvider](https://youtu.be/VjmAzW2lrR8)
- Functions used 
  - `import { render, fireClick, user } from '@testing-library/react'`
  - `const { debug } = render(<Component />)`
  - `getByTestId, getByPlaceholderText("..."), getByText`
    - These will fail the test if the don't find anything
  - `fireEvent.click(submitButtonTodo) fireEvent.change({ target: { value: "some value" } })`
  - `await waitForDomChange(); await waitForElement(() => getByText("some value")`
    - He uses this to check if the `required` UI DOM change happens. Not by making an assertion yet by using `getByText('required')`
  
- What he tested
  - Make sure he can submit a todo
- How he tests it
  - Gets the elements he needs (assign)
  - Fills out the form (act)
    - Mocks out his Mutation
