// .prettierrc.cjs
module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$",
    "^@/assets/(.*)$",
    "^@/utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
