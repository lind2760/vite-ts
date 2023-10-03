module.exports = [
  {
    //字符串是否使用单引号，默认为false，使用双引号
    singleQuote: true,
    //一个tab代表几个空格数，默认为80
    tabWidth: 2,
    //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    bracketSpacing: true,
    //是否使用尾逗号，有三个可选值"<none|es5|all>"
    //一行的字符数，如果超过会进行换行，默认为80
    printWidth: 100,
    //行位是否使用分号，默认为true
    semi: true,
    arrowParens: "avoid", //箭头函数单个参数的情况是否省略括号 always带括号
    trailingComma: "all", // 尾随逗号
    jsxSingleQuote: true, //// 尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: "<es5|none|all>"）
    jsxBracketSameLine: false, // 在jsx中把'>' 放同一行
    overrides: [
      {
        files: ".prettierrc",
        options: {parser: "typescript"},
      },
    ],
  },
];
