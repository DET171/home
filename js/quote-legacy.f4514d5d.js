(function(t){function e(e){for(var r,u,c=e[0],i=e[1],d=e[2],s=0,f=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={quote:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=i;a.push([9,"chunk-vendors"]),n()})({9:function(t,e,n){t.exports=n("b11d")},b11d:function(t,e,n){"use strict";n.r(e);var r=n("7a23");const o=Object(r["u"])("data-v-3d7ba24f");Object(r["k"])("data-v-3d7ba24f");const a={pad:"",class:"ui raised very padded text container segment"},u=Object(r["h"])("h1",{center:"",class:"middle aligned"}," Your free quote of the day ",-1),c={class:"pad padded text container segment very"},i={large:""},d={style:{float:"right"}};Object(r["j"])();const l=o((t,e,n,o,l,s)=>(Object(r["i"])(),Object(r["d"])("div",a,[u,Object(r["h"])("button",{class:"ui basic button",onClick:e[1]||(e[1]=t=>s.get())}," Get new quote "),Object(r["h"])("div",c,[Object(r["h"])("p",i,[Object(r["h"])("i",null,Object(r["o"])(t.quote),1)]),Object(r["h"])("p",d,[Object(r["h"])("i",null,"-- "+Object(r["o"])(t.a),1)])])])));var s=n("bc3a"),f=n.n(s),p={name:"App",data:function(){return{quote:"Loading...",a:"Loading..."}},mounted(){f.a.get("https://type.fit/api/quotes").then(t=>{var e=t.data,n=Math.floor(Math.random()*e.length);this.quote=e[n].text,this.a=e[n].author})},methods:{get:function(){f.a.get("https://type.fit/api/quotes").then(t=>{var e=t.data,n=Math.floor(Math.random()*e.length);this.quote=e[n].text,this.a=e[n].author})}}};n("dbfc");p.render=l,p.__scopeId="data-v-3d7ba24f";var b=p;Object(r["c"])(b).mount("#app")},daf1:function(t,e,n){},dbfc:function(t,e,n){"use strict";n("daf1")}});
//# sourceMappingURL=quote-legacy.f4514d5d.js.map