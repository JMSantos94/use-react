import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

let a = 1;

const config = {
    input: 'src/index.js',
    output: {
        name: 'use-react',
        format: 'umd',
        sourcemap: true,
        file: './dist/use-react.prod.js',
        exports: 'named',
        globals: {
            react: 'React',
        },
    },
    external: ['react'],
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        resolve({
            extensions: ['.js', '.json', '.jsx'],
        }),
        commonjs({
            include: /node_modules/,
        }),
        replace({
            exclude: 'node_modules/**',
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(uglify());
}


const buildUmd = ({ env }) => ({
  plugins: [
    resolve(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/prop-types/index.js': [
          'object',
          'oneOfType',
          'string',
          'node',
          'func',
          'bool',
          'element',
        ],
      },
    }),
    sourceMaps(),
    env === 'production' && sizeSnapshot(),
    env === 'production' &&
      uglify({
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
        },
        warnings: true,
        toplevel: false,
      }),
  ],
});

const buildCjs = ({ env }) => ({
  input,
  external: external.concat(Object.keys(pkg.dependencies)),
  output: {
    file: `./dist/${pkg.name}.cjs.${env}.js`,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    sourceMaps(),
    sizeSnapshot(),
  ],
});

export default [
  buildUmd({ env: 'production' }),
  buildCjs({ env: 'production' }),
  {
    input,
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      babel({
        plugins: ['babel-plugin-annotate-pure-calls'],
      }),
      sizeSnapshot(),
      sourceMaps(),
    ],
  },
];
