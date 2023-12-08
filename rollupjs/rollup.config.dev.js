// rollup.config.dev.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';

export default [{
  input: 'src/index.js',
  output: {
    file: 'build/dev/script.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    css({
      // all `*.css` files in src directory
      input: ['src/*.css', 'src/*/*.css'],
      // Optional: filename to write all styles to
      output: 'style.css'
    }),
    copy({
      targets: [{
        // Copy HTML files from public to build
        src: ['public/*'],
        dest: 'build/dev'
      }, {
        // Copy images from src to build
        src: ['src/images/*'],
        dest: 'build/dev/images'
      }],
    }),
    serve({
      // Launch in browser (default: false)
      open: true,
      // Page to navigate to when opening the browser.
      openPage: '/index.html',
      // Folder to serve files from
      contentBase: 'build/dev',
      // Options used in setting up server
      host: 'localhost',
      port: 8008,
    }),
    // Automatic page reload after any changes
    livereload('build/dev')
  ]
}];