export default'<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">StandardTabs</span> <span class="hljs-attr">:tab-list</span>=<span class="hljs-string">&quot;tabList.map(item =&gt; item.name)&quot;</span> <span class="hljs-attr">:tab-content-width</span>=<span class="hljs-string">&quot;tabContentWidth&quot;</span> <span class="hljs-attr">tab-custom-style</span>=<span class="hljs-string">&quot;position:fixed&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in tabList&quot;</span> #[<span class="hljs-attr">item.slotName</span>] <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.name&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;`tab-content ${item.slotName}`&quot;</span>&gt;</span>\n          {{ item.name }}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">StandardTabs</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent, onMounted, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> StandardTabs <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/standard-tabs&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">components</span>: {\n    StandardTabs\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> tabContentWidth = ref(<span class="hljs-string">&#x27;100vw&#x27;</span>);\n    <span class="hljs-keyword">const</span> tabList = <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">9</span>}, <span class="hljs-function">(<span class="hljs-params">_, index: number</span>) =&gt;</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">`测试<span class="hljs-subst">${index + <span class="hljs-number">1</span>}</span>`</span>,\n        <span class="hljs-attr">slotName</span>: <span class="hljs-string">`tab<span class="hljs-subst">${index + <span class="hljs-number">1</span>}</span>`</span>\n      };\n    });\n    <span class="hljs-keyword">const</span> container = ref();\n    onMounted(<span class="hljs-function">() =&gt;</span> {\n      tabContentWidth.value = container.value.offsetWidth;\n    });\n    <span class="hljs-keyword">return</span> {\n      tabContentWidth,\n      tabList,\n      container\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.tab-content</span> {\n  <span class="hljs-attribute">width</span>:<span class="hljs-number">100%</span> <span class="hljs-meta">!important</span>;\n  <span class="hljs-attribute">height</span>:<span class="hljs-number">300vh</span>;\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">justify-content</span>: center;\n  <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">30vh</span>;\n}\n<span class="hljs-selector-class">.tab1</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">202</span>, <span class="hljs-number">255</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">202</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab2</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">227</span>, <span class="hljs-number">191</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">227</span>, <span class="hljs-number">191</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab3</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">195</span>, <span class="hljs-number">248</span>, <span class="hljs-number">250</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">195</span>, <span class="hljs-number">248</span>, <span class="hljs-number">250</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab4</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">209</span>, <span class="hljs-number">236</span>, <span class="hljs-number">255</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">209</span>, <span class="hljs-number">236</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab5</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">180</span>, <span class="hljs-number">180</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">180</span>, <span class="hljs-number">180</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab6</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">255</span>, <span class="hljs-number">206</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">231</span>, <span class="hljs-number">255</span>, <span class="hljs-number">206</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab7</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">197</span>, <span class="hljs-number">216</span>, <span class="hljs-number">252</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">197</span>, <span class="hljs-number">216</span>, <span class="hljs-number">252</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab8</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">250</span>, <span class="hljs-number">221</span>, <span class="hljs-number">185</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">250</span>, <span class="hljs-number">221</span>, <span class="hljs-number">185</span>, <span class="hljs-number">0</span>));\n}\n<span class="hljs-selector-class">.tab9</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">200</span>, <span class="hljs-number">229</span>, <span class="hljs-number">1</span>), <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">200</span>, <span class="hljs-number">229</span>, <span class="hljs-number">0</span>));\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.example-content</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-meta">!important</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';
