---
title: Eslint入门
date: 2022-12-17
categories: JavaScript
publish: false
---

从配置项开始说起

## root

可选值为`true`

作用：停止向父元素目录查找规则

例如有如下目录结构：

```
template
  - package.json
  - .eslintrc.js
  - src
    - login
      - .eslintrc.js
      - login.tsx
```

一般情况下，对于 `login.tsx` 这个文件校验规则是 `login` 目录下的 `.eslintrc.js` 和 `template` 目录下 `.eslintrc.js` 之间共同作用的结果，如果两个配置文件的规则产生冲突，那么以最近的规则为准，即 `login` 目录下的 `.eslintrc.js` 文件

但是假如在 `login` 目录下的校验文件中设置 `root: true`，那么校验规则不再向上寻找，即 `login.tsx` 文件的校验规则**只**受到当前 `.eslintrc.js` 校验文件的影响

## globals

常用的配置项为 `readonly` 和 `true`

当使用一个自定义全局变量时需要配置

例如：

```js
console.log(abc);
```

```js
{
    "globals": {
        abc: true,
        abc: 'readonly',
    }
}
```

## env

指定运行环境，可以理解为提供了批量的 `globals` 的集合，可以查看[globals](https://github.com/sindresorhus/globals)这个包

```js
{
  env: {
    browser: true, // 浏览器
    es2020: true // es支持版本
  },
}
```

例如，如果在 `node` 项目中需要用到全局变量 `__dirname`，那么 `env` 需要加一下 `node: true`，否则eslint校验时会出错


## ignorePatterns

校验时忽略某些文件和目录，也可以采用`.eslintignore`来定义

```js
{
  ignorePatterns: ['dist', '.eslintrc.cjs'],
}
```

## parse

例如：
```js
{
  parser: '@typescript-eslint/parser',
}
```

解析器，用于解析文件，这个也就是 `eslint` 识别文件的核心，默认使用 [Espree](https://github.com/eslint/espree) 进行解析

举一个简单的例子

```js
const ast = espree.parse('let foo = "bar"', { ecmaVersion: 6 });
console.log(ast);
```

得到如下结果：

```js
// Node
{
  type: 'Program',
  start: 0,
  end: 15,
  body: [
    // Node
    {
      type: 'VariableDeclaration',
      start: 0,
      end: 15,
      // Node[]
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 4,
          end: 15,
          id: {
            type: 'Identifier',
            start: 4,
            end: 7,
            name: 'foo'
          },
          init: {
            type: 'Literal'
            start: 10,
            end: 15,
            raw: '"bar"',
            value: 'bar'
          }
        }
      ],
      kind: 'let'
    }
  ],

  // 解析的类型 script module commonjs
  sourceType: 'script'
}
```

从上面的解析出的代码可以看到，其实就是把代码解析成抽象语法树，然后对抽象语法树进行校验

其他的解析器有：

目前已经不活跃了
- [Esprima](https://github.com/jquery/esprima)

早期的 `Espree` 就是基于 `Esprima` 一个分支扩展出来的

ESLint 的默认解析器和核心规则只支持最新的最终 ECMAScript 标准，不支持 Babel 提供的实验性（如新功能）和非标准（如 Flow 或 TypeScript 类型）语法。@babel/eslint-parser 是一个解析器，它允许 ESLint 在由 Babel 转换的源代码上运行。
- [@babel/eslint-parser](https://github.com/babel/babel)

例如[proposal-partial-application](https://github.com/tc39/proposal-partial-application)这个语法：

```js
const code = `
let a = 3;
const f = (x, y) => x + y;

const g = f(?, a);

g(1); // 4
`;
```

使用 `Espree` 并不能解析出以上的语法，但是使用 `@babel/eslint-parser` 可以，只需要在 `babel` 中安装 [@babel/plugin-proposal-partial-application](https://babeljs.io/docs/babel-plugin-proposal-partial-application) 这个插件，然后在 `babel` 配置文件中配置

```js
module.exports = {
  presets: [
    ["@babel/preset-env"]
  ],
  plugins: ["@babel/plugin-proposal-partial-application"]
};
```

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint)

与 `@babel/eslint-parser` 的差异是虽然可以解析 `TypeScript`，但是并不支持在 `TypeScript` 进行校验

- []

## parseOptions

上面的虽然指定了解析器，但是还需要一些配置参数来控制输出，因此由 `parseOptions` 来控制

```js
{
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
}
```

一些基本的配置：

- ecmaVersion: ECMAScript版本
- sourceType: 模块化的方式
- allowReserved：允许使用保留字作为标识符（当前没必要设置，因为这个和ecmaVersion3有关）
- ecmaFeatures
 jsx: true
 globalReturn
 impliedStrict

可以根据需要，自定义解析器可以额外添加一些参数配置

- project

```js

{
  parserOptions: {
    project: 'tsconfig.json',
  }
}
```

## rules

ESlint自带了大量的内置规则，可以通过rules来开启或者关闭

`off`或者`0`，`warn`或者`1`，`error`或者`2`，`warn`和`error`的差异是触发时是否退出代码

```js
{
    rules: {
        // 'no-undefined': ['error'],
        'no-undefined': 'error'
    }
},
```

除了第一个参数外，后面的参数根据需要配置不同的参数，例如：

```js
{
    rules: {
        quotes: ['error', 'double'],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    }
}
```

## extends

为了方便，通过该参数可以配置一系列校验规则

- `eslint:recommended`: eslint默认推荐的规则

```js
{
  extends: [
    'eslint:recommended',
  ]
}
```

如果取消其中的一些配置，可以使用 `rules` 进行覆盖

当然还有一些其他的规则，例如typescript中有`plugin:@typescript-eslint/recommended`，react相关的有`plugin:react-hooks/recommended`

命名规则：

例如`plugin:react-hooks/recommended`，那么这个插件名称叫做`eslint-plugin-react-hooks`，前面可自动省略

主要根据`plugin`的命名规则来设置，可[查看](https://eslint.org/docs/latest/use/configure/plugins)

当然也可以通过自定义文件来引入拓展，例如一些已经配置的规则或者需要忽略的规则

```js
{
  extends: [
    './xxx',
  ]
}
```

## plugins

```js
{
    plugins: ['react-refresh'],
    rules: {
       'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
    }
}
```

自定义插件，最好发布到npm中来引用，**不建议自定义**路径，可以`pnpm install ./xxx`

这里可以看这个包[eslint-plugin-custom-plugins
](https://www.npmjs.com/package/eslint-plugin-custom-plugins)

```js
// no-foo.js
module.exports = {
    rules: {
      'no-foo': {
        meta: {
          messages: {
            avoidName: "不允许使用变量 '{{ name }}'"
          }
        },
        create: (context) => {
          return {
            Identifier(node) {
              if (node.name === "foo") {
                context.report({
                  node,
                  messageId: "avoidName",
                  data: {
                    name: "foo",
                  }
                });
              }
            }
          };
        }
      }
    }
  };
```

```js
const noFooRule = require('./no-foo.js');

const rules = {
  'no-foo': noFooRule,
};

exports.rules = rules;
```

如果用extends默认设置，使用以下内容

```js
const noFooRule = require("./no-foo.js");

const configs = {
  recommended: {
    plugins: ['example'],
    rules: {
      'example/no-foo': 'error',
    }
  }
};
const rules = {
  'no-foo': noFooRule,
};

exports.configs = configs;
exports.rules = rules;
```

## settings

用于配置一些全局的设置，这些设置可以在代码中的规则定义中引用

这个可以看[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

```ts
{
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "fragment": "Fragment",
      "version": "detect",
      "flowVersion": "0.53"
    },
  }
}
```

## overrides


## 参考来源

- [Eslint官网](https://eslint.org/)
- [ESLint配置文件.eslintrc参数说明](https://segmentfault.com/a/1190000020835739)