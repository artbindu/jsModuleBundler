# [RollupJs Learning](https://rollupjs.org/tutorial/)

 - [x] Documentation: [Javascript module bundler: RollupJs (Essential to learn)]()
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
      ├───rollup.config.dev.js  (rollup dev envs config)
      └───rollup.config.prod.js (rollup prod envs config)
```