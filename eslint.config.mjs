import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
	{
		// Override untuk file JS
		files: ['**/*.{js,mjs,cjs}'],

		// Plugin & preset JS official
		plugins: {
			js,
			tailwind,
		},

		// Global yang dikenali + parserOptions
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaVersion: 12,
				sourceType: 'module',
			},
		},

		// Aturan kustommu
		rules: {
			...prettier.rules,
			'tailwindcss/classnames-order': 'warn',
			'tailwindcss/no-custom-classname': 'warn',
			'tailwindcss/no-contradicting-classname': 'error',
			indent: ['error', 'tab'],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
		},
	},
];
