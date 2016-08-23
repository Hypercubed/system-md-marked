system-md-marked
=========

Markdown loader for SystemJS

# Overview

A plugin for [SystemJS](https://github.com/systemjs/systemjs) which enables you to import markdown files directly. The files are compiled in the browser to HTML using [marked](https://github.com/chjj/marked).

# Installation

For installing with JSPM run:

```sh
jspm install md=github:Hypercubed/system-md-marked
```

# Basic Use

```js
import readmeHTML from './readme.md!'
```

# Configuration

[Marked configuration options](https://github.com/chjj/marked#options-1) are passed via "mdOptions".

## Either: use the meta tag

```js
System.config({
  meta: {
    '*.md': {
      loader: './md.js',
      mdOptions: {
        'tables': true
      }
    }
  }
});
```

## Or: using packages configuration

```js
System.config({
  packages: {
    'src': {
      meta: {
        "*.md": {
          loader: './md.js',
          mdOptions: {
            tables: true
          }
        }
      }
    }
  }
});
```
