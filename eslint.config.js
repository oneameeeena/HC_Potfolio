import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

// ESLint configuration file to enforce code quality and consistency.
export default tseslint.config(
  { ignores: ['dist'] }, // Ignore the 'dist' directory for linting
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended], // Extend recommended configs for JS and TypeScript
    files: ['**/*.{ts,tsx}'], // Target TypeScript and TSX files
    languageOptions: {
      ecmaVersion: 2020, // Specify ECMAScript version
      globals: globals.browser, // Define browser global variables
    },
    plugins: {
      'react-hooks': reactHooks, // Enforce React Hook rules
      'react-refresh': reactRefresh, // Optimize hot reloading with React Refresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Apply recommended React Hook rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Warn if only-export-components rule is violated
      'no-console': 'warn', // NEW RULE: Warn against console statements
    },
  }
);
