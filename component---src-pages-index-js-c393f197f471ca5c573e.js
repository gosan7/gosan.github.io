(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{O3wq:function(e,t,n){},O92f:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var r,a=n("q1tI"),c=n.n(a),o=n("hpys"),i=n("lbRd"),u=n("CC2r"),l=(n("O3wq"),function(e){var t=e.title,n=e.category,r=e.selectCategory,a=e.count;return c.a.createElement("li",{className:"item",role:"tab","aria-selected":n===t?"true":"false"},c.a.createElement("div",{onClick:function(){return r(t)}},t,c.a.createElement("span",{className:"badge"},a)))}),s=n("p3AD"),f=(n("O92f"),function(e){var t=e.categories,n=e.category,r=e.selectCategory;return c.a.createElement("ul",{className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(s.a)(3/4)}},c.a.createElement(l,{title:"All",category:n,selectCategory:r,count:Object.values(t).reduce((function(e,t){return e+t}))}),Object.keys(t).map((function(e,a){return c.a.createElement(l,{key:a,title:e,category:n,selectCategory:r,count:t[e]})})))}),m=(n("Z/JJ"),c.a.memo((function(e){var t=e.children;return c.a.createElement("div",{className:"thumbnail-container"},t)}))),d=n("Wbzz"),g=n("IP2g"),v=n("wHSu"),E={prefix:"far",iconName:"clock",icon:[512,512,[],"f017","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"]},b=n("wd/R"),y=n.n(b),w=n("JqEL");function h(e){return e.filter((function(e){return e.isIntersecting})).forEach((function(e){var t=e.target;return w.a(t,"visible")}))}function p(){return w.e(".observed").forEach((function(e){return r.observe(e)}))}function O(){if(!r)throw Error("Not found IntersectionObserver instance");return Promise.resolve(r.disconnect())}n("aGs0");var C=function(e){var t=e.node;return c.a.createElement(d.Link,{className:"thumbnail observed",to:t.fields.slug},c.a.createElement("div",{key:t.fields.slug},c.a.createElement("h3",null,t.frontmatter.title||t.fields.slug),c.a.createElement("div",{className:"thumbnail-subinfo"},c.a.createElement("time",{dateTime:t.frontmatter.date},c.a.createElement(g.a,{icon:E,style:{marginRight:"1px"}}),y()(t.frontmatter.date).fromNow()),"   ",c.a.createElement("span",{className:"subinfo-category"},c.a.createElement(g.a,{icon:v.a,style:{marginRight:"1px"}}),t.frontmatter.category)),c.a.createElement("div",{className:"line"}),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},k=n("WlAH"),I=function(e){var t=e.posts,n=e.countOfInitialPost,r=e.count,o=e.category,i=Object(a.useMemo)((function(){return t.filter((function(e){var t=e.node;return o===k.a.ALL||t.frontmatter.category===o})).slice(0,r*n)}));return c.a.createElement(m,null,i.map((function(e,t){var n=e.node;return c.a.createElement(C,{node:n,key:"item_"+t})})))},N=n("EXIE"),L=n("2w9V");t.default=function(e){var t=e.data,n=e.location,l=L.b(1),s=L.a(k.a.ALL),m=Object(a.useState)(l),d=m[0],g=m[1],v=Object(a.useRef)(d),E=Object(a.useState)(s),b=E[0],y=E[1],C=t.site.siteMetadata,j=C.configs.countOfInitialPost,J=t.allMarkdownRemark.edges,R=J.reduce((function(e,t){var n=t.node.frontmatter.category;return e[n]=e[n]?e[n]+1:1,e}),{});Object(a.useEffect)((function(){return window.addEventListener("scroll",q,{passive:!1}),r=new IntersectionObserver(h,{root:w.d("#___gatsby"),rootMargin:"20px",threshold:.8}),p(),N.c(),function(){window.removeEventListener("scroll",q,{passive:!1}),O().then((function(){return r=null})),N.a()}}),[]),Object(a.useEffect)((function(){v.current=d,O().then(p),L.e(d),L.d(b)}));var q=function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return w.c()-e}(e)<80};return function(e,t){var n=t.dismissCondition,r=void 0===n?function(){return!1}:n,a=t.triggerCondition,c=void 0===a?function(){return!0}:a;if(!e)throw Error("Invalid required arguments");var o=!1;return function(){if(!o)return o=!0,requestAnimationFrame((function(){if(!r())return c()?(o=!1,e()):void 0;o=!1}))}}((function(){return g((function(e){return e+1}))}),{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&J.length>v.current*j}})()};return c.a.createElement(o.a,{location:n,title:C.title},c.a.createElement(u.a,null),c.a.createElement(i.a,null),c.a.createElement(f,{categories:R,category:b,selectCategory:function(e){y(e),N.b(252)}}),c.a.createElement(I,{posts:J,countOfInitialPost:j,count:d,category:b}))}},"Z/JJ":function(e,t,n){},aGs0:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-c393f197f471ca5c573e.js.map