// rollup.config.js
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only'
export default [{
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    css({
      // all `*.css` files in src directory
      input: ['src/*.css', 'src/*/*.css'],
      // Optional: filename to write all styles to
      output: 'bundle.css'
    }),
    copy({
      targets: [{
        // Copy HTML files from public to build
        src: ['public/*'],
        dest: 'build'
      }, {
        // Copy images from src to build
        src: ['src/images/*'],
        dest: 'build/images'
      }],
    }),
    serve({
      // Launch in browser (default: false)
      open: true,
      // Page to navigate to when opening the browser.
      openPage: '/index.html',
      // Folder to serve files from
      contentBase: 'build',
      // Options used in setting up server
      host: 'localhost',
      port: 8008,
    }),
    // Automatic page reload after any changes
    livereload('build')
  ]
}];