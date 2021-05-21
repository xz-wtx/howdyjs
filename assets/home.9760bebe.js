import{_ as n}from"./ReadmeFrame.13908aef.js";import{e as o,r as e,b as a,f as s,w as t,p as r,g as d,o as l}from"./vendor.f3fe9e6c.js";var h=o({name:"Home",components:{ReadmeFrame:n},setup:()=>({readme:'<h1 style="text-shadow: 3px 3px #5b9df3;color: transparent;-webkit-text-stroke-color: #262626;-webkit-text-stroke-width: 2px;">Howdy</h1>\n<br>\n\n<p><strong>一个包含Javascript插件、Vue3组件、Vue3指令的轻量工具组件库</strong><br><em>A universal component packages of javascript plugins or tools</em> </p>\n<blockquote>\n<p>当前该仓库已使用<code>Vue3</code> + <code>Typescript</code>，基于Vue2组件的旧版项目请前往<a href="https://github.com/leon-kfd/howdyjs/tree/howdy" target="_blank">howdy分支</a>查看。</p>\n</blockquote>\n<h2 id="link">Link</h2>\n<ul>\n<li><a href="https://github.com/leon-kfd/howdyjs" target="_blank">⚡Github</a></li>\n<li><a href="https://kongfandong.cn/howdy" target="_blank">📖Document</a></li>\n<li><a href="https://www.npmjs.com/search?q=%40howdyjs" target="_blank">💾NPM</a></li>\n</ul>\n<hr>\n<h2 id="组件">组件</h2>\n<ol>\n<li><p><strong><a href="https://kongfandong.cn/howdy/resize">@howdyjs/resize</a></strong><br>✨通过拖拽更改元素尺寸插件</p>\n</li>\n<li><p><strong><a href="https://kongfandong.cn/howdy/img-zoom">@howdyjs/img-zoom</a></strong><br>✨图片放大插件，支持按组浏览下一张图片</p>\n</li>\n<li><p><strong><a href="https://kongfandong.cn/howdy/size-observer">@howdyjs/size-observer</a></strong><br>✨监听元素尺寸变化插件</p>\n</li>\n<li><p><strong><a href="https://kongfandong.cn/howdy/scroll">@howdyjs/scroll</a></strong><br>✨自定义滚动条插件</p>\n</li>\n<li><p><strong><a href="https://kongfandong.cn/howdy/to-drag">@howdyjs/to-drag</a></strong><br>✨设置Dom可拖动插件</p>\n</li>\n<li><p><strong><a href="https://kongfandong.cn/howdy/animation-dialog">@howdyjs/animation-dialog</a></strong><br>✨动画模态框Vue3组件</p>\n</li>\n<li><p><strong><a href="https://kongfandong.cn/howdy/standard-tabs">@howdyjs/standard-tabs</a></strong><br>✨移动端标签页Vue3组件</p>\n</li>\n<li><p><strong><a href="https://kongfandong.cn/howdy/mouse-menu">@howdyjs/mouse-menu</a></strong><br>✨自定义右键菜单Vue3组件</p>\n</li>\n</ol>\n<hr>\n<h2 id="开始使用">开始使用</h2>\n<h3 id="安装">安装</h3>\n<pre><code class="language-cmd"><span class="hljs-regexp">//</span> 新版已进行分包\nnpm i -S @howdyjs/XXX\n\n<span class="hljs-regexp">//</span> 旧版\nnpm i -S howdyjs\n</code></pre>\n<h3 id="使用">使用</h3>\n<ul>\n<li>新版进行了分包，可按需安装相应的分包</li>\n<li>新版的Vue组件只可在Vue3中使用，而指令做了向下兼容可同时在Vue2.X中使用</li>\n<li>多数包是基于原生JS编写的，基本可直接原生使用，只是为了方便提供了VUE指令的封装形式</li>\n<li>若需要在Vue2.X中使用，可使用旧版，旧版文档 <a href="https://github.com/leon-kfd/howdyjs/blob/howdy/README.md">参考此处</a></li>\n</ul>\n<h2 id="关于项目">关于项目</h2>\n<h3 id="packages">Packages</h3>\n<ul>\n<li>使用<code>lerna</code>进行分包管理，执行<code>npm run bootstrap</code>项目初始化</li>\n<li>使用<code>rollup</code>进行打包， 执行<code>npm run build:pkg</code>打包各Packages，包含cjs、es和其d.ts文件</li>\n</ul>\n<h3 id="展示站点">展示站点</h3>\n<ul>\n<li>开发环境及展示站点使用<code>vite</code>搭建，lerna初始化、安装依赖、打包Packages，完成后执行<code>npm run example</code>启动</li>\n<li>站点路由文件使用Node读取文件目录<strong>自动生成</strong>，执行<code>npm run gen-router</code>可重新生成路由文件</li>\n</ul>\n<h4 id="view-author-blog"><a href="https://www.kongfandong.cn" target="_blank" style="color: rgb(75, 9, 150)">VIEW AUTHOR BLOG</a></h4>\n'.replace(/https:\/\/kongfandong.cn\/howdy/g,"./#")})});const i=t();r("data-v-5b29f4de");const p={id:"Home"};d();const g=i(((n,o,t,r,d,h)=>{const i=e("readme-frame");return l(),a("div",p,[s(i,{readme:n.readme},null,8,["readme"])])}));h.render=g,h.__scopeId="data-v-5b29f4de";export default h;