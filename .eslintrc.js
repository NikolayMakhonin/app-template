// eslint-disable-next-line @typescript-eslint/no-var-requires
const svelteCompiler = require('svelte/compiler')

module.exports = {
	'extends': [
		'pro',
		// 'plugin:@typescript-eslint/recommended',
		// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		// web app only
		'require-await': 'off',
		'prefer-const' : 'off',
		'no-lonely-if' : 'off',

		// all
		// '@typescript-eslint/no-var-requires': 'off',
		'no-empty-function'                   : 'warn',
		'@typescript-eslint/no-empty-function': 'warn',
		'no-control-regex'                    : 'off',
		yoda                                  : 'off',
		'@typescript-eslint/no-unused-vars'   : 'off',
		'@typescript-eslint/no-shadow'        : [
			'error',
			{
				builtinGlobals                            : false,
				hoist                                     : 'never',
				allow                                     : [],
				ignoreTypeValueShadow                     : false,
				ignoreFunctionTypeParameterNameValueShadow: true,
			},
		],
	},

	env: {
		node: true,
		es6 : true,
	},

	// parser       : 'babel-eslint',
	parser       : '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion                : '2020',
		sourceType                 : 'module',
		allowImportExportEverywhere: false,
		codeFrame                  : true,
		project                    : 'tsconfig.eslint.json',
		// babelOptions               : {
		// 	configFile: './env/babel/configs/minimal.js'
		// },
	},

	plugins: [
		'@typescript-eslint',
		'sonarjs',
		'html',
		'svelte3',
	],
	settings: {
		'html/indent'           : '+tab',
		'html/report-bad-indent': 'error',
		'html/html-extensions'  : ['.html', '.svelte'],
	},

	overrides: [
		{
			files: ['src/*.html'],
			rules: {
				semi                : ['error', 'always'],
				'semi-style'        : ['error', 'last'],
				'prefer-rest-params': 'off',
				'no-var'            : 'off',
				'vars-on-top'       : 'off',
			},
			env: {
				browser: true,
				es6    : false,
				node   : false,
			},
			parser       : 'espree',
			parserOptions: {
				ecmaVersion: 5,
			},
		},
		{
			files    : ['**/*.svelte'],
			processor: 'svelte3/svelte3',
			parser   : 'espree',
			env      : {
				browser: true,
				node   : false,
			},
			settings: {
				'svelte3/preprocess': content => {
					content = content.replace(/<style-jss?(\s[^]*?)?>.*?<\/style-jss?>/sg, '')
					return content
				},
			},
			rules: {
				'unused-export-let': 'off',
			},
		},
	],
}
