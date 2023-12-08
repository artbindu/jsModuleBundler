// rollup.config.js
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';


export default [{
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    copy({
      targets: [{
        // Copy HTML files from src to dist
        src: 'public/index.html',
        dest: 'build'
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

