var vis=function(exports,visData){"use strict"
;function _interopDefaultLegacy(e){
return e&&"object"==typeof e&&"default"in e?e:{
default:e}}
var visData__default=_interopDefaultLegacy(visData),commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
;var module,x,visNetwork_min=(function(module,exports){

/**
	 * vis-network
	 * https://visjs.github.io/vis-network/
	 *
	 * A dynamic, browser-based visualization library.
	 *
	 * @version 8.3.1
	 * @date    2020-08-31T20:25:06.495Z
	 *
	 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
	 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
	 *
	 * @license
	 * vis.js is dual licensed under both
	 *
	 *   1. The Apache 2.0 License
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *   and
	 *
	 *   2. The MIT License
	 *      http://opensource.org/licenses/MIT
	 *
	 * vis.js may be distributed under either license.
	 */
!function(t,e){
var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:{}
;function o(t,e,i){return t(i={path:e,exports:{},
require:function(t,e){return function(){
throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}(null==e&&i.path)}},i.exports),i.exports}
var n=function(t){return t&&t.Math==Math&&t
},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof i&&i)||Function("return this")(),s=function(t){
try{return!!t()}catch(t){return!0}
},a=!s((function(){
return 7!=Object.defineProperty({},1,{
get:function(){return 7}})[1]
})),h={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,l={
f:d&&!h.call({1:2},1)?function(t){var e=d(this,t)
;return!!e&&e.enumerable}:h},c=function(t,e){
return{enumerable:!(1&t),configurable:!(2&t),
writable:!(4&t),value:e}
},u={}.toString,f=function(t){
return u.call(t).slice(8,-1)
},p="".split,v=s((function(){
return!Object("z").propertyIsEnumerable(0)
}))?function(t){
return"String"==f(t)?p.call(t,""):Object(t)
}:Object,g=function(t){
if(null==t)throw TypeError("Can't call method on "+t)
;return t},y=function(t){return v(g(t))
},m=function(t){
return"object"==typeof t?null!==t:"function"==typeof t
},b=function(t,e){if(!m(t))return t;var i,o
;if(e&&"function"==typeof(i=t.toString)&&!m(o=i.call(t)))return o
;if("function"==typeof(i=t.valueOf)&&!m(o=i.call(t)))return o
;if(!e&&"function"==typeof(i=t.toString)&&!m(o=i.call(t)))return o
;throw TypeError("Can't convert object to primitive value")
},w={}.hasOwnProperty,k=function(t,e){
return w.call(t,e)
},_=r.document,x=m(_)&&m(_.createElement),O=function(t){
return x?_.createElement(t):{}
},E=!a&&!s((function(){
return 7!=Object.defineProperty(O("div"),"a",{
get:function(){return 7}}).a
})),C=Object.getOwnPropertyDescriptor,S={
f:a?C:function(t,e){if(t=y(t),e=b(e,!0),E)try{
return C(t,e)}catch(t){}
if(k(t,e))return c(!l.f.call(t,e),t[e])}
},T=/#|\.prototype\./,M=function(t,e){
var i=P[D(t)]
;return i==B||i!=I&&("function"==typeof e?s(e):!!e)
},D=M.normalize=function(t){
return String(t).replace(T,".").toLowerCase()
},P=M.data={},I=M.NATIVE="N",B=M.POLYFILL="P",z=M,F={},N=function(t){
if("function"!=typeof t)throw TypeError(String(t)+" is not a function")
;return t},A=function(t,e,i){
if(N(t),void 0===e)return t;switch(i){case 0:
return function(){return t.call(e)};case 1:
return function(i){return t.call(e,i)};case 2:
return function(i,o){return t.call(e,i,o)};case 3:
return function(i,o,n){return t.call(e,i,o,n)}}
return function(){return t.apply(e,arguments)}
},j=function(t){
if(!m(t))throw TypeError(String(t)+" is not an object")
;return t},R=Object.defineProperty,L={
f:a?R:function(t,e,i){
if(j(t),e=b(e,!0),j(i),E)try{return R(t,e,i)
}catch(t){}
if("get"in i||"set"in i)throw TypeError("Accessors not supported")
;return"value"in i&&(t[e]=i.value),t}
},H=a?function(t,e,i){return L.f(t,e,c(1,i))
}:function(t,e,i){return t[e]=i,t
},W=S.f,V=function(t){var e=function(_e2,i,o){
if(this instanceof t){switch(arguments.length){
case 0:return new t;case 1:return new t(_e2)
;case 2:return new t(_e2,i)}return new t(_e2,i,o)}
return t.apply(this,arguments)}
;return e.prototype=t.prototype,e
},q=function(t,e){
var i,o,n,s,a,h,d,l,c=t.target,u=t.global,f=t.stat,p=t.proto,v=u?r:f?r[c]:(r[c]||{}).prototype,g=u?F:F[c]||(F[c]={}),y=g.prototype
;for(n in e)i=!z(u?n:c+(f?".":"#")+n,t.forced)&&v&&k(v,n),
a=g[n],i&&(h=t.noTargetGet?(l=W(v,n))&&l.value:v[n]),
s=i&&h?h:e[n],i&&typeof a==typeof s||(d=t.bind&&i?A(s,r):t.wrap&&i?V(s):p&&"function"==typeof s?A(Function.call,s):s,
(t.sham||s&&s.sham||a&&a.sham)&&H(d,"sham",!0),
g[n]=d,p&&(k(F,o=c+"Prototype")||H(F,o,{}),
F[o][n]=s,t.real&&y&&!y[n]&&H(y,n,s)))
},U=[].slice,Y={},X=function(t,e,i){if(!(e in Y)){
for(var o=[],n=0;n<e;n++)o[n]="a["+n+"]"
;Y[e]=Function("C,a","return new C("+o.join(",")+")")
}return Y[e](t,i)},G=Function.bind||function(t){
var e=N(this),i=U.call(arguments,1),o=function o(){
var n=i.concat(U.call(arguments))
;return this instanceof o?X(e,n.length,n):e.apply(t,n)
}
;return m(e.prototype)&&(o.prototype=e.prototype),o
};q({target:"Function",proto:!0},{bind:G})
;var K=function(t){return F[t+"Prototype"]
},$=K("Function").bind,Q=Function.prototype,Z=function(t){
var e=t.bind
;return t===Q||t instanceof Function&&e===Q.bind?$:e
},J=Math.ceil,tt=Math.floor,et=function(t){
return isNaN(t=+t)?0:(t>0?tt:J)(t)
},it=Math.min,ot=function(t){
return t>0?it(et(t),9007199254740991):0
},nt=Math.max,rt=Math.min,st=function(t,e){
var i=et(t);return i<0?nt(i+e,0):rt(i,e)
},at=function(t){return function(e,i,o){
var n,r=y(e),s=ot(r.length),a=st(o,s);if(t&&i!=i){
for(;s>a;)if((n=r[a++])!=n)return!0
}else for(;s>a;a++)if((t||a in r)&&r[a]===i)return t||a||0
;return!t&&-1}},ht={includes:at(!0),indexOf:at(!1)
},dt={},lt=ht.indexOf,ct=function(t,e){
var i,o=y(t),n=0,r=[]
;for(i in o)!k(dt,i)&&k(o,i)&&r.push(i)
;for(;e.length>n;)k(o,i=e[n++])&&(~lt(r,i)||r.push(i))
;return r
},ut=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ft=Object.keys||function(t){
return ct(t,ut)},pt={
f:Object.getOwnPropertySymbols},vt=function(t){
return Object(g(t))
},gt=Object.assign,yt=Object.defineProperty,mt=!gt||s((function(){
if(a&&1!==gt({b:1},gt(yt({},"a",{enumerable:!0,
get:function(){yt(this,"b",{value:3,enumerable:!1
})}}),{b:2})).b)return!0
;var t={},e={},i=Symbol(),o="abcdefghijklmnopqrst"
;return t[i]=7,o.split("").forEach((function(t){
e[t]=t})),7!=gt({},t)[i]||ft(gt({},e)).join("")!=o
}))?function(t,e){
for(var i=vt(t),o=arguments.length,n=1,r=pt.f,s=l.f;o>n;)for(var h,d=v(arguments[n++]),c=r?ft(d).concat(r(d)):ft(d),u=c.length,f=0;u>f;)h=c[f++],
a&&!s.call(d,h)||(i[h]=d[h]);return i}:gt;q({
target:"Object",stat:!0,forced:Object.assign!==mt
},{assign:mt});var bt=F.Object.assign
;function wt(t,e,i,o){
t.beginPath(),t.arc(e,i,o,0,2*Math.PI,!1),t.closePath()
}function kt(t,e,i,o,n,r){var s=Math.PI/180
;o-2*r<0&&(r=o/2),n-2*r<0&&(r=n/2),t.beginPath(),
t.moveTo(e+r,i),t.lineTo(e+o-r,i),
t.arc(e+o-r,i+r,r,270*s,360*s,!1),t.lineTo(e+o,i+n-r),
t.arc(e+o-r,i+n-r,r,0,90*s,!1),
t.lineTo(e+r,i+n),t.arc(e+r,i+n-r,r,90*s,180*s,!1),
t.lineTo(e,i+r),t.arc(e+r,i+r,r,180*s,270*s,!1),
t.closePath()}function _t(t,e,i,o,n){
var r=.5522848,s=o/2*r,a=n/2*r,h=e+o,d=i+n,l=e+o/2,c=i+n/2
;t.beginPath(),t.moveTo(e,c),
t.bezierCurveTo(e,c-a,l-s,i,l,i),t.bezierCurveTo(l+s,i,h,c-a,h,c),
t.bezierCurveTo(h,c+a,l+s,d,l,d),
t.bezierCurveTo(l-s,d,e,c+a,e,c),t.closePath()}
function xt(t,e,i,o,n){
var r=n*(1/3),s=.5522848,a=o/2*s,h=r/2*s,d=e+o,l=i+r,c=e+o/2,u=i+r/2,f=i+(n-r/2),p=i+n
;t.beginPath(),
t.moveTo(d,u),t.bezierCurveTo(d,u+h,c+a,l,c,l),t.bezierCurveTo(c-a,l,e,u+h,e,u),
t.bezierCurveTo(e,u-h,c-a,i,c,i),
t.bezierCurveTo(c+a,i,d,u-h,d,u),t.lineTo(d,f),
t.bezierCurveTo(d,f+h,c+a,p,c,p),
t.bezierCurveTo(c-a,p,e,f+h,e,f),t.lineTo(e,u)}
function Ot(t,e,i,o,n,r){
t.beginPath(),t.moveTo(e,i)
;for(var s=r.length,a=o-e,h=n-i,d=h/a,l=Math.sqrt(a*a+h*h),c=0,u=!0,f=0,p=+r[0];l>=.1;)(p=+r[c++%s])>l&&(p=l),
f=Math.sqrt(p*p/(1+d*d)),
e+=f=a<0?-f:f,i+=d*f,!0===u?t.lineTo(e,i):t.moveTo(e,i),
l-=p,u=!u}var Et={circle:wt,dashedLine:Ot,
database:xt,diamond:function(t,e,i,o){
t.beginPath(),t.lineTo(e,i+o),t.lineTo(e+o,i),
t.lineTo(e,i-o),t.lineTo(e-o,i),t.closePath()},
ellipse:_t,ellipse_vis:_t,
hexagon:function(t,e,i,o){t.beginPath()
;var n=2*Math.PI/6;t.moveTo(e+o,i)
;for(var r=1;r<6;r++)t.lineTo(e+o*Math.cos(n*r),i+o*Math.sin(n*r))
;t.closePath()},roundRect:kt,
square:function(t,e,i,o){
t.beginPath(),t.rect(e-o,i-o,2*o,2*o),t.closePath()
},star:function(t,e,i,o){
t.beginPath(),i+=.1*(o*=.82)
;for(var n=0;n<10;n++){var r=n%2==0?1.3*o:.5*o
;t.lineTo(e+r*Math.sin(2*n*Math.PI/10),i-r*Math.cos(2*n*Math.PI/10))
}t.closePath()},triangle:function(t,e,i,o){
t.beginPath(),i+=.275*(o*=1.15)
;var n=2*o,r=n/2,s=Math.sqrt(3)/6*n,a=Math.sqrt(n*n-r*r)
;t.moveTo(e,i-(a-s)),t.lineTo(e+r,i+s),
t.lineTo(e-r,i+s),t.lineTo(e,i-(a-s)),t.closePath()
},triangleDown:function(t,e,i,o){
t.beginPath(),i-=.275*(o*=1.15)
;var n=2*o,r=n/2,s=Math.sqrt(3)/6*n,a=Math.sqrt(n*n-r*r)
;t.moveTo(e,i+(a-s)),t.lineTo(e+r,i-s),
t.lineTo(e-r,i-s),t.lineTo(e,i+(a-s)),t.closePath()
}},Ct=o((function(t){function e(t){
if(t)return function(t){
for(var i in e.prototype)t[i]=e.prototype[i]
;return t}(t)}
t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,e){
return this._callbacks=this._callbacks||{},
(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),
this},e.prototype.once=function(t,e){function i(){
this.off(t,i),e.apply(this,arguments)}
return i.fn=e,this.on(t,i),this
},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,e){
if(this._callbacks=this._callbacks||{},
0==arguments.length)return this._callbacks={},this
;var i,o=this._callbacks["$"+t];if(!o)return this
;if(1==arguments.length)return delete this._callbacks["$"+t],
this
;for(var n=0;n<o.length;n++)if((i=o[n])===e||i.fn===e){
o.splice(n,1);break}
return 0===o.length&&delete this._callbacks["$"+t],this
},e.prototype.emit=function(t){
this._callbacks=this._callbacks||{}
;for(var e=new Array(arguments.length-1),i=this._callbacks["$"+t],o=1;o<arguments.length;o++)e[o-1]=arguments[o]
;if(i){o=0
;for(var n=(i=i.slice(0)).length;o<n;++o)i[o].apply(this,e)
}return this},e.prototype.listeners=function(t){
return this._callbacks=this._callbacks||{},
this._callbacks["$"+t]||[]
},e.prototype.hasListeners=function(t){
return!!this.listeners(t).length}}));q({
target:"Object",stat:!0,forced:!a,sham:!a},{
defineProperty:L.f});var St=o((function(t){
var e=F.Object,i=t.exports=function(t,i,o){
return e.defineProperty(t,i,o)}
;e.defineProperty.sham&&(i.sham=!0)
})),Tt=St,Mt=a?Object.defineProperties:function(t,e){
j(t)
;for(var i,o=ft(e),n=o.length,r=0;n>r;)L.f(t,i=o[r++],e[i])
;return t};q({target:"Object",stat:!0,forced:!a,
sham:!a},{defineProperties:Mt})
;var Dt=o((function(t){
var e=F.Object,i=t.exports=function(t,i){
return e.defineProperties(t,i)}
;e.defineProperties.sham&&(i.sham=!0)
})),Pt=function(t){
return"function"==typeof t?t:void 0
},It=function(t,e){
return arguments.length<2?Pt(F[t])||Pt(r[t]):F[t]&&F[t][e]||r[t]&&r[t][e]
},Bt=ut.concat("length","prototype"),zt={
f:Object.getOwnPropertyNames||function(t){
return ct(t,Bt)}
},Ft=It("Reflect","ownKeys")||function(t){
var e=zt.f(j(t)),i=pt.f;return i?e.concat(i(t)):e
},Nt=function(t,e,i){var o=b(e)
;o in t?L.f(t,o,c(0,i)):t[o]=i};q({
target:"Object",stat:!0,sham:!a},{
getOwnPropertyDescriptors:function(t){
for(var e,i,o=y(t),n=S.f,r=Ft(o),s={},a=0;r.length>a;)void 0!==(i=n(o,e=r[a++]))&&Nt(s,e,i)
;return s}})
;var At=F.Object.getOwnPropertyDescriptors,jt=S.f,Rt=s((function(){
jt(1)}));q({target:"Object",stat:!0,forced:!a||Rt,
sham:!a},{getOwnPropertyDescriptor:function(t,e){
return jt(y(t),e)}});var Lt,Ht=o((function(t){
var e=F.Object,i=t.exports=function(t,i){
return e.getOwnPropertyDescriptor(t,i)}
;e.getOwnPropertyDescriptor.sham&&(i.sham=!0)
})),Wt=Ht,Vt=!!Object.getOwnPropertySymbols&&!s((function(){
return!String(Symbol())
})),qt=Vt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ut=Array.isArray||function(t){
return"Array"==f(t)
},Yt=It("document","documentElement"),Xt="__core-js_shared__",Gt=r[Xt]||function(t,e){
try{H(r,t,e)}catch(i){r[t]=e}return e
}(Xt,{}),Kt=o((function(t){
(t.exports=function(t,e){
return Gt[t]||(Gt[t]=void 0!==e?e:{})
})("versions",[]).push({version:"3.6.4",
mode:"pure",
copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})
})),$t=0,Qt=Math.random(),Zt=function(t){
return"Symbol("+String(void 0===t?"":t)+")_"+(++$t+Qt).toString(36)
},Jt=Kt("keys"),te=function(t){
return Jt[t]||(Jt[t]=Zt(t))
},ee=te("IE_PROTO"),ie=function(){},oe=function(t){
return"<script>"+t+"<\/script>"},_ne=function(){
try{
Lt=document.domain&&new ActiveXObject("htmlfile")
}catch(t){}var t,e;_ne=Lt?function(t){
t.write(oe("")),t.close()
;var e=t.parentWindow.Object;return t=null,e
}(Lt):((e=O("iframe")).style.display="none",
Yt.appendChild(e),e.src=String("javascript:"),
(t=e.contentWindow.document).open(),
t.write(oe("document.F=Object")),t.close(),t.F)
;for(var i=ut.length;i--;)delete _ne.prototype[ut[i]]
;return _ne()};dt[ee]=!0
;var re=Object.create||function(t,e){var i
;return null!==t?(ie.prototype=j(t),i=new ie,
ie.prototype=null,i[ee]=t):i=_ne(),
void 0===e?i:Mt(i,e)
},se=zt.f,ae={}.toString,he="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],de={
f:function(t){
return he&&"[object Window]"==ae.call(t)?function(t){
try{return se(t)}catch(t){return he.slice()}
}(t):se(y(t))}},le=function(t,e,i,o){
o&&o.enumerable?t[e]=i:H(t,e,i)
},ce=Kt("wks"),ue=r.Symbol,fe=qt?ue:ue&&ue.withoutSetter||Zt,pe=function(t){
return k(ce,t)||(Vt&&k(ue,t)?ce[t]=ue[t]:ce[t]=fe("Symbol."+t)),
ce[t]},ve={f:pe},ge=L.f,ye=function(t){
var e=F.Symbol||(F.Symbol={});k(e,t)||ge(e,t,{
value:ve.f(t)})},me={};me[pe("toStringTag")]="z"
;var be="[object z]"===String(me),we=pe("toStringTag"),ke="Arguments"==f(function(){
return arguments}()),_e=be?f:function(t){var e,i,o
;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){
try{return t[e]}catch(t){}
}(e=Object(t),we))?i:ke?f(e):"Object"==(o=f(e))&&"function"==typeof e.callee?"Arguments":o
},xe=be?{}.toString:function(){
return"[object "+_e(this)+"]"
},Oe=L.f,Ee=pe("toStringTag"),Ce=function(t,e,i,o){
if(t){var n=i?t:t.prototype;k(n,Ee)||Oe(n,Ee,{
configurable:!0,value:e
}),o&&!be&&H(n,"toString",xe)}
},Se=Function.toString
;"function"!=typeof Gt.inspectSource&&(Gt.inspectSource=function(t){
return Se.call(t)})
;var Te,Me,De,Pe=Gt.inspectSource,Ie=r.WeakMap,Be="function"==typeof Ie&&/native code/.test(Pe(Ie)),ze=r.WeakMap
;if(Be){
var Fe=new ze,Ne=Fe.get,Ae=Fe.has,je=Fe.set
;Te=function(t,e){return je.call(Fe,t,e),e
},Me=function(t){return Ne.call(Fe,t)||{}
},De=function(t){return Ae.call(Fe,t)}}else{
var Re=te("state");dt[Re]=!0,Te=function(t,e){
return H(t,Re,e),e},Me=function(t){
return k(t,Re)?t[Re]:{}},De=function(t){
return k(t,Re)}}var Le={set:Te,get:Me,has:De,
enforce:function(t){return De(t)?Me(t):Te(t,{})},
getterFor:function(t){return function(e){var i
;if(!m(e)||(i=Me(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required")
;return i}}},He=pe("species"),We=function(t,e){
var i
;return Ut(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!Ut(i.prototype)?m(i)&&null===(i=i[He])&&(i=void 0):i=void 0),
new(void 0===i?Array:i)(0===e?0:e)
},Ve=[].push,qe=function(t){
var e=1==t,i=2==t,o=3==t,n=4==t,r=6==t,s=5==t||r
;return function(a,h,d,l){
for(var c,u,f=vt(a),p=v(f),g=A(h,d,3),y=ot(p.length),m=0,b=l||We,w=e?b(a,y):i?b(a,0):void 0;y>m;m++)if((s||m in p)&&(u=g(c=p[m],m,f),
t))if(e)w[m]=u;else if(u)switch(t){case 3:return!0
;case 5:return c;case 6:return m;case 2:
Ve.call(w,c)}else if(n)return!1
;return r?-1:o||n?n:w}},Ue={forEach:qe(0),
map:qe(1),filter:qe(2),some:qe(3),every:qe(4),
find:qe(5),findIndex:qe(6)
},Ye=Ue.forEach,Xe=te("hidden"),Ge="Symbol",Ke=pe("toPrimitive"),$e=Le.set,Qe=Le.getterFor(Ge),Ze=Object.prototype,_Je=r.Symbol,ti=It("JSON","stringify"),ei=S.f,ii=L.f,oi=de.f,ni=l.f,ri=Kt("symbols"),si=Kt("op-symbols"),ai=Kt("string-to-symbol-registry"),hi=Kt("symbol-to-string-registry"),di=Kt("wks"),li=r.QObject,ci=!li||!li.prototype||!li.prototype.findChild,ui=a&&s((function(){
return 7!=re(ii({},"a",{get:function(){
return ii(this,"a",{value:7}).a}})).a
}))?function(t,e,i){var o=ei(Ze,e)
;o&&delete Ze[e],ii(t,e,i),o&&t!==Ze&&ii(Ze,e,o)
}:ii,fi=function(t,e){
var i=ri[t]=re(_Je.prototype);return $e(i,{
type:Ge,tag:t,description:e
}),a||(i.description=e),i},pi=qt?function(t){
return"symbol"==typeof t}:function(t){
return Object(t)instanceof _Je
},vi=function vi(t,e,i){t===Ze&&vi(si,e,i),j(t)
;var o=b(e,!0)
;return j(i),k(ri,o)?(i.enumerable?(k(t,Xe)&&t[Xe][o]&&(t[Xe][o]=!1),
i=re(i,{enumerable:c(0,!1)
})):(k(t,Xe)||ii(t,Xe,c(1,{})),t[Xe][o]=!0),ui(t,o,i)):ii(t,o,i)
},gi=function(t,e){j(t)
;var i=y(e),o=ft(i).concat(wi(i))
;return Ye(o,(function(e){
a&&!yi.call(i,e)||vi(t,e,i[e])})),t
},yi=function(t){var e=b(t,!0),i=ni.call(this,e)
;return!(this===Ze&&k(ri,e)&&!k(si,e))&&(!(i||!k(this,e)||!k(ri,e)||k(this,Xe)&&this[Xe][e])||i)
},mi=function(t,e){var i=y(t),o=b(e,!0)
;if(i!==Ze||!k(ri,o)||k(si,o)){var n=ei(i,o)
;return!n||!k(ri,o)||k(i,Xe)&&i[Xe][o]||(n.enumerable=!0),
n}},bi=function(t){var e=oi(y(t)),i=[]
;return Ye(e,(function(t){
k(ri,t)||k(dt,t)||i.push(t)})),i},wi=function(t){
var e=t===Ze,i=oi(e?si:y(t)),o=[]
;return Ye(i,(function(t){
!k(ri,t)||e&&!k(Ze,t)||o.push(ri[t])})),o}
;if(Vt||(le((_Je=function(){
if(this instanceof _Je)throw TypeError("Symbol is not a constructor")
;var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=Zt(t),i=function i(t){
this===Ze&&i.call(si,t),
k(this,Xe)&&k(this[Xe],e)&&(this[Xe][e]=!1),ui(this,e,c(1,t))
};return a&&ci&&ui(Ze,e,{configurable:!0,set:i
}),fi(e,t)}).prototype,"toString",(function(){
return Qe(this).tag
})),le(_Je,"withoutSetter",(function(t){
return fi(Zt(t),t)
})),l.f=yi,L.f=vi,S.f=mi,zt.f=de.f=bi,pt.f=wi,ve.f=function(t){
return fi(pe(t),t)
},a&&ii(_Je.prototype,"description",{
configurable:!0,get:function(){
return Qe(this).description}})),q({global:!0,
wrap:!0,forced:!Vt,sham:!Vt},{Symbol:_Je
}),Ye(ft(di),(function(t){ye(t)})),q({target:Ge,
stat:!0,forced:!Vt},{for:function(t){
var e=String(t);if(k(ai,e))return ai[e]
;var i=_Je(e);return ai[e]=i,hi[i]=e,i},
keyFor:function(t){
if(!pi(t))throw TypeError(t+" is not a symbol")
;if(k(hi,t))return hi[t]},useSetter:function(){
ci=!0},useSimple:function(){ci=!1}}),q({
target:"Object",stat:!0,forced:!Vt,sham:!a},{
create:function(t,e){
return void 0===e?re(t):gi(re(t),e)},
defineProperty:vi,defineProperties:gi,
getOwnPropertyDescriptor:mi}),q({target:"Object",
stat:!0,forced:!Vt},{getOwnPropertyNames:bi,
getOwnPropertySymbols:wi}),q({target:"Object",
stat:!0,forced:s((function(){pt.f(1)}))},{
getOwnPropertySymbols:function(t){
return pt.f(vt(t))}}),ti){
var ki=!Vt||s((function(){var t=_Je()
;return"[null]"!=ti([t])||"{}"!=ti({a:t
})||"{}"!=ti(Object(t))}));q({target:"JSON",
stat:!0,forced:ki},{stringify:function(t,e,i){
for(var o,n=[t],r=1;arguments.length>r;)n.push(arguments[r++])
;if(o=e,(m(e)||void 0!==t)&&!pi(t))return Ut(e)||(e=function(t,_e3){
if("function"==typeof o&&(_e3=o.call(this,t,_e3)),
!pi(_e3))return _e3}),n[1]=e,ti.apply(null,n)}})}
_Je.prototype[Ke]||H(_Je.prototype,Ke,_Je.prototype.valueOf),
Ce(_Je,Ge),dt[Xe]=!0
;var _i,xi,Oi,Ei=F.Object.getOwnPropertySymbols,Ci={},Si=!s((function(){
function t(){}
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype
})),Ti=te("IE_PROTO"),Mi=Object.prototype,Di=Si?Object.getPrototypeOf:function(t){
return t=vt(t),
k(t,Ti)?t[Ti]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Mi:null
},Pi=(pe("iterator"),!1)
;[].keys&&("next"in(Oi=[].keys())?(xi=Di(Di(Oi)))!==Object.prototype&&(_i=xi):Pi=!0),
null==_i&&(_i={});var Ii={IteratorPrototype:_i,
BUGGY_SAFARI_ITERATORS:Pi
},Bi=Ii.IteratorPrototype,zi=function(){
return this
},Fi=Object.setPrototypeOf||("__proto__"in{}?function(){
var t,e=!1,i={};try{
(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),
e=i instanceof Array}catch(t){}
return function(i,o){return j(i),function(t){
if(!m(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")
}(o),e?t.call(i,o):i.__proto__=o,i}
}():void 0),Ni=Ii.IteratorPrototype,Ai=Ii.BUGGY_SAFARI_ITERATORS,ji=pe("iterator"),Ri="keys",Li="values",Hi="entries",Wi=function(){
return this},Vi=function(t,e,i,o,n,r,s){
!function(t,e,i){var o=e+" Iterator"
;t.prototype=re(Bi,{next:c(1,i)
}),Ce(t,o,!1,!0),Ci[o]=zi}(i,e,o)
;var a,h,d,l=function(t){if(t===n&&g)return g
;if(!Ai&&t in p)return p[t];switch(t){case Ri:
case Li:case Hi:return function(){
return new i(this,t)}}return function(){
return new i(this)}
},u=e+" Iterator",f=!1,p=t.prototype,v=p[ji]||p["@@iterator"]||n&&p[n],g=!Ai&&v||l(n),y="Array"==e&&p.entries||v
;if(y&&(a=Di(y.call(new t)),
Ni!==Object.prototype&&a.next&&(Ce(a,u,!0,!0),Ci[u]=Wi)),
n==Li&&v&&v.name!==Li&&(f=!0,g=function(){
return v.call(this)
}),s&&p[ji]!==g&&H(p,ji,g),Ci[e]=g,n)if(h={
values:l(Li),keys:r?g:l(Ri),entries:l(Hi)
},s)for(d in h)(Ai||f||!(d in p))&&le(p,d,h[d]);else q({
target:e,proto:!0,forced:Ai||f},h);return h
},qi="Array Iterator",Ui=Le.set,Yi=Le.getterFor(qi)
;Vi(Array,"Array",(function(t,e){Ui(this,{type:qi,
target:y(t),index:0,kind:e})}),(function(){
var t=Yi(this),e=t.target,i=t.kind,o=t.index++
;return!e||o>=e.length?(t.target=void 0,{
value:void 0,done:!0}):"keys"==i?{value:o,done:!1
}:"values"==i?{value:e[o],done:!1}:{
value:[o,e[o]],done:!1}
}),"values"),Ci.Arguments=Ci.Array
;var Xi=pe("toStringTag");for(var Gi in{
CSSRuleList:0,CSSStyleDeclaration:0,
CSSValueList:0,ClientRectList:0,DOMRectList:0,
DOMStringList:0,DOMTokenList:1,
DataTransferItemList:0,FileList:0,
HTMLAllCollection:0,HTMLCollection:0,
HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,
MimeTypeArray:0,NamedNodeMap:0,NodeList:1,
PaintRequestList:0,Plugin:0,PluginArray:0,
SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,
SVGPointList:0,SVGStringList:0,SVGTransformList:0,
SourceBufferList:0,StyleSheetList:0,
TextTrackCueList:0,TextTrackList:0,TouchList:0}){
var Ki=r[Gi],$i=Ki&&Ki.prototype
;$i&&_e($i)!==Xi&&H($i,Xi,Gi),Ci[Gi]=Ci.Array}
var Qi=function(t){return function(e,i){
var o,n,r=String(g(e)),s=et(i),a=r.length
;return s<0||s>=a?t?"":void 0:(o=r.charCodeAt(s))<55296||o>56319||s+1===a||(n=r.charCodeAt(s+1))<56320||n>57343?t?r.charAt(s):o:t?r.slice(s,s+2):n-56320+(o-55296<<10)+65536
}
},Zi=(Qi(!1),Qi(!0)),Ji="String Iterator",to=Le.set,eo=Le.getterFor(Ji)
;Vi(String,"String",(function(t){to(this,{type:Ji,
string:String(t),index:0})}),(function(){
var t,e=eo(this),i=e.string,o=e.index
;return o>=i.length?{value:void 0,done:!0
}:(t=Zi(i,o),e.index+=t.length,{value:t,done:!1})
}));var io=pe("iterator"),oo=function(t){
if(null!=t)return t[io]||t["@@iterator"]||Ci[_e(t)]
},no=function(t){var e=oo(t)
;if("function"!=typeof e)throw TypeError(String(t)+" is not iterable")
;return j(e.call(t))},ro=oo,so=function(t,e,i,o){
try{return o?e(j(i)[0],i[1]):e(i)}catch(e){
var n=t.return;throw void 0!==n&&j(n.call(t)),e}
},ao=pe("iterator"),ho=Array.prototype,lo=function(t){
return void 0!==t&&(Ci.Array===t||ho[ao]===t)
},co=pe("iterator"),uo=!1;try{var fo=0,po={
next:function(){return{done:!!fo++}},
return:function(){uo=!0}};po[co]=function(){
return this},Array.from(po,(function(){throw 2}))
}catch(t){}var vo=!function(t,e){if(!uo)return!1
;var i=!1;try{var o={};o[co]=function(){return{
next:function(){return{done:i=!0}}}},t(o)
}catch(t){}return i}((function(t){Array.from(t)}))
;q({target:"Array",stat:!0,forced:vo},{
from:function(t){
var e,i,o,n,r,s,a=vt(t),h="function"==typeof this?this:Array,d=arguments.length,l=d>1?arguments[1]:void 0,c=void 0!==l,u=oo(a),f=0
;if(c&&(l=A(l,d>2?arguments[2]:void 0,2)),
null==u||h==Array&&lo(u))for(i=new h(e=ot(a.length));e>f;f++)s=c?l(a[f],f):a[f],
Nt(i,f,s);else for(r=(n=u.call(a)).next,
i=new h;!(o=r.call(n)).done;f++)s=c?so(n,l,[o.value,f],!0):o.value,
Nt(i,f,s);return i.length=f,i}})
;var go=F.Array.from,yo=go;q({target:"Object",
stat:!0,sham:!a},{create:re})
;var _o,mo=F.Object,bo=function(t,e){
return mo.create(t,e)
},wo=bo,ko=St,xo=function(t,e,i){
return e in t?ko(t,e,{value:i,enumerable:!0,
configurable:!0,writable:!0}):t[e]=i,t
},Oo="\t\n\v\f\r                　\u2028\u2029\ufeff",Eo="["+Oo+"]",Co=RegExp("^"+Eo+Eo+"*"),So=RegExp(Eo+Eo+"*$"),To=function(t){
return function(e){var i=String(g(e))
;return 1&t&&(i=i.replace(Co,"")),2&t&&(i=i.replace(So,"")),
i}},Mo={start:To(1),end:To(2),trim:To(3)
},Do=Mo.trim;q({target:"String",proto:!0,
forced:(_o="trim",s((function(){
return!!Oo[_o]()||"​᠎"!="​᠎"[_o]()||Oo[_o].name!==_o
})))},{trim:function(){return Do(this)}
}),K("String").trim;var Po=function(t,e){
var i=[][t];return!!i&&s((function(){
i.call(null,e||function(){throw 1},1)}))
},Io=Object.defineProperty,Bo={},zo=function(t){
throw t},Fo=function(t,e){if(k(Bo,t))return Bo[t]
;e||(e={})
;var i=[][t],o=!!k(e,"ACCESSORS")&&e.ACCESSORS,n=k(e,0)?e[0]:zo,r=k(e,1)?e[1]:void 0
;return Bo[t]=!!i&&!s((function(){
if(o&&!a)return!0;var t={length:-1};o?Io(t,1,{
enumerable:!0,get:zo}):t[1]=1,i.call(t,n,r)}))
},No=Ue.forEach,Ao=Po("forEach"),jo=Fo("forEach"),Ro=Ao&&jo?[].forEach:function(t){
return No(this,t,arguments.length>1?arguments[1]:void 0)
};q({target:"Array",proto:!0,forced:[].forEach!=Ro
},{forEach:Ro})
;var Lo=K("Array").forEach,Ho=Array.prototype,Wo={
DOMTokenList:!0,NodeList:!0},Vo=function(t){
var e=t.forEach
;return t===Ho||t instanceof Array&&e===Ho.forEach||Wo.hasOwnProperty(_e(t))?Lo:e
},qo=Mo.trim,Uo=r.parseInt,Yo=/^[+-]?0[Xx]/,Xo=8!==Uo(Oo+"08")||22!==Uo(Oo+"0x16")?function(t,e){
var i=qo(String(t))
;return Uo(i,e>>>0||(Yo.test(i)?16:10))}:Uo;q({
global:!0,forced:parseInt!=Xo},{parseInt:Xo})
;var Go=F.parseInt,Ko=l.f,$o=function(t){
return function(e){
for(var i,o=y(e),n=ft(o),r=n.length,s=0,h=[];r>s;)i=n[s++],a&&!Ko.call(o,i)||h.push(t?[i,o[i]]:o[i])
;return h}},Qo=($o(!0),$o(!1));q({target:"Object",
stat:!0},{values:function(t){return Qo(t)}
}),F.Object.values
;var Zo,Jo,tn=It("navigator","userAgent")||"",en=r.process,on=en&&en.versions,nn=on&&on.v8
;nn?Jo=(Zo=nn.split("."))[0]+Zo[1]:tn&&(!(Zo=tn.match(/Edge\/(\d+)/))||Zo[1]>=74)&&(Zo=tn.match(/Chrome\/(\d+)/))&&(Jo=Zo[1])
;var rn=Jo&&+Jo,sn=pe("species"),an=function(t){
return rn>=51||!s((function(){var e=[]
;return(e.constructor={})[sn]=function(){return{
foo:1}},1!==e[t](Boolean).foo}))
},hn=Ue.filter,dn=an("filter"),ln=Fo("filter");q({
target:"Array",proto:!0,forced:!dn||!ln},{
filter:function(t){
return hn(this,t,arguments.length>1?arguments[1]:void 0)
}})
;var cn=K("Array").filter,un=Array.prototype,fn=function(t){
var e=t.filter
;return t===un||t instanceof Array&&e===un.filter?cn:e
},pn=s((function(){Di(1)}));q({target:"Object",
stat:!0,forced:pn,sham:!Si},{
getPrototypeOf:function(t){return Di(vt(t))}})
;var vn=F.Object.getPrototypeOf,gn=vn,yn=ht.indexOf,mn=[].indexOf,bn=!!mn&&1/[1].indexOf(1,-0)<0,wn=Po("indexOf"),kn=Fo("indexOf",{
ACCESSORS:!0,1:0});q({target:"Array",proto:!0,
forced:bn||!wn||!kn},{indexOf:function(t){
return bn?mn.apply(this,arguments)||0:yn(this,t,arguments.length>1?arguments[1]:void 0)
}})
;var _n=K("Array").indexOf,xn=Array.prototype,On=function(t){
var e=t.indexOf
;return t===xn||t instanceof Array&&e===xn.indexOf?_n:e
};q({target:"Array",stat:!0},{isArray:Ut})
;var En=F.Array.isArray,Cn=En,Sn=function(t){
if(Cn(t))return t
},Tn=pe("iterator"),Mn=function(t){var e=Object(t)
;return void 0!==e[Tn]||"@@iterator"in e||Ci.hasOwnProperty(_e(e))
},Dn=pe("isConcatSpreadable"),Pn=9007199254740991,In="Maximum allowed index exceeded",Bn=rn>=51||!s((function(){
var t=[];return t[Dn]=!1,t.concat()[0]!==t
})),zn=an("concat"),Fn=function(t){
if(!m(t))return!1;var e=t[Dn]
;return void 0!==e?!!e:Ut(t)};q({target:"Array",
proto:!0,forced:!Bn||!zn},{concat:function(t){
var e,i,o,n,r,s=vt(this),a=We(s,0),h=0
;for(e=-1,o=arguments.length;e<o;e++)if(Fn(r=-1===e?s:arguments[e])){
if(h+(n=ot(r.length))>Pn)throw TypeError(In)
;for(i=0;i<n;i++,h++)i in r&&Nt(a,h,r[i])}else{
if(h>=Pn)throw TypeError(In);Nt(a,h++,r)}
return a.length=h,a}
}),ye("asyncIterator"),ye("hasInstance"),ye("isConcatSpreadable"),
ye("iterator"),
ye("match"),ye("matchAll"),ye("replace"),ye("search"),ye("species"),
ye("split"),
ye("toPrimitive"),ye("toStringTag"),ye("unscopables"),Ce(Math,"Math",!0),
Ce(r.JSON,"JSON",!0);var Nn=F.Symbol
;ye("asyncDispose"),ye("dispose"),ye("observable"),
ye("patternMatch"),ye("replaceAll")
;var An=Nn,jn=function(t,e){
if(void 0!==An&&Mn(Object(t))){
var i=[],o=!0,n=!1,r=void 0;try{
for(var s,a=no(t);!(o=(s=a.next()).done)&&(i.push(s.value),
!e||i.length!==e);o=!0);}catch(t){n=!0,r=t
}finally{try{o||null==a.return||a.return()
}finally{if(n)throw r}}return i}
},Rn=go,Ln=an("slice"),Hn=Fo("slice",{
ACCESSORS:!0,0:0,1:2
}),Wn=pe("species"),Vn=[].slice,qn=Math.max;q({
target:"Array",proto:!0,forced:!Ln||!Hn},{
slice:function(t,e){
var i,o,n,r=y(this),s=ot(r.length),a=st(t,s),h=st(void 0===e?s:e,s)
;if(Ut(r)&&("function"!=typeof(i=r.constructor)||i!==Array&&!Ut(i.prototype)?m(i)&&null===(i=i[Wn])&&(i=void 0):i=void 0,
i===Array||void 0===i))return Vn.call(r,a,h)
;for(o=new(void 0===i?Array:i)(qn(h-a,0)),
n=0;a<h;a++,n++)a in r&&Nt(o,n,r[a])
;return o.length=n,o}})
;var Un=K("Array").slice,Yn=Array.prototype,Xn=function(t){
var e=t.slice
;return t===Yn||t instanceof Array&&e===Yn.slice?Un:e
},Gn=Xn,Kn=function(t,e){
(null==e||e>t.length)&&(e=t.length)
;for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i]
;return o},$n=function(t,e){var i;if(t){
if("string"==typeof t)return Kn(t,e)
;var o=Gn(i=Object.prototype.toString.call(t)).call(i,8,-1)
;return"Object"===o&&t.constructor&&(o=t.constructor.name),
"Map"===o||"Set"===o?Rn(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Kn(t,e):void 0
}},Qn=function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
},Zn=function(t,e){
return Sn(t)||jn(t,e)||$n(t,e)||Qn()};q({
target:"Date",stat:!0},{now:function(){
return(new Date).getTime()}})
;var Jn=F.Date.now,tr=s((function(){ft(1)}));q({
target:"Object",stat:!0,forced:tr},{
keys:function(t){return ft(vt(t))}})
;var er=F.Object.keys,ir=Ue.map,or=an("map"),nr=Fo("map")
;q({target:"Array",proto:!0,forced:!or||!nr},{
map:function(t){
return ir(this,t,arguments.length>1?arguments[1]:void 0)
}})
;var rr=K("Array").map,sr=Array.prototype,ar=function(t){
var e=t.map
;return t===sr||t instanceof Array&&e===sr.map?rr:e
},hr=En,dr=ve.f("iterator"),lr=o((function(t){
function e(i){
return t.exports=e="function"==typeof An&&"symbol"==typeof dr?function(t){
return typeof t}:function(t){
return t&&"function"==typeof An&&t.constructor===An&&t!==An.prototype?"symbol":typeof t
},e(i)}t.exports=e}));q({target:"Reflect",stat:!0
},{ownKeys:Ft}),F.Reflect.ownKeys
;var cr=Xn,ur=function(t){if(Cn(t))return Kn(t)
},fr=function(t){
if(void 0!==An&&Mn(Object(t)))return Rn(t)
},pr=function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
},vr=function(t){return ur(t)||fr(t)||$n(t)||pr()
},gr=K("Array").concat,yr=Array.prototype,mr=function(t){
var e=t.concat
;return t===yr||t instanceof Array&&e===yr.concat?gr:e
},br=Nn;function wr(t,e){var i
;if(void 0===br||null==ro(t)){
if(hr(t)||(i=function(t,e){var i;if(t){
if("string"==typeof t)return kr(t,e)
;var o=cr(i=Object.prototype.toString.call(t)).call(i,8,-1)
;return"Object"===o&&t.constructor&&(o=t.constructor.name),
"Map"===o||"Set"===o?yo(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?kr(t,e):void 0
}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i)
;var o=0,n=function(){};return{s:n,n:function(){
return o>=t.length?{done:!0}:{done:!1,value:t[o++]
}},e:function(t){throw t},f:n}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}var r,s=!0,a=!1;return{s:function(){i=no(t)},
n:function(){var t=i.next();return s=t.done,t},
e:function(t){a=!0,r=t},f:function(){try{
s||null==i.return||i.return()}finally{if(a)throw r
}}}}function kr(t,e){
(null==e||e>t.length)&&(e=t.length)
;for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i]
;return o}
/**
		 * vis-util
		 * https://github.com/visjs/vis-util
		 *
		 * utilitie collection for visjs
		 *
		 * @version 4.3.4
		 * @date    2020-08-01T15:11:53.524Z
		 *
		 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
		 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
		 *
		 * @license
		 * vis.js is dual licensed under both
		 *
		 *   1. The Apache 2.0 License
		 *      http://www.apache.org/licenses/LICENSE-2.0
		 *
		 *   and
		 *
		 *   2. The MIT License
		 *      http://opensource.org/licenses/MIT
		 *
		 * vis.js may be distributed under either license.
		 */function _r(){
for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
;return xr(e.length?e:[Jn()])}function xr(t){
var e=function(){
for(var t=Or(),e=t(" "),i=t(" "),o=t(" "),n=0;n<arguments.length;n++)(e-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(e+=1),
(i-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(i+=1),
(o-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(o+=1)
;return[e,i,o]
}(t),i=Zn(e,3),o=i[0],n=i[1],r=i[2],s=1,a=function(){
var t=2091639*o+2.3283064365386963e-10*s
;return o=n,n=r,r=t-(s=0|t)}
;return a.uint32=function(){return 4294967296*a()
},a.fract53=function(){
return a()+11102230246251565e-32*(2097152*a()|0)
},a.algorithm="Alea",a.seed=t,a.version="0.9",a}
function Or(){var t=4022871197;return function(e){
for(var i=e.toString(),o=0;o<i.length;o++){
var n=.02519603282416938*(t+=i.charCodeAt(o))
;n-=t=n>>>0,t=(n*=t)>>>0,t+=4294967296*(n-=t)}
return 2.3283064365386963e-10*(t>>>0)}}
br("DELETE")
;var Er=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,Cr=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,Sr=/^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i,Tr=/^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i
;function Mr(t){
if(t)for(;!0===t.hasChildNodes();){
var e=t.firstChild;e&&(Mr(e),t.removeChild(e))}}
function Dr(t){
return t instanceof String||"string"==typeof t}
function Pr(t){return"object"===lr(t)&&null!==t}
function Ir(t,e,i,o){var n=!1
;!0===o&&(n=null===e[i]&&void 0!==t[i]),n?delete t[i]:t[i]=e[i]
}function Br(t,e){
var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
;for(var o in t)if(void 0!==e[o])if(null===e[o]||"object"!==lr(e[o]))Ir(t,e,o,i);else{
var n=t[o],r=e[o];Pr(n)&&Pr(r)&&Br(n,r,i)}}
function zr(t,e,i){
var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
;if(hr(i))throw new TypeError("Arrays are not supported by deepExtend")
;for(var n=0;n<t.length;n++){var r=t[n]
;if(Object.prototype.hasOwnProperty.call(i,r))if(i[r]&&i[r].constructor===Object)void 0===e[r]&&(e[r]={}),
e[r].constructor===Object?Nr(e[r],i[r],!1,o):Ir(e,i,r,o);else{
if(hr(i[r]))throw new TypeError("Arrays are not supported by deepExtend")
;Ir(e,i,r,o)}}return e}function Fr(t,e,i){
var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
;if(hr(i))throw new TypeError("Arrays are not supported by deepExtend")
;for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)&&-1===On(t).call(t,n))if(i[n]&&i[n].constructor===Object)void 0===e[n]&&(e[n]={}),
e[n].constructor===Object?Nr(e[n],i[n]):Ir(e,i,n,o);else if(hr(i[n])){
e[n]=[]
;for(var r=0;r<i[n].length;r++)e[n].push(i[n][r])
}else Ir(e,i,n,o);return e}function Nr(t,e){
var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)||!0===i)if("object"===lr(e[n])&&null!==e[n]&&gn(e[n])===Object.prototype)void 0===t[n]?t[n]=Nr({},e[n],i):"object"===lr(t[n])&&null!==t[n]&&gn(t[n])===Object.prototype?Nr(t[n],e[n],i):Ir(t,e,n,o);else if(hr(e[n])){
var r;t[n]=cr(r=e[n]).call(r)}else Ir(t,e,n,o)
;return t}function Ar(t,e){var i
;return mr(i=[]).call(i,vr(t),[e])}function jr(t){
return cr(t).call(t)}function Rr(t){
return t.getBoundingClientRect().top}
function Lr(t,e){
if(hr(t))for(var i=t.length,o=0;o<i;o++)e(t[o],o,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)
}function Hr(t){var e;switch(t.length){case 3:
case 4:return(e=Cr.exec(t))?{r:Go(e[1]+e[1],16),
g:Go(e[2]+e[2],16),b:Go(e[3]+e[3],16)}:null
;case 6:case 7:return(e=Er.exec(t))?{
r:Go(e[1],16),g:Go(e[2],16),b:Go(e[3],16)}:null
;default:return null}}function Wr(t,e){
if(-1!==On(t).call(t,"rgba"))return t
;if(-1!==On(t).call(t,"rgb")){
var i=t.substr(On(t).call(t,"(")+1).replace(")","").split(",")
;return"rgba("+i[0]+","+i[1]+","+i[2]+","+e+")"}
var o=Hr(t)
;return null==o?t:"rgba("+o.r+","+o.g+","+o.b+","+e+")"
}function Vr(t,e,i){var o
;return"#"+cr(o=((1<<24)+(t<<16)+(e<<8)+i).toString(16)).call(o,1)
}function qr(t,e){if(Dr(t)){var i=t;if(Kr(i)){
var o,n=ar(o=i.substr(4).substr(0,i.length-5).split(",")).call(o,(function(t){
return Go(t)}));i=Vr(n[0],n[1],n[2])}
if(!0===Gr(i)){var r=function(t){var e=Hr(t)
;if(!e)throw new TypeError("'".concat(t,"' is not a valid color."))
;return Ur(e.r,e.g,e.b)}(i),s={h:r.h,s:.8*r.s,
v:Math.min(1,1.02*r.v)},a={h:r.h,
s:Math.min(1,1.25*r.s),v:.8*r.v
},h=Xr(a.h,a.s,a.v),d=Xr(s.h,s.s,s.v);return{
background:i,border:h,highlight:{background:d,
border:h},hover:{background:d,border:h}}}return{
background:i,border:i,highlight:{background:i,
border:i},hover:{background:i,border:i}}}
return e?{background:t.background||e.background,
border:t.border||e.border,
highlight:Dr(t.highlight)?{border:t.highlight,
background:t.highlight}:{
background:t.highlight&&t.highlight.background||e.highlight.background,
border:t.highlight&&t.highlight.border||e.highlight.border
},hover:Dr(t.hover)?{border:t.hover,
background:t.hover}:{
border:t.hover&&t.hover.border||e.hover.border,
background:t.hover&&t.hover.background||e.hover.background
}}:{background:t.background||void 0,
border:t.border||void 0,
highlight:Dr(t.highlight)?{border:t.highlight,
background:t.highlight}:{
background:t.highlight&&t.highlight.background||void 0,
border:t.highlight&&t.highlight.border||void 0},
hover:Dr(t.hover)?{border:t.hover,
background:t.hover}:{
border:t.hover&&t.hover.border||void 0,
background:t.hover&&t.hover.background||void 0}}}
function Ur(t,e,i){t/=255,e/=255,i/=255
;var o=Math.min(t,Math.min(e,i)),n=Math.max(t,Math.max(e,i))
;return o===n?{h:0,s:0,v:o}:{
h:60*((t===o?3:i===o?1:5)-(t===o?e-i:i===o?t-e:i-t)/(n-o))/360,
s:(n-o)/n,v:n}}function Yr(t,e,i){
var o,n,r,s=Math.floor(6*t),a=6*t-s,h=i*(1-e),d=i*(1-a*e),l=i*(1-(1-a)*e)
;switch(s%6){case 0:o=i,n=l,r=h;break;case 1:
o=d,n=i,r=h;break;case 2:o=h,n=i,r=l;break;case 3:
o=h,n=d,r=i;break;case 4:o=l,n=h,r=i;break;case 5:
o=i,n=h,r=d}return{r:Math.floor(255*o),
g:Math.floor(255*n),b:Math.floor(255*r)}}
function Xr(t,e,i){var o=Yr(t,e,i)
;return Vr(o.r,o.g,o.b)}function Gr(t){
return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
}function Kr(t){return Sr.test(t)}function $r(t){
return Tr.test(t)}function Qr(t){
if(null===t||"object"!==lr(t))return null
;if(t instanceof Element)return t;var e=wo(t)
;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&"object"==lr(t[i])&&(e[i]=Qr(t[i]))
;return e}function Zr(t,e,i){
var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=function(t){
return null!=t},r=function(t){
return null!==t&&"object"===lr(t)},s=function(t){
for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
;return!0}
;if(!r(t))throw new Error("Parameter mergeTarget must be an object")
;if(!r(e))throw new Error("Parameter options must be an object")
;if(!n(i))throw new Error("Parameter option must have a value")
;if(!r(o))throw new Error("Parameter globalOptions must be an object")
;var a=function(t,e,i){r(t[i])||(t[i]={})
;var o=e[i],n=t[i]
;for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])
},h=e[i],l=r(o)&&!s(o)?o[i]:void 0,c=l?l.enabled:void 0
;if(void 0!==h){
if("boolean"==typeof h)return r(t[i])||(t[i]={}),void(t[i].enabled=h)
;if(null===h&&!r(t[i])){if(!n(l))return;t[i]=wo(l)
}if(r(h)){var u=!0
;void 0!==h.enabled?u=h.enabled:void 0!==c&&(u=l.enabled),a(t,e,i),
t[i].enabled=u}}}var Jr={linear:function(t){
return t},easeInQuad:function(t){return t*t},
easeOutQuad:function(t){return t*(2-t)},
easeInOutQuad:function(t){
return t<.5?2*t*t:(4-2*t)*t-1},
easeInCubic:function(t){return t*t*t},
easeOutCubic:function(t){return--t*t*t+1},
easeInOutCubic:function(t){
return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},
easeInQuart:function(t){return t*t*t*t},
easeOutQuart:function(t){return 1- --t*t*t*t},
easeInOutQuart:function(t){
return t<.5?8*t*t*t*t:1-8*--t*t*t*t},
easeInQuint:function(t){return t*t*t*t*t},
easeOutQuint:function(t){return 1+--t*t*t*t*t},
easeInOutQuint:function(t){
return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}
;function ts(t,e){var i;hr(e)||(e=[e])
;var o,n=wr(t);try{for(n.s();!(o=n.n()).done;){
var r=o.value;if(r){i=r[e[0]]
;for(var s=1;s<e.length;s++)i&&(i=i[e[s]])
;if(void 0!==i)break}}}catch(t){n.e(t)}finally{
n.f()}return i}
var es=an("splice"),is=Fo("splice",{ACCESSORS:!0,
0:0,1:2
}),os=Math.max,ns=Math.min,rs=9007199254740991,ss="Maximum allowed length exceeded"
;q({target:"Array",proto:!0,forced:!es||!is},{
splice:function(t,e){
var i,o,n,r,s,a,h=vt(this),d=ot(h.length),l=st(t,d),c=arguments.length
;if(0===c?i=o=0:1===c?(i=0,
o=d-l):(i=c-2,o=ns(os(et(e),0),d-l)),d+i-o>rs)throw TypeError(ss)
;for(n=We(h,o),
r=0;r<o;r++)(s=l+r)in h&&Nt(n,r,h[s])
;if(n.length=o,i<o){
for(r=l;r<d-o;r++)a=r+i,(s=r+o)in h?h[a]=h[s]:delete h[a]
;for(r=d;r>d-o+i;r--)delete h[r-1]
}else if(i>o)for(r=d-o;r>l;r--)a=r+i-1,(s=r+o-1)in h?h[a]=h[s]:delete h[a]
;for(r=0;r<i;r++)h[r+l]=arguments[r+2]
;return h.length=d-o+i,n}})
;var as=K("Array").splice,hs=Array.prototype,ds=function(t){
var e=t.splice
;return t===hs||t instanceof Array&&e===hs.splice?as:e
},ls=ht.includes,cs=Fo("indexOf",{ACCESSORS:!0,1:0
});q({target:"Array",proto:!0,forced:!cs},{
includes:function(t){
return ls(this,t,arguments.length>1?arguments[1]:void 0)
}})
;var us=K("Array").includes,fs=pe("match"),ps=function(t){
if(function(t){var e
;return m(t)&&(void 0!==(e=t[fs])?!!e:"RegExp"==f(t))
}(t))throw TypeError("The method doesn't accept regular expressions")
;return t},vs=pe("match");q({target:"String",
proto:!0,forced:!function(t){var e=/./;try{
"/./"[t](e)}catch(i){try{
return e[vs]=!1,"/./"[t](e)}catch(t){}}return!1
}("includes")},{includes:function(t){
return!!~String(g(this)).indexOf(ps(t),arguments.length>1?arguments[1]:void 0)
}})
;var gs=K("String").includes,ys=Array.prototype,ms=String.prototype,bs=function(t){
var e=t.includes
;return t===ys||t instanceof Array&&e===ys.includes?us:"string"==typeof t||t===ms||t instanceof String&&e===ms.includes?gs:e
};function ws(t){return Ts=t,function(){var t={}
;if(Ms=0,Ds=Ts.charAt(0),Ws(),"strict"===Ps&&(t.strict=!0,
Ws()),"graph"!==Ps&&"digraph"!==Ps||(t.type=Ps,
Ws()),Is===Es&&(t.id=Ps,Ws()),"{"!=Ps)throw Gs("Angle bracket { expected")
;if(Ws(),
Vs(t),"}"!=Ps)throw Gs("Angle bracket } expected")
;if(Ws(),""!==Ps)throw Gs("End of file expected")
;return Ws(),delete t.node,delete t.edge,
delete t.graph,t}()}var ks={fontsize:"font.size",
fontcolor:"font.color",
labelfontcolor:"font.color",fontname:"font.face",
color:["color.border","color.background"],
fillcolor:"color.background",tooltip:"title",
labeltooltip:"title"},_s=wo(ks)
;_s.color="color.color",_s.style="dashes"
;var xs=0,Os=1,Es=2,Cs=3,Ss={"{":!0,"}":!0,"[":!0,
"]":!0,";":!0,"=":!0,",":!0,"->":!0,"--":!0
},Ts="",Ms=0,Ds="",Ps="",Is=xs;function Bs(){
Ms++,Ds=Ts.charAt(Ms)}function zs(){
return Ts.charAt(Ms+1)}var Fs=/[a-zA-Z_0-9.:#]/
;function Ns(t){return Fs.test(t)}
function As(t,e){
if(t||(t={}),e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])
;return t}function js(t,e,i){
for(var o=e.split("."),n=t;o.length;){
var r=o.shift()
;o.length?(n[r]||(n[r]={}),n=n[r]):n[r]=i}}
function Rs(t,e){
for(var i,o,n=null,r=[t],s=t;s.parent;)r.push(s.parent),s=s.parent
;if(s.nodes)for(i=0,
o=s.nodes.length;i<o;i++)if(e.id===s.nodes[i].id){
n=s.nodes[i];break}for(n||(n={id:e.id
},t.node&&(n.attr=As(n.attr,t.node))),i=r.length-1;i>=0;i--){
var a,h=r[i]
;h.nodes||(h.nodes=[]),-1===On(a=h.nodes).call(a,n)&&h.nodes.push(n)
}e.attr&&(n.attr=As(n.attr,e.attr))}
function Ls(t,e){
if(t.edges||(t.edges=[]),t.edges.push(e),t.edge){
var i=As({},t.edge);e.attr=As(i,e.attr)}}
function Hs(t,e,i,o,n){var r={from:e,to:i,type:o}
;return t.edge&&(r.attr=As({},t.edge)),
r.attr=As(r.attr||{},n),null!=n&&n.hasOwnProperty("arrows")&&null!=n.arrows&&(r.arrows={
to:{enabled:!0,type:n.arrows.type}
},n.arrows=null),r}function Ws(){
for(Is=xs,Ps="";" "===Ds||"\t"===Ds||"\n"===Ds||"\r"===Ds;)Bs()
;do{var t=!1;if("#"===Ds){
for(var e=Ms-1;" "===Ts.charAt(e)||"\t"===Ts.charAt(e);)e--
;if("\n"===Ts.charAt(e)||""===Ts.charAt(e)){
for(;""!=Ds&&"\n"!=Ds;)Bs();t=!0}}
if("/"===Ds&&"/"===zs()){
for(;""!=Ds&&"\n"!=Ds;)Bs();t=!0}
if("/"===Ds&&"*"===zs()){for(;""!=Ds;){
if("*"===Ds&&"/"===zs()){Bs(),Bs();break}Bs()}t=!0
}
for(;" "===Ds||"\t"===Ds||"\n"===Ds||"\r"===Ds;)Bs()
}while(t);if(""!==Ds){var i=Ds+zs()
;if(Ss[i])return Is=Os,Ps=i,Bs(),void Bs()
;if(Ss[Ds])return Is=Os,Ps=Ds,void Bs()
;if(Ns(Ds)||"-"===Ds){
for(Ps+=Ds,Bs();Ns(Ds);)Ps+=Ds,Bs()
;return"false"===Ps?Ps=!1:"true"===Ps?Ps=!0:isNaN(Number(Ps))||(Ps=Number(Ps)),
void(Is=Es)}if('"'===Ds){
for(Bs();""!=Ds&&('"'!=Ds||'"'===Ds&&'"'===zs());)'"'===Ds?(Ps+=Ds,
Bs()):"\\"===Ds&&"n"===zs()?(Ps+="\n",
Bs()):Ps+=Ds,Bs()
;if('"'!=Ds)throw Gs('End of string " expected')
;return Bs(),void(Is=Es)}
for(Is=Cs;""!=Ds;)Ps+=Ds,Bs()
;throw new SyntaxError('Syntax error in part "'+Ks(Ps,30)+'"')
}Is=Os}function Vs(t){
for(;""!==Ps&&"}"!=Ps;)qs(t),";"===Ps&&Ws()}
function qs(t){var e=Us(t)
;if(e)Ys(t,e);else if(!function(t){
return"node"===Ps?(Ws(),t.node=Xs(),"node"):"edge"===Ps?(Ws(),
t.edge=Xs(),"edge"):"graph"===Ps?(Ws(),
t.graph=Xs(),"graph"):null}(t)){
if(Is!=Es)throw Gs("Identifier expected");var i=Ps
;if(Ws(),"="===Ps){
if(Ws(),Is!=Es)throw Gs("Identifier expected")
;t[i]=Ps,Ws()}else!function(t,e){var i={id:e
},o=Xs();o&&(i.attr=o),Rs(t,i),Ys(t,e)}(t,i)}}
function Us(t){var e=null
;if("subgraph"===Ps&&((e={}).type="subgraph",Ws(),Is===Es&&(e.id=Ps,
Ws())),"{"===Ps){
if(Ws(),e||(e={}),e.parent=t,e.node=t.node,e.edge=t.edge,e.graph=t.graph,
Vs(e),"}"!=Ps)throw Gs("Angle bracket } expected")
;Ws(),delete e.node,delete e.edge,
delete e.graph,delete e.parent,t.subgraphs||(t.subgraphs=[]),
t.subgraphs.push(e)}return e}function Ys(t,e){
for(;"->"===Ps||"--"===Ps;){var i,o=Ps;Ws()
;var n=Us(t);if(n)i=n;else{
if(Is!=Es)throw Gs("Identifier or subgraph expected")
;Rs(t,{id:i=Ps}),Ws()}Ls(t,Hs(t,e,i,o,Xs())),e=i}}
function Xs(){for(var t,e,i=null,o={dashed:!0,
solid:!1,dotted:[1,5]},n={dot:"circle",box:"box",
crow:"crow",curve:"curve",icurve:"inv_curve",
normal:"triangle",inv:"inv_triangle",
diamond:"diamond",tee:"bar",vee:"vee"
},r=new Array,s=new Array;"["===Ps;){
for(Ws(),i={};""!==Ps&&"]"!=Ps;){
if(Is!=Es)throw Gs("Attribute name expected")
;var a=Ps
;if(Ws(),"="!=Ps)throw Gs("Equal sign = expected")
;if(Ws(),Is!=Es)throw Gs("Attribute value expected")
;var h=Ps
;"style"===a&&(h=o[h]),"arrowhead"===a&&(a="arrows",h={
to:{enabled:!0,type:n[h]}
}),"arrowtail"===a&&(a="arrows",h={from:{
enabled:!0,type:n[h]}}),r.push({attr:i,name:a,
value:h}),s.push(a),Ws(),","==Ps&&Ws()}
if("]"!=Ps)throw Gs("Bracket ] expected");Ws()}
if(bs(s).call(s,"dir")){var d={arrows:{}}
;for(t=0;t<r.length;t++)if("arrows"===r[t].name)if(null!=r[t].value.to)d.arrows.to=t;else{
if(null==r[t].value.from)throw Gs("Invalid value of arrows")
;d.arrows.from=t}else"dir"===r[t].name&&(d.dir=t)
;var l,c,u=r[d.dir].value
;if(!bs(s).call(s,"arrows"))if("both"===u)r.push({
attr:r[d.dir].attr,name:"arrows",value:{to:{
enabled:!0}}}),d.arrows.to=r.length-1,r.push({
attr:r[d.dir].attr,name:"arrows",value:{from:{
enabled:!0}}
}),d.arrows.from=r.length-1;else if("forward"===u)r.push({
attr:r[d.dir].attr,name:"arrows",value:{to:{
enabled:!0}}
}),d.arrows.to=r.length-1;else if("back"===u)r.push({
attr:r[d.dir].attr,name:"arrows",value:{from:{
enabled:!0}}}),d.arrows.from=r.length-1;else{
if("none"!==u)throw Gs('Invalid dir type "'+u+'"')
;r.push({attr:r[d.dir].attr,name:"arrows",value:""
}),d.arrows.to=r.length-1}
if("both"===u)d.arrows.to&&d.arrows.from?(c=r[d.arrows.to].value.to.type,
l=r[d.arrows.from].value.from.type,
r[d.arrows.to]={attr:r[d.arrows.to].attr,
name:r[d.arrows.to].name,value:{to:{enabled:!0,
type:c},from:{enabled:!0,type:l}}
},ds(r).call(r,d.arrows.from,1)):d.arrows.to?(c=r[d.arrows.to].value.to.type,
l="arrow",r[d.arrows.to]={
attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,
value:{to:{enabled:!0,type:c},from:{enabled:!0,
type:l}}
}):d.arrows.from&&(c="arrow",l=r[d.arrows.from].value.from.type,r[d.arrows.from]={
attr:r[d.arrows.from].attr,
name:r[d.arrows.from].name,value:{to:{enabled:!0,
type:c},from:{enabled:!0,type:l}}
});else if("back"===u)d.arrows.to&&d.arrows.from?(c="",
l=r[d.arrows.from].value.from.type,
r[d.arrows.from]={attr:r[d.arrows.from].attr,
name:r[d.arrows.from].name,value:{to:{enabled:!0,
type:c},from:{enabled:!0,type:l}}
}):d.arrows.to?(c="",l="arrow",d.arrows.from=d.arrows.to,
r[d.arrows.from]={attr:r[d.arrows.from].attr,
name:r[d.arrows.from].name,value:{to:{enabled:!0,
type:c},from:{enabled:!0,type:l}}
}):d.arrows.from&&(c="",l=r[d.arrows.from].value.from.type,
r[d.arrows.to]={attr:r[d.arrows.from].attr,
name:r[d.arrows.from].name,value:{to:{enabled:!0,
type:c},from:{enabled:!0,type:l}}
}),r[d.arrows.from]={attr:r[d.arrows.from].attr,
name:r[d.arrows.from].name,value:{from:{
enabled:!0,type:r[d.arrows.from].value.from.type}}
};else if("none"===u){var f
;r[f=d.arrows.to?d.arrows.to:d.arrows.from]={
attr:r[f].attr,name:r[f].name,value:""}}else{
if("forward"!==u)throw Gs('Invalid dir type "'+u+'"')
;d.arrows.to&&d.arrows.from||d.arrows.to?(c=r[d.arrows.to].value.to.type,
l="",r[d.arrows.to]={attr:r[d.arrows.to].attr,
name:r[d.arrows.to].name,value:{to:{enabled:!0,
type:c},from:{enabled:!0,type:l}}
}):d.arrows.from&&(c="arrow",l="",d.arrows.to=d.arrows.from,
r[d.arrows.to]={attr:r[d.arrows.to].attr,
name:r[d.arrows.to].name,value:{to:{enabled:!0,
type:c},from:{enabled:!0,type:l}}
}),r[d.arrows.to]={attr:r[d.arrows.to].attr,
name:r[d.arrows.to].name,value:{to:{enabled:!0,
type:r[d.arrows.to].value.to.type}}}}
ds(r).call(r,d.dir,1)}
if(bs(s).call(s,"penwidth")){var p=[]
;for(e=r.length,t=0;t<e;t++)"width"!==r[t].name&&("penwidth"===r[t].name&&(r[t].name="width"),
p.push(r[t]));r=p}
for(e=r.length,t=0;t<e;t++)js(r[t].attr,r[t].name,r[t].value)
;return i}function Gs(t){
return new SyntaxError(t+', got "'+Ks(Ps,30)+'" (char '+Ms+")")
}function Ks(t,e){
return t.length<=e?t:t.substr(0,27)+"..."}
function $s(t,e,i){
for(var o=e.split("."),n=o.pop(),r=t,s=0;s<o.length;s++){
var a=o[s];a in r||(r[a]={}),r=r[a]}
return r[n]=i,t}function Qs(t,e){var i={}
;for(var o in t)if(t.hasOwnProperty(o)){var n=e[o]
;hr(n)?Vo(n).call(n,(function(e){$s(i,e,t[o])
})):$s(i,"string"==typeof n?n:o,t[o])}return i}
function Zs(t){var e,i=ws(t),o={nodes:[],edges:[],
options:{}}
;if(i.nodes&&Vo(e=i.nodes).call(e,(function(t){
var e={id:t.id,label:String(t.label||t.id)}
;As(e,Qs(t.attr,ks)),e.image&&(e.shape="image"),
o.nodes.push(e)})),i.edges){var n,r=function(t){
var e={from:t.from,to:t.to}
;return As(e,Qs(t.attr,_s)),null==e.arrows&&"->"===t.type&&(e.arrows="to"),
e};Vo(n=i.edges).call(n,(function(t){
var e,i,n,s,a,h,d
;e=t.from instanceof Object?t.from.nodes:{
id:t.from},i=t.to instanceof Object?t.to.nodes:{
id:t.to
},t.from instanceof Object&&t.from.edges&&Vo(n=t.from.edges).call(n,(function(t){
var e=r(t);o.edges.push(e)})),a=i,h=function(e,i){
var n=Hs(o,e.id,i.id,t.type,t.attr),s=r(n)
;o.edges.push(s)
},hr(s=e)?Vo(s).call(s,(function(t){
hr(a)?Vo(a).call(a,(function(e){h(t,e)})):h(t,a)
})):hr(a)?Vo(a).call(a,(function(t){h(s,t)
})):h(s,a),t.to instanceof Object&&t.to.edges&&Vo(d=t.to.edges).call(d,(function(t){
var e=r(t);o.edges.push(e)}))}))}
return i.attr&&(o.options=i.attr),o}
var Js=Object.freeze({__proto__:null,parseDOT:ws,
DOTToGraph:Zs});function ta(t,e){var i,o={edges:{
inheritColor:!1},nodes:{fixed:!1,parseColor:!1}}
;null!=e&&(null!=e.fixed&&(o.nodes.fixed=e.fixed),
null!=e.parseColor&&(o.nodes.parseColor=e.parseColor),
null!=e.inheritColor&&(o.edges.inheritColor=e.inheritColor))
;var n=t.edges,r=ar(n).call(n,(function(t){var e={
from:t.source,id:t.id,to:t.target}
;return null!=t.attributes&&(e.attributes=t.attributes),
null!=t.label&&(e.label=t.label),
null!=t.attributes&&null!=t.attributes.title&&(e.title=t.attributes.title),
"Directed"===t.type&&(e.arrows="to"),
t.color&&!1===o.edges.inheritColor&&(e.color=t.color),
e}));return{
nodes:ar(i=t.nodes).call(i,(function(t){var e={
id:t.id,fixed:o.nodes.fixed&&null!=t.x&&null!=t.y}
;return null!=t.attributes&&(e.attributes=t.attributes),
null!=t.label&&(e.label=t.label),
null!=t.size&&(e.size=t.size),null!=t.attributes&&null!=t.attributes.title&&(e.title=t.attributes.title),
null!=t.title&&(e.title=t.title),
null!=t.x&&(e.x=t.x),null!=t.y&&(e.y=t.y),null!=t.color&&(!0===o.nodes.parseColor?e.color=t.color:e.color={
background:t.color,border:t.color,highlight:{
background:t.color,border:t.color},hover:{
background:t.color,border:t.color}}),e})),edges:r}
}var ea=Object.freeze({__proto__:null,
parseGephi:ta}),ia=o((function(t,e){
t.exports=function(){function t(t){
var e,i=t&&t.preventDefault||!1,o=t&&t.container||window,n={},r={
keydown:{},keyup:{}},s={}
;for(e=97;e<=122;e++)s[String.fromCharCode(e)]={
code:e-97+65,shift:!1}
;for(e=65;e<=90;e++)s[String.fromCharCode(e)]={
code:e,shift:!0};for(e=0;e<=9;e++)s[""+e]={
code:48+e,shift:!1};for(e=1;e<=12;e++)s["F"+e]={
code:111+e,shift:!1};for(e=0;e<=9;e++)s["num"+e]={
code:96+e,shift:!1};s["num*"]={code:106,shift:!1
},s["num+"]={code:107,shift:!1},s["num-"]={
code:109,shift:!1},s["num/"]={code:111,shift:!1
},s["num."]={code:110,shift:!1},s.left={code:37,
shift:!1},s.up={code:38,shift:!1},s.right={
code:39,shift:!1},s.down={code:40,shift:!1
},s.space={code:32,shift:!1},s.enter={code:13,
shift:!1},s.shift={code:16,shift:void 0},s.esc={
code:27,shift:!1},s.backspace={code:8,shift:!1
},s.tab={code:9,shift:!1},s.ctrl={code:17,shift:!1
},s.alt={code:18,shift:!1},s.delete={code:46,
shift:!1},s.pageup={code:33,shift:!1},s.pagedown={
code:34,shift:!1},s["="]={code:187,shift:!1
},s["-"]={code:189,shift:!1},s["]"]={code:221,
shift:!1},s["["]={code:219,shift:!1}
;var a=function(t){d(t,"keydown")},h=function(t){
d(t,"keyup")},d=function(t,e){
if(void 0!==r[e][t.keyCode]){
for(var o=r[e][t.keyCode],n=0;n<o.length;n++)(void 0===o[n].shift||1==o[n].shift&&1==t.shiftKey||0==o[n].shift&&0==t.shiftKey)&&o[n].fn(t)
;1==i&&t.preventDefault()}}
;return n.bind=function(t,e,i){
if(void 0===i&&(i="keydown"),void 0===s[t])throw new Error("unsupported key: "+t)
;void 0===r[i][s[t].code]&&(r[i][s[t].code]=[]),
r[i][s[t].code].push({fn:e,shift:s[t].shift})
},n.bindAll=function(t,e){
for(var i in void 0===e&&(e="keydown"),s)s.hasOwnProperty(i)&&n.bind(i,t,e)
},n.getKey=function(t){
for(var e in s)if(s.hasOwnProperty(e)){
if(1==t.shiftKey&&1==s[e].shift&&t.keyCode==s[e].code)return e
;if(0==t.shiftKey&&0==s[e].shift&&t.keyCode==s[e].code)return e
;if(t.keyCode==s[e].code&&"shift"==e)return e}
return"unknown key, currently not supported"
},n.unbind=function(t,e,i){
if(void 0===i&&(i="keydown"),void 0===s[t])throw new Error("unsupported key: "+t)
;if(void 0!==e){var o=[],n=r[i][s[t].code]
;if(void 0!==n)for(var a=0;a<n.length;a++)n[a].fn==e&&n[a].shift==s[t].shift||o.push(r[i][s[t].code][a])
;r[i][s[t].code]=o}else r[i][s[t].code]=[]
},n.reset=function(){r={keydown:{},keyup:{}}
},n.destroy=function(){r={keydown:{},keyup:{}
},o.removeEventListener("keydown",a,!0),
o.removeEventListener("keyup",h,!0)
},o.addEventListener("keydown",a,!0),o.addEventListener("keyup",h,!0),
n}return t}()}));
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
		 * http://naver.github.io/egjs
		 *
		 * Forked By Naver egjs
		 * Copyright (c) hammerjs
		 * Licensed under the MIT license */
function oa(){
return(oa=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var i=arguments[e]
;for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])
}return t}).apply(this,arguments)}
function na(t,e){
t.prototype=Object.create(e.prototype),t.prototype.constructor=t,
t.__proto__=e}function ra(t){
if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
;return t}
var sa,aa="function"!=typeof Object.assign?function(t){
if(null==t)throw new TypeError("Cannot convert undefined or null to object")
;for(var e=Object(t),i=1;i<arguments.length;i++){
var o=arguments[i]
;if(null!=o)for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])
}return e
}:Object.assign,ha=["","webkit","Moz","MS","ms","o"],da="undefined"==typeof document?{
style:{}
}:document.createElement("div"),la=Math.round,ca=Math.abs,ua=Date.now
;function fa(t,e){
for(var i,o,n=e[0].toUpperCase()+e.slice(1),r=0;r<ha.length;){
if((o=(i=ha[r])?i+n:e)in t)return o;r++}}
sa="undefined"==typeof window?{}:window
;var pa=fa(da.style,"touchAction"),va=void 0!==pa,ga="compute",ya="auto",ma="manipulation",ba="none",wa="pan-x",ka="pan-y",_a=function(){
if(!va)return!1;var t={},e=sa.CSS&&sa.CSS.supports
;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){
return t[i]=!e||sa.CSS.supports("touch-action",i)
})),t
}(),xa="ontouchstart"in sa,Oa=void 0!==fa(sa,"PointerEvent"),Ea=xa&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Ca="touch",Sa="mouse",Ta=16,Ma=24,Da=["x","y"],Pa=["clientX","clientY"]
;function Ia(t,e,i){var o
;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(o=0;o<t.length;)e.call(i,t[o],o,t),
o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)
}function Ba(t,e){
return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t
}function za(t,e){return t.indexOf(e)>-1}
var Fa=function(){function t(t,e){
this.manager=t,this.set(e)}var e=t.prototype
;return e.set=function(t){
t===ga&&(t=this.compute()),va&&this.manager.element.style&&_a[t]&&(this.manager.element.style[pa]=t),
this.actions=t.toLowerCase().trim()
},e.update=function(){
this.set(this.manager.options.touchAction)
},e.compute=function(){var t=[]
;return Ia(this.manager.recognizers,(function(e){
Ba(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))
})),function(t){if(za(t,ba))return ba
;var e=za(t,wa),i=za(t,ka)
;return e&&i?ba:e||i?e?wa:ka:za(t,ma)?ma:ya
}(t.join(" "))},e.preventDefaults=function(t){
var e=t.srcEvent,i=t.offsetDirection
;if(this.manager.session.prevented)e.preventDefault();else{
var o=this.actions,n=za(o,ba)&&!_a.none,r=za(o,ka)&&!_a["pan-y"],s=za(o,wa)&&!_a["pan-x"]
;if(n){
var a=1===t.pointers.length,h=t.distance<2,d=t.deltaTime<250
;if(a&&h&&d)return}
if(!s||!r)return n||r&&6&i||s&&i&Ma?this.preventSrc(e):void 0
}},e.preventSrc=function(t){
this.manager.session.prevented=!0,t.preventDefault()
},t}();function Na(t,e){for(;t;){if(t===e)return!0
;t=t.parentNode}return!1}function Aa(t){
var e=t.length;if(1===e)return{x:la(t[0].clientX),
y:la(t[0].clientY)}
;for(var i=0,o=0,n=0;n<e;)i+=t[n].clientX,o+=t[n].clientY,n++
;return{x:la(i/e),y:la(o/e)}}function ja(t){
for(var e=[],i=0;i<t.pointers.length;)e[i]={
clientX:la(t.pointers[i].clientX),
clientY:la(t.pointers[i].clientY)},i++;return{
timeStamp:ua(),pointers:e,center:Aa(e),
deltaX:t.deltaX,deltaY:t.deltaY}}
function Ra(t,e,i){i||(i=Da)
;var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]]
;return Math.sqrt(o*o+n*n)}function La(t,e,i){
i||(i=Da);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]]
;return 180*Math.atan2(n,o)/Math.PI}
function Ha(t,e){
return t===e?1:ca(t)>=ca(e)?t<0?2:4:e<0?8:Ta}
function Wa(t,e,i){return{x:e/t||0,y:i/t||0}}
function Va(t,e){
var i=t.session,o=e.pointers,n=o.length
;i.firstInput||(i.firstInput=ja(e)),n>1&&!i.firstMultiple?i.firstMultiple=ja(e):1===n&&(i.firstMultiple=!1)
;var r=i.firstInput,s=i.firstMultiple,a=s?s.center:r.center,h=e.center=Aa(o)
;e.timeStamp=ua(),
e.deltaTime=e.timeStamp-r.timeStamp,e.angle=La(a,h),e.distance=Ra(a,h),
function(t,e){
var i=e.center,o=t.offsetDelta||{},n=t.prevDelta||{},r=t.prevInput||{}
;1!==e.eventType&&4!==r.eventType||(n=t.prevDelta={
x:r.deltaX||0,y:r.deltaY||0},o=t.offsetDelta={
x:i.x,y:i.y
}),e.deltaX=n.x+(i.x-o.x),e.deltaY=n.y+(i.y-o.y)
}(i,e),e.offsetDirection=Ha(e.deltaX,e.deltaY)
;var d,l,c=Wa(e.deltaTime,e.deltaX,e.deltaY)
;e.overallVelocityX=c.x,e.overallVelocityY=c.y,
e.overallVelocity=ca(c.x)>ca(c.y)?c.x:c.y,
e.scale=s?(d=s.pointers,Ra((l=o)[0],l[1],Pa)/Ra(d[0],d[1],Pa)):1,
e.rotation=s?function(t,e){
return La(e[1],e[0],Pa)+La(t[1],t[0],Pa)
}(s.pointers,o):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,
function(t,e){
var i,o,n,r,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp
;if(8!==e.eventType&&(a>25||void 0===s.velocity)){
var h=e.deltaX-s.deltaX,d=e.deltaY-s.deltaY,l=Wa(a,h,d)
;o=l.x,n=l.y,i=ca(l.x)>ca(l.y)?l.x:l.y,
r=Ha(h,d),t.lastInterval=e
}else i=s.velocity,o=s.velocityX,n=s.velocityY,r=s.direction
;e.velocity=i,e.velocityX=o,
e.velocityY=n,e.direction=r}(i,e)
;var u,f=t.element,p=e.srcEvent
;Na(u=p.composedPath?p.composedPath()[0]:p.path?p.path[0]:p.target,f)&&(f=u),
e.target=f}function qa(t,e,i){
var o=i.pointers.length,n=i.changedPointers.length,r=1&e&&o-n==0,s=12&e&&o-n==0
;i.isFirst=!!r,
i.isFinal=!!s,r&&(t.session={}),i.eventType=e,Va(t,i),t.emit("hammer.input",i),
t.recognize(i),t.session.prevInput=i}
function Ua(t){return t.trim().split(/\s+/g)}
function Ya(t,e,i){Ia(Ua(e),(function(e){
t.addEventListener(e,i,!1)}))}function Xa(t,e,i){
Ia(Ua(e),(function(e){
t.removeEventListener(e,i,!1)}))}function Ga(t){
var e=t.ownerDocument||t
;return e.defaultView||e.parentWindow||window}
var Ka=function(){function t(t,e){var i=this
;this.manager=t,this.callback=e,this.element=t.element,
this.target=t.options.inputTarget,
this.domHandler=function(e){
Ba(t.options.enable,[t])&&i.handler(e)
},this.init()}var e=t.prototype
;return e.handler=function(){},e.init=function(){
this.evEl&&Ya(this.element,this.evEl,this.domHandler),
this.evTarget&&Ya(this.target,this.evTarget,this.domHandler),
this.evWin&&Ya(Ga(this.element),this.evWin,this.domHandler)
},e.destroy=function(){
this.evEl&&Xa(this.element,this.evEl,this.domHandler),this.evTarget&&Xa(this.target,this.evTarget,this.domHandler),
this.evWin&&Xa(Ga(this.element),this.evWin,this.domHandler)
},t}();function $a(t,e,i){
if(t.indexOf&&!i)return t.indexOf(e)
;for(var o=0;o<t.length;){
if(i&&t[o][i]==e||!i&&t[o]===e)return o;o++}
return-1}var Qa={pointerdown:1,pointermove:2,
pointerup:4,pointercancel:8,pointerout:8},Za={
2:Ca,3:"pen",4:Sa,5:"kinect"
},Ja="pointerdown",th="pointermove pointerup pointercancel"
;sa.MSPointerEvent&&!sa.PointerEvent&&(Ja="MSPointerDown",
th="MSPointerMove MSPointerUp MSPointerCancel")
;var eh=function(t){function e(){
var i,o=e.prototype
;return o.evEl=Ja,o.evWin=th,(i=t.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],
i}return na(e,t),e.prototype.handler=function(t){
var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),n=Qa[o],r=Za[t.pointerType]||t.pointerType,s=r===Ca,a=$a(e,t.pointerId,"pointerId")
;1&n&&(0===t.button||s)?a<0&&(e.push(t),
a=e.length-1):12&n&&(i=!0),a<0||(e[a]=t,
this.callback(this.manager,n,{pointers:e,
changedPointers:[t],pointerType:r,srcEvent:t
}),i&&e.splice(a,1))},e}(Ka);function ih(t){
return Array.prototype.slice.call(t,0)}
function oh(t,e,i){
for(var o=[],n=[],r=0;r<t.length;){
var s=e?t[r][e]:t[r]
;$a(n,s)<0&&o.push(t[r]),n[r]=s,r++}
return i&&(o=e?o.sort((function(t,i){
return t[e]>i[e]})):o.sort()),o}var nh={
touchstart:1,touchmove:2,touchend:4,touchcancel:8
},rh="touchstart touchmove touchend touchcancel",sh=function(t){
function e(){var i
;return e.prototype.evTarget=rh,(i=t.apply(this,arguments)||this).targetIds={},
i}return na(e,t),e.prototype.handler=function(t){
var e=nh[t.type],i=ah.call(this,t,e)
;i&&this.callback(this.manager,e,{pointers:i[0],
changedPointers:i[1],pointerType:Ca,srcEvent:t})
},e}(Ka);function ah(t,e){
var i,o,n=ih(t.touches),r=this.targetIds
;if(3&e&&1===n.length)return r[n[0].identifier]=!0,
[n,n]
;var s=ih(t.changedTouches),a=[],h=this.target
;if(o=n.filter((function(t){return Na(t.target,h)
})),1===e)for(i=0;i<o.length;)r[o[i].identifier]=!0,
i++
;for(i=0;i<s.length;)r[s[i].identifier]&&a.push(s[i]),12&e&&delete r[s[i].identifier],
i++
;return a.length?[oh(o.concat(a),"identifier",!0),a]:void 0
}var hh={mousedown:1,mousemove:2,mouseup:4
},dh="mousedown",lh="mousemove mouseup",ch=function(t){
function e(){var i,o=e.prototype
;return o.evEl=dh,o.evWin=lh,(i=t.apply(this,arguments)||this).pressed=!1,
i}return na(e,t),e.prototype.handler=function(t){
var e=hh[t.type]
;1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),
this.callback(this.manager,e,{pointers:[t],
changedPointers:[t],pointerType:Sa,srcEvent:t}))
},e}(Ka);function uh(t){var e=t.changedPointers[0]
;if(e.identifier===this.primaryTouch){var i={
x:e.clientX,y:e.clientY},o=this.lastTouches
;this.lastTouches.push(i),setTimeout((function(){
var t=o.indexOf(i);t>-1&&o.splice(t,1)}),2500)}}
function fh(t,e){
1&t?(this.primaryTouch=e.changedPointers[0].identifier,uh.call(this,e)):12&t&&uh.call(this,e)
}function ph(t){
for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){
var n=this.lastTouches[o],r=Math.abs(e-n.x),s=Math.abs(i-n.y)
;if(r<=25&&s<=25)return!0}return!1}
var vh=function(t){function e(e,i){var o
;return(o=t.call(this,e,i)||this).handler=function(t,e,i){
var n=i.pointerType===Ca,r=i.pointerType===Sa
;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){
if(n)fh.call(ra(ra(o)),e,i);else if(r&&ph.call(ra(ra(o)),i))return
;o.callback(t,e,i)}
},o.touch=new sh(o.manager,o.handler),o.mouse=new ch(o.manager,o.handler),
o.primaryTouch=null,o.lastTouches=[],o}
return na(e,t),e.prototype.destroy=function(){
this.touch.destroy(),this.mouse.destroy()},e}(Ka)
;function gh(t,e,i){
return!!Array.isArray(t)&&(Ia(t,i[e],i),!0)}
var yh=32,mh=1;function bh(t,e){var i=e.manager
;return i?i.get(t):t}function wh(t){
return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""
}var kh=function(){function t(t){
void 0===t&&(t={}),this.options=oa({enable:!0
},t),this.id=mh++,this.manager=null,
this.state=1,this.simultaneous={},this.requireFail=[]
}var e=t.prototype;return e.set=function(t){
return aa(this.options,t),this.manager&&this.manager.touchAction.update(),
this},e.recognizeWith=function(t){
if(gh(t,"recognizeWith",this))return this
;var e=this.simultaneous
;return e[(t=bh(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),
this},e.dropRecognizeWith=function(t){
return gh(t,"dropRecognizeWith",this)||(t=bh(t,this),
delete this.simultaneous[t.id]),this
},e.requireFailure=function(t){
if(gh(t,"requireFailure",this))return this
;var e=this.requireFail
;return-1===$a(e,t=bh(t,this))&&(e.push(t),t.requireFailure(this)),
this},e.dropRequireFailure=function(t){
if(gh(t,"dropRequireFailure",this))return this
;t=bh(t,this);var e=$a(this.requireFail,t)
;return e>-1&&this.requireFail.splice(e,1),this
},e.hasRequireFailures=function(){
return this.requireFail.length>0
},e.canRecognizeWith=function(t){
return!!this.simultaneous[t.id]
},e.emit=function(t){var e=this,i=this.state
;function o(i){e.manager.emit(i,t)}
i<8&&o(e.options.event+wh(i)),o(e.options.event),
t.additionalEvent&&o(t.additionalEvent),
i>=8&&o(e.options.event+wh(i))
},e.tryEmit=function(t){
if(this.canEmit())return this.emit(t)
;this.state=yh},e.canEmit=function(){
for(var t=0;t<this.requireFail.length;){
if(!(33&this.requireFail[t].state))return!1;t++}
return!0},e.recognize=function(t){var e=aa({},t)
;if(!Ba(this.options.enable,[this,e]))return this.reset(),
void(this.state=yh)
;56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)
},
e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t
}(),_h=function(t){function e(e){var i
;return void 0===e&&(e={}),(i=t.call(this,oa({
event:"tap",pointers:1,taps:1,interval:300,
time:250,threshold:9,posThreshold:10
},e))||this).pTime=!1,i.pCenter=!1,i._timer=null,
i._input=null,i.count=0,i}na(e,t)
;var i=e.prototype
;return i.getTouchAction=function(){return[ma]
},i.process=function(t){
var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,r=t.deltaTime<i.time
;if(this.reset(),
1&t.eventType&&0===this.count)return this.failTimeout()
;if(n&&r&&o){
if(4!==t.eventType)return this.failTimeout()
;var s=!this.pTime||t.timeStamp-this.pTime<i.interval,a=!this.pCenter||Ra(this.pCenter,t.center)<i.posThreshold
;if(this.pTime=t.timeStamp,
this.pCenter=t.center,a&&s?this.count+=1:this.count=1,
this._input=t,0==this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){
e.state=8,e.tryEmit()}),i.interval),2):8}return yh
},i.failTimeout=function(){var t=this
;return this._timer=setTimeout((function(){
t.state=yh}),this.options.interval),yh
},i.reset=function(){clearTimeout(this._timer)
},i.emit=function(){
8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))
},e}(kh),xh=function(t){function e(e){
return void 0===e&&(e={}),t.call(this,oa({
pointers:1},e))||this}na(e,t);var i=e.prototype
;return i.attrTest=function(t){
var e=this.options.pointers
;return 0===e||t.pointers.length===e
},i.process=function(t){
var e=this.state,i=t.eventType,o=6&e,n=this.attrTest(t)
;return o&&(8&i||!n)?16|e:o||n?4&i?8|e:2&e?4|e:2:yh
},e}(kh);function Oh(t){
return t===Ta?"down":8===t?"up":2===t?"left":4===t?"right":""
}var Eh=function(t){function e(e){var i
;return void 0===e&&(e={}),(i=t.call(this,oa({
event:"pan",threshold:10,pointers:1,direction:30
},e))||this).pX=null,i.pY=null,i}na(e,t)
;var i=e.prototype
;return i.getTouchAction=function(){
var t=this.options.direction,e=[]
;return 6&t&&e.push(ka),t&Ma&&e.push(wa),e
},i.directionTest=function(t){
var e=this.options,i=!0,o=t.distance,n=t.direction,r=t.deltaX,s=t.deltaY
;return n&e.direction||(6&e.direction?(n=0===r?1:r<0?2:4,
i=r!==this.pX,o=Math.abs(t.deltaX)):(n=0===s?1:s<0?8:Ta,
i=s!==this.pY,o=Math.abs(t.deltaY))),
t.direction=n,i&&o>e.threshold&&n&e.direction
},i.attrTest=function(t){
return xh.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))
},i.emit=function(e){
this.pX=e.deltaX,this.pY=e.deltaY
;var i=Oh(e.direction)
;i&&(e.additionalEvent=this.options.event+i),t.prototype.emit.call(this,e)
},e}(xh),Ch=function(t){function e(e){
return void 0===e&&(e={}),t.call(this,oa({
event:"swipe",threshold:10,velocity:.3,
direction:30,pointers:1},e))||this}na(e,t)
;var i=e.prototype
;return i.getTouchAction=function(){
return Eh.prototype.getTouchAction.call(this)
},i.attrTest=function(e){
var i,o=this.options.direction
;return 30&o?i=e.overallVelocity:6&o?i=e.overallVelocityX:o&Ma&&(i=e.overallVelocityY),
t.prototype.attrTest.call(this,e)&&o&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&ca(i)>this.options.velocity&&4&e.eventType
},i.emit=function(t){var e=Oh(t.offsetDirection)
;e&&this.manager.emit(this.options.event+e,t),
this.manager.emit(this.options.event,t)},e
}(xh),Sh=function(t){function e(e){
return void 0===e&&(e={}),t.call(this,oa({
event:"pinch",threshold:0,pointers:2},e))||this}
na(e,t);var i=e.prototype
;return i.getTouchAction=function(){return[ba]
},i.attrTest=function(e){
return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)
},i.emit=function(e){if(1!==e.scale){
var i=e.scale<1?"in":"out"
;e.additionalEvent=this.options.event+i}
t.prototype.emit.call(this,e)},e
}(xh),Th=function(t){function e(e){
return void 0===e&&(e={}),t.call(this,oa({
event:"rotate",threshold:0,pointers:2},e))||this}
na(e,t);var i=e.prototype
;return i.getTouchAction=function(){return[ba]
},i.attrTest=function(e){
return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)
},e}(xh),Mh=function(t){function e(e){var i
;return void 0===e&&(e={}),(i=t.call(this,oa({
event:"press",pointers:1,time:251,threshold:9
},e))||this)._timer=null,i._input=null,i}na(e,t)
;var i=e.prototype
;return i.getTouchAction=function(){return[ya]
},i.process=function(t){
var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,r=t.deltaTime>i.time
;if(this._input=t,
!n||!o||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),
this._timer=setTimeout((function(){
e.state=8,e.tryEmit()
}),i.time);else if(4&t.eventType)return 8
;return yh},i.reset=function(){
clearTimeout(this._timer)},i.emit=function(t){
8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ua(),
this.manager.emit(this.options.event,this._input)))
},e}(kh),Dh={domEvents:!1,touchAction:ga,
enable:!0,inputTarget:null,inputClass:null,
cssProps:{userSelect:"none",touchSelect:"none",
touchCallout:"none",contentZooming:"none",
userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}
},Ph=[[Th,{enable:!1}],[Sh,{enable:!1
},["rotate"]],[Ch,{direction:6}],[Eh,{direction:6
},["swipe"]],[_h],[_h,{event:"doubletap",taps:2
},["tap"]],[Mh]];function Ih(t,e){
var i,o=t.element
;o.style&&(Ia(t.options.cssProps,(function(n,r){
i=fa(o.style,r),e?(t.oldCssProps[i]=o.style[i],
o.style[i]=n):o.style[i]=t.oldCssProps[i]||""
})),e||(t.oldCssProps={}))}var Bh=function(){
function t(t,e){var i,o=this
;this.options=aa({},Dh,e||{}),this.options.inputTarget=this.options.inputTarget||t,
this.handlers={},
this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,
this.input=new((i=this).options.inputClass||(Oa?eh:Ea?sh:xa?vh:ch))(i,qa),
this.touchAction=new Fa(this,this.options.touchAction),
Ih(this,!0),Ia(this.options.recognizers,(function(t){
var e=o.add(new t[0](t[1]))
;t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])
}),this)}var e=t.prototype
;return e.set=function(t){
return aa(this.options,t),t.touchAction&&this.touchAction.update(),
t.inputTarget&&(this.input.destroy(),
this.input.target=t.inputTarget,this.input.init()),
this},e.stop=function(t){
this.session.stopped=t?2:1
},e.recognize=function(t){var e=this.session
;if(!e.stopped){var i
;this.touchAction.preventDefaults(t)
;var o=this.recognizers,n=e.curRecognizer
;(!n||n&&8&n.state)&&(e.curRecognizer=null,n=null)
;for(var r=0;r<o.length;)i=o[r],
2===e.stopped||n&&i!==n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),
!n&&14&i.state&&(e.curRecognizer=i,n=i),r++}
},e.get=function(t){if(t instanceof kh)return t
;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event===t)return e[i]
;return null},e.add=function(t){
if(gh(t,"add",this))return this
;var e=this.get(t.options.event)
;return e&&this.remove(e),this.recognizers.push(t),
t.manager=this,this.touchAction.update(),t
},e.remove=function(t){
if(gh(t,"remove",this))return this
;var e=this.get(t);if(t){
var i=this.recognizers,o=$a(i,e)
;-1!==o&&(i.splice(o,1),this.touchAction.update())
}return this},e.on=function(t,e){
if(void 0===t||void 0===e)return this
;var i=this.handlers;return Ia(Ua(t),(function(t){
i[t]=i[t]||[],i[t].push(e)})),this
},e.off=function(t,e){if(void 0===t)return this
;var i=this.handlers;return Ia(Ua(t),(function(t){
e?i[t]&&i[t].splice($a(i[t],e),1):delete i[t]
})),this},e.emit=function(t,e){
this.options.domEvents&&function(t,e){
var i=document.createEvent("Event")
;i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)
}(t,e)
;var i=this.handlers[t]&&this.handlers[t].slice()
;if(i&&i.length){
e.type=t,e.preventDefault=function(){
e.srcEvent.preventDefault()}
;for(var o=0;o<i.length;)i[o](e),o++}
},e.destroy=function(){
this.element&&Ih(this,!1),this.handlers={},this.session={},
this.input.destroy(),this.element=null},t}(),zh={
touchstart:1,touchmove:2,touchend:4,touchcancel:8
},Fh="touchstart",Nh="touchstart touchmove touchend touchcancel",Ah=function(t){
function e(){var i,o=e.prototype
;return o.evTarget=Fh,o.evWin=Nh,(i=t.apply(this,arguments)||this).started=!1,
i}return na(e,t),e.prototype.handler=function(t){
var e=zh[t.type]
;if(1===e&&(this.started=!0),this.started){
var i=jh.call(this,t,e)
;12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{
pointers:i[0],changedPointers:i[1],pointerType:Ca,
srcEvent:t})}},e}(Ka);function jh(t,e){
var i=ih(t.touches),o=ih(t.changedTouches)
;return 12&e&&(i=oh(i.concat(o),"identifier",!0)),
[i,o]}function Rh(t,e,i){
var o="DEPRECATED METHOD: "+e+"\n"+i+" AT \n"
;return function(){
var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=window.console&&(window.console.warn||window.console.log)
;return n&&n.call(window.console,o,i),
t.apply(this,arguments)}}
var Lh=Rh((function(t,e,i){
for(var o=Object.keys(e),n=0;n<o.length;)(!i||i&&void 0===t[o[n]])&&(t[o[n]]=e[o[n]]),
n++;return t
}),"extend","Use `assign`."),Hh=Rh((function(t,e){
return Lh(t,e,!0)}),"merge","Use `assign`.")
;function Wh(t,e,i){var o,n=e.prototype
;(o=t.prototype=Object.create(n)).constructor=t,
o._super=n,i&&aa(o,i)}function Vh(t,e){
return function(){return t.apply(e,arguments)}}
var qh=function(){var t=function(_t2,e){
return void 0===e&&(e={}),new Bh(_t2,oa({
recognizers:Ph.concat()},e))}
;return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=30,t.DIRECTION_DOWN=Ta,
t.DIRECTION_LEFT=2,
t.DIRECTION_RIGHT=4,t.DIRECTION_UP=8,t.DIRECTION_HORIZONTAL=6,
t.DIRECTION_VERTICAL=Ma,
t.DIRECTION_NONE=1,t.DIRECTION_DOWN=Ta,t.INPUT_START=1,t.INPUT_MOVE=2,
t.INPUT_END=4,
t.INPUT_CANCEL=8,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,
t.STATE_ENDED=8,
t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=yh,t.Manager=Bh,
t.Input=Ka,
t.TouchAction=Fa,t.TouchInput=sh,t.MouseInput=ch,t.PointerEventInput=eh,
t.TouchMouseInput=vh,
t.SingleTouchInput=Ah,t.Recognizer=kh,t.AttrRecognizer=xh,t.Tap=_h,
t.Pan=Eh,t.Swipe=Ch,
t.Pinch=Sh,t.Rotate=Th,t.Press=Mh,t.on=Ya,t.off=Xa,t.each=Ia,
t.merge=Hh,t.extend=Lh,
t.bindFn=Vh,t.assign=aa,t.inherit=Wh,t.bindFn=Vh,t.prefixed=fa,
t.toArray=ih,t.inArray=$a,
t.uniqueArray=oh,t.splitStr=Ua,t.boolOrFn=Ba,t.hasParent=Na,
t.addEventListeners=Ya,
t.removeEventListeners=Xa,t.defaults=aa({},Dh,{
preset:Ph}),t
}(),Uh="undefined"!=typeof window?window.Hammer||qh:function(){
return{on:t=function(){},off:t,destroy:t,emit:t,
get:function(e){return{set:t}}};var t}
;function Yh(t){var e,i,o=this
;this.active=!1,this.dom={container:t
},this.dom.overlay=document.createElement("div"),
this.dom.overlay.className="vis-overlay",
this.dom.container.appendChild(this.dom.overlay),
this.hammer=Uh(this.dom.overlay),
this.hammer.on("tap",Z(e=this._onTapOverlay).call(e,this))
;var n=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"]
;Vo(n).call(n,(function(t){
o.hammer.on(t,(function(t){
t.srcEvent.stopPropagation()}))
})),document&&document.body&&(this.onClick=function(e){
(function(t,e){for(;t;){if(t===e)return!0
;t=t.parentNode}return!1
})(e.target,t)||o.deactivate()
},document.body.addEventListener("click",this.onClick)),
void 0!==this.keycharm&&this.keycharm.destroy(),
this.keycharm=ia(),this.escListener=Z(i=this.deactivate).call(i,this)
}
Ct(Yh.prototype),Yh.current=null,Yh.prototype.destroy=function(){
this.deactivate(),
this.dom.overlay.parentNode.removeChild(this.dom.overlay),this.onClick&&document.body.removeEventListener("click",this.onClick),
void 0!==this.keycharm&&this.keycharm.destroy(),
this.keycharm=null,this.hammer.destroy(),
this.hammer=null
},Yh.prototype.activate=function(){var t,e,i,o,n
;Yh.current&&Yh.current.deactivate(),
Yh.current=this,this.active=!0,this.dom.overlay.style.display="none",
e=this.dom.container,
i="vis-active",o=e.className.split(" "),n=i.split(" "),o=mr(o).call(o,fn(n).call(n,(function(t){
return On(o).call(o,t)<0
}))),e.className=o.join(" "),this.emit("change"),this.emit("activate"),
Z(t=this.keycharm).call(t,"esc",this.escListener)
},Yh.prototype.deactivate=function(){var t,e,i,o
;this.active=!1,this.dom.overlay.style.display="block",
e="vis-active",i=(t=this.dom.container).className.split(" "),
o=e.split(" "),i=fn(i).call(i,(function(t){
return On(o).call(o,t)<0
})),t.className=i.join(" "),this.keycharm.unbind("esc",this.escListener),
this.emit("change"),this.emit("deactivate")
},Yh.prototype._onTapOverlay=function(t){
this.activate(),t.srcEvent.stopPropagation()}
;var Xh=Object.freeze({__proto__:null,en:{
addDescription:"Click in an empty space to place a new node.",
addEdge:"Add Edge",addNode:"Add Node",back:"Back",
createEdgeError:"Cannot link edges to a cluster.",
del:"Delete selected",
deleteClusterError:"Clusters cannot be deleted.",
edgeDescription:"Click on a node and drag the edge to another node to connect them.",
edit:"Edit",
editClusterError:"Clusters cannot be edited.",
editEdge:"Edit Edge",
editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",
editNode:"Edit Node"},de:{
addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",
addEdge:"Kante hinzufügen",
addNode:"Knoten hinzufügen",back:"Zurück",
createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",
del:"Lösche Auswahl",
deleteClusterError:"Cluster können nicht gelöscht werden.",
edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",
edit:"Editieren",
editClusterError:"Cluster können nicht editiert werden.",
editEdge:"Kante editieren",
editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",
editNode:"Knoten editieren"},es:{
addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",
addEdge:"Añadir arista",addNode:"Añadir nodo",
back:"Atrás",
createEdgeError:"No se puede conectar una arista a un grupo.",
del:"Eliminar selección",
deleteClusterError:"No es posible eliminar grupos.",
edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",
edit:"Editar",
editClusterError:"No es posible editar grupos.",
editEdge:"Editar arista",
editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",
editNode:"Editar nodo"},it:{
addDescription:"Clicca per aggiungere un nuovo nodo",
addEdge:"Aggiungi un vertice",
addNode:"Aggiungi un nodo",back:"Indietro",
createEdgeError:"Non si possono collegare vertici ad un cluster",
del:"Cancella la selezione",
deleteClusterError:"I cluster non possono essere cancellati",
edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",
edit:"Modifica",
editClusterError:"I clusters non possono essere modificati.",
editEdge:"Modifica il vertice",
editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",
editNode:"Modifica il nodo"},nl:{
addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",
addEdge:"Link toevoegen",addNode:"Node toevoegen",
back:"Terug",
createEdgeError:"Kan geen link maken naar een cluster.",
del:"Selectie verwijderen",
deleteClusterError:"Clusters kunnen niet worden verwijderd.",
edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",
edit:"Wijzigen",
editClusterError:"Clusters kunnen niet worden aangepast.",
editEdge:"Link wijzigen",
editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",
editNode:"Node wijzigen"},pt:{
addDescription:"Clique em um espaço em branco para adicionar um novo nó",
addEdge:"Adicionar aresta",addNode:"Adicionar nó",
back:"Voltar",
createEdgeError:"Não foi possível linkar arestas a um cluster.",
del:"Remover selecionado",
deleteClusterError:"Clusters não puderam ser removidos.",
edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",
edit:"Editar",
editClusterError:"Clusters não puderam ser editados.",
editEdge:"Editar aresta",
editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",
editNode:"Editar nó"},ru:{
addDescription:"Кликните в свободное место, чтобы добавить новый узел.",
addEdge:"Добавить ребро",addNode:"Добавить узел",
back:"Назад",
createEdgeError:"Невозможно соединить ребра в кластер.",
del:"Удалить выбранное",
deleteClusterError:"Кластеры не могут быть удалены",
edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",
edit:"Редактировать",
editClusterError:"Кластеры недоступны для редактирования.",
editEdge:"Редактировать ребро",
editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",
editNode:"Редактировать узел"},cn:{
addDescription:"单击空白处放置新节点。",addEdge:"添加连接线",
addNode:"添加节点",back:"返回",
createEdgeError:"无法将连接线连接到群集。",del:"删除选定",
deleteClusterError:"无法删除群集。",
edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",
edit:"编辑",editClusterError:"无法编辑群集。",
editEdge:"编辑连接线",
editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",
editNode:"编辑节点"},uk:{
addDescription:"Kлікніть на вільне місце, щоб додати новий вузол.",
addEdge:"Додати край",addNode:"Додати вузол",
back:"Назад",
createEdgeError:"Не можливо об'єднати краї в групу.",
del:"Видалити обране",
deleteClusterError:"Групи не можуть бути видалені.",
edgeDescription:"Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",
edit:"Редагувати",
editClusterError:"Групи недоступні для редагування.",
editEdge:"Редагувати край",
editEdgeDescription:"Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",
editNode:"Редагувати вузол"},fr:{
addDescription:"Cliquez dans un endroit vide pour placer un nœud.",
addEdge:"Ajouter un lien",
addNode:"Ajouter un nœud",back:"Retour",
createEdgeError:"Impossible de créer un lien vers un cluster.",
del:"Effacer la sélection",
deleteClusterError:"Les clusters ne peuvent pas être effacés.",
edgeDescription:"Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",
edit:"Éditer",
editClusterError:"Les clusters ne peuvent pas être édités.",
editEdge:"Éditer le lien",
editEdgeDescription:"Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",
editNode:"Éditer le nœud"},cs:{
addDescription:"Kluknutím do prázdného prostoru můžete přidat nový vrchol.",
addEdge:"Přidat hranu",addNode:"Přidat vrchol",
back:"Zpět",
createEdgeError:"Nelze připojit hranu ke shluku.",
del:"Smazat výběr",
deleteClusterError:"Nelze mazat shluky.",
edgeDescription:"Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",
edit:"Upravit",
editClusterError:"Nelze upravovat shluky.",
editEdge:"Upravit hranu",
editEdgeDescription:"Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",
editNode:"Upravit vrchol"}}),Gh=function(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")
};function Kh(t,e){for(var i=0;i<e.length;i++){
var o=e[i]
;o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),
ko(t,o.key,o)}}var $h=function(t,e,i){
return e&&Kh(t.prototype,e),i&&Kh(t,i),t
},Qh=function(){function t(){
Gh(this,t),this.NUM_ITERATIONS=4,this.image=new Image,
this.canvas=document.createElement("canvas")}
return $h(t,[{key:"init",value:function(){
if(!this.initialized()){this.src=this.image.src
;var t=this.image.width,e=this.image.height
;this.width=t,this.height=e
;var i=Math.floor(e/2),o=Math.floor(e/4),n=Math.floor(e/8),r=Math.floor(e/16),s=Math.floor(t/2),a=Math.floor(t/4),h=Math.floor(t/8),d=Math.floor(t/16)
;this.canvas.width=3*a,
this.canvas.height=i,this.coordinates=[[0,0,s,i],[s,0,a,o],[s,o,h,n],[5*h,o,d,r]],
this._fillMipMap()}}},{key:"initialized",
value:function(){return void 0!==this.coordinates}
},{key:"_fillMipMap",value:function(){
var t=this.canvas.getContext("2d"),e=this.coordinates[0]
;t.drawImage(this.image,e[0],e[1],e[2],e[3])
;for(var i=1;i<this.NUM_ITERATIONS;i++){
var o=this.coordinates[i-1],n=this.coordinates[i]
;t.drawImage(this.canvas,o[0],o[1],o[2],o[3],n[0],n[1],n[2],n[3])
}}},{key:"drawImageAtPosition",
value:function(t,e,i,o,n,r){
if(this.initialized())if(e>2){e*=.5
;for(var s=0;e>2&&s<this.NUM_ITERATIONS;)e*=.5,
s+=1
;s>=this.NUM_ITERATIONS&&(s=this.NUM_ITERATIONS-1)
;var a=this.coordinates[s]
;t.drawImage(this.canvas,a[0],a[1],a[2],a[3],i,o,n,r)
}else t.drawImage(this.image,i,o,n,r)}}]),t
}(),Zh=function(){function t(e){
Gh(this,t),this.images={},this.imageBroken={},this.callback=e
}return $h(t,[{key:"_tryloadBrokenUrl",
value:function(t,e,i){
void 0!==t&&void 0!==i&&(void 0!==e?(i.image.onerror=function(){
console.error("Could not load brokenImage:",e)
},i.image.src=e):console.warn("No broken url image defined"))
}},{key:"_redrawWithImage",value:function(t){
this.callback&&this.callback(t)}},{key:"load",
value:function(t,e){var i=this,o=this.images[t]
;if(o)return o;var n=new Qh
;return this.images[t]=n,n.image.onload=function(){
i._fixImageCoordinates(n.image),
n.init(),i._redrawWithImage(n)
},n.image.onerror=function(){
console.error("Could not load image:",t),i._tryloadBrokenUrl(t,e,n)
},n.image.src=t,n}},{key:"_fixImageCoordinates",
value:function(t){
0===t.width&&(document.body.appendChild(t),t.width=t.offsetWidth,
t.height=t.offsetHeight,
document.body.removeChild(t))}}]),t
}(),Jh=function(){function t(){
Gh(this,t),this.clear(),this.defaultIndex=0,this.groupsArray=[],
this.groupIndex=0,this.defaultGroups=[{
border:"#2B7CE9",background:"#97C2FC",highlight:{
border:"#2B7CE9",background:"#D2E5FF"},hover:{
border:"#2B7CE9",background:"#D2E5FF"}},{
border:"#FFA500",background:"#FFFF00",highlight:{
border:"#FFA500",background:"#FFFFA3"},hover:{
border:"#FFA500",background:"#FFFFA3"}},{
border:"#FA0A10",background:"#FB7E81",highlight:{
border:"#FA0A10",background:"#FFAFB1"},hover:{
border:"#FA0A10",background:"#FFAFB1"}},{
border:"#41A906",background:"#7BE141",highlight:{
border:"#41A906",background:"#A1EC76"},hover:{
border:"#41A906",background:"#A1EC76"}},{
border:"#E129F0",background:"#EB7DF4",highlight:{
border:"#E129F0",background:"#F0B3F5"},hover:{
border:"#E129F0",background:"#F0B3F5"}},{
border:"#7C29F0",background:"#AD85E4",highlight:{
border:"#7C29F0",background:"#D3BDF0"},hover:{
border:"#7C29F0",background:"#D3BDF0"}},{
border:"#C37F00",background:"#FFA807",highlight:{
border:"#C37F00",background:"#FFCA66"},hover:{
border:"#C37F00",background:"#FFCA66"}},{
border:"#4220FB",background:"#6E6EFD",highlight:{
border:"#4220FB",background:"#9B9BFD"},hover:{
border:"#4220FB",background:"#9B9BFD"}},{
border:"#FD5A77",background:"#FFC0CB",highlight:{
border:"#FD5A77",background:"#FFD1D9"},hover:{
border:"#FD5A77",background:"#FFD1D9"}},{
border:"#4AD63A",background:"#C2FABC",highlight:{
border:"#4AD63A",background:"#E6FFE3"},hover:{
border:"#4AD63A",background:"#E6FFE3"}},{
border:"#990000",background:"#EE0000",highlight:{
border:"#BB0000",background:"#FF3333"},hover:{
border:"#BB0000",background:"#FF3333"}},{
border:"#FF6000",background:"#FF6000",highlight:{
border:"#FF6000",background:"#FF6000"},hover:{
border:"#FF6000",background:"#FF6000"}},{
border:"#97C2FC",background:"#2B7CE9",highlight:{
border:"#D2E5FF",background:"#2B7CE9"},hover:{
border:"#D2E5FF",background:"#2B7CE9"}},{
border:"#399605",background:"#255C03",highlight:{
border:"#399605",background:"#255C03"},hover:{
border:"#399605",background:"#255C03"}},{
border:"#B70054",background:"#FF007E",highlight:{
border:"#B70054",background:"#FF007E"},hover:{
border:"#B70054",background:"#FF007E"}},{
border:"#AD85E4",background:"#7C29F0",highlight:{
border:"#D3BDF0",background:"#7C29F0"},hover:{
border:"#D3BDF0",background:"#7C29F0"}},{
border:"#4557FA",background:"#000EA1",highlight:{
border:"#6E6EFD",background:"#000EA1"},hover:{
border:"#6E6EFD",background:"#000EA1"}},{
border:"#FFC0CB",background:"#FD5A77",highlight:{
border:"#FFD1D9",background:"#FD5A77"},hover:{
border:"#FFD1D9",background:"#FD5A77"}},{
border:"#C2FABC",background:"#74D66A",highlight:{
border:"#E6FFE3",background:"#74D66A"},hover:{
border:"#E6FFE3",background:"#74D66A"}},{
border:"#EE0000",background:"#990000",highlight:{
border:"#FF3333",background:"#BB0000"},hover:{
border:"#FF3333",background:"#BB0000"}
}],this.options={},this.defaultOptions={
useDefaultGroups:!0
},bt(this.options,this.defaultOptions)}
return $h(t,[{key:"setOptions",value:function(t){
var e=["useDefaultGroups"]
;if(void 0!==t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&-1===On(e).call(e,i)){
var o=t[i];this.add(i,o)}}},{key:"clear",
value:function(){
this.groups={},this.groupsArray=[]}},{key:"get",
value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.groups[t]
;if(void 0===i&&e)if(!1===this.options.useDefaultGroups&&this.groupsArray.length>0){
var o=this.groupIndex%this.groupsArray.length
;this.groupIndex++,(i={}).color=this.groups[this.groupsArray[o]],
this.groups[t]=i}else{
var n=this.defaultIndex%this.defaultGroups.length
;this.defaultIndex++,(i={}).color=this.defaultGroups[n],
this.groups[t]=i}return i}},{key:"add",
value:function(t,e){
return this.groups[t]=e,this.groupsArray.push(t),e
}}]),t
}(),td=[].slice,ed=/MSIE .\./.test(tn),id=function(t){
return function(e,i){
var o=arguments.length>2,n=o?td.call(arguments,2):void 0
;return t(o?function(){
("function"==typeof e?e:Function(e)).apply(this,n)
}:e,i)}};q({global:!0,bind:!0,forced:ed},{
setTimeout:id(r.setTimeout),
setInterval:id(r.setInterval)})
;var od=F.setTimeout,nd=Ue.some,rd=Po("some"),sd=Fo("some")
;q({target:"Array",proto:!0,forced:!rd||!sd},{
some:function(t){
return nd(this,t,arguments.length>1?arguments[1]:void 0)
}})
;var ad=K("Array").some,hd=Array.prototype,dd=function(t){
var e=t.some
;return t===hd||t instanceof Array&&e===hd.some?ad:e
},ld=r.isFinite,cd=Number.isFinite||function(t){
return"number"==typeof t&&ld(t)};q({
target:"Number",stat:!0},{isFinite:cd})
;var ud=F.Number.isFinite;q({target:"Number",
stat:!0},{isNaN:function(t){return t!=t}})
;var fd=F.Number.isNaN,pd=de.f,vd=s((function(){
return!Object.getOwnPropertyNames(1)}));q({
target:"Object",stat:!0,forced:vd},{
getOwnPropertyNames:pd})
;var gd=F.Object,yd=function(t){
return gd.getOwnPropertyNames(t)
},md=Mo.trim,bd=r.parseFloat,wd=1/bd(Oo+"-0")!=-1/0?function(t){
var e=md(String(t)),i=bd(e)
;return 0===i&&"-"==e.charAt(0)?-0:i}:bd;q({
global:!0,forced:parseFloat!=wd},{parseFloat:wd})
;var kd=F.parseFloat;function _d(t,e){
var i=["node","edge","label"],o=!0,n=ts(e,"chosen")
;if("boolean"==typeof n)o=n;else if("object"===lr(n)){
if(-1===On(i).call(i,t))throw new Error("choosify: subOption '"+t+"' should be one of '"+i.join("', '")+"'")
;var r=ts(e,["chosen",t])
;"boolean"!=typeof r&&"function"!=typeof r||(o=r)}
return o}function xd(t,e,i){
if(t.width<=0||t.height<=0)return!1
;if(void 0!==i){var o={x:e.x-i.x,y:e.y-i.y}
;if(0!==i.angle){var n=-i.angle;e={
x:Math.cos(n)*o.x-Math.sin(n)*o.y,
y:Math.sin(n)*o.x+Math.cos(n)*o.y}}else e=o}
var r=t.x+t.width,s=t.y+t.width
;return t.left<e.x&&r>e.x&&t.top<e.y&&s>e.y}
function Od(t){return"string"==typeof t&&""!==t}
function Ed(t,e,i,o){var n=o.x,r=o.y
;if("function"==typeof o.distanceToBorder){
var s=o.distanceToBorder(t,e),a=Math.sin(e)*s,h=Math.cos(e)*s
;h===s?(n+=s,r=o.y):a===s?(n=o.x,r-=s):(n+=h,r-=a)
}else o.shape.width>o.shape.height?(n=o.x+.5*o.shape.width,
r=o.y-i):(n=o.x+i,r=o.y-.5*o.shape.height);return{
x:n,y:r}}
var Cd=K("Array").values,Sd=Array.prototype,Td={
DOMTokenList:!0,NodeList:!0},Md=function(t){
var e=t.values
;return t===Sd||t instanceof Array&&e===Sd.values||Td.hasOwnProperty(_e(t))?Cd:e
},Dd=function(){function t(e){
Gh(this,t),this.measureText=e,this.current=0,this.width=0,
this.height=0,this.lines=[]}return $h(t,[{
key:"_add",value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal"
;void 0===this.lines[t]&&(this.lines[t]={width:0,
height:0,blocks:[]});var o=e
;void 0!==e&&""!==e||(o=" ")
;var n=this.measureText(o,i),r=bt({},Md(n))
;r.text=e,r.width=n.width,r.mod=i,void 0!==e&&""!==e||(r.width=0),
this.lines[t].blocks.push(r),
this.lines[t].width+=r.width}},{key:"curWidth",
value:function(){var t=this.lines[this.current]
;return void 0===t?0:t.width}},{key:"append",
value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal"
;this._add(this.current,t,e)}},{key:"newLine",
value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal"
;this._add(this.current,t,e),this.current++}},{
key:"determineLineHeights",value:function(){
for(var t=0;t<this.lines.length;t++){
var e=this.lines[t],i=0
;if(void 0!==e.blocks)for(var o=0;o<e.blocks.length;o++){
var n=e.blocks[o];i<n.height&&(i=n.height)}
e.height=i}}},{key:"determineLabelSize",
value:function(){
for(var t=0,e=0,i=0;i<this.lines.length;i++){
var o=this.lines[i]
;o.width>t&&(t=o.width),e+=o.height}
this.width=t,this.height=e}},{
key:"removeEmptyBlocks",value:function(){
for(var t=[],e=0;e<this.lines.length;e++){
var i=this.lines[e]
;if(0!==i.blocks.length&&(e!==this.lines.length-1||0!==i.width)){
var o={};bt(o,i),o.blocks=[]
;for(var n=void 0,r=[],s=0;s<i.blocks.length;s++){
var a=i.blocks[s]
;0!==a.width?r.push(a):void 0===n&&(n=a)}
0===r.length&&void 0!==n&&r.push(n),o.blocks=r,
t.push(o)}}return t}},{key:"finalize",
value:function(){
this.determineLineHeights(),this.determineLabelSize()
;var t=this.removeEmptyBlocks();return{
width:this.width,height:this.height,lines:t}}}]),t
}(),Pd={"<b>":/<b>/,"<i>":/<i>/,"<code>":/<code>/,
"</b>":/<\/b>/,"</i>":/<\/i>/,
"</code>":/<\/code>/,"*":/\*/,_:/\_/,"`":/`/,
afterBold:/[^\*]/,afterItal:/[^_]/,
afterMono:/[^`]/},Id=function(){function t(e){
Gh(this,t),this.text=e,this.bold=!1,
this.ital=!1,this.mono=!1,this.spacing=!1,this.position=0,
this.buffer="",this.modStack=[],this.blocks=[]}
return $h(t,[{key:"mod",value:function(){
return 0===this.modStack.length?"normal":this.modStack[0]
}},{key:"modName",value:function(){
return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":this.bold&&this.ital?"boldital":this.bold?"bold":this.ital?"ital":void 0
}},{key:"emitBlock",value:function(){
this.spacing&&(this.add(" "),this.spacing=!1),
this.buffer.length>0&&(this.blocks.push({
text:this.buffer,mod:this.modName()
}),this.buffer="")}},{key:"add",value:function(t){
" "===t&&(this.spacing=!0),this.spacing&&(this.buffer+=" ",
this.spacing=!1)," "!=t&&(this.buffer+=t)}},{
key:"parseWS",value:function(t){
return!!/[ \t]/.test(t)&&(this.mono?this.add(t):this.spacing=!0,
!0)}},{key:"setTag",value:function(t){
this.emitBlock(),this[t]=!0,this.modStack.unshift(t)
}},{key:"unsetTag",value:function(t){
this.emitBlock(),this[t]=!1,this.modStack.shift()}
},{key:"parseStartTag",value:function(t,e){
return!(this.mono||this[t]||!this.match(e)||(this.setTag(t),
0))}},{key:"match",value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.prepareRegExp(t),o=Zn(i,2),n=o[0],r=o[1],s=n.test(this.text.substr(this.position,r))
;return s&&e&&(this.position+=r-1),s}},{
key:"parseEndTag",value:function(t,e,i){
var o=this.mod()===t
;return!(!(o="mono"===t?o&&this.mono:o&&!this.mono)||!this.match(e)||(void 0!==i?(this.position===this.text.length-1||this.match(i,!1))&&this.unsetTag(t):this.unsetTag(t),
0))}},{key:"replace",value:function(t,e){
return!!this.match(t)&&(this.add(e),this.position+=length-1,
!0)}},{key:"prepareRegExp",value:function(t){
var e,i;if(t instanceof RegExp)i=t,e=1;else{
var o=Pd[t]
;i=void 0!==o?o:new RegExp(t),e=t.length}
return[i,e]}}]),t}(),Bd=function(){
function t(e,i,o,n){var r=this
;Gh(this,t),this.ctx=e,this.parent=i,this.selected=o,
this.hover=n,this.lines=new Dd((function(t,i){
if(void 0===t)return 0
;var s=r.parent.getFormattingValues(e,o,n,i),a=0
;return""!==t&&(a=r.ctx.measureText(t).width),{
width:a,values:s}}))}return $h(t,[{key:"process",
value:function(t){
if(!Od(t))return this.lines.finalize()
;var e=this.parent.fontOptions
;t=(t=t.replace(/\r\n/g,"\n")).replace(/\r/g,"\n")
;var i=String(t).split("\n"),o=i.length
;if(e.multi)for(var n=0;n<o;n++){
var r=this.splitBlocks(i[n],e.multi)
;if(void 0!==r)if(0!==r.length){
if(e.maxWdt>0)for(var s=0;s<r.length;s++){
var a=r[s].mod,h=r[s].text
;this.splitStringIntoLines(h,a,!0)
}else for(var d=0;d<r.length;d++){
var l=r[d].mod,c=r[d].text;this.lines.append(c,l)}
this.lines.newLine()}else this.lines.newLine("")
}else if(e.maxWdt>0)for(var u=0;u<o;u++)this.splitStringIntoLines(i[u]);else for(var f=0;f<o;f++)this.lines.newLine(i[f])
;return this.lines.finalize()}},{
key:"decodeMarkupSystem",value:function(t){
var e="none"
;return"markdown"===t||"md"===t?e="markdown":!0!==t&&"html"!==t||(e="html"),
e}},{key:"splitHtmlBlocks",value:function(t){
for(var e=new Id(t),i=function(t){
return!!/&/.test(t)&&(e.replace(e.text,"&lt;","<")||e.replace(e.text,"&amp;","&")||e.add("&"),
!0)};e.position<e.text.length;){
var o=e.text.charAt(e.position)
;e.parseWS(o)||/</.test(o)&&(e.parseStartTag("bold","<b>")||e.parseStartTag("ital","<i>")||e.parseStartTag("mono","<code>")||e.parseEndTag("bold","</b>")||e.parseEndTag("ital","</i>")||e.parseEndTag("mono","</code>"))||i(o)||e.add(o),
e.position++}return e.emitBlock(),e.blocks}},{
key:"splitMarkdownBlocks",value:function(t){
for(var e=this,i=new Id(t),o=!0,n=function(t){
return!!/\\/.test(t)&&(i.position<e.text.length+1&&(i.position++,
t=e.text.charAt(i.position),
/ \t/.test(t)?i.spacing=!0:(i.add(t),o=!1)),!0)
};i.position<i.text.length;){
var r=i.text.charAt(i.position)
;i.parseWS(r)||n(r)||(o||i.spacing)&&(i.parseStartTag("bold","*")||i.parseStartTag("ital","_")||i.parseStartTag("mono","`"))||i.parseEndTag("bold","*","afterBold")||i.parseEndTag("ital","_","afterItal")||i.parseEndTag("mono","`","afterMono")||(i.add(r),
o=!1),i.position++}return i.emitBlock(),i.blocks}
},{key:"splitBlocks",value:function(t,e){
var i=this.decodeMarkupSystem(e)
;return"none"===i?[{text:t,mod:"normal"
}]:"markdown"===i?this.splitMarkdownBlocks(t):"html"===i?this.splitHtmlBlocks(t):void 0
}},{key:"overMaxWidth",value:function(t){
var e=this.ctx.measureText(t).width
;return this.lines.curWidth()+e>this.parent.fontOptions.maxWdt
}},{key:"getLongestFit",value:function(t){
for(var e="",i=0;i<t.length;){
var o=e+(""===e?"":" ")+t[i]
;if(this.overMaxWidth(o))break;e=o,i++}return i}
},{key:"getLongestFitWord",value:function(t){
for(var e=0;e<t.length&&!this.overMaxWidth(cr(t).call(t,0,e));)e++
;return e}},{key:"splitStringIntoLines",
value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
;this.parent.getFormattingValues(this.ctx,this.selected,this.hover,e)
;for(var o=(t=(t=t.replace(/^( +)/g,"$1\r")).replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r")).split("\r");o.length>0;){
var n=this.getLongestFit(o);if(0===n){
var r=o[0],s=this.getLongestFitWord(r)
;this.lines.newLine(cr(r).call(r,0,s),e),o[0]=cr(r).call(r,s)
}else{var a=n;" "===o[n-1]?n--:" "===o[a]&&a++
;var h=cr(o).call(o,0,n).join("")
;n==o.length&&i?this.lines.append(h,e):this.lines.newLine(h,e),
o=cr(o).call(o,a)}}}}]),t
}(),zd=["bold","ital","boldital","mono"],Fd=function(){
function t(e,i){
var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
;Gh(this,t),this.body=e,
this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},
this.setOptions(i),this.size={top:0,left:0,
width:0,height:0,yLine:0},this.isEdgeLabel=o}
return $h(t,[{key:"setOptions",value:function(t){
if(this.elementOptions=t,this.initFontOptions(t.font),
Od(t.label)?this.labelDirty=!0:t.label=void 0,
void 0!==t.font&&null!==t.font)if("string"==typeof t.font)this.baseSize=this.fontOptions.size;else if("object"===lr(t.font)){
var e=t.font.size;void 0!==e&&(this.baseSize=e)}}
},{key:"initFontOptions",value:function(e){
var i=this;Lr(zd,(function(t){i.fontOptions[t]={}
})),t.parseFontString(this.fontOptions,e)?this.fontOptions.vadjust=0:Lr(e,(function(t,e){
null!=t&&"object"!==lr(t)&&(i.fontOptions[e]=t)}))
}},{key:"constrain",value:function(t){var e={
constrainWidth:!1,maxWdt:-1,minWdt:-1,
constrainHeight:!1,minHgt:-1,valign:"middle"
},i=ts(t,"widthConstraint")
;if("number"==typeof i)e.maxWdt=Number(i),e.minWdt=Number(i);else if("object"===lr(i)){
var o=ts(t,["widthConstraint","maximum"])
;"number"==typeof o&&(e.maxWdt=Number(o))
;var n=ts(t,["widthConstraint","minimum"])
;"number"==typeof n&&(e.minWdt=Number(n))}
var r=ts(t,"heightConstraint")
;if("number"==typeof r)e.minHgt=Number(r);else if("object"===lr(r)){
var s=ts(t,["heightConstraint","minimum"])
;"number"==typeof s&&(e.minHgt=Number(s))
;var a=ts(t,["heightConstraint","valign"])
;"string"==typeof a&&("top"!==a&&"bottom"!==a||(e.valign=a))
}return e}},{key:"update",value:function(t,e){
this.setOptions(t,!0),this.propagateFonts(e),
Nr(this.fontOptions,this.constrain(e)),
this.fontOptions.chooser=_d("label",e)}},{
key:"adjustSizes",value:function(t){
var e=t?t.right+t.left:0
;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=e,
this.fontOptions.minWdt-=e)
;var i=t?t.top+t.bottom:0
;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=i)
}},{key:"addFontOptionsToPile",
value:function(t,e){
for(var i=0;i<e.length;++i)this.addFontToPile(t,e[i])
}},{key:"addFontToPile",value:function(t,e){
if(void 0!==e&&void 0!==e.font&&null!==e.font){
var i=e.font;t.push(i)}}},{key:"getBasicOptions",
value:function(e){
for(var i={},o=0;o<e.length;++o){var n=e[o],r={}
;t.parseFontString(r,n)&&(n=r),Lr(n,(function(t,e){
void 0!==t&&(Object.prototype.hasOwnProperty.call(i,e)||(-1!==On(zd).call(zd,e)?i[e]={}:i[e]=t))
}))}return i}},{key:"getFontOption",
value:function(e,i,o){
for(var n,r=0;r<e.length;++r){var s=e[r]
;if(Object.prototype.hasOwnProperty.call(s,i)){
if(null==(n=s[i]))continue;var a={}
;if(t.parseFontString(a,n)&&(n=a),Object.prototype.hasOwnProperty.call(n,o))return n[o]
}}
if(Object.prototype.hasOwnProperty.call(this.fontOptions,o))return this.fontOptions[o]
;throw new Error("Did not find value for multi-font for property: '"+o+"'")
}},{key:"getFontOptions",value:function(t,e){
for(var i={},o=["color","size","face","mod","vadjust"],n=0;n<o.length;++n){
var r=o[n];i[r]=this.getFontOption(t,e,r)}return i
}},{key:"propagateFonts",value:function(t){
var e=this,i=[]
;this.addFontOptionsToPile(i,t),this.fontOptions=this.getBasicOptions(i)
;for(var o=function(t){
var o=zd[t],n=e.fontOptions[o]
;Lr(e.getFontOptions(i,o),(function(t,e){n[e]=t
})),n.size=Number(n.size),n.vadjust=Number(n.vadjust)
},n=0;n<zd.length;++n)o(n)}},{key:"draw",
value:function(t,e,i,o,n){
var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle"
;if(void 0!==this.elementOptions.label){
var s=this.fontOptions.size*this.body.view.scale
;this.elementOptions.label&&s<this.elementOptions.scaling.label.drawThreshold-1||(s>=this.elementOptions.scaling.label.maxVisible&&(s=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale),
this.calculateLabelSize(t,o,n,e,i,r),
this._drawBackground(t),this._drawText(t,e,this.size.yLine,r,s))
}}},{key:"_drawBackground",value:function(t){
if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){
t.fillStyle=this.fontOptions.background
;var e=this.getSize()
;t.fillRect(e.left,e.top,e.width,e.height)}}},{
key:"_drawText",value:function(t,e,i){
var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle",n=arguments.length>4?arguments[4]:void 0,r=this._setAlignment(t,e,i,o),s=Zn(r,2)
;e=s[0],
i=s[1],t.textAlign="left",e-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(i-=(this.size.height-this.size.labelHeight)/2),
"bottom"===this.fontOptions.valign&&(i+=(this.size.height-this.size.labelHeight)/2))
;for(var a=0;a<this.lineCount;a++){
var h=this.lines[a];if(h&&h.blocks){var d=0
;this.isEdgeLabel||"center"===this.fontOptions.align?d+=(this.size.width-h.width)/2:"right"===this.fontOptions.align&&(d+=this.size.width-h.width)
;for(var l=0;l<h.blocks.length;l++){
var c=h.blocks[l];t.font=c.font
;var u=this._getColor(c.color,n,c.strokeColor),f=Zn(u,2),p=f[0],v=f[1]
;c.strokeWidth>0&&(t.lineWidth=c.strokeWidth,
t.strokeStyle=v,t.lineJoin="round"),
t.fillStyle=p,c.strokeWidth>0&&t.strokeText(c.text,e+d,i+c.vadjust),
t.fillText(c.text,e+d,i+c.vadjust),d+=c.width}
i+=h.height}}}},{key:"_setAlignment",
value:function(t,e,i,o){
return this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&!1===this.pointToSelf?(e=0,
i=0,
"top"===this.fontOptions.align?(t.textBaseline="alphabetic",i-=4):"bottom"===this.fontOptions.align?(t.textBaseline="hanging",
i+=4):t.textBaseline="middle"):t.textBaseline=o,
[e,i]}},{key:"_getColor",value:function(t,e,i){
var o=t||"#000000",n=i||"#ffffff"
;if(e<=this.elementOptions.scaling.label.drawThreshold){
var r=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-e)))
;o=Wr(o,r),n=Wr(n,r)}return[o,n]}},{
key:"getTextSize",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
;return this._processLabel(t,e,i),{
width:this.size.width,height:this.size.height,
lineCount:this.lineCount}}},{key:"getSize",
value:function(){
var t=this.size.left,e=this.size.top-1
;if(this.isEdgeLabel){var i=.5*-this.size.width
;switch(this.fontOptions.align){case"middle":
t=i,e=.5*-this.size.height;break;case"top":
t=i,e=-(this.size.height+2);break;case"bottom":
t=i,e=2}}return{left:t,top:e,
width:this.size.width,height:this.size.height}}},{
key:"calculateLabelSize",value:function(t,e,i){
var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle"
;this._processLabel(t,e,i),
this.size.left=o-.5*this.size.width,this.size.top=n-.5*this.size.height,
this.size.yLine=n+.5*(1-this.lineCount)*this.fontOptions.size,
"hanging"===r&&(this.size.top+=.5*this.fontOptions.size,
this.size.top+=4,this.size.yLine+=4)}},{
key:"getFormattingValues",value:function(t,e,i,o){
var n=function(t,e,i){
return"normal"===e?"mod"===i?"":t[i]:void 0!==t[e][i]?t[e][i]:t[i]
},r={color:n(this.fontOptions,o,"color"),
size:n(this.fontOptions,o,"size"),
face:n(this.fontOptions,o,"face"),
mod:n(this.fontOptions,o,"mod"),
vadjust:n(this.fontOptions,o,"vadjust"),
strokeWidth:this.fontOptions.strokeWidth,
strokeColor:this.fontOptions.strokeColor}
;(e||i)&&("normal"===o&&!0===this.fontOptions.chooser&&this.elementOptions.labelHighlightBold?r.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(r,this.elementOptions.id,e,i))
;var s=""
;return void 0!==r.mod&&""!==r.mod&&(s+=r.mod+" "),s+=r.size+"px "+r.face,
t.font=s.replace(/"/g,""),
r.font=t.font,r.height=r.size,r}},{
key:"differentState",value:function(t,e){
return t!==this.selectedState||e!==this.hoverState
}},{key:"_processLabelText",
value:function(t,e,i,o){
return new Bd(t,this,e,i).process(o)}},{
key:"_processLabel",value:function(t,e,i){
if(!1!==this.labelDirty||this.differentState(e,i)){
var o=this._processLabelText(t,e,i,this.elementOptions.label)
;this.fontOptions.minWdt>0&&o.width<this.fontOptions.minWdt&&(o.width=this.fontOptions.minWdt),
this.size.labelHeight=o.height,
this.fontOptions.minHgt>0&&o.height<this.fontOptions.minHgt&&(o.height=this.fontOptions.minHgt),
this.lines=o.lines,
this.lineCount=o.lines.length,this.size.width=o.width,this.size.height=o.height,
this.selectedState=e,
this.hoverState=i,this.labelDirty=!1}}},{
key:"visible",value:function(){
return 0!==this.size.width&&0!==this.size.height&&void 0!==this.elementOptions.label&&!(this.fontOptions.size*this.body.view.scale<this.elementOptions.scaling.label.drawThreshold-1)
}}],[{key:"parseFontString",value:function(t,e){
if(!e||"string"!=typeof e)return!1
;var i=e.split(" ")
;return t.size=+i[0].replace("px",""),t.face=i[1],t.color=i[2],
!0}}]),t
}(),Nd=It("Reflect","construct"),Ad=s((function(){
function t(){}
return!(Nd((function(){}),[],t)instanceof t)
})),jd=!s((function(){Nd((function(){}))
})),Rd=Ad||jd;q({target:"Reflect",stat:!0,
forced:Rd,sham:Rd},{construct:function(t,e){
N(t),j(e)
;var i=arguments.length<3?t:N(arguments[2])
;if(jd&&!Ad)return Nd(t,e,i);if(t==i){
switch(e.length){case 0:return new t;case 1:
return new t(e[0]);case 2:return new t(e[0],e[1])
;case 3:return new t(e[0],e[1],e[2]);case 4:
return new t(e[0],e[1],e[2],e[3])}var o=[null]
;return o.push.apply(o,e),new(G.apply(t,o))}
var n=i.prototype,r=re(m(n)?n:Object.prototype),s=Function.apply.call(t,r,e)
;return m(s)?s:r}})
;var Ld=F.Reflect.construct,Hd=bo;q({
target:"Object",stat:!0},{setPrototypeOf:Fi})
;var Wd=F.Object.setPrototypeOf,Vd=o((function(t){
function e(i,o){
return t.exports=e=Wd||function(t,e){
return t.__proto__=e,t},e(i,o)}t.exports=e
})),qd=function(t,e){
if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
;t.prototype=Hd(e&&e.prototype,{constructor:{
value:t,writable:!0,configurable:!0}}),e&&Vd(t,e)
},Ud=function(t){
if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
;return t},Yd=function(t,e){
return!e||"object"!==lr(e)&&"function"!=typeof e?Ud(t):e
},Xd=vn,Gd=o((function(t){function e(i){
return t.exports=e=Wd?Xd:function(t){
return t.__proto__||Xd(t)},e(i)}t.exports=e}));q({
target:"Array",proto:!0},{fill:function(t){
for(var e=vt(this),i=ot(e.length),o=arguments.length,n=st(o>1?arguments[1]:void 0,i),r=o>2?arguments[2]:void 0,s=void 0===r?i:st(r,i);s>n;)e[n++]=t
;return e}})
;var Kd=K("Array").fill,$d=Array.prototype,Qd=function(t){
var e=t.fill
;return t===$d||t instanceof Array&&e===$d.fill?Kd:e
},Zd=function(){function t(e,i,o){
Gh(this,t),this.body=i,this.labelModule=o,this.setOptions(e),
this.top=void 0,this.left=void 0,
this.height=void 0,this.width=void 0,this.radius=void 0,
this.margin=void 0,this.refreshNeeded=!0,
this.boundingBox={top:0,left:0,right:0,bottom:0}}
return $h(t,[{key:"setOptions",value:function(t){
this.options=t}},{key:"_setMargins",
value:function(t){
this.margin={},this.options.margin&&("object"==lr(this.options.margin)?(this.margin.top=this.options.margin.top,
this.margin.right=this.options.margin.right,
this.margin.bottom=this.options.margin.bottom,
this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,
this.margin.right=this.options.margin,
this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),
t.adjustSizes(this.margin)}},{
key:"_distanceToBorder",value:function(t,e){
var i=this.options.borderWidth
;return t&&this.resize(t),Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i
}},{key:"enableShadow",value:function(t,e){
e.shadow&&(t.shadowColor=e.shadowColor,
t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,
t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",
value:function(t,e){
e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,
t.shadowOffsetY=0)}},{key:"enableBorderDashes",
value:function(t,e){
if(!1!==e.borderDashes)if(void 0!==t.setLineDash){
var i=e.borderDashes
;!0===i&&(i=[5,15]),t.setLineDash(i)
}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),
this.options.shapeProperties.borderDashes=!1,
e.borderDashes=!1}},{key:"disableBorderDashes",
value:function(t,e){
!1!==e.borderDashes&&(void 0!==t.setLineDash?t.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),
this.options.shapeProperties.borderDashes=!1,
e.borderDashes=!1))}},{key:"needsRefresh",
value:function(t,e){
return!0===this.refreshNeeded?(this.refreshNeeded=!1,!0):void 0===this.width||this.labelModule.differentState(t,e)
}},{key:"initContextForDraw",value:function(t,e){
var i=e.borderWidth/this.body.view.scale
;t.lineWidth=Math.min(this.width,i),t.strokeStyle=e.borderColor,
t.fillStyle=e.color}},{key:"performStroke",
value:function(t,e){
var i=e.borderWidth/this.body.view.scale
;t.save(),i>0&&(this.enableBorderDashes(t,e),
t.stroke(),this.disableBorderDashes(t,e)),
t.restore()}},{key:"performFill",
value:function(t,e){
t.save(),t.fillStyle=e.color,this.enableShadow(t,e),Qd(t).call(t),
this.disableShadow(t,e),
t.restore(),this.performStroke(t,e)}},{
key:"_addBoundingBoxMargin",value:function(t){
this.boundingBox.left-=t,this.boundingBox.top-=t,
this.boundingBox.bottom+=t,this.boundingBox.right+=t
}},{key:"_updateBoundingBox",
value:function(t,e,i,o,n){
void 0!==i&&this.resize(i,o,n),this.left=t-this.width/2,
this.top=e-this.height/2,
this.boundingBox.left=this.left,this.boundingBox.top=this.top,
this.boundingBox.bottom=this.top+this.height,
this.boundingBox.right=this.left+this.width}},{
key:"updateBoundingBox",value:function(t,e,i,o,n){
this._updateBoundingBox(t,e,i,o,n)}},{
key:"getDimensionsFromLabel",
value:function(t,e,i){
this.textSize=this.labelModule.getTextSize(t,e,i)
;var o=this.textSize.width,n=this.textSize.height
;return 0===o&&(o=14,n=14),{width:o,height:n}}
}]),t}();function Jd(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var tl=function(t){qd(i,t);var e=Jd(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n))._setMargins(n),
r}return $h(i,[{key:"resize",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover
;if(this.needsRefresh(e,i)){
var o=this.getDimensionsFromLabel(t,e,i)
;this.width=o.width+this.margin.right+this.margin.left,
this.height=o.height+this.margin.top+this.margin.bottom,
this.radius=this.width/2}}},{key:"draw",
value:function(t,e,i,o,n,r){
this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,
this.initContextForDraw(t,r),
kt(t,this.left,this.top,this.width,this.height,r.borderRadius),
this.performFill(t,r),
this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)
}},{key:"updateBoundingBox",
value:function(t,e,i,o,n){
this._updateBoundingBox(t,e,i,o,n)
;var r=this.options.shapeProperties.borderRadius
;this._addBoundingBoxMargin(r)}},{
key:"distanceToBorder",value:function(t,e){
t&&this.resize(t);var i=this.options.borderWidth
;return Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i
}}]),i}(Zd);function el(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var il=function(t){qd(i,t);var e=el(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n)).labelOffset=0,
r.selected=!1,r}return $h(i,[{key:"setOptions",
value:function(t,e,i){
this.options=t,void 0===e&&void 0===i||this.setImages(e,i)
}},{key:"setImages",value:function(t,e){
e&&this.selected?(this.imageObj=e,this.imageObjAlt=t):(this.imageObj=t,
this.imageObjAlt=e)}},{key:"switchImages",
value:function(t){
var e=t&&!this.selected||!t&&this.selected
;if(this.selected=t,void 0!==this.imageObjAlt&&e){
var i=this.imageObj
;this.imageObj=this.imageObjAlt,this.imageObjAlt=i
}}},{key:"_getImagePadding",value:function(){
var t={top:0,right:0,bottom:0,left:0}
;if(this.options.imagePadding){
var e=this.options.imagePadding
;"object"==lr(e)?(t.top=e.top,t.right=e.right,t.bottom=e.bottom,
t.left=e.left):(t.top=e,
t.right=e,t.bottom=e,t.left=e)}return t}},{
key:"_resizeImage",value:function(){var t,e
;if(!1===this.options.shapeProperties.useImageSize){
var i=1,o=1
;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?i=this.imageObj.width/this.imageObj.height:o=this.imageObj.height/this.imageObj.width),
t=2*this.options.size*i,e=2*this.options.size*o
}else{var n=this._getImagePadding()
;t=this.imageObj.width+n.left+n.right,e=this.imageObj.height+n.top+n.bottom
}
this.width=t,this.height=e,this.radius=.5*this.width
}},{key:"_drawRawCircle",value:function(t,e,i,o){
this.initContextForDraw(t,o),wt(t,e,i,o.size),
this.performFill(t,o)}},{
key:"_drawImageAtPosition",value:function(t,e){
if(0!=this.imageObj.width){
t.globalAlpha=void 0!==e.opacity?e.opacity:1,this.enableShadow(t,e)
;var i=1
;!0===this.options.shapeProperties.interpolation&&(i=this.imageObj.width/this.width/this.body.view.scale)
;var o=this._getImagePadding(),n=this.left+o.left,r=this.top+o.top,s=this.width-o.left-o.right,a=this.height-o.top-o.bottom
;this.imageObj.drawImageAtPosition(t,i,n,r,s,a),
this.disableShadow(t,e)}}},{key:"_drawImageLabel",
value:function(t,e,i,o,n){var r=0
;if(void 0!==this.height){r=.5*this.height
;var s=this.labelModule.getTextSize(t,o,n)
;s.lineCount>=1&&(r+=s.height/2)}var a=i+r
;this.options.label&&(this.labelOffset=r),
this.labelModule.draw(t,e,a,o,n,"hanging")}}]),i
}(Zd);function ol(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var nl=function(t){qd(i,t);var e=ol(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n))._setMargins(n),
r}return $h(i,[{key:"resize",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover
;if(this.needsRefresh(e,i)){
var o=this.getDimensionsFromLabel(t,e,i),n=Math.max(o.width+this.margin.right+this.margin.left,o.height+this.margin.top+this.margin.bottom)
;this.options.size=n/2,
this.width=n,this.height=n,this.radius=this.width/2
}}},{key:"draw",value:function(t,e,i,o,n,r){
this.resize(t,o,n),this.left=e-this.width/2,
this.top=i-this.height/2,this._drawRawCircle(t,e,i,r),
this.updateBoundingBox(e,i),
this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,i,o,n)
}},{key:"updateBoundingBox",value:function(t,e){
this.boundingBox.top=e-this.options.size,
this.boundingBox.left=t-this.options.size,
this.boundingBox.right=t+this.options.size,
this.boundingBox.bottom=e+this.options.size}},{
key:"distanceToBorder",value:function(t,e){
return t&&this.resize(t),.5*this.width}}]),i}(il)
;function rl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var sl=function(t){qd(i,t);var e=rl(i)
;function i(t,o,n,r,s){var a
;return Gh(this,i),(a=e.call(this,t,o,n)).setImages(r,s),
a}return $h(i,[{key:"resize",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover
;if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height){
var n=2*this.options.size
;return this.width=n,this.height=n,void(this.radius=.5*this.width)
}this.needsRefresh(e,i)&&this._resizeImage()}},{
key:"draw",value:function(t,e,i,o,n,r){
this.switchImages(o),this.resize();var s=e,a=i
;"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=e,
this.top=i,
s+=this.width/2,a+=this.height/2):(this.left=e-this.width/2,this.top=i-this.height/2),
this._drawRawCircle(t,s,a,r),
t.save(),t.clip(),this._drawImageAtPosition(t,r),t.restore(),
this._drawImageLabel(t,s,a,o,n),
this.updateBoundingBox(e,i)}},{
key:"updateBoundingBox",value:function(t,e){
"top-left"===this.options.shapeProperties.coordinateOrigin?(this.boundingBox.top=e,
this.boundingBox.left=t,
this.boundingBox.right=t+2*this.options.size,this.boundingBox.bottom=e+2*this.options.size):(this.boundingBox.top=e-this.options.size,
this.boundingBox.left=t-this.options.size,
this.boundingBox.right=t+this.options.size,
this.boundingBox.bottom=e+this.options.size),
this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)
}},{key:"distanceToBorder",value:function(t,e){
return t&&this.resize(t),.5*this.width}}]),i}(il)
;function al(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var hl=function(t){qd(i,t);var e=al(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"resize",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{
size:this.options.size}
;if(this.needsRefresh(e,i)){var n,r
;this.labelModule.getTextSize(t,e,i)
;var s=2*o.size
;this.width=null!==(n=this.customSizeWidth)&&void 0!==n?n:s,this.height=null!==(r=this.customSizeHeight)&&void 0!==r?r:s,
this.radius=.5*this.width}}},{key:"_drawShape",
value:function(t,e,i,o,n,r,s,a){var h,d=this
;return this.resize(t,r,s,a),this.left=o-this.width/2,
this.top=n-this.height/2,this.initContextForDraw(t,a),
(h=e,Object.prototype.hasOwnProperty.call(Et,h)?Et[h]:function(t){
for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o]
;CanvasRenderingContext2D.prototype[h].call(t,i)
})(t,o,n,a.size),this.performFill(t,a),
void 0!==this.options.icon&&void 0!==this.options.icon.code&&(t.font=(r?"bold ":"")+this.height/2+"px "+(this.options.icon.face||"FontAwesome"),
t.fillStyle=this.options.icon.color||"black",
t.textAlign="center",t.textBaseline="middle",
t.fillText(this.options.icon.code,o,n)),{
drawExternalLabel:function(){
if(void 0!==d.options.label){
d.labelModule.calculateLabelSize(t,r,s,o,n,"hanging")
;var e=n+.5*d.height+.5*d.labelModule.size.height
;d.labelModule.draw(t,o,e,r,s,"hanging")}
d.updateBoundingBox(o,n)}}}},{
key:"updateBoundingBox",value:function(t,e){
this.boundingBox.top=e-this.options.size,
this.boundingBox.left=t-this.options.size,
this.boundingBox.right=t+this.options.size,
this.boundingBox.bottom=e+this.options.size,
void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height))
}}]),i}(Zd);function dl(t,e){var i=er(t);if(Ei){
var o=Ei(t);e&&(o=fn(o).call(o,(function(e){
return Wt(t,e).enumerable}))),i.push.apply(i,o)}
return i}function ll(t){
for(var e=1;e<arguments.length;e++){
var i,o=null!=arguments[e]?arguments[e]:{}
;if(e%2)Vo(i=dl(Object(o),!0)).call(i,(function(e){
xo(t,e,o[e])}));else if(At)Dt(t,At(o));else{var n
;Vo(n=dl(Object(o))).call(n,(function(e){
Tt(t,e,Wt(o,e))}))}}return t}function cl(t){
var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var ul=function(t){qd(i,t);var e=cl(i)
;function i(t,o,n,r){var s
;return Gh(this,i),(s=e.call(this,t,o,n,r)).ctxRenderer=r,
s}return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
this.resize(t,o,n,r),this.left=e-this.width/2,this.top=i-this.height/2,
t.save();var s=this.ctxRenderer({ctx:t,
id:this.options.id,x:e,y:i,state:{selected:o,
hover:n},style:ll({},r),label:this.options.label})
;if(null!=s.drawNode&&s.drawNode(),
t.restore(),s.drawExternalLabel){
var a=s.drawExternalLabel
;s.drawExternalLabel=function(){
t.save(),a(),t.restore()}}
return s.nodeDimensions&&(this.customSizeWidth=s.nodeDimensions.width,
this.customSizeHeight=s.nodeDimensions.height),s}
},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(hl)
;function fl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var pl=function(t){qd(i,t);var e=fl(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n))._setMargins(n),
r}return $h(i,[{key:"resize",
value:function(t,e,i){if(this.needsRefresh(e,i)){
var o=this.getDimensionsFromLabel(t,e,i).width+this.margin.right+this.margin.left
;this.width=o,
this.height=o,this.radius=this.width/2}}},{
key:"draw",value:function(t,e,i,o,n,r){
this.resize(t,o,n),this.left=e-this.width/2,
this.top=i-this.height/2,this.initContextForDraw(t,r),
xt(t,e-this.width/2,i-this.height/2,this.width,this.height),
this.performFill(t,r),
this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)
}},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(Zd)
;function vl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var gl=function(t){qd(i,t);var e=vl(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
return this._drawShape(t,"diamond",4,e,i,o,n,r)}
},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(hl)
;function yl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var ml=function(t){qd(i,t);var e=yl(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
return this._drawShape(t,"circle",2,e,i,o,n,r)}},{
key:"distanceToBorder",value:function(t,e){
return t&&this.resize(t),this.options.size}}]),i
}(hl);function bl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var wl=function(t){qd(i,t);var e=bl(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"resize",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover
;if(this.needsRefresh(e,i)){
var o=this.getDimensionsFromLabel(t,e,i)
;this.height=2*o.height,this.width=o.width+o.height,
this.radius=.5*this.width}}},{key:"draw",
value:function(t,e,i,o,n,r){
this.resize(t,o,n),this.left=e-.5*this.width,this.top=i-.5*this.height,
this.initContextForDraw(t,r),
_t(t,this.left,this.top,this.width,this.height),this.performFill(t,r),
this.updateBoundingBox(e,i,t,o,n),
this.labelModule.draw(t,e,i,o,n)}},{
key:"distanceToBorder",value:function(t,e){
t&&this.resize(t)
;var i=.5*this.width,o=.5*this.height,n=Math.sin(e)*i,r=Math.cos(e)*o
;return i*o/Math.sqrt(n*n+r*r)}}]),i}(Zd)
;function kl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var _l=function(t){qd(i,t);var e=kl(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n))._setMargins(n),
r}return $h(i,[{key:"resize",
value:function(t,e,i){
this.needsRefresh(e,i)&&(this.iconSize={
width:Number(this.options.icon.size),
height:Number(this.options.icon.size)
},this.width=this.iconSize.width+this.margin.right+this.margin.left,
this.height=this.iconSize.height+this.margin.top+this.margin.bottom,
this.radius=.5*this.width)}},{key:"draw",
value:function(t,e,i,o,n,r){var s=this
;return this.resize(t,o,n),this.options.icon.size=this.options.icon.size||50,
this.left=e-this.width/2,
this.top=i-this.height/2,this._icon(t,e,i,o,n,r),{
drawExternalLabel:function(){
void 0!==s.options.label&&s.labelModule.draw(t,s.left+s.iconSize.width/2+s.margin.left,i+s.height/2+5,o),
s.updateBoundingBox(e,i)}}}},{
key:"updateBoundingBox",value:function(t,e){
this.boundingBox.top=e-.5*this.options.icon.size,
this.boundingBox.left=t-.5*this.options.icon.size,
this.boundingBox.right=t+.5*this.options.icon.size,
this.boundingBox.bottom=e+.5*this.options.icon.size,
void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5))
}},{key:"_icon",value:function(t,e,i,o,n,r){
var s=Number(this.options.icon.size)
;void 0!==this.options.icon.code?(t.font=[null!=this.options.icon.weight?this.options.icon.weight:o?"bold":"",(null!=this.options.icon.weight&&o?5:0)+s+"px",this.options.icon.face].join(" "),
t.fillStyle=this.options.icon.color||"black",
t.textAlign="center",t.textBaseline="middle",
this.enableShadow(t,r),t.fillText(this.options.icon.code,e,i),
this.disableShadow(t,r)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")
}},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(Zd)
;function xl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Ol=function(t){qd(i,t);var e=xl(i)
;function i(t,o,n,r,s){var a
;return Gh(this,i),(a=e.call(this,t,o,n)).setImages(r,s),
a}return $h(i,[{key:"resize",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover
;if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height){
var n=2*this.options.size
;return this.width=n,void(this.height=n)}
this.needsRefresh(e,i)&&this._resizeImage()}},{
key:"draw",value:function(t,e,i,o,n,r){
t.save(),this.switchImages(o),this.resize()
;var s=e,a=i
;if("top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=e,
this.top=i,
s+=this.width/2,a+=this.height/2):(this.left=e-this.width/2,this.top=i-this.height/2),
!0===this.options.shapeProperties.useBorderWithImage){
var h=this.options.borderWidth,d=this.options.borderWidthSelected||2*this.options.borderWidth,l=(o?d:h)/this.body.view.scale
;t.lineWidth=Math.min(this.width,l),t.beginPath()
;var c=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,u=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background
;void 0!==r.opacity&&(c=Wr(c,r.opacity),
u=Wr(u,r.opacity)),t.strokeStyle=c,t.fillStyle=u,
t.rect(this.left-.5*t.lineWidth,this.top-.5*t.lineWidth,this.width+t.lineWidth,this.height+t.lineWidth),
Qd(t).call(t),
this.performStroke(t,r),t.closePath()}
this._drawImageAtPosition(t,r),this._drawImageLabel(t,s,a,o,n),
this.updateBoundingBox(e,i),t.restore()}},{
key:"updateBoundingBox",value:function(t,e){
this.resize(),"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=t,
this.top=e):(this.left=t-this.width/2,
this.top=e-this.height/2),this.boundingBox.left=this.left,
this.boundingBox.top=this.top,
this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width,
void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))
}},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(il)
;function El(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Cl=function(t){qd(i,t);var e=El(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
return this._drawShape(t,"square",2,e,i,o,n,r)}},{
key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(hl)
;function Sl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Tl=function(t){qd(i,t);var e=Sl(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
return this._drawShape(t,"hexagon",4,e,i,o,n,r)}
},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(hl)
;function Ml(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Dl=function(t){qd(i,t);var e=Ml(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
return this._drawShape(t,"star",4,e,i,o,n,r)}},{
key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(hl)
;function Pl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Il=function(t){qd(i,t);var e=Pl(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n))._setMargins(n),
r}return $h(i,[{key:"resize",
value:function(t,e,i){
this.needsRefresh(e,i)&&(this.textSize=this.labelModule.getTextSize(t,e,i),
this.width=this.textSize.width+this.margin.right+this.margin.left,
this.height=this.textSize.height+this.margin.top+this.margin.bottom,
this.radius=.5*this.width)}},{key:"draw",
value:function(t,e,i,o,n,r){
this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,
this.enableShadow(t,r),
this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n),
this.disableShadow(t,r),
this.updateBoundingBox(e,i,t,o,n)}},{
key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(Zd)
;function Bl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var zl=function(t){qd(i,t);var e=Bl(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
return this._drawShape(t,"triangle",3,e,i,o,n,r)}
},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i}(hl)
;function Fl(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Nl=function(t){qd(i,t);var e=Fl(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"draw",
value:function(t,e,i,o,n,r){
return this._drawShape(t,"triangleDown",3,e,i,o,n,r)
}},{key:"distanceToBorder",value:function(t,e){
return this._distanceToBorder(t,e)}}]),i
}(hl),Al=It("JSON","stringify"),jl=/[\uD800-\uDFFF]/g,Rl=/^[\uD800-\uDBFF]$/,Ll=/^[\uDC00-\uDFFF]$/,Hl=function(t,e,i){
var o=i.charAt(e-1),n=i.charAt(e+1)
;return Rl.test(t)&&!Ll.test(n)||Ll.test(t)&&!Rl.test(o)?"\\u"+t.charCodeAt(0).toString(16):t
},Wl=s((function(){
return'"\\udf06\\ud834"'!==Al("\udf06\ud834")||'"\\udead"'!==Al("\udead")
}));Al&&q({target:"JSON",stat:!0,forced:Wl},{
stringify:function(t,e,i){
var o=Al.apply(null,arguments)
;return"string"==typeof o?o.replace(jl,Hl):o}
}),F.JSON||(F.JSON={stringify:JSON.stringify})
;var Vl,ql=function(t,e,i){
return F.JSON.stringify.apply(null,arguments)
},Ul=!1,Yl="background: #FFeeee; color: #dd0000",Xl=function(){
function t(){Gh(this,t)}return $h(t,null,[{
key:"validate",value:function(e,i,o){Ul=!1,Vl=i
;var n=i
;return void 0!==o&&(n=i[o]),t.parse(e,n,[]),Ul}
},{key:"parse",value:function(e,i,o){
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.check(n,e,i,o)
}},{key:"check",value:function(e,i,o,n){
if(void 0!==o[e]||void 0!==o.__any__){var r=e,s=!0
;void 0===o[e]&&void 0!==o.__any__&&(r="__any__",
s="object"===t.getType(i[e]));var a=o[r]
;s&&void 0!==a.__type__&&(a=a.__type__),
t.checkFields(e,i,o,r,a,n)
}else t.getSuggestion(e,o,n)}},{key:"checkFields",
value:function(e,i,o,n,r,s){var a=function(i){
console.log("%c"+i+t.printLocation(s,e),Yl)
},h=t.getType(i[e]),d=r[h]
;void 0!==d?"array"===t.getType(d)&&-1===On(d).call(d,i[e])?(a('Invalid option detected in "'+e+'". Allowed values are:'+t.print(d)+' not "'+i[e]+'". '),
Ul=!0):"object"===h&&"__any__"!==n&&(s=Ar(s,e),
t.parse(i[e],o[n],s)):void 0===r.any&&(a('Invalid type received for "'+e+'". Expected: '+t.print(er(r))+". Received ["+h+'] "'+i[e]+'"'),
Ul=!0)}},{key:"getType",value:function(t){
var e=lr(t)
;return"object"===e?null===t?"null":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":hr(t)?"array":t instanceof Date?"date":void 0!==t.nodeType?"dom":!0===t._isAMomentObject?"moment":"object":"number"===e?"number":"boolean"===e?"boolean":"string"===e?"string":void 0===e?"undefined":e
}},{key:"getSuggestion",value:function(e,i,o){
var n,r=t.findInOptions(e,i,o,!1),s=t.findInOptions(e,Vl,[],!0)
;n=void 0!==r.indexMatch?" in "+t.printLocation(r.path,e,"")+'Perhaps it was incomplete? Did you mean: "'+r.indexMatch+'"?\n\n':s.distance<=4&&r.distance>s.distance?" in "+t.printLocation(r.path,e,"")+"Perhaps it was misplaced? Matching option found at: "+t.printLocation(s.path,s.closestMatch,""):r.distance<=8?'. Did you mean "'+r.closestMatch+'"?'+t.printLocation(r.path,e):". Did you mean one of these: "+t.print(er(i))+t.printLocation(o,e),
console.log('%cUnknown option detected: "'+e+'"'+n,Yl),
Ul=!0}},{key:"findInOptions",
value:function(e,i,o){
var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=1e9,s="",a=[],h=e.toLowerCase(),d=void 0
;for(var l in i){var c=void 0
;if(void 0!==i[l].__type__&&!0===n){
var u=t.findInOptions(e,i[l],Ar(o,l))
;r>u.distance&&(s=u.closestMatch,a=u.path,r=u.distance,
d=u.indexMatch)}else{var f
;-1!==On(f=l.toLowerCase()).call(f,h)&&(d=l),r>(c=t.levenshteinDistance(e,l))&&(s=l,
a=jr(o),r=c)}}return{closestMatch:s,path:a,
distance:r,indexMatch:d}}},{key:"printLocation",
value:function(t,e){
for(var o="\n\n"+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Problem value found at: \n")+"options = {\n",n=0;n<t.length;n++){
for(var r=0;r<n+1;r++)o+="  ";o+=t[n]+": {\n"}
for(var s=0;s<t.length+1;s++)o+="  ";o+=e+"\n"
;for(var a=0;a<t.length+1;a++){
for(var h=0;h<t.length-a;h++)o+="  ";o+="}\n"}
return o+"\n\n"}},{key:"print",value:function(t){
return ql(t).replace(/(\")|(\[)|(\])|(,"__type__")/g,"").replace(/(\,)/g,", ")
}},{key:"levenshteinDistance",value:function(t,e){
if(0===t.length)return e.length
;if(0===e.length)return t.length;var i,o,n=[]
;for(i=0;i<=e.length;i++)n[i]=[i]
;for(o=0;o<=t.length;o++)n[0][o]=o
;for(i=1;i<=e.length;i++)for(o=1;o<=t.length;o++)e.charAt(i-1)==t.charAt(o-1)?n[i][o]=n[i-1][o-1]:n[i][o]=Math.min(n[i-1][o-1]+1,Math.min(n[i][o-1]+1,n[i-1][o]+1))
;return n[e.length][t.length]}}]),t}()
;function Gl(t,e){var i=er(t);if(Ei){var o=Ei(t)
;e&&(o=fn(o).call(o,(function(e){
return Wt(t,e).enumerable}))),i.push.apply(i,o)}
return i}function Kl(t){
for(var e=1;e<arguments.length;e++){
var i,o=null!=arguments[e]?arguments[e]:{}
;if(e%2)Vo(i=Gl(Object(o),!0)).call(i,(function(e){
xo(t,e,o[e])}));else if(At)Dt(t,At(o));else{var n
;Vo(n=Gl(Object(o))).call(n,(function(e){
Tt(t,e,Wt(o,e))}))}}return t}var $l=function(){
function t(e,i,o,n,r,s){
Gh(this,t),this.options=Qr(r),this.globalOptions=r,this.defaultOptions=s,
this.body=i,
this.edges=[],this.id=void 0,this.imagelist=o,this.grouplist=n,this.x=void 0,
this.y=void 0,
this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,
this.predefinedPosition=!1,
this.selected=!1,this.hover=!1,this.labelModule=new Fd(this.body,this.options,!1),
this.setOptions(e)}return $h(t,[{key:"attachEdge",
value:function(t){var e
;-1===On(e=this.edges).call(e,t)&&this.edges.push(t)
}},{key:"detachEdge",value:function(t){
var e,i,o=On(e=this.edges).call(e,t)
;-1!=o&&ds(i=this.edges).call(i,o,1)}},{
key:"setOptions",value:function(e){
var i=this.options.shape;if(e){
if(void 0!==e.color&&(this._localColor=e.color),void 0!==e.id&&(this.id=e.id),
void 0===this.id)throw new Error("Node must have an id")
;t.checkMass(e,this.id),
void 0!==e.x&&(null===e.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=Go(e.x),
this.predefinedPosition=!0)),
void 0!==e.y&&(null===e.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=Go(e.y),
this.predefinedPosition=!0)),
void 0!==e.size&&(this.baseSize=e.size),void 0!==e.value&&(e.value=kd(e.value)),
t.parseOptions(this.options,e,!0,this.globalOptions,this.grouplist)
;var o=[e,this.options,this.defaultOptions]
;return this.chooser=_d("node",o),this._load_images(),
this.updateLabelModule(e),
void 0!==e.opacity&&t.checkOpacity(e.opacity)&&(this.options.opacity=e.opacity),
this.updateShape(i),
void 0!==e.hidden||void 0!==e.physics}}},{
key:"_load_images",value:function(){
if(("circularImage"===this.options.shape||"image"===this.options.shape)&&void 0===this.options.image)throw new Error("Option image must be defined for node type '"+this.options.shape+"'")
;if(void 0!==this.options.image){
if(void 0===this.imagelist)throw new Error("Internal Error: No images provided")
;if("string"==typeof this.options.image)this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{
if(void 0===this.options.image.unselected)throw new Error("No unselected image provided")
;this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),
void 0!==this.options.image.selected?this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id):this.imageObjAlt=void 0
}}}},{key:"getFormattingValues",value:function(){
var t={color:this.options.color.background,
opacity:this.options.opacity,
borderWidth:this.options.borderWidth,
borderColor:this.options.color.border,
size:this.options.size,
borderDashes:this.options.shapeProperties.borderDashes,
borderRadius:this.options.shapeProperties.borderRadius,
shadow:this.options.shadow.enabled,
shadowColor:this.options.shadow.color,
shadowSize:this.options.shadow.size,
shadowX:this.options.shadow.x,
shadowY:this.options.shadow.y}
;if(this.selected||this.hover?!0===this.chooser?this.selected?(t.borderWidth*=2,
t.color=this.options.color.highlight.background,
t.borderColor=this.options.color.highlight.border,
t.shadow=this.options.shadow.enabled):this.hover&&(t.color=this.options.color.hover.background,
t.borderColor=this.options.color.hover.border,
t.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(t,this.options.id,this.selected,this.hover),
!1===t.shadow&&(t.shadowColor===this.options.shadow.color&&t.shadowSize===this.options.shadow.size&&t.shadowX===this.options.shadow.x&&t.shadowY===this.options.shadow.y||(t.shadow=!0))):t.shadow=this.options.shadow.enabled,
void 0!==this.options.opacity){
var e=this.options.opacity
;t.borderColor=Wr(t.borderColor,e),t.color=Wr(t.color,e),
t.shadowColor=Wr(t.shadowColor,e)}return t}},{
key:"updateLabelModule",value:function(e){
void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),
t.updateGroupOptions(this.options,Kl(Kl({},e),{},{
color:e&&e.color||this._localColor||void 0
}),this.grouplist)
;var i=this.grouplist.get(this.options.group,!1),o=[e,this.options,i,this.globalOptions,this.defaultOptions]
;this.labelModule.update(this.options,o),
void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)
}},{key:"updateShape",value:function(t){
if(t===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){
case"box":
this.shape=new tl(this.options,this.body,this.labelModule)
;break;case"circle":
this.shape=new nl(this.options,this.body,this.labelModule)
;break;case"circularImage":
this.shape=new sl(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt)
;break;case"custom":
this.shape=new ul(this.options,this.body,this.labelModule,this.options.ctxRenderer)
;break;case"database":
this.shape=new pl(this.options,this.body,this.labelModule)
;break;case"diamond":
this.shape=new gl(this.options,this.body,this.labelModule)
;break;case"dot":
this.shape=new ml(this.options,this.body,this.labelModule)
;break;case"ellipse":
this.shape=new wl(this.options,this.body,this.labelModule)
;break;case"icon":
this.shape=new _l(this.options,this.body,this.labelModule)
;break;case"image":
this.shape=new Ol(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt)
;break;case"square":
this.shape=new Cl(this.options,this.body,this.labelModule)
;break;case"hexagon":
this.shape=new Tl(this.options,this.body,this.labelModule)
;break;case"star":
this.shape=new Dl(this.options,this.body,this.labelModule)
;break;case"text":
this.shape=new Il(this.options,this.body,this.labelModule)
;break;case"triangle":
this.shape=new zl(this.options,this.body,this.labelModule)
;break;case"triangleDown":
this.shape=new Nl(this.options,this.body,this.labelModule)
;break;default:
this.shape=new wl(this.options,this.body,this.labelModule)
}this.needsRefresh()}},{key:"select",
value:function(){
this.selected=!0,this.needsRefresh()}},{
key:"unselect",value:function(){
this.selected=!1,this.needsRefresh()}},{
key:"needsRefresh",value:function(){
this.shape.refreshNeeded=!0}},{key:"getTitle",
value:function(){return this.options.title}},{
key:"distanceToBorder",value:function(t,e){
return this.shape.distanceToBorder(t,e)}},{
key:"isFixed",value:function(){
return this.options.fixed.x&&this.options.fixed.y}
},{key:"isSelected",value:function(){
return this.selected}},{key:"getValue",
value:function(){return this.options.value}},{
key:"getLabelSize",value:function(){
return this.labelModule.size()}},{
key:"setValueRange",value:function(t,e,i){
if(void 0!==this.options.value){
var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min
;if(!0===this.options.scaling.label.enabled){
var r=this.options.scaling.label.max-this.options.scaling.label.min
;this.options.font.size=this.options.scaling.label.min+o*r
}this.options.size=this.options.scaling.min+o*n
}else this.options.size=this.baseSize,
this.options.font.size=this.baseFontSize
;this.updateLabelModule()}},{key:"draw",
value:function(t){var e=this.getFormattingValues()
;return this.shape.draw(t,this.x,this.y,this.selected,this.hover,e)||{}
}},{key:"updateBoundingBox",value:function(t){
this.shape.updateBoundingBox(this.x,this.y,t)}},{
key:"resize",value:function(t){
var e=this.getFormattingValues()
;this.shape.resize(t,this.selected,this.hover,e)}
},{key:"getItemsOnPoint",value:function(t){
var e=[]
;return this.labelModule.visible()&&xd(this.labelModule.getSize(),t)&&e.push({
nodeId:this.id,labelId:0
}),xd(this.shape.boundingBox,t)&&e.push({
nodeId:this.id}),e}},{key:"isOverlappingWith",
value:function(t){
return this.shape.left<t.right&&this.shape.left+this.shape.width>t.left&&this.shape.top<t.bottom&&this.shape.top+this.shape.height>t.top
}},{key:"isBoundingBoxOverlappingWith",
value:function(t){
return this.shape.boundingBox.left<t.right&&this.shape.boundingBox.right>t.left&&this.shape.boundingBox.top<t.bottom&&this.shape.boundingBox.bottom>t.top
}}],[{key:"checkOpacity",value:function(t){
return 0<=t&&t<=1}},{key:"checkCoordinateOrigin",
value:function(t){
return void 0===t||"center"===t||"top-left"===t}
},{key:"updateGroupOptions",value:function(e,i,o){
var n;if(void 0!==o){var r=e.group
;if(void 0!==i&&void 0!==i.group&&r!==i.group)throw new Error("updateGroupOptions: group values in options don't match.")
;if("number"==typeof r||"string"==typeof r&&""!=r){
var s=o.get(r)
;void 0!==s.opacity&&void 0===i.opacity&&(t.checkOpacity(s.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+s.opacity),
s.opacity=void 0))
;var a=fn(n=yd(i)).call(n,(function(t){
return null!=i[t]}))
;a.push("font"),Fr(a,e,s),e.color=qr(e.color)}}}
},{key:"parseOptions",value:function(e,i){
var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0
;if(Fr(["color","fixed","shadow"],e,i,o),
t.checkMass(i),void 0!==e.opacity&&(t.checkOpacity(e.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+e.opacity),
e.opacity=void 0)),
void 0!==i.opacity&&(t.checkOpacity(i.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+i.opacity),
i.opacity=void 0)),
i.shapeProperties&&!t.checkCoordinateOrigin(i.shapeProperties.coordinateOrigin)&&console.error("Invalid option for node coordinateOrigin, found: "+i.shapeProperties.coordinateOrigin),
Zr(e,i,"shadow",n),
void 0!==i.color&&null!==i.color){
var a=qr(i.color);Br(e.color,a)
}else!0===o&&null===i.color&&(e.color=Qr(n.color))
;void 0!==i.fixed&&null!==i.fixed&&("boolean"==typeof i.fixed?(e.fixed.x=i.fixed,
e.fixed.y=i.fixed):(void 0!==i.fixed.x&&"boolean"==typeof i.fixed.x&&(e.fixed.x=i.fixed.x),
void 0!==i.fixed.y&&"boolean"==typeof i.fixed.y&&(e.fixed.y=i.fixed.y))),
!0===o&&null===i.font&&(e.font=Qr(n.font)),
t.updateGroupOptions(e,i,r),void 0!==i.scaling&&Zr(e.scaling,i.scaling,"label",n.scaling)
}},{key:"checkMass",value:function(t,e){
if(void 0!==t.mass&&t.mass<=0){var i=""
;void 0!==e&&(i=" in node id: "+e),console.log("%cNegative or zero mass disallowed"+i+", setting mass to 1.",Yl),
t.mass=1}}}]),t}();function Ql(t,e){var i
;if(void 0===br||null==ro(t)){
if(hr(t)||(i=function(t,e){var i;if(t){
if("string"==typeof t)return Zl(t,e)
;var o=cr(i=Object.prototype.toString.call(t)).call(i,8,-1)
;return"Object"===o&&t.constructor&&(o=t.constructor.name),
"Map"===o||"Set"===o?yo(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Zl(t,e):void 0
}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i)
;var o=0,n=function(){};return{s:n,n:function(){
return o>=t.length?{done:!0}:{done:!1,value:t[o++]
}},e:function(t){throw t},f:n}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}var r,s=!0,a=!1;return{s:function(){i=no(t)},
n:function(){var t=i.next();return s=t.done,t},
e:function(t){a=!0,r=t},f:function(){try{
s||null==i.return||i.return()}finally{if(a)throw r
}}}}function Zl(t,e){
(null==e||e>t.length)&&(e=t.length)
;for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i]
;return o}var Jl=function(){function t(e,i,o,n){
var r,s=this
;if(Gh(this,t),this.body=e,this.images=i,this.groups=o,this.layoutEngine=n,
this.body.functions.createNode=Z(r=this.create).call(r,this),
this.nodesListeners={add:function(t,e){
s.add(e.items)},update:function(t,e){
s.update(e.items,e.data,e.oldData)},
remove:function(t,e){s.remove(e.items)}
},this.defaultOptions={borderWidth:1,
borderWidthSelected:2,brokenImage:void 0,color:{
border:"#2B7CE9",background:"#97C2FC",highlight:{
border:"#2B7CE9",background:"#D2E5FF"},hover:{
border:"#2B7CE9",background:"#D2E5FF"}},
opacity:void 0,fixed:{x:!1,y:!1},font:{
color:"#343434",size:14,face:"arial",
background:"none",strokeWidth:0,
strokeColor:"#ffffff",align:"center",vadjust:0,
multi:!1,bold:{mod:"bold"},boldital:{
mod:"bold italic"},ital:{mod:"italic"},mono:{
mod:"",size:15,face:"monospace",vadjust:2}},
group:void 0,hidden:!1,icon:{face:"FontAwesome",
code:void 0,size:50,color:"#2B7CE9"},image:void 0,
imagePadding:{top:0,right:0,bottom:0,left:0},
label:void 0,labelHighlightBold:!0,level:void 0,
margin:{top:5,right:5,bottom:5,left:5},mass:1,
physics:!0,scaling:{min:10,max:30,label:{
enabled:!1,min:14,max:30,maxVisible:30,
drawThreshold:5},
customScalingFunction:function(t,e,i,o){
if(e===t)return.5;var n=1/(e-t)
;return Math.max(0,(o-t)*n)}},shadow:{enabled:!1,
color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},
shape:"ellipse",shapeProperties:{borderDashes:!1,
borderRadius:6,interpolation:!0,useImageSize:!1,
useBorderWithImage:!1,coordinateOrigin:"center"},
size:25,title:void 0,value:void 0,x:void 0,
y:void 0
},this.defaultOptions.mass<=0)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative"
;this.options=Qr(this.defaultOptions),
this.bindEventListeners()}return $h(t,[{
key:"bindEventListeners",value:function(){
var t,e,i=this
;this.body.emitter.on("refreshNodes",Z(t=this.refresh).call(t,this)),
this.body.emitter.on("refresh",Z(e=this.refresh).call(e,this)),
this.body.emitter.on("destroy",(function(){
Lr(i.nodesListeners,(function(t,e){
i.body.data.nodes&&i.body.data.nodes.off(e,t)
})),delete i.body.functions.createNode,
delete i.nodesListeners.add,delete i.nodesListeners.update,
delete i.nodesListeners.remove,
delete i.nodesListeners}))}},{key:"setOptions",
value:function(t){if(void 0!==t){
if($l.parseOptions(this.options,t),void 0!==t.opacity&&(fd(t.opacity)||!ud(t.opacity)||t.opacity<0||t.opacity>1?console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+t.opacity):this.options.opacity=t.opacity),
void 0!==t.shape)for(var e in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,e)&&this.body.nodes[e].updateShape()
;if(void 0!==t.font||void 0!==t.widthConstraint||void 0!==t.heightConstraint)for(var i=0,o=er(this.body.nodes);i<o.length;i++){
var n=o[i]
;this.body.nodes[n].updateLabelModule(),this.body.nodes[n].needsRefresh()
}
if(void 0!==t.size)for(var r in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,r)&&this.body.nodes[r].needsRefresh()
;void 0===t.hidden&&void 0===t.physics||this.body.emitter.emit("_dataChanged")
}}},{key:"setData",value:function(t){
var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.body.data.nodes
;if(t instanceof e.DataSet||t instanceof e.DataView)this.body.data.nodes=t;else if(hr(t))this.body.data.nodes=new e.DataSet,
this.body.data.nodes.add(t);else{
if(t)throw new TypeError("Array or DataSet expected")
;this.body.data.nodes=new e.DataSet}
if(o&&Lr(this.nodesListeners,(function(t,e){
o.off(e,t)
})),this.body.nodes={},this.body.data.nodes){
var n=this;Lr(this.nodesListeners,(function(t,e){
n.body.data.nodes.on(e,t)}))
;var r=this.body.data.nodes.getIds()
;this.add(r,!0)}
!1===i&&this.body.emitter.emit("_dataChanged")}},{
key:"add",value:function(t){
for(var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[],n=0;n<t.length;n++){
e=t[n]
;var r=this.body.data.nodes.get(e),s=this.create(r)
;o.push(s),this.body.nodes[e]=s}
this.layoutEngine.positionInitially(o),!1===i&&this.body.emitter.emit("_dataChanged")
}},{key:"update",value:function(t,e,i){
for(var o=this.body.nodes,n=!1,r=0;r<t.length;r++){
var s=t[r],a=o[s],h=e[r]
;void 0!==a?a.setOptions(h)&&(n=!0):(n=!0,a=this.create(h),
o[s]=a)}
n||void 0===i||(n=dd(e).call(e,(function(t,e){
var o=i[e];return o&&o.level!==t.level
}))),!0===n?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")
}},{key:"remove",value:function(t){
for(var e=this.body.nodes,i=0;i<t.length;i++)delete e[t[i]]
;this.body.emitter.emit("_dataChanged")}},{
key:"create",value:function(t){
return new(arguments.length>1&&void 0!==arguments[1]?arguments[1]:$l)(t,this.body,this.images,this.groups,this.options,this.defaultOptions)
}},{key:"refresh",value:function(){
var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
;Lr(this.body.nodes,(function(i,o){
var n=t.body.data.nodes.get(o)
;void 0!==n&&(!0===e&&i.setOptions({x:null,y:null
}),i.setOptions({fixed:!1}),i.setOptions(n))}))}
},{key:"getPositions",value:function(t){var e={}
;if(void 0!==t){if(!0===hr(t)){
for(var i=0;i<t.length;i++)if(void 0!==this.body.nodes[t[i]]){
var o=this.body.nodes[t[i]];e[t[i]]={
x:Math.round(o.x),y:Math.round(o.y)}}
}else if(void 0!==this.body.nodes[t]){
var n=this.body.nodes[t];e[t]={x:Math.round(n.x),
y:Math.round(n.y)}}
}else for(var r=0;r<this.body.nodeIndices.length;r++){
var s=this.body.nodes[this.body.nodeIndices[r]]
;e[this.body.nodeIndices[r]]={x:Math.round(s.x),
y:Math.round(s.y)}}return e}},{key:"getPosition",
value:function(t){
if(null==t)throw new TypeError("No id was specified for getPosition method.")
;if(null==this.body.nodes[t])throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(t))
;return{x:Math.round(this.body.nodes[t].x),
y:Math.round(this.body.nodes[t].y)}}},{
key:"storePositions",value:function(){
var t,e=[],i=this.body.data.nodes.getDataSet(),o=Ql(i.get())
;try{for(o.s();!(t=o.n()).done;){
var n=t.value,r=n.id,s=this.body.nodes[r],a=Math.round(s.x),h=Math.round(s.y)
;n.x===a&&n.y===h||e.push({id:r,x:a,y:h})}
}catch(t){o.e(t)}finally{o.f()}i.update(e)}},{
key:"getBoundingBox",value:function(t){
if(void 0!==this.body.nodes[t])return this.body.nodes[t].shape.boundingBox
}},{key:"getConnectedNodes",value:function(t,e){
var i=[]
;if(void 0!==this.body.nodes[t])for(var o=this.body.nodes[t],n={},r=0;r<o.edges.length;r++){
var s=o.edges[r]
;"to"!==e&&s.toId==o.id?void 0===n[s.fromId]&&(i.push(s.fromId),
n[s.fromId]=!0):"from"!==e&&s.fromId==o.id&&void 0===n[s.toId]&&(i.push(s.toId),
n[s.toId]=!0)}return i}},{key:"getConnectedEdges",
value:function(t){var e=[]
;if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o=0;o<i.edges.length;o++)e.push(i.edges[o].id);else console.log("NodeId provided for getConnectedEdges does not exist. Provided: ",t)
;return e}},{key:"moveNode",value:function(t,e,i){
var o=this
;void 0!==this.body.nodes[t]?(this.body.nodes[t].x=Number(e),this.body.nodes[t].y=Number(i),
od((function(){
o.body.emitter.emit("startSimulation")
}),0)):console.log("Node id supplied to moveNode does not exist. Provided: ",t)
}}]),t}(),tc=Ht;q({target:"Reflect",stat:!0},{
get:function t(e,i){
var o,n,r=arguments.length<3?e:arguments[2]
;return j(e)===r?e[i]:(o=S.f(e,i))?k(o,"value")?o.value:void 0===o.get?void 0:o.get.call(r):m(n=Di(e))?t(n,i,r):void 0
}});var ec=F.Reflect.get,ic=function(t,e){
for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Gd(t)););
return t},oc=o((function(t){function e(i,o,n){
return"undefined"!=typeof Reflect&&ec?t.exports=e=ec:t.exports=e=function(t,_e4,i){
var o=ic(t,_e4);if(o){var n=tc(o,_e4)
;return n.get?n.get.call(i):n.value}},e(i,o,n||i)}
t.exports=e
})),nc=Math.hypot,rc=Math.abs,sc=Math.sqrt,ac=!!nc&&nc(1/0,NaN)!==1/0
;q({target:"Math",stat:!0,forced:ac},{
hypot:function(t,e){
for(var i,o,n=0,r=0,s=arguments.length,a=0;r<s;)a<(i=rc(arguments[r++]))?(n=n*(o=a/i)*o+1,
a=i):n+=i>0?(o=i/a)*o:i;return a===1/0?1/0:a*sc(n)
}});var hc=F.Math.hypot;function dc(t){
var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var lc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"transform",
value:function(t,e){hr(t)||(t=[t])
;for(var i=e.point.x,o=e.point.y,n=e.angle,r=e.length,s=0;s<t.length;++s){
var a=t[s],h=a.x*Math.cos(n)-a.y*Math.sin(n),d=a.x*Math.sin(n)+a.y*Math.cos(n)
;a.x=i+r*h,a.y=o+r*d}}},{key:"drawPath",
value:function(t,e){
t.beginPath(),t.moveTo(e[0].x,e[0].y)
;for(var i=1;i<e.length;++i)t.lineTo(e[i].x,e[i].y)
;t.closePath()}}]),t}(),cc=function(t){qd(i,t)
;var e=dc(i);function i(){
return Gh(this,i),e.apply(this,arguments)}
return $h(i,null,[{key:"draw",value:function(t,e){
if(e.image){
t.save(),t.translate(e.point.x,e.point.y),t.rotate(Math.PI/2+e.angle)
;var i=null!=e.imageWidth?e.imageWidth:e.image.width,o=null!=e.imageHeight?e.imageHeight:e.image.height
;e.image.drawImageAtPosition(t,1,-i/2,0,i,o),
t.restore()}return!1}}]),i}(lc),uc=function(t){
qd(i,t);var e=dc(i);function i(){
return Gh(this,i),e.apply(this,arguments)}
return $h(i,null,[{key:"draw",value:function(t,e){
var i=[{x:0,y:0},{x:-1,y:.3},{x:-.9,y:0},{x:-1,
y:-.3}]
;return lc.transform(i,e),lc.drawPath(t,i),!0}
}]),i}(lc),fc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i=[{x:-1,y:0},{x:0,y:.3},{x:-.4,y:0},{x:0,
y:-.3}]
;return lc.transform(i,e),lc.drawPath(t,i),!0}
}]),t}(),pc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i={x:-.4,y:0}
;lc.transform(i,e),t.strokeStyle=t.fillStyle,t.fillStyle="rgba(0, 0, 0, 0)"
;var o=Math.PI,n=e.angle-o/2,r=e.angle+o/2
;return t.beginPath(),t.arc(i.x,i.y,.4*e.length,n,r,!1),
t.stroke(),!0}}]),t}(),vc=function(){function t(){
Gh(this,t)}return $h(t,null,[{key:"draw",
value:function(t,e){var i={x:-.3,y:0}
;lc.transform(i,e),t.strokeStyle=t.fillStyle,
t.fillStyle="rgba(0, 0, 0, 0)"
;var o=Math.PI,n=e.angle+o/2,r=e.angle+3*o/2
;return t.beginPath(),t.arc(i.x,i.y,.4*e.length,n,r,!1),
t.stroke(),!0}}]),t}(),gc=function(){function t(){
Gh(this,t)}return $h(t,null,[{key:"draw",
value:function(t,e){var i=[{x:.02,y:0},{x:-1,y:.3
},{x:-1,y:-.3}]
;return lc.transform(i,e),lc.drawPath(t,i),!0}
}]),t}(),yc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i=[{x:0,y:.3},{x:0,y:-.3},{x:-1,y:0}]
;return lc.transform(i,e),lc.drawPath(t,i),!0}
}]),t}(),mc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i={x:-.4,y:0}
;return lc.transform(i,e),wt(t,i.x,i.y,.4*e.length),!0
}}]),t}(),bc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i=[{x:0,y:.5},{x:0,y:-.5},{x:-.15,y:-.5},{
x:-.15,y:.5}]
;return lc.transform(i,e),lc.drawPath(t,i),!0}
}]),t}(),wc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i=[{x:0,y:.3},{x:0,y:-.3},{x:-.6,y:-.3},{
x:-.6,y:.3}]
;return lc.transform(i,e),lc.drawPath(t,i),!0}
}]),t}(),kc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i=[{x:0,y:0},{x:-.5,y:-.3},{x:-1,y:0},{x:-.5,
y:.3}]
;return lc.transform(i,e),lc.drawPath(t,i),!0}
}]),t}(),_c=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i=[{x:-1,y:.3},{x:-.5,y:0},{x:-1,y:-.3},{x:0,
y:0}];return lc.transform(i,e),lc.drawPath(t,i),!0
}}]),t}(),xc=function(){function t(){Gh(this,t)}
return $h(t,null,[{key:"draw",value:function(t,e){
var i;switch(e.type&&(i=e.type.toLowerCase()),i){
case"image":return cc.draw(t,e);case"circle":
return mc.draw(t,e);case"box":return wc.draw(t,e)
;case"crow":return fc.draw(t,e);case"curve":
return pc.draw(t,e);case"diamond":
return kc.draw(t,e);case"inv_curve":
return vc.draw(t,e);case"triangle":
return gc.draw(t,e);case"inv_triangle":
return yc.draw(t,e);case"bar":return bc.draw(t,e)
;case"vee":return _c.draw(t,e);case"arrow":
default:return uc.draw(t,e)}}}]),t}()
;function Oc(t,e){var i=er(t);if(Ei){var o=Ei(t)
;e&&(o=fn(o).call(o,(function(e){
return Wt(t,e).enumerable}))),i.push.apply(i,o)}
return i}function Ec(t){
for(var e=1;e<arguments.length;e++){
var i,o=null!=arguments[e]?arguments[e]:{}
;if(e%2)Vo(i=Oc(Object(o),!0)).call(i,(function(e){
xo(t,e,o[e])}));else if(At)Dt(t,At(o));else{var n
;Vo(n=Oc(Object(o))).call(n,(function(e){
Tt(t,e,Wt(o,e))}))}}return t}var Cc=function(){
function t(e,i,o){
Gh(this,t),this._body=i,this._labelModule=o,this.color={},this.colorDirty=!0,
this.hoverWidth=1.5,
this.selectionWidth=2,this.setOptions(e),this.fromPoint=this.from,
this.toPoint=this.to}return $h(t,[{key:"connect",
value:function(){
this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to]
}},{key:"cleanup",value:function(){return!1}},{
key:"setOptions",value:function(t){
this.options=t,this.from=this._body.nodes[this.options.from],
this.to=this._body.nodes[this.options.to],
this.id=this.options.id}},{key:"drawLine",
value:function(t,e,i,o){
var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.getViaNode()
;t.strokeStyle=this.getColor(t,e),
t.lineWidth=e.width,!1!==e.dashes?this._drawDashedLine(t,e,n):this._drawLine(t,e,n)
}},{key:"_drawLine",value:function(t,e,i,o,n){
if(this.from!=this.to)this._line(t,e,i,o,n);else{
var r=this._getCircleData(t),s=Zn(r,3),a=s[0],h=s[1],d=s[2]
;this._circle(t,e,a,h,d)}}},{
key:"_drawDashedLine",value:function(t,e,i,o,n){
t.lineCap="round"
;var r=hr(e.dashes)?e.dashes:[5,5]
;if(void 0!==t.setLineDash){
if(t.save(),t.setLineDash(r),t.lineDashOffset=0,this.from!=this.to)this._line(t,e,i);else{
var s=this._getCircleData(t),a=Zn(s,3),h=a[0],d=a[1],l=a[2]
;this._circle(t,e,h,d,l)}
t.setLineDash([0]),t.lineDashOffset=0,t.restore()
}else{
if(this.from!=this.to)Ot(t,this.from.x,this.from.y,this.to.x,this.to.y,r);else{
var c=this._getCircleData(t),u=Zn(c,3),f=u[0],p=u[1],v=u[2]
;this._circle(t,e,f,p,v)}
this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)
}}},{key:"findBorderPosition",
value:function(t,e,i){
return this.from!=this.to?this._findBorderPosition(t,e,i):this._findBorderPositionCircle(t,e,i)
}},{key:"findBorderPositions",value:function(t){
if(this.from!=this.to)return{
from:this._findBorderPosition(this.from,t),
to:this._findBorderPosition(this.to,t)}
;var e,i=cr(e=this._getCircleData(t)).call(e,0,2),o=Zn(i,2),n=o[0],r=o[1]
;return{
from:this._findBorderPositionCircle(this.from,t,{
x:n,y:r,low:.25,high:.6,direction:-1}),
to:this._findBorderPositionCircle(this.from,t,{
x:n,y:r,low:.6,high:.8,direction:1})}}},{
key:"_getCircleData",value:function(t){
var e=this.options.selfReference.size
;void 0!==t&&void 0===this.from.shape.width&&this.from.shape.resize(t)
;var i=Ed(t,this.options.selfReference.angle,e,this.from)
;return[i.x,i.y,e]}},{key:"_pointOnCircle",
value:function(t,e,i,o){var n=2*o*Math.PI;return{
x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{
key:"_findBorderPositionCircle",
value:function(t,e,i){
var o,n=i.x,r=i.y,s=i.low,a=i.high,h=i.direction,d=this.options.selfReference.size,l=.5*(s+a),c=0
;!0===this.options.arrowStrikethrough&&(-1===h?c=this.options.endPointOffset.from:1===h&&(c=this.options.endPointOffset.to))
;var u=0;do{
l=.5*(s+a),o=this._pointOnCircle(n,r,d,l)
;var f=Math.atan2(t.y-o.y,t.x-o.x),p=t.distanceToBorder(e,f)+c-Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2))
;if(Math.abs(p)<.05)break
;p>0?h>0?s=l:a=l:h>0?a=l:s=l,++u}while(s<=a&&u<10)
;return Ec(Ec({},o),{},{t:l})}},{
key:"getLineWidth",value:function(t,e){
return!0===t?Math.max(this.selectionWidth,.3/this._body.view.scale):!0===e?Math.max(this.hoverWidth,.3/this._body.view.scale):Math.max(this.options.width,.3/this._body.view.scale)
}},{key:"getColor",value:function(t,e){
if(!1!==e.inheritsColor){
if("both"===e.inheritsColor&&this.from.id!==this.to.id){
var i=t.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),o=this.from.options.color.highlight.border,n=this.to.options.color.highlight.border
;return!1===this.from.selected&&!1===this.to.selected?(o=Wr(this.from.options.color.border,e.opacity),
n=Wr(this.to.options.color.border,e.opacity)):!0===this.from.selected&&!1===this.to.selected?n=this.to.options.color.border:!1===this.from.selected&&!0===this.to.selected&&(o=this.from.options.color.border),
i.addColorStop(0,o),i.addColorStop(1,n),i}
return"to"===e.inheritsColor?Wr(this.to.options.color.border,e.opacity):Wr(this.from.options.color.border,e.opacity)
}return Wr(e.color,e.opacity)}},{key:"_circle",
value:function(t,e,i,o,n){this.enableShadow(t,e)
;var r=0,s=2*Math.PI
;if(!this.options.selfReference.renderBehindTheNode){
var a=this.options.selfReference.angle,h=this.options.selfReference.angle+Math.PI,d=this._findBorderPositionCircle(this.from,t,{
x:i,y:o,low:a,high:h,direction:-1
}),l=this._findBorderPositionCircle(this.from,t,{
x:i,y:o,low:a,high:h,direction:1})
;r=Math.atan2(d.y-o,d.x-i),s=Math.atan2(l.y-o,l.x-i)
}
t.beginPath(),t.arc(i,o,n,r,s,!1),t.stroke(),this.disableShadow(t,e)
}},{key:"getDistanceToEdge",
value:function(t,e,i,o,n,r){
if(this.from!=this.to)return this._getDistanceToEdge(t,e,i,o,n,r)
;var s=this._getCircleData(void 0),a=Zn(s,3),h=a[0],d=a[1],l=a[2],c=h-n,u=d-r
;return Math.abs(Math.sqrt(c*c+u*u)-l)}},{
key:"_getDistanceToLine",
value:function(t,e,i,o,n,r){
var s=i-t,a=o-e,h=((n-t)*s+(r-e)*a)/(s*s+a*a)
;h>1?h=1:h<0&&(h=0);var d=t+h*s-n,l=e+h*a-r
;return Math.sqrt(d*d+l*l)}},{key:"getArrowData",
value:function(t,e,i,o,n,r){
var s,a,h,d,l,c,u,f=r.width
;"from"===e?(h=this.from,d=this.to,l=r.fromArrowScale<0,
c=Math.abs(r.fromArrowScale),
u=r.fromArrowType):"to"===e?(h=this.to,d=this.from,
l=r.toArrowScale<0,c=Math.abs(r.toArrowScale),
u=r.toArrowType):(h=this.to,d=this.from,
l=r.middleArrowScale<0,c=Math.abs(r.middleArrowScale),
u=r.middleArrowType);var p=15*c+3*f;if(h!=d){
var v=p/hc(h.x-d.x,h.y-d.y)
;if("middle"!==e)if(!0===this.options.smooth.enabled){
var g=this._findBorderPosition(h,t,{via:i
}),y=this.getPoint(g.t+v*("from"===e?1:-1),i)
;s=Math.atan2(g.y-y.y,g.x-y.x),a=g
}else s=Math.atan2(h.y-d.y,h.x-d.x),a=this._findBorderPosition(h,t);else{
var m=(l?-v:v)/2,b=this.getPoint(.5+m,i),w=this.getPoint(.5-m,i)
;s=Math.atan2(b.y-w.y,b.x-w.x),
a=this.getPoint(.5,i)}}else{
var k=this._getCircleData(t),_=Zn(k,3),x=_[0],O=_[1],E=_[2]
;if("from"===e){
var C=this.options.selfReference.angle,S=this.options.selfReference.angle+Math.PI,T=this._findBorderPositionCircle(this.from,t,{
x:x,y:O,low:C,high:S,direction:-1})
;s=-2*T.t*Math.PI+1.5*Math.PI+.1*Math.PI,a=T
}else if("to"===e){
var M=this.options.selfReference.angle,D=this.options.selfReference.angle+Math.PI,P=this._findBorderPositionCircle(this.from,t,{
x:x,y:O,low:M,high:D,direction:1})
;s=-2*P.t*Math.PI+1.5*Math.PI-1.1*Math.PI,a=P
}else{
var I=this.options.selfReference.angle/(2*Math.PI)
;a=this._pointOnCircle(x,O,E,I),
s=-2*I*Math.PI+1.5*Math.PI+.1*Math.PI}}return{
point:a,core:{x:a.x-.9*p*Math.cos(s),
y:a.y-.9*p*Math.sin(s)},angle:s,length:p,type:u}}
},{key:"drawArrowHead",value:function(t,e,i,o,n){
t.strokeStyle=this.getColor(t,e),
t.fillStyle=t.strokeStyle,t.lineWidth=e.width,xc.draw(t,n)&&(this.enableShadow(t,e),
Qd(t).call(t),this.disableShadow(t,e))}},{
key:"enableShadow",value:function(t,e){
!0===e.shadow&&(t.shadowColor=e.shadowColor,
t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,
t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",
value:function(t,e){
!0===e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,
t.shadowOffsetX=0,t.shadowOffsetY=0)}},{
key:"drawBackground",value:function(t,e){
if(!1!==e.background){var i={
strokeStyle:t.strokeStyle,lineWidth:t.lineWidth,
dashes:t.dashes}
;t.strokeStyle=e.backgroundColor,t.lineWidth=e.backgroundSize,this.setStrokeDashed(t,e.backgroundDashes),
t.stroke(),
t.strokeStyle=i.strokeStyle,t.lineWidth=i.lineWidth,t.dashes=i.dashes,
this.setStrokeDashed(t,e.dashes)}}},{
key:"setStrokeDashed",value:function(t,e){
if(!1!==e)if(void 0!==t.setLineDash){
var i=hr(e)?e:[5,5];t.setLineDash(i)
}else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");else void 0!==t.setLineDash?t.setLineDash([]):console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.")
}}]),t}();function Sc(t,e){var i=er(t);if(Ei){
var o=Ei(t);e&&(o=fn(o).call(o,(function(e){
return Wt(t,e).enumerable}))),i.push.apply(i,o)}
return i}function Tc(t){
for(var e=1;e<arguments.length;e++){
var i,o=null!=arguments[e]?arguments[e]:{}
;if(e%2)Vo(i=Sc(Object(o),!0)).call(i,(function(e){
xo(t,e,o[e])}));else if(At)Dt(t,At(o));else{var n
;Vo(n=Sc(Object(o))).call(n,(function(e){
Tt(t,e,Wt(o,e))}))}}return t}function Mc(t){
var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Dc=function(t){qd(i,t);var e=Mc(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"_findBorderPositionBezier",
value:function(t,e){
var i,o,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),r=10,s=.2,a=!1,h=1,d=0,l=this.to,c=this.options.endPointOffset?this.options.endPointOffset.to:0
;t.id===this.from.id&&(l=this.from,
a=!0,c=this.options.endPointOffset?this.options.endPointOffset.from:0),
!1===this.options.arrowStrikethrough&&(c=0)
;var u=0;do{o=.5*(d+h),i=this.getPoint(o,n)
;var f=Math.atan2(l.y-i.y,l.x-i.x),g=l.distanceToBorder(e,f)+c-Math.sqrt(Math.pow(i.x-l.x,2)+Math.pow(i.y-l.y,2))
;if(Math.abs(g)<s)break
;g<0?!1===a?d=o:h=o:!1===a?h=o:d=o,++u
}while(d<=h&&u<r);return Tc(Tc({},i),{},{t:o})}},{
key:"_getDistanceToBezierEdge",
value:function(t,e,i,o,n,r,s){
var a,h,d,l,c,u=1e9,f=t,p=e
;for(h=1;h<10;h++)d=.1*h,l=Math.pow(1-d,2)*t+2*d*(1-d)*s.x+Math.pow(d,2)*i,
c=Math.pow(1-d,2)*e+2*d*(1-d)*s.y+Math.pow(d,2)*o,
h>0&&(u=(a=this._getDistanceToLine(f,p,l,c,n,r))<u?a:u),
f=l,p=c;return u}},{key:"_bezierCurve",
value:function(t,e,i,o){
t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),
null!=i&&null!=i.x?null!=o&&null!=o.x?t.bezierCurveTo(i.x,i.y,o.x,o.y,this.toPoint.x,this.toPoint.y):t.quadraticCurveTo(i.x,i.y,this.toPoint.x,this.toPoint.y):t.lineTo(this.toPoint.x,this.toPoint.y),
this.drawBackground(t,e),
this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)
}},{key:"getViaNode",value:function(){
return this._getViaCoordinates()}}]),i}(Cc)
;function Pc(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Ic=function(t){qd(i,t);var e=Pc(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n)).via=r.via,r._boundFunction=function(){
r.positionBezierNode()
},r._body.emitter.on("_repositionBezierNodes",r._boundFunction),
r}return $h(i,[{key:"setOptions",
value:function(t){
oc(Gd(i.prototype),"setOptions",this).call(this,t)
;var e=!1
;this.options.physics!==t.physics&&(e=!0),this.options=t,this.id=this.options.id,
this.from=this._body.nodes[this.options.from],
this.to=this._body.nodes[this.options.to],
this.setupSupportNode(),this.connect(),
!0===e&&(this.via.setOptions({
physics:this.options.physics
}),this.positionBezierNode())}},{key:"connect",
value:function(){
this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],
void 0===this.from||void 0===this.to||!1===this.options.physics||this.from.id===this.to.id?this.via.setOptions({
physics:!1}):this.via.setOptions({physics:!0})}},{
key:"cleanup",value:function(){
return this._body.emitter.off("_repositionBezierNodes",this._boundFunction),
void 0!==this.via&&(delete this._body.nodes[this.via.id],
this.via=void 0,!0)}},{key:"setupSupportNode",
value:function(){if(void 0===this.via){
var t="edgeId:"+this.id,e=this._body.functions.createNode({
id:t,shape:"circle",physics:!0,hidden:!0})
;this._body.nodes[t]=e,this.via=e,this.via.parentEdgeId=this.id,
this.positionBezierNode()}}},{
key:"positionBezierNode",value:function(){
void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),
this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,
this.via.y=0)}},{key:"_line",
value:function(t,e,i){this._bezierCurve(t,e,i)}},{
key:"_getViaCoordinates",value:function(){
return this.via}},{key:"getViaNode",
value:function(){return this.via}},{
key:"getPoint",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.via
;if(this.from===this.to){
var i=this._getCircleData(),o=Zn(i,3),n=o[0],r=o[1],s=o[2],a=2*Math.PI*(1-t)
;return{x:n+s*Math.sin(a),y:r+s-s*(1-Math.cos(a))}
}return{
x:Math.pow(1-t,2)*this.fromPoint.x+2*t*(1-t)*e.x+Math.pow(t,2)*this.toPoint.x,
y:Math.pow(1-t,2)*this.fromPoint.y+2*t*(1-t)*e.y+Math.pow(t,2)*this.toPoint.y
}}},{key:"_findBorderPosition",
value:function(t,e){
return this._findBorderPositionBezier(t,e,this.via)
}},{key:"_getDistanceToEdge",
value:function(t,e,i,o,n,r){
return this._getDistanceToBezierEdge(t,e,i,o,n,r,this.via)
}}]),i}(Dc);function Bc(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var zc=function(t){qd(i,t);var e=Bc(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"_line",value:function(t,e,i){
this._bezierCurve(t,e,i)}},{key:"getViaNode",
value:function(){return this._getViaCoordinates()}
},{key:"_getViaCoordinates",value:function(){
var t,e,i=this.options.smooth.roundness,o=this.options.smooth.type,n=Math.abs(this.from.x-this.to.x),r=Math.abs(this.from.y-this.to.y)
;if("discrete"===o||"diagonalCross"===o){var s,a
;s=a=n<=r?i*r:i*n,this.from.x>this.to.x&&(s=-s),
this.from.y>=this.to.y&&(a=-a)
;var h=this.from.x+s,d=this.from.y+a
;return"discrete"===o&&(n<=r?h=n<i*r?this.from.x:h:d=r<i*n?this.from.y:d),
{x:h,y:d}}if("straightCross"===o){
var l=(1-i)*n,c=(1-i)*r
;return n<=r?(l=0,this.from.y<this.to.y&&(c=-c)):(this.from.x<this.to.x&&(l=-l),
c=0),{x:this.to.x+l,y:this.to.y+c}}
if("horizontal"===o){var u=(1-i)*n
;return this.from.x<this.to.x&&(u=-u),{
x:this.to.x+u,y:this.from.y}}if("vertical"===o){
var f=(1-i)*r
;return this.from.y<this.to.y&&(f=-f),{
x:this.from.x,y:this.to.y+f}}if("curvedCW"===o){
n=this.to.x-this.from.x,r=this.from.y-this.to.y
;var p=Math.sqrt(n*n+r*r),v=Math.PI,g=(Math.atan2(r,n)+(.5*i+.5)*v)%(2*v)
;return{x:this.from.x+(.5*i+.5)*p*Math.sin(g),
y:this.from.y+(.5*i+.5)*p*Math.cos(g)}}
if("curvedCCW"===o){
n=this.to.x-this.from.x,r=this.from.y-this.to.y
;var y=Math.sqrt(n*n+r*r),m=Math.PI,b=(Math.atan2(r,n)+(.5*-i+.5)*m)%(2*m)
;return{x:this.from.x+(.5*i+.5)*y*Math.sin(b),
y:this.from.y+(.5*i+.5)*y*Math.cos(b)}}
t=e=n<=r?i*r:i*n,this.from.x>this.to.x&&(t=-t),
this.from.y>=this.to.y&&(e=-e)
;var w=this.from.x+t,k=this.from.y+e
;return n<=r?w=this.from.x<=this.to.x?this.to.x<w?this.to.x:w:this.to.x>w?this.to.x:w:k=this.from.y>=this.to.y?this.to.y>k?this.to.y:k:this.to.y<k?this.to.y:k,
{x:w,y:k}}},{key:"_findBorderPosition",
value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
;return this._findBorderPositionBezier(t,e,i.via)}
},{key:"_getDistanceToEdge",
value:function(t,e,i,o,n,r){
var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates()
;return this._getDistanceToBezierEdge(t,e,i,o,n,r,s)
}},{key:"getPoint",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=t
;return{
x:Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x,
y:Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y
}}}]),i}(Dc);function Fc(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}function Nc(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Ac=function(t){qd(i,t);var e=Nc(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"_line",value:function(t,e,i){
var o=i[0],n=i[1];this._bezierCurve(t,e,o,n)}},{
key:"_getViaCoordinates",value:function(){
var t,e,i,o,n=this.from.x-this.to.x,r=this.from.y-this.to.y,s=this.options.smooth.roundness
;return(Math.abs(n)>Math.abs(r)||!0===this.options.smooth.forceDirection||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(e=this.from.y,
o=this.to.y,
t=this.from.x-s*n,i=this.to.x+s*n):(e=this.from.y-s*r,o=this.to.y+s*r,
t=this.from.x,i=this.to.x),[{x:t,y:e},{x:i,y:o}]}
},{key:"getViaNode",value:function(){
return this._getViaCoordinates()}},{
key:"_findBorderPosition",value:function(t,e){
return this._findBorderPositionBezier(t,e)}},{
key:"_getDistanceToEdge",
value:function(t,e,i,o,n,r){
var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),a=Zn(s,2),h=a[0],d=a[1]
;return this._getDistanceToBezierEdge2(t,e,i,o,n,r,h,d)
}},{key:"getPoint",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=Zn(e,2),o=i[0],n=i[1],r=t,s=[Math.pow(1-r,3),3*r*Math.pow(1-r,2),3*Math.pow(r,2)*(1-r),Math.pow(r,3)]
;return{
x:s[0]*this.fromPoint.x+s[1]*o.x+s[2]*n.x+s[3]*this.toPoint.x,
y:s[0]*this.fromPoint.y+s[1]*o.y+s[2]*n.y+s[3]*this.toPoint.y
}}}]),i}(function(t){qd(i,t);var e=Fc(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"_getDistanceToBezierEdge2",
value:function(t,e,i,o,n,r,s,a){
for(var h=1e9,d=t,l=e,c=[0,0,0,0],u=1;u<10;u++){
var f=.1*u
;c[0]=Math.pow(1-f,3),c[1]=3*f*Math.pow(1-f,2),c[2]=3*Math.pow(f,2)*(1-f),
c[3]=Math.pow(f,3)
;var p=c[0]*t+c[1]*s.x+c[2]*a.x+c[3]*i,v=c[0]*e+c[1]*s.y+c[2]*a.y+c[3]*o
;if(u>0){
var g=this._getDistanceToLine(d,l,p,v,n,r)
;h=g<h?g:h}d=p,l=v}return h}}]),i}(Dc))
;function jc(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Rc=function(t){qd(i,t);var e=jc(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"_line",value:function(t,e){
t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),
t.lineTo(this.toPoint.x,this.toPoint.y),
this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)
}},{key:"getViaNode",value:function(){}},{
key:"getPoint",value:function(t){return{
x:(1-t)*this.fromPoint.x+t*this.toPoint.x,
y:(1-t)*this.fromPoint.y+t*this.toPoint.y}}},{
key:"_findBorderPosition",value:function(t,e){
var i=this.to,o=this.from
;t.id===this.from.id&&(i=this.from,o=this.to)
;var n=Math.atan2(i.y-o.y,i.x-o.x),r=i.x-o.x,s=i.y-o.y,a=Math.sqrt(r*r+s*s),h=(a-t.distanceToBorder(e,n))/a
;return{x:(1-h)*o.x+h*i.x,y:(1-h)*o.y+h*i.y,t:0}}
},{key:"_getDistanceToEdge",
value:function(t,e,i,o,n,r){
return this._getDistanceToLine(t,e,i,o,n,r)}}]),i
}(Cc),Lc=function(){function t(e,i,o,n,r){
if(Gh(this,t),void 0===i)throw new Error("No body provided")
;this.options=Qr(n),
this.globalOptions=n,this.defaultOptions=r,this.body=i,this.imagelist=o,
this.id=void 0,
this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,
this.labelDirty=!0,
this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,
this.from=void 0,
this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new Fd(this.body,this.options,!0),
this.setOptions(e)}return $h(t,[{key:"setOptions",
value:function(e){if(e){
var i=void 0!==e.physics&&this.options.physics!==e.physics||void 0!==e.hidden&&(this.options.hidden||!1)!==(e.hidden||!1)||void 0!==e.from&&this.options.from!==e.from||void 0!==e.to&&this.options.to!==e.to
;t.parseOptions(this.options,e,!0,this.globalOptions),
void 0!==e.id&&(this.id=e.id),
void 0!==e.from&&(this.fromId=e.from),void 0!==e.to&&(this.toId=e.to),
void 0!==e.title&&(this.title=e.title),
void 0!==e.value&&(e.value=kd(e.value))
;var o=[e,this.options,this.defaultOptions]
;return this.chooser=_d("edge",o),this.updateLabelModule(e),
i=this.updateEdgeType()||i,
this._setInteractionWidths(),this.connect(),i}}},{
key:"getFormattingValues",value:function(){
var t=!0===this.options.arrows.to||!0===this.options.arrows.to.enabled,e=!0===this.options.arrows.from||!0===this.options.arrows.from.enabled,i=!0===this.options.arrows.middle||!0===this.options.arrows.middle.enabled,o=this.options.color.inherit,n={
toArrow:t,
toArrowScale:this.options.arrows.to.scaleFactor,
toArrowType:this.options.arrows.to.type,
toArrowSrc:this.options.arrows.to.src,
toArrowImageWidth:this.options.arrows.to.imageWidth,
toArrowImageHeight:this.options.arrows.to.imageHeight,
middleArrow:i,
middleArrowScale:this.options.arrows.middle.scaleFactor,
middleArrowType:this.options.arrows.middle.type,
middleArrowSrc:this.options.arrows.middle.src,
middleArrowImageWidth:this.options.arrows.middle.imageWidth,
middleArrowImageHeight:this.options.arrows.middle.imageHeight,
fromArrow:e,
fromArrowScale:this.options.arrows.from.scaleFactor,
fromArrowType:this.options.arrows.from.type,
fromArrowSrc:this.options.arrows.from.src,
fromArrowImageWidth:this.options.arrows.from.imageWidth,
fromArrowImageHeight:this.options.arrows.from.imageHeight,
arrowStrikethrough:this.options.arrowStrikethrough,
color:o?void 0:this.options.color.color,
inheritsColor:o,
opacity:this.options.color.opacity,
hidden:this.options.hidden,
length:this.options.length,
shadow:this.options.shadow.enabled,
shadowColor:this.options.shadow.color,
shadowSize:this.options.shadow.size,
shadowX:this.options.shadow.x,
shadowY:this.options.shadow.y,
dashes:this.options.dashes,
width:this.options.width,
background:this.options.background.enabled,
backgroundColor:this.options.background.color,
backgroundSize:this.options.background.size,
backgroundDashes:this.options.background.dashes}
;if(this.selected||this.hover)if(!0===this.chooser){
if(this.selected){
var r=this.options.selectionWidth
;"function"==typeof r?n.width=r(n.width):"number"==typeof r&&(n.width+=r),
n.width=Math.max(n.width,.3/this.body.view.scale),
n.color=this.options.color.highlight,
n.shadow=this.options.shadow.enabled
}else if(this.hover){var s=this.options.hoverWidth
;"function"==typeof s?n.width=s(n.width):"number"==typeof s&&(n.width+=s),
n.width=Math.max(n.width,.3/this.body.view.scale),
n.color=this.options.color.hover,
n.shadow=this.options.shadow.enabled}
}else"function"==typeof this.chooser&&(this.chooser(n,this.options.id,this.selected,this.hover),
void 0!==n.color&&(n.inheritsColor=!1),
!1===n.shadow&&(n.shadowColor===this.options.shadow.color&&n.shadowSize===this.options.shadow.size&&n.shadowX===this.options.shadow.x&&n.shadowY===this.options.shadow.y||(n.shadow=!0)));else n.shadow=this.options.shadow.enabled,
n.width=Math.max(n.width,.3/this.body.view.scale)
;return n}},{key:"updateLabelModule",
value:function(t){
var e=[t,this.options,this.globalOptions,this.defaultOptions]
;this.labelModule.update(this.options,e),
void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)
}},{key:"updateEdgeType",value:function(){
var t=this.options.smooth,e=!1,i=!0
;return void 0!==this.edgeType&&((this.edgeType instanceof Ic&&!0===t.enabled&&"dynamic"===t.type||this.edgeType instanceof Ac&&!0===t.enabled&&"cubicBezier"===t.type||this.edgeType instanceof zc&&!0===t.enabled&&"dynamic"!==t.type&&"cubicBezier"!==t.type||this.edgeType instanceof Rc&&!1===t.type.enabled)&&(i=!1),
!0===i&&(e=this.cleanup())),
!0===i?!0===t.enabled?"dynamic"===t.type?(e=!0,this.edgeType=new Ic(this.options,this.body,this.labelModule)):"cubicBezier"===t.type?this.edgeType=new Ac(this.options,this.body,this.labelModule):this.edgeType=new zc(this.options,this.body,this.labelModule):this.edgeType=new Rc(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),
e}},{key:"connect",value:function(){
this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,
this.to=this.body.nodes[this.toId]||void 0,
this.connected=void 0!==this.from&&void 0!==this.to,
!0===this.connected?(this.from.attachEdge(this),
this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),
this.to&&this.to.detachEdge(this)),
this.edgeType.connect()}},{key:"disconnect",
value:function(){
this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),
this.to=void 0),this.connected=!1}},{
key:"getTitle",value:function(){return this.title}
},{key:"isSelected",value:function(){
return this.selected}},{key:"getValue",
value:function(){return this.options.value}},{
key:"setValueRange",value:function(t,e,i){
if(void 0!==this.options.value){
var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min
;if(!0===this.options.scaling.label.enabled){
var r=this.options.scaling.label.max-this.options.scaling.label.min
;this.options.font.size=this.options.scaling.label.min+o*r
}this.options.width=this.options.scaling.min+o*n
}else this.options.width=this.baseWidth,
this.options.font.size=this.baseFontSize
;this._setInteractionWidths(),this.updateLabelModule()
}},{key:"_setInteractionWidths",value:function(){
"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,
"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width
}},{key:"draw",value:function(t){
var e=this.getFormattingValues();if(!e.hidden){
var i=this.edgeType.getViaNode()
;this.edgeType.drawLine(t,e,this.selected,this.hover,i),
this.drawLabel(t,i)}}},{key:"drawArrows",
value:function(t){var e=this.getFormattingValues()
;if(!e.hidden){
var i=this.edgeType.getViaNode(),o={}
;this.edgeType.fromPoint=this.edgeType.from,
this.edgeType.toPoint=this.edgeType.to,
e.fromArrow&&(o.from=this.edgeType.getArrowData(t,"from",i,this.selected,this.hover,e),
!1===e.arrowStrikethrough&&(this.edgeType.fromPoint=o.from.core),
e.fromArrowSrc&&(o.from.image=this.imagelist.load(e.fromArrowSrc)),
e.fromArrowImageWidth&&(o.from.imageWidth=e.fromArrowImageWidth),
e.fromArrowImageHeight&&(o.from.imageHeight=e.fromArrowImageHeight)),
e.toArrow&&(o.to=this.edgeType.getArrowData(t,"to",i,this.selected,this.hover,e),
!1===e.arrowStrikethrough&&(this.edgeType.toPoint=o.to.core),
e.toArrowSrc&&(o.to.image=this.imagelist.load(e.toArrowSrc)),
e.toArrowImageWidth&&(o.to.imageWidth=e.toArrowImageWidth),
e.toArrowImageHeight&&(o.to.imageHeight=e.toArrowImageHeight)),
e.middleArrow&&(o.middle=this.edgeType.getArrowData(t,"middle",i,this.selected,this.hover,e),
e.middleArrowSrc&&(o.middle.image=this.imagelist.load(e.middleArrowSrc)),
e.middleArrowImageWidth&&(o.middle.imageWidth=e.middleArrowImageWidth),
e.middleArrowImageHeight&&(o.middle.imageHeight=e.middleArrowImageHeight)),
e.fromArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.from),
e.middleArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.middle),
e.toArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.to)
}}},{key:"drawLabel",value:function(t,e){
if(void 0!==this.options.label){
var i,o=this.from,n=this.to
;if(this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(t,this.selected,this.hover),
o.id!=n.id){
this.labelModule.pointToSelf=!1,i=this.edgeType.getPoint(.5,e),t.save()
;var r=this._getRotation(t)
;0!=r.angle&&(t.translate(r.x,r.y),t.rotate(r.angle)),
this.labelModule.draw(t,i.x,i.y,this.selected,this.hover),
t.restore()}else{this.labelModule.pointToSelf=!0
;var s=Ed(t,this.options.selfReference.angle,this.options.selfReference.size,o)
;i=this._pointOnCircle(s.x,s.y,this.options.selfReference.size,this.options.selfReference.angle),
this.labelModule.draw(t,i.x,i.y,this.selected,this.hover)
}}}},{key:"getItemsOnPoint",value:function(t){
var e=[];if(this.labelModule.visible()){
var i=this._getRotation()
;xd(this.labelModule.getSize(),t,i)&&e.push({
edgeId:this.id,labelId:0})}var o={left:t.x,top:t.y
};return this.isOverlappingWith(o)&&e.push({
edgeId:this.id}),e}},{key:"isOverlappingWith",
value:function(t){if(this.connected){
var e=this.from.x,i=this.from.y,o=this.to.x,n=this.to.y,r=t.left,s=t.top
;return this.edgeType.getDistanceToEdge(e,i,o,n,r,s)<10
}return!1}},{key:"_getRotation",value:function(t){
var e=this.edgeType.getViaNode(),i=this.edgeType.getPoint(.5,e)
;void 0!==t&&this.labelModule.calculateLabelSize(t,this.selected,this.hover,i.x,i.y)
;var o={x:i.x,y:this.labelModule.size.yLine,
angle:0};if(!this.labelModule.visible())return o
;if("horizontal"===this.options.font.align)return o
;var n=this.from.y-this.to.y,r=this.from.x-this.to.x,s=Math.atan2(n,r)
;return(s<-1&&r<0||s>0&&r<0)&&(s+=Math.PI),
o.angle=s,o}},{key:"_pointOnCircle",
value:function(t,e,i,o){return{x:t+i*Math.cos(o),
y:e-i*Math.sin(o)}}},{key:"select",
value:function(){this.selected=!0}},{
key:"unselect",value:function(){this.selected=!1}
},{key:"cleanup",value:function(){
return this.edgeType.cleanup()}},{key:"remove",
value:function(){
this.cleanup(),this.disconnect(),delete this.body.edges[this.id]
}},{key:"endPointsValid",value:function(){
return void 0!==this.body.nodes[this.fromId]&&void 0!==this.body.nodes[this.toId]
}}],[{key:"parseOptions",value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
;if(zr(["endPointOffset","arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","selfReference","to","title","value","width","font","chosen","widthConstraint"],t,e,i),
void 0!==e.endPointOffset&&void 0!==e.endPointOffset.from&&(ud(e.endPointOffset.from)?t.endPointOffset.from=e.endPointOffset.from:(t.endPointOffset.from=void 0!==o.endPointOffset.from?o.endPointOffset.from:0,
console.error("endPointOffset.from is not a valid number"))),
void 0!==e.endPointOffset&&void 0!==e.endPointOffset.to&&(ud(e.endPointOffset.to)?t.endPointOffset.to=e.endPointOffset.to:(t.endPointOffset.to=void 0!==o.endPointOffset.to?o.endPointOffset.to:0,
console.error("endPointOffset.to is not a valid number"))),
Od(e.label)?t.label=e.label:Od(t.label)||(t.label=void 0),
Zr(t,e,"smooth",o),Zr(t,e,"shadow",o),
Zr(t,e,"background",o),void 0!==e.dashes&&null!==e.dashes?t.dashes=e.dashes:!0===i&&null===e.dashes&&(t.dashes=wo(o.dashes)),
void 0!==e.scaling&&null!==e.scaling?(void 0!==e.scaling.min&&(t.scaling.min=e.scaling.min),
void 0!==e.scaling.max&&(t.scaling.max=e.scaling.max),
Zr(t.scaling,e.scaling,"label",o.scaling)):!0===i&&null===e.scaling&&(t.scaling=wo(o.scaling)),
void 0!==e.arrows&&null!==e.arrows)if("string"==typeof e.arrows){
var s=e.arrows.toLowerCase()
;t.arrows.to.enabled=-1!=On(s).call(s,"to"),t.arrows.middle.enabled=-1!=On(s).call(s,"middle"),
t.arrows.from.enabled=-1!=On(s).call(s,"from")
}else{
if("object"!==lr(e.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+ql(e.arrows))
;Zr(t.arrows,e.arrows,"to",o.arrows),
Zr(t.arrows,e.arrows,"middle",o.arrows),Zr(t.arrows,e.arrows,"from",o.arrows)
}else!0===i&&null===e.arrows&&(t.arrows=wo(o.arrows))
;if(void 0!==e.color&&null!==e.color){
var a=Dr(e.color)?{color:e.color,
highlight:e.color,hover:e.color,inherit:!1,
opacity:1}:e.color,h=t.color
;if(n)Nr(h,o.color,!1,i);else for(var d in h)Object.prototype.hasOwnProperty.call(h,d)&&delete h[d]
;if(Dr(h))h.color=h,
h.highlight=h,h.hover=h,h.inherit=!1,void 0===a.opacity&&(h.opacity=1);else{
var l=!1
;void 0!==a.color&&(h.color=a.color,l=!0),void 0!==a.highlight&&(h.highlight=a.highlight,
l=!0),
void 0!==a.hover&&(h.hover=a.hover,l=!0),void 0!==a.inherit&&(h.inherit=a.inherit),
void 0!==a.opacity&&(h.opacity=Math.min(1,Math.max(0,a.opacity))),
!0===l?h.inherit=!1:void 0===h.inherit&&(h.inherit="from")
}
}else!0===i&&null===e.color&&(t.color=Qr(o.color))
;!0===i&&null===e.font&&(t.font=Qr(o.font)),
Object.prototype.hasOwnProperty.call(e,"selfReferenceSize")&&(console.log("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference:{size:30, angle:Math.PI / 4}"),
t.selfReference.size=e.selfReferenceSize)}}]),t
}(),Hc=function(){function t(e,i,o){var n,r=this
;Gh(this,t),this.body=e,this.images=i,
this.groups=o,this.body.functions.createEdge=Z(n=this.create).call(n,this),
this.edgesListeners={add:function(t,e){
r.add(e.items)},update:function(t,e){
r.update(e.items)},remove:function(t,e){
r.remove(e.items)}
},this.options={},this.defaultOptions={arrows:{
to:{enabled:!1,scaleFactor:1,type:"arrow"},
middle:{enabled:!1,scaleFactor:1,type:"arrow"},
from:{enabled:!1,scaleFactor:1,type:"arrow"}},
endPointOffset:{from:0,to:0},
arrowStrikethrough:!0,color:{color:"#848484",
highlight:"#848484",hover:"#848484",
inherit:"from",opacity:1},dashes:!1,font:{
color:"#343434",size:14,face:"arial",
background:"none",strokeWidth:2,
strokeColor:"#ffffff",align:"horizontal",multi:!1,
vadjust:0,bold:{mod:"bold"},boldital:{
mod:"bold italic"},ital:{mod:"italic"},mono:{
mod:"",size:15,face:"courier new",vadjust:2}},
hidden:!1,hoverWidth:1.5,label:void 0,
labelHighlightBold:!0,length:void 0,physics:!0,
scaling:{min:1,max:15,label:{enabled:!0,min:14,
max:30,maxVisible:30,drawThreshold:5},
customScalingFunction:function(t,e,i,o){
if(e===t)return.5;var n=1/(e-t)
;return Math.max(0,(o-t)*n)}},selectionWidth:1.5,
selfReference:{size:20,angle:Math.PI/4,
renderBehindTheNode:!0},shadow:{enabled:!1,
color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},
background:{enabled:!1,
color:"rgba(111,111,111,1)",size:10,dashes:!1},
smooth:{enabled:!0,type:"dynamic",
forceDirection:"none",roundness:.5},title:void 0,
width:1,value:void 0
},Nr(this.options,this.defaultOptions),this.bindEventListeners()
}return $h(t,[{key:"bindEventListeners",
value:function(){var t,e,i=this
;this.body.emitter.on("_forceDisableDynamicCurves",(function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;"dynamic"===t&&(t="continuous");var o=!1
;for(var n in i.body.edges)if(Object.prototype.hasOwnProperty.call(i.body.edges,n)){
var r=i.body.edges[n],s=i.body.data.edges.get(n)
;if(null!=s){var a=s.smooth
;void 0!==a&&!0===a.enabled&&"dynamic"===a.type&&(void 0===t?r.setOptions({
smooth:!1}):r.setOptions({smooth:{type:t}}),o=!0)}
}
!0===e&&!0===o&&i.body.emitter.emit("_dataChanged")
})),this.body.emitter.on("_dataUpdated",(function(){
i.reconnectEdges()
})),this.body.emitter.on("refreshEdges",Z(t=this.refresh).call(t,this)),
this.body.emitter.on("refresh",Z(e=this.refresh).call(e,this)),
this.body.emitter.on("destroy",(function(){
Lr(i.edgesListeners,(function(t,e){
i.body.data.edges&&i.body.data.edges.off(e,t)
})),delete i.body.functions.createEdge,
delete i.edgesListeners.add,delete i.edgesListeners.update,
delete i.edgesListeners.remove,
delete i.edgesListeners}))}},{key:"setOptions",
value:function(t){if(void 0!==t){
Lc.parseOptions(this.options,t,!0,this.defaultOptions,!0)
;var e=!1
;if(void 0!==t.smooth)for(var i in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,i)&&(e=this.body.edges[i].updateEdgeType()||e)
;if(void 0!==t.font)for(var o in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,o)&&this.body.edges[o].updateLabelModule()
;void 0===t.hidden&&void 0===t.physics&&!0!==e||this.body.emitter.emit("_dataChanged")
}}},{key:"setData",value:function(t){
var i=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.body.data.edges
;if(t instanceof e.DataSet||t instanceof e.DataView)this.body.data.edges=t;else if(hr(t))this.body.data.edges=new e.DataSet,
this.body.data.edges.add(t);else{
if(t)throw new TypeError("Array or DataSet expected")
;this.body.data.edges=new e.DataSet}
if(n&&Lr(this.edgesListeners,(function(t,e){
n.off(e,t)
})),this.body.edges={},this.body.data.edges){
Lr(this.edgesListeners,(function(t,e){
i.body.data.edges.on(e,t)}))
;var r=this.body.data.edges.getIds()
;this.add(r,!0)}
this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===o&&this.body.emitter.emit("_dataChanged")
}},{key:"add",value:function(t){
for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.edges,o=this.body.data.edges,n=0;n<t.length;n++){
var r=t[n],s=i[r];s&&s.disconnect()
;var a=o.get(r,{showInternalIds:!0})
;i[r]=this.create(a)}
this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),
!1===e&&this.body.emitter.emit("_dataChanged")}},{
key:"update",value:function(t){
for(var e=this.body.edges,i=this.body.data.edges,o=!1,n=0;n<t.length;n++){
var r=t[n],s=i.get(r),a=e[r]
;void 0!==a?(a.disconnect(),o=a.setOptions(s)||o,a.connect()):(this.body.edges[r]=this.create(s),
o=!0)}
!0===o?(this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),this.body.emitter.emit("_dataChanged")):this.body.emitter.emit("_dataUpdated")
}},{key:"remove",value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;if(0!==t.length){var i=this.body.edges
;Lr(t,(function(t){var e=i[t]
;void 0!==e&&e.remove()
})),e&&this.body.emitter.emit("_dataChanged")}}},{
key:"refresh",value:function(){var t=this
;Lr(this.body.edges,(function(e,i){
var o=t.body.data.edges.get(i)
;void 0!==o&&e.setOptions(o)}))}},{key:"create",
value:function(t){
return new Lc(t,this.body,this.images,this.options,this.defaultOptions)
}},{key:"reconnectEdges",value:function(){
var t,e=this.body.nodes,i=this.body.edges
;for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e[t].edges=[])
;for(t in i)if(Object.prototype.hasOwnProperty.call(i,t)){
var o=i[t];o.from=null,o.to=null,o.connect()}}},{
key:"getConnectedNodes",value:function(t){var e=[]
;if(void 0!==this.body.edges[t]){
var i=this.body.edges[t]
;void 0!==i.fromId&&e.push(i.fromId),void 0!==i.toId&&e.push(i.toId)
}return e}},{key:"_updateState",value:function(){
this._addMissingEdges(),this._removeInvalidEdges()
}},{key:"_removeInvalidEdges",value:function(){
var t=this,e=[];Lr(this.body.edges,(function(i,o){
var n=t.body.nodes[i.toId],r=t.body.nodes[i.fromId]
;void 0!==n&&!0===n.isCluster||void 0!==r&&!0===r.isCluster||void 0!==n&&void 0!==r||e.push(o)
})),this.remove(e,!1)}},{key:"_addMissingEdges",
value:function(){var t=this.body.data.edges
;if(null!=t){var e=this.body.edges,i=[]
;Vo(t).call(t,(function(t,o){
void 0===e[o]&&i.push(o)})),this.add(i,!0)}}}]),t
}(),Wc=function(){function t(e,i,o){
Gh(this,t),this.body=e,this.physicsBody=i,this.barnesHutTree,
this.setOptions(o),
this._rng=_r("BARNES HUT SOLVER")}return $h(t,[{
key:"setOptions",value:function(t){
this.options=t,this.thetaInversed=1/this.options.theta,
this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))
}},{key:"solve",value:function(){
if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){
var t,e=this.body.nodes,i=this.physicsBody.physicsNodeIndices,o=i.length,n=this._formBarnesHutTree(e,i)
;this.barnesHutTree=n
;for(var r=0;r<o;r++)(t=e[i[r]]).options.mass>0&&this._getForceContributions(n.root,t)
}}},{key:"_getForceContributions",
value:function(t,e){
this._getForceContribution(t.children.NW,e),this._getForceContribution(t.children.NE,e),
this._getForceContribution(t.children.SW,e),
this._getForceContribution(t.children.SE,e)}},{
key:"_getForceContribution",value:function(t,e){
if(t.childrenCount>0){
var i=t.centerOfMass.x-e.x,o=t.centerOfMass.y-e.y,n=Math.sqrt(i*i+o*o)
;n*t.calcSize>this.thetaInversed?this._calculateForces(n,i,o,e,t):4===t.childrenCount?this._getForceContributions(t,e):t.children.data.id!=e.id&&this._calculateForces(n,i,o,e,t)
}}},{key:"_calculateForces",
value:function(t,e,i,o,n){
0===t&&(e=t=.1),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius))
;var r=this.options.gravitationalConstant*n.mass*o.options.mass/Math.pow(t,3),s=e*r,a=i*r
;this.physicsBody.forces[o.id].x+=s,
this.physicsBody.forces[o.id].y+=a}},{
key:"_formBarnesHutTree",value:function(t,e){
for(var i,o=e.length,n=t[e[0]].x,r=t[e[0]].y,s=t[e[0]].x,a=t[e[0]].y,h=1;h<o;h++){
var d=t[e[h]],l=d.x,c=d.y
;d.options.mass>0&&(l<n&&(n=l),l>s&&(s=l),c<r&&(r=c),c>a&&(a=c))
}var u=Math.abs(s-n)-Math.abs(a-r)
;u>0?(r-=.5*u,a+=.5*u):(n+=.5*u,s-=.5*u)
;var f=Math.max(1e-5,Math.abs(s-n)),p=.5*f,v=.5*(n+s),g=.5*(r+a),y={
root:{centerOfMass:{x:0,y:0},mass:0,range:{
minX:v-p,maxX:v+p,minY:g-p,maxY:g+p},size:f,
calcSize:1/f,children:{data:null},maxWidth:0,
level:0,childrenCount:4}}
;this._splitBranch(y.root)
;for(var m=0;m<o;m++)(i=t[e[m]]).options.mass>0&&this._placeInTree(y.root,i)
;return y}},{key:"_updateBranchMass",
value:function(t,e){
var i=t.centerOfMass,o=t.mass+e.options.mass,n=1/o
;i.x=i.x*t.mass+e.x*e.options.mass,
i.x*=n,i.y=i.y*t.mass+e.y*e.options.mass,i.y*=n,
t.mass=o
;var r=Math.max(Math.max(e.height,e.radius),e.width)
;t.maxWidth=t.maxWidth<r?r:t.maxWidth}},{
key:"_placeInTree",value:function(t,e,i){
1==i&&void 0!==i||this._updateBranchMass(t,e)
;var o,n=t.children.NW.range
;o=n.maxX>e.x?n.maxY>e.y?"NW":"SW":n.maxY>e.y?"NE":"SE",
this._placeInRegion(t,e,o)}},{
key:"_placeInRegion",value:function(t,e,i){
var o=t.children[i];switch(o.childrenCount){
case 0:
o.children.data=e,o.childrenCount=1,this._updateBranchMass(o,e)
;break;case 1:
o.children.data.x===e.x&&o.children.data.y===e.y?(e.x+=this._rng(),
e.y+=this._rng()):(this._splitBranch(o),
this._placeInTree(o,e));break;case 4:
this._placeInTree(o,e)}}},{key:"_splitBranch",
value:function(t){var e=null
;1===t.childrenCount&&(e=t.children.data,t.mass=0,t.centerOfMass.x=0,
t.centerOfMass.y=0),
t.childrenCount=4,t.children.data=null,this._insertRegion(t,"NW"),
this._insertRegion(t,"NE"),
this._insertRegion(t,"SW"),this._insertRegion(t,"SE"),
null!=e&&this._placeInTree(t,e)}},{
key:"_insertRegion",value:function(t,e){
var i,o,n,r,s=.5*t.size;switch(e){case"NW":
i=t.range.minX,o=t.range.minX+s,n=t.range.minY,
r=t.range.minY+s;break;case"NE":
i=t.range.minX+s,o=t.range.maxX,n=t.range.minY,r=t.range.minY+s
;break;case"SW":
i=t.range.minX,o=t.range.minX+s,n=t.range.minY+s,r=t.range.maxY
;break;case"SE":
i=t.range.minX+s,o=t.range.maxX,n=t.range.minY+s,r=t.range.maxY
}t.children[e]={centerOfMass:{x:0,y:0},mass:0,
range:{minX:i,maxX:o,minY:n,maxY:r},
size:.5*t.size,calcSize:2*t.calcSize,children:{
data:null},maxWidth:0,level:t.level+1,
childrenCount:0}}},{key:"_debug",
value:function(t,e){
void 0!==this.barnesHutTree&&(t.lineWidth=1,this._drawBranch(this.barnesHutTree.root,t,e))
}},{key:"_drawBranch",value:function(t,e,i){
void 0===i&&(i="#FF0000"),4===t.childrenCount&&(this._drawBranch(t.children.NW,e),
this._drawBranch(t.children.NE,e),
this._drawBranch(t.children.SE,e),this._drawBranch(t.children.SW,e)),
e.strokeStyle=i,
e.beginPath(),e.moveTo(t.range.minX,t.range.minY),e.lineTo(t.range.maxX,t.range.minY),
e.stroke(),
e.beginPath(),e.moveTo(t.range.maxX,t.range.minY),e.lineTo(t.range.maxX,t.range.maxY),
e.stroke(),
e.beginPath(),e.moveTo(t.range.maxX,t.range.maxY),e.lineTo(t.range.minX,t.range.maxY),
e.stroke(),
e.beginPath(),e.moveTo(t.range.minX,t.range.maxY),e.lineTo(t.range.minX,t.range.minY),
e.stroke()}}]),t}(),Vc=function(){
function t(e,i,o){
Gh(this,t),this._rng=_r("REPULSION SOLVER"),this.body=e,this.physicsBody=i,
this.setOptions(o)}return $h(t,[{key:"setOptions",
value:function(t){this.options=t}},{key:"solve",
value:function(){
for(var t,e,i,o,n,r,s,a,h=this.body.nodes,d=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,c=this.options.nodeDistance,u=-2/3/c,f=0;f<d.length-1;f++){
s=h[d[f]]
;for(var p=f+1;p<d.length;p++)t=(a=h[d[p]]).x-s.x,e=a.y-s.y,0===(i=Math.sqrt(t*t+e*e))&&(t=i=.1*this._rng()),
i<2*c&&(r=i<.5*c?1:u*i+1.3333333333333333,
o=t*(r/=i),n=e*r,l[s.id].x-=o,l[s.id].y-=n,
l[a.id].x+=o,l[a.id].y+=n)}}}]),t
}(),qc=function(){function t(e,i,o){
Gh(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)
}return $h(t,[{key:"setOptions",value:function(t){
this.options=t,this.overlapAvoidanceFactor=Math.max(0,Math.min(1,this.options.avoidOverlap||0))
}},{key:"solve",value:function(){
for(var t=this.body.nodes,e=this.physicsBody.physicsNodeIndices,i=this.physicsBody.forces,o=this.options.nodeDistance,n=0;n<e.length-1;n++)for(var r=t[e[n]],s=n+1;s<e.length;s++){
var a=t[e[s]];if(r.level===a.level){
var h=o+this.overlapAvoidanceFactor*((r.shape.radius||0)/2+(a.shape.radius||0)/2),d=a.x-r.x,l=a.y-r.y,c=Math.sqrt(d*d+l*l),u=void 0
;u=c<h?-Math.pow(.05*c,2)+Math.pow(.05*h,2):0,
0!==c&&(u/=c);var f=d*u,p=l*u
;i[r.id].x-=f,i[r.id].y-=p,i[a.id].x+=f,i[a.id].y+=p
}}}}]),t}(),Uc=function(){function t(e,i,o){
Gh(this,t),this.body=e,this.physicsBody=i,
this.setOptions(o)}return $h(t,[{key:"setOptions",
value:function(t){this.options=t}},{key:"solve",
value:function(){
for(var t,e,i,o,n,r=this.physicsBody.physicsEdgeIndices,s=this.body.edges,a=0;a<r.length;a++)!0===(e=s[r[a]]).connected&&e.toId!==e.fromId&&void 0!==this.body.nodes[e.toId]&&void 0!==this.body.nodes[e.fromId]&&(void 0!==e.edgeType.via?(t=void 0===e.options.length?this.options.springLength:e.options.length,
i=e.to,
o=e.edgeType.via,n=e.from,this._calculateSpringForce(i,o,.5*t),this._calculateSpringForce(o,n,.5*t)):(t=void 0===e.options.length?1.5*this.options.springLength:e.options.length,
this._calculateSpringForce(e.from,e.to,t)))}},{
key:"_calculateSpringForce",value:function(t,e,i){
var o=t.x-e.x,n=t.y-e.y,r=Math.max(Math.sqrt(o*o+n*n),.01),s=this.options.springConstant*(i-r)/r,a=o*s,h=n*s
;void 0!==this.physicsBody.forces[t.id]&&(this.physicsBody.forces[t.id].x+=a,
this.physicsBody.forces[t.id].y+=h),
void 0!==this.physicsBody.forces[e.id]&&(this.physicsBody.forces[e.id].x-=a,
this.physicsBody.forces[e.id].y-=h)}}]),t
}(),Yc=function(){function t(e,i,o){
Gh(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)
}return $h(t,[{key:"setOptions",value:function(t){
this.options=t}},{key:"solve",value:function(){
for(var t,e,i,o,n,r,s,a,h,d,l=this.body.edges,c=.5,u=this.physicsBody.physicsEdgeIndices,f=this.physicsBody.physicsNodeIndices,p=this.physicsBody.forces,v=0;v<f.length;v++){
var g=f[v];p[g].springFx=0,p[g].springFy=0}
for(var y=0;y<u.length;y++)!0===(e=l[u[y]]).connected&&(t=void 0===e.options.length?this.options.springLength:e.options.length,
i=e.from.x-e.to.x,
o=e.from.y-e.to.y,a=0===(a=Math.sqrt(i*i+o*o))?.01:a,n=i*(s=this.options.springConstant*(t-a)/a),
r=o*s,
e.to.level!=e.from.level?(void 0!==p[e.toId]&&(p[e.toId].springFx-=n,p[e.toId].springFy-=r),
void 0!==p[e.fromId]&&(p[e.fromId].springFx+=n,
p[e.fromId].springFy+=r)):(void 0!==p[e.toId]&&(p[e.toId].x-=c*n,
p[e.toId].y-=c*r),
void 0!==p[e.fromId]&&(p[e.fromId].x+=c*n,p[e.fromId].y+=c*r)))
;s=1;for(var m=0;m<f.length;m++){var b=f[m]
;h=Math.min(s,Math.max(-s,p[b].springFx)),
d=Math.min(s,Math.max(-s,p[b].springFy)),
p[b].x+=h,p[b].y+=d}
for(var w=0,k=0,_=0;_<f.length;_++){var x=f[_]
;w+=p[x].x,k+=p[x].y}
for(var O=w/f.length,E=k/f.length,C=0;C<f.length;C++){
var S=f[C];p[S].x-=O,p[S].y-=E}}}]),t
}(),Xc=function(){function t(e,i,o){
Gh(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)
}return $h(t,[{key:"setOptions",value:function(t){
this.options=t}},{key:"solve",value:function(){
for(var t,e,i,o,n=this.body.nodes,r=this.physicsBody.physicsNodeIndices,s=this.physicsBody.forces,a=0;a<r.length;a++)t=-(o=n[r[a]]).x,
e=-o.y,
i=Math.sqrt(t*t+e*e),this._calculateForces(i,t,e,s,o)
}},{key:"_calculateForces",
value:function(t,e,i,o,n){
var r=0===t?0:this.options.centralGravity/t
;o[n.id].x=e*r,o[n.id].y=i*r}}]),t}()
;function Gc(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Kc=function(t){qd(i,t);var e=Gc(i)
;function i(t,o,n){var r
;return Gh(this,i),(r=e.call(this,t,o,n))._rng=_r("FORCE ATLAS 2 BASED REPULSION SOLVER"),
r}return $h(i,[{key:"_calculateForces",
value:function(t,e,i,o,n){
0===t&&(e=t=.1*this._rng()),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius))
;var r=o.edges.length+1,s=this.options.gravitationalConstant*n.mass*o.options.mass*r/Math.pow(t,2),a=e*s,h=i*s
;this.physicsBody.forces[o.id].x+=a,
this.physicsBody.forces[o.id].y+=h}}]),i}(Wc)
;function $c(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var Qc=function(t){qd(i,t);var e=$c(i)
;function i(t,o,n){
return Gh(this,i),e.call(this,t,o,n)}
return $h(i,[{key:"_calculateForces",
value:function(t,e,i,o,n){if(t>0){
var r=n.edges.length+1,s=this.options.centralGravity*r*n.options.mass
;o[n.id].x=e*s,o[n.id].y=i*s}}}]),i
}(Xc),Zc=function(){function t(e){
Gh(this,t),this.body=e,this.physicsBody={
physicsNodeIndices:[],physicsEdgeIndices:[],
forces:{},velocities:{}
},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,
this.previousStates={},
this.referenceState={},this.freezeCache={},this.renderTimer=void 0,
this.adaptiveTimestep=!1,
this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,
this.adaptiveInterval=3,this.stabilized=!1,
this.startedStabilization=!1,this.stabilizationIterations=0,
this.ready=!1,this.options={},
this.defaultOptions={enabled:!0,barnesHut:{
theta:.5,gravitationalConstant:-2e3,
centralGravity:.3,springLength:95,
springConstant:.04,damping:.09,avoidOverlap:0},
forceAtlas2Based:{theta:.5,
gravitationalConstant:-50,centralGravity:.01,
springConstant:.08,springLength:100,damping:.4,
avoidOverlap:0},repulsion:{centralGravity:.2,
springLength:200,springConstant:.05,
nodeDistance:100,damping:.09,avoidOverlap:0},
hierarchicalRepulsion:{centralGravity:0,
springLength:100,springConstant:.01,
nodeDistance:120,damping:.09},maxVelocity:50,
minVelocity:.75,solver:"barnesHut",stabilization:{
enabled:!0,iterations:1e3,updateInterval:50,
onlyDynamicEdges:!1,fit:!0},timestep:.5,
adaptiveTimestep:!0,wind:{x:0,y:0}
},bt(this.options,this.defaultOptions),this.timestep=.5,
this.layoutFailed=!1,this.bindEventListeners()}
return $h(t,[{key:"bindEventListeners",
value:function(){var t=this
;this.body.emitter.on("initPhysics",(function(){
t.initPhysics()
})),this.body.emitter.on("_layoutFailed",(function(){
t.layoutFailed=!0
})),this.body.emitter.on("resetPhysics",(function(){
t.stopSimulation(),t.ready=!1
})),this.body.emitter.on("disablePhysics",(function(){
t.physicsEnabled=!1,t.stopSimulation()
})),this.body.emitter.on("restorePhysics",(function(){
t.setOptions(t.options),!0===t.ready&&t.startSimulation()
})),this.body.emitter.on("startSimulation",(function(){
!0===t.ready&&t.startSimulation()
})),this.body.emitter.on("stopSimulation",(function(){
t.stopSimulation()
})),this.body.emitter.on("destroy",(function(){
t.stopSimulation(!1),t.body.emitter.off()
})),this.body.emitter.on("_dataChanged",(function(){
t.updatePhysicsData()}))}},{key:"setOptions",
value:function(t){
if(void 0!==t)if(!1===t)this.options.enabled=!1,this.physicsEnabled=!1,
this.stopSimulation();else if(!0===t)this.options.enabled=!0,
this.physicsEnabled=!0,
this.startSimulation();else{
this.physicsEnabled=!0,Fr(["stabilization"],this.options,t),
Zr(this.options,t,"stabilization"),
void 0===t.enabled&&(this.options.enabled=!0),
!1===this.options.enabled&&(this.physicsEnabled=!1,
this.stopSimulation());var e=this.options.wind
;e&&(("number"!=typeof e.x||fd(e.x))&&(e.x=0),
("number"!=typeof e.y||fd(e.y))&&(e.y=0)),
this.timestep=this.options.timestep}this.init()}
},{key:"init",value:function(){var t
;"forceAtlas2Based"===this.options.solver?(t=this.options.forceAtlas2Based,
this.nodesSolver=new Kc(this.body,this.physicsBody,t),
this.edgesSolver=new Uc(this.body,this.physicsBody,t),
this.gravitySolver=new Qc(this.body,this.physicsBody,t)):"repulsion"===this.options.solver?(t=this.options.repulsion,
this.nodesSolver=new Vc(this.body,this.physicsBody,t),
this.edgesSolver=new Uc(this.body,this.physicsBody,t),
this.gravitySolver=new Xc(this.body,this.physicsBody,t)):"hierarchicalRepulsion"===this.options.solver?(t=this.options.hierarchicalRepulsion,
this.nodesSolver=new qc(this.body,this.physicsBody,t),
this.edgesSolver=new Yc(this.body,this.physicsBody,t),
this.gravitySolver=new Xc(this.body,this.physicsBody,t)):(t=this.options.barnesHut,
this.nodesSolver=new Wc(this.body,this.physicsBody,t),
this.edgesSolver=new Uc(this.body,this.physicsBody,t),
this.gravitySolver=new Xc(this.body,this.physicsBody,t)),
this.modelOptions=t}},{key:"initPhysics",
value:function(){
!0===this.physicsEnabled&&!0===this.options.enabled?!0===this.options.stabilization.enabled?this.stabilize():(this.stabilized=!1,
this.ready=!0,
this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,
this.body.emitter.emit("fit"))}},{
key:"startSimulation",value:function(){var t
;!0===this.physicsEnabled&&!0===this.options.enabled?(this.stabilized=!1,
this.adaptiveTimestep=!1,
this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=Z(t=this.simulationStep).call(t,this),
this.body.emitter.on("initRedraw",this.viewFunction),
this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")
}},{key:"stopSimulation",value:function(){
var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
;this.stabilized=!0,
!0===t&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),
this.viewFunction=void 0,
!0===t&&this.body.emitter.emit("_stopRendering"))}
},{key:"simulationStep",value:function(){
var t=Jn()
;this.physicsTick(),(Jn()-t<.4*this.simulationInterval||!0===this.runDoubleSpeed)&&!1===this.stabilized&&(this.physicsTick(),
this.runDoubleSpeed=!0),
!0===this.stabilized&&this.stopSimulation()}},{
key:"_emitStabilized",value:function(){
var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations
;(this.stabilizationIterations>1||!0===this.startedStabilization)&&od((function(){
t.body.emitter.emit("stabilized",{iterations:e
}),t.startedStabilization=!1,t.stabilizationIterations=0
}),0)}},{key:"physicsStep",value:function(){
this.gravitySolver.solve(),this.nodesSolver.solve(),
this.edgesSolver.solve(),this.moveNodes()}},{
key:"adjustTimeStep",value:function(){
!0===this._evaluateStepQuality()?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,
this.timestep=Math.max(this.options.timestep,this.timestep/1.2))
}},{key:"physicsTick",value:function(){
this._startStabilizing(),!0!==this.stabilized&&(!0===this.adaptiveTimestep&&!0===this.adaptiveTimestepEnabled?(this.adaptiveCounter%this.adaptiveInterval==0?(this.timestep=2*this.timestep,
this.physicsStep(),
this.revert(),this.timestep=.5*this.timestep,this.physicsStep(),
this.physicsStep(),
this.adjustTimeStep()):this.physicsStep(),this.adaptiveCounter+=1):(this.timestep=this.options.timestep,
this.physicsStep()),
!0===this.stabilized&&this.revert(),this.stabilizationIterations++)
}},{key:"updatePhysicsData",value:function(){
this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],
this.physicsBody.physicsEdgeIndices=[]
;var t=this.body.nodes,e=this.body.edges
;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&!0===t[i].options.physics&&this.physicsBody.physicsNodeIndices.push(t[i].id)
;for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&!0===e[o].options.physics&&this.physicsBody.physicsEdgeIndices.push(e[o].id)
;for(var n=0;n<this.physicsBody.physicsNodeIndices.length;n++){
var r=this.physicsBody.physicsNodeIndices[n]
;this.physicsBody.forces[r]={x:0,y:0
},void 0===this.physicsBody.velocities[r]&&(this.physicsBody.velocities[r]={
x:0,y:0})}
for(var s in this.physicsBody.velocities)void 0===t[s]&&delete this.physicsBody.velocities[s]
}},{key:"revert",value:function(){
var t=er(this.previousStates),e=this.body.nodes,i=this.physicsBody.velocities
;this.referenceState={}
;for(var o=0;o<t.length;o++){var n=t[o]
;void 0!==e[n]?!0===e[n].options.physics&&(this.referenceState[n]={
positions:{x:e[n].x,y:e[n].y}
},i[n].x=this.previousStates[n].vx,i[n].y=this.previousStates[n].vy,
e[n].x=this.previousStates[n].x,
e[n].y=this.previousStates[n].y):delete this.previousStates[n]
}}},{key:"_evaluateStepQuality",value:function(){
var t,e,i=this.body.nodes,o=this.referenceState
;for(var n in this.referenceState)if(Object.prototype.hasOwnProperty.call(this.referenceState,n)&&void 0!==i[n]&&(t=i[n].x-o[n].positions.x,
e=i[n].y-o[n].positions.y,
Math.sqrt(Math.pow(t,2)+Math.pow(e,2))>.3))return!1
;return!0}},{key:"moveNodes",value:function(){
for(var t=this.physicsBody.physicsNodeIndices,e=0,i=0,o=0;o<t.length;o++){
var n=t[o],r=this._performStep(n)
;e=Math.max(e,r),i+=r}
this.adaptiveTimestepEnabled=i/t.length<5,this.stabilized=e<this.options.minVelocity
}},{key:"calculateComponentVelocity",
value:function(t,e,i){
t+=(e-this.modelOptions.damping*t)/i*this.timestep
;var o=this.options.maxVelocity||1e9
;return Math.abs(t)>o&&(t=t>0?o:-o),t}},{
key:"_performStep",value:function(t){
var e=this.body.nodes[t],i=this.physicsBody.forces[t]
;this.options.wind&&(i.x+=this.options.wind.x,
i.y+=this.options.wind.y)
;var o=this.physicsBody.velocities[t]
;return this.previousStates[t]={x:e.x,y:e.y,
vx:o.x,vy:o.y
},!1===e.options.fixed.x?(o.x=this.calculateComponentVelocity(o.x,i.x,e.options.mass),
e.x+=o.x*this.timestep):(i.x=0,
o.x=0),!1===e.options.fixed.y?(o.y=this.calculateComponentVelocity(o.y,i.y,e.options.mass),
e.y+=o.y*this.timestep):(i.y=0,
o.y=0),Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2))}
},{key:"_freezeNodes",value:function(){
var t=this.body.nodes
;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].x&&t[e].y){
var i=t[e].options.fixed;this.freezeCache[e]={
x:i.x,y:i.y},i.x=!0,i.y=!0}}},{
key:"_restoreFrozenNodes",value:function(){
var t=this.body.nodes
;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0!==this.freezeCache[e]&&(t[e].options.fixed.x=this.freezeCache[e].x,
t[e].options.fixed.y=this.freezeCache[e].y)
;this.freezeCache={}}},{key:"stabilize",
value:function(){
var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations
;"number"!=typeof e&&(e=this.options.stabilization.iterations,
console.log("The stabilize method needs a numeric amount of iterations. Switching to default: ",e)),
0!==this.physicsBody.physicsNodeIndices.length?(this.adaptiveTimestep=this.options.adaptiveTimestep,
this.body.emitter.emit("_resizeNodes"),
this.stopSimulation(),this.stabilized=!1,
this.body.emitter.emit("_blockRedraw"),
this.targetIterations=e,!0===this.options.stabilization.onlyDynamicEdges&&this._freezeNodes(),
this.stabilizationIterations=0,od((function(){
return t._stabilizationBatch()}),0)):this.ready=!0
}},{key:"_startStabilizing",value:function(){
return!0!==this.startedStabilization&&(this.body.emitter.emit("startStabilizing"),
this.startedStabilization=!0,!0)}},{
key:"_stabilizationBatch",value:function(){
var t=this,e=function(){
return!1===t.stabilized&&t.stabilizationIterations<t.targetIterations
},i=function(){
t.body.emitter.emit("stabilizationProgress",{
iterations:t.stabilizationIterations,
total:t.targetIterations})}
;this._startStabilizing()&&i()
;for(var o,n=0;e()&&n<this.options.stabilization.updateInterval;)this.physicsTick(),
n++
;i(),e()?od(Z(o=this._stabilizationBatch).call(o,this),0):this._finalizeStabilization()
}},{key:"_finalizeStabilization",value:function(){
this.body.emitter.emit("_allowRedraw"),
!0===this.options.stabilization.fit&&this.body.emitter.emit("fit"),
!0===this.options.stabilization.onlyDynamicEdges&&this._restoreFrozenNodes(),
this.body.emitter.emit("stabilizationIterationsDone"),
this.body.emitter.emit("_requestRedraw"),
!0===this.stabilized?this._emitStabilized():this.startSimulation(),
this.ready=!0}},{key:"_drawForces",
value:function(t){
for(var e=0;e<this.physicsBody.physicsNodeIndices.length;e++){
var i=this.physicsBody.physicsNodeIndices[e],o=this.body.nodes[i],n=this.physicsBody.forces[i],r=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.x,2)),s=Math.min(Math.max(5,r),15),a=3*s,h=Xr((180-180*Math.min(1,Math.max(0,.03*r)))/360,1,1),d={
x:o.x+20*n.x,y:o.y+20*n.y}
;t.lineWidth=s,t.strokeStyle=h,t.beginPath(),t.moveTo(o.x,o.y),
t.lineTo(d.x,d.y),t.stroke()
;var l=Math.atan2(n.y,n.x)
;t.fillStyle=h,xc.draw(t,{type:"arrow",point:d,
angle:l,length:a}),Qd(t).call(t)}}}]),t
}(),Jc=[].reverse,tu=[1,2];q({target:"Array",
proto:!0,forced:String(tu)===String(tu.reverse())
},{reverse:function(){
return Ut(this)&&(this.length=this.length),Jc.call(this)
}})
;var eu=K("Array").reverse,iu=Array.prototype,ou=function(t){
var e=t.reverse
;return t===iu||t instanceof Array&&e===iu.reverse?eu:e
},nu="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),ru=new Uint8Array(16)
;function su(){
if(!nu)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")
;return nu(ru)}
var au=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
;function hu(t){
return"string"==typeof t&&au.test(t)}
for(var du=[],lu=0;lu<256;++lu)du.push((lu+256).toString(16).substr(1))
;function cu(t,e,i){
var o=(t=t||{}).random||(t.rng||su)()
;if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){i=i||0
;for(var n=0;n<16;++n)e[i+n]=o[n];return e}
return function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(du[t[e+0]]+du[t[e+1]]+du[t[e+2]]+du[t[e+3]]+"-"+du[t[e+4]]+du[t[e+5]]+"-"+du[t[e+6]]+du[t[e+7]]+"-"+du[t[e+8]]+du[t[e+9]]+"-"+du[t[e+10]]+du[t[e+11]]+du[t[e+12]]+du[t[e+13]]+du[t[e+14]]+du[t[e+15]]).toLowerCase()
;if(!hu(i))throw TypeError("Stringified UUID is invalid")
;return i}(o)}var uu=function(){function t(){
Gh(this,t)}return $h(t,null,[{key:"getRange",
value:function(t){
var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,r=1e9,s=-1e9
;if(i.length>0)for(var a=0;a<i.length;a++)r>(e=t[i[a]]).shape.boundingBox.left&&(r=e.shape.boundingBox.left),
s<e.shape.boundingBox.right&&(s=e.shape.boundingBox.right),
o>e.shape.boundingBox.top&&(o=e.shape.boundingBox.top),
n<e.shape.boundingBox.bottom&&(n=e.shape.boundingBox.bottom)
;return 1e9===r&&-1e9===s&&1e9===o&&-1e9===n&&(o=0,
n=0,r=0,s=0),{minX:r,maxX:s,minY:o,maxY:n}}},{
key:"getRangeCore",value:function(t){
var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,r=1e9,s=-1e9
;if(i.length>0)for(var a=0;a<i.length;a++)r>(e=t[i[a]]).x&&(r=e.x),
s<e.x&&(s=e.x),o>e.y&&(o=e.y),n<e.y&&(n=e.y)
;return 1e9===r&&-1e9===s&&1e9===o&&-1e9===n&&(o=0,
n=0,r=0,s=0),{minX:r,maxX:s,minY:o,maxY:n}}},{
key:"findCenter",value:function(t){return{
x:.5*(t.maxX+t.minX),y:.5*(t.maxY+t.minY)}}},{
key:"cloneOptions",value:function(t,e){var i={}
;return void 0===e||"node"===e?(Nr(i,t.options,!0),
i.x=t.x,i.y=t.y,i.amountOfConnections=t.edges.length):Nr(i,t.options,!0),
i}}]),t}();function fu(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var pu=function(t){qd(i,t);var e=fu(i)
;function i(t,o,n,r,s,a){var h
;return Gh(this,i),(h=e.call(this,t,o,n,r,s,a)).isCluster=!0,
h.containedNodes={},h.containedEdges={},h}
return $h(i,[{key:"_openChildCluster",
value:function(t){var e=this,i=this.body.nodes[t]
;if(void 0===this.containedNodes[t])throw new Error("node with id: "+t+" not in current cluster")
;if(!i.isCluster)throw new Error("node with id: "+t+" is not a cluster")
;delete this.containedNodes[t],
Lr(i.edges,(function(t){
delete e.containedEdges[t.id]
})),Lr(i.containedNodes,(function(t,i){
e.containedNodes[i]=t
})),i.containedNodes={},Lr(i.containedEdges,(function(t,i){
e.containedEdges[i]=t
})),i.containedEdges={},Lr(i.edges,(function(t){
Lr(e.edges,(function(i){
var o,n,r=On(o=i.clusteringEdgeReplacingIds).call(o,t.id)
;-1!==r&&(Lr(t.clusteringEdgeReplacingIds,(function(t){
i.clusteringEdgeReplacingIds.push(t),
e.body.edges[t].edgeReplacedById=i.id
})),ds(n=i.clusteringEdgeReplacingIds).call(n,r,1))
}))})),i.edges=[]}}]),i}($l),vu=function(){
function t(e){var i=this
;Gh(this,t),this.body=e,this.clusteredNodes={},this.clusteredEdges={},
this.options={},
this.defaultOptions={},bt(this.options,this.defaultOptions),this.body.emitter.on("_resetData",(function(){
i.clusteredNodes={},i.clusteredEdges={}}))}
return $h(t,[{key:"clusterByHubsize",
value:function(t,e){
void 0===t?t=this._getHubSize():"object"===lr(t)&&(e=this._checkOptions(t),
t=this._getHubSize())
;for(var i=[],o=0;o<this.body.nodeIndices.length;o++){
var n=this.body.nodes[this.body.nodeIndices[o]]
;n.edges.length>=t&&i.push(n.id)}
for(var r=0;r<i.length;r++)this.clusterByConnection(i[r],e,!0)
;this.body.emitter.emit("_dataChanged")}},{
key:"cluster",value:function(){
var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;if(void 0===e.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.")
;e=this._checkOptions(e);var o={},n={}
;Lr(this.body.nodes,(function(i,r){
i.options&&!0===e.joinCondition(i.options)&&(o[r]=i,
Lr(i.edges,(function(e){
void 0===t.clusteredEdges[e.id]&&(n[e.id]=e)})))
})),this._cluster(o,n,e,i)}},{
key:"clusterByEdgeCount",value:function(t,e){
var i=this,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
;e=this._checkOptions(e)
;for(var n,r,s,a=[],h={},d=function(o){
var d={},l={},c=i.body.nodeIndices[o],u=i.body.nodes[c]
;if(void 0===h[c]){s=0,r=[]
;for(var f=0;f<u.edges.length;f++)n=u.edges[f],void 0===i.clusteredEdges[n.id]&&(n.toId!==n.fromId&&s++,
r.push(n));if(s===t){for(var p=function(t){
if(void 0===e.joinCondition||null===e.joinCondition)return!0
;var i=uu.cloneOptions(t)
;return e.joinCondition(i)
},v=!0,g=0;g<r.length;g++){n=r[g]
;var y=i._getConnectedId(n,c);if(!p(u)){v=!1;break
}l[n.id]=n,d[c]=u,d[y]=i.body.nodes[y],h[c]=!0}
if(er(d).length>0&&er(l).length>0&&!0===v){
var m=function(){
for(var t=0;t<a.length;++t)for(var e in d)if(void 0!==a[t].nodes[e])return a[t]
}();if(void 0!==m){
for(var b in d)void 0===m.nodes[b]&&(m.nodes[b]=d[b])
;for(var w in l)void 0===m.edges[w]&&(m.edges[w]=l[w])
}else a.push({nodes:d,edges:l})}}}
},l=0;l<this.body.nodeIndices.length;l++)d(l)
;for(var c=0;c<a.length;c++)this._cluster(a[c].nodes,a[c].edges,e,!1)
;!0===o&&this.body.emitter.emit("_dataChanged")}
},{key:"clusterOutliers",value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;this.clusterByEdgeCount(1,t,e)}},{
key:"clusterBridges",value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;this.clusterByEdgeCount(2,t,e)}},{
key:"clusterByConnection",value:function(t,e){
var i,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
;if(void 0===t)throw new Error("No nodeId supplied to clusterByConnection!")
;if(void 0===this.body.nodes[t])throw new Error("The nodeId given to clusterByConnection does not exist!")
;var n=this.body.nodes[t]
;void 0===(e=this._checkOptions(e,n)).clusterNodeProperties.x&&(e.clusterNodeProperties.x=n.x),
void 0===e.clusterNodeProperties.y&&(e.clusterNodeProperties.y=n.y),
void 0===e.clusterNodeProperties.fixed&&(e.clusterNodeProperties.fixed={},
e.clusterNodeProperties.fixed.x=n.options.fixed.x,
e.clusterNodeProperties.fixed.y=n.options.fixed.y)
;var r={},s={},a=n.id,h=uu.cloneOptions(n);r[a]=n
;for(var d=0;d<n.edges.length;d++){
var l=n.edges[d]
;if(void 0===this.clusteredEdges[l.id]){
var c=this._getConnectedId(l,a)
;if(void 0===this.clusteredNodes[c])if(c!==a)if(void 0===e.joinCondition)s[l.id]=l,
r[c]=this.body.nodes[c];else{
var u=uu.cloneOptions(this.body.nodes[c])
;!0===e.joinCondition(h,u)&&(s[l.id]=l,
r[c]=this.body.nodes[c])}else s[l.id]=l}}
var f=ar(i=er(r)).call(i,(function(t){
return r[t].id}))
;for(var p in r)if(Object.prototype.hasOwnProperty.call(r,p))for(var v=r[p],g=0;g<v.edges.length;g++){
var y=v.edges[g]
;On(f).call(f,this._getConnectedId(y,v.id))>-1&&(s[y.id]=y)
}this._cluster(r,s,e,o)}},{
key:"_createClusterEdges",value:function(t,e,i,o){
for(var n,r,s,a,h,d,l=er(t),c=[],u=0;u<l.length;u++){
s=t[r=l[u]]
;for(var f=0;f<s.edges.length;f++)n=s.edges[f],void 0===this.clusteredEdges[n.id]&&(n.toId==n.fromId?e[n.id]=n:n.toId==r?(a=i.id,
d=h=n.fromId):(a=n.toId,
h=i.id,d=a),void 0===t[d]&&c.push({edge:n,
fromId:h,toId:a}))}for(var p=[],v=function(t){
for(var e=0;e<p.length;e++){
var i=p[e],o=t.fromId===i.fromId&&t.toId===i.toId,n=t.fromId===i.toId&&t.toId===i.fromId
;if(o||n)return i}return null
},g=0;g<c.length;g++){var y=c[g],m=y.edge,b=v(y)
;null===b?(b=this._createClusteredEdge(y.fromId,y.toId,m,o),
p.push(b)):b.clusteringEdgeReplacingIds.push(m.id),
this.body.edges[m.id].edgeReplacedById=b.id,
this._backupEdgeOptions(m),m.setOptions({
physics:!1})}}},{key:"_checkOptions",
value:function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
;return void 0===t.clusterEdgeProperties&&(t.clusterEdgeProperties={}),
void 0===t.clusterNodeProperties&&(t.clusterNodeProperties={}),
t}},{key:"_cluster",value:function(t,e,i){
var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=[]
;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&void 0!==this.clusteredNodes[r]&&n.push(r)
;for(var s=0;s<n.length;++s)delete t[n[s]]
;if(0!=er(t).length&&(1!=er(t).length||1==i.clusterNodeProperties.allowSingleNodeCluster)){
var a=Nr({},i.clusterNodeProperties)
;if(void 0!==i.processProperties){var h=[]
;for(var d in t)if(Object.prototype.hasOwnProperty.call(t,d)){
var l=uu.cloneOptions(t[d]);h.push(l)}var c=[]
;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)&&"clusterEdge:"!==u.substr(0,12)){
var f=uu.cloneOptions(e[u],"edge");c.push(f)}
if(!(a=i.processProperties(a,h,c)))throw new Error("The processProperties function does not return properties!")
}void 0===a.id&&(a.id="cluster:"+cu());var p=a.id
;void 0===a.label&&(a.label="cluster")
;var v=void 0
;void 0===a.x&&(v=this._getClusterPosition(t),a.x=v.x),void 0===a.y&&(void 0===v&&(v=this._getClusterPosition(t)),
a.y=v.y),a.id=p
;var g=this.body.functions.createNode(a,pu)
;g.containedNodes=t,g.containedEdges=e,
g.clusterEdgeProperties=i.clusterEdgeProperties,
this.body.nodes[a.id]=g,this._clusterEdges(t,e,a,i.clusterEdgeProperties),
a.id=void 0,
!0===o&&this.body.emitter.emit("_dataChanged")}}
},{key:"_backupEdgeOptions",value:function(t){
void 0===this.clusteredEdges[t.id]&&(this.clusteredEdges[t.id]={
physics:t.options.physics})}},{key:"_restoreEdge",
value:function(t){var e=this.clusteredEdges[t.id]
;void 0!==e&&(t.setOptions({physics:e.physics
}),delete this.clusteredEdges[t.id])}},{
key:"isCluster",value:function(t){
return void 0!==this.body.nodes[t]?!0===this.body.nodes[t].isCluster:(console.log("Node does not exist."),
!1)}},{key:"_getClusterPosition",
value:function(t){
for(var e,i=er(t),o=t[i[0]].x,n=t[i[0]].x,r=t[i[0]].y,s=t[i[0]].y,a=1;a<i.length;a++)o=(e=t[i[a]]).x<o?e.x:o,
n=e.x>n?e.x:n,r=e.y<r?e.y:r,s=e.y>s?e.y:s;return{
x:.5*(o+n),y:.5*(r+s)}}},{key:"openCluster",
value:function(t,e){
var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
;if(void 0===t)throw new Error("No clusterNodeId supplied to openCluster.")
;var o=this.body.nodes[t]
;if(void 0===o)throw new Error("The clusterNodeId supplied to openCluster does not exist.")
;if(!0!==o.isCluster||void 0===o.containedNodes||void 0===o.containedEdges)throw new Error("The node:"+t+" is not a valid cluster.")
;var n=this.findNode(t),r=On(n).call(n,t)-1
;if(r>=0){var s=n[r]
;return this.body.nodes[s]._openChildCluster(t),delete this.body.nodes[t],
void(!0===i&&this.body.emitter.emit("_dataChanged"))
}var h=o.containedNodes,d=o.containedEdges
;if(void 0!==e&&void 0!==e.releaseFunction&&"function"==typeof e.releaseFunction){
var l={},c={x:o.x,y:o.y}
;for(var u in h)if(Object.prototype.hasOwnProperty.call(h,u)){
var f=this.body.nodes[u];l[u]={x:f.x,y:f.y}}
var p=e.releaseFunction(c,l)
;for(var v in h)if(Object.prototype.hasOwnProperty.call(h,v)){
var g=this.body.nodes[v]
;void 0!==p[v]&&(g.x=void 0===p[v].x?o.x:p[v].x,g.y=void 0===p[v].y?o.y:p[v].y)
}}else Lr(h,(function(t){
!1===t.options.fixed.x&&(t.x=o.x),!1===t.options.fixed.y&&(t.y=o.y)
}))
;for(var y in h)if(Object.prototype.hasOwnProperty.call(h,y)){
var m=this.body.nodes[y]
;m.vx=o.vx,m.vy=o.vy,m.setOptions({physics:!0
}),delete this.clusteredNodes[y]}
for(var b=[],w=0;w<o.edges.length;w++)b.push(o.edges[w])
;for(var k=0;k<b.length;k++){
for(var _=b[k],x=this._getConnectedId(_,t),O=this.clusteredNodes[x],E=0;E<_.clusteringEdgeReplacingIds.length;E++){
var C=_.clusteringEdgeReplacingIds[E],S=this.body.edges[C]
;if(void 0!==S)if(void 0!==O){
var T=this.body.nodes[O.clusterId]
;T.containedEdges[S.id]=S,delete d[S.id]
;var M=S.fromId,D=S.toId
;S.toId==x?D=O.clusterId:M=O.clusterId,this._createClusteredEdge(M,D,S,T.clusterEdgeProperties,{
hidden:!1,physics:!0})}else this._restoreEdge(S)}
_.remove()}
for(var P in d)Object.prototype.hasOwnProperty.call(d,P)&&this._restoreEdge(d[P])
;delete this.body.nodes[t],
!0===i&&this.body.emitter.emit("_dataChanged")}},{
key:"getNodesInCluster",value:function(t){var e=[]
;if(!0===this.isCluster(t)){
var i=this.body.nodes[t].containedNodes
;for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.push(this.body.nodes[o].id)
}return e}},{key:"findNode",value:function(t){
for(var e,i=[],o=0;void 0!==this.clusteredNodes[t]&&o<100;){
if(void 0===(e=this.body.nodes[t]))return[]
;i.push(e.id),t=this.clusteredNodes[t].clusterId,
o++}
return void 0===(e=this.body.nodes[t])?[]:(i.push(e.id),ou(i).call(i),i)
}},{key:"updateClusteredNode",value:function(t,e){
if(void 0===t)throw new Error("No clusteredNodeId supplied to updateClusteredNode.")
;if(void 0===e)throw new Error("No newOptions supplied to updateClusteredNode.")
;if(void 0===this.body.nodes[t])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.")
;this.body.nodes[t].setOptions(e),
this.body.emitter.emit("_dataChanged")}},{
key:"updateEdge",value:function(t,e){
if(void 0===t)throw new Error("No startEdgeId supplied to updateEdge.")
;if(void 0===e)throw new Error("No newOptions supplied to updateEdge.")
;if(void 0===this.body.edges[t])throw new Error("The startEdgeId supplied to updateEdge does not exist.")
;for(var i=this.getClusteredEdges(t),o=0;o<i.length;o++)this.body.edges[i[o]].setOptions(e)
;this.body.emitter.emit("_dataChanged")}},{
key:"getClusteredEdges",value:function(t){
for(var e=[],i=0;void 0!==t&&void 0!==this.body.edges[t]&&i<100;)e.push(this.body.edges[t].id),
t=this.body.edges[t].edgeReplacedById,i++
;return ou(e).call(e),e}},{key:"getBaseEdge",
value:function(t){return this.getBaseEdges(t)[0]}
},{key:"getBaseEdges",value:function(t){
for(var e=[t],i=[],o=[],n=0;e.length>0&&n<100;){
var r=e.pop();if(void 0!==r){
var s=this.body.edges[r];if(void 0!==s){n++
;var a=s.clusteringEdgeReplacingIds
;if(void 0===a)o.push(r);else for(var h=0;h<a.length;++h){
var d=a[h]
;-1===On(e).call(e,a)&&-1===On(i).call(i,a)&&e.push(d)
}i.push(r)}}}return o}},{key:"_getConnectedId",
value:function(t,e){
return t.toId!=e?t.toId:(t.fromId,t.fromId)}},{
key:"_getHubSize",value:function(){
for(var t=0,e=0,i=0,o=0,n=0;n<this.body.nodeIndices.length;n++){
var r=this.body.nodes[this.body.nodeIndices[n]]
;r.edges.length>o&&(o=r.edges.length),
t+=r.edges.length,e+=Math.pow(r.edges.length,2),
i+=1}t/=i
;var s=(e/=i)-Math.pow(t,2),a=Math.sqrt(s),h=Math.floor(t+2*a)
;return h>o&&(h=o),h}},{
key:"_createClusteredEdge",
value:function(t,e,i,o,n){
var r=uu.cloneOptions(i,"edge")
;Nr(r,o),r.from=t,r.to=e,r.id="clusterEdge:"+cu(),
void 0!==n&&Nr(r,n)
;var s=this.body.functions.createEdge(r)
;return s.clusteringEdgeReplacingIds=[i.id],
s.connect(),this.body.edges[s.id]=s,s}},{
key:"_clusterEdges",value:function(t,e,i,o){
if(e instanceof Lc){var n=e,r={};r[n.id]=n,e=r}
if(t instanceof $l){var s=t,a={};a[s.id]=s,t=a}
if(null==i)throw new Error("_clusterEdges: parameter clusterNode required")
;for(var h in void 0===o&&(o=i.clusterEdgeProperties),
this._createClusterEdges(t,e,i,o),
e)if(Object.prototype.hasOwnProperty.call(e,h)&&void 0!==this.body.edges[h]){
var d=this.body.edges[h]
;this._backupEdgeOptions(d),d.setOptions({
physics:!1})}
for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(this.clusteredNodes[l]={
clusterId:i.id,node:this.body.nodes[l]
},this.body.nodes[l].setOptions({physics:!1}))}},{
key:"_getClusterNodeForNode",value:function(t){
if(void 0!==t){var e=this.clusteredNodes[t]
;if(void 0!==e){var i=e.clusterId
;if(void 0!==i)return this.body.nodes[i]}}}},{
key:"_filter",value:function(t,e){var i=[]
;return Lr(t,(function(t){e(t)&&i.push(t)})),i}},{
key:"_updateState",value:function(){
var t,e=this,i=[],o={},n=function(t){
Lr(e.body.nodes,(function(e){
!0===e.isCluster&&t(e)}))}
;for(t in this.clusteredNodes)Object.prototype.hasOwnProperty.call(this.clusteredNodes,t)&&void 0===this.body.nodes[t]&&i.push(t)
;n((function(t){
for(var e=0;e<i.length;e++)delete t.containedNodes[i[e]]
}))
;for(var r=0;r<i.length;r++)delete this.clusteredNodes[i[r]]
;Lr(this.clusteredEdges,(function(t){
var i=e.body.edges[t]
;void 0!==i&&i.endPointsValid()||(o[t]=t)
})),n((function(t){
Lr(t.containedEdges,(function(t,e){
t.endPointsValid()||o[e]||(o[e]=e)}))
})),Lr(this.body.edges,(function(t,i){
var n=!0,r=t.clusteringEdgeReplacingIds
;if(void 0!==r){var s=0;Lr(r,(function(t){
var i=e.body.edges[t]
;void 0!==i&&i.endPointsValid()&&(s+=1)})),n=s>0}
t.endPointsValid()&&n||(o[i]=i)})),n((function(t){
Lr(o,(function(i){
delete t.containedEdges[i],Lr(t.edges,(function(n,r){
n.id!==i?n.clusteringEdgeReplacingIds=e._filter(n.clusteringEdgeReplacingIds,(function(t){
return!o[t]})):t.edges[r]=null
})),t.edges=e._filter(t.edges,(function(t){
return null!==t}))}))})),Lr(o,(function(t){
delete e.clusteredEdges[t]})),Lr(o,(function(t){
delete e.body.edges[t]
})),Lr(er(this.body.edges),(function(t){
var i=e.body.edges[t],o=e._isClusteredNode(i.fromId)||e._isClusteredNode(i.toId)
;if(o!==e._isClusteredEdge(i.id))if(o){
var n=e._getClusterNodeForNode(i.fromId)
;void 0!==n&&e._clusterEdges(e.body.nodes[i.fromId],i,n)
;var r=e._getClusterNodeForNode(i.toId)
;void 0!==r&&e._clusterEdges(e.body.nodes[i.toId],i,r)
}else delete e._clusterEdges[t],e._restoreEdge(i)
}));for(var s=!1,a=!0,h=function(){var t=[]
;n((function(e){
var i=er(e.containedNodes).length,o=!0===e.options.allowSingleNodeCluster
;(o&&i<1||!o&&i<2)&&t.push(e.id)}))
;for(var i=0;i<t.length;++i)e.openCluster(t[i],{},!1)
;a=t.length>0,s=s||a};a;)h()
;s&&this._updateState()}},{key:"_isClusteredNode",
value:function(t){
return void 0!==this.clusteredNodes[t]}},{
key:"_isClusteredEdge",value:function(t){
return void 0!==this.clusteredEdges[t]}}]),t}()
;function gu(t,e){var i
;if(void 0===br||null==ro(t)){
if(hr(t)||(i=function(t,e){var i;if(t){
if("string"==typeof t)return yu(t,e)
;var o=cr(i=Object.prototype.toString.call(t)).call(i,8,-1)
;return"Object"===o&&t.constructor&&(o=t.constructor.name),
"Map"===o||"Set"===o?yo(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?yu(t,e):void 0
}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i)
;var o=0,n=function(){};return{s:n,n:function(){
return o>=t.length?{done:!0}:{done:!1,value:t[o++]
}},e:function(t){throw t},f:n}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}var r,s=!0,a=!1;return{s:function(){i=no(t)},
n:function(){var t=i.next();return s=t.done,t},
e:function(t){a=!0,r=t},f:function(){try{
s||null==i.return||i.return()}finally{if(a)throw r
}}}}function yu(t,e){
(null==e||e>t.length)&&(e=t.length)
;for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i]
;return o}var mu=function(){function t(e,i){var o
;Gh(this,t),void 0!==window&&(o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame),
window.requestAnimationFrame=void 0===o?function(t){
t()
}:o,this.body=e,this.canvas=i,this.redrawRequested=!1,this.renderTimer=void 0,
this.requiresTimeout=!0,
this.renderingActive=!1,this.renderRequests=0,this.allowRedraw=!0,
this.dragging=!1,
this.zooming=!1,this.options={},this.defaultOptions={
hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,
hideNodesOnDrag:!1
},bt(this.options,this.defaultOptions),this._determineBrowserMethod(),
this.bindEventListeners()}return $h(t,[{
key:"bindEventListeners",value:function(){
var t,e=this
;this.body.emitter.on("dragStart",(function(){
e.dragging=!0
})),this.body.emitter.on("dragEnd",(function(){
e.dragging=!1
})),this.body.emitter.on("zoom",(function(){
e.zooming=!0,window.clearTimeout(e.zoomTimeoutId),
e.zoomTimeoutId=window.setTimeout((function(){
var t
;e.zooming=!1,Z(t=e._requestRedraw).call(t,e)()
}),250)
})),this.body.emitter.on("_resizeNodes",(function(){
e._resizeNodes()
})),this.body.emitter.on("_redraw",(function(){
!1===e.renderingActive&&e._redraw()
})),this.body.emitter.on("_blockRedraw",(function(){
e.allowRedraw=!1
})),this.body.emitter.on("_allowRedraw",(function(){
e.allowRedraw=!0,e.redrawRequested=!1
})),this.body.emitter.on("_requestRedraw",Z(t=this._requestRedraw).call(t,this)),
this.body.emitter.on("_startRendering",(function(){
e.renderRequests+=1,e.renderingActive=!0,
e._startRendering()
})),this.body.emitter.on("_stopRendering",(function(){
e.renderRequests-=1,e.renderingActive=e.renderRequests>0,
e.renderTimer=void 0
})),this.body.emitter.on("destroy",(function(){
e.renderRequests=0,e.allowRedraw=!1,
e.renderingActive=!1,!0===e.requiresTimeout?clearTimeout(e.renderTimer):window.cancelAnimationFrame(e.renderTimer),
e.body.emitter.off()}))}},{key:"setOptions",
value:function(t){
void 0!==t&&zr(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag"],this.options,t)
}},{key:"_requestNextFrame",value:function(t,e){
if("undefined"!=typeof window){var i,o=window
;return!0===this.requiresTimeout?i=o.setTimeout(t,e):o.requestAnimationFrame&&(i=o.requestAnimationFrame(t)),
i}}},{key:"_startRendering",value:function(){var t
;!0===this.renderingActive&&void 0===this.renderTimer&&(this.renderTimer=this._requestNextFrame(Z(t=this._renderStep).call(t,this),this.simulationInterval))
}},{key:"_renderStep",value:function(){
!0===this.renderingActive&&(this.renderTimer=void 0,
!0===this.requiresTimeout&&this._startRendering(),
this._redraw(),!1===this.requiresTimeout&&this._startRendering())
}},{key:"redraw",value:function(){
this.body.emitter.emit("setSize"),this._redraw()}
},{key:"_requestRedraw",value:function(){
var t=this
;!0!==this.redrawRequested&&!1===this.renderingActive&&!0===this.allowRedraw&&(this.redrawRequested=!0,
this._requestNextFrame((function(){t._redraw(!1)
}),0))}},{key:"_redraw",value:function(){
var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
;if(!0===this.allowRedraw){
this.body.emitter.emit("initRedraw"),this.redrawRequested=!1
;var e={drawExternalLabels:null}
;0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),
this.canvas.setTransform()
;var i=this.canvas.getContext(),o=this.canvas.frame.canvas.clientWidth,n=this.canvas.frame.canvas.clientHeight
;if(i.clearRect(0,0,o,n),
0===this.canvas.frame.clientWidth)return
;if(i.save(),i.translate(this.body.view.translation.x,this.body.view.translation.y),
i.scale(this.body.view.scale,this.body.view.scale),
i.beginPath(),this.body.emitter.emit("beforeDrawing",i),
i.closePath(),!1===t&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawEdges(i),
!1===this.dragging||!0===this.dragging&&!1===this.options.hideNodesOnDrag){
var s=this._drawNodes(i,t).drawExternalLabels
;e.drawExternalLabels=s}
!1===t&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawArrows(i),
null!=e.drawExternalLabels&&e.drawExternalLabels(),
!1===t&&this._drawSelectionBox(i),
i.beginPath(),this.body.emitter.emit("afterDrawing",i),
i.closePath(),i.restore(),
!0===t&&i.clearRect(0,0,o,n)}}},{
key:"_resizeNodes",value:function(){
this.canvas.setTransform()
;var t=this.canvas.getContext()
;t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),
t.scale(this.body.view.scale,this.body.view.scale)
;var e,i=this.body.nodes
;for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&((e=i[o]).resize(t),
e.updateBoundingBox(t,e.selected));t.restore()}},{
key:"_drawNodes",value:function(t){
for(var e,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.body.nodes,r=this.body.nodeIndices,s=[],a=[],h=20,d=this.canvas.DOMtoCanvas({
x:-h,y:-h}),l=this.canvas.DOMtoCanvas({
x:this.canvas.frame.canvas.clientWidth+h,
y:this.canvas.frame.canvas.clientHeight+h}),c={
top:d.y,left:d.x,bottom:l.y,right:l.x
},u=[],f=0;f<r.length;f++)if((e=n[r[f]]).hover)a.push(r[f]);else if(e.isSelected())s.push(r[f]);else if(!0===o){
var p=e.draw(t)
;null!=p.drawExternalLabel&&u.push(p.drawExternalLabel)
}else if(!0===e.isBoundingBoxOverlappingWith(c)){
var v=e.draw(t)
;null!=v.drawExternalLabel&&u.push(v.drawExternalLabel)
}else e.updateBoundingBox(t,e.selected)
;var g=s.length,y=a.length;for(i=0;i<g;i++){
var m=(e=n[s[i]]).draw(t)
;null!=m.drawExternalLabel&&u.push(m.drawExternalLabel)
}for(i=0;i<y;i++){var b=(e=n[a[i]]).draw(t)
;null!=b.drawExternalLabel&&u.push(b.drawExternalLabel)
}return{drawExternalLabels:function(){
var t,e=gu(u);try{
for(e.s();!(t=e.n()).done;)(0,t.value)()}catch(t){
e.e(t)}finally{e.f()}}}}},{key:"_drawEdges",
value:function(t){
for(var e=this.body.edges,i=this.body.edgeIndices,o=0;o<i.length;o++){
var n=e[i[o]];!0===n.connected&&n.draw(t)}}},{
key:"_drawArrows",value:function(t){
for(var e=this.body.edges,i=this.body.edgeIndices,o=0;o<i.length;o++){
var n=e[i[o]];!0===n.connected&&n.drawArrows(t)}}
},{key:"_determineBrowserMethod",value:function(){
if("undefined"!=typeof window){
var t=navigator.userAgent.toLowerCase()
;this.requiresTimeout=!1,(-1!=On(t).call(t,"msie 9.0")||-1!=On(t).call(t,"safari")&&On(t).call(t,"chrome")<=-1)&&(this.requiresTimeout=!0)
}else this.requiresTimeout=!0}},{
key:"_drawSelectionBox",value:function(t){
if(this.body.selectionBox.show){t.beginPath()
;var e=this.body.selectionBox.position.end.x-this.body.selectionBox.position.start.x,i=this.body.selectionBox.position.end.y-this.body.selectionBox.position.start.y
;t.rect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i),
t.fillStyle="rgba(151, 194, 252, 0.2)",
t.fillRect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i),
t.strokeStyle="rgba(151, 194, 252, 1)",t.stroke()
}else t.closePath()}}]),t}(),bu=F.setInterval
;function wu(t,e){e.inputHandler=function(t){
t.isFirst&&e(t)
},t.on("hammer.input",e.inputHandler)}
function ku(t,e){
return e.inputHandler=function(t){t.isFinal&&e(t)
},t.on("hammer.input",e.inputHandler)}
var _u=function(){function t(e){var i
;Gh(this,t),this.body=e,this.pixelRatio=1,this.resizeTimer=void 0,
this.resizeFunction=Z(i=this._onResize).call(i,this),
this.cameraState={},this.initialized=!1,
this.canvasViewCenter={},this.options={},
this.defaultOptions={autoResize:!0,height:"100%",
width:"100%"
},bt(this.options,this.defaultOptions),this.bindEventListeners()
}return $h(t,[{key:"bindEventListeners",
value:function(){var t,e=this
;this.body.emitter.once("resize",(function(t){
0!==t.width&&(e.body.view.translation.x=.5*t.width),
0!==t.height&&(e.body.view.translation.y=.5*t.height)
})),this.body.emitter.on("setSize",Z(t=this.setSize).call(t,this)),
this.body.emitter.on("destroy",(function(){
e.hammerFrame.destroy(),e.hammer.destroy(),
e._cleanUp()}))}},{key:"setOptions",
value:function(t){var e,i,o,n,r,s,a=this
;void 0!==t&&zr(["width","height","autoResize"],this.options,t),
!0===this.options.autoResize&&(this._cleanUp(),
this.resizeTimer=bu((function(){
!0===a.setSize()&&a.body.emitter.emit("_requestRedraw")
}),1e3),this.resizeFunction=Z(e=this._onResize).call(e,this),
i=window,o="resize",
n=this.resizeFunction,i.addEventListener?(void 0===r&&(r=!1),
"mousewheel"===o&&On(s=navigator.userAgent).call(s,"Firefox")>=0&&(o="DOMMouseScroll"),
i.addEventListener(o,n,r)):i.attachEvent("on"+o,n))
}},{key:"_cleanUp",value:function(){var t,e,i,o,n
;void 0!==this.resizeTimer&&clearInterval(this.resizeTimer),
t=window,e="resize",
i=this.resizeFunction,t.removeEventListener?(void 0===o&&(o=!1),
"mousewheel"===e&&On(n=navigator.userAgent).call(n,"Firefox")>=0&&(e="DOMMouseScroll"),
t.removeEventListener(e,i,o)):t.detachEvent("on"+e,i),
this.resizeFunction=void 0}},{key:"_onResize",
value:function(){
this.setSize(),this.body.emitter.emit("_redraw")}
},{key:"_getCameraState",value:function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pixelRatio
;!0===this.initialized&&(this.cameraState.previousWidth=this.frame.canvas.width/t,
this.cameraState.previousHeight=this.frame.canvas.height/t,
this.cameraState.scale=this.body.view.scale,
this.cameraState.position=this.DOMtoCanvas({
x:.5*this.frame.canvas.width/t,
y:.5*this.frame.canvas.height/t}))}},{
key:"_setCameraState",value:function(){
if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0&&this.cameraState.previousHeight>0){
var t=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,e=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,i=this.cameraState.scale
;1!=t&&1!=e?i=.5*this.cameraState.scale*(t+e):1!=t?i=this.cameraState.scale*t:1!=e&&(i=this.cameraState.scale*e),
this.body.view.scale=i;var o=this.DOMtoCanvas({
x:.5*this.frame.canvas.clientWidth,
y:.5*this.frame.canvas.clientHeight}),n={
x:o.x-this.cameraState.position.x,
y:o.y-this.cameraState.position.y}
;this.body.view.translation.x+=n.x*this.body.view.scale,
this.body.view.translation.y+=n.y*this.body.view.scale
}}},{key:"_prepareValue",value:function(t){
if("number"==typeof t)return t+"px"
;if("string"==typeof t){
if(-1!==On(t).call(t,"%")||-1!==On(t).call(t,"px"))return t
;if(-1===On(t).call(t,"%"))return t+"px"}
throw new Error("Could not use the value supplied for width or height:"+t)
}},{key:"_create",value:function(){
for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild)
;if(this.frame=document.createElement("div"),
this.frame.className="vis-network",
this.frame.style.position="relative",this.frame.style.overflow="hidden",
this.frame.tabIndex=900,
this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",
this.frame.appendChild(this.frame.canvas),
this.frame.canvas.getContext)this._setPixelRatio(),
this.setTransform();else{
var t=document.createElement("DIV")
;t.style.color="red",t.style.fontWeight="bold",
t.style.padding="10px",t.innerHTML="Error: your browser does not support HTML canvas",
this.frame.canvas.appendChild(t)}
this.body.container.appendChild(this.frame),this.body.view.scale=1,
this.body.view.translation={
x:.5*this.frame.canvas.clientWidth,
y:.5*this.frame.canvas.clientHeight
},this._bindHammer()}},{key:"_bindHammer",
value:function(){var t=this
;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},
this.pinch={},this.hammer=new Uh(this.frame.canvas),
this.hammer.get("pinch").set({enable:!0
}),this.hammer.get("pan").set({threshold:5,
direction:Uh.DIRECTION_ALL
}),wu(this.hammer,(function(e){
t.body.eventListeners.onTouch(e)
})),this.hammer.on("tap",(function(e){
t.body.eventListeners.onTap(e)
})),this.hammer.on("doubletap",(function(e){
t.body.eventListeners.onDoubleTap(e)
})),this.hammer.on("press",(function(e){
t.body.eventListeners.onHold(e)
})),this.hammer.on("panstart",(function(e){
t.body.eventListeners.onDragStart(e)
})),this.hammer.on("panmove",(function(e){
t.body.eventListeners.onDrag(e)
})),this.hammer.on("panend",(function(e){
t.body.eventListeners.onDragEnd(e)
})),this.hammer.on("pinch",(function(e){
t.body.eventListeners.onPinch(e)
})),this.frame.canvas.addEventListener("wheel",(function(e){
t.body.eventListeners.onMouseWheel(e)
})),this.frame.canvas.addEventListener("mousemove",(function(e){
t.body.eventListeners.onMouseMove(e)
})),this.frame.canvas.addEventListener("contextmenu",(function(e){
t.body.eventListeners.onContext(e)
})),this.hammerFrame=new Uh(this.frame),ku(this.hammerFrame,(function(e){
t.body.eventListeners.onRelease(e)}))}},{
key:"setSize",value:function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.width,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.height
;t=this._prepareValue(t),e=this._prepareValue(e)
;var i=!1,o=this.frame.canvas.width,n=this.frame.canvas.height,r=this.pixelRatio
;if(this._setPixelRatio(),
t!=this.options.width||e!=this.options.height||this.frame.style.width!=t||this.frame.style.height!=e)this._getCameraState(r),
this.frame.style.width=t,
this.frame.style.height=e,this.frame.canvas.style.width="100%",
this.frame.canvas.style.height="100%",
this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),
this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),
this.options.width=t,
this.options.height=e,this.canvasViewCenter={
x:.5*this.frame.clientWidth,
y:.5*this.frame.clientHeight},i=!0;else{
var s=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),a=Math.round(this.frame.canvas.clientHeight*this.pixelRatio)
;this.frame.canvas.width===s&&this.frame.canvas.height===a||this._getCameraState(r),
this.frame.canvas.width!==s&&(this.frame.canvas.width=s,
i=!0),this.frame.canvas.height!==a&&(this.frame.canvas.height=a,
i=!0)}
return!0===i&&(this.body.emitter.emit("resize",{
width:Math.round(this.frame.canvas.width/this.pixelRatio),
height:Math.round(this.frame.canvas.height/this.pixelRatio),
oldWidth:Math.round(o/this.pixelRatio),
oldHeight:Math.round(n/this.pixelRatio)
}),this._setCameraState()),this.initialized=!0,i}
},{key:"getContext",value:function(){
return this.frame.canvas.getContext("2d")}},{
key:"_determinePixelRatio",value:function(){
var t=this.getContext()
;if(void 0===t)throw new Error("Could not get canvax context")
;var e=1
;return"undefined"!=typeof window&&(e=window.devicePixelRatio||1),e/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)
}},{key:"_setPixelRatio",value:function(){
this.pixelRatio=this._determinePixelRatio()}},{
key:"setTransform",value:function(){
var t=this.getContext()
;if(void 0===t)throw new Error("Could not get canvax context")
;t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
}},{key:"_XconvertDOMtoCanvas",value:function(t){
return(t-this.body.view.translation.x)/this.body.view.scale
}},{key:"_XconvertCanvasToDOM",value:function(t){
return t*this.body.view.scale+this.body.view.translation.x
}},{key:"_YconvertDOMtoCanvas",value:function(t){
return(t-this.body.view.translation.y)/this.body.view.scale
}},{key:"_YconvertCanvasToDOM",value:function(t){
return t*this.body.view.scale+this.body.view.translation.y
}},{key:"canvasToDOM",value:function(t){return{
x:this._XconvertCanvasToDOM(t.x),
y:this._YconvertCanvasToDOM(t.y)}}},{
key:"DOMtoCanvas",value:function(t){return{
x:this._XconvertDOMtoCanvas(t.x),
y:this._YconvertDOMtoCanvas(t.y)}}}]),t
}(),xu=function(){function t(e,i){var o,n,r=this
;Gh(this,t),this.body=e,this.canvas=i,
this.animationSpeed=1/this.renderRefreshRate,
this.animationEasingFunction="easeInOutQuint",
this.easingTime=0,this.sourceScale=0,
this.targetScale=0,this.sourceTranslation=0,
this.targetTranslation=0,this.lockedOnNodeId=void 0,
this.lockedOnNodeOffset=void 0,
this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",Z(o=this.fit).call(o,this)),
this.body.emitter.on("animationFinished",(function(){
r.body.emitter.emit("_stopRendering")
})),this.body.emitter.on("unlockNode",Z(n=this.releaseNode).call(n,this))
}return $h(t,[{key:"setOptions",value:function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
;this.options=t}},{key:"fit",value:function(){
var t,e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{
nodes:[]
},o=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
;void 0!==(i=bt({},i)).nodes&&0!==i.nodes.length||(i.nodes=this.body.nodeIndices)
;var n=this.canvas.frame.canvas.clientWidth,r=this.canvas.frame.canvas.clientHeight
;if(0===n||0===r)e=1,
t=uu.getRange(this.body.nodes,i.nodes);else if(!0===o){
var s=0
;for(var a in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,a)&&!0===this.body.nodes[a].predefinedPosition&&(s+=1)
;if(s>.5*this.body.nodeIndices.length)return void this.fit(i,!1)
;t=uu.getRange(this.body.nodes,i.nodes),
e=12.662/(this.body.nodeIndices.length+7.4147)+.0964822,
e*=Math.min(n/600,r/600)}else{
this.body.emitter.emit("_resizeNodes"),t=uu.getRange(this.body.nodes,i.nodes)
;var f=n/(1.1*Math.abs(t.maxX-t.minX)),p=r/(1.1*Math.abs(t.maxY-t.minY))
;e=f<=p?f:p}(e>1||0===e)&&(e=1);var g={
position:uu.findCenter(t),scale:e,
animation:i.animation};this.moveTo(g)}},{
key:"focus",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
;if(void 0!==this.body.nodes[t]){var i={
x:this.body.nodes[t].x,y:this.body.nodes[t].y}
;e.position=i,e.lockedOnNode=t,this.moveTo(e)
}else console.log("Node: "+t+" cannot be found.")}
},{key:"moveTo",value:function(t){if(void 0!==t){
if(null!=t.offset){if(null!=t.offset.x){
if(t.offset.x=+t.offset.x,!ud(t.offset.x))throw new TypeError('The option "offset.x" has to be a finite number.')
}else t.offset.x=0;if(null!=t.offset.y){
if(t.offset.y=+t.offset.y,!ud(t.offset.y))throw new TypeError('The option "offset.y" has to be a finite number.')
}else t.offset.x=0}else t.offset={x:0,y:0}
;if(null!=t.position){if(null!=t.position.x){
if(t.position.x=+t.position.x,!ud(t.position.x))throw new TypeError('The option "position.x" has to be a finite number.')
}else t.position.x=0;if(null!=t.position.y){
if(t.position.y=+t.position.y,!ud(t.position.y))throw new TypeError('The option "position.y" has to be a finite number.')
}else t.position.x=0
}else t.position=this.getViewPosition()
;if(null!=t.scale){
if(t.scale=+t.scale,!(t.scale>0))throw new TypeError('The option "scale" has to be a number greater than zero.')
}else t.scale=this.body.view.scale
;void 0===t.animation&&(t.animation={duration:0
}),!1===t.animation&&(t.animation={duration:0
}),!0===t.animation&&(t.animation={}),
void 0===t.animation.duration&&(t.animation.duration=1e3),
void 0===t.animation.easingFunction&&(t.animation.easingFunction="easeInOutQuad"),
this.animateView(t)}else t={}}},{
key:"animateView",value:function(t){
if(void 0!==t){
this.animationEasingFunction=t.animation.easingFunction,this.releaseNode(),
!0===t.locked&&(this.lockedOnNodeId=t.lockedOnNode,
this.lockedOnNodeOffset=t.offset),
0!=this.easingTime&&this._transitionRedraw(!0),
this.sourceScale=this.body.view.scale,
this.sourceTranslation=this.body.view.translation,
this.targetScale=t.scale,this.body.view.scale=this.targetScale
;var e,i,o=this.canvas.DOMtoCanvas({
x:.5*this.canvas.frame.canvas.clientWidth,
y:.5*this.canvas.frame.canvas.clientHeight
}),n=o.x-t.position.x,r=o.y-t.position.y
;this.targetTranslation={
x:this.sourceTranslation.x+n*this.targetScale+t.offset.x,
y:this.sourceTranslation.y+r*this.targetScale+t.offset.y
},0===t.animation.duration?null!=this.lockedOnNodeId?(this.viewFunction=Z(e=this._lockedRedraw).call(e,this),
this.body.emitter.on("initRedraw",this.viewFunction)):(this.body.view.scale=this.targetScale,
this.body.view.translation=this.targetTranslation,
this.body.emitter.emit("_requestRedraw")):(this.animationSpeed=1/(60*t.animation.duration*.001)||1/60,
this.animationEasingFunction=t.animation.easingFunction,
this.viewFunction=Z(i=this._transitionRedraw).call(i,this),
this.body.emitter.on("initRedraw",this.viewFunction),
this.body.emitter.emit("_startRendering"))}}},{
key:"_lockedRedraw",value:function(){
var t=this.body.nodes[this.lockedOnNodeId].x,e=this.body.nodes[this.lockedOnNodeId].y,i=this.canvas.DOMtoCanvas({
x:.5*this.canvas.frame.canvas.clientWidth,
y:.5*this.canvas.frame.canvas.clientHeight
}),o=i.x-t,n=i.y-e,r=this.body.view.translation,s={
x:r.x+o*this.body.view.scale+this.lockedOnNodeOffset.x,
y:r.y+n*this.body.view.scale+this.lockedOnNodeOffset.y
};this.body.view.translation=s}},{
key:"releaseNode",value:function(){
void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),
this.lockedOnNodeId=void 0,
this.lockedOnNodeOffset=void 0)}},{
key:"_transitionRedraw",value:function(){
var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
;this.easingTime+=this.animationSpeed,
this.easingTime=!0===t?1:this.easingTime
;var i,e=Jr[this.animationEasingFunction](this.easingTime)
;this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*e,
this.body.view.translation={
x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*e,
y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*e
},
this.easingTime>=1&&(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,
null!=this.lockedOnNodeId&&(this.viewFunction=Z(i=this._lockedRedraw).call(i,this),
this.body.emitter.on("initRedraw",this.viewFunction)),
this.body.emitter.emit("animationFinished"))}},{
key:"getScale",value:function(){
return this.body.view.scale}},{
key:"getViewPosition",value:function(){
return this.canvas.DOMtoCanvas({
x:.5*this.canvas.frame.canvas.clientWidth,
y:.5*this.canvas.frame.canvas.clientHeight})}}]),t
}(),Ou=function(){function t(e,i){var o=this
;Gh(this,t),this.body=e,this.canvas=i,
this.iconsCreated=!1,this.navigationHammers=[],
this.boundFunctions={},this.touchTime=0,
this.activated=!1,this.body.emitter.on("activate",(function(){
o.activated=!0,o.configureKeyboardBindings()
})),this.body.emitter.on("deactivate",(function(){
o.activated=!1,o.configureKeyboardBindings()
})),this.body.emitter.on("destroy",(function(){
void 0!==o.keycharm&&o.keycharm.destroy()
})),this.options={}}return $h(t,[{
key:"setOptions",value:function(t){
void 0!==t&&(this.options=t,this.create())}},{
key:"create",value:function(){
!0===this.options.navigationButtons?!1===this.iconsCreated&&this.loadNavigationElements():!0===this.iconsCreated&&this.cleanNavigation(),
this.configureKeyboardBindings()}},{
key:"cleanNavigation",value:function(){
if(0!=this.navigationHammers.length){
for(var t=0;t<this.navigationHammers.length;t++)this.navigationHammers[t].destroy()
;this.navigationHammers=[]}
this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),
this.iconsCreated=!1}},{
key:"loadNavigationElements",value:function(){
var t=this
;this.cleanNavigation(),this.navigationDOM={}
;var e=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],i=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"]
;this.navigationDOM.wrapper=document.createElement("div"),
this.navigationDOM.wrapper.className="vis-navigation",
this.canvas.frame.appendChild(this.navigationDOM.wrapper)
;for(var o=0;o<e.length;o++){
this.navigationDOM[e[o]]=document.createElement("div"),
this.navigationDOM[e[o]].className="vis-button vis-"+e[o],
this.navigationDOM.wrapper.appendChild(this.navigationDOM[e[o]])
;var n,r,s=new Uh(this.navigationDOM[e[o]])
;"_fit"===i[o]?wu(s,Z(n=this._fit).call(n,this)):wu(s,Z(r=this.bindToRedraw).call(r,this,i[o])),
this.navigationHammers.push(s)}
var a=new Uh(this.canvas.frame);ku(a,(function(){
t._stopMovement()
})),this.navigationHammers.push(a),this.iconsCreated=!0
}},{key:"bindToRedraw",value:function(t){var e
;void 0===this.boundFunctions[t]&&(this.boundFunctions[t]=Z(e=this[t]).call(e,this),
this.body.emitter.on("initRedraw",this.boundFunctions[t]),
this.body.emitter.emit("_startRendering"))}},{
key:"unbindFromRedraw",value:function(t){
void 0!==this.boundFunctions[t]&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),
this.body.emitter.emit("_stopRendering"),
delete this.boundFunctions[t])}},{key:"_fit",
value:function(){
(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{
duration:700
}),this.touchTime=(new Date).valueOf())}},{
key:"_stopMovement",value:function(){
for(var t in this.boundFunctions)Object.prototype.hasOwnProperty.call(this.boundFunctions,t)&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),
this.body.emitter.emit("_stopRendering"))
;this.boundFunctions={}}},{key:"_moveUp",
value:function(){
this.body.view.translation.y+=this.options.keyboard.speed.y
}},{key:"_moveDown",value:function(){
this.body.view.translation.y-=this.options.keyboard.speed.y
}},{key:"_moveLeft",value:function(){
this.body.view.translation.x+=this.options.keyboard.speed.x
}},{key:"_moveRight",value:function(){
this.body.view.translation.x-=this.options.keyboard.speed.x
}},{key:"_zoomIn",value:function(){
var t=this.body.view.scale,e=this.body.view.scale*(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,r=(1-o)*this.canvas.canvasViewCenter.y+i.y*o
;this.body.view.scale=e,
this.body.view.translation={x:n,y:r
},this.body.emitter.emit("zoom",{direction:"+",
scale:this.body.view.scale,pointer:null})}},{
key:"_zoomOut",value:function(){
var t=this.body.view.scale,e=this.body.view.scale/(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,r=(1-o)*this.canvas.canvasViewCenter.y+i.y*o
;this.body.view.scale=e,
this.body.view.translation={x:n,y:r
},this.body.emitter.emit("zoom",{direction:"-",
scale:this.body.view.scale,pointer:null})}},{
key:"configureKeyboardBindings",value:function(){
var t,e,i,o,n,r,s,a,h,d,l,c,u,f,p,v,g,y,m,b,w,k,_,x,O=this
;void 0!==this.keycharm&&this.keycharm.destroy(),
!0===this.options.keyboard.enabled&&(!0===this.options.keyboard.bindToWindow?this.keycharm=ia({
container:window,preventDefault:!0
}):this.keycharm=ia({container:this.canvas.frame,
preventDefault:!0
}),this.keycharm.reset(),!0===this.activated&&(Z(t=this.keycharm).call(t,"up",(function(){
O.bindToRedraw("_moveUp")
}),"keydown"),Z(e=this.keycharm).call(e,"down",(function(){
O.bindToRedraw("_moveDown")
}),"keydown"),Z(i=this.keycharm).call(i,"left",(function(){
O.bindToRedraw("_moveLeft")
}),"keydown"),Z(o=this.keycharm).call(o,"right",(function(){
O.bindToRedraw("_moveRight")
}),"keydown"),Z(n=this.keycharm).call(n,"=",(function(){
O.bindToRedraw("_zoomIn")
}),"keydown"),Z(r=this.keycharm).call(r,"num+",(function(){
O.bindToRedraw("_zoomIn")
}),"keydown"),Z(s=this.keycharm).call(s,"num-",(function(){
O.bindToRedraw("_zoomOut")
}),"keydown"),Z(a=this.keycharm).call(a,"-",(function(){
O.bindToRedraw("_zoomOut")
}),"keydown"),Z(h=this.keycharm).call(h,"[",(function(){
O.bindToRedraw("_zoomOut")
}),"keydown"),Z(d=this.keycharm).call(d,"]",(function(){
O.bindToRedraw("_zoomIn")
}),"keydown"),Z(l=this.keycharm).call(l,"pageup",(function(){
O.bindToRedraw("_zoomIn")
}),"keydown"),Z(c=this.keycharm).call(c,"pagedown",(function(){
O.bindToRedraw("_zoomOut")
}),"keydown"),Z(u=this.keycharm).call(u,"up",(function(){
O.unbindFromRedraw("_moveUp")
}),"keyup"),Z(f=this.keycharm).call(f,"down",(function(){
O.unbindFromRedraw("_moveDown")
}),"keyup"),Z(p=this.keycharm).call(p,"left",(function(){
O.unbindFromRedraw("_moveLeft")
}),"keyup"),Z(v=this.keycharm).call(v,"right",(function(){
O.unbindFromRedraw("_moveRight")
}),"keyup"),Z(g=this.keycharm).call(g,"=",(function(){
O.unbindFromRedraw("_zoomIn")
}),"keyup"),Z(y=this.keycharm).call(y,"num+",(function(){
O.unbindFromRedraw("_zoomIn")
}),"keyup"),Z(m=this.keycharm).call(m,"num-",(function(){
O.unbindFromRedraw("_zoomOut")
}),"keyup"),Z(b=this.keycharm).call(b,"-",(function(){
O.unbindFromRedraw("_zoomOut")
}),"keyup"),Z(w=this.keycharm).call(w,"[",(function(){
O.unbindFromRedraw("_zoomOut")
}),"keyup"),Z(k=this.keycharm).call(k,"]",(function(){
O.unbindFromRedraw("_zoomIn")
}),"keyup"),Z(_=this.keycharm).call(_,"pageup",(function(){
O.unbindFromRedraw("_zoomIn")
}),"keyup"),Z(x=this.keycharm).call(x,"pagedown",(function(){
O.unbindFromRedraw("_zoomOut")}),"keyup")))}}]),t
}(),Eu=function(){function t(e,i){
Gh(this,t),this.container=e,this.overflowMethod=i||"cap",
this.x=0,this.y=0,this.padding=5,
this.hidden=!1,this.frame=document.createElement("div"),
this.frame.className="vis-tooltip",
this.container.appendChild(this.frame)}
return $h(t,[{key:"setPosition",
value:function(t,e){this.x=Go(t),this.y=Go(e)}},{
key:"setText",value:function(t){
t instanceof Element?(this.frame.innerHTML="",this.frame.appendChild(t)):this.frame.innerHTML=t
}},{key:"show",value:function(t){
if(void 0===t&&(t=!0),!0===t){
var e=this.frame.clientHeight,i=this.frame.clientWidth,o=this.frame.parentNode.clientHeight,n=this.frame.parentNode.clientWidth,r=0,s=0
;if("flip"==this.overflowMethod){var a=!1,h=!0
;this.y-e<this.padding&&(h=!1),this.x+i>n-this.padding&&(a=!0),
r=a?this.x-i:this.x,s=h?this.y-e:this.y
}else(s=this.y-e)+e+this.padding>o&&(s=o-e-this.padding),
s<this.padding&&(s=this.padding),
(r=this.x)+i+this.padding>n&&(r=n-i-this.padding),
r<this.padding&&(r=this.padding)
;this.frame.style.left=r+"px",this.frame.style.top=s+"px",
this.frame.style.visibility="visible",
this.hidden=!1}else this.hide()}},{key:"hide",
value:function(){
this.hidden=!0,this.frame.style.left="0",this.frame.style.top="0",
this.frame.style.visibility="hidden"}},{
key:"destroy",value:function(){
this.frame.parentNode.removeChild(this.frame)}
}]),t}(),Cu=function(){function t(e,i,o){
var n,r,s,a,h,d,l,c,u,f,p,v,g
;Gh(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,
this.navigationHandler=new Ou(e,i),
this.body.eventListeners.onTap=Z(n=this.onTap).call(n,this),
this.body.eventListeners.onTouch=Z(r=this.onTouch).call(r,this),
this.body.eventListeners.onDoubleTap=Z(s=this.onDoubleTap).call(s,this),
this.body.eventListeners.onHold=Z(a=this.onHold).call(a,this),
this.body.eventListeners.onDragStart=Z(h=this.onDragStart).call(h,this),
this.body.eventListeners.onDrag=Z(d=this.onDrag).call(d,this),
this.body.eventListeners.onDragEnd=Z(l=this.onDragEnd).call(l,this),
this.body.eventListeners.onMouseWheel=Z(c=this.onMouseWheel).call(c,this),
this.body.eventListeners.onPinch=Z(u=this.onPinch).call(u,this),
this.body.eventListeners.onMouseMove=Z(f=this.onMouseMove).call(f,this),
this.body.eventListeners.onRelease=Z(p=this.onRelease).call(p,this),
this.body.eventListeners.onContext=Z(v=this.onContext).call(v,this),
this.touchTime=0,
this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,
this.popupTimer=void 0,
this.body.functions.getPointer=Z(g=this.getPointer).call(g,this),
this.options={},this.defaultOptions={dragNodes:!0,
dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{
x:10,y:10,zoom:.02},bindToWindow:!0},
navigationButtons:!1,tooltipDelay:300,zoomView:!0,
zoomSpeed:1
},bt(this.options,this.defaultOptions),this.bindEventListeners()
}return $h(t,[{key:"bindEventListeners",
value:function(){var t=this
;this.body.emitter.on("destroy",(function(){
clearTimeout(t.popupTimer),delete t.body.functions.getPointer
}))}},{key:"setOptions",value:function(t){
void 0!==t&&(Fr(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"],this.options,t),
Zr(this.options,t,"keyboard"),
t.tooltip&&(bt(this.options.tooltip,t.tooltip),t.tooltip.color&&(this.options.tooltip.color=qr(t.tooltip.color)))),
this.navigationHandler.setOptions(this.options)}
},{key:"getPointer",value:function(t){return{
x:t.x-(e=this.canvas.frame.canvas,e.getBoundingClientRect().left),
y:t.y-Rr(this.canvas.frame.canvas)};var e}},{
key:"onTouch",value:function(t){
(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(t.center),
this.drag.pinched=!1,
this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())
}},{key:"onTap",value:function(t){
var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect&&(t.changedPointers[0].ctrlKey||t.changedPointers[0].metaKey)
;this.checkSelectionChanges(e,t,i),
this.selectionHandler._generateClickEvent("click",t,e)
}},{key:"onDoubleTap",value:function(t){
var e=this.getPointer(t.center)
;this.selectionHandler._generateClickEvent("doubleClick",t,e)
}},{key:"onHold",value:function(t){
var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect
;this.checkSelectionChanges(e,t,i),
this.selectionHandler._generateClickEvent("click",t,e),
this.selectionHandler._generateClickEvent("hold",t,e)
}},{key:"onRelease",value:function(t){
if((new Date).valueOf()-this.touchTime>10){
var e=this.getPointer(t.center)
;this.selectionHandler._generateClickEvent("release",t,e),
this.touchTime=(new Date).valueOf()}}},{
key:"onContext",value:function(t){
var e=this.getPointer({x:t.clientX,y:t.clientY})
;this.selectionHandler._generateClickEvent("oncontext",t,e)
}},{key:"checkSelectionChanges",
value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.selectionHandler.getSelection(),n=!1
;n=!0===i?this.selectionHandler.selectAdditionalOnPoint(t):this.selectionHandler.selectOnPoint(t)
;var r=this.selectionHandler.getSelection(),s=this._determineDifference(o,r),a=this._determineDifference(r,o)
;s.edges.length>0&&(this.selectionHandler._generateClickEvent("deselectEdge",e,t,o),
n=!0),
s.nodes.length>0&&(this.selectionHandler._generateClickEvent("deselectNode",e,t,o),
n=!0),
a.nodes.length>0&&(this.selectionHandler._generateClickEvent("selectNode",e,t),
n=!0),
a.edges.length>0&&(this.selectionHandler._generateClickEvent("selectEdge",e,t),
n=!0),
!0===n&&this.selectionHandler._generateClickEvent("select",e,t)
}},{key:"_determineDifference",
value:function(t,e){var i=function(t,e){
for(var i=[],o=0;o<t.length;o++){var n=t[o]
;-1===On(e).call(e,n)&&i.push(n)}return i};return{
nodes:i(t.nodes,e.nodes),edges:i(t.edges,e.edges)}
}},{key:"onDragStart",value:function(t){
if(!this.drag.dragging){
void 0===this.drag.pointer&&this.onTouch(t)
;var e=this.selectionHandler.getNodeAt(this.drag.pointer)
;if(this.drag.dragging=!0,
this.drag.selection=[],this.drag.translation=bt({},this.body.view.translation),
this.drag.nodeId=void 0,t.srcEvent.shiftKey){
this.body.selectionBox.show=!0
;var i=this.getPointer(t.center)
;this.body.selectionBox.position.start={
x:this.canvas._XconvertDOMtoCanvas(i.x),
y:this.canvas._YconvertDOMtoCanvas(i.y)
},this.body.selectionBox.position.end={
x:this.canvas._XconvertDOMtoCanvas(i.x),
y:this.canvas._YconvertDOMtoCanvas(i.y)}}
if(void 0!==e&&!0===this.options.dragNodes){
this.drag.nodeId=e.id,!1===e.isSelected()&&(this.selectionHandler.unselectAll(),
this.selectionHandler.selectObject(e)),
this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer)
;var o=this.selectionHandler.selectionObj.nodes
;for(var n in o)if(Object.prototype.hasOwnProperty.call(o,n)){
var r=o[n],s={id:r.id,node:r,x:r.x,y:r.y,
xFixed:r.options.fixed.x,yFixed:r.options.fixed.y}
;r.options.fixed.x=!0,r.options.fixed.y=!0,
this.drag.selection.push(s)}
}else this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer,void 0,!0)
}}},{key:"onDrag",value:function(t){var e=this
;if(!0!==this.drag.pinched){
this.body.emitter.emit("unlockNode")
;var i=this.getPointer(t.center),o=this.drag.selection
;if(o&&o.length&&!0===this.options.dragNodes){
this.selectionHandler._generateClickEvent("dragging",t,i)
;var n=i.x-this.drag.pointer.x,r=i.y-this.drag.pointer.y
;Vo(o).call(o,(function(t){var i=t.node
;!1===t.xFixed&&(i.x=e.canvas._XconvertDOMtoCanvas(e.canvas._XconvertCanvasToDOM(t.x)+n)),
!1===t.yFixed&&(i.y=e.canvas._YconvertDOMtoCanvas(e.canvas._YconvertCanvasToDOM(t.y)+r))
})),this.body.emitter.emit("startSimulation")
}else{if(t.srcEvent.shiftKey){
if(this.selectionHandler._generateClickEvent("dragging",t,i,void 0,!0),
void 0===this.drag.pointer)return void this.onDragStart(t)
;this.body.selectionBox.position.end={
x:this.canvas._XconvertDOMtoCanvas(i.x),
y:this.canvas._YconvertDOMtoCanvas(i.y)
},this.body.emitter.emit("_requestRedraw")}
if(!0===this.options.dragView&&!t.srcEvent.shiftKey){
if(this.selectionHandler._generateClickEvent("dragging",t,i,void 0,!0),
void 0===this.drag.pointer)return void this.onDragStart(t)
;var s=i.x-this.drag.pointer.x,a=i.y-this.drag.pointer.y
;this.body.view.translation={
x:this.drag.translation.x+s,
y:this.drag.translation.y+a
},this.body.emitter.emit("_requestRedraw")}}}}},{
key:"onDragEnd",value:function(t){var e=this
;if(this.drag.dragging=!1,this.body.selectionBox.show){
var i;this.body.selectionBox.show=!1
;var o=this.body.selectionBox.position,n={
minX:Math.min(o.start.x,o.end.x),
minY:Math.min(o.start.y,o.end.y),
maxX:Math.max(o.start.x,o.end.x),
maxY:Math.max(o.start.y,o.end.y)
},r=fn(i=this.body.nodeIndices).call(i,(function(t){
var i=e.body.nodes[t]
;return i.x>=n.minX&&i.x<=n.maxX&&i.y>=n.minY&&i.y<=n.maxY
}));Vo(r).call(r,(function(t){
return e.selectionHandler.selectObject(e.body.nodes[t])
})),this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),
this.body.emitter.emit("_requestRedraw")}else{
var s=this.drag.selection
;s&&s.length?(Vo(s).call(s,(function(t){
t.node.options.fixed.x=t.xFixed,t.node.options.fixed.y=t.yFixed
})),this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center)),
this.body.emitter.emit("startSimulation")):(this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),
this.body.emitter.emit("_requestRedraw"))}}},{
key:"onPinch",value:function(t){
var e=this.getPointer(t.center)
;this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1)
;var i=this.pinch.scale*t.scale;this.zoom(i,e)}},{
key:"zoom",value:function(t,e){
if(!0===this.options.zoomView){
var i=this.body.view.scale
;t<1e-5&&(t=1e-5),t>10&&(t=10);var o=void 0
;void 0!==this.drag&&!0===this.drag.dragging&&(o=this.canvas.DOMtoCanvas(this.drag.pointer))
;var n=this.body.view.translation,r=t/i,s=(1-r)*e.x+n.x*r,a=(1-r)*e.y+n.y*r
;if(this.body.view.scale=t,
this.body.view.translation={x:s,y:a},null!=o){
var h=this.canvas.canvasToDOM(o)
;this.drag.pointer.x=h.x,this.drag.pointer.y=h.y}
this.body.emitter.emit("_requestRedraw"),
i<t?this.body.emitter.emit("zoom",{direction:"+",
scale:this.body.view.scale,pointer:e
}):this.body.emitter.emit("zoom",{direction:"-",
scale:this.body.view.scale,pointer:e})}}},{
key:"onMouseWheel",value:function(t){
if(!0===this.options.zoomView){if(0!==t.deltaY){
var e=this.body.view.scale
;e*=1+(t.deltaY<0?1:-1)*(.1*this.options.zoomSpeed)
;var i=this.getPointer({x:t.clientX,y:t.clientY})
;this.zoom(e,i)}t.preventDefault()}}},{
key:"onMouseMove",value:function(t){
var e=this,i=this.getPointer({x:t.clientX,
y:t.clientY}),o=!1
;void 0!==this.popup&&(!1===this.popup.hidden&&this._checkHidePopup(i),
!1===this.popup.hidden&&(o=!0,
this.popup.setPosition(i.x+3,i.y-5),this.popup.show())),
!1===this.options.keyboard.bindToWindow&&!0===this.options.keyboard.enabled&&this.canvas.frame.focus(),
!1===o&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),
this.popupTimer=void 0),
this.drag.dragging||(this.popupTimer=od((function(){
return e._checkShowPopup(i)
}),this.options.tooltipDelay))),!0===this.options.hover&&this.selectionHandler.hoverObject(t,i)
}},{key:"_checkShowPopup",value:function(t){
var e=this.canvas._XconvertDOMtoCanvas(t.x),i=this.canvas._YconvertDOMtoCanvas(t.y),o={
left:e,top:i,right:e,bottom:i
},n=void 0===this.popupObj?void 0:this.popupObj.id,r=!1,s="node"
;if(void 0===this.popupObj){
for(var a,h=this.body.nodeIndices,d=this.body.nodes,l=[],c=0;c<h.length;c++)!0===(a=d[h[c]]).isOverlappingWith(o)&&(r=!0,
void 0!==a.getTitle()&&l.push(h[c]))
;l.length>0&&(this.popupObj=d[l[l.length-1]],r=!0)
}if(void 0===this.popupObj&&!1===r){
for(var u,f=this.body.edgeIndices,p=this.body.edges,v=[],g=0;g<f.length;g++)!0===(u=p[f[g]]).isOverlappingWith(o)&&!0===u.connected&&void 0!==u.getTitle()&&v.push(f[g])
;v.length>0&&(this.popupObj=p[v[v.length-1]],
s="edge")}
void 0!==this.popupObj?this.popupObj.id!==n&&(void 0===this.popup&&(this.popup=new Eu(this.canvas.frame)),
this.popup.popupTargetType=s,
this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(t.x+3,t.y-5),
this.popup.setText(this.popupObj.getTitle()),
this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),
this.body.emitter.emit("hidePopup"))}},{
key:"_checkHidePopup",value:function(t){
var e=this.selectionHandler._pointerToPositionObject(t),i=!1
;if("node"===this.popup.popupTargetType){
if(void 0!==this.body.nodes[this.popup.popupTargetId]&&!0===(i=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e))){
var o=this.selectionHandler.getNodeAt(t)
;i=void 0!==o&&o.id===this.popup.popupTargetId}
}else void 0===this.selectionHandler.getNodeAt(t)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(i=this.body.edges[this.popup.popupTargetId].isOverlappingWith(e))
;!1===i&&(this.popupObj=void 0,
this.popup.hide(),this.body.emitter.emit("hidePopup"))
}}]),t}(),Su=function(){function t(e,i){var o=this
;Gh(this,t),this.body=e,this.canvas=i,
this.selectionObj={nodes:[],edges:[]
},this.hoverObj={nodes:{},edges:{}
},this.options={},this.defaultOptions={
multiselect:!1,selectable:!0,
selectConnectedEdges:!0,hoverConnectedEdges:!0
},bt(this.options,this.defaultOptions),
this.body.emitter.on("_dataChanged",(function(){
o.updateSelection()}))}return $h(t,[{
key:"setOptions",value:function(t){
void 0!==t&&zr(["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"],this.options,t)
}},{key:"selectOnPoint",value:function(t){var e=!1
;if(!0===this.options.selectable){
var i=this.getNodeAt(t)||this.getEdgeAt(t)
;this.unselectAll(),void 0!==i&&(e=this.selectObject(i)),
this.body.emitter.emit("_requestRedraw")}return e}
},{key:"selectAdditionalOnPoint",
value:function(t){var e=!1
;if(!0===this.options.selectable){
var i=this.getNodeAt(t)||this.getEdgeAt(t)
;void 0!==i&&(e=!0,!0===i.isSelected()?this.deselectObject(i):this.selectObject(i),
this.body.emitter.emit("_requestRedraw"))}return e
}},{key:"_initBaseEvent",value:function(t,e){
var i={};return i.pointer={DOM:{x:e.x,y:e.y},
canvas:this.canvas.DOMtoCanvas(e)},i.event=t,i}},{
key:"_generateClickEvent",value:function(t,e,i,o){
var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=this._initBaseEvent(e,i)
;if(!0===n)r.nodes=[],r.edges=[];else{
var s=this.getSelection()
;r.nodes=s.nodes,r.edges=s.edges}
void 0!==o&&(r.previousSelection=o),"click"==t&&(r.items=this.getClickedItems(i)),
void 0!==e.controlEdge&&(r.controlEdge=e.controlEdge),
this.body.emitter.emit(t,r)}},{key:"selectObject",
value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.selectConnectedEdges
;return void 0!==t&&(t instanceof $l&&!0===e&&this._selectConnectedEdges(t),
t.select(),this._addToSelection(t),!0)}},{
key:"deselectObject",value:function(t){
!0===t.isSelected()&&(t.selected=!1,this._removeFromSelection(t))
}},{key:"_getAllNodesOverlappingWith",
value:function(t){
for(var e=[],i=this.body.nodes,o=0;o<this.body.nodeIndices.length;o++){
var n=this.body.nodeIndices[o]
;i[n].isOverlappingWith(t)&&e.push(n)}return e}},{
key:"_pointerToPositionObject",value:function(t){
var e=this.canvas.DOMtoCanvas(t);return{
left:e.x-1,top:e.y+1,right:e.x+1,bottom:e.y-1}}},{
key:"getNodeAt",value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._pointerToPositionObject(t),o=this._getAllNodesOverlappingWith(i)
;return o.length>0?!0===e?this.body.nodes[o[o.length-1]]:o[o.length-1]:void 0
}},{key:"_getEdgesOverlappingWith",
value:function(t,e){
for(var i=this.body.edges,o=0;o<this.body.edgeIndices.length;o++){
var n=this.body.edgeIndices[o]
;i[n].isOverlappingWith(t)&&e.push(n)}}},{
key:"_getAllEdgesOverlappingWith",
value:function(t){var e=[]
;return this._getEdgesOverlappingWith(t,e),e}},{
key:"getEdgeAt",value:function(t){
for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.canvas.DOMtoCanvas(t),o=10,n=null,r=this.body.edges,s=0;s<this.body.edgeIndices.length;s++){
var a=this.body.edgeIndices[s],h=r[a]
;if(h.connected){
var d=h.from.x,l=h.from.y,c=h.to.x,u=h.to.y,f=h.edgeType.getDistanceToEdge(d,l,c,u,i.x,i.y)
;f<o&&(n=a,o=f)}}
return null!==n?!0===e?this.body.edges[n]:n:void 0
}},{key:"_addToSelection",value:function(t){
t instanceof $l?this.selectionObj.nodes[t.id]=t:this.selectionObj.edges[t.id]=t
}},{key:"_addToHover",value:function(t){
t instanceof $l?this.hoverObj.nodes[t.id]=t:this.hoverObj.edges[t.id]=t
}},{key:"_removeFromSelection",value:function(t){
t instanceof $l?(delete this.selectionObj.nodes[t.id],
this._unselectConnectedEdges(t)):delete this.selectionObj.edges[t.id]
}},{key:"unselectAll",value:function(){
for(var t in this.selectionObj.nodes)Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,t)&&this.selectionObj.nodes[t].unselect()
;for(var e in this.selectionObj.edges)Object.prototype.hasOwnProperty.call(this.selectionObj.edges,e)&&this.selectionObj.edges[e].unselect()
;this.selectionObj={nodes:{},edges:{}}}},{
key:"_getSelectedNodeCount",value:function(){
var t=0
;for(var e in this.selectionObj.nodes)Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,e)&&(t+=1)
;return t}},{key:"_getSelectedNode",
value:function(){
for(var t in this.selectionObj.nodes)if(Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,t))return this.selectionObj.nodes[t]
}},{key:"_getSelectedEdge",value:function(){
for(var t in this.selectionObj.edges)if(Object.prototype.hasOwnProperty.call(this.selectionObj.edges,t))return this.selectionObj.edges[t]
}},{key:"_getSelectedEdgeCount",value:function(){
var t=0
;for(var e in this.selectionObj.edges)Object.prototype.hasOwnProperty.call(this.selectionObj.edges,e)&&(t+=1)
;return t}},{key:"_getSelectedObjectCount",
value:function(){var t=0
;for(var e in this.selectionObj.nodes)Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,e)&&(t+=1)
;for(var i in this.selectionObj.edges)Object.prototype.hasOwnProperty.call(this.selectionObj.edges,i)&&(t+=1)
;return t}},{key:"_selectionIsEmpty",
value:function(){
for(var t in this.selectionObj.nodes)if(Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,t))return!1
;for(var e in this.selectionObj.edges)if(Object.prototype.hasOwnProperty.call(this.selectionObj.edges,e))return!1
;return!0}},{key:"_clusterInSelection",
value:function(){
for(var t in this.selectionObj.nodes)if(Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,t)&&this.selectionObj.nodes[t].clusterSize>1)return!0
;return!1}},{key:"_selectConnectedEdges",
value:function(t){
for(var e=0;e<t.edges.length;e++){var i=t.edges[e]
;i.select(),this._addToSelection(i)}}},{
key:"_hoverConnectedEdges",value:function(t){
for(var e=0;e<t.edges.length;e++){var i=t.edges[e]
;i.hover=!0,this._addToHover(i)}}},{
key:"_unselectConnectedEdges",value:function(t){
for(var e=0;e<t.edges.length;e++){var i=t.edges[e]
;i.unselect(),this._removeFromSelection(i)}}},{
key:"emitBlurEvent",value:function(t,e,i){
var o=this._initBaseEvent(t,e)
;!0===i.hover&&(i.hover=!1,i instanceof $l?(o.node=i.id,
this.body.emitter.emit("blurNode",o)):(o.edge=i.id,
this.body.emitter.emit("blurEdge",o)))}},{
key:"emitHoverEvent",value:function(t,e,i){
var o=this._initBaseEvent(t,e),n=!1
;return!1===i.hover&&(i.hover=!0,this._addToHover(i),
n=!0,i instanceof $l?(o.node=i.id,
this.body.emitter.emit("hoverNode",o)):(o.edge=i.id,
this.body.emitter.emit("hoverEdge",o))),n}},{
key:"hoverObject",value:function(t,e){
var i=this.getNodeAt(e)
;void 0===i&&(i=this.getEdgeAt(e));var o=!1
;for(var n in this.hoverObj.nodes)Object.prototype.hasOwnProperty.call(this.hoverObj.nodes,n)&&(void 0===i||i instanceof $l&&i.id!=n||i instanceof Lc)&&(this.emitBlurEvent(t,e,this.hoverObj.nodes[n]),
delete this.hoverObj.nodes[n],o=!0)
;for(var r in this.hoverObj.edges)Object.prototype.hasOwnProperty.call(this.hoverObj.edges,r)&&(!0===o?(this.hoverObj.edges[r].hover=!1,
delete this.hoverObj.edges[r]):(void 0===i||i instanceof Lc&&i.id!=r||i instanceof $l&&!i.hover)&&(this.emitBlurEvent(t,e,this.hoverObj.edges[r]),
delete this.hoverObj.edges[r],o=!0))
;if(void 0!==i){
var s=er(this.hoverObj.edges).length,a=er(this.hoverObj.nodes).length
;(o||i instanceof Lc&&0===s&&0===a||i instanceof $l&&0===s&&0===a)&&(o=this.emitHoverEvent(t,e,i)),
i instanceof $l&&!0===this.options.hoverConnectedEdges&&this._hoverConnectedEdges(i)
}!0===o&&this.body.emitter.emit("_requestRedraw")}
},{key:"getSelection",value:function(){return{
nodes:this.getSelectedNodes(),
edges:this.getSelectedEdges()}}},{
key:"getSelectedNodes",value:function(){var t=[]
;if(!0===this.options.selectable)for(var e in this.selectionObj.nodes)Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,e)&&t.push(this.selectionObj.nodes[e].id)
;return t}},{key:"getSelectedEdges",
value:function(){var t=[]
;if(!0===this.options.selectable)for(var e in this.selectionObj.edges)Object.prototype.hasOwnProperty.call(this.selectionObj.edges,e)&&t.push(this.selectionObj.edges[e].id)
;return t}},{key:"setSelection",value:function(t){
var e,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
;if(!t||!t.nodes&&!t.edges)throw"Selection must be an object with nodes and/or edges properties"
;if((o.unselectAll||void 0===o.unselectAll)&&this.unselectAll(),
t.nodes)for(e=0;e<t.nodes.length;e++){i=t.nodes[e]
;var n=this.body.nodes[i]
;if(!n)throw new RangeError('Node with id "'+i+'" not found')
;this.selectObject(n,o.highlightEdges)}
if(t.edges)for(e=0;e<t.edges.length;e++){
i=t.edges[e];var r=this.body.edges[i]
;if(!r)throw new RangeError('Edge with id "'+i+'" not found')
;this.selectObject(r)}
this.body.emitter.emit("_requestRedraw")}},{
key:"selectNodes",value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;if(!t||void 0===t.length)throw"Selection must be an array with ids"
;this.setSelection({nodes:t},{highlightEdges:e})}
},{key:"selectEdges",value:function(t){
if(!t||void 0===t.length)throw"Selection must be an array with ids"
;this.setSelection({edges:t})}},{
key:"updateSelection",value:function(){
for(var t in this.selectionObj.nodes)Object.prototype.hasOwnProperty.call(this.selectionObj.nodes,t)&&(Object.prototype.hasOwnProperty.call(this.body.nodes,t)||delete this.selectionObj.nodes[t])
;for(var e in this.selectionObj.edges)Object.prototype.hasOwnProperty.call(this.selectionObj.edges,e)&&(Object.prototype.hasOwnProperty.call(this.body.edges,e)||delete this.selectionObj.edges[e])
}},{key:"getClickedItems",value:function(t){
for(var e=this.canvas.DOMtoCanvas(t),i=[],o=this.body.nodeIndices,n=this.body.nodes,r=o.length-1;r>=0;r--){
var s=n[o[r]].getItemsOnPoint(e);i.push.apply(i,s)
}
for(var a=this.body.edgeIndices,h=this.body.edges,d=a.length-1;d>=0;d--){
var l=h[a[d]].getItemsOnPoint(e);i.push.apply(i,l)
}return i}}]),t}(),Tu=!s((function(){
return Object.isExtensible(Object.preventExtensions({}))
})),Mu=o((function(t){
var e=L.f,i=Zt("meta"),o=0,n=Object.isExtensible||function(){
return!0},r=function(t){e(t,i,{value:{
objectID:"O"+ ++o,weakData:{}}})},s=t.exports={
REQUIRED:!1,fastKey:function(t,e){
if(!m(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t
;if(!k(t,i)){if(!n(t))return"F";if(!e)return"E"
;r(t)}return t[i].objectID},
getWeakData:function(t,e){if(!k(t,i)){
if(!n(t))return!0;if(!e)return!1;r(t)}
return t[i].weakData},onFreeze:function(t){
return Tu&&s.REQUIRED&&n(t)&&!k(t,i)&&r(t),t}}
;dt[i]=!0})),Du=o((function(t){
var e=function(t,_e5){
this.stopped=t,this.result=_e5}
;(t.exports=function(t,i,o,n,r){
var s,a,h,d,l,c,u,f=A(i,o,n?2:1);if(r)s=t;else{
if("function"!=typeof(a=oo(t)))throw TypeError("Target is not iterable")
;if(lo(a)){
for(h=0,d=ot(t.length);d>h;h++)if((l=n?f(j(u=t[h])[0],u[1]):f(t[h]))&&l instanceof e)return l
;return new e(!1)}s=a.call(t)}
for(c=s.next;!(u=c.call(s)).done;)if("object"==typeof(l=so(s,f,u.value,n))&&l&&l instanceof e)return l
;return new e(!1)}).stop=function(t){
return new e(!0,t)}})),Pu=function(t,e,i){
if(!(t instanceof e))throw TypeError("Incorrect "+(i?i+" ":"")+"invocation")
;return t
},Iu=L.f,Bu=Ue.forEach,zu=Le.set,Fu=Le.getterFor,Nu=function(t,e,i){
var o,n=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),d=n?"set":"add",l=r[t],c=l&&l.prototype,u={}
;if(a&&"function"==typeof l&&(h||c.forEach&&!s((function(){
(new l).entries().next()})))){o=e((function(e,i){
zu(Pu(e,o,t),{type:t,collection:new l
}),null!=i&&Du(i,e[d],e,n)}));var f=Fu(t)
;Bu(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){
var e="add"==t||"set"==t
;!(t in c)||h&&"clear"==t||H(o.prototype,t,(function(i,o){
var n=f(this).collection
;if(!e&&h&&!m(i))return"get"==t&&void 0
;var r=n[t](0===i?0:i,o);return e?this:r}))
})),h||Iu(o.prototype,"size",{configurable:!0,
get:function(){return f(this).collection.size}})
}else o=i.getConstructor(e,t,n,d),Mu.REQUIRED=!0
;return Ce(o,t,!1,!0),u[t]=o,q({global:!0,
forced:!0},u),h||i.setStrong(o,t,n),o
},Au=function(t,e,i){
for(var o in e)i&&i.unsafe&&t[o]?t[o]=e[o]:le(t,o,e[o],i)
;return t
},ju=pe("species"),Ru=L.f,Lu=Mu.fastKey,Hu=Le.set,Wu=Le.getterFor,Vu={
getConstructor:function(t,e,i,o){
var n=t((function(t,r){Pu(t,n,e),Hu(t,{type:e,
index:re(null),first:void 0,last:void 0,size:0
}),a||(t.size=0),null!=r&&Du(r,t[o],t,i)
})),r=Wu(e),s=function(t,e,i){
var o,n,s=r(t),d=h(t,e)
;return d?d.value=i:(s.last=d={index:n=Lu(e,!0),
key:e,value:i,previous:o=s.last,next:void 0,
removed:!1
},s.first||(s.first=d),o&&(o.next=d),a?s.size++:t.size++,"F"!==n&&(s.index[n]=d)),
t},h=function(t,e){var i,o=r(t),n=Lu(e)
;if("F"!==n)return o.index[n]
;for(i=o.first;i;i=i.next)if(i.key==e)return i}
;return Au(n.prototype,{clear:function(){
for(var t=r(this),e=t.index,i=t.first;i;)i.removed=!0,
i.previous&&(i.previous=i.previous.next=void 0),
delete e[i.index],i=i.next
;t.first=t.last=void 0,a?t.size=0:this.size=0},
delete:function(t){var e=this,i=r(e),o=h(e,t)
;if(o){var n=o.next,s=o.previous
;delete i.index[o.index],o.removed=!0,s&&(s.next=n),
n&&(n.previous=s),i.first==o&&(i.first=n),
i.last==o&&(i.last=s),a?i.size--:e.size--}
return!!o},forEach:function(t){
for(var e,i=r(this),o=A(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:i.first;)for(o(e.value,e.key,this);e&&e.removed;)e=e.previous
},has:function(t){return!!h(this,t)}
}),Au(n.prototype,i?{get:function(t){
var e=h(this,t);return e&&e.value},
set:function(t,e){return s(this,0===t?0:t,e)}}:{
add:function(t){return s(this,t=0===t?0:t,t)}
}),a&&Ru(n.prototype,"size",{get:function(){
return r(this).size}}),n},
setStrong:function(t,e,i){
var o=e+" Iterator",n=Wu(e),r=Wu(o)
;Vi(t,e,(function(t,e){Hu(this,{type:o,target:t,
state:n(t),kind:e,last:void 0})}),(function(){
for(var t=r(this),e=t.kind,i=t.last;i&&i.removed;)i=i.previous
;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{
value:i.key,done:!1}:"values"==e?{value:i.value,
done:!1}:{value:[i.key,i.value],done:!1
}:(t.target=void 0,{value:void 0,done:!0})
}),i?"entries":"values",!i,!0),function(t){
var e=It(t),i=L.f;a&&e&&!e[ju]&&i(e,ju,{
configurable:!0,get:function(){return this}})}(e)}
},qu=(Nu("Map",(function(t){return function(){
return t(this,arguments.length?arguments[0]:void 0)
}}),Vu),F.Map),Uu=function(t){
return function(e,i,o,n){N(i)
;var r=vt(e),s=v(r),a=ot(r.length),h=t?a-1:0,d=t?-1:1
;if(o<2)for(;;){if(h in s){n=s[h],h+=d;break}
if(h+=d,t?h<0:a<=h)throw TypeError("Reduce of empty array with no initial value")
}for(;t?h>=0:a>h;h+=d)h in s&&(n=i(n,s[h],h,r))
;return n}
},Yu=[Uu(!1),Uu(!0)][0],Xu=Po("reduce"),Gu=Fo("reduce",{
1:0});q({target:"Array",proto:!0,forced:!Xu||!Gu
},{reduce:function(t){
return Yu(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)
}})
;var Ku=K("Array").reduce,$u=Array.prototype,Qu=function(t){
var e=t.reduce
;return t===$u||t instanceof Array&&e===$u.reduce?Ku:e
},Zu=[],Ju=Zu.sort,tf=s((function(){
Zu.sort(void 0)})),ef=s((function(){Zu.sort(null)
})),of=Po("sort");q({target:"Array",proto:!0,
forced:tf||!ef||!of},{sort:function(t){
return void 0===t?Ju.call(vt(this)):Ju.call(vt(this),N(t))
}})
;var nf=K("Array").sort,rf=Array.prototype,sf=function(t){
var e=t.sort
;return t===rf||t instanceof Array&&e===rf.sort?nf:e
},af=o((function(t,e){!function(t){
function e(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")
}t.__esModule=!0,t.sort=v
;var i=32,o=7,n=256,r=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]
;function s(t){
return t<1e5?t<100?t<10?0:1:t<1e4?t<1e3?2:3:4:t<1e7?t<1e6?5:6:t<1e9?t<1e8?7:8:9
}function a(t,e){if(t===e)return 0
;if(~~t===t&&~~e===e){
if(0===t||0===e)return t<e?-1:1;if(t<0||e<0){
if(e>=0)return-1;if(t>=0)return 1;t=-t,e=-e}
var i=s(t),o=s(e),n=0
;return i<o?(t*=r[o-i-1],e/=10,n=-1):i>o&&(e*=r[i-o-1],t/=10,
n=1),t===e?n:t<e?-1:1}var a=String(t),h=String(e)
;return a===h?0:a<h?-1:1}function h(t){
for(var e=0;t>=i;)e|=1&t,t>>=1;return t+e}
function d(t,e,i,o){var n=e+1;if(n===i)return 1
;if(o(t[n++],t[e])<0){
for(;n<i&&o(t[n],t[n-1])<0;)n++;l(t,e,n)
}else for(;n<i&&o(t[n],t[n-1])>=0;)n++;return n-e}
function l(t,e,i){for(i--;e<i;){var o=t[e]
;t[e++]=t[i],t[i--]=o}}function c(t,e,i,o,n){
for(o===e&&o++;o<i;o++){
for(var r=t[o],s=e,a=o;s<a;){var h=s+a>>>1
;n(r,t[h])<0?a=h:s=h+1}var d=o-s;switch(d){case 3:
t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:
t[s+1]=t[s];break;default:
for(;d>0;)t[s+d]=t[s+d-1],d--}t[s]=r}}
function u(t,e,i,o,n,r){var s=0,a=0,h=1
;if(r(t,e[i+n])>0){
for(a=o-n;h<a&&r(t,e[i+n+h])>0;)s=h,(h=1+(h<<1))<=0&&(h=a)
;h>a&&(h=a),s+=n,h+=n}else{
for(a=n+1;h<a&&r(t,e[i+n-h])<=0;)s=h,(h=1+(h<<1))<=0&&(h=a)
;h>a&&(h=a);var d=s;s=n-h,h=n-d}for(s++;s<h;){
var l=s+(h-s>>>1);r(t,e[i+l])>0?s=l+1:h=l}return h
}function f(t,e,i,o,n,r){var s=0,a=0,h=1
;if(r(t,e[i+n])<0){
for(a=n+1;h<a&&r(t,e[i+n-h])<0;)s=h,(h=1+(h<<1))<=0&&(h=a)
;h>a&&(h=a);var d=s;s=n-h,h=n-d}else{
for(a=o-n;h<a&&r(t,e[i+n+h])>=0;)s=h,(h=1+(h<<1))<=0&&(h=a)
;h>a&&(h=a),s+=n,h+=n}for(s++;s<h;){
var l=s+(h-s>>>1);r(t,e[i+l])<0?h=l:s=l+1}return h
}var p=function(){function t(i,r){
e(this,t),this.array=null,this.compare=null,this.minGallop=o,
this.length=0,this.tmpStorageLength=n,
this.stackLength=0,this.runStart=null,this.runLength=null,
this.stackSize=0,this.array=i,
this.compare=r,this.length=i.length,this.length<2*n&&(this.tmpStorageLength=this.length>>>1),
this.tmp=new Array(this.tmpStorageLength),
this.stackLength=this.length<120?5:this.length<1542?10:this.length<119151?19:40,
this.runStart=new Array(this.stackLength),
this.runLength=new Array(this.stackLength)}
return t.prototype.pushRun=function(t,e){
this.runStart[this.stackSize]=t,this.runLength[this.stackSize]=e,
this.stackSize+=1
},t.prototype.mergeRuns=function(){
for(;this.stackSize>1;){var t=this.stackSize-2
;if(t>=1&&this.runLength[t-1]<=this.runLength[t]+this.runLength[t+1]||t>=2&&this.runLength[t-2]<=this.runLength[t]+this.runLength[t-1])this.runLength[t-1]<this.runLength[t+1]&&t--;else if(this.runLength[t]>this.runLength[t+1])break
;this.mergeAt(t)}
},t.prototype.forceMergeRuns=function(){
for(;this.stackSize>1;){var t=this.stackSize-2
;t>0&&this.runLength[t-1]<this.runLength[t+1]&&t--,
this.mergeAt(t)}},t.prototype.mergeAt=function(t){
var e=this.compare,i=this.array,o=this.runStart[t],n=this.runLength[t],r=this.runStart[t+1],s=this.runLength[t+1]
;this.runLength[t]=n+s,
t===this.stackSize-3&&(this.runStart[t+1]=this.runStart[t+2],
this.runLength[t+1]=this.runLength[t+2]),
this.stackSize--;var a=f(i[r],i,o,n,0,e)
;o+=a,0!=(n-=a)&&0!==(s=u(i[o+n-1],i,r,s,s-1,e))&&(n<=s?this.mergeLow(o,n,r,s):this.mergeHigh(o,n,r,s))
},t.prototype.mergeLow=function(t,e,i,n){
var r=this.compare,s=this.array,a=this.tmp,h=0
;for(h=0;h<e;h++)a[h]=s[t+h];var d=0,l=i,c=t
;if(s[c++]=s[l++],0!=--n)if(1!==e){
for(var p=this.minGallop;;){var v=0,g=0,y=!1;do{
if(r(s[l],a[d])<0){
if(s[c++]=s[l++],g++,v=0,0==--n){y=!0;break}
}else if(s[c++]=a[d++],v++,g=0,1==--e){y=!0;break}
}while((v|g)<p);if(y)break;do{
if(0!==(v=f(s[l],a,d,e,0,r))){
for(h=0;h<v;h++)s[c+h]=a[d+h]
;if(c+=v,d+=v,(e-=v)<=1){y=!0;break}}
if(s[c++]=s[l++],0==--n){y=!0;break}
if(0!==(g=u(a[d],s,l,n,0,r))){
for(h=0;h<g;h++)s[c+h]=s[l+h]
;if(c+=g,l+=g,0==(n-=g)){y=!0;break}}
if(s[c++]=a[d++],1==--e){y=!0;break}p--
}while(v>=o||g>=o);if(y)break;p<0&&(p=0),p+=2}
if(this.minGallop=p,p<1&&(this.minGallop=1),
1===e){for(h=0;h<n;h++)s[c+h]=s[l+h];s[c+n]=a[d]
}else{
if(0===e)throw new Error("mergeLow preconditions were not respected")
;for(h=0;h<e;h++)s[c+h]=a[d+h]}}else{
for(h=0;h<n;h++)s[c+h]=s[l+h];s[c+n]=a[d]
}else for(h=0;h<e;h++)s[c+h]=a[d+h]
},t.prototype.mergeHigh=function(t,e,i,n){
var r=this.compare,s=this.array,a=this.tmp,h=0
;for(h=0;h<n;h++)a[h]=s[i+h]
;var d=t+e-1,l=n-1,c=i+n-1,p=0,v=0
;if(s[c--]=s[d--],0!=--e)if(1!==n){
for(var g=this.minGallop;;){var y=0,m=0,b=!1;do{
if(r(a[l],s[d])<0){
if(s[c--]=s[d--],y++,m=0,0==--e){b=!0;break}
}else if(s[c--]=a[l--],m++,y=0,1==--n){b=!0;break}
}while((y|m)<g);if(b)break;do{
if(0!=(y=e-f(a[l],s,t,e,e-1,r))){
for(e-=y,v=1+(c-=y),p=1+(d-=y),h=y-1;h>=0;h--)s[v+h]=s[p+h]
;if(0===e){b=!0;break}}if(s[c--]=a[l--],1==--n){
b=!0;break}if(0!=(m=n-u(s[d],a,0,n,n-1,r))){
for(n-=m,v=1+(c-=m),p=1+(l-=m),h=0;h<m;h++)s[v+h]=a[p+h]
;if(n<=1){b=!0;break}}if(s[c--]=s[d--],0==--e){
b=!0;break}g--}while(y>=o||m>=o);if(b)break
;g<0&&(g=0),g+=2}
if(this.minGallop=g,g<1&&(this.minGallop=1),1===n){
for(v=1+(c-=e),p=1+(d-=e),h=e-1;h>=0;h--)s[v+h]=s[p+h]
;s[c]=a[l]}else{
if(0===n)throw new Error("mergeHigh preconditions were not respected")
;for(p=c-(n-1),h=0;h<n;h++)s[p+h]=a[h]}}else{
for(v=1+(c-=e),p=1+(d-=e),h=e-1;h>=0;h--)s[v+h]=s[p+h]
;s[c]=a[l]
}else for(p=c-(n-1),h=0;h<n;h++)s[p+h]=a[h]},t}()
;function v(t,e,o,n){
if(!Array.isArray(t))throw new TypeError("Can only sort arrays")
;e?"function"!=typeof e&&(n=o,
o=e,e=a):e=a,o||(o=0),n||(n=t.length);var r=n-o
;if(!(r<2)){var s=0
;if(r<i)c(t,o,n,o+(s=d(t,o,n,e)),e);else{
var l=new p(t,e),u=h(r);do{if((s=d(t,o,n,e))<u){
var f=r;f>u&&(f=u),c(t,o,o+f,o+s,e),s=f}
l.pushRun(o,s),l.mergeRuns(),r-=s,o+=s
}while(0!==r);l.forceMergeRuns()}}}}(e)}))
;function hf(t){var e=function(){
if("undefined"==typeof Reflect||!Ld)return!1
;if(Ld.sham)return!1
;if("function"==typeof Proxy)return!0;try{
return Date.prototype.toString.call(Ld(Date,[],(function(){}))),
!0}catch(t){return!1}}();return function(){
var i,o=Gd(t);if(e){var n=Gd(this).constructor
;i=Ld(o,arguments,n)
}else i=o.apply(this,arguments);return Yd(this,i)}
}var df=function(){function t(){Gh(this,t)}
return $h(t,[{key:"abstract",value:function(){
throw new Error("Can't instantiate abstract class!")
}},{key:"fake_use",value:function(){}},{
key:"curveType",value:function(){
return this.abstract()}},{key:"getPosition",
value:function(t){
return this.fake_use(t),this.abstract()}},{
key:"setPosition",value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
;this.fake_use(t,e,i),this.abstract()}},{
key:"getTreeSize",value:function(t){
return this.fake_use(t),this.abstract()}},{
key:"sort",value:function(t){
this.fake_use(t),this.abstract()}},{key:"fix",
value:function(t,e){
this.fake_use(t,e),this.abstract()}},{key:"shift",
value:function(t,e){
this.fake_use(t,e),this.abstract()}}]),t
}(),lf=function(t){qd(i,t);var e=hf(i)
;function i(t){var o
;return Gh(this,i),(o=e.call(this)).layout=t,o}
return $h(i,[{key:"curveType",value:function(){
return"horizontal"}},{key:"getPosition",
value:function(t){return t.x}},{key:"setPosition",
value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),
t.x=e}},{key:"getTreeSize",value:function(t){
var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t)
;return{min:e.min_x,max:e.max_x}}},{key:"sort",
value:function(t){af.sort(t,(function(t,e){
return t.x-e.x}))}},{key:"fix",
value:function(t,e){
t.y=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.y=!0
}},{key:"shift",value:function(t,e){
this.layout.body.nodes[t].x+=e}}]),i
}(df),cf=function(t){qd(i,t);var e=hf(i)
;function i(t){var o
;return Gh(this,i),(o=e.call(this)).layout=t,o}
return $h(i,[{key:"curveType",value:function(){
return"vertical"}},{key:"getPosition",
value:function(t){return t.y}},{key:"setPosition",
value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),
t.y=e}},{key:"getTreeSize",value:function(t){
var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t)
;return{min:e.min_y,max:e.max_y}}},{key:"sort",
value:function(t){af.sort(t,(function(t,e){
return t.y-e.y}))}},{key:"fix",
value:function(t,e){
t.x=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.x=!0
}},{key:"shift",value:function(t,e){
this.layout.body.nodes[t].y+=e}}]),i
}(df),uf=Ue.every,ff=Po("every"),pf=Fo("every")
;q({target:"Array",proto:!0,forced:!ff||!pf},{
every:function(t){
return uf(this,t,arguments.length>1?arguments[1]:void 0)
}})
;var vf=K("Array").every,gf=Array.prototype,yf=function(t){
var e=t.every
;return t===gf||t instanceof Array&&e===gf.every?vf:e
},mf=(Nu("Set",(function(t){return function(){
return t(this,arguments.length?arguments[0]:void 0)
}}),Vu),F.Set);function bf(t,e){var i
;if(void 0===br||null==ro(t)){
if(hr(t)||(i=function(t,e){var i;if(t){
if("string"==typeof t)return wf(t,e)
;var o=cr(i=Object.prototype.toString.call(t)).call(i,8,-1)
;return"Object"===o&&t.constructor&&(o=t.constructor.name),
"Map"===o||"Set"===o?yo(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?wf(t,e):void 0
}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i)
;var o=0,n=function(){};return{s:n,n:function(){
return o>=t.length?{done:!0}:{done:!1,value:t[o++]
}},e:function(t){throw t},f:n}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}var r,s=!0,a=!1;return{s:function(){i=no(t)},
n:function(){var t=i.next();return s=t.done,t},
e:function(t){a=!0,r=t},f:function(){try{
s||null==i.return||i.return()}finally{if(a)throw r
}}}}function wf(t,e){
(null==e||e>t.length)&&(e=t.length)
;for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i]
;return o}function kf(t,e){var i=new mf
;return Vo(t).call(t,(function(t){var e
;Vo(e=t.edges).call(e,(function(t){
t.connected&&i.add(t)}))
})),Vo(i).call(i,(function(t){
var i=t.from.id,o=t.to.id
;null==e[i]&&(e[i]=0),(null==e[o]||e[i]>=e[o])&&(e[o]=e[i]+1)
})),e}function _f(t,e,i,o){
var n,r,s=wo(null),a=Qu(n=vr(Md(o).call(o))).call(n,(function(t,e){
return t+1+e.edges.length
}),0),h=i+"Id",d="to"===i?1:-1,l=bf(o);try{
var c=function(){var n=Zn(r.value,2),l=n[0],c=n[1]
;if(!o.has(l)||!t(c))return"continue";s[l]=0
;for(var u=[c],f=0,p=void 0,v=function(){var t,n
;if(!o.has(l))return"continue";var r=s[p.id]+d
;if(Vo(t=fn(n=p.edges).call(n,(function(t){
return t.connected&&t.to!==t.from&&t[i]!==p&&o.has(t.toId)&&o.has(t.fromId)
}))).call(t,(function(t){var o=t[h],n=s[o]
;(null==n||e(r,n))&&(s[o]=r,u.push(t[i]))
})),f>a)return{v:{v:kf(o,s)}};++f};p=u.pop();){
var g=v()
;if("continue"!==g&&"object"===lr(g))return g.v}}
;for(l.s();!(r=l.n()).done;){var u=c()
;if("continue"!==u&&"object"===lr(u))return u.v}
}catch(t){l.e(t)}finally{l.f()}return s}
var xf=function(){function t(){
Gh(this,t),this.childrenReference={},this.parentReference={},
this.trees={},this.distributionOrdering={},
this.levels={},this.distributionIndex={},
this.isTree=!1,this.treeIndex=-1}return $h(t,[{
key:"addRelation",value:function(t,e){
void 0===this.childrenReference[t]&&(this.childrenReference[t]=[]),
this.childrenReference[t].push(e),
void 0===this.parentReference[e]&&(this.parentReference[e]=[]),
this.parentReference[e].push(t)}},{
key:"checkIfTree",value:function(){
for(var t in this.parentReference)if(this.parentReference[t].length>1)return void(this.isTree=!1)
;this.isTree=!0}},{key:"numTrees",
value:function(){return this.treeIndex+1}},{
key:"setTreeIndex",value:function(t,e){
void 0!==e&&void 0===this.trees[t.id]&&(this.trees[t.id]=e,
this.treeIndex=Math.max(e,this.treeIndex))}},{
key:"ensureLevel",value:function(t){
void 0===this.levels[t]&&(this.levels[t]=0)}},{
key:"getMaxLevel",value:function(t){
var e=this,i={};return function t(o){
if(void 0!==i[o])return i[o];var n=e.levels[o]
;if(e.childrenReference[o]){
var r=e.childrenReference[o]
;if(r.length>0)for(var s=0;s<r.length;s++)n=Math.max(n,t(r[s]))
}return i[o]=n,n}(t)}},{key:"levelDownstream",
value:function(t,e){
void 0===this.levels[e.id]&&(void 0===this.levels[t.id]&&(this.levels[t.id]=0),
this.levels[e.id]=this.levels[t.id]+1)}},{
key:"setMinLevelToZero",value:function(t){
var e=1e9
;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&void 0!==this.levels[i]&&(e=Math.min(this.levels[i],e))
;for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&void 0!==this.levels[o]&&(this.levels[o]-=e)
}},{key:"getTreeSize",value:function(t,e){
var i=1e9,o=-1e9,n=1e9,r=-1e9
;for(var s in this.trees)if(Object.prototype.hasOwnProperty.call(this.trees,s)&&this.trees[s]===e){
var a=t[s]
;i=Math.min(a.x,i),o=Math.max(a.x,o),n=Math.min(a.y,n),r=Math.max(a.y,r)
}return{min_x:i,max_x:o,min_y:n,max_y:r}}},{
key:"hasSameParent",value:function(t,e){
var i=this.parentReference[t.id],o=this.parentReference[e.id]
;if(void 0===i||void 0===o)return!1
;for(var n=0;n<i.length;n++)for(var r=0;r<o.length;r++)if(i[n]==o[r])return!0
;return!1}},{key:"inSameSubNetwork",
value:function(t,e){
return this.trees[t.id]===this.trees[e.id]}},{
key:"getLevels",value:function(){
return er(this.distributionOrdering)}},{
key:"addToOrdering",value:function(t,e){
void 0===this.distributionOrdering[e]&&(this.distributionOrdering[e]=[])
;var i=!1,o=this.distributionOrdering[e]
;for(var n in o)if(o[n]===t){i=!0;break}
i||(this.distributionOrdering[e].push(t),
this.distributionIndex[t.id]=this.distributionOrdering[e].length-1)
}}]),t}(),Of=function(){function t(e){
Gh(this,t),this.body=e,this._resetRNG(Math.random()+":"+Jn()),
this.setPhysics=!1,
this.options={},this.optionsBackup={physics:{}
},this.defaultOptions={randomSeed:void 0,
improvedLayout:!0,clusterThreshold:150,
hierarchical:{enabled:!1,levelSeparation:150,
nodeSpacing:100,treeSpacing:200,blockShifting:!0,
edgeMinimization:!0,parentCentralization:!0,
direction:"UD",sortMethod:"hubsize"}
},bt(this.options,this.defaultOptions),this.bindEventListeners()
}return $h(t,[{key:"bindEventListeners",
value:function(){var t=this
;this.body.emitter.on("_dataChanged",(function(){
t.setupHierarchicalLayout()
})),this.body.emitter.on("_dataLoaded",(function(){
t.layoutNetwork()
})),this.body.emitter.on("_resetHierarchicalLayout",(function(){
t.setupHierarchicalLayout()
})),this.body.emitter.on("_adjustEdgesForHierarchicalLayout",(function(){
if(!0===t.options.hierarchical.enabled){
var e=t.direction.curveType()
;t.body.emitter.emit("_forceDisableDynamicCurves",e,!1)
}}))}},{key:"setOptions",value:function(t,e){
if(void 0!==t){
var i=this.options.hierarchical,o=i.enabled
;if(zr(["randomSeed","improvedLayout","clusterThreshold"],this.options,t),
Zr(this.options,t,"hierarchical"),
void 0!==t.randomSeed&&this._resetRNG(t.randomSeed),
!0===i.enabled)return!0===o&&this.body.emitter.emit("refresh",!0),
"RL"===i.direction||"DU"===i.direction?i.levelSeparation>0&&(i.levelSeparation*=-1):i.levelSeparation<0&&(i.levelSeparation*=-1),
this.setDirectionStrategy(),
this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptionsForHierarchicalLayout(e)
;if(!0===o)return this.body.emitter.emit("refresh"),
Nr(e,this.optionsBackup)}return e}},{
key:"_resetRNG",value:function(t){
this.initialRandomSeed=t,this._rng=_r(this.initialRandomSeed)
}},{key:"adaptAllOptionsForHierarchicalLayout",
value:function(t){
if(!0===this.options.hierarchical.enabled){
var e=this.optionsBackup.physics
;void 0===t.physics||!0===t.physics?(t.physics={
enabled:void 0===e.enabled||e.enabled,
solver:"hierarchicalRepulsion"
},e.enabled=void 0===e.enabled||e.enabled,e.solver=e.solver||"barnesHut"):"object"===lr(t.physics)?(e.enabled=void 0===t.physics.enabled||t.physics.enabled,
e.solver=t.physics.solver||"barnesHut",
t.physics.solver="hierarchicalRepulsion"):!1!==t.physics&&(e.solver="barnesHut",
t.physics={solver:"hierarchicalRepulsion"})
;var i=this.direction.curveType()
;if(void 0===t.edges)this.optionsBackup.edges={
smooth:{enabled:!0,type:"dynamic"}},t.edges={
smooth:!1
};else if(void 0===t.edges.smooth)this.optionsBackup.edges={
smooth:{enabled:!0,type:"dynamic"}
},t.edges.smooth=!1;else if("boolean"==typeof t.edges.smooth)this.optionsBackup.edges={
smooth:t.edges.smooth},t.edges.smooth={
enabled:t.edges.smooth,type:i};else{
var o=t.edges.smooth
;void 0!==o.type&&"dynamic"!==o.type&&(i=o.type),this.optionsBackup.edges={
smooth:{enabled:void 0===o.enabled||o.enabled,
type:void 0===o.type?"dynamic":o.type,
roundness:void 0===o.roundness?.5:o.roundness,
forceDirection:void 0!==o.forceDirection&&o.forceDirection
}},t.edges.smooth={
enabled:void 0===o.enabled||o.enabled,type:i,
roundness:void 0===o.roundness?.5:o.roundness,
forceDirection:void 0!==o.forceDirection&&o.forceDirection
}}
this.body.emitter.emit("_forceDisableDynamicCurves",i)
}return t}},{key:"positionInitially",
value:function(t){
if(!0!==this.options.hierarchical.enabled){
this._resetRNG(this.initialRandomSeed)
;for(var e=t.length+50,i=0;i<t.length;i++){
var o=t[i],n=2*Math.PI*this._rng()
;void 0===o.x&&(o.x=e*Math.cos(n)),void 0===o.y&&(o.y=e*Math.sin(n))
}}}},{key:"layoutNetwork",value:function(){
if(!0!==this.options.hierarchical.enabled&&!0===this.options.improvedLayout){
for(var t=this.body.nodeIndices,e=0,i=0;i<t.length;i++)!0===this.body.nodes[t[i]].predefinedPosition&&(e+=1)
;if(e<.5*t.length){
var o=0,n=this.options.clusterThreshold,r={
clusterNodeProperties:{shape:"ellipse",label:"",
group:"",font:{multi:!1}},clusterEdgeProperties:{
label:"",font:{multi:!1},smooth:{enabled:!1}}}
;if(t.length>n){
for(var s=t.length;t.length>n&&o<=10;){o+=1
;var a=t.length
;if(o%3==0?this.body.modules.clustering.clusterBridges(r):this.body.modules.clustering.clusterOutliers(r),
a==t.length&&o%3!=0)return this._declusterAll(),
this.body.emitter.emit("_layoutFailed"),
void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")
}this.body.modules.kamadaKawai.setOptions({
springLength:Math.max(150,2*s)})}
o>10&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."),
this.body.modules.kamadaKawai.solve(t,this.body.edgeIndices,!0),
this._shiftToCenter();for(var h=0;h<t.length;h++){
var d=this.body.nodes[t[h]]
;!1===d.predefinedPosition&&(d.x+=70*(.5-this._rng()),
d.y+=70*(.5-this._rng()))}
this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")
}}}},{key:"_shiftToCenter",value:function(){
for(var t=uu.getRangeCore(this.body.nodes,this.body.nodeIndices),e=uu.findCenter(t),i=0;i<this.body.nodeIndices.length;i++){
var o=this.body.nodes[this.body.nodeIndices[i]]
;o.x-=e.x,o.y-=e.y}}},{key:"_declusterAll",
value:function(){for(var t=!0;!0===t;){t=!1
;for(var e=0;e<this.body.nodeIndices.length;e++)!0===this.body.nodes[this.body.nodeIndices[e]].isCluster&&(t=!0,
this.body.modules.clustering.openCluster(this.body.nodeIndices[e],{},!1))
;!0===t&&this.body.emitter.emit("_dataChanged")}}
},{key:"getSeed",value:function(){
return this.initialRandomSeed}},{
key:"setupHierarchicalLayout",value:function(){
if(!0===this.options.hierarchical.enabled&&this.body.nodeIndices.length>0){
var t,e,i=!1,o=!1
;for(e in this.lastNodeOnLevel={},this.hierarchical=new xf,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,e)&&(void 0!==(t=this.body.nodes[e]).options.level?(i=!0,
this.hierarchical.levels[e]=t.options.level):o=!0)
;if(!0===o&&!0===i)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.")
;if(!0===o){
var n=this.options.hierarchical.sortMethod
;"hubsize"===n?this._determineLevelsByHubsize():"directed"===n?this._determineLevelsDirected():"custom"===n&&this._determineLevelsCustomCallback()
}
for(var r in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,r)&&this.hierarchical.ensureLevel(r)
;var s=this._getDistribution()
;this._generateMap(),this._placeNodesByHierarchy(s),
this._condenseHierarchy(),this._shiftToCenter()}}
},{key:"_condenseHierarchy",value:function(){
var t=this,e=!1,i={},o=function(e,i){
var o=t.hierarchical.trees
;for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&o[n]===e&&t.direction.shift(n,i)
},n=function(){
for(var e=[],i=0;i<t.hierarchical.numTrees();i++)e.push(t.direction.getTreeSize(i))
;return e},r=function e(i,o){
if(!o[i.id]&&(o[i.id]=!0,t.hierarchical.childrenReference[i.id])){
var n=t.hierarchical.childrenReference[i.id]
;if(n.length>0)for(var r=0;r<n.length;r++)e(t.body.nodes[n[r]],o)
}},s=function(e){
var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e9,o=1e9,n=1e9,r=1e9,s=-1e9
;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){
var h=t.body.nodes[a],d=t.hierarchical.levels[h.id],l=t.direction.getPosition(h),c=t._getSpaceAroundNode(h,e),u=Zn(c,2),f=u[0],p=u[1]
;o=Math.min(f,o),
n=Math.min(p,n),d<=i&&(r=Math.min(l,r),s=Math.max(l,s))
}return[r,s,o,n]},a=function(e,i){
var o=t.hierarchical.getMaxLevel(e.id),n=t.hierarchical.getMaxLevel(i.id)
;return Math.min(o,n)},h=function(e,i,o){
for(var n=t.hierarchical,r=0;r<i.length;r++){
var s=i[r],a=n.distributionOrdering[s]
;if(a.length>1)for(var h=0;h<a.length-1;h++){
var d=a[h],l=a[h+1]
;n.hasSameParent(d,l)&&n.inSameSubNetwork(d,l)&&e(d,l,o)
}}},d=function(i,o){
var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],h=t.direction.getPosition(i),d=t.direction.getPosition(o),l=Math.abs(d-h),c=t.options.hierarchical.nodeSpacing
;if(l>c){var u={},f={};r(i,u),r(o,f)
;var p=a(i,o),v=s(u,p),g=s(f,p),y=v[1],m=g[0],b=g[2]
;if(Math.abs(y-m)>c){var k=y-m+c
;k<-b+c&&(k=-b+c),k<0&&(t._shiftBlock(o.id,k),e=!0,
!0===n&&t._centerParent(o))}}},l=function(o,n){
for(var a=n.id,h=n.edges,d=t.hierarchical.levels[n.id],l=t.options.hierarchical.levelSeparation*t.options.hierarchical.levelSeparation,c={},u=[],f=0;f<h.length;f++){
var p=h[f];if(p.toId!=p.fromId){
var v=p.toId==a?p.from:p.to
;c[h[f].id]=v,t.hierarchical.levels[v.id]<d&&u.push(p)
}}var g=function(e,i){
for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){
var r=t.direction.getPosition(c[i[n].id])-e
;o+=r/Math.sqrt(r*r+l)}return o},y=function(e,i){
for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){
var r=t.direction.getPosition(c[i[n].id])-e
;o-=l*Math.pow(r*r+l,-1.5)}return o
},m=function(e,i){
for(var o=t.direction.getPosition(n),r={},s=0;s<e;s++){
var a=g(o,i),h=y(o,i)
;if(void 0!==r[o-=Math.max(-40,Math.min(40,Math.round(a/h)))])break
;r[o]=s}return o},b=m(o,u);!function(o){
var a=t.direction.getPosition(n)
;if(void 0===i[n.id]){var h={};r(n,h),i[n.id]=h}
var d=s(i[n.id]),l=d[2],c=d[3],u=o-a,f=0
;u>0?f=Math.min(u,c-t.options.hierarchical.nodeSpacing):u<0&&(f=-Math.min(-u,l-t.options.hierarchical.nodeSpacing)),
0!=f&&(t._shiftBlock(n.id,f),e=!0)
}(b),function(i){
var o=t.direction.getPosition(n),r=t._getSpaceAroundNode(n),s=Zn(r,2),a=s[0],h=s[1],d=i-o,l=o
;d>0?l=Math.min(o+(h-t.options.hierarchical.nodeSpacing),i):d<0&&(l=Math.max(o-(a-t.options.hierarchical.nodeSpacing),i)),
l!==o&&(t.direction.setPosition(n,l),e=!0)
}(b=m(o,h))}
;!0===this.options.hierarchical.blockShifting&&(function(i){
var o=t.hierarchical.getLevels();o=ou(o).call(o)
;for(var n=0;n<i&&(e=!1,h(d,o,!0),!0===e);n++);
}(5),function(){
for(var e in t.body.nodes)Object.prototype.hasOwnProperty.call(t.body.nodes,e)&&t._centerParent(t.body.nodes[e])
}()),
!0===this.options.hierarchical.edgeMinimization&&function(i){
var o=t.hierarchical.getLevels();o=ou(o).call(o)
;for(var n=0;n<i;n++){e=!1
;for(var r=0;r<o.length;r++)for(var s=o[r],a=t.hierarchical.distributionOrdering[s],h=0;h<a.length;h++)l(1e3,a[h])
;if(!0!==e)break}
}(20),!0===this.options.hierarchical.parentCentralization&&function(){
var e=t.hierarchical.getLevels();e=ou(e).call(e)
;for(var i=0;i<e.length;i++)for(var o=e[i],n=t.hierarchical.distributionOrdering[o],r=0;r<n.length;r++)t._centerParent(n[r])
}(),function(){
for(var e=n(),i=0,r=0;r<e.length-1;r++)i+=e[r].max-e[r+1].min+t.options.hierarchical.treeSpacing,
o(r+1,i)}()}},{key:"_getSpaceAroundNode",
value:function(t,e){var i=!0;void 0===e&&(i=!1)
;var o=this.hierarchical.levels[t.id]
;if(void 0!==o){
var n=this.hierarchical.distributionIndex[t.id],r=this.direction.getPosition(t),s=this.hierarchical.distributionOrdering[o],a=1e9,h=1e9
;if(0!==n){var d=s[n-1]
;(!0===i&&void 0===e[d.id]||!1===i)&&(a=r-this.direction.getPosition(d))
}if(n!=s.length-1){var l=s[n+1]
;if(!0===i&&void 0===e[l.id]||!1===i){
var c=this.direction.getPosition(l)
;h=Math.min(h,c-r)}}return[a,h]}return[0,0]}},{
key:"_centerParent",value:function(t){
if(this.hierarchical.parentReference[t.id])for(var e=this.hierarchical.parentReference[t.id],i=0;i<e.length;i++){
var o=e[i],n=this.body.nodes[o],r=this.hierarchical.childrenReference[o]
;if(void 0!==r){
var s=this._getCenterPosition(r),a=this.direction.getPosition(n),h=this._getSpaceAroundNode(n),d=Zn(h,2),l=d[0],c=d[1],u=a-s
;(u<0&&Math.abs(u)<c-this.options.hierarchical.nodeSpacing||u>0&&Math.abs(u)<l-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(n,s)
}}}},{key:"_placeNodesByHierarchy",
value:function(t){
for(var e in this.positionedNodes={},t)if(Object.prototype.hasOwnProperty.call(t,e)){
var i,o=er(t[e])
;o=this._indexArrayToNodes(o),sf(i=this.direction).call(i,o)
;for(var n=0,r=0;r<o.length;r++){var s=o[r]
;if(void 0===this.positionedNodes[s.id]){
var a=this.options.hierarchical.nodeSpacing,h=a*n
;n>0&&(h=this.direction.getPosition(o[r-1])+a),
this.direction.setPosition(s,h,e),
this._validatePositionAndContinue(s,e,h),n++}}}}
},{key:"_placeBranchNodes",value:function(t,e){
var i,o=this.hierarchical.childrenReference[t]
;if(void 0!==o){
for(var n=[],r=0;r<o.length;r++)n.push(this.body.nodes[o[r]])
;sf(i=this.direction).call(i,n)
;for(var s=0;s<n.length;s++){
var a=n[s],h=this.hierarchical.levels[a.id]
;if(!(h>e&&void 0===this.positionedNodes[a.id]))return
;var d=this.options.hierarchical.nodeSpacing,l=void 0
;l=0===s?this.direction.getPosition(this.body.nodes[t]):this.direction.getPosition(n[s-1])+d,
this.direction.setPosition(a,l,h),
this._validatePositionAndContinue(a,h,l)}
var c=this._getCenterPosition(n)
;this.direction.setPosition(this.body.nodes[t],c,e)
}}},{key:"_validatePositionAndContinue",
value:function(t,e,i){
if(this.hierarchical.isTree){
if(void 0!==this.lastNodeOnLevel[e]){
var o=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[e]])
;if(i-o<this.options.hierarchical.nodeSpacing){
var n=o+this.options.hierarchical.nodeSpacing-i,r=this._findCommonParent(this.lastNodeOnLevel[e],t.id)
;this._shiftBlock(r.withChild,n)}}
this.lastNodeOnLevel[e]=t.id,this.positionedNodes[t.id]=!0,
this._placeBranchNodes(t.id,e)}}},{
key:"_indexArrayToNodes",value:function(t){
for(var e=[],i=0;i<t.length;i++)e.push(this.body.nodes[t[i]])
;return e}},{key:"_getDistribution",
value:function(){var t,e,i={}
;for(t in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,t)){
e=this.body.nodes[t]
;var o=void 0===this.hierarchical.levels[t]?0:this.hierarchical.levels[t]
;this.direction.fix(e,o),
void 0===i[o]&&(i[o]={}),i[o][t]=e}return i}},{
key:"_getActiveEdges",value:function(t){
var e=this,i=[];return Lr(t.edges,(function(t){
var o
;-1!==On(o=e.body.edgeIndices).call(o,t.id)&&i.push(t)
})),i}},{key:"_getHubSizes",value:function(){
var t=this,e={}
;Lr(this.body.nodeIndices,(function(i){
var o=t.body.nodes[i],n=t._getActiveEdges(o).length
;e[n]=!0}));var i=[];return Lr(e,(function(t){
i.push(Number(t))
})),sf(af).call(af,i,(function(t,e){return e-t
})),i}},{key:"_determineLevelsByHubsize",
value:function(){for(var t=this,e=function(_e6,i){
t.hierarchical.levelDownstream(_e6,i)
},i=this._getHubSizes(),o=function(_o2){
var n=i[_o2];if(0===n)return"break"
;Lr(t.body.nodeIndices,(function(i){
var o=t.body.nodes[i]
;n===t._getActiveEdges(o).length&&t._crawlNetwork(e,i)
}))},n=0;n<i.length&&"break"!==o(n);++n);}},{
key:"_determineLevelsCustomCallback",
value:function(){var t=this
;this._crawlNetwork((function(e,i,o){
var n=t.hierarchical.levels[e.id]
;void 0===n&&(n=t.hierarchical.levels[e.id]=1e5)
;var r=(uu.cloneOptions(e,"node"),
uu.cloneOptions(i,"node"),void uu.cloneOptions(o,"edge"))
;t.hierarchical.levels[i.id]=n+r
})),this.hierarchical.setMinLevelToZero(this.body.nodes)
}},{key:"_determineLevelsDirected",
value:function(){
var t,e=this,i=Qu(t=this.body.nodeIndices).call(t,(function(t,i){
return t.set(i,e.body.nodes[i]),t}),new qu)
;"roots"===this.options.hierarchical.shakeTowards?this.hierarchical.levels=function(t){
return _f((function(e){var i,o
;return yf(i=fn(o=e.edges).call(o,(function(e){
return t.has(e.toId)}))).call(i,(function(t){
return t.from===e}))}),(function(t,e){return e<t
}),"to",t)
}(i):this.hierarchical.levels=function(t){
return _f((function(e){var i,o
;return yf(i=fn(o=e.edges).call(o,(function(e){
return t.has(e.toId)}))).call(i,(function(t){
return t.to===e}))}),(function(t,e){return e>t
}),"from",t)
}(i),this.hierarchical.setMinLevelToZero(this.body.nodes)
}},{key:"_generateMap",value:function(){var t=this
;this._crawlNetwork((function(e,i){
t.hierarchical.levels[i.id]>t.hierarchical.levels[e.id]&&t.hierarchical.addRelation(e.id,i.id)
})),this.hierarchical.checkIfTree()}},{
key:"_crawlNetwork",value:function(){
var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments.length>1?arguments[1]:void 0,o={},n=function i(n,r){
if(void 0===o[n.id]){var s
;t.hierarchical.setTreeIndex(n,r),o[n.id]=!0
;for(var a=t._getActiveEdges(n),h=0;h<a.length;h++){
var d=a[h]
;!0===d.connected&&(s=d.toId==n.id?d.from:d.to,n.id!=s.id&&(e(n,s,d),i(s,r)))
}}}
;if(void 0===i)for(var r=0,s=0;s<this.body.nodeIndices.length;s++){
var a=this.body.nodeIndices[s]
;void 0===o[a]&&(n(this.body.nodes[a],r),r+=1)
}else{var d=this.body.nodes[i]
;if(void 0===d)return void console.error("Node not found:",i)
;n(d)}}},{key:"_shiftBlock",value:function(t,e){
var i=this,o={};!function t(n){if(!o[n]){
o[n]=!0,i.direction.shift(n,e)
;var r=i.hierarchical.childrenReference[n]
;if(void 0!==r)for(var s=0;s<r.length;s++)t(r[s])}
}(t)}},{key:"_findCommonParent",
value:function(t,e){var i=this,o={}
;return function t(e,o){
var n=i.hierarchical.parentReference[o]
;if(void 0!==n)for(var r=0;r<n.length;r++){
var s=n[r];e[s]=!0,t(e,s)}}(o,t),function t(e,o){
var n=i.hierarchical.parentReference[o]
;if(void 0!==n)for(var r=0;r<n.length;r++){
var s=n[r];if(void 0!==e[s])return{foundParent:s,
withChild:o};var a=t(e,s)
;if(null!==a.foundParent)return a}return{
foundParent:null,withChild:o}}(o,e)}},{
key:"setDirectionStrategy",value:function(){
var t="UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction
;this.direction=t?new lf(this):new cf(this)}},{
key:"_getCenterPosition",value:function(t){
for(var e=1e9,i=-1e9,o=0;o<t.length;o++){
var n=void 0;if(void 0!==t[o].id)n=t[o];else{
var r=t[o];n=this.body.nodes[r]}
var s=this.direction.getPosition(n)
;e=Math.min(e,s),i=Math.max(i,s)}return.5*(e+i)}
}]),t}(),Ef=function(){function t(e,i,o,n){
var r,s,a=this
;Gh(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.interactionHandler=n,
this.editMode=!1,
this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0,
this.manipulationHammers=[],
this.temporaryUIFunctions={},this.temporaryEventFunctions=[],
this.touchTime=0,this.temporaryIds={nodes:[],
edges:[]
},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},
this.defaultOptions={enabled:!1,
initiallyActive:!1,addNode:!0,addEdge:!0,
editNode:void 0,editEdge:!0,deleteNode:!0,
deleteEdge:!0,controlNodeStyle:{shape:"dot",
size:6,color:{background:"#ff0000",
border:"#3c3c3c",highlight:{background:"#07f968",
border:"#3c3c3c"}},borderWidth:2,
borderWidthSelected:2}
},bt(this.options,this.defaultOptions),this.body.emitter.on("destroy",(function(){
a._clean()
})),this.body.emitter.on("_dataChanged",Z(r=this._restore).call(r,this)),
this.body.emitter.on("_resetData",Z(s=this._restore).call(s,this))
}return $h(t,[{key:"_restore",value:function(){
!1!==this.inMode&&(!0===this.options.initiallyActive?this.enableEditMode():this.disableEditMode())
}},{key:"setOptions",value:function(t,e,i){
void 0!==e&&(void 0!==e.locale?this.options.locale=e.locale:this.options.locale=i.locale,
void 0!==e.locales?this.options.locales=e.locales:this.options.locales=i.locales),
void 0!==t&&("boolean"==typeof t?this.options.enabled=t:(this.options.enabled=!0,
Nr(this.options,t)),
!0===this.options.initiallyActive&&(this.editMode=!0),this._setup())
}},{key:"toggleEditMode",value:function(){
!0===this.editMode?this.disableEditMode():this.enableEditMode()
}},{key:"enableEditMode",value:function(){
this.editMode=!0,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="block",
this.closeDiv.style.display="block",
this.editModeDiv.style.display="none",this.showManipulatorToolbar())
}},{key:"disableEditMode",value:function(){
this.editMode=!1,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="none",
this.closeDiv.style.display="none",
this.editModeDiv.style.display="block",this._createEditButton())
}},{key:"showManipulatorToolbar",value:function(){
if(this._clean(),this.manipulationDOM={},
!0===this.guiEnabled){var t,e
;this.editMode=!0,this.manipulationDiv.style.display="block",
this.closeDiv.style.display="block"
;var i=this.selectionHandler._getSelectedNodeCount(),o=this.selectionHandler._getSelectedEdgeCount(),n=i+o,r=this.options.locales[this.options.locale],s=!1
;!1!==this.options.addNode&&(this._createAddNodeButton(r),
s=!0),!1!==this.options.addEdge&&(!0===s?this._createSeperator(1):s=!0,
this._createAddEdgeButton(r)),
1===i&&"function"==typeof this.options.editNode?(!0===s?this._createSeperator(2):s=!0,
this._createEditNodeButton(r)):1===o&&0===i&&!1!==this.options.editEdge&&(!0===s?this._createSeperator(3):s=!0,
this._createEditEdgeButton(r)),
0!==n&&(i>0&&!1!==this.options.deleteNode||0===i&&!1!==this.options.deleteEdge)&&(!0===s&&this._createSeperator(4),
this._createDeleteButton(r)),
this._bindHammerToDiv(this.closeDiv,Z(t=this.toggleEditMode).call(t,this)),
this._temporaryBindEvent("select",Z(e=this.showManipulatorToolbar).call(e,this))
}this.body.emitter.emit("_redraw")}},{
key:"addNodeMode",value:function(){var t
;if(!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="addNode",
!0===this.guiEnabled){
var e,i=this.options.locales[this.options.locale]
;this.manipulationDOM={},this._createBackButton(i),
this._createSeperator(),this._createDescription(i.addDescription||this.options.locales.en.addDescription),
this._bindHammerToDiv(this.closeDiv,Z(e=this.toggleEditMode).call(e,this))
}
this._temporaryBindEvent("click",Z(t=this._performAddNode).call(t,this))
}},{key:"editNode",value:function(){var t=this
;!0!==this.editMode&&this.enableEditMode(),
this._clean()
;var e=this.selectionHandler._getSelectedNode()
;if(void 0!==e){
if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.")
;if(!0!==e.isCluster){var i=Nr({},e.options,!1)
;if(i.x=e.x,i.y=e.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)")
;this.options.editNode(i,(function(e){
null!=e&&"editNode"===t.inMode&&t.body.data.nodes.getDataSet().update(e),
t.showManipulatorToolbar()}))
}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)
}else this.showManipulatorToolbar()}},{
key:"addEdgeMode",value:function(){var t,e,i,o,n
;if(!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="addEdge",
!0===this.guiEnabled){
var r,s=this.options.locales[this.options.locale]
;this.manipulationDOM={},this._createBackButton(s),
this._createSeperator(),this._createDescription(s.edgeDescription||this.options.locales.en.edgeDescription),
this._bindHammerToDiv(this.closeDiv,Z(r=this.toggleEditMode).call(r,this))
}
this._temporaryBindUI("onTouch",Z(t=this._handleConnect).call(t,this)),this._temporaryBindUI("onDragEnd",Z(e=this._finishConnect).call(e,this)),
this._temporaryBindUI("onDrag",Z(i=this._dragControlNode).call(i,this)),
this._temporaryBindUI("onRelease",Z(o=this._finishConnect).call(o,this)),
this._temporaryBindUI("onDragStart",Z(n=this._dragStartEdge).call(n,this)),
this._temporaryBindUI("onHold",(function(){}))}},{
key:"editEdgeMode",value:function(){
if(!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="editEdge",
"object"!==lr(this.options.editEdge)||"function"!=typeof this.options.editEdge.editWithoutDrag||(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],
void 0===this.edgeBeingEditedId)){
if(!0===this.guiEnabled){
var t,e=this.options.locales[this.options.locale]
;this.manipulationDOM={},this._createBackButton(e),
this._createSeperator(),this._createDescription(e.editEdgeDescription||this.options.locales.en.editEdgeDescription),
this._bindHammerToDiv(this.closeDiv,Z(t=this.toggleEditMode).call(t,this))
}
if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],void 0!==this.edgeBeingEditedId){
var i,o,n,r,s=this.body.edges[this.edgeBeingEditedId],a=this._getNewTargetNode(s.from.x,s.from.y),h=this._getNewTargetNode(s.to.x,s.to.y)
;this.temporaryIds.nodes.push(a.id),
this.temporaryIds.nodes.push(h.id),this.body.nodes[a.id]=a,
this.body.nodeIndices.push(a.id),
this.body.nodes[h.id]=h,this.body.nodeIndices.push(h.id),
this._temporaryBindUI("onTouch",Z(i=this._controlNodeTouch).call(i,this)),
this._temporaryBindUI("onTap",(function(){})),
this._temporaryBindUI("onHold",(function(){})),
this._temporaryBindUI("onDragStart",Z(o=this._controlNodeDragStart).call(o,this)),
this._temporaryBindUI("onDrag",Z(n=this._controlNodeDrag).call(n,this)),
this._temporaryBindUI("onDragEnd",Z(r=this._controlNodeDragEnd).call(r,this)),
this._temporaryBindUI("onMouseMove",(function(){})),
this._temporaryBindEvent("beforeDrawing",(function(t){
var e=s.edgeType.findBorderPositions(t)
;!1===a.selected&&(a.x=e.from.x,a.y=e.from.y),
!1===h.selected&&(h.x=e.to.x,h.y=e.to.y)
})),this.body.emitter.emit("_redraw")
}else this.showManipulatorToolbar()}else{
var d=this.body.edges[this.edgeBeingEditedId]
;this._performEditEdge(d.from.id,d.to.id)}}},{
key:"deleteSelected",value:function(){var t=this
;!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="delete"
;var e=this.selectionHandler.getSelectedNodes(),i=this.selectionHandler.getSelectedEdges(),o=void 0
;if(e.length>0){
for(var n=0;n<e.length;n++)if(!0===this.body.nodes[e[n]].isCluster)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError)
;"function"==typeof this.options.deleteNode&&(o=this.options.deleteNode)
}else i.length>0&&"function"==typeof this.options.deleteEdge&&(o=this.options.deleteEdge)
;if("function"==typeof o){var r={nodes:e,edges:i}
;if(2!==o.length)throw new Error("The function for delete does not support two arguments (data, callback)")
;o(r,(function(e){
null!=e&&"delete"===t.inMode?(t.body.data.edges.getDataSet().remove(e.edges),
t.body.data.nodes.getDataSet().remove(e.nodes),
t.body.emitter.emit("startSimulation"),
t.showManipulatorToolbar()):(t.body.emitter.emit("startSimulation"),
t.showManipulatorToolbar())}))
}else this.body.data.edges.getDataSet().remove(i),
this.body.data.nodes.getDataSet().remove(e),
this.body.emitter.emit("startSimulation"),
this.showManipulatorToolbar()}},{key:"_setup",
value:function(){
!0===this.options.enabled?(this.guiEnabled=!0,this._createWrappers(),
!1===this.editMode?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),
this.guiEnabled=!1)}},{key:"_createWrappers",
value:function(){
void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),
this.manipulationDiv.className="vis-manipulation",
!0===this.editMode?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none",
this.canvas.frame.appendChild(this.manipulationDiv)),
void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),
this.editModeDiv.className="vis-edit-mode",
!0===this.editMode?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block",
this.canvas.frame.appendChild(this.editModeDiv)),
void 0===this.closeDiv&&(this.closeDiv=document.createElement("div"),
this.closeDiv.className="vis-close",
this.closeDiv.style.display=this.manipulationDiv.style.display,
this.canvas.frame.appendChild(this.closeDiv))}},{
key:"_getNewTargetNode",value:function(t,e){
var i=Nr({},this.options.controlNodeStyle)
;i.id="targetNode"+cu(),i.hidden=!1,i.physics=!1,
i.x=t,i.y=e
;var o=this.body.functions.createNode(i)
;return o.shape.boundingBox={left:t,right:t,top:e,
bottom:e},o}},{key:"_createEditButton",
value:function(){var t
;this._clean(),this.manipulationDOM={},Mr(this.editModeDiv)
;var e=this.options.locales[this.options.locale],i=this._createButton("editMode","vis-button vis-edit vis-edit-mode",e.edit||this.options.locales.en.edit)
;this.editModeDiv.appendChild(i),
this._bindHammerToDiv(i,Z(t=this.toggleEditMode).call(t,this))
}},{key:"_clean",value:function(){
this.inMode=!1,!0===this.guiEnabled&&(Mr(this.editModeDiv),
Mr(this.manipulationDiv),
this._cleanManipulatorHammers()),this._cleanupTemporaryNodesAndEdges(),
this._unbindTemporaryUIs(),
this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")
}},{key:"_cleanManipulatorHammers",
value:function(){
if(0!=this.manipulationHammers.length){
for(var t=0;t<this.manipulationHammers.length;t++)this.manipulationHammers[t].destroy()
;this.manipulationHammers=[]}}},{
key:"_removeManipulationDOM",value:function(){
this._clean(),Mr(this.manipulationDiv),
Mr(this.editModeDiv),Mr(this.closeDiv),this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),
this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),
this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv),
this.manipulationDiv=void 0,
this.editModeDiv=void 0,this.closeDiv=void 0}},{
key:"_createSeperator",value:function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
;this.manipulationDOM["seperatorLineDiv"+t]=document.createElement("div"),
this.manipulationDOM["seperatorLineDiv"+t].className="vis-separator-line",
this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+t])
}},{key:"_createAddNodeButton",value:function(t){
var e,i=this._createButton("addNode","vis-button vis-add",t.addNode||this.options.locales.en.addNode)
;this.manipulationDiv.appendChild(i),
this._bindHammerToDiv(i,Z(e=this.addNodeMode).call(e,this))
}},{key:"_createAddEdgeButton",value:function(t){
var e,i=this._createButton("addEdge","vis-button vis-connect",t.addEdge||this.options.locales.en.addEdge)
;this.manipulationDiv.appendChild(i),
this._bindHammerToDiv(i,Z(e=this.addEdgeMode).call(e,this))
}},{key:"_createEditNodeButton",value:function(t){
var e,i=this._createButton("editNode","vis-button vis-edit",t.editNode||this.options.locales.en.editNode)
;this.manipulationDiv.appendChild(i),
this._bindHammerToDiv(i,Z(e=this.editNode).call(e,this))
}},{key:"_createEditEdgeButton",value:function(t){
var e,i=this._createButton("editEdge","vis-button vis-edit",t.editEdge||this.options.locales.en.editEdge)
;this.manipulationDiv.appendChild(i),
this._bindHammerToDiv(i,Z(e=this.editEdgeMode).call(e,this))
}},{key:"_createDeleteButton",value:function(t){
var e,i
;i=this.options.rtl?"vis-button vis-delete-rtl":"vis-button vis-delete"
;var o=this._createButton("delete",i,t.del||this.options.locales.en.del)
;this.manipulationDiv.appendChild(o),
this._bindHammerToDiv(o,Z(e=this.deleteSelected).call(e,this))
}},{key:"_createBackButton",value:function(t){
var e,i=this._createButton("back","vis-button vis-back",t.back||this.options.locales.en.back)
;this.manipulationDiv.appendChild(i),
this._bindHammerToDiv(i,Z(e=this.showManipulatorToolbar).call(e,this))
}},{key:"_createButton",value:function(t,e,i){
var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"vis-label"
;return this.manipulationDOM[t+"Div"]=document.createElement("div"),
this.manipulationDOM[t+"Div"].className=e,
this.manipulationDOM[t+"Label"]=document.createElement("div"),
this.manipulationDOM[t+"Label"].className=o,
this.manipulationDOM[t+"Label"].innerHTML=i,
this.manipulationDOM[t+"Div"].appendChild(this.manipulationDOM[t+"Label"]),
this.manipulationDOM[t+"Div"]}},{
key:"_createDescription",value:function(t){
this.manipulationDiv.appendChild(this._createButton("description","vis-button vis-none",t))
}},{key:"_temporaryBindEvent",value:function(t,e){
this.temporaryEventFunctions.push({event:t,
boundFunction:e}),this.body.emitter.on(t,e)}},{
key:"_temporaryBindUI",value:function(t,e){
if(void 0===this.body.eventListeners[t])throw new Error("This UI function does not exist. Typo? You tried: "+t+" possible are: "+ql(er(this.body.eventListeners)))
;this.temporaryUIFunctions[t]=this.body.eventListeners[t],
this.body.eventListeners[t]=e}},{
key:"_unbindTemporaryUIs",value:function(){
for(var t in this.temporaryUIFunctions)Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions,t)&&(this.body.eventListeners[t]=this.temporaryUIFunctions[t],
delete this.temporaryUIFunctions[t])
;this.temporaryUIFunctions={}}},{
key:"_unbindTemporaryEvents",value:function(){
for(var t=0;t<this.temporaryEventFunctions.length;t++){
var e=this.temporaryEventFunctions[t].event,i=this.temporaryEventFunctions[t].boundFunction
;this.body.emitter.off(e,i)}
this.temporaryEventFunctions=[]}},{
key:"_bindHammerToDiv",value:function(t,e){
var i=new Uh(t,{})
;wu(i,e),this.manipulationHammers.push(i)}},{
key:"_cleanupTemporaryNodesAndEdges",
value:function(){
for(var t=0;t<this.temporaryIds.edges.length;t++){
var e
;this.body.edges[this.temporaryIds.edges[t]].disconnect(),delete this.body.edges[this.temporaryIds.edges[t]]
;var i,o=On(e=this.body.edgeIndices).call(e,this.temporaryIds.edges[t])
;-1!==o&&ds(i=this.body.edgeIndices).call(i,o,1)}
for(var n=0;n<this.temporaryIds.nodes.length;n++){
var r
;delete this.body.nodes[this.temporaryIds.nodes[n]]
;var s,a=On(r=this.body.nodeIndices).call(r,this.temporaryIds.nodes[n])
;-1!==a&&ds(s=this.body.nodeIndices).call(s,a,1)}
this.temporaryIds={nodes:[],edges:[]}}},{
key:"_controlNodeTouch",value:function(t){
this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(t.center),
this.lastTouch.translation=bt({},this.body.view.translation)
}},{key:"_controlNodeDragStart",value:function(t){
var e=this.lastTouch,i=this.selectionHandler._pointerToPositionObject(e),o=this.body.nodes[this.temporaryIds.nodes[0]],n=this.body.nodes[this.temporaryIds.nodes[1]],r=this.body.edges[this.edgeBeingEditedId]
;this.selectedControlNode=void 0
;var s=o.isOverlappingWith(i),a=n.isOverlappingWith(i)
;!0===s?(this.selectedControlNode=o,
r.edgeType.from=o):!0===a&&(this.selectedControlNode=n,
r.edgeType.to=n),void 0!==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode),
this.body.emitter.emit("_redraw")}},{
key:"_controlNodeDrag",value:function(t){
this.body.emitter.emit("disablePhysics")
;var e=this.body.functions.getPointer(t.center),i=this.canvas.DOMtoCanvas(e)
;void 0!==this.selectedControlNode?(this.selectedControlNode.x=i.x,
this.selectedControlNode.y=i.y):this.interactionHandler.onDrag(t),
this.body.emitter.emit("_redraw")}},{
key:"_controlNodeDragEnd",value:function(t){
var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=this.body.edges[this.edgeBeingEditedId]
;if(void 0!==this.selectedControlNode){
this.selectionHandler.unselectAll()
;for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--)if(n[s]!==this.selectedControlNode.id){
r=this.body.nodes[n[s]];break}
if(void 0!==r&&void 0!==this.selectedControlNode)if(!0===r.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{
var a=this.body.nodes[this.temporaryIds.nodes[0]]
;this.selectedControlNode.id===a.id?this._performEditEdge(r.id,o.to.id):this._performEditEdge(o.from.id,r.id)
}else o.updateEdgeType(),
this.body.emitter.emit("restorePhysics")
;this.body.emitter.emit("_redraw")}}},{
key:"_handleConnect",value:function(t){
if((new Date).valueOf()-this.touchTime>100){
this.lastTouch=this.body.functions.getPointer(t.center),
this.lastTouch.translation=bt({},this.body.view.translation),
this.interactionHandler.drag.pointer=this.lastTouch,
this.interactionHandler.drag.translation=this.lastTouch.translation
;var e=this.lastTouch,i=this.selectionHandler.getNodeAt(e)
;if(void 0!==i)if(!0===i.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{
var o=this._getNewTargetNode(i.x,i.y)
;this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id)
;var n=this.body.functions.createEdge({
id:"connectionEdge"+cu(),from:i.id,to:o.id,
physics:!1,smooth:{enabled:!0,type:"continuous",
roundness:.5}})
;this.body.edges[n.id]=n,this.body.edgeIndices.push(n.id),this.temporaryIds.nodes.push(o.id),
this.temporaryIds.edges.push(n.id)}
this.touchTime=(new Date).valueOf()}}},{
key:"_dragControlNode",value:function(t){
var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0
;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId)
;for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--){
var a
;if(-1===On(a=this.temporaryIds.nodes).call(a,n[s])){
r=this.body.nodes[n[s]];break}}if(t.controlEdge={
from:o,to:r?r.id:void 0
},this.selectionHandler._generateClickEvent("controlNodeDragging",t,e),
void 0!==this.temporaryIds.nodes[0]){
var h=this.body.nodes[this.temporaryIds.nodes[0]]
;h.x=this.canvas._XconvertDOMtoCanvas(e.x),
h.y=this.canvas._YconvertDOMtoCanvas(e.y),
this.body.emitter.emit("_redraw")
}else this.interactionHandler.onDrag(t)}},{
key:"_finishConnect",value:function(t){
var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0
;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId)
;for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--){
var a
;if(-1===On(a=this.temporaryIds.nodes).call(a,n[s])){
r=this.body.nodes[n[s]];break}}
this._cleanupTemporaryNodesAndEdges(),void 0!==r&&(!0===r.isCluster?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[o]&&void 0!==this.body.nodes[r.id]&&this._performAddEdge(o,r.id)),
t.controlEdge={from:o,to:r?r.id:void 0
},this.selectionHandler._generateClickEvent("controlNodeDragEnd",t,e),
this.body.emitter.emit("_redraw")}},{
key:"_dragStartEdge",value:function(t){
var e=this.lastTouch
;this.selectionHandler._generateClickEvent("dragStart",t,e,void 0,!0)
}},{key:"_performAddNode",value:function(t){
var e=this,i={id:cu(),x:t.pointer.canvas.x,
y:t.pointer.canvas.y,label:"new"}
;if("function"==typeof this.options.addNode){
if(2!==this.options.addNode.length)throw this.showManipulatorToolbar(),
new Error("The function for add does not support two arguments (data,callback)")
;this.options.addNode(i,(function(t){
null!=t&&"addNode"===e.inMode&&e.body.data.nodes.getDataSet().add(t),
e.showManipulatorToolbar()}))
}else this.body.data.nodes.getDataSet().add(i),this.showManipulatorToolbar()
}},{key:"_performAddEdge",value:function(t,e){
var i=this,o={from:t,to:e}
;if("function"==typeof this.options.addEdge){
if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)")
;this.options.addEdge(o,(function(t){
null!=t&&"addEdge"===i.inMode&&(i.body.data.edges.getDataSet().add(t),
i.selectionHandler.unselectAll(),
i.showManipulatorToolbar())}))
}else this.body.data.edges.getDataSet().add(o),this.selectionHandler.unselectAll(),
this.showManipulatorToolbar()}},{
key:"_performEditEdge",value:function(t,e){
var i=this,o={id:this.edgeBeingEditedId,from:t,
to:e,
label:this.body.data.edges.get(this.edgeBeingEditedId).label
},n=this.options.editEdge
;if("object"===lr(n)&&(n=n.editWithoutDrag),"function"==typeof n){
if(2!==n.length)throw new Error("The function for edit does not support two arguments (data, callback)")
;n(o,(function(t){
null==t||"editEdge"!==i.inMode?(i.body.edges[o.id].updateEdgeType(),
i.body.emitter.emit("_redraw"),
i.showManipulatorToolbar()):(i.body.data.edges.getDataSet().update(t),
i.selectionHandler.unselectAll(),
i.showManipulatorToolbar())}))
}else this.body.data.edges.getDataSet().update(o),
this.selectionHandler.unselectAll(),
this.showManipulatorToolbar()}}]),t}(),Cf={
black:"#000000",navy:"#000080",darkblue:"#00008B",
mediumblue:"#0000CD",blue:"#0000FF",
darkgreen:"#006400",green:"#008000",
teal:"#008080",darkcyan:"#008B8B",
deepskyblue:"#00BFFF",darkturquoise:"#00CED1",
mediumspringgreen:"#00FA9A",lime:"#00FF00",
springgreen:"#00FF7F",aqua:"#00FFFF",
cyan:"#00FFFF",midnightblue:"#191970",
dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",
forestgreen:"#228B22",seagreen:"#2E8B57",
darkslategray:"#2F4F4F",limegreen:"#32CD32",
mediumseagreen:"#3CB371",turquoise:"#40E0D0",
royalblue:"#4169E1",steelblue:"#4682B4",
darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",
indigo:"#4B0082",darkolivegreen:"#556B2F",
cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",
mediumaquamarine:"#66CDAA",dimgray:"#696969",
slateblue:"#6A5ACD",olivedrab:"#6B8E23",
slategray:"#708090",lightslategray:"#778899",
mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",
chartreuse:"#7FFF00",aquamarine:"#7FFFD4",
maroon:"#800000",purple:"#800080",olive:"#808000",
gray:"#808080",skyblue:"#87CEEB",
lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",
darkred:"#8B0000",darkmagenta:"#8B008B",
saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",
lightgreen:"#90EE90",mediumpurple:"#9370D8",
darkviolet:"#9400D3",palegreen:"#98FB98",
darkorchid:"#9932CC",yellowgreen:"#9ACD32",
sienna:"#A0522D",brown:"#A52A2A",
darkgray:"#A9A9A9",lightblue:"#ADD8E6",
greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",
lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",
firebrick:"#B22222",darkgoldenrod:"#B8860B",
mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",
darkkhaki:"#BDB76B",silver:"#C0C0C0",
mediumvioletred:"#C71585",indianred:"#CD5C5C",
peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",
lightgrey:"#D3D3D3",palevioletred:"#D87093",
thistle:"#D8BFD8",orchid:"#DA70D6",
goldenrod:"#DAA520",crimson:"#DC143C",
gainsboro:"#DCDCDC",plum:"#DDA0DD",
burlywood:"#DEB887",lightcyan:"#E0FFFF",
lavender:"#E6E6FA",darksalmon:"#E9967A",
violet:"#EE82EE",palegoldenrod:"#EEE8AA",
lightcoral:"#F08080",khaki:"#F0E68C",
aliceblue:"#F0F8FF",honeydew:"#F0FFF0",
azure:"#F0FFFF",sandybrown:"#F4A460",
wheat:"#F5DEB3",beige:"#F5F5DC",
whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",
ghostwhite:"#F8F8FF",salmon:"#FA8072",
antiquewhite:"#FAEBD7",linen:"#FAF0E6",
lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",
red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",
deeppink:"#FF1493",orangered:"#FF4500",
tomato:"#FF6347",hotpink:"#FF69B4",
coral:"#FF7F50",darkorange:"#FF8C00",
lightsalmon:"#FFA07A",orange:"#FFA500",
lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",
peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",
moccasin:"#FFE4B5",bisque:"#FFE4C4",
mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",
papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",
seashell:"#FFF5EE",cornsilk:"#FFF8DC",
lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",
snow:"#FFFAFA",yellow:"#FFFF00",
lightyellow:"#FFFFE0",ivory:"#FFFFF0",
white:"#FFFFFF"},Sf=function(){function t(){
var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
;Gh(this,t),this.pixelRatio=e,
this.generated=!1,this.centerCoordinates={x:144.5,
y:144.5},this.r=289*.49,this.color={r:255,g:255,
b:255,a:1
},this.hueCircle=void 0,this.initialColor={r:255,
g:255,b:255,a:1
},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},
this.closeCallback=function(){},this._create()}
return $h(t,[{key:"insertTo",value:function(t){
void 0!==this.hammer&&(this.hammer.destroy(),
this.hammer=void 0),this.container=t,
this.container.appendChild(this.frame),this._bindHammer(),
this._setSize()}},{key:"setUpdateCallback",
value:function(t){
if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker update callback is not a function.")
;this.updateCallback=t}},{key:"setCloseCallback",
value:function(t){
if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker closing callback is not a function.")
;this.closeCallback=t}},{key:"_isColorString",
value:function(t){
if("string"==typeof t)return Cf[t]}},{
key:"setColor",value:function(t){
var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;if("none"!==t){var i,o=this._isColorString(t)
;if(void 0!==o&&(t=o),!0===Dr(t)){if(!0===Kr(t)){
var n=t.substr(4).substr(0,t.length-5).split(",")
;i={r:n[0],g:n[1],b:n[2],a:1}}else if(!0===$r(t)){
var r=t.substr(5).substr(0,t.length-6).split(",")
;i={r:r[0],g:r[1],b:r[2],a:r[3]}
}else if(!0===Gr(t)){var s=Hr(t);i={r:s.r,g:s.g,
b:s.b,a:1}}
}else if(t instanceof Object&&void 0!==t.r&&void 0!==t.g&&void 0!==t.b){
var a=void 0!==t.a?t.a:"1.0";i={r:t.r,g:t.g,b:t.b,
a:a}}
if(void 0===i)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+ql(t))
;this._setColor(i,e)}}},{key:"show",
value:function(){
void 0!==this.closeCallback&&(this.closeCallback(),this.closeCallback=void 0),
this.applied=!1,
this.frame.style.display="block",this._generateHueCircle()
}},{key:"_hide",value:function(){var t=this
;!0===(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(this.previousColor=bt({},this.color)),
!0===this.applied&&this.updateCallback(this.initialColor),
this.frame.style.display="none",od((function(){
void 0!==t.closeCallback&&(t.closeCallback(),
t.closeCallback=void 0)}),0)}},{key:"_save",
value:function(){
this.updateCallback(this.color),this.applied=!1,this._hide()
}},{key:"_apply",value:function(){
this.applied=!0,this.updateCallback(this.color),
this._updatePicker(this.color)}},{key:"_loadLast",
value:function(){
void 0!==this.previousColor?this.setColor(this.previousColor,!1):alert("There is no last color to load...")
}},{key:"_setColor",value:function(t){
!0===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(this.initialColor=bt({},t)),
this.color=t
;var i=Ur(t.r,t.g,t.b),o=2*Math.PI,n=this.r*i.s,r=this.centerCoordinates.x+n*Math.sin(o*i.h),s=this.centerCoordinates.y+n*Math.cos(o*i.h)
;this.colorPickerSelector.style.left=r-.5*this.colorPickerSelector.clientWidth+"px",
this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px",
this._updatePicker(t)}},{key:"_setOpacity",
value:function(t){
this.color.a=t/100,this._updatePicker(this.color)}
},{key:"_setBrightness",value:function(t){
var e=Ur(this.color.r,this.color.g,this.color.b)
;e.v=t/100;var i=Yr(e.h,e.s,e.v)
;i.a=this.color.a,this.color=i,this._updatePicker()
}},{key:"_updatePicker",value:function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color,e=Ur(t.r,t.g,t.b),i=this.colorPickerCanvas.getContext("2d")
;void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1)),
i.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
;var o=this.colorPickerCanvas.clientWidth,n=this.colorPickerCanvas.clientHeight
;i.clearRect(0,0,o,n),
i.putImageData(this.hueCircle,0,0),i.fillStyle="rgba(0,0,0,"+(1-e.v)+")",
i.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),
Qd(i).call(i),
this.brightnessRange.value=100*e.v,this.opacityRange.value=100*t.a,
this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",
this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"
}},{key:"_setSize",value:function(){
this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",
this.colorPickerCanvas.width=289*this.pixelRatio,
this.colorPickerCanvas.height=289*this.pixelRatio}
},{key:"_create",value:function(){var t,e,i,o
;if(this.frame=document.createElement("div"),
this.frame.className="vis-color-picker",
this.colorPickerDiv=document.createElement("div"),
this.colorPickerSelector=document.createElement("div"),
this.colorPickerSelector.className="vis-selector",
this.colorPickerDiv.appendChild(this.colorPickerSelector),
this.colorPickerCanvas=document.createElement("canvas"),
this.colorPickerDiv.appendChild(this.colorPickerCanvas),
this.colorPickerCanvas.getContext){
var n=this.colorPickerCanvas.getContext("2d")
;this.pixelRatio=(window.devicePixelRatio||1)/(n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1),
this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
}else{var r=document.createElement("DIV")
;r.style.color="red",r.style.fontWeight="bold",
r.style.padding="10px",r.innerHTML="Error: your browser does not support HTML canvas",
this.colorPickerCanvas.appendChild(r)}
this.colorPickerDiv.className="vis-color",
this.opacityDiv=document.createElement("div"),
this.opacityDiv.className="vis-opacity",
this.brightnessDiv=document.createElement("div"),
this.brightnessDiv.className="vis-brightness",
this.arrowDiv=document.createElement("div"),
this.arrowDiv.className="vis-arrow",
this.opacityRange=document.createElement("input")
;try{
this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"
}catch(t){}
this.opacityRange.value="100",this.opacityRange.className="vis-range",
this.brightnessRange=document.createElement("input")
;try{
this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"
}catch(t){}
this.brightnessRange.value="100",this.brightnessRange.className="vis-range",
this.opacityDiv.appendChild(this.opacityRange),
this.brightnessDiv.appendChild(this.brightnessRange)
;var s=this;this.opacityRange.onchange=function(){
s._setOpacity(this.value)
},this.opacityRange.oninput=function(){
s._setOpacity(this.value)
},this.brightnessRange.onchange=function(){
s._setBrightness(this.value)
},this.brightnessRange.oninput=function(){
s._setBrightness(this.value)
},this.brightnessLabel=document.createElement("div"),
this.brightnessLabel.className="vis-label vis-brightness",
this.brightnessLabel.innerHTML="brightness:",
this.opacityLabel=document.createElement("div"),
this.opacityLabel.className="vis-label vis-opacity",
this.opacityLabel.innerHTML="opacity:",
this.newColorDiv=document.createElement("div"),
this.newColorDiv.className="vis-new-color",
this.newColorDiv.innerHTML="new",this.initialColorDiv=document.createElement("div"),
this.initialColorDiv.className="vis-initial-color",
this.initialColorDiv.innerHTML="initial",
this.cancelButton=document.createElement("div"),
this.cancelButton.className="vis-button vis-cancel",
this.cancelButton.innerHTML="cancel",
this.cancelButton.onclick=Z(t=this._hide).call(t,this,!1),
this.applyButton=document.createElement("div"),
this.applyButton.className="vis-button vis-apply",
this.applyButton.innerHTML="apply",
this.applyButton.onclick=Z(e=this._apply).call(e,this),
this.saveButton=document.createElement("div"),
this.saveButton.className="vis-button vis-save",
this.saveButton.innerHTML="save",
this.saveButton.onclick=Z(i=this._save).call(i,this),
this.loadButton=document.createElement("div"),
this.loadButton.className="vis-button vis-load",
this.loadButton.innerHTML="load last",
this.loadButton.onclick=Z(o=this._loadLast).call(o,this),
this.frame.appendChild(this.colorPickerDiv),
this.frame.appendChild(this.arrowDiv),
this.frame.appendChild(this.brightnessLabel),
this.frame.appendChild(this.brightnessDiv),
this.frame.appendChild(this.opacityLabel),
this.frame.appendChild(this.opacityDiv),
this.frame.appendChild(this.newColorDiv),
this.frame.appendChild(this.initialColorDiv),
this.frame.appendChild(this.cancelButton),
this.frame.appendChild(this.applyButton),
this.frame.appendChild(this.saveButton),
this.frame.appendChild(this.loadButton)}},{
key:"_bindHammer",value:function(){var t=this
;this.drag={},this.pinch={},this.hammer=new Uh(this.colorPickerCanvas),
this.hammer.get("pinch").set({enable:!0
}),wu(this.hammer,(function(e){t._moveSelector(e)
})),this.hammer.on("tap",(function(e){
t._moveSelector(e)
})),this.hammer.on("panstart",(function(e){
t._moveSelector(e)
})),this.hammer.on("panmove",(function(e){
t._moveSelector(e)
})),this.hammer.on("panend",(function(e){
t._moveSelector(e)}))}},{key:"_generateHueCircle",
value:function(){if(!1===this.generated){
var t=this.colorPickerCanvas.getContext("2d")
;void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),
t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
;var e,i,o,n,r=this.colorPickerCanvas.clientWidth,s=this.colorPickerCanvas.clientHeight
;t.clearRect(0,0,r,s),this.centerCoordinates={
x:.5*r,y:.5*s},this.r=.49*r
;var a,h=2*Math.PI/360,d=1/this.r
;for(o=0;o<360;o++)for(n=0;n<this.r;n++)e=this.centerCoordinates.x+n*Math.sin(h*o),
i=this.centerCoordinates.y+n*Math.cos(h*o),
a=Yr(.002777777777777778*o,n*d,1),t.fillStyle="rgb("+a.r+","+a.g+","+a.b+")",
t.fillRect(e-.5,i-.5,2,2)
;t.strokeStyle="rgba(0,0,0,1)",t.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),
t.stroke(),this.hueCircle=t.getImageData(0,0,r,s)}
this.generated=!0}},{key:"_moveSelector",
value:function(t){
var e=this.colorPickerDiv.getBoundingClientRect(),i=t.center.x-e.left,o=t.center.y-e.top,n=.5*this.colorPickerDiv.clientHeight,r=.5*this.colorPickerDiv.clientWidth,s=i-r,a=o-n,h=Math.atan2(s,a),d=.98*Math.min(Math.sqrt(s*s+a*a),r),l=Math.cos(h)*d+n,c=Math.sin(h)*d+r
;this.colorPickerSelector.style.top=l-.5*this.colorPickerSelector.clientHeight+"px",
this.colorPickerSelector.style.left=c-.5*this.colorPickerSelector.clientWidth+"px"
;var u=h/(2*Math.PI);u=u<0?u+1:u
;var f=d/this.r,p=Ur(this.color.r,this.color.g,this.color.b)
;p.h=u,p.s=f;var v=Yr(p.h,p.s,p.v)
;v.a=this.color.a,this.color=v,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",
this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"
}}]),t}(),Tf=function(){function t(e,i,o){
var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
;Gh(this,t),this.parent=e,
this.changedOptions=[],this.container=i,this.allowCreation=!1,
this.options={},this.initialized=!1,
this.popupCounter=0,this.defaultOptions={
enabled:!1,filter:!0,container:void 0,
showButton:!0
},bt(this.options,this.defaultOptions),this.configureOptions=o,this.moduleOptions={},
this.domElements=[],
this.popupDiv={},this.popupLimit=5,this.popupHistory={},this.colorPicker=new Sf(n),
this.wrapper=void 0}return $h(t,[{
key:"setOptions",value:function(t){if(void 0!==t){
this.popupHistory={},this._removePopup();var e=!0
;if("string"==typeof t)this.options.filter=t;else if(t instanceof Array)this.options.filter=t.join();else if("object"===lr(t)){
if(null==t)throw new TypeError("options cannot be null")
;void 0!==t.container&&(this.options.container=t.container),
void 0!==fn(t)&&(this.options.filter=fn(t)),
void 0!==t.showButton&&(this.options.showButton=t.showButton),
void 0!==t.enabled&&(e=t.enabled)
}else"boolean"==typeof t?(this.options.filter=!0,
e=t):"function"==typeof t&&(this.options.filter=t,
e=!0)
;!1===fn(this.options)&&(e=!1),this.options.enabled=e
}this._clean()}},{key:"setModuleOptions",
value:function(t){
this.moduleOptions=t,!0===this.options.enabled&&(this._clean(),
void 0!==this.options.container&&(this.container=this.options.container),
this._create())}},{key:"_create",value:function(){
this._clean(),this.changedOptions=[]
;var t=fn(this.options),e=0,i=!1
;for(var o in this.configureOptions)Object.prototype.hasOwnProperty.call(this.configureOptions,o)&&(this.allowCreation=!1,
i=!1,
"function"==typeof t?i=(i=t(o,[]))||this._handleObject(this.configureOptions[o],[o],!0):!0!==t&&-1===On(t).call(t,o)||(i=!0),
!1!==i&&(this.allowCreation=!0,
e>0&&this._makeItem([]),this._makeHeader(o),this._handleObject(this.configureOptions[o],[o])),
e++);this._makeButton(),this._push()}},{
key:"_push",value:function(){
this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",
this.container.appendChild(this.wrapper)
;for(var t=0;t<this.domElements.length;t++)this.wrapper.appendChild(this.domElements[t])
;this._showPopupIfNeeded()}},{key:"_clean",
value:function(){
for(var t=0;t<this.domElements.length;t++)this.wrapper.removeChild(this.domElements[t])
;void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),
this.wrapper=void 0),
this.domElements=[],this._removePopup()}},{
key:"_getValue",value:function(t){
for(var e=this.moduleOptions,i=0;i<t.length;i++){
if(void 0===e[t[i]]){e=void 0;break}e=e[t[i]]}
return e}},{key:"_makeItem",value:function(t){
if(!0===this.allowCreation){
var e=document.createElement("div")
;e.className="vis-configuration vis-config-item vis-config-s"+t.length
;for(var i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n]
;return Vo(o).call(o,(function(t){e.appendChild(t)
})),this.domElements.push(e),this.domElements.length
}return 0}},{key:"_makeHeader",value:function(t){
var e=document.createElement("div")
;e.className="vis-configuration vis-config-header",
e.innerHTML=t,this._makeItem([],e)}},{
key:"_makeLabel",value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=document.createElement("div")
;return o.className="vis-configuration vis-config-label vis-config-s"+e.length,
o.innerHTML=!0===i?"<i><b>"+t+":</b></i>":t+":",o}
},{key:"_makeDropdown",value:function(t,e,i){
var o=document.createElement("select")
;o.className="vis-configuration vis-config-select"
;var n=0
;void 0!==e&&-1!==On(t).call(t,e)&&(n=On(t).call(t,e))
;for(var r=0;r<t.length;r++){
var s=document.createElement("option")
;s.value=t[r],r===n&&(s.selected="selected"),
s.innerHTML=t[r],o.appendChild(s)}var a=this
;o.onchange=function(){a._update(this.value,i)}
;var h=this._makeLabel(i[i.length-1],i)
;this._makeItem(i,h,o)}},{key:"_makeRange",
value:function(t,e,i){
var o=t[0],n=t[1],r=t[2],s=t[3],a=document.createElement("input")
;a.className="vis-configuration vis-config-range"
;try{a.type="range",a.min=n,a.max=r}catch(t){}
a.step=s;var h="",d=0;if(void 0!==e){var l=1.2
;e<0&&e*l<n?(a.min=Math.ceil(e*l),
d=a.min,h="range increased"):e/l<n&&(a.min=Math.ceil(e/l),
d=a.min,h="range increased"),
e*l>r&&1!==r&&(a.max=Math.ceil(e*l),d=a.max,h="range increased"),
a.value=e}else a.value=o
;var c=document.createElement("input")
;c.className="vis-configuration vis-config-rangeinput",
c.value=a.value;var u=this;a.onchange=function(){
c.value=this.value,u._update(Number(this.value),i)
},a.oninput=function(){c.value=this.value}
;var f=this._makeLabel(i[i.length-1],i),p=this._makeItem(i,f,a,c)
;""!==h&&this.popupHistory[p]!==d&&(this.popupHistory[p]=d,
this._setupPopup(h,p))}},{key:"_makeButton",
value:function(){var t=this
;if(!0===this.options.showButton){
var e=document.createElement("div")
;e.className="vis-configuration vis-config-button",
e.innerHTML="generate options",
e.onclick=function(){t._printOptions()
},e.onmouseover=function(){
e.className="vis-configuration vis-config-button hover"
},e.onmouseout=function(){
e.className="vis-configuration vis-config-button"
},this.optionsContainer=document.createElement("div"),
this.optionsContainer.className="vis-configuration vis-config-option-container",
this.domElements.push(this.optionsContainer),
this.domElements.push(e)}}},{key:"_setupPopup",
value:function(t,e){var i=this
;if(!0===this.initialized&&!0===this.allowCreation&&this.popupCounter<this.popupLimit){
var o=document.createElement("div")
;o.id="vis-configuration-popup",o.className="vis-configuration-popup",
o.innerHTML=t,o.onclick=function(){
i._removePopup()
},this.popupCounter+=1,this.popupDiv={html:o,
index:e}}}},{key:"_removePopup",value:function(){
void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),
clearTimeout(this.popupDiv.hideTimeout),
clearTimeout(this.popupDiv.deleteTimeout),
this.popupDiv={})}},{key:"_showPopupIfNeeded",
value:function(){var t=this
;if(void 0!==this.popupDiv.html){
var e=this.domElements[this.popupDiv.index].getBoundingClientRect()
;this.popupDiv.html.style.left=e.left+"px",
this.popupDiv.html.style.top=e.top-30+"px",
document.body.appendChild(this.popupDiv.html),
this.popupDiv.hideTimeout=od((function(){
t.popupDiv.html.style.opacity=0
}),1500),this.popupDiv.deleteTimeout=od((function(){
t._removePopup()}),1800)}}},{key:"_makeCheckbox",
value:function(t,e,i){
var o=document.createElement("input")
;o.type="checkbox",o.className="vis-configuration vis-config-checkbox",
o.checked=t,
void 0!==e&&(o.checked=e,e!==t&&("object"===lr(t)?e!==t.enabled&&this.changedOptions.push({
path:i,value:e}):this.changedOptions.push({path:i,
value:e})));var n=this;o.onchange=function(){
n._update(this.checked,i)}
;var r=this._makeLabel(i[i.length-1],i)
;this._makeItem(i,r,o)}},{key:"_makeTextInput",
value:function(t,e,i){
var o=document.createElement("input")
;o.type="text",o.className="vis-configuration vis-config-text",
o.value=e,e!==t&&this.changedOptions.push({path:i,
value:e});var n=this;o.onchange=function(){
n._update(this.value,i)}
;var r=this._makeLabel(i[i.length-1],i)
;this._makeItem(i,r,o)}},{key:"_makeColorField",
value:function(t,e,i){
var o=this,n=t[1],r=document.createElement("div")
;"none"!==(e=void 0===e?n:e)?(r.className="vis-configuration vis-config-colorBlock",
r.style.backgroundColor=e):r.className="vis-configuration vis-config-colorBlock none",
e=void 0===e?n:e,r.onclick=function(){
o._showColorPicker(e,r,i)}
;var s=this._makeLabel(i[i.length-1],i)
;this._makeItem(i,s,r)}},{key:"_showColorPicker",
value:function(t,e,i){var o=this
;e.onclick=function(){},this.colorPicker.insertTo(e),
this.colorPicker.show(),this.colorPicker.setColor(t),
this.colorPicker.setUpdateCallback((function(t){
var n="rgba("+t.r+","+t.g+","+t.b+","+t.a+")"
;e.style.backgroundColor=n,o._update(n,i)
})),this.colorPicker.setCloseCallback((function(){
e.onclick=function(){o._showColorPicker(t,e,i)}}))
}},{key:"_handleObject",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!1,n=fn(this.options),r=!1
;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){
o=!0;var a=t[s],h=Ar(e,s)
;if("function"==typeof n&&!1===(o=n(s,e))&&!(a instanceof Array)&&"string"!=typeof a&&"boolean"!=typeof a&&a instanceof Object&&(this.allowCreation=!1,
o=this._handleObject(a,h,!0),
this.allowCreation=!1===i),!1!==o){r=!0
;var d=this._getValue(h)
;if(a instanceof Array)this._handleArray(a,d,h);else if("string"==typeof a)this._makeTextInput(a,d,h);else if("boolean"==typeof a)this._makeCheckbox(a,d,h);else if(a instanceof Object){
var l=!0
;if(-1!==On(e).call(e,"physics")&&this.moduleOptions.physics.solver!==s&&"wind"!==s&&(l=!1),
!0===l)if(void 0!==a.enabled){
var c=Ar(h,"enabled"),u=this._getValue(c)
;if(!0===u){var f=this._makeLabel(s,h,!0)
;this._makeItem(h,f),r=this._handleObject(a,h)||r
}else this._makeCheckbox(a,u,h)}else{
var p=this._makeLabel(s,h,!0)
;this._makeItem(h,p),r=this._handleObject(a,h)||r}
}else console.error("dont know how to handle",a,s,h)
}}return r}},{key:"_handleArray",
value:function(t,e,i){
"string"==typeof t[0]&&"color"===t[0]?(this._makeColorField(t,e,i),
t[1]!==e&&this.changedOptions.push({path:i,value:e
})):"string"==typeof t[0]?(this._makeDropdown(t,e,i),
t[0]!==e&&this.changedOptions.push({path:i,value:e
})):"number"==typeof t[0]&&(this._makeRange(t,e,i),
t[0]!==e&&this.changedOptions.push({path:i,
value:Number(e)}))}},{key:"_update",
value:function(t,e){
var i=this._constructOptions(t,e)
;this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",i),
this.initialized=!0,this.parent.setOptions(i)}},{
key:"_constructOptions",value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i
;t="false"!==(t="true"===t||t)&&t
;for(var n=0;n<e.length;n++)"global"!==e[n]&&(void 0===o[e[n]]&&(o[e[n]]={}),
n!==e.length-1?o=o[e[n]]:o[e[n]]=t);return i}},{
key:"_printOptions",value:function(){
var t=this.getOptions()
;this.optionsContainer.innerHTML="<pre>var options = "+ql(t,null,2)+"</pre>"
}},{key:"getOptions",value:function(){
for(var t={},e=0;e<this.changedOptions.length;e++)this._constructOptions(this.changedOptions[e].value,this.changedOptions[e].path,t)
;return t}}]),t
}(),Mf="string",Df="boolean",Pf="number",If="array",Bf="object",zf=["arrow","bar","box","circle","crow","curve","diamond","image","inv_curve","inv_triangle","triangle","vee"],Ff={
configure:{enabled:{boolean:Df},filter:{
boolean:Df,string:Mf,array:If,function:"function"
},container:{dom:"dom"},showButton:{boolean:Df},
__type__:{object:Bf,boolean:Df,string:Mf,array:If,
function:"function"}},edges:{arrows:{to:{enabled:{
boolean:Df},scaleFactor:{number:Pf},type:{
string:zf},imageHeight:{number:Pf},imageWidth:{
number:Pf},src:{string:Mf},__type__:{object:Bf,
boolean:Df}},middle:{enabled:{boolean:Df},
scaleFactor:{number:Pf},type:{string:zf},
imageWidth:{number:Pf},imageHeight:{number:Pf},
src:{string:Mf},__type__:{object:Bf,boolean:Df}},
from:{enabled:{boolean:Df},scaleFactor:{number:Pf
},type:{string:zf},imageWidth:{number:Pf},
imageHeight:{number:Pf},src:{string:Mf},__type__:{
object:Bf,boolean:Df}},__type__:{
string:["from","to","middle"],object:Bf}},
endPointOffset:{from:{number:Pf},to:{number:Pf},
__type__:{object:Bf,number:Pf}},
arrowStrikethrough:{boolean:Df},background:{
enabled:{boolean:Df},color:{string:Mf},size:{
number:Pf},dashes:{boolean:Df,array:If},__type__:{
object:Bf,boolean:Df}},chosen:{label:{boolean:Df,
function:"function"},edge:{boolean:Df,
function:"function"},__type__:{object:Bf,
boolean:Df}},color:{color:{string:Mf},highlight:{
string:Mf},hover:{string:Mf},inherit:{
string:["from","to","both"],boolean:Df},opacity:{
number:Pf},__type__:{object:Bf,string:Mf}},
dashes:{boolean:Df,array:If},font:{color:{
string:Mf},size:{number:Pf},face:{string:Mf},
background:{string:Mf},strokeWidth:{number:Pf},
strokeColor:{string:Mf},align:{
string:["horizontal","top","middle","bottom"]},
vadjust:{number:Pf},multi:{boolean:Df,string:Mf},
bold:{color:{string:Mf},size:{number:Pf},face:{
string:Mf},mod:{string:Mf},vadjust:{number:Pf},
__type__:{object:Bf,string:Mf}},boldital:{color:{
string:Mf},size:{number:Pf},face:{string:Mf},mod:{
string:Mf},vadjust:{number:Pf},__type__:{
object:Bf,string:Mf}},ital:{color:{string:Mf},
size:{number:Pf},face:{string:Mf},mod:{string:Mf},
vadjust:{number:Pf},__type__:{object:Bf,string:Mf}
},mono:{color:{string:Mf},size:{number:Pf},face:{
string:Mf},mod:{string:Mf},vadjust:{number:Pf},
__type__:{object:Bf,string:Mf}},__type__:{
object:Bf,string:Mf}},hidden:{boolean:Df},
hoverWidth:{function:"function",number:Pf},label:{
string:Mf,undefined:"undefined"},
labelHighlightBold:{boolean:Df},length:{number:Pf,
undefined:"undefined"},physics:{boolean:Df},
scaling:{min:{number:Pf},max:{number:Pf},label:{
enabled:{boolean:Df},min:{number:Pf},max:{
number:Pf},maxVisible:{number:Pf},drawThreshold:{
number:Pf},__type__:{object:Bf,boolean:Df}},
customScalingFunction:{function:"function"},
__type__:{object:Bf}},selectionWidth:{
function:"function",number:Pf},selfReferenceSize:{
number:Pf},selfReference:{size:{number:Pf},angle:{
number:Pf},renderBehindTheNode:{boolean:Df},
__type__:{object:Bf}},shadow:{enabled:{boolean:Df
},color:{string:Mf},size:{number:Pf},x:{number:Pf
},y:{number:Pf},__type__:{object:Bf,boolean:Df}},
smooth:{enabled:{boolean:Df},type:{
string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]
},roundness:{number:Pf},forceDirection:{
string:["horizontal","vertical","none"],boolean:Df
},__type__:{object:Bf,boolean:Df}},title:{
string:Mf,undefined:"undefined"},width:{number:Pf
},widthConstraint:{maximum:{number:Pf},__type__:{
object:Bf,boolean:Df,number:Pf}},value:{number:Pf,
undefined:"undefined"},__type__:{object:Bf}},
groups:{useDefaultGroups:{boolean:Df},
__any__:"get from nodes, will be overwritten below",
__type__:{object:Bf}},interaction:{dragNodes:{
boolean:Df},dragView:{boolean:Df},
hideEdgesOnDrag:{boolean:Df},hideEdgesOnZoom:{
boolean:Df},hideNodesOnDrag:{boolean:Df},hover:{
boolean:Df},keyboard:{enabled:{boolean:Df},speed:{
x:{number:Pf},y:{number:Pf},zoom:{number:Pf},
__type__:{object:Bf}},bindToWindow:{boolean:Df},
__type__:{object:Bf,boolean:Df}},multiselect:{
boolean:Df},navigationButtons:{boolean:Df},
selectable:{boolean:Df},selectConnectedEdges:{
boolean:Df},hoverConnectedEdges:{boolean:Df},
tooltipDelay:{number:Pf},zoomView:{boolean:Df},
zoomSpeed:{number:Pf},__type__:{object:Bf}},
layout:{randomSeed:{undefined:"undefined",
number:Pf,string:Mf},improvedLayout:{boolean:Df},
clusterThreshold:{number:Pf},hierarchical:{
enabled:{boolean:Df},levelSeparation:{number:Pf},
nodeSpacing:{number:Pf},treeSpacing:{number:Pf},
blockShifting:{boolean:Df},edgeMinimization:{
boolean:Df},parentCentralization:{boolean:Df},
direction:{string:["UD","DU","LR","RL"]},
sortMethod:{string:["hubsize","directed"]},
shakeTowards:{string:["leaves","roots"]},
__type__:{object:Bf,boolean:Df}},__type__:{
object:Bf}},manipulation:{enabled:{boolean:Df},
initiallyActive:{boolean:Df},addNode:{boolean:Df,
function:"function"},addEdge:{boolean:Df,
function:"function"},editNode:{function:"function"
},editEdge:{editWithoutDrag:{function:"function"},
__type__:{object:Bf,boolean:Df,function:"function"
}},deleteNode:{boolean:Df,function:"function"},
deleteEdge:{boolean:Df,function:"function"},
controlNodeStyle:"get from nodes, will be overwritten below",
__type__:{object:Bf,boolean:Df}},nodes:{
borderWidth:{number:Pf},borderWidthSelected:{
number:Pf,undefined:"undefined"},brokenImage:{
string:Mf,undefined:"undefined"},chosen:{label:{
boolean:Df,function:"function"},node:{boolean:Df,
function:"function"},__type__:{object:Bf,
boolean:Df}},color:{border:{string:Mf},
background:{string:Mf},highlight:{border:{
string:Mf},background:{string:Mf},__type__:{
object:Bf,string:Mf}},hover:{border:{string:Mf},
background:{string:Mf},__type__:{object:Bf,
string:Mf}},__type__:{object:Bf,string:Mf}},
opacity:{number:Pf,undefined:"undefined"},fixed:{
x:{boolean:Df},y:{boolean:Df},__type__:{object:Bf,
boolean:Df}},font:{align:{string:Mf},color:{
string:Mf},size:{number:Pf},face:{string:Mf},
background:{string:Mf},strokeWidth:{number:Pf},
strokeColor:{string:Mf},vadjust:{number:Pf},
multi:{boolean:Df,string:Mf},bold:{color:{
string:Mf},size:{number:Pf},face:{string:Mf},mod:{
string:Mf},vadjust:{number:Pf},__type__:{
object:Bf,string:Mf}},boldital:{color:{string:Mf},
size:{number:Pf},face:{string:Mf},mod:{string:Mf},
vadjust:{number:Pf},__type__:{object:Bf,string:Mf}
},ital:{color:{string:Mf},size:{number:Pf},face:{
string:Mf},mod:{string:Mf},vadjust:{number:Pf},
__type__:{object:Bf,string:Mf}},mono:{color:{
string:Mf},size:{number:Pf},face:{string:Mf},mod:{
string:Mf},vadjust:{number:Pf},__type__:{
object:Bf,string:Mf}},__type__:{object:Bf,
string:Mf}},group:{string:Mf,number:Pf,
undefined:"undefined"},heightConstraint:{minimum:{
number:Pf},valign:{string:Mf},__type__:{object:Bf,
boolean:Df,number:Pf}},hidden:{boolean:Df},icon:{
face:{string:Mf},code:{string:Mf},size:{number:Pf
},color:{string:Mf},weight:{string:Mf,number:Pf},
__type__:{object:Bf}},id:{string:Mf,number:Pf},
image:{selected:{string:Mf,undefined:"undefined"},
unselected:{string:Mf,undefined:"undefined"},
__type__:{object:Bf,string:Mf}},imagePadding:{
top:{number:Pf},right:{number:Pf},bottom:{
number:Pf},left:{number:Pf},__type__:{object:Bf,
number:Pf}},label:{string:Mf,undefined:"undefined"
},labelHighlightBold:{boolean:Df},level:{
number:Pf,undefined:"undefined"},margin:{top:{
number:Pf},right:{number:Pf},bottom:{number:Pf},
left:{number:Pf},__type__:{object:Bf,number:Pf}},
mass:{number:Pf},physics:{boolean:Df},scaling:{
min:{number:Pf},max:{number:Pf},label:{enabled:{
boolean:Df},min:{number:Pf},max:{number:Pf},
maxVisible:{number:Pf},drawThreshold:{number:Pf},
__type__:{object:Bf,boolean:Df}},
customScalingFunction:{function:"function"},
__type__:{object:Bf}},shadow:{enabled:{boolean:Df
},color:{string:Mf},size:{number:Pf},x:{number:Pf
},y:{number:Pf},__type__:{object:Bf,boolean:Df}},
shape:{
string:["custom","ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon","hexagon"]
},ctxRenderer:{function:"function"},
shapeProperties:{borderDashes:{boolean:Df,array:If
},borderRadius:{number:Pf},interpolation:{
boolean:Df},useImageSize:{boolean:Df},
useBorderWithImage:{boolean:Df},coordinateOrigin:{
string:["center","top-left"]},__type__:{object:Bf}
},size:{number:Pf},title:{string:Mf,dom:"dom",
undefined:"undefined"},value:{number:Pf,
undefined:"undefined"},widthConstraint:{minimum:{
number:Pf},maximum:{number:Pf},__type__:{
object:Bf,boolean:Df,number:Pf}},x:{number:Pf},y:{
number:Pf},__type__:{object:Bf}},physics:{
enabled:{boolean:Df},barnesHut:{theta:{number:Pf},
gravitationalConstant:{number:Pf},centralGravity:{
number:Pf},springLength:{number:Pf},
springConstant:{number:Pf},damping:{number:Pf},
avoidOverlap:{number:Pf},__type__:{object:Bf}},
forceAtlas2Based:{theta:{number:Pf},
gravitationalConstant:{number:Pf},centralGravity:{
number:Pf},springLength:{number:Pf},
springConstant:{number:Pf},damping:{number:Pf},
avoidOverlap:{number:Pf},__type__:{object:Bf}},
repulsion:{centralGravity:{number:Pf},
springLength:{number:Pf},springConstant:{number:Pf
},nodeDistance:{number:Pf},damping:{number:Pf},
__type__:{object:Bf}},hierarchicalRepulsion:{
centralGravity:{number:Pf},springLength:{number:Pf
},springConstant:{number:Pf},nodeDistance:{
number:Pf},damping:{number:Pf},avoidOverlap:{
number:Pf},__type__:{object:Bf}},maxVelocity:{
number:Pf},minVelocity:{number:Pf},solver:{
string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]
},stabilization:{enabled:{boolean:Df},iterations:{
number:Pf},updateInterval:{number:Pf},
onlyDynamicEdges:{boolean:Df},fit:{boolean:Df},
__type__:{object:Bf,boolean:Df}},timestep:{
number:Pf},adaptiveTimestep:{boolean:Df},wind:{x:{
number:Pf},y:{number:Pf},__type__:{object:Bf}},
__type__:{object:Bf,boolean:Df}},autoResize:{
boolean:Df},clickToUse:{boolean:Df},locale:{
string:Mf},locales:{__any__:{any:"any"},__type__:{
object:Bf}},height:{string:Mf},width:{string:Mf},
__type__:{object:Bf}}
;Ff.groups.__any__=Ff.nodes,Ff.manipulation.controlNodeStyle=Ff.nodes
;var Nf={nodes:{borderWidth:[1,0,10,1],
borderWidthSelected:[2,0,10,1],color:{
border:["color","#2B7CE9"],
background:["color","#97C2FC"],highlight:{
border:["color","#2B7CE9"],
background:["color","#D2E5FF"]},hover:{
border:["color","#2B7CE9"],
background:["color","#D2E5FF"]}},
opacity:[0,0,1,.1],fixed:{x:!1,y:!1},font:{
color:["color","#343434"],size:[14,0,100,1],
face:["arial","verdana","tahoma"],
background:["color","none"],
strokeWidth:[0,0,50,1],
strokeColor:["color","#ffffff"]},hidden:!1,
labelHighlightBold:!0,physics:!0,scaling:{
min:[10,0,200,1],max:[30,0,200,1],label:{
enabled:!1,min:[14,0,200,1],max:[30,0,200,1],
maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}
},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",
size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},
shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown","hexagon"],
shapeProperties:{borderDashes:!1,
borderRadius:[6,0,20,1],interpolation:!0,
useImageSize:!1},size:[25,0,200,1]},edges:{
arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05],
type:"arrow"},middle:{enabled:!1,
scaleFactor:[1,0,3,.05],type:"arrow"},from:{
enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"}},
endPointOffset:{from:[0,-10,10,1],to:[0,-10,10,1]
},arrowStrikethrough:!0,color:{
color:["color","#848484"],
highlight:["color","#848484"],
hover:["color","#848484"],
inherit:["from","to","both",!0,!1],
opacity:[1,0,1,.05]},dashes:!1,font:{
color:["color","#343434"],size:[14,0,100,1],
face:["arial","verdana","tahoma"],
background:["color","none"],
strokeWidth:[2,0,50,1],
strokeColor:["color","#ffffff"],
align:["horizontal","top","middle","bottom"]},
hidden:!1,hoverWidth:[1.5,0,5,.1],
labelHighlightBold:!0,physics:!0,scaling:{
min:[1,0,100,1],max:[15,0,100,1],label:{
enabled:!0,min:[14,0,200,1],max:[30,0,200,1],
maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}
},selectionWidth:[1.5,0,5,.1],
selfReferenceSize:[20,0,200,1],selfReference:{
size:[20,0,200,1],
angle:[Math.PI/2,-6*Math.PI,6*Math.PI,Math.PI/8],
renderBehindTheNode:!0},shadow:{enabled:!1,
color:"rgba(0,0,0,0.5)",size:[10,0,20,1],
x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,
type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],
forceDirection:["horizontal","vertical","none"],
roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{
hierarchical:{enabled:!1,
levelSeparation:[150,20,500,5],
nodeSpacing:[100,20,500,5],
treeSpacing:[200,20,500,5],blockShifting:!0,
edgeMinimization:!0,parentCentralization:!0,
direction:["UD","DU","LR","RL"],
sortMethod:["hubsize","directed"],
shakeTowards:["leaves","roots"]}},interaction:{
dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,
hideEdgesOnZoom:!1,hideNodesOnDrag:!1,hover:!1,
keyboard:{enabled:!1,speed:{x:[10,0,40,1],
y:[10,0,40,1],zoom:[.02,0,.1,.005]},
bindToWindow:!0},multiselect:!1,
navigationButtons:!1,selectable:!0,
selectConnectedEdges:!0,hoverConnectedEdges:!0,
tooltipDelay:[300,0,1e3,25],zoomView:!0,
zoomSpeed:[1,.1,2,.1]},manipulation:{enabled:!1,
initiallyActive:!1},physics:{enabled:!0,
barnesHut:{theta:[.5,.1,1,.05],
gravitationalConstant:[-2e3,-3e4,0,50],
centralGravity:[.3,0,10,.05],
springLength:[95,0,500,5],
springConstant:[.04,0,1.2,.005],
damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},
forceAtlas2Based:{theta:[.5,.1,1,.05],
gravitationalConstant:[-50,-500,0,1],
centralGravity:[.01,0,1,.005],
springLength:[95,0,500,5],
springConstant:[.08,0,1.2,.005],
damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},
repulsion:{centralGravity:[.2,0,10,.05],
springLength:[200,0,500,5],
springConstant:[.05,0,1.2,.005],
nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},
hierarchicalRepulsion:{
centralGravity:[.2,0,10,.05],
springLength:[100,0,500,5],
springConstant:[.01,0,1.2,.005],
nodeDistance:[120,0,500,5],damping:[.09,0,1,.01],
avoidOverlap:[0,0,1,.01]},
maxVelocity:[50,0,150,1],
minVelocity:[.1,.01,.5,.01],
solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],
timestep:[.5,.01,1,.01],wind:{x:[0,-10,10,.1],
y:[0,-10,10,.1]}}},Af=Object.freeze({
__proto__:null,allOptions:Ff,configureOptions:Nf
}),jf=function(){function t(){Gh(this,t)}
return $h(t,[{key:"getDistances",
value:function(t,e,i){
for(var o={},n=t.edges,r=0;r<e.length;r++){
var s={};o[e[r]]=s
;for(var a=0;a<e.length;a++)s[e[a]]=r==a?0:1e9}
for(var h=0;h<i.length;h++){var d=n[i[h]]
;!0===d.connected&&void 0!==o[d.fromId]&&void 0!==o[d.toId]&&(o[d.fromId][d.toId]=1,
o[d.toId][d.fromId]=1)}
for(var l=e.length,c=0;c<l;c++)for(var u=e[c],f=o[u],p=0;p<l-1;p++)for(var v=e[p],g=o[v],y=p+1;y<l;y++){
var m=e[y],b=o[m],w=Math.min(g[m],g[u]+f[m])
;g[m]=w,b[v]=w}return o}}]),t}(),Rf=function(){
function t(e,i,o){
Gh(this,t),this.body=e,this.springLength=i,this.springConstant=o,
this.distanceSolver=new jf}return $h(t,[{
key:"setOptions",value:function(t){
t&&(t.springLength&&(this.springLength=t.springLength),
t.springConstant&&(this.springConstant=t.springConstant))
}},{key:"solve",value:function(t,e){
var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.distanceSolver.getDistances(this.body,t,e)
;this._createL_matrix(o),
this._createK_matrix(o),this._createE_matrix()
;for(var n=.01,r=1,s=0,a=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3)),h=5,d=1e9,l=0,c=0,u=0,f=0,p=0;d>n&&s<a;){
s+=1;var v=this._getHighestEnergyNode(i),g=Zn(v,4)
;for(l=g[0],d=g[1],c=g[2],u=g[3],
f=d,p=0;f>r&&p<h;){p+=1,this._moveNode(l,c,u)
;var y=this._getEnergy(l),m=Zn(y,3)
;f=m[0],c=m[1],u=m[2]}}}},{
key:"_getHighestEnergyNode",value:function(t){
for(var e=this.body.nodeIndices,i=this.body.nodes,o=0,n=e[0],r=0,s=0,a=0;a<e.length;a++){
var h=e[a]
;if(!0!==i[h].predefinedPosition||!0===i[h].isCluster&&!0===t||!0!==i[h].options.fixed.x||!0!==i[h].options.fixed.y){
var d=this._getEnergy(h),l=Zn(d,3),c=l[0],u=l[1],f=l[2]
;o<c&&(o=c,n=h,r=u,s=f)}}return[n,o,r,s]}},{
key:"_getEnergy",value:function(t){
var e=Zn(this.E_sums[t],2),i=e[0],o=e[1]
;return[Math.sqrt(Math.pow(i,2)+Math.pow(o,2)),i,o]
}},{key:"_moveNode",value:function(t,e,i){
for(var o=this.body.nodeIndices,n=this.body.nodes,r=0,s=0,a=0,h=n[t].x,d=n[t].y,l=this.K_matrix[t],c=this.L_matrix[t],u=0;u<o.length;u++){
var f=o[u];if(f!==t){
var p=n[f].x,v=n[f].y,g=l[f],y=c[f],m=1/Math.pow(Math.pow(h-p,2)+Math.pow(d-v,2),1.5)
;r+=g*(1-y*Math.pow(d-v,2)*m),
s+=g*(y*(h-p)*(d-v)*m),a+=g*(1-y*Math.pow(h-p,2)*m)
}}var b=(e/r+i/s)/(s/r-a/s),w=-(s*b+e)/r
;n[t].x+=w,n[t].y+=b,this._updateE_matrix(t)}},{
key:"_createL_matrix",value:function(t){
var e=this.body.nodeIndices,i=this.springLength
;this.L_matrix=[];for(var o=0;o<e.length;o++){
this.L_matrix[e[o]]={}
;for(var n=0;n<e.length;n++)this.L_matrix[e[o]][e[n]]=i*t[e[o]][e[n]]
}}},{key:"_createK_matrix",value:function(t){
var e=this.body.nodeIndices,i=this.springConstant
;this.K_matrix=[];for(var o=0;o<e.length;o++){
this.K_matrix[e[o]]={}
;for(var n=0;n<e.length;n++)this.K_matrix[e[o]][e[n]]=i*Math.pow(t[e[o]][e[n]],-2)
}}},{key:"_createE_matrix",value:function(){
var t=this.body.nodeIndices,e=this.body.nodes
;this.E_matrix={},this.E_sums={}
;for(var i=0;i<t.length;i++)this.E_matrix[t[i]]=[]
;for(var o=0;o<t.length;o++){
for(var n=t[o],r=e[n].x,s=e[n].y,a=0,h=0,d=o;d<t.length;d++){
var l=t[d];if(l!==n){
var c=e[l].x,u=e[l].y,f=1/Math.sqrt(Math.pow(r-c,2)+Math.pow(s-u,2))
;this.E_matrix[n][d]=[this.K_matrix[n][l]*(r-c-this.L_matrix[n][l]*(r-c)*f),this.K_matrix[n][l]*(s-u-this.L_matrix[n][l]*(s-u)*f)],
this.E_matrix[l][o]=this.E_matrix[n][d],
a+=this.E_matrix[n][d][0],h+=this.E_matrix[n][d][1]
}}this.E_sums[n]=[a,h]}}},{key:"_updateE_matrix",
value:function(t){
for(var e=this.body.nodeIndices,i=this.body.nodes,o=this.E_matrix[t],n=this.K_matrix[t],r=this.L_matrix[t],s=i[t].x,a=i[t].y,h=0,d=0,l=0;l<e.length;l++){
var c=e[l];if(c!==t){
var u=o[l],f=u[0],p=u[1],v=i[c].x,g=i[c].y,y=1/Math.sqrt(Math.pow(s-v,2)+Math.pow(a-g,2)),m=n[c]*(s-v-r[c]*(s-v)*y),b=n[c]*(a-g-r[c]*(a-g)*y)
;o[l]=[m,b],h+=m,d+=b;var w=this.E_sums[c]
;w[0]+=m-f,w[1]+=b-p}}this.E_sums[t]=[h,d]}}]),t
}();function Lf(t,e,i){var o,n,r,s,a=this
;if(!(this instanceof Lf))throw new SyntaxError("Constructor must be called with the new operator")
;this.options={},this.defaultOptions={locale:"en",
locales:Xh,clickToUse:!1
},bt(this.options,this.defaultOptions),this.body={
container:t,nodes:{},nodeIndices:[],edges:{},
edgeIndices:[],emitter:{
on:Z(o=this.on).call(o,this),
off:Z(n=this.off).call(n,this),
emit:Z(r=this.emit).call(r,this),
once:Z(s=this.once).call(s,this)},eventListeners:{
onTap:function(){},onTouch:function(){},
onDoubleTap:function(){},onHold:function(){},
onDragStart:function(){},onDrag:function(){},
onDragEnd:function(){},onMouseWheel:function(){},
onPinch:function(){},onMouseMove:function(){},
onRelease:function(){},onContext:function(){}},
data:{nodes:null,edges:null},functions:{
createNode:function(){},createEdge:function(){},
getPointer:function(){}},modules:{},view:{scale:1,
translation:{x:0,y:0}},selectionBox:{show:!1,
position:{start:{x:0,y:0},end:{x:0,y:0}}}
},this.bindEventListeners(),this.images=new Zh((function(){
return a.body.emitter.emit("_requestRedraw")
})),this.groups=new Jh,this.canvas=new _u(this.body),
this.selectionHandler=new Su(this.body,this.canvas),
this.interactionHandler=new Cu(this.body,this.canvas,this.selectionHandler),
this.view=new xu(this.body,this.canvas),
this.renderer=new mu(this.body,this.canvas),
this.physics=new Zc(this.body),this.layoutEngine=new Of(this.body),
this.clustering=new vu(this.body),
this.manipulation=new Ef(this.body,this.canvas,this.selectionHandler,this.interactionHandler),
this.nodesHandler=new Jl(this.body,this.images,this.groups,this.layoutEngine),
this.edgesHandler=new Hc(this.body,this.images,this.groups),
this.body.modules.kamadaKawai=new Rf(this.body,150,.05),
this.body.modules.clustering=this.clustering,
this.canvas._create(),this.setOptions(i),
this.setData(e)}
Ct(Lf.prototype),Lf.prototype.setOptions=function(t){
var e=this;if(null===t&&(t=void 0),void 0!==t){
if(!0===Xl.validate(t,Ff)&&console.log("%cErrors have been found in the supplied options object.",Yl),
zr(["locale","locales","clickToUse"],this.options,t),
void 0!==t.locale&&(t.locale=function(t,e){try{
var i=e.split(/[-_ \/]/,2),o=Zn(i,2),n=o[0],r=o[1],s=null!=n?n.toLowerCase():null,a=null!=r?r.toUpperCase():null
;if(s&&a){var h,d=s+"-"+a
;if(Object.prototype.hasOwnProperty.call(t,d))return d
;console.warn(mr(h="Unknown variant ".concat(a," of language ")).call(h,s,"."))
}if(s){var l=s
;if(Object.prototype.hasOwnProperty.call(t,l))return l
;console.warn("Unknown language ".concat(s))}
return console.warn("Unknown locale ".concat(e,", falling back to English.")),
"en"}catch(t){
return console.error(t),console.warn("Unexpected error while normalizing locale ".concat(e,", falling back to English.")),
"en"}
}(t.locales||this.options.locales,t.locale)),t=this.layoutEngine.setOptions(t.layout,t),
this.canvas.setOptions(t),
this.groups.setOptions(t.groups),this.nodesHandler.setOptions(t.nodes),
this.edgesHandler.setOptions(t.edges),
this.physics.setOptions(t.physics),this.manipulation.setOptions(t.manipulation,t,this.options),
this.interactionHandler.setOptions(t.interaction),
this.renderer.setOptions(t.interaction),
this.selectionHandler.setOptions(t.interaction),
void 0!==t.groups&&this.body.emitter.emit("refreshNodes"),
"configure"in t&&(this.configurator||(this.configurator=new Tf(this,this.body.container,Nf,this.canvas.pixelRatio)),
this.configurator.setOptions(t.configure)),
this.configurator&&!0===this.configurator.options.enabled){
var i={nodes:{},edges:{},layout:{},interaction:{},
manipulation:{},physics:{},global:{}}
;Nr(i.nodes,this.nodesHandler.options),Nr(i.edges,this.edgesHandler.options),
Nr(i.layout,this.layoutEngine.options),
Nr(i.interaction,this.selectionHandler.options),
Nr(i.interaction,this.renderer.options),
Nr(i.interaction,this.interactionHandler.options),
Nr(i.manipulation,this.manipulation.options),
Nr(i.physics,this.physics.options),
Nr(i.global,this.canvas.options),Nr(i.global,this.options),
this.configurator.setModuleOptions(i)}
void 0!==t.clickToUse?!0===t.clickToUse?void 0===this.activator&&(this.activator=new Yh(this.canvas.frame),
this.activator.on("change",(function(){
e.body.emitter.emit("activate")
}))):(void 0!==this.activator&&(this.activator.destroy(),
delete this.activator),
this.body.emitter.emit("activate")):this.body.emitter.emit("activate"),
this.canvas.setSize(),
this.body.emitter.emit("startSimulation")}
},Lf.prototype._updateVisibleIndices=function(){
var t=this.body.nodes,e=this.body.edges
;for(var i in this.body.nodeIndices=[],this.body.edgeIndices=[],
t)Object.prototype.hasOwnProperty.call(t,i)&&(this.clustering._isClusteredNode(i)||!1!==t[i].options.hidden||this.body.nodeIndices.push(t[i].id))
;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){
var n=e[o],r=t[n.fromId],s=t[n.toId],a=void 0!==r&&void 0!==s
;!this.clustering._isClusteredEdge(o)&&!1===n.options.hidden&&a&&!1===r.options.hidden&&!1===s.options.hidden&&this.body.edgeIndices.push(n.id)
}},Lf.prototype.bindEventListeners=function(){
var t=this
;this.body.emitter.on("_dataChanged",(function(){
t.edgesHandler._updateState(),t.body.emitter.emit("_dataUpdated")
})),this.body.emitter.on("_dataUpdated",(function(){
t.clustering._updateState(),
t._updateVisibleIndices(),t._updateValueRange(t.body.nodes),
t._updateValueRange(t.body.edges),
t.body.emitter.emit("startSimulation"),t.body.emitter.emit("_requestRedraw")
}))},Lf.prototype.setData=function(t){
if(this.body.emitter.emit("resetPhysics"),
this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),
t&&t.dot&&(t.nodes||t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.')
;if(this.setOptions(t&&t.options),t&&t.dot){
console.log("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);")
;var e=Zs(t.dot);this.setData(e)
}else if(t&&t.gephi){
console.log("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);")
;var i=ta(t.gephi);this.setData(i)
}else this.nodesHandler.setData(t&&t.nodes,!0),
this.edgesHandler.setData(t&&t.edges,!0),
this.body.emitter.emit("_dataChanged"),
this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")
},Lf.prototype.destroy=function(){
for(var t in this.body.emitter.emit("destroy"),
this.body.emitter.off(),this.off(),
delete this.groups,delete this.canvas,delete this.selectionHandler,
delete this.interactionHandler,
delete this.view,delete this.renderer,delete this.physics,
delete this.layoutEngine,
delete this.clustering,delete this.manipulation,delete this.nodesHandler,
delete this.edgesHandler,
delete this.configurator,delete this.images,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&delete this.body.nodes[t]
;for(var e in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,e)&&delete this.body.edges[e]
;Mr(this.body.container)
},Lf.prototype._updateValueRange=function(t){
var e,i=void 0,o=void 0,n=0
;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e)){
var r=t[e].getValue()
;void 0!==r&&(i=void 0===i?r:Math.min(r,i),o=void 0===o?r:Math.max(r,o),
n+=r)}
if(void 0!==i&&void 0!==o)for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e].setValueRange(i,o,n)
},Lf.prototype.isActive=function(){
return!this.activator||this.activator.active
},Lf.prototype.setSize=function(){
return this.canvas.setSize.apply(this.canvas,arguments)
},Lf.prototype.canvasToDOM=function(){
return this.canvas.canvasToDOM.apply(this.canvas,arguments)
},Lf.prototype.DOMtoCanvas=function(){
return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)
},Lf.prototype.findNode=function(){
return this.clustering.findNode.apply(this.clustering,arguments)
},Lf.prototype.isCluster=function(){
return this.clustering.isCluster.apply(this.clustering,arguments)
},Lf.prototype.openCluster=function(){
return this.clustering.openCluster.apply(this.clustering,arguments)
},Lf.prototype.cluster=function(){
return this.clustering.cluster.apply(this.clustering,arguments)
},Lf.prototype.getNodesInCluster=function(){
return this.clustering.getNodesInCluster.apply(this.clustering,arguments)
},Lf.prototype.clusterByConnection=function(){
return this.clustering.clusterByConnection.apply(this.clustering,arguments)
},Lf.prototype.clusterByHubsize=function(){
return this.clustering.clusterByHubsize.apply(this.clustering,arguments)
},Lf.prototype.updateClusteredNode=function(){
return this.clustering.updateClusteredNode.apply(this.clustering,arguments)
},Lf.prototype.getClusteredEdges=function(){
return this.clustering.getClusteredEdges.apply(this.clustering,arguments)
},Lf.prototype.getBaseEdge=function(){
return this.clustering.getBaseEdge.apply(this.clustering,arguments)
},Lf.prototype.getBaseEdges=function(){
return this.clustering.getBaseEdges.apply(this.clustering,arguments)
},Lf.prototype.updateEdge=function(){
return this.clustering.updateEdge.apply(this.clustering,arguments)
},Lf.prototype.clusterOutliers=function(){
return this.clustering.clusterOutliers.apply(this.clustering,arguments)
},Lf.prototype.getSeed=function(){
return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)
},Lf.prototype.enableEditMode=function(){
return this.manipulation.enableEditMode.apply(this.manipulation,arguments)
},Lf.prototype.disableEditMode=function(){
return this.manipulation.disableEditMode.apply(this.manipulation,arguments)
},Lf.prototype.addNodeMode=function(){
return this.manipulation.addNodeMode.apply(this.manipulation,arguments)
},Lf.prototype.editNode=function(){
return this.manipulation.editNode.apply(this.manipulation,arguments)
},Lf.prototype.editNodeMode=function(){
return console.log("Deprecated: Please use editNode instead of editNodeMode."),
this.manipulation.editNode.apply(this.manipulation,arguments)
},Lf.prototype.addEdgeMode=function(){
return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)
},Lf.prototype.editEdgeMode=function(){
return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)
},Lf.prototype.deleteSelected=function(){
return this.manipulation.deleteSelected.apply(this.manipulation,arguments)
},Lf.prototype.getPositions=function(){
return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)
},Lf.prototype.getPosition=function(){
return this.nodesHandler.getPosition.apply(this.nodesHandler,arguments)
},Lf.prototype.storePositions=function(){
return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)
},Lf.prototype.moveNode=function(){
return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)
},Lf.prototype.getBoundingBox=function(){
return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)
},Lf.prototype.getConnectedNodes=function(t){
return void 0!==this.body.nodes[t]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)
},Lf.prototype.getConnectedEdges=function(){
return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)
},Lf.prototype.startSimulation=function(){
return this.physics.startSimulation.apply(this.physics,arguments)
},Lf.prototype.stopSimulation=function(){
return this.physics.stopSimulation.apply(this.physics,arguments)
},Lf.prototype.stabilize=function(){
return this.physics.stabilize.apply(this.physics,arguments)
},Lf.prototype.getSelection=function(){
return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)
},Lf.prototype.setSelection=function(){
return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)
},Lf.prototype.getSelectedNodes=function(){
return this.selectionHandler.getSelectedNodes.apply(this.selectionHandler,arguments)
},Lf.prototype.getSelectedEdges=function(){
return this.selectionHandler.getSelectedEdges.apply(this.selectionHandler,arguments)
},Lf.prototype.getNodeAt=function(){
var t=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments)
;return void 0!==t&&void 0!==t.id?t.id:t
},Lf.prototype.getEdgeAt=function(){
var t=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments)
;return void 0!==t&&void 0!==t.id?t.id:t
},Lf.prototype.selectNodes=function(){
return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)
},Lf.prototype.selectEdges=function(){
return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)
},Lf.prototype.unselectAll=function(){
this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),
this.redraw()},Lf.prototype.redraw=function(){
return this.renderer.redraw.apply(this.renderer,arguments)
},Lf.prototype.getScale=function(){
return this.view.getScale.apply(this.view,arguments)
},Lf.prototype.getViewPosition=function(){
return this.view.getViewPosition.apply(this.view,arguments)
},Lf.prototype.fit=function(){
return this.view.fit.apply(this.view,arguments)
},Lf.prototype.moveTo=function(){
return this.view.moveTo.apply(this.view,arguments)
},Lf.prototype.focus=function(){
return this.view.focus.apply(this.view,arguments)
},Lf.prototype.releaseNode=function(){
return this.view.releaseNode.apply(this.view,arguments)
},Lf.prototype.getOptionsFromConfigurator=function(){
var t={}
;return this.configurator&&(t=this.configurator.getOptions.apply(this.configurator)),
t};var Hf=Zs
;t.Network=Lf,t.NetworkImages=Zh,t.networkDOTParser=Js,t.networkGephiParser=ea,
t.networkOptions=Af,
t.parseDOTNetwork=Hf,t.parseGephiNetwork=ta,Object.defineProperty(t,"__esModule",{
value:!0})}(exports,visData__default.default)
}(module={exports:{}
},module.exports),module.exports)
;return(x=visNetwork_min)&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")&&x.default,
exports.__moduleExports=visNetwork_min,exports
}({},visData);
