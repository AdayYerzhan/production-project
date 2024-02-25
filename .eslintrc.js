module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'xo',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        "i18next",
    ],
    rules: {
        'react/jsx-indent': [2, 4],             // Оступ JSX 4 пробела
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],             // Оступ обычный 4 пробела
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],  // Разрешение на '.jsx', '.tsx'
        'import/no-unresolved': 'off',          // Абсолютные пути
        'import/prefer-default-export': 'off',  // Экспорт по умолчанию
        'no-unused-vars': 'warn',               // Не ипользуемые переменные
        'import/require-default-props': 'off',  // Дефолтное значение по Пропсу
        'react/react-in-jsx-scope': 'off',      // Импорт Реката
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'capitalized-comments': 'off',
        'no-multi-spaces': 'off',
        'object-curly-spacing': 'off',
        'react/no-deprecated': 'off',
        quotes: 'off',
        'i18next/no-literal-string': ['error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
