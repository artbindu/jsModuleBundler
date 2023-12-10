# [Webpack Learning](https://webpack.js.org/concepts/)

 - [x] Documentation: [Javascript module bundler: Webpack (Essential to learn)](https://medium.com/p/2e2a661e27c)
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
webpackjs
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
      ├───webpack.config.dev.js  (webpack dev envs config)
      └───webpack.config.prod.js (webpack prod envs config)
```