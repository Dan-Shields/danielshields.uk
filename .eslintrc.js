module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/typescript'
    ],
    rules: {
        'semi': ["error", "never"],
        'no-console': 0,
        'no-debugger': 0,
        'no-use-before-define': [2, { 'functions': false }],
        'padded-blocks': 0,
        'no-undef': 0,
        'no-constant-condition': ['error', { 'checkLoops': false }],
        'constructor-super': 0,

        'vue/v-bind-style': 1,
        'vue/v-on-style': 1,
        'vue/no-v-html': 1,
        'vue/html-self-closing': [2, {
            'html': {
                'component': 'always',
                'normal': 'never'
            }
        }],
        'vue/attribute-hyphenation': 0,
        'vue/html-indent': [2, 4],
        'vue/max-attributes-per-line': [1, {
            'singleline': 3
        }],
        'vue/singleline-html-element-content-newline': 0
    },
    ignorePatterns: [
        'dist/*',
        'node_modules/*'
    ]
}
