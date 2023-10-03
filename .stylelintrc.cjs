module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  customSyntax: "postcss-less",
  rules: {
    // 指定十六进制颜色是否使用缩写。
    "color-hex-length": "short",
    // 注释前无须空行
    "comment-empty-line-before": "never",
    // 禁止空注释
    "comment-no-empty": true,
    // 使用数字或命名的 (可能的情况下) font-weight 值
    "font-weight-notation": null,
    // 在函数的逗号之后要求有一个换行符或禁止有空白
    "function-comma-newline-after": null,
    // 在函数的括号内要求有一个换行符或禁止有空白
    "function-parentheses-newline-inside": null,
    // url使用引号
    "function-url-quotes": "always",
    // 字符串使用单引号
    "no-descending-specificity": null,
    // 禁止空源
    "no-empty-source": null,
    // 禁止缺少文件末尾的换行符
    "no-missing-end-of-source-newline": null,
    // 指定Alpha值的百分比或数字表示法。
    "alpha-value-notation": "number",
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    // 禁止简写属性的冗余值
    "shorthand-property-no-redundant-values": true,
    // 指定class下划线命名
    "selector-class-pattern": "^([a-z][a-z0-9]*)([_|-][a-z0-9]+)*$",
    // 兼容自定义标签名
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: [],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    // 忽略伪类选择器 ::v-deep
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep", "placeholder"],
      },
    ],
  },
};
