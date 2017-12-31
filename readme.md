<h1 align="center">
  d-scripts
</h1>

<p align="center">Handle node projects development tasks with no configuration.</p>

## Install

```bash
$ yarn add --dev d-scripts
```

> **NOTE**: it includes all the dependencies (prettier, jest, eslint, etc) so you don't have to install them.

## Usage

`d-scripts` exposes a series of scripts to handle development tasks. 

```bash
$ d-scripts [script] [options]
```

### Available scripts

#### `init`

Adds the available scripts to the project's `package.json`. 

> **WARNING**: it will override anything you have in the properties `test`, `lint` and `format` of the `scripts` field.

#### `format`

Runs prettier on write mode.

#### `lint`

Runs ESLint with `--cache` flag, you can override that with `--no-cache`.

Since ESLint editor integrations require project based configuration to work a local `eslintrc` is needed, for that you can use [`eslint-config-d`](https://github.com/trae/eslint-config-d).

```json
{
  "extends": [
    "d"
  ]
}
```

> **NOTE**: a `.eslintignore` is required until [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

#### `test`

Runs Jest. By default it runs in watch mode unless you are checking coverage (`--coverage`), used the `--no-watch` flag or is running in CI (checked by [`is-ci`](https://github.com/watson/is-ci)).

## Configuration

All the scripts configuration can be overridden by adding your own confing for the tools. The default configuration can be found [here](https://github.com/gillchristian/d-scripts/blob/master/config).
 
## TODO

- Format code on `precommit`.
- Ask before writing `package.json` on `d-scripts init`.
- Run (lint, format) with the provided list of files instead of the default ones.
- Forward options & flags to the scripts.

## Inspiration

- [Tools without config 🛠📦](https://blog.kentcdodds.com/automation-without-config-412ab5e47229) by [@kentcdodds](https://github.com/kentcdodds/).
- [Dan Abramov - The Melting Pot of JavaScript](https://www.youtube.com/watch?v=G39lKaONAlA&feature=youtu.be).
- `react-scripts` from [`create-react-app`](https://github.com/facebookincubator/create-react-app).
- [`kcd-scripts`](https://github.com/kentcdodds/kcd-scripts).

## LICENSE

MIT
