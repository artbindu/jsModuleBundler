# Javascript module bundler

1. Webpack Learning: `git checkout webpack`
2. Rollup Learning: `git checkout rollup`

---

## <span style="color:green">**1. [Webpack Learning](https://webpack.js.org/concepts/)**<span>
---


 - [x] Basic Documentation: [Javascript module bundler: Webpack (Essential to learn)]()
 - [x] How to run:
 -  Install Node Module and it's dependencies
  ```
        npm i
  ```
  - Production Build:
  ```
        npm run build:prod
  ```
 - Development Build:
 ```
        npm run build:dev
 ```

 - [x] Project Structure:

```
webpackApp
      │
      ├───public (output directory)
      │     └───index.html
      │
      ├───node_modules
      │
      ├───src
      │     ├───images
      │     │     ├───bg.avif
      │     │     └───logo.png
      │     │
      │     ├───styles
      │     │     └───style.css
      │     │
      │     ├───app.js (entry file)
      |     └───module.js
      |
      ├───package-lock.json
      ├───package.json
      ├───webpack.config.dev.js  (webpack dev envs cofig)
      └───webpack.config.prod.js (webpack prod envs config)
```