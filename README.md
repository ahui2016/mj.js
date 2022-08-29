# mj.js

受 Mithril.js 启发的基于 jQuery 实现的极简框架。

## 简介

本框架只有两个小函数共约 10 行代码，但使用起来的便利程度接近于 Mithril, 易学、易用、易理解，非常适用于小型项目。

## 为什么要模仿Mithril?

- 在使用 jQuery 写小项目的时候，通常习惯写一部分 HTML, 然后再写 js 去操作 DOM, 但这样做不方便做组件。
- 模仿了 Mithril 之后，完全不写 HTML, 一切都是 js, 因此非常轻松实现组件化，并且实际效果非常好，组件可以相互交流、可以嵌套、可以复用。
- 使用时，完完全全是 jQuery 的基本操作，对于已经会用 jq 的人来说，学习成本接近零。

## 安装使用

- 本框架只有两个小函数，就在本仓库的 mj.js 文件里，直接复制，粘贴到自己的代码里使用即可。
- 更具体的使用方法请看本仓库 examples 文件夹里的示例。
- 更多简介请看宣传文案 <https://v2ex.com/t/758276>

## 误解

- 我发现很多人误解了这个框架，只把注意力集中到生成 HTML 方面，不，这不是本框架的重点。
- 本框架的重点是组件，组件是真组件，本框架的组件不仅可以生成 HTML, 并且在生成 HTML 之后还能：
  1. 通过调用组件本身的方法来使组件发生变化
  2. 通过组件的 id 来访问组件，从而实现组件之间的交流
- 在 examples/userlist.html 的注释中有更具体的说明。

## 更多例子

- 一个与 Bootstrap 搭配使用的例子，比较复杂的界面也能实现，详见 <https://github.com/ahui2016/localtags/>
- [2021-08-26] 用 TypeScript 改写了 mj.js 并且进行了少量扩充，与 Bootstrap 搭配使用，详见 <https://github.com/ahui2016/iPelago-Server/blob/main/public/ts/src/mj.ts>

- 两个使用 TypeScript 版本的 mj.js 的例子:
  - <https://github.com/ahui2016/blogs-navi>
  - <https://github.com/ahui2016/dictplus>

- [2022-08-29] 一个后端用 Java, 前端用 mj.js 的例子 <https://github.com/ahui2016/monostich/> 及相关教程 <https://geeknote.net/SuperMild/posts/1450>
