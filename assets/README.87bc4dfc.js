var n='<h1 id="img-zoom">Img Zoom</h1>\n<p><img src="https://img.shields.io/npm/v/@howdyjs/img-zoom" alt="Version">\n<img src="https://img.shields.io/bundlephobia/min/@howdyjs/img-zoom?color=%2344cc88" alt="Size"></p>\n<p><strong>图片放大插件</strong></p>\n<h2 id="特性">特性</h2>\n<ol>\n<li>实现点击图片放大显示</li>\n<li>支持设置同组图片，可在放大的模态框进行切换上一张下一张</li>\n<li>图片Loading加载效果</li>\n<li>可设置点击后加载显示的是另外一张大图</li>\n<li>封装了vue指令的形式</li>\n</ol>\n<h2 id="原生使用">原生使用</h2>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> ImgZoom <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/img-zoom&#x27;</span>\n<span class="hljs-keyword">new</span> ImgZoom({\n  el: <span class="hljs-string">&#x27;#el&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>\n  <span class="hljs-keyword">options</span>: {\n    <span class="hljs-comment">// Your Options</span>\n    <span class="hljs-comment">// 参考下方说明</span>\n  }\n})\n</code></pre>\n<ul>\n<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js</a></li>\n<li>UMD Name: <code>HowdyImgZoom</code></li>\n<li>UMD Example: <a href="https://codepen.io/leon-kfd/pen/XWNKyLe" target="_blank">Click here</a></li>\n</ul>\n<h3 id="options-objcet">Options (Objcet)</h3>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n<th align="left">可选值</th>\n<th align="left">默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">imgSrc</td>\n<td align="left">放大后的图片地址, 默认不传会使用原img的src</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">title</td>\n<td align="left">显示图片标题</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">group</td>\n<td align="left">启用图片分组功能，传一个自定义组名</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">zoomCursor</td>\n<td align="left">是否显示放大镜cursor</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">showCloseBtn</td>\n<td align="left">是否显示关闭按钮，开启后只能通过点击关闭按钮关闭模态框</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">preventDefault</td>\n<td align="left">是否阻止默认行为，例如父元素的A标签跳转</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">showLoading</td>\n<td align="left">加载图片时，是否显示loading动画</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">true</td>\n</tr>\n<tr>\n<td align="left">customLoading</td>\n<td align="left">自定义loading动画，函数类型，需要返回HtmlElement</td>\n<td align="left">Funtion</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n</tbody></table>\n<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ImgZoomDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/resize&#x27;</span>\n<span class="hljs-comment">// Vue3全局引入</span>\napp.use(ImgZoomDirective)\n\n<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>\nVue.use(ImgZoomDirective)\n\n<span class="hljs-comment">// 组件内引入</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">directive</span>: {\n    <span class="hljs-attr">ImgZoom</span>: ImgZoomDirective\n  }\n}\n</code></pre>\n<p><strong>指令支持简写</strong></p>\n<pre><code class="language-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-img-zoom:example</span>=<span class="hljs-string">&quot;http://a.com/b.png&quot;</span> /&gt;</span>\n// 等价于\n<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-img-zoom</span>=<span class="hljs-string">&quot;</span></span></span><span class="hljs-template-variable">{group: &#x27;example&#x27;, imgSrc: &#x27;http://a.com/b.png&#x27;}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">&quot;</span> /&gt;</span></span>\n</code></pre>\n';export{n as default};
