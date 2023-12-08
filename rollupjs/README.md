# [Rollup.js Learning](https://rollupjs.org/tutorial/)

 - [x] Documentation: [Javascript module bundler: rollup.js (Essential to learn)]()
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
rollupjs
      │
      ├───build (output directory)
      │
      ├───node_modules
      │
      ├───public
      │     └───index.html (UI file)
      ├───src
      │     ├───images
      │     │     ├───bg.avif
      │     │     └───logo.png
      │     │
      │     ├───module
      │     │      ├───module.css
      │     │      └───module.js
      │     │
      │     ├───index.css
      |     └───index.js (entry file)
      |
      ├───package-lock.json
      ├───package.json
      ├───rollup.config.dev.js  (rollup dev envs config)
      └───rollup.config.prod.js (rollup prod envs config)
```