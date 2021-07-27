export default'<h1 id="mouse-menu">Mouse Menu</h1>\n<p><img src="https://img.shields.io/npm/v/@howdyjs/mouse-menu" alt="Version">\n<img src="https://img.shields.io/bundlephobia/min/@howdyjs/mouse-menu?color=%2344cc88" alt="Size"></p>\n<p><strong>自定义菜单-VUE3组件/指令</strong></p>\n<h2 id="特性">特性</h2>\n<ol>\n<li>默认封装成Vue指令</li>\n<li>支持自定义样式</li>\n<li>支持子菜单</li>\n<li>支持加入菜单图标</li>\n<li><em>支持移动端长按唤出菜单</em>(v1.7.0后支持)</li>\n</ol>\n<h2 id="配置">配置</h2>\n<h3 id="props指令value-objcet">Props/指令Value (Objcet)</h3>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n<th align="left">可选值</th>\n<th align="left">默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">el</td>\n<td align="left">触发的Dom元素（以Vue组件方式或CustomMenu函数方式使用时必须传入）</td>\n<td align="left">-</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">menuWidth</td>\n<td align="left">菜单宽度</td>\n<td align="left">Number</td>\n<td align="left">-</td>\n<td align="left">200</td>\n</tr>\n<tr>\n<td align="left">menuList</td>\n<td align="left">生成菜单项的数组，具体配置参考下表</td>\n<td align="left">Array</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">hasIcon</td>\n<td align="left">是否有菜单图标</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">iconType</td>\n<td align="left">菜单图标的类型(目前仅支持字体图标)</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">font-icon</td>\n</tr>\n<tr>\n<td align="left">menuWrapperCss</td>\n<td align="left">菜单容器的CSS设置，具体配置参考下表</td>\n<td align="left">Object</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">menuItemCss</td>\n<td align="left">菜单项的CSS设置，具体配置参考下表</td>\n<td align="left">Object</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">params</td>\n<td align="left">传给处理函数的自定义参数，会注入到下方各回调函数的首个参数中</td>\n<td align="left">Any</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">appendToBody</td>\n<td align="left">容器是否挂载到body上</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">true</td>\n</tr>\n<tr>\n<td align="left">disabled</td>\n<td align="left">是否禁用整个菜单，接收一个函数</td>\n<td align="left">(params: any) =&gt; boolean</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">useLongPressInMobile</td>\n<td align="left">移动端下兼容使用长按事件唤出菜单, 但长按模式不支持多级菜单（仅支持指令方式）</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">longPressDuration</td>\n<td align="left">长按事件需持续时间,单位ms</td>\n<td align="left">Number</td>\n<td align="left">-</td>\n<td align="left">500</td>\n</tr>\n<tr>\n<td align="left">injectCloseListener</td>\n<td align="left">自动注入关闭菜单的Listener，设为false时需自行处理</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">true</td>\n</tr>\n</tbody></table>\n<h4 id="menulist-菜单项数组配置">menuList-菜单项数组配置</h4>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n<th align="left">可选值</th>\n<th align="left">默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">fn</td>\n<td align="left">点击菜单后执行的回调,回调参数1为用户传入的Params, 参数2为点击右键时所在的HtmlElement元素（使用document.elementFromPoint获取）, 参数3为指令绑定的当前元素</td>\n<td align="left">Function</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">label</td>\n<td align="left">菜单名, 可使用函数，回调参数同fn选项</td>\n<td align="left">String, Function</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">tips</td>\n<td align="left">菜单辅助文本（处于右侧的文本），可使用函数，回调参数同fn选项</td>\n<td align="left">String, Function</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">icon</td>\n<td align="left">菜单图标的类名（字体图标)</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">hidden</td>\n<td align="left">菜单项是否隐藏，可使用函数，回调参数同fn选项</td>\n<td align="left">Boolean, Function</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">disabled</td>\n<td align="left">菜单项是否不可点击，可使用函数，回调参数同fn选项</td>\n<td align="left">Boolean, Function</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">children</td>\n<td align="left">子菜单的菜单项数组（配置与此表一致，但目前仅支持二级菜单）</td>\n<td align="left">Array</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n<tr>\n<td align="left">line</td>\n<td align="left">是否为分割线,该值为True时,以上设置均失效</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">-</td>\n</tr>\n</tbody></table>\n<h4 id="menuwrappercss-菜单容器css设置">menuWrapperCss-菜单容器CSS设置</h4>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n<th align="left">可选值</th>\n<th align="left">默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">background</td>\n<td align="left">菜单容器背景色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">#c8f2f0</td>\n</tr>\n<tr>\n<td align="left">boxShadow</td>\n<td align="left">菜单容器阴影</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">0 1px 5px #888</td>\n</tr>\n<tr>\n<td align="left">padding</td>\n<td align="left">默认padding</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">5px 0</td>\n</tr>\n<tr>\n<td align="left">borderRadius</td>\n<td align="left">圆角</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">4px</td>\n</tr>\n<tr>\n<td align="left">lineColor</td>\n<td align="left">分割线颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">#ccc</td>\n</tr>\n<tr>\n<td align="left">lineMargin</td>\n<td align="left">分割线Margin</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">5px 0</td>\n</tr>\n</tbody></table>\n<h3 id="menuitemcss-菜单项css设置">menuItemCss-菜单项CSS设置</h3>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n<th align="left">可选值</th>\n<th align="left">默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">height</td>\n<td align="left">每项高度</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">30px</td>\n</tr>\n<tr>\n<td align="left">padding</td>\n<td align="left">-</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">0 10px</td>\n</tr>\n<tr>\n<td align="left">iconSize</td>\n<td align="left">图标大小</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">20px</td>\n</tr>\n<tr>\n<td align="left">iconFontSize</td>\n<td align="left">字体图标字体大小(设置类型为字体图标时可用)</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">null</td>\n</tr>\n<tr>\n<td align="left">iconColor</td>\n<td align="left">字体图标颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">#484852</td>\n</tr>\n<tr>\n<td align="left">labelColor</td>\n<td align="left">菜单项标题颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">#484852</td>\n</tr>\n<tr>\n<td align="left">labelFontSize</td>\n<td align="left">菜单项标题字体大小</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">14px</td>\n</tr>\n<tr>\n<td align="left">tipsColor</td>\n<td align="left">菜单辅助文字颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">#889</td>\n</tr>\n<tr>\n<td align="left">tipsFontSize</td>\n<td align="left">菜单辅助文字字体大小</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">12px</td>\n</tr>\n<tr>\n<td align="left">arrowColor</td>\n<td align="left">指示箭头颜色（出现子菜单时生成）</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">#484852</td>\n</tr>\n<tr>\n<td align="left">arrowSize</td>\n<td align="left">指示箭头大小（指示箭头为使用border生成的三角形)</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">10px</td>\n</tr>\n<tr>\n<td align="left">disabledColor</td>\n<td align="left">菜单禁用状态时的颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">#bcc</td>\n</tr>\n<tr>\n<td align="left">hoverBackground</td>\n<td align="left">hover时菜单项的背景色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">rgba(255,255,255,.8)</td>\n</tr>\n<tr>\n<td align="left">hoverLabelColor</td>\n<td align="left">hover时菜单项label的颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">null</td>\n</tr>\n<tr>\n<td align="left">hoverTipsColor</td>\n<td align="left">hover时菜单项tips的颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">null</td>\n</tr>\n<tr>\n<td align="left">hoverArrowColor</td>\n<td align="left">hover时菜单项arrow的颜色</td>\n<td align="left">String</td>\n<td align="left">-</td>\n<td align="left">null</td>\n</tr>\n</tbody></table>\n<blockquote>\n<p>以上涉及的CSS部分配置使用css3的css变量实现，若需兼容IE请自己定义样式表</p>\n</blockquote>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th align="left">方法名</th>\n<th align="left">说明</th>\n<th align="left">参数</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">show</td>\n<td align="left">显示菜单，一般不需要自行调用</td>\n<td align="left">x:number,y:number</td>\n</tr>\n<tr>\n<td align="left">close</td>\n<td align="left">关闭菜单</td>\n<td align="left">-</td>\n</tr>\n</tbody></table>\n<blockquote>\n<p>若以组件方式使用，需要使用上方的show/close方法自行处理鼠标右键菜单行为</p>\n</blockquote>\n<h2 id="使用">使用</h2>\n<ol>\n<li>指令方式使用（推荐）</li>\n</ol>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-mouse-menu</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">directive</span>: {\n    <span class="hljs-attr">MouseMenu</span>: MouseMenuDirective\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">options</span>: {} <span class="hljs-comment">// Some Options</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<ol start="2">\n<li>函数方式使用</li>\n</ol>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dom&quot;</span> @<span class="hljs-attr">contextmenu</span>=<span class="hljs-string">&quot;showMenu&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">import</span> { CustomMouseMenu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> dom = ref()\n    <span class="hljs-keyword">const</span> showMenu = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {\n      e.preventDefault()\n      <span class="hljs-keyword">const</span> MouseMenuCtx = CustomMouseMenu({\n        <span class="hljs-attr">el</span>: dom.value,\n        <span class="hljs-comment">// Other Options</span>\n      })\n      <span class="hljs-keyword">const</span> { x, y } = e;\n      MouseMenuCtx.show(x,y);\n    }\n    <span class="hljs-keyword">return</span> {\n      dom,\n      showMenu\n    }\n  }\n}</span>\n</code></pre>\n<ol start="3">\n<li>组件方式使用</li>\n</ol>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dom&quot;</span> @<span class="hljs-attr">contextmenu</span>=<span class="hljs-string">&quot;showMenu&quot;</span>&gt;</span>Dom<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mouse-menu</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;mouseMenuEl&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mouse-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">import</span> MouseMenu <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    MouseMenu\n  },\n  setup () {\n    <span class="hljs-keyword">const</span> dom = ref()\n    <span class="hljs-keyword">const</span> mouseMenuEl = ref()\n    <span class="hljs-keyword">const</span> showMenu = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {\n      e.preventDefault()\n      <span class="hljs-keyword">const</span> { x, y } = e;\n      mouseMenuEl.show(x,y);\n    }\n    <span class="hljs-keyword">return</span> {\n      mouseMenuEl,\n      showMenu,\n      <span class="hljs-attr">options</span>: {\n        <span class="hljs-attr">el</span>: dom.value, <span class="hljs-comment">//Is Required</span>\n        <span class="hljs-comment">// Other Options...</span>\n      } \n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<h2 id="其他说明">其他说明</h2>\n<p>为了性能，指令封装模式默认只对mounted钩子进行挂载。<br>当使用场景中有params参数传入菜单函数，有可能需要在组件更新时更新菜单，这时可以同时把update也挂载上。可参考以下写法:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { MouseMenuDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/mouse-menu&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  directive: {\n    MouseMenu: {\n      ...MouseMenuDirective,\n      updated: MouseMenuDirective.mounted\n    }\n  }\n}\n</code></pre>\n<ul>\n<li>UMD Name: <code>HowdyMouseMenu</code></li>\n<li>Example in <code>ElementPlusTable</code>: <a href="https://codepen.io/leon-kfd/pen/yLMKPOP" target="_blank">Demo</a></li>\n</ul>\n';