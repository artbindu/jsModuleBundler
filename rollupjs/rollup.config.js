// rollup.config.js
import serve from 'rollup-plugin-serve'

const isProduction = process.env.NODE_ENV === 'production';
console.log('isProductionBuild: ', isProduction)

export default [{
  input: './src/index.js',
  output: {
    file: './build/bundle.js',
    format: 'es',
    sourceMap: isProduction ? false : 'inline',
  },
}];

