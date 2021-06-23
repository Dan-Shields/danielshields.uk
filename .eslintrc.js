module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript'
    ],
    env: {
        "browser": true,
        "amd": true,
        "node": true
    },
    rules: {
        '@typescript-eslint/indent': [2, 4, {'SwitchCase': 1}],
        'vue/html-indent': [2, 4]
    },
    ignorePatterns: [
        'dist/*',
        'node_modules/*'
    ]
}
