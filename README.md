[![Twitter Follow](https://img.shields.io/twitter/follow/ethdotorg.svg?style=social)](https://twitter.com/EthAbuja)

<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <a href="https://ethabuja.com">
    <img src="https://github.com/ethereumAbuja/ethereum-abuja-website/assets/85754527/b4c76b32-5dcd-4941-884c-c37d374604ef" alt="ETH abuja banner">
  </a>
  <h1>👋 Welcome to ethabuja.org! (Ethereum Abuja)</h1>
</div>

This is the repo for the [ethabuja.com](https://ethabuja.com) website, a resource for the Ethereum Abuja community. The site's purpose is to _“Be the best portal to Ethereum Abuja for our fast growing community"_ - read more about what this means [here](https://ethabuja.com/about).

[ethabuja.com](https://ethabuja.com) is being improved and changed over time through the contributions of community members who submit content, give feedback, or volunteer their time to manage its evolution. If you’re interested in helping to improve[ethabuja.com](https://ethabuja.com), find out [how to contribute] below.

<hr style="margin-top: 3em; margin-bottom: 3em;">

## How to contribute

### 1. Submit an issue

- Create a [new issue](https://github.com/ethereumAbuja/ethereum-abuja-website/issues/new).
- Comment on the issue (if you'd like to be assigned to it) - that way [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).

### 2. Fork the repository (repo)

- If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo).

### 3. Set up your local environment (optional)

How to get running on your local machine:

If you're ready to contribute and create your PR, it will help to set up a local environment so you can see your changes.

1. Clone your fork

If this is your first time forking our repo, this is all you need to do for this step:

```sh
git clone git@github.com:[your_github_handle]/ethereum-abuja-website.git && cd ethereum-abuja-website
```

If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```sh
git remote add upstream https://github.com/ethereumAbuja/ethereum-abuja-website.git
```

To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```sh
git checkout dev
git fetch upstream
git merge upstream/dev
```

3. Install dependencies

We recommend using a node manager to use multiple node versions in your system. We use [Volta](https://volta.sh/). In case you don't use a manager or you use `nvm`, you can check the currently supported versions under the `"volta"` section on our `package.json` file.

```sh
yarn
or
yarn install
```

### 4. Make awesome changes!

1. Create new branch for your changes

```sh
git checkout -b new_branch_name
```

2. Start developing!

```sh
yarn dev
```

3. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)).

```sh
git commit -m "brief description of changes [Fixes #1234]"
```

4. Push to your GitHub account

```sh
git push
```

### 5. Submit your PR

- After your changes are committed to your GitHub fork, submit a pull request (PR) to the `dev` branch of the `ethereumAbuja/ethereum-abuja-website` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`
- Why not say hi and draw attention to your PR in [our discord server](https://discord.gg/coming-soon)?

  ### 6. Wait for review

- The website team reviews every PR
- Acceptable PRs will be approved & merged into the `dev` branch

### 6. Release

- `master` is continually synced to Netlify and will automatically deploy new commits to ethereum.org
- Learn more about how we deploy the site [here](docs/deploy-process.md)
- You can [view the history of releases](https://github.com/ethereumAbuja/ethereum-abuja-website/releases), which include PR highlights


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






