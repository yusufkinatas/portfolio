module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "canonical",
    "jest",
    "react-hooks",
    "simple-import-sort",
    "unicorn",
  ],
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/no-default-export": "error",
    "no-undef-init": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "TSTypeReference[typeName.name=/^(Plugin|PluginKey)$/]:not([typeParameters])",
        message: "Please provide a generic to avoid implicit `any`",
      },
      {
        selector:
          "TSTypeReference[typeName.name=/^(Plugin|PluginKey)$/][typeParameters.params.0.type=TSAnyKeyword]",
        message: "Please replace `any` with a specific type",
      },
      {
        selector:
          "NewExpression[callee.name=/^(Plugin|PluginKey)$/]:not([typeParameters])",
        message: "Please provide a generic to avoid implicit `any`",
      },
      {
        selector:
          "NewExpression[callee.name=/^(Plugin|PluginKey)$/][typeParameters.params.0.type=TSAnyKeyword]",
        message: "Please replace `any` with a specific type",
      },
    ],
    camelcase: "off",
    "default-param-last": "off",
    "import/no-cycle": "error",
    "import/prefer-default-export": "off",
    "no-await-in-loop": "off",
    "no-console": "error",
    "no-dupe-class-members": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "no-continue": "off",
    "react/react-in-jsx-scope": "off",
    "no-return-await": "off",
    "max-classes-per-file": "off",
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "consistent-return": "off",
    "default-case": "off",
    "class-methods-use-this": "off",
    "react/no-unescapted-entities": "off",
    "jsx-a11y/no-autofocus": "off",
    "no-plusplus": "off",
    "prefer-destructuring": "off",
    "no-else-return": "off",
    "arrow-body-style": "off",
    "react/no-unescaped-entities": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "^(useModal|useUserGatedEffect)$",
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-key": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/self-closing-comp": "error",
    "react/require-default-props": "off",
    "no-shadow": "off",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/no-shadow": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],
    "jsx-a11y/label-has-associated-control": "off",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "id-length": [
      "error",
      {
        min: 2,
        exceptions: ["_", "x", "y", "z", "a", "b", "i"],
        properties: "never",
      },
    ],
    "no-unused-expressions": "error",
    curly: ["error", "all"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        minimumDescriptionLength: 10,
      },
    ],
    "no-empty-function": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: ["^draft"],
        ignorePropertyModificationsFor: [
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext",
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "unicorn/filename-case": "error",
    "unicorn/import-style": [
      "error",
      {
        styles: {
          react: { named: true },
          "react-dom": { named: true },
        },
      },
    ],
    "unicorn/no-array-for-each": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/prefer-nullish-coalescing": ["error"],
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: { attributes: false, properties: false } },
        ],
        "no-constant-condition": "off",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "all", // check all args, not just those after-used
            argsIgnorePattern: "^_+",
            varsIgnorePattern: "^_+",
          },
        ],
      },
    },
    {
      files: ["./src/pages/**"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
