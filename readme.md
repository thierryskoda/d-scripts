<h1 align="center">
  d-scripts
</h1>

<p align="center">Handle node projects development tasks with no configuration.</p>

## Install

```bash
$ yarn add --dev d-scripts
```

## Usage

`d-scripts` exposes a series of scripts to handle development tasks. All the scripts configuration can be overridden by adding your own confing for the tools.

The default configuration can be found [here](https://github.com/gillchristian/d-scripts/blob/master/config).

**NOTE**: it includes all the dependencies so you don't have to install them.

### Available scripts

#### Init

```bash
$ d-scripts init
```

Adds the available scripts to the project's `package.json`. 

**WARNING**: it will override anything you have in the properties `test`, `lint` and `format` of the `scripts` field.

#### Format

```bash
$ d-scripts format
```

Runs prettier on write mode.

#### Lint

```bash
$ d-scripts lint
```

Runs ESlint with `--cache` flag, you can override that with `--no-cache`.

#### Test

```bash
$ d-scripts test
```

Runs Jest. By default it runs in watch mode unless you are checking coverage (`--coverage`), used the `--no-watch` flag or is running CI (checked by [`is-ci`](https://github.com/watson/is-ci)).
 
## TODO

- Format code on `precommit`.
- Ask before writing `package.json` on `d-scripts init`.
- Run (lint, format) with the lprovided ist of files instead of the default ones.

## Inspiration

- [Tools without config 🛠📦](https://blog.kentcdodds.com/automation-without-config-412ab5e47229) by [@kentcdodds](https://github.com/kentcdodds/).
- [Dan Abramov - The Melting Pot of JavaScript](https://www.youtube.com/watch?v=G39lKaONAlA&feature=youtu.be).
- `react-scripts` from [`create-react-app`](https://github.com/facebookincubator/create-react-app).
- [`kcd-scripts`](https://github.com/kentcdodds/kcd-scripts).

## LICENSE

MIT
