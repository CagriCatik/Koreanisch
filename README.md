# Koreanisch

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, and is dedicated to learning Korean.

## Installation

Install the project dependencies with:

```bash
yarn
```

## Local Development

Start the development server with:

```bash
yarn start
```

This command launches a local server and automatically opens your browser. Any changes you make are reflected live without needing to restart the server.

## Build

To generate the static site, run:

```bash
yarn build
```

This creates static content in the `build` directory, which can be deployed to any static hosting service.

## Deployment

If you are hosting with GitHub Pages, you can deploy using one of the following commands:

- **Using SSH:**

  ```bash
  USE_SSH=true yarn deploy
  ```

- **Without SSH:**

  ```bash
  GIT_USER=<Your GitHub username> yarn deploy
  ```

This command builds the site and pushes the contents to the `gh-pages` branch.
