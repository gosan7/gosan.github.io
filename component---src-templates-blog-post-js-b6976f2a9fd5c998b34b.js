(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{170:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(159),function(){return r.a.createElement("hr",{className:"custom-hr"})}),o=n(181),s=n(178),c=function(e){var t=e.title;return r.a.createElement("h1",null,t)},l=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},u=n(188),d=n(171),f=(n(160),function(e){var t=e.pageContext,n=t.previous,a=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,n&&r.a.createElement(d.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,a&&r.a.createElement(d.a,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))}),m=(n(75),n(55),n(36),n(193),function(e){var t=e.repo,n=r.a.createRef();return Object(a.useEffect)(function(){var e=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach(function(t){e.setAttribute(t,a[t])}),n.current.appendChild(e)},[]),r.a.createElement("div",{className:"utterences",ref:n})}),h=n(195);n(161);n.d(t,"pageQuery",function(){return p});t.default=function(e){var t=e.data,n=e.pageContext,d=e.location;Object(a.useEffect)(function(){return h.c(),function(){return h.a()}},[]);var p=t.markdownRemark,g=t.site.siteMetadata,y=g.title,v=g.comment.utterances;return r.a.createElement(o.a,{location:d,title:y},r.a.createElement(s.a,{title:p.frontmatter.title,description:p.excerpt}),r.a.createElement(c,{title:p.frontmatter.title}),r.a.createElement(l,{html:p.html}),r.a.createElement(i,null),r.a.createElement(u.a,null),r.a.createElement(f,{pageContext:n}),r.a.createElement(m,{repo:v}))};var p="3863724819"},171:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(33),c=n.n(s);n.d(t,"a",function(){return c.a});n(173);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,n){"use strict";var a={ALL:"All"},r={LIGHT:"light",DARK:"dark"};n.d(t,"c",function(){return"Home"}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return"en"})},173:function(e,t,n){var a;e.exports=(a=n(177))&&a.default||a},174:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(182),r=n.n(a),i=n(183),o=n.n(i);o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var s=new r.a(o.a);var c=s.rhythm;s.scale},175:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"g",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return u});var a=function(e){return document.querySelectorAll(e)},r=function(e){return document.querySelector(e)},i=function(e,t){return e.classList.add(t)},o=function(){return r("body")},s=function(e){return i(o(),e)},c=function(e){return function(e,t){return e.classList.remove(t)}(o(),e)},l=function(e){return function(e,t){return e.classList.contains(t)}(o(),e)},u=function(){return document.documentElement.offsetHeight}},177:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},178:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(179),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(187),l=n.n(c),u=n(171);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.b,{query:f,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var f="1025518380"},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Deep Dive Magic Code",description:"Goidle Personal Development Blog",author:"Goidle"}}}}},181:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(171),o=(n(153),function(e){var t=e.title,n=e.location,a=e.rootPath;return n.pathname===a&&r.a.createElement("h1",{className:"home-header"},r.a.createElement(i.a,{to:"/",className:"link"},t))}),s=n(186),c=n.n(s),l=n(175),u=n(172);n(154);var d=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=function(e){var t=function(e){return e?u.d.DARK:u.d.LIGHT}(e);n(e),function(e){switch(e){case u.d.LIGHT:l.b(u.d.LIGHT),l.g(u.d.DARK);break;case u.d.DARK:l.b(u.d.DARK),l.g(u.d.LIGHT)}}(t)};return Object(a.useEffect)(function(){var e=l.f(u.d.DARK);i(e)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(c.a,{onChange:i,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},f=(n(155),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Goidle"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),m=n(174);n(156);n.d(t,"a",function(){return h});var h=function(e){var t=e.location,n=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(m.a)(24),padding:Object(m.a)(1.5)+" "+Object(m.a)(.75)}},r.a.createElement(d,null),r.a.createElement(o,{title:n,location:t,rootPath:"/"}),a,r.a.createElement(f,null)))}},188:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(189);var a=n(191),r=n(0),i=n.n(r),o=n(171),s=n(192),c=n.n(s),l=(n(157),function(){return i.a.createElement(o.b,{query:u,render:function(e){var t=e.site.siteMetadata,n=t.author,a=t.introduction,r=t.siteUrl;return i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author-description"},i.a.createElement(c.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),i.a.createElement("div",{className:"author-name"},i.a.createElement("div",null,i.a.createElement("span",{className:"author-name-prefix"},"Written by"),i.a.createElement("a",{href:r,className:"author-name-content"},i.a.createElement("span",null,"@",n))),i.a.createElement("div",{className:"author-introduction"},a)))))},data:a})}),u="364319463"},189:function(e,t,n){"use strict";n(190)("fixed",function(e){return function(){return e(this,"tt","","")}})},190:function(e,t,n){var a=n(11),r=n(18),i=n(20),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},191:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC",width:72,height:72,src:"/static/035ce7483ee8f639767376dfc414c0e6/f53aa/profile.png",srcSet:"/static/035ce7483ee8f639767376dfc414c0e6/f53aa/profile.png 1x,\n/static/035ce7483ee8f639767376dfc414c0e6/0ccf0/profile.png 1.5x,\n/static/035ce7483ee8f639767376dfc414c0e6/34113/profile.png 2x"}}},site:{siteMetadata:{author:"Goidle",introduction:"오픈소스를 톺아보며 매직코드라 생각했던것들이 결국 우리가 다 아는 언어이고 매직이 아니라는 것을 깨닫고 거기에 담겨 있는 의미와 의도를 알아가며 서로의 의견을 나누기 위한 블로그입니다.",siteUrl:"https://github.com/goidle"}}}}},192:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.default=void 0;var r,i=a(n(7)),o=a(n(37)),s=a(n(76)),c=a(n(77)),l=a(n(0)),u=a(n(4)),d=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),m=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},h=new WeakMap;var p=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return n&&(n.observe(e),h.set(e,t)),function(){n.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+a+"<img "+s+c+n+r+t+o+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=l.default.forwardRef(function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,u=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({sizes:n,srcSet:a,src:r},d,{onLoad:o,onError:u,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var v=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,r=!1,i=t.fadeIn,s=m(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var c=!(t.critical&&!t.fadeIn);return n.state={isVisible:a,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:c,seenBefore:s},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=p(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,p=e.fixed,v=e.backgroundColor,b=e.Tag,E=e.itemProp,S="boolean"==typeof v?"lightgray":v,w=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),A=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":n,style:w,className:m};if(h){var O=h;return l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),S&&l.default.createElement(b,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),O.base64&&l.default.createElement(y,(0,c.default)({src:O.base64},L)),O.tracedSVG&&l.default.createElement(y,(0,c.default)({src:O.tracedSVG},L)),this.state.isVisible&&l.default.createElement("picture",null,O.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),l.default.createElement(y,{alt:n,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:n,title:t},O))}}))}if(p){var I=p,C=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete C.display,l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},S&&l.default.createElement(b,{title:t,style:{backgroundColor:S,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),I.base64&&l.default.createElement(y,(0,c.default)({src:I.base64},L)),I.tracedSVG&&l.default.createElement(y,(0,c.default)({src:I.tracedSVG},L)),this.state.isVisible&&l.default.createElement("picture",null,I.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),l.default.createElement(y,{alt:n,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:n,title:t,width:I.width,height:I.height},I))}}))}return null},t}(l.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),E=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var S=v;t.default=S},193:function(e,t,n){var a=n(25),r=n(35);n(194)("keys",function(){return function(e){return r(a(e))}})},194:function(e,t,n){var a=n(11),r=n(19),i=n(18);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],o={};o[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},195:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var a,r=n(196),i=n.n(r);function o(){return a=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!a)throw Error("Not founded SmoothScroll instance");return a.destroy(),a=null}function c(e){if(!a)throw Error("Not founded SmoothScroll instance");return a.animateScroll(e),a}},196:function(e,t,n){(function(n){var a,r;r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,r=-1,i="",o=n.charCodeAt(0);++r<a;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,n,a,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:r}});document.dispatchEvent(i)}};return function(o,s){var c,l,u,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",c)},animateScroll:function(a,o,s){f.cancelScroll();var l=n(c||t,s||{}),m="[object Number]"===Object.prototype.toString.call(a),h=m||!a.tagName?null:a;if(m||h){var p=e.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var g,y,v,b,E,S,w,A,L=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(u),O=m?a:function(t,n,a,i){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-n-a,0),i&&(o=Math.min(o,r()-e.innerHeight)),o}(h,L,parseInt("function"==typeof l.offset?l.offset(a,o):l.offset,10),l.clip),I=O-p,C=r(),x=0,R=(g=I,v=(y=l).speedAsDuration?y.speed:Math.abs(g/1e3*y.speed),y.durationMax&&v>y.durationMax?y.durationMax:y.durationMin&&v<y.durationMin?y.durationMin:parseInt(v,10)),N=function(t){var n,r,s;b||(b=t),x+=t-b,S=p+I*(r=E=1<(E=0===R?0:x/R)?1:E,"easeInQuad"===(n=l).easing&&(s=r*r),"easeOutQuad"===n.easing&&(s=r*(2-r)),"easeInOutQuad"===n.easing&&(s=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(s=r*r*r),"easeOutCubic"===n.easing&&(s=--r*r*r+1),"easeInOutCubic"===n.easing&&(s=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(s=r*r*r*r),"easeOutQuart"===n.easing&&(s=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(s=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(s=r*r*r*r*r),"easeOutQuint"===n.easing&&(s=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(s=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(s=n.customEasing(r)),s||r),e.scrollTo(0,Math.floor(S)),function(t,n){var r,s,c,u=e.pageYOffset;if(t==n||u==n||(p<n&&e.innerHeight+u)>=C)return f.cancelScroll(!0),s=n,c=m,0===(r=a)&&document.body.focus(),c||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),e.scrollTo(0,s)),i("scrollStop",l,a,o),!(d=b=null)}(S,O)||(d=e.requestAnimationFrame(N),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),w=a,A=l,m||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:w.id},document.title,w===document.documentElement?"#top":"#"+w.id),i("scrollStart",l,a,o),f.cancelScroll(!0),e.requestAnimationFrame(N)}}},m=function(t){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(l=t.target.closest(o))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var n=a(l.hash),r=c.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(c),f.animateScroll(r,l))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){c&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",h,!1),f.cancelScroll(),d=u=l=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),c=n(t,s||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",h,!1)}(),f}}(r)}.apply(t,[]))||(e.exports=a)}).call(this,n(74))}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b6976f2a9fd5c998b34b.js.map