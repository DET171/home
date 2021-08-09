(function(t){function e(e){for(var r,l,s=e[0],a=e[1],u=e[2],b=0,h=[];b<s.length;b++)l=s[b],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&h.push(c[l][0]),c[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);i&&i(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==c[a]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},c={check:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var i=a;o.push([7,"chunk-vendors"]),n()})({"351d":function(t,e,n){"use strict";n("6657")},6657:function(t,e,n){},7:function(t,e,n){t.exports=n("bbf0")},bbf0:function(t,e,n){"use strict";n.r(e);var r=n("7a23");const c=Object(r["u"])("data-v-200fe394");Object(r["k"])("data-v-200fe394");const o={class:"markdown-body"},l=Object(r["h"])("h1",null,"Browser check",-1),s={class:"center"},a={full:""},u=Object(r["h"])("tr",{full:""},[Object(r["h"])("th",{half:""}," Features "),Object(r["h"])("th",{half:""}," Supported? ")],-1),i=Object(r["h"])("td",null,"Full ES6 syntax support",-1),b={full:"",centre:"",class:"material-icons"},h=Object(r["h"])("td",null,[Object(r["h"])("code",null,"text-decoration-style: blink")],-1),f={full:"",centre:"",class:"material-icons"},p=Object(r["h"])("td",null,[Object(r["h"])("code",null,"vh"),Object(r["g"])(" (CSS) ")],-1),j={full:"",centre:"",class:"material-icons"},O=Object(r["h"])("td",null,[Object(r["h"])("code",null,"animation"),Object(r["g"])(" (CSS) ")],-1),d={full:"",centre:"",class:"material-icons"},g=Object(r["h"])("td",null,[Object(r["h"])("code",null,"columns"),Object(r["g"])(" (CSS) ")],-1),v={full:"",centre:"",class:"material-icons"},m=Object(r["h"])("td",null,[Object(r["h"])("code",null,"gap"),Object(r["g"])(" (CSS) ")],-1),S={full:"",centre:"",class:"material-icons"};Object(r["j"])();const _=c((t,e,n,c,_,y)=>(Object(r["i"])(),Object(r["d"])("div",o,[l,Object(r["h"])("div",s,[Object(r["h"])("p",null,"Browser version: "+Object(r["o"])(y.appVersion()),1),Object(r["h"])("p",null,"Browser vendor: "+Object(r["o"])(y.vendor()),1),Object(r["h"])("p",null,"Computer platform: "+Object(r["o"])(y.platform()),1),Object(r["h"])("p",null,"Browser languages: "+Object(r["o"])(y.langs()),1)]),Object(r["h"])("table",a,[u,Object(r["h"])("tr",null,[i,Object(r["h"])("td",b,Object(r["o"])(y.es6()),1)]),Object(r["h"])("tr",null,[h,Object(r["h"])("td",f,Object(r["o"])(y.cssblink()),1)]),Object(r["h"])("tr",null,[p,Object(r["h"])("td",j,Object(r["o"])(y.cssvh()),1)]),Object(r["h"])("tr",null,[O,Object(r["h"])("td",d,Object(r["o"])(y.cssan()),1)]),Object(r["h"])("tr",null,[g,Object(r["h"])("td",v,Object(r["o"])(y.csscols()),1)]),Object(r["h"])("tr",null,[m,Object(r["h"])("td",S,Object(r["o"])(y.cssgap()),1)])])])));var y=n("ab4e"),w=n.n(y),k={name:"App",methods:{es6:function(){if(w.a.all("class","spread","let","arrowFunction","const","newArrayFeatures","newObjectFeatures","collections","generators","promises","templateStrings","symbols","destructuring","defaultParamValues","asyncFunctions"))var t="check_circle_outline";else t="highlight_off";return t},appVersion:function(){return navigator.userAgentData.brands[2].brand+" "+navigator.userAgentData.brands[2].version},vendor:function(){return navigator.vendor},langs:function(){return navigator.languages.join(", ")},platform:function(){return"Win32"==navigator.platform?"Windows":navigator.platform},cssblink:function(){return CSS.supports("text-decoration-style","blink")?"check_circle_outline":"highlight_off"},cssvh:function(){return CSS.supports("font-size","10vh")?"check_circle_outline":"highlight_off"},cssan:function(){return CSS.supports("animation","mymove 5s infinite")?"check_circle_outline":"highlight_off"},csscols:function(){return CSS.supports("columns","100px 3")?"check_circle_outline":"highlight_off"},cssgap:function(){return CSS.supports("gap","50px")?"check_circle_outline":"highlight_off"}}};n("351d");k.render=_,k.__scopeId="data-v-200fe394";var x=k;Object(r["c"])(x).mount("#app")}});
//# sourceMappingURL=check.b802b83c.js.map