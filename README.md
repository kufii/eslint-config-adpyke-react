# eslint-config-adpyke-react
A highly opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) config that I use for my React projects. It uses tab indentation, has strict white space rules, and enforces ES6 standards.

## Installation
`$ npm install --save-dev eslint eslint-config-adpyke-react eslint-plugin-react`

## Usage
Once the `eslint-config-adpyke-react` package is installed, you can use it by specifying `adpyke-react` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```javascript
{
	"extends": "adpyke-react",
	"rules": {
		// Additional, per-project rules...
	}
}
```
