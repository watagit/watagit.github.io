(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LGhN:function(n,a,s){"use strict";s.r(a);var t=s("q1tI"),p=s.n(t),o=s("VXBa"),e=s("6o60"),c=s("uPId"),l=s("9eSz"),u=s.n(l),i=s("+ZDr"),A=s.n(i),k=s("ZMKu"),r=s("QArs"),d=s("XCao"),g=s("vOnD"),m=g.b.div.withConfig({displayName:"styles__Posts",componentId:"sc-1dhpyx0-0"})(["",";"],{width:"100%",display:"flex",flexWrap:"wrap"}),f=g.b.div.withConfig({displayName:"styles__Post",componentId:"sc-1dhpyx0-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"50%"},padding:"0.75rem"}),b=g.b.div.withConfig({displayName:"styles__Card",componentId:"sc-1dhpyx0-2"})(["",";"],{width:"100%",height:"100%",borderRadius:"0.5rem",display:"flex",flexDirection:"column",overflow:"hidden",borderWidth:"1px",borderColor:"#e2e8f0"}),h=g.b.div.withConfig({displayName:"styles__Content",componentId:"sc-1dhpyx0-3"})(["",";"],{padding:"1rem",color:"#3c366b"}),w=g.b.figure.withConfig({displayName:"styles__Image",componentId:"sc-1dhpyx0-4"})(["",";"],{width:"100%"}),y=g.b.h3.withConfig({displayName:"styles__Title",componentId:"sc-1dhpyx0-5"})(["",";"],{fontWeight:"600",marginBottom:"1rem"}),E=g.b.p.withConfig({displayName:"styles__Description",componentId:"sc-1dhpyx0-6"})([""]),x=g.b.h3.withConfig({displayName:"styles__Date",componentId:"sc-1dhpyx0-7"})(["",";"],{fontSize:"0.75rem",color:"#667eea"}),C=g.b.div.withConfig({displayName:"styles__Tags",componentId:"sc-1dhpyx0-8"})(["",""],{padding:"1rem",paddingTop:"0.5rem",marginTop:"auto"}),v=g.b.span.withConfig({displayName:"styles__Tag",componentId:"sc-1dhpyx0-9"})(["",""],{fontSize:"0.75rem",color:"#3c366b",borderWidth:"1px",borderColor:"#4fd1c5",borderRadius:"9999px",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",marginRight:"0.5rem"}),Q=function(){var n=c.data,a=n.markdownRemark,s=n.allMarkdownRemark,t=a.frontmatter,o=s.edges;return p.a.createElement(r.a,{section:!0},p.a.createElement(d.a,{title:t.title,subtitle:t.subtitle,center:!0}),p.a.createElement(m,null,o.map((function(n){var a=n.node,s=a.id,t=a.fields.slug,o=a.frontmatter,e=o.title,c=o.cover,l=o.description,i=o.date,r=o.tags;return p.a.createElement(f,{key:s},p.a.createElement(A.a,{to:t},p.a.createElement(k.b.div,{whileHover:{scale:1.05},whileTap:{scale:1}},p.a.createElement(b,null,p.a.createElement(w,null,p.a.createElement(u.a,{fluid:c.childImageSharp.fluid,alt:e})),p.a.createElement(h,null,p.a.createElement(x,null,i),p.a.createElement(y,null,e),p.a.createElement(E,null,l)),p.a.createElement(C,null,r.map((function(n){return p.a.createElement(v,{key:n},n)})))))))}))))};a.default=function(){return p.a.createElement(o.a,null,p.a.createElement(e.a,{title:"Blog"}),p.a.createElement(Q,null))}},uPId:function(n){n.exports=JSON.parse('{"data":{"markdownRemark":{"frontmatter":{"title":"Post","subtitle":"All my posts"}},"allMarkdownRemark":{"edges":[{"node":{"id":"df028c42-7b06-5051-9050-3dd0dba591d5","html":"<p>↓ 一般的な初期化方法</p>\\n\\n        <div class=\\"gatsby-code-title\\">\\n          <span>Sample.tsx</span>\\n        </div>\\n       \\n<div class=\\"gatsby-highlight\\" data-language=\\"tsx\\"><pre class=\\"language-tsx\\"><code class=\\"language-tsx\\"><span class=\\"token keyword\\">import</span> React<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> useState <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'react\'</span>\\n\\n<span class=\\"token keyword\\">const</span> Sample<span class=\\"token operator\\">:</span> React<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">FC</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">[</span> count<span class=\\"token punctuation\\">,</span> setCount <span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useState</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">decreaseCount</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">setCount</span><span class=\\"token punctuation\\">(</span>count <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">increaseCount</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">setCount</span><span class=\\"token punctuation\\">(</span>count <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">onClick</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>decreaseCount<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\"> - </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\"> </span><span class=\\"token punctuation\\">{</span>count<span class=\\"token punctuation\\">}</span><span class=\\"token plain-text\\"> </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">onClick</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>increaseCount<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\"> + </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">></span></span>\\n  <span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> Sample</code></pre></div>\\n<br />\\n<p>↓ のようにも書ける</p>\\n\\n        <div class=\\"gatsby-code-title\\">\\n          <span>Sample.tsx</span>\\n        </div>\\n       \\n<div class=\\"gatsby-highlight\\" data-language=\\"tsx\\"><pre class=\\"language-tsx\\"><code class=\\"language-tsx\\"><span class=\\"token keyword\\">import</span> React<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> useState <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'react\'</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">countInitial</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> Todo<span class=\\"token operator\\">:</span> React<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">FC</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">[</span> todos<span class=\\"token punctuation\\">,</span> setTodos <span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useState</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token function\\">countInitial</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">decreaseCount</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">setCount</span><span class=\\"token punctuation\\">(</span>count <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">increaseCount</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">setCount</span><span class=\\"token punctuation\\">(</span>count <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">onClick</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>decreaseCount<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\"> - </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\"> </span><span class=\\"token punctuation\\">{</span>count<span class=\\"token punctuation\\">}</span><span class=\\"token plain-text\\"> </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">onClick</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>increaseCount<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\"> + </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">></span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">></span></span>\\n  <span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span></code></pre></div>\\n<br />\\n<p><strong>参考文献</strong> <br />\\n<a href=\\"https://medium.com/swlh/what-i-have-learned-using-react-hooks-b5d99593b33a\\">What I Have Learned Using React Hooks</a></p>","fields":{"slug":"/blog/blog-post-1/"},"frontmatter":{"title":"ReactのStateの初期化について","description":"","date":"Sep 30, 2019","tags":["react","typescript"],"cover":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMC/8QAFQEBAQAAAAAAAAAAAAAAAAAABAL/2gAMAwEAAhADEAAAAbS3JxTK1//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAQUCX//EABYRAAMAAAAAAAAAAAAAAAAAAAIQMf/aAAgBAwEBPwEav//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABYQAQEBAAAAAAAAAAAAAAAAAAEAEP/aAAgBAQABPyFnGc//2gAMAwEAAgADAAAAEFvP/8QAFREBAQAAAAAAAAAAAAAAAAAAEDH/2gAIAQMBAT8Qif/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/ECf/xAAXEAADAQAAAAAAAAAAAAAAAAAAASER/9oACAEBAAE/EGg9NGg9NP/Z","aspectRatio":1.5,"src":"/static/5f0539ac48e670ba8fc9846f47d1773b/5bc15/cover.jpg","srcSet":"/static/5f0539ac48e670ba8fc9846f47d1773b/5bc15/cover.jpg 3w","sizes":"(max-width: 3px) 100vw, 3px"}}}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-post-tsx-62dd30626decae570c03.js.map