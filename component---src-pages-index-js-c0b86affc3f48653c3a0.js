(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(181),c=n(188),u=n(178),l=(n(193),n(75),n(55),n(36),n(231),n(164),function(e){var t=e.title,n=e.category,r=e.selectCategory,a=e.count;return o.a.createElement("li",{className:"item",role:"tab","aria-selected":n===t?"true":"false"},o.a.createElement("div",{onClick:function(){return r(t)}},t,o.a.createElement("span",{className:"badge"},a)))}),s=n(174),f=(n(165),function(e){var t=e.categories,n=e.category,r=e.selectCategory;return o.a.createElement("ul",{className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(s.a)(.75)}},o.a.createElement(l,{title:"All",category:n,selectCategory:r,count:Object.values(t).reduce(function(e,t){return e+t})}),Object.keys(t).map(function(e,a){return o.a.createElement(l,{key:a,title:e,category:n,selectCategory:r,count:t[e]})}))}),d=(n(166),o.a.memo(function(e){var t=e.children;return o.a.createElement("div",{className:"thumbnail-container"},t)})),m=n(171),g=n(233),h=n(238),v=n(239),p=n(240),y=n.n(p),A=(n(39),n(175)),E="#___gatsby",b="observed",w="visible",C="20px",N=.8;function k(e){return e.filter(function(e){return e.isIntersecting}).forEach(function(e){var t=e.target;return A.a(t,w)})}function D(){return A.e("."+b).forEach(function(e){return r.observe(e)})}function L(){if(!r)throw Error("Not found IntersectionObserver instance");return Promise.resolve(r.disconnect())}n(167);var O=function(e){var t=e.node;return o.a.createElement(m.a,{className:"thumbnail "+b,to:t.fields.slug},o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",null,t.frontmatter.title||t.fields.slug,o.a.createElement("div",{className:"thumbnail-subinfo"},o.a.createElement("time",{dateTime:t.frontmatter.date},o.a.createElement(g.a,{icon:v.a}),y()(t.frontmatter.date).fromNow()),"   ",o.a.createElement("span",{className:"subinfo-category"},o.a.createElement(g.a,{icon:h.a}),t.frontmatter.category))),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},x=n(172),S=function(e){var t=e.posts,n=e.countOfInitialPost,r=e.count,i=e.category,c=Object(a.useMemo)(function(){return t.filter(function(e){var t=e.node;return i===x.a.ALL||t.frontmatter.category===i}).slice(0,r*n)});return o.a.createElement(d,null,c.map(function(e,t){var n=e.node;return o.a.createElement(O,{node:n,key:"item_"+t})}))},j=n(195),I=n(204),H=n.n(I);function B(e){return!e||e==={}}function Q(e,t){if(!B(e)){var n=e.getItem(t);if(n)return JSON.parse(n)}}function P(e,t,n){if(!B(e))return e.setItem(t,JSON.stringify(n))}var R="undefined"!=typeof window?window:{},G=R.localStorage,T=R.sessionStorage,q=H()(P,T),J=H()(Q,T),K=(H()(P,G),H()(Q,G),"__felog_session_storage_key__");n.d(t,"pageQuery",function(){return F});t.default=function(e){var t,n=e.data,l=e.location,s=(t=1,J(K+"/count")||t),d=function(e){return J(K+"/category")||e}(x.a.ALL),m=Object(a.useState)(s),g=m[0],h=m[1],v=Object(a.useRef)(g),p=Object(a.useState)(d),y=p[0],b=p[1],w=n.site.siteMetadata,O=w.configs.countOfInitialPost,I=n.allMarkdownRemark.edges,H=I.reduce(function(e,t){var n=t.node.frontmatter.category;return e[n]=e[n]?e[n]+1:1,e},{});Object(a.useEffect)(function(){return window.addEventListener("scroll",B,{passive:!1}),r=new IntersectionObserver(k,{root:A.d(E),rootMargin:C,threshold:N}),D(),j.c(),function(){window.removeEventListener("scroll",B,{passive:!1}),L().then(function(){return r=null}),j.a()}},[]),Object(a.useEffect)(function(){v.current=g,L().then(D),q(K+"/count",g),function(e){q(K+"/category",e)}(y)});var B=function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return A.c()-e}(e)<80};return function(e,t){var n=t.dismissCondition,r=void 0===n?function(){return!1}:n,a=t.triggerCondition,o=void 0===a?function(){return!0}:a;if(!e)throw Error("Invalid required arguments");var i=!1;return function(){if(!i)return i=!0,requestAnimationFrame(function(){if(!r())return o()?(i=!1,e()):void 0;i=!1})}}(function(){return h(function(e){return e+1})},{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&I.length>v.current*O}})()};return o.a.createElement(i.a,{location:l,title:w.title},o.a.createElement(u.a,{title:x.c,keywords:w.keywords}),o.a.createElement(c.a,null),o.a.createElement(f,{categories:H,category:y,selectCategory:function(e){b(e),j.b(252)}}),o.a.createElement(S,{posts:I,countOfInitialPost:O,count:g,category:y}))};var F="655139784"},171:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(33),u=n.n(c);n.d(t,"a",function(){return u.a});n(173);var l=a.a.createContext({}),s=function(e){return a.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},172:function(e,t,n){"use strict";var r={ALL:"All"},a={LIGHT:"light",DARK:"dark"};n.d(t,"c",function(){return"Home"}),n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return"en"})},173:function(e,t,n){var r;e.exports=(r=n(177))&&r.default||r},174:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(182),a=n.n(r),o=n(183),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var c=new a.a(i.a);var u=c.rhythm;c.scale},175:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return s});var r=function(e){return document.querySelectorAll(e)},a=function(e){return document.querySelector(e)},o=function(e,t){return e.classList.add(t)},i=function(){return a("body")},c=function(e){return o(i(),e)},u=function(e){return function(e,t){return e.classList.remove(t)}(i(),e)},l=function(e){return function(e,t){return e.classList.contains(t)}(i(),e)},s=function(){return document.documentElement.offsetHeight}},177:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(56),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},178:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(179),a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(187),l=n.n(u),s=n(171);function f(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,c=e.title;return o.a.createElement(s.b,{query:d,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:r})}f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var d="1025518380"},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Deep Dive Magic Code",description:"Goidle Personal Development Blog",author:"Goidle"}}}}},181:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(171),i=(n(153),function(e){var t=e.title,n=e.location,r=e.rootPath;return n.pathname===r&&a.a.createElement("h1",{className:"home-header"},a.a.createElement(o.a,{to:"/",className:"link"},t))}),c=n(186),u=n.n(c),l=n(175),s=n(172);n(154);var f=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=function(e){var t=function(e){return e?s.d.DARK:s.d.LIGHT}(e);n(e),function(e){switch(e){case s.d.LIGHT:l.b(s.d.LIGHT),l.g(s.d.DARK);break;case s.d.DARK:l.b(s.d.DARK),l.g(s.d.LIGHT)}}(t)};return Object(r.useEffect)(function(){var e=l.f(s.d.DARK);o(e)},[]),a.a.createElement("div",{className:"switch-container"},a.a.createElement("label",{htmlFor:"normal-switch"},a.a.createElement(u.a,{onChange:o,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:a.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:a.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},d=(n(155),function(){return a.a.createElement("footer",{className:"footer"},"©",a.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Goidle"),", Built with"," ",a.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),m=n(174);n(156);n.d(t,"a",function(){return g});var g=function(e){var t=e.location,n=e.title,r=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(m.a)(24),padding:Object(m.a)(1.5)+" "+Object(m.a)(.75)}},a.a.createElement(f,null),a.a.createElement(i,{title:n,location:t,rootPath:"/"}),r,a.a.createElement(d,null)))}},188:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(189);var r=n(191),a=n(0),o=n.n(a),i=n(171),c=n(192),u=n.n(c),l=(n(157),function(){return o.a.createElement(i.b,{query:s,render:function(e){var t=e.site.siteMetadata,n=t.author,r=t.introduction,a=t.siteUrl;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(u.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("div",null,o.a.createElement("span",{className:"author-name-prefix"},"Written by"),o.a.createElement("a",{href:a,className:"author-name-content"},o.a.createElement("span",null,"@",n))),o.a.createElement("div",{className:"author-introduction"},r)))))},data:r})}),s="364319463"},191:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC",width:72,height:72,src:"/static/035ce7483ee8f639767376dfc414c0e6/f53aa/profile.png",srcSet:"/static/035ce7483ee8f639767376dfc414c0e6/f53aa/profile.png 1x,\n/static/035ce7483ee8f639767376dfc414c0e6/0ccf0/profile.png 1.5x,\n/static/035ce7483ee8f639767376dfc414c0e6/34113/profile.png 2x"}}},site:{siteMetadata:{author:"Goidle",introduction:"오픈소스를 톺아보며 매직코드라 생각했던것들이 결국 우리가 다 아는 언어이고 매직이 아니라는 것을 깨닫고 거기에 담겨 있는 의미와 의도를 알아가며 서로의 의견을 나누기 위한 블로그입니다.",siteUrl:"https://github.com/goidle"}}}}},195:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r,a=n(196),o=n.n(a);function i(){return r=new o.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function c(){if(!r)throw Error("Not founded SmoothScroll instance");return r.destroy(),r=null}function u(e){if(!r)throw Error("Not founded SmoothScroll instance");return r.animateScroll(e),r}}}]);
//# sourceMappingURL=component---src-pages-index-js-c0b86affc3f48653c3a0.js.map