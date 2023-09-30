module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 当代码出现Prettier校验出的格式化问题，ESLint会报错
    // "prettier/prettier": "error"
  },
  settings: {
    "react": {
      // 表示探测当前 node_modules 安装的 react 版本
      version: "detect"
    }
  }
}
