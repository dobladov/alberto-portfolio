(self.webpackChunkalberto_portfolio=self.webpackChunkalberto_portfolio||[]).push([[654],{523:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5186:function(e,t,r){"use strict";r.d(t,{q:function(){return he}});var n,o,i,a,c=r(5697),l=r.n(c),u=r(8453),s=r.n(u),f=r(523),p=r.n(f),d=r(7294),y=r(4756),h=r.n(y),m="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),O="cssText",E="href",j="http-equiv",T="innerHTML",x="itemprop",k="name",C="property",S="rel",A="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",M="encodeSpecialCharacters",z="onChangeClientState",R="titleTemplate",B=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),D=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=G(e,g.TITLE),r=G(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=G(e,I);return t||n||void 0},V=function(e){return G(e,z)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===S&&"canonical"===e[r].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==T&&c!==O&&c!==x||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},G=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(g.BODY,n),le(g.HTML,o),ce(f,p);var d={baseTag:ue(g.BASE,r),linkTags:ue(g.LINK,i),metaTags:ue(g.META,a),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,s)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,y,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(g.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(H):r.getAttribute(H)!==a.join(",")&&r.setAttribute(H,a.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===T)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,o=fe(r,n),[d.createElement(g.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===T||r===O){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===T||e===O)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,n),bodyAttributes:pe(m,r,n),htmlAttributes:pe(v,o,n),link:pe(g.LINK,i,n),meta:pe(g.META,a,n),noscript:pe(g.NOSCRIPT,c,n),script:pe(g.SCRIPT,l,n),style:pe(g.STYLE,u,n),title:pe(g.TITLE,{title:f,titleAttributes:p},n)}},ye=s()((function(e){return{baseTag:J([E,P],e),bodyAttributes:$(m,e),defer:G(e,N),encode:G(e,M),htmlAttributes:$(v,e),linkTags:Q(g.LINK,[S,E],e),metaTags:Q(g.META,[k,w,j,C,x],e),noscriptTags:Q(g.NOSCRIPT,[T],e),onChangeClientState:V(e),scriptTags:Q(g.SCRIPT,[A,T],e),styleTags:Q(g.STYLE,[O],e),title:K(e),titleAttributes:$(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=ye,a=i=function(e){function t(){return W(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return Y({},o,((t={})[n.type]=a,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((r={})[n.type]=Y({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(F(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(o,n)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind},8453:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},7789:function(e,t,r){"use strict";r.d(t,{h:function(){return l}});var n=r(7294),o=function(e){var t=e.progress;return n.createElement("div",{style:{content:"",position:"absolute",left:0,bottom:0,width:t+"%",height:"2px",backgroundColor:"white"}})},i=function(e){return e[Math.floor(Math.random()*e.length)]},a=function(e){var t=e.words,r=n.useState(i(t)),o=r[0],a=r[1],c=n.useState(1),l=c[0],u=c[1];return(0,n.useEffect)((function(){var e=setInterval((function(){l<o.length?u(l+1):(a(i(t.filter((function(e){return e!==o})))),u(1))}),150*Math.random()+150);return function(){return clearInterval(e)}}),[o,l]),o.slice(0,l)},c="index-module--btn--1L3il",l=function(e){var t=e.attributes,r=(0,n.useState)(0),i=r[0],l=r[1],u=function(){var e=document.documentElement,t=document.body,r="scrollTop",n="scrollHeight",o=(e[r]||t[r])/((e[n]||t[n])-e.clientHeight)*100;l(o)};return(0,n.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[]),n.createElement("header",{className:"index-module--header--3Lsl6",style:{transform:"translateY("+(i>3?"-95%":0)+")"}},n.createElement("div",{style:{position:"relative",padding:"1rem 0",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #e6e6e6",margin:"0 auto",width:"100%",maxWidth:"1400px"}},n.createElement("h2",{style:{margin:0,padding:"0 .5rem"}},n.createElement(a,{words:t})),n.createElement("nav",null,n.createElement("a",{className:c,href:"/"},"EN"),n.createElement("a",{className:c,href:"/es"},"ES")),n.createElement(o,{progress:i})))}},4996:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var n=r(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,c=e.size,l=void 0===c?24:c,u=i(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),n.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}))}));a.displayName="Play";var c=a,l=function(e){var t=e.name,r=e.children,o=e.images,i=e.link,a=(e.inverse,e.watchText),l=void 0===a?"Watch":a;return n.createElement("div",{style:{paddingBottom:"3em",minHeight:"65vh"}},n.createElement("div",{className:"index-module--projectName--23IHS"},n.createElement("h3",{className:"index-module--projectTitle--3Fd9Y"},t),i&&n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i,style:{display:"flex",gap:"0.5em",alignItems:"center",textDecoration:"none",justifyContent:"center",borderRadius:"50%",padding:".5rem",fontSize:"1rem"}},n.createElement(c,null)," ",l)),n.createElement("p",{style:{padding:"1em 0",fontSize:"1.5rem",lineHeight:"1.5em"}},r),n.createElement("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},className:"index-module--container--1ekDa"},o.map((function(e,t){var r=e.src,o=e.alt,a=e.pos;return n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i,key:r},n.createElement("img",{className:a,width:"400px",height:"320px",src:r,alt:o,style:{position:"relative",top:2*t+"rem"}}))}))))}},1419:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(4942),o=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e){var t=e.children,r=e.full,n=e.className,i=e.style;return o.createElement("div",{className:n,style:a(a(a({},{paddingTop:"5rem",fontSize:"2rem",lineHeight:"3rem",padding:"1rem 2rem 1rem 2rem",maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}),i),r?{minHeight:"100vh"}:{})},o.createElement("div",null,t))}},4120:function(e,t,r){"use strict";r.d(t,{I:function(){return N}});var n=r(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,c=e.size,l=void 0===c?24:c,u=i(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),n.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"2.18",ry:"2.18"}),n.createElement("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),n.createElement("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),n.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),n.createElement("line",{x1:"2",y1:"7",x2:"7",y2:"7"}),n.createElement("line",{x1:"2",y1:"17",x2:"7",y2:"17"}),n.createElement("line",{x1:"17",y1:"17",x2:"22",y2:"17"}),n.createElement("line",{x1:"17",y1:"7",x2:"22",y2:"7"}))}));a.displayName="Film";var c=a;function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=u(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),n.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),n.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))}));s.displayName="Instagram";var f=s;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=d(e,["color","size"]);return n.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}),n.createElement("polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}))}));y.displayName="Youtube";var h=y;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=v(e,["color","size"]);return n.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));b.displayName="Twitter";var g=b;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var E=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=O(e,["color","size"]);return n.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),n.createElement("circle",{cx:"12",cy:"13",r:"4"}))}));E.displayName="Camera";var j=E;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var k=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=x(e,["color","size"]);return n.createElement("svg",T({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),n.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),n.createElement("polyline",{points:"21 15 16 10 5 21"}))}));k.displayName="Image";var C=k;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var P=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=A(e,["color","size"]);return n.createElement("svg",S({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),n.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),n.createElement("circle",{cx:"4",cy:"4",r:"2"}))}));P.displayName="Linkedin";var L={width:"3rem",height:"3rem"},I=[["https://vimeo.com/user24354353",c],["https://www.instagram.com/albertodobladov/",f],["https://www.youtube.com/channel/UCuh68AZF3sxVJlxC1IqbjfQ/",h],["https://www.twitter.com/albertodobladov/",g],["https://wirestock.io/alberto.doblado.vera/portfolio/",j],["https://www.behance.net/AlbertoDV",C],["https://www.linkedin.com/in/alberto-doblado-vera",P]],N=function(){return n.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"2rem",padding:"3rem 0"}},I.map((function(e){var t=e[0],r=e[1];return n.createElement("a",{target:"_blank",rel:"noopener noreferrer",key:t,href:t},n.createElement(r,{style:L}))})))}},7469:function(e,t,r){"use strict";r.d(t,{nC:function(){return n},TN:function(){return o},tz:function(){return i},fL:function(){return a}});var n="index-module--container--1TK4P",o="index-module--title--21mNY",i="index-module--profileImage--297la",a="index-module--text--1qnDP"},7694:function(e,t,r){"use strict";t.Z=r.p+"static/clones-1-43c77c0cf1a2f241f28b8dbc759f9025.jpg"},8224:function(e,t,r){"use strict";t.Z=r.p+"static/clones-2-7cc7d49a4aa09b27aae9aafe6fea4a1f.png"},5110:function(e,t,r){"use strict";t.Z=r.p+"static/clones-3-d1143e4bd47a23ffb951df94eae58d08.jpg"},5324:function(e,t,r){"use strict";t.Z=r.p+"static/mondnacht-1-fdefc6d291cd922e670df482b3099e37.png"},9718:function(e,t,r){"use strict";t.Z=r.p+"static/mondnacht-2-086c88d078daefef1cc9eca2f2b74ac9.png"},9879:function(e,t,r){"use strict";t.Z=r.p+"static/mondnacht-3-dd0d573ba088126ae6a754f089535602.png"},6694:function(e,t,r){"use strict";t.Z=r.p+"static/profile-bc5748d6440187ed2b6a87ffe2ede176.jpg"},1662:function(e,t,r){"use strict";t.Z=r.p+"static/tirantitos-1-7ccaaaf2a5ba3e6d343c0f8d42122b7f.jpg"},4124:function(e,t,r){"use strict";t.Z=r.p+"static/tirantitos-2-ba2c7a2654957654e1859b21b5ad6205.jpg"},5821:function(e,t,r){"use strict";t.Z=r.p+"static/tirantitos-3-81920c289f96a29d2397a9b8b496ddbc.jpg"}}]);
//# sourceMappingURL=1736361283a8ff694ebb496d59b4bab05fc6b9ef-f16c28ab3a8524772757.js.map