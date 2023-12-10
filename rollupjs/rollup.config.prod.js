// rollup.config.prod.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only'

import terser from '@rollup/plugin-terser';
import { obfuscator } from 'rollup-obfuscator';

export default [{
  input: 'src/index.js',
  output: {
    file: 'build/prod/script.js',
    format: 'cjs',
    name: 'production'
  },
  logLevel: 'none',
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
        dest: 'build/prod'
      }, {
        // Copy images from src to build
        src: ['src/images/*'],
        dest: 'build/prod/images'
      }],
    }),
    terser({ // JavaScript minifier
      // maximum number of worker processes for parallelizing the minification process
      maxWorkers: 4,
      compress: {
        // Remove console.log statements in production build
        drop_console: true,
      }
    }),
    obfuscator({ // JavaScript Obfuscator
      // what files will obfuscate or what not
      include: ['src/**/*.js', 'public/*.html'],
      exclude: ['node_modules/**', 'build/**'],
      // Obfuscator Rules
      compact: false,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      numbersToExpressions: true,
      simplify: true,
      stringArrayShuffle: true,
      splitStrings: true,
      stringArrayThreshold: 1
    })
  ]
}];