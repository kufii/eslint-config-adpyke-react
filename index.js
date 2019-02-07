'use strict';

module.exports = {
	'parser': 'babel-eslint',
	'extends': ['adpyke-es6', 'plugin:react/recommended'],
	'parserOptions': {
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'env': {
		'browser': false,
		'node': true
	},
	'plugins': [
		'react'
	],
	'rules': {
		'react/self-closing-comp': 1,
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-boolean-value': 1,
		'react/jsx-closing-tag-location': 1,
		'react/jsx-curly-spacing': 1,
		'react/jsx-equals-spacing': 1,
		'react/jsx-first-prop-new-line': 1,
		'react/jsx-curly-brace-presence': 1,
		'react/jsx-props-no-multi-spaces': 1,
		'react/jsx-space-before-closing': 1,
		'react/jsx-fragments': 2,
		'react/jsx-pascal-case': 2,
		'react/jsx-tag-spacing': 2,
		'react/forbid-component-props': 2,
		'react/no-access-state-in-setstate': 2,
		'react/no-redundant-should-component-update': 2,
		'react/no-this-in-sfc': 2,
		'react/no-unused-prop-types': 2,
		'react/no-unused-state': 2,
		'react/prefer-es6-class': 2,
		// 'react/state-in-constructor': [2, 'never'],
		'react/style-prop-object': 2
	}
};
