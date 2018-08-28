# Webpack 4 basics

A rudimentary look at Webpack 4.

## Install
    yarn install

## Development
    yarn dev
    
## Distribution
    yarn dist
 
Both JS ans CSS are minified and have source maps.


```
dist
 ├── 94e6f175c5504181cccb7e081b298b54.ttf
 ├── aea786fbe9d68cf1ff72d2e76bbb7889.png
 ├── index.bundle
 ├── index.bundle.map
 ├── index.html  
 ├── styles.bundle.js
 ├── styles.bundle.js.map
 └── styles.css
```

## Dependencies

None

## Dev Dependencies

- [clean-webpack-plugin](https://ghub.io/clean-webpack-plugin): A webpack plugin to remove your build folder(s) before building
- [css-loader](https://ghub.io/css-loader): css loader module for webpack
- [file-loader](https://ghub.io/file-loader): A file loader module for webpack
- [html-webpack-plugin](https://ghub.io/html-webpack-plugin): Simplifies creation of HTML files to serve your webpack bundles
- [mini-css-extract-plugin](https://ghub.io/mini-css-extract-plugin): extracts CSS into separate files
- [optimize-css-assets-webpack-plugin](https://ghub.io/optimize-css-assets-webpack-plugin): A Webpack plugin to optimize \ minimize CSS assets.
- [style-loader](https://ghub.io/style-loader): style loader module for webpack
- [uglifyjs-webpack-plugin](https://ghub.io/uglifyjs-webpack-plugin): UglifyJS plugin for webpack
- [webpack](https://ghub.io/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.
- [webpack-cli](https://ghub.io/webpack-cli): CLI for webpack &amp; friends
- [webpack-dev-server](https://ghub.io/webpack-dev-server): Serves a webpack app. Updates the browser on changes.
- [webpack-merge](https://ghub.io/webpack-merge): Variant of merge that&#39;s useful for webpack configuration

## License

MIT
