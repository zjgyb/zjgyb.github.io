---
title: 建一个vite模板
date: 2022-03-13
categories: Vue
---

## 初始化项目

这里直接初始化，初始模板采用vue+ts就好了，过程直接看官网
[地址](https://cn.vitejs.dev/guide/)

这里简单的列一下步骤：
1. `pnpm create vite`，创建的项目名称为`template`
2. `cd template && pnpm install`
3. `pnpm start`，启动查看是否正常

## VueRouter

1. 安装包，`pnpm add vue-router`
2. 在`src`目录下新建一个`router`目录并创建`index.ts`文件，并填写
```ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('views/home/index.vue') },
  { path: '/login', name: 'login', component: () => import('views/login/index.vue') },
  { path: '/:pathMatch(.*)*', name: '404', component: () => import('views/404/index.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
```

3. 由于views为类型别名，因此在`tsconfig.json`中配置

```json
{
    "compilerOptions": {
        // ...
        "paths": {
          "views/*": ["./src/views/*"]
        }
    }
}
```

4. 在`vite.config.ts`中也需要配置一下

```ts
import tsConfig from './tsconfig.json'

type Paths = Record<string, string[]>
const getAlias = (paths: Paths) => {
  const alias: Record<string, string> = {}
  const strReg = /.+(?=\/\*)/
  Object.keys(paths).forEach(key => {
    alias[key.match(strReg)[0]] = resolve(__dirname, paths[key][0].match(strReg)[0])
  })

  return alias
}

export default defineConfig({
    // ...
    resolve: {
        alias: getAlias(tsConfig.compilerOptions.paths)
    }
})
```

在这一步其实可以用一个vite插件解决[vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)

然后在`vite.config.js`中配置

```ts
// ...
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths()],
});
```

**注意**，还需要在`tsconfig.json`中配置一个属性，否则在vue文件内不生效

```json
{
  "compilerOptions": {
    // 就是这一个配置项
    "allowJs": true
  }
}
```

5. 入口文件（`main.js`）注册router

## Vuex

1. 安装包，`pnpm add vuex`
2. 在src目录下创建一个store文件夹并创建`index.ts`文件，并填写

```ts
import { createStore, Store } from 'vuex'

export interface RootState {
  count: number
  prefix: string
  name: string
}

const store: Store<RootState> = createStore({
  state () {
    return {
      prefix: 'prefix',
      name: 'name',
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    fullname(state) {
      return state.prefix + state.name
    }
  }
})

export default store
```

3. 在入口文件中引入
4. 测试使用

## Pinia

1. 按照包，`pnpm add pinia`
2. 在`src`目录下创建`piniaStore`文件夹并创建`index.ts`，写入：

```ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const prefix = ref('prefix')
    const name = ref('name')
    const fullname = computed(() => prefix.value + name.value)

    function increment() {
        count.value++
        prefix.value = 'changePrefix'
    }

    return {
        count,
        fullname,
        increment
    }
})
```

3. 在入口文件中导入

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

4. 测试效果

[官网地址](https://pinia.vuejs.org/)

## Tailwindcss

主要步骤看[官网](https://tailwindcss.com/docs/guides/vite)就可以了，我简单罗列一下

1. 安装包，`pnpm add tailwindcss postcss autoprefixer -D`
2. 创建配置文件，`npx tailwindcss init -p`
3. 在`tailwind.config.js`中添加相关代码

```ts
module.exports = {
    // ...
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ]
}
```

4. 创建`src/index.css`文件并填入：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. 在入口文件导入并测试是否生效
6. 推荐在VSCode中安装[插件](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)，用于开发提示，并在配置中设置相关选项

```json
{
    "editor.quickSuggestions": {
        "strings": true
    }
}
```

## Windicss

直接看[官网](https://windicss.org/integrations/vite.html)的安装教程就可以了

## Eslint+Prettier

在VSCode中需要安装`eslint`以及`prettier`插件

1. 安装包，`pnpm add eslint eslint-plugin-vue prettier eslint-config-prettier vue-eslint-parser @typescript-eslint/parser -D`
2. 根目录创建`.prettierrc.js`，并进行相关配置，配置项可以看[官网](https://prettier.io/docs/en/options.html)

```js
module.exports = {
    tabWidth: 4,
    singleQuote: true,
    bracketSameLine: true
}
```

3. 根目录创建`.eslintrc.js`，并配置

```js
module.exports = {
    env: {
        node: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended', // 推荐的vue3校验规则
        'prettier'
    ]
}
```

4. 为了`eslint`报错能更明显的体现（在浏览器中），可以安装`vite-plugin-eslint`，然后在`vite.config.ts`中配置：

```ts
// ...
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  // ...
  plugins: [eslintPlugin()]
})
```

不过有一个**问题**：项目初始启动的时候要保证没有eslint报错，不然启动后即使修复了也没用，解决措施是解决后需要重新启动

如果不想在浏览器中报错也可以用另一个插件`@nabla/vite-plugin-eslint`，报错信息会显示在控制台中

5. 自动修复功能，在VSCode的用户配置中配置相关选项
```json
{
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "eslint.validate": ["typescript", "vue", "javascript"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true
}
```

6. 当然也可以在`package.json`中配置相应的修复选项

```json
{
    "scripts": {
        "eslint": "eslint",
        "eslint:lint": "eslint --fix",
        "prettier": "prettier -w ./src/**/*.{js,ts,vue,css,less}"
    }
}
```

### 相关链接地址

- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)
- [@nabla/vite-plugin-eslint](https://github.com/nabla/vite-plugin-eslint)

## Vue-TSC

在vue中除了用eslint和prettier校验外，还可以加上[vue-tsc](https://www.npmjs.com/package/vue-tsc)，主要用于vue文件中的ts类型检查

1. 安装，`pnpm add vue-tsc -D`
2. 在`package.json`中配置

```json
{
    "scripts": {
        "type-check": "vue-tsc --noEmit"
    }
}
```

这个Vue+TS模板貌似自带会安装相应的包

## husky

1. 安装`pnpm add husky @commitlint/config-conventional @commitlint/cli lint-staged -D`
2. 在`package.json`中配置，并执行`pnpm prepare`
```json
{
    "scripts": {
        "prepare": "husky install"
    }
}
```
3. 根目录创建`commitlint.config.js`以及`lint-staged.config.js`，分别写入

```js
// commitlint.config.js
module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ]
};
```

```js
// lint-staged.config.js
module.exports = {
    "./src/**/*.{ts,vue,js}": [
        "pnpm test",
        "git add ."
    ]
}
```

4. 执行`npx husky add .husky/pre-commit "npx --no-install lint-staged"`以及`npx husky add .husky/commit-msg "npx --no-install commitlint --edit \$1"`，查看是否在`.husky`文件夹下出现相应的文件

5. `package.json`配置相应选项

```json
   "scripts": {
        "test": "pnpm prettier && pnpm eslint:lint && pnpm type-check"
    }
```

## 总结

以上就是需要用到的工具了，当然还有`Stylelint`这种与CSS校验和格式化相关的工具以及[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)这种按需导入组件相关的工具，这里暂时先不一一列举了，有需要用到再补充