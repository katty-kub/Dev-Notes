import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import jsxA11y from 'eslint-plugin-jsx-a11y'

// Files Next registers its plugins for. Without `files`, a .cjs file crashes lint (no plugin there).
const sourceFiles = ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}']
const typePropsDirectly = 'Type the props directly: const Card = ({ title }: CardProps) => …'

const eslintConfig = defineConfig([
  // Base JS rules first, so the TS preset can turn off the ones TypeScript already checks
  js.configs.recommended,
  // Recommended a11y set. Next then sets a few of its rules to warn; alt-text is restored below.
  { files: sourceFiles, rules: jsxA11y.flatConfigs.recommended.rules },
  ...nextVitals,
  ...nextTs,
  // Turns off rules that clash with Prettier. Everything after it can override that.
  prettier,
  {
    files: sourceFiles,
    rules: {
      // General
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      curly: 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',
      'array-callback-return': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'object-shorthand': 'error',
      'dot-notation': 'error',
      'prefer-template': 'error',
      'prefer-object-spread': 'error',
      yoda: 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-else-return': 'error',
      'no-useless-return': 'error',
      'no-return-assign': 'error',
      // Arrow functions only: const name = () => {}
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'FunctionDeclaration[generator=false], :not(MethodDefinition, Property) > FunctionExpression[generator=false]',
          message: 'Use an arrow function: const name = () => {}',
        },
      ],
      // Deprecated, available until ESLint 11
      'newline-before-return': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            FC: typePropsDirectly,
            'React.FC': typePropsDirectly,
            FunctionComponent: typePropsDirectly,
            'React.FunctionComponent': typePropsDirectly,
          },
        },
      ],

      // Imports
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'before' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
        },
      ],

      // Next narrows alt-text to <img>; check the other elements too, keep <Image>
      'jsx-a11y/alt-text': [
        'error',
        { elements: ['img', 'object', 'area', 'input[type="image"]'], img: ['Image'] },
      ],

      // React
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/hook-use-state': 'error',
      'react/no-unused-prop-types': 'error',
    },
  },
  {
    // Rules that need type information, so only for TS files
    files: ['**/*.{ts,tsx,mts}'],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
])

export default eslintConfig
