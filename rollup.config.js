import pkg from './package.json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import svg from 'rollup-plugin-svg'
import svgr from '@svgr/rollup'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'

const extensions = ['js']

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: [
    // Automatically add peerDependencies to the `external` config
    // https://rollupjs.org/guide/en/#external
    peerDepsExternal(),
    // External modules not to include in your bundle (eg: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en/#external
    // external: []
    nodeResolve({ extensions }),
    svg(),
    svgr(),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      plugins: ['transform-class-properties'],
    }),
    commonjs(),
    filesize(),
  ],
}
