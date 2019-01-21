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
	]
};
