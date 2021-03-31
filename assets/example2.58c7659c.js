export default'<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in imgList&quot;</span>\n      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShowDialog($event, index)&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;image&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;num in 9&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;&#x27;fake&#x27;+num&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fake&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">AnimationDialog</span>\n    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dialog&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;an-dialog&quot;</span>\n    <span class="hljs-attr">:open-from-itself</span>=<span class="hljs-string">&quot;true&quot;</span>\n    <span class="hljs-attr">:listen-window-size-change</span>=<span class="hljs-string">&quot;true&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dialog-content&quot;</span>&gt;</span>\n      #{{ active }}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">AnimationDialog</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> AnimationDialog <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/animation-dialog&#x27;</span>;\n<span class="hljs-keyword">import</span> { baseURL } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../global&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">components</span>: {\n    AnimationDialog\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> dialog = ref();\n    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">return</span> {\n      dialog,\n      <span class="hljs-attr">imgList</span>: <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">9</span> }, <span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> <span class="hljs-string">`<span class="hljs-subst">${baseURL}</span>images/img/<span class="hljs-subst">${index + <span class="hljs-number">1</span>}</span>.jpg`</span>),\n      <span class="hljs-attr">active</span>: <span class="hljs-number">0</span>,\n      handleShowDialog ($event: any, <span class="hljs-attr">index</span>:number) {\n        active.value = index + <span class="hljs-number">1</span>;\n        dialog.value.open($event.currentTarget);\n      }\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.wrapper</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">align-items</span>: center;\n  <span class="hljs-attribute">justify-content</span>: space-around;\n  <span class="hljs-attribute">flex-wrap</span>: wrap;\n}\n<span class="hljs-selector-class">.box</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">45deg</span>, <span class="hljs-number">#bdc3c7</span>, <span class="hljs-number">#2c3e50</span>);\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">160px</span>;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">cursor</span>: pointer;\n}\n<span class="hljs-selector-class">.fake</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">visibility</span>: hidden;\n}\n<span class="hljs-selector-class">.box</span> <span class="hljs-selector-tag">img</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;\n  <span class="hljs-attribute">object-fit</span>: cover;\n}\n<span class="hljs-selector-class">.text</span> {\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;\n}\n<span class="hljs-selector-class">.dialog-content</span> {\n  <span class="hljs-attribute">position</span>: absolute;\n  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">10</span>;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">30px</span>;\n  <span class="hljs-attribute">font-weight</span>: bold;\n  <span class="hljs-attribute">text-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">3px</span> <span class="hljs-number">#ffaa00</span>, <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">5px</span> <span class="hljs-number">#262626</span>;\n}\n\n<span class="hljs-comment">/* 关闭按钮颜色 */</span>\n<span class="hljs-selector-class">.animation-dialog-wrapper</span>:<span class="hljs-built_in">deep</span>() .icon-close .line {\n  background: <span class="hljs-number">#ccc</span> <span class="hljs-meta">!important</span>;\n}\n<span class="hljs-selector-class">.animation-dialog-wrapper</span>:<span class="hljs-built_in">deep</span>() .icon-close:hover .line {\n  background: <span class="hljs-number">#eee</span> <span class="hljs-meta">!important</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';
