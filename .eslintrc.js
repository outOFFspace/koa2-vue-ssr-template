// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        "indent": [2, 4],
        'global-require': 0,
        'no-param-reassign': 0,
        'func-names': 0,
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        'semi': [2, 'never'],
        'object-curly-spacing': ["warn", "never"],
        'array-bracket-spacing': ["warn", "never"],
        "object-curly-newline": 0,
        'comma-dangle': 0,
        'prefer-promise-reject-errors': 0,
        'import/prefer-default-export': 0,
        'no-console': 0,
        'no-plusplus': 0,
        'no-useless-concat': 0,
        'no-unused-vars': [2, {'args': 'none'}],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
