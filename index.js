'use strict';

module.exports = {
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
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-boolean-value': 1,
		'react/jsx-closing-tag-location': 1,
		'react/jsx-curly-spacing': 1,
		'react/jsx-equals-spacing': 1,
		'react/jsx-first-prop-new-line': 1,
		'react/jsx-handler-names': 1,
		'react/jsx-curly-brace-presence': 1,
		'react/jsx-props-no-multi-spaces': 1,
		'react/jsx-space-before-closing': 1,
		'react/jsx-fragments': 2,
		'react/jsx-pascal-case': 2,
		'react/jsx-tag-spacing': 2
	}
};
