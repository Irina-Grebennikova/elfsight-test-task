<h1 align="center">Elfsight test task</h1>

[Project deploy](https://elfsight-test-task.netlify.app)

## Getting Started

To get a local copy - follow these simple steps.

### Installation

1. Clone the repo

```sh
  git clone https://github.com/Irina-Grebennikova/elfsight-test-task.git
```

2. Install NPM packages

```sh
  npm install
```

3. Start project

```sh
  npm run dev
```

<!-- SCRIPTS -->

## Provided scripts

```sh
npm run dev
```

Start local development server

```sh
npm run build
```

Build project in production mode for further deployment

```sh
npm run format:fix
```

Reformat source code & configs to match `Prettier` settings

```sh
npm run lint
```

Check source code with `ESLint`. Exit with non-zero return code after the first found warning (useful for CI/CD)

```sh
npm run lint:fix
```

Automatically fix all auto-fixable errors & warnings with `ESLint`

```sh
npm run preview
```

Locally preview the production build

```sh
npm run prepare
```

Runs automatically after package installation to install Husky hooks
