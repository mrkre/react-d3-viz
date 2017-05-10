import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';
import localResolve from 'rollup-plugin-local-resolve';

const pkg = require('./package.json');

export default {
  entry: 'lib/index.js',
  dest: 'index.js',
  format: 'cjs',
  plugins: [
    babel(babelrc({ addModuleOptions: false })),
    localResolve(),
    istanbul({
      exclude: ['tests/**/*', 'node_modules/**/*'],
    }),
  ],
  external: ['react', 'react-dom', 'prop-types', 'd3-shape', 'd3-scale'],
  globals: {
    react: 'React',
  },
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'rollupStarterProject',
      sourceMap: true,
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true,
    },
  ],
};
