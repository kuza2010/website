module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [],
    rules: {
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'never'
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 2,
                allowFirstLine: true
            }
        }],
        indent: ['error', 4]
    }
}
