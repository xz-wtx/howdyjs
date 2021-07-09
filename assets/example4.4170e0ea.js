export default'<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn-open&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\n    Open\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">AnimationDialog</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dialog&quot;</span> <span class="hljs-attr">:animation-mode</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n            Test1\n          <span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n            Test2\n          <span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;num in 20&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;num&quot;</span>&gt;</span>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio vero eum vel iusto iure itaque dolor, minima illum, distinctio aliquam fuga obcaecati. Quas delectus dolores officiis perspiciatis ducimus id.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;footer&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\n          Cancel\n        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">AnimationDialog</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> AnimationDialog <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/animation-dialog&#x27;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">components</span>: {\n    AnimationDialog\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> dialog = ref();\n    <span class="hljs-keyword">const</span> open = <span class="hljs-function">() =&gt;</span> {\n      dialog.value.open();\n    };\n    <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {\n      dialog.value.close();\n    };\n    <span class="hljs-keyword">return</span> {\n      dialog,\n      open,\n      close\n    };\n  }\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.btn-open</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;\n}\n<span class="hljs-selector-class">.title</span>, <span class="hljs-selector-class">.footer</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;\n}\n<span class="hljs-selector-class">.footer</span> {\n  <span class="hljs-attribute">text-align</span>: right;\n  <span class="hljs-selector-tag">button</span> {\n    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">10px</span>;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span>;\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n';
