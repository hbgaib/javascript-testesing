import js from '@eslint/js';
import globals from 'globals';

export default [
	{
		// Override untuk file JS
		files: ['**/*.{js,mjs,cjs}'],

		// Plugin & preset JS official
		plugins: { js },

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
			indent: ['error', 'tab'],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
		},
	},
];
