[![Twitter Follow](https://img.shields.io/twitter/follow/ethabuja_.svg?style=social)](https://twitter.com/EthAbuja_)

<!-- [![All Contributors](https://img.shields.io/github/all-contributors/ethereumAbuja/ethereum-abuja-website?color=green&style=flat-square)](#contributors-) -->

<div align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <a href="https://ethabuja.com">
    <img src="https://github.com/ethereumAbuja/ethereum-abuja-website/assets/85754527/b4c76b32-5dcd-4941-884c-c37d374604ef" alt="ETH abuja banner">
  </a>
  <h1>👋 Welcome to ethabuja.com! (Ethereum Abuja)</h1>
</div>

This is the repo for the [ethabuja.com](https://ethabuja.com) website, a resource for the Ethereum Abuja community. The site's purpose is to _“Be the best portal to Ethereum Abuja for our fast growing community"_ - read more about what this means [here](https://ethabuja.com/about).

[ethabuja.com](https://ethabuja.com) is being improved and changed over time through the contributions of community members who submit content, give feedback, or volunteer their time to manage its evolution. If you’re interested in helping to improve[ethabuja.com](https://ethabuja.com), find out [how to contribute](#how-to-contribute)

<hr style="margin-top: 3em; margin-bottom: 3em;">

## Table of contents

- [How to contribute](#how-to-contribute)
- [The ethabuja.com website stack](docs/stack.md)
- [Website conventions / best practices](docs/best-practices.md)

## How to contribute

This project follows the [all-contributors](https://allcontributors.org/docs/en/overview) specification. Contributions of any kind are welcome!

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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

- `main` is continually synced to Netlify and will automatically deploy new commits to ethereum.org
- Learn more about how we deploy the site [here](docs/deploy-process.md)
- You can [view the history of releases](https://github.com/ethereumAbuja/ethereum-abuja-website/releases), which include PR highlights
