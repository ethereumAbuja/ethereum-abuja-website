[![All Contributors](https://img.shields.io/github/all-contributors/ethereumAbuja/ethereum-abuja-website?color=orange&style=flat-square)](#contributors-)
[![Twitter Follow](https://img.shields.io/twitter/follow/ethdotorg.svg?style=social)](https://twitter.com/EthAbuja)

<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <a href="https://ethabuja.com"><img alt="ethereum-abuja logo" src="![Abuja Monument](https://github.com/ethereumAbuja/ethereum-abuja-website/assets/85754527/f573b143-963b-45ab-bf61-288bd1dd1d6b)" alt="ethabuja.com" width="125"></a>
  <h1>👋 Welcome to ethabuja.org! (Ethereum Abuja)</h1>
</div>


How to get running on your local machine:

## Intial Setup

## Developer Information

A. Clone the repository with the following commands (authentication is required)
1. git clone `(https://github.com/dicethedev/ethAbuja-frontend.git)` to clone this repository to your local machine. 
2. Run npm install to fetch requisite node modules dependencies
3. To run, see the Running the app section below.
3b. then install all dependencies using yarn.

`NB` - EthAbuja-frontend uses `Yarn` workspaces, so this will install the relevant dependencies for each packages in one command.

B. Create a branch for your development, preferably named in line with the issue assigned to you. E.g.,
1. `git checkout -b implement-user-login`

C. When done locally, stage files and commit locally with befitting comment and then push the branch with `-set-upstream` option enabled. E.g.,
1. `git add --all`
2. `git commit -m 'Implemented User CodeInputPage'`
3. `git push –set-upstream origin implement-user-login`

D. Make a Pull request on GitHub for your pushed branch to be reviewed and then eventually merged
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Stack
- Node js (v.16 + )
- Typescript
- Next
- yarn

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

- Consistency: for **<the react component>** **use arrow function  instead of regular function**

    ```tsx
    //good
    const sumNumber = (a,b)=> {
        return a+b
    }
    
    //bad
    function sumNumber(a,b){
        return a+b
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






