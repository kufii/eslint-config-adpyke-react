'use strict';

module.exports = {
	parser: 'babel-eslint',
	extends: ['adpyke-es6', 'plugin:react/recommended'],
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: false,
		node: true
	},
	plugins: ['react', 'react-hooks'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'react/self-closing-comp': 1,
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-boolean-value': 1,
		'react/jsx-closing-tag-location': 1,
		'react/jsx-curly-spacing': 1,
		'react/jsx-equals-spacing': 1,
		'react/jsx-first-prop-new-line': 1,
		'react/jsx-curly-brace-presence': 1,
		'react/jsx-props-no-multi-spaces': 1,
		'react/jsx-fragments': 2,
		'react/jsx-pascal-case': 1,
		'react/jsx-tag-spacing': 1,
		'react/forbid-component-props': 1,
		'react/no-access-state-in-setstate': 2,
		'react/no-redundant-should-component-update': 1,
		'react/no-this-in-sfc': 2,
		'react/no-unused-prop-types': 1,
		'react/no-unused-state': 1,
		'react/prefer-es6-class': 2,
		'react/style-prop-object': 2,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1
	}
};
