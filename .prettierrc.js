/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
