import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const config = {
    input: 'src/index.js',
    output: {
        name: 'use-react',
        format: 'es',
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
        uglify(),
    ],
};

export default config;
