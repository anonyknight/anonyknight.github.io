// Refer to https://json.schemastore.org/eslintrc.json
module.exports = {
  env: {
    browser: true,
    es2022: true,
    commonjs: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@docusaurus/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    allowImportExportEverywhere: true,
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.eslint.json",
  },
  overrides: [
    {
      files: [".eslintrc.{js,cjs}", "**/*.js", "**/*.jsx"],
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-unresolved": [
      2,
      { ignore: ["^@theme", "^@docusaurus", "^@site"] },
    ],
  },
};
