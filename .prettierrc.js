module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '^@components/(.*)$',
        '^@features/(.*)$',
        '^@utils/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
