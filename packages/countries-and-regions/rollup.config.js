import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-ts-lib',
        inlineDynamicImports: true,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
        inlineDynamicImports: true,
      }
    ],
    plugins: [
      json(),
      dynamicImportVars(),
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
  {
    input: 'dist/es/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "es" }],
    plugins: [dts()],
  },
]
