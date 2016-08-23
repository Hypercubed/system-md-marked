SystemJS.config({
  browserConfig: {
    "paths": {
      "github:": "/jspm_packages/github/"
    }
  },
  nodeConfig: {
    "paths": {
      "github:": "jspm_packages/github/"
    }
  },
  paths: {
    "*": "https://registry.jspm.io/*.js",
    "github:*": "https://github.jspm.io/*.js"
  },
  meta: {
    "*.md": {
      "loader": "./md.js",
      "mdOptions": {
        "gfm": true,
        "tables": true,
        "breaks": false,
        "pedantic": false,
        "sanitize": true,
        "smartLists": true,
        "smartypants": false
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json"
  ],
  map: {
    "marked": "github:chjj/marked@0.3.6"
  },
  packages: {}
});
