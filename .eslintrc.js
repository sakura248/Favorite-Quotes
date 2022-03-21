module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "import", "jsx-a11y", "react", "react-hooks"],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    "no-nested-ternary": "off",
    "no-use-before-define": "off",
    "react/require-default-props": "off",
    "no-underscore-dangle": "off",
    "default-param-last": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // apply TS ish file only
        "@typescript-eslint/no-use-before-define": ["error"],
      },
    },
  ],

  // include: [
  //   ".eslintrc.js",
  //   // ...
  // ],
};
