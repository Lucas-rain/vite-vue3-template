# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

#### 模板来源
https://juejin.cn/post/7228978346502946874
#### 1、创建项目
0. vscode 安装插件：Volar（确保开发vue2时的Vetur插件禁用），TypeScript Vue Plugin，Prettier - Code formatter，ESlint

1. 创建项目

```javaScript
npm create vite@latest vite-vue-ts-seed -- --template vue-ts //基于vite最新稳定版本创建项目 项目名称vite-vue-ts-seed

//  cd vite-vue-ts-seed
//  npm install
//  npm run dev
```
1. 1. npm install 报错： 

npm ERR! code ERR_SOCKET_TIMEOUT
npm ERR! network Socket timeout
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'

解决：重新install 一下

1. 2. npm run ts // 运行ts检测是否存在报错

1. 3.  npm run lint //修复文件中不规范的代码，如没有加分号的自动 修复补充

1. 4. 按需引入插件
 npm install unplugin-vue-components unplugin-auto-import -D

 1. 5. 使用 npm run test 启动命令，读取.env 与 .env.test的内容
 .env 文件都会读取，环境公共配置