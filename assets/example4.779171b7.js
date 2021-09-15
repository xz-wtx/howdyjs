var s='<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>\n    请拖拽屏幕上的紫色浮块\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-to-drag</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;move-box&quot;</span>&gt;</span>\n    DRAG\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-drag&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">directives</span>: {\n    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">options</span>: {\n        <span class="hljs-attr">adsorb</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-attr">adsorbOffset</span>: <span class="hljs-number">10</span>,\n        <span class="hljs-attr">transitionDuration</span>: <span class="hljs-number">800</span>,\n        <span class="hljs-attr">transitionTimingFunction</span>: <span class="hljs-string">&#x27;cubic-bezier(0.34, -0.37, 0.73, 1.38)&#x27;</span>\n      }\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&#x27;scss&#x27;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.move-box</span> {\n  <span class="hljs-attribute">position</span>: fixed;\n  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">80px</span>;\n  <span class="hljs-attribute">right</span>: <span class="hljs-number">50px</span>;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">45deg</span>, <span class="hljs-built_in">rgb</span>(<span class="hljs-number">174</span>, <span class="hljs-number">79</span>, <span class="hljs-number">252</span>), <span class="hljs-built_in">rgb</span>(<span class="hljs-number">137</span>, <span class="hljs-number">64</span>, <span class="hljs-number">253</span>));\n  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">30px</span> <span class="hljs-built_in">rgb</span>(<span class="hljs-number">43</span>, <span class="hljs-number">58</span>, <span class="hljs-number">73</span>);\n  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">999999</span>;\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">align-items</span>: center;\n  <span class="hljs-attribute">justify-content</span>: center;\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;\n  <span class="hljs-attribute">font-weight</span>: bold;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;\n  user-select: none;\n}\n<span class="hljs-selector-class">.text</span> {\n  <span class="hljs-attribute">text-align</span>: center;\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8rem</span>;\n  <span class="hljs-attribute">font-weight</span>: bold;\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.3rem</span>;\n  <span class="hljs-attribute">color</span>: <span class="hljs-number">#262626</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';export{s as default};
