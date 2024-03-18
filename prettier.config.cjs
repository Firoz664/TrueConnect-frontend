// prettier.config.cjs
module.exports = {
    bracketSpacing: true,
    semi: false,
    trailingComma: "all",
    printWidth: 80,
    tabWidth: 2,
    importOrder: [
      "^(next/(.*)$)|^(next$)",
      "^(react/(.*)$)|^(react$)",
      "<THIRD_PARTY_MODULES>",
      "^@/components/(.*)$|^components/(.*)$",
      "^@/lib/(.*)$",
      "^@/styles/(.*)$",
      "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    plugins: [
      require.resolve("@trivago/prettier-plugin-sort-imports"),
      // require.resolve("prettier-plugin-tailwindcss")
    ],
  };