# Code conventions / best practices

### css writing

-> Styled component -> chakra styled system

### api call

-> createAsyncThunk from redux-js/toolkit || use SWR (create custom Hook to avoid code repetition)

### global state system

-> @Reduxjs/toolkit

### clean code & code style

```
-> atomic design https://bradfrost.com/blog/post/atomic-web-design/

-> pure function https://www.geeksforgeeks.org/pure-functions-in-javascript/

-> custom hooks https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889 https://github.com/rehooks/awesome-react-hooks

-> function component > class component
```

### Next structure

```
example:
src/pages/home.tsx
src/component/ --components/home/Title.tsx --components/home/Message.tsx --components/home/utils.ts --components/home/atom.ts
```

# style guide

## **Typescript**

- using **interface** rather than **type**

  ```tsx
  //good
  interface ProductCardProps {
    img: string;
    title: string;
    name: string;
    price: string;
    tags: Array<string>;
  };

  //bad
  type ProductCardProps = {
  ...
  }

  ```

- using `baseUrl` importing module( no need to dot drilling)

  ```tsx
  //good
  import { ContainerWrapper } from "styles/layout";

  //bad
  import { ContainerWrapper } from "../../../styles/layout";

  //only use relative path with the current file
  //or child of current file
  import { ContainerWrapper } from "./layout";
  ```

## React

- Consistency: for **<the real function(not related with react component>** **use regular function instead of arrow function**

  ```tsx
  //good
  export default function const Dashboard(){
      return <p>its hoem</p>
  }

  //bad
  const Dashboard = ()=> {
      return <p>its hoem</p>
  }

  ```

- Consistency: for **<the react component>** **use arrow function instead of regular function**

  ```tsx
  //good
  const sumNumber = (a, b) => {
    return a + b;
  };

  //bad
  function sumNumber(a, b) {
    return a + b;
  }
  ```

- Don`t forget to use key for the iteration component
- watch out using index as a key

  [https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

```tsx
//when map data has its own unique id
{
  todos?.map((todo) => (
    <Todo {...todo} key={todo.id} />
  ));
}

//no unique id on data

import { nanoid } from 'nanoid';
...
const todosData = todos?.map((todo)=> {
   return {id:nanoid(), ...todo}
})
...
{
  todosData?.map((todo) => (
    <Todo {...todo} key={nanoid()} />
  ));
}

// only case when you can use index as a key
// 1. the list and items are static–they are not computed and do not change;
// 2. the items in the list have no ids;
// 3. the list is never reordered or filtered.
// When all of them are met, you may safely use the index as a key.

{
  todosData?.map((todo, index) => (
    <Todo {...todo} key={index} />
  ));
}

```

- **Memo**

Use memo for child components, this will avoid child component re-rendering when the parent component state/props are updated by using this method component will only be re-rendered when it’s props are changed.

- **Component**

Always use functional components until unless you really need component lifecycle methods.

- **Functional component custom hooks**

Try to use react built-in and your custom hooks where possible, like useCallback,useEffect e.t.c. avoid using `React.UseCallback`, `React.useMemo` and the likes, And only call hooks at the top level don’t use them inside look or conditions.
