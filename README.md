## LEOSTRANGMAN.COM

- Personal Website for Leo Strangman, with Experience, Projects, Personal Info, and Contact
- https://leostrangman.com

## Getting started

Make sure you have the following installed:

- [Node] — at least 20.14, the latest LTS is recommended.
- [NPM] — at least 8.0, the latest LTS is recommended.

> 💡 You can use [NVM] to install and use different versions of Node via the command-line.

```sh
# Clone the repository.
git clone https://github.com/lcstrangman/leostrangman-website-v2.git my-new-project

# Enter the newly-cloned directory.
cd my-new-project
```

## Installation

```sh
# Switch to recommended Node version from .nvmrc
nvm use

# Install dependencies from package.json
npm install
```

## Project Structure

Inside of your project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Icon/
│   │       └── Icon.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── scripts/
│       ├── components/
│       ├── utils/
│       └── app.ts
└── package.json
```

## Development

```sh
# Start development server, watch for changes, and compile assets
npm run dev

# Compile and minify assets
npm run build
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Documentation

- [Astro]
- [Locomotive Scroll]
- [Tailwind CSS]
- [Swup]

[Astro]: https://docs.astro.build/en/getting-started/
[Tailwind CSS]: https://tailwindcss.com/docs/installation
[Locomotive Scroll]: https://scroll.locomotive.ca/docs
[Sass]: https://sass-lang.com/
[Swup]: https://swup.js.org/getting-started/
[Node]: https://nodejs.org/
[NPM]: https://npmjs.com/
[NVM]: https://github.com/nvm-sh/nvm
