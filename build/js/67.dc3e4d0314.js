(self.webpackChunkwebpack_learning=self.webpackChunkwebpack_learning||[]).push([[67],{3970:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},5563:t=>{t.exports=function(t,r,e){if(!(t instanceof r))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},2078:(t,r,e)=>{var n=e(4367);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},5467:(t,r,e)=>{var n=e(3935),o=e(9204),i=e(5191),c=function(t){return function(r,e,c){var u,a=n(r),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},3997:(t,r,e)=>{var n=e(9626)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[n]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},333:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},1485:(t,r,e)=>{var n=e(2176),o=e(333),i=e(9626)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:c?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},9361:(t,r,e)=>{var n=e(7225),o=e(4309),i=e(4857),c=e(8369);t.exports=function(t,r){for(var e=o(r),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||u(t,s,a(r,s))}}},6044:(t,r,e)=>{var n=e(8411),o=e(8369),i=e(8013);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},8013:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},8411:(t,r,e)=>{var n=e(5886);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8127:(t,r,e)=>{var n=e(4192),o=e(4367),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},5564:(t,r,e)=>{var n=e(7410);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},9122:(t,r,e)=>{var n=e(333),o=e(4192);t.exports="process"==n(o.process)},5876:(t,r,e)=>{var n=e(7410);t.exports=/web0s(?!.*chrome)/i.test(n)},7410:(t,r,e)=>{var n=e(5525);t.exports=n("navigator","userAgent")||""},2203:(t,r,e)=>{var n,o,i=e(4192),c=e(7410),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(n=f.split("."))[0]+n[1]:c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},693:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2365:(t,r,e)=>{var n=e(4192),o=e(4857).f,i=e(6044),c=e(1249),u=e(1364),a=e(9361),f=e(3469);t.exports=function(t,r){var e,s,p,l,v,h=t.target,d=t.global,y=t.stat;if(e=d?n:y?n[h]||u(h,{}):(n[h]||{}).prototype)for(s in r){if(l=r[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,s,l,t)}}},5886:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2749:(t,r,e)=>{var n=e(3970);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},5525:(t,r,e)=>{var n=e(2353),o=e(4192),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},5077:(t,r,e)=>{var n=e(1485),o=e(5555),i=e(9626)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},4192:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},7225:t=>{var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},7189:t=>{t.exports={}},9911:(t,r,e)=>{var n=e(4192);t.exports=function(t,r){var e=n.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,r))}},1483:(t,r,e)=>{var n=e(5525);t.exports=n("document","documentElement")},4431:(t,r,e)=>{var n=e(8411),o=e(5886),i=e(8127);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},6127:(t,r,e)=>{var n=e(5886),o=e(333),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},957:(t,r,e)=>{var n=e(9925),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},2610:(t,r,e)=>{var n,o,i,c=e(5003),u=e(4192),a=e(4367),f=e(6044),s=e(7225),p=e(9925),l=e(8736),v=e(7189),h=u.WeakMap;if(c){var d=p.state||(p.state=new h),y=d.get,g=d.has,x=d.set;n=function(t,r){return r.facade=t,x.call(d,t,r),r},o=function(t){return y.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var m=l("state");v[m]=!0,n=function(t,r){return r.facade=t,f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!a(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},8842:(t,r,e)=>{var n=e(9626),o=e(5555),i=n("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3469:(t,r,e)=>{var n=e(5886),o=/#|\.prototype\./,i=function(t,r){var e=u[c(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},4367:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4954:t=>{t.exports=!1},8705:(t,r,e)=>{var n=e(2078),o=e(8842),i=e(9204),c=e(2749),u=e(5077),a=e(6655),f=function(t,r){this.stopped=t,this.result=r};t.exports=function(t,r,e){var s,p,l,v,h,d,y,g=e&&e.that,x=!(!e||!e.AS_ENTRIES),m=!(!e||!e.IS_ITERATOR),b=!(!e||!e.INTERRUPTED),w=c(r,g,1+x+b),j=function(t){return s&&a(s),new f(!0,t)},S=function(t){return x?(n(t),b?w(t[0],t[1],j):w(t[0],t[1])):b?w(t,j):w(t)};if(m)s=t;else{if("function"!=typeof(p=u(t)))throw TypeError("Target is not iterable");if(o(p)){for(l=0,v=i(t.length);v>l;l++)if((h=S(t[l]))&&h instanceof f)return h;return new f(!1)}s=p.call(t)}for(d=s.next;!(y=d.call(s)).done;){try{h=S(y.value)}catch(t){throw a(s),t}if("object"==typeof h&&h&&h instanceof f)return h}return new f(!1)}},6655:(t,r,e)=>{var n=e(2078);t.exports=function(t){var r=t.return;if(void 0!==r)return n(r.call(t)).value}},5555:t=>{t.exports={}},9203:(t,r,e)=>{var n,o,i,c,u,a,f,s,p=e(4192),l=e(4857).f,v=e(5645).set,h=e(5564),d=e(5876),y=e(9122),g=p.MutationObserver||p.WebKitMutationObserver,x=p.document,m=p.process,b=p.Promise,w=l(p,"queueMicrotask"),j=w&&w.value;j||(n=function(){var t,r;for(y&&(t=m.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},h||y||d||!g||!x?b&&b.resolve?(f=b.resolve(void 0),s=f.then,c=function(){s.call(f,n)}):c=y?function(){m.nextTick(n)}:function(){v.call(p,n)}:(u=!0,a=x.createTextNode(""),new g(n).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=j||function(t){var r={fn:t,next:void 0};i&&(i.next=r),o||(o=r,c()),i=r}},3180:(t,r,e)=>{var n=e(4192);t.exports=n.Promise},2211:(t,r,e)=>{var n=e(5886);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},5003:(t,r,e)=>{var n=e(4192),o=e(957),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},4226:(t,r,e)=>{"use strict";var n=e(3970),o=function(t){var r,e;this.promise=new t((function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n})),this.resolve=n(r),this.reject=n(e)};t.exports.f=function(t){return new o(t)}},8369:(t,r,e)=>{var n=e(8411),o=e(4431),i=e(2078),c=e(3266),u=Object.defineProperty;r.f=n?u:function(t,r,e){if(i(t),r=c(r,!0),i(e),o)try{return u(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},4857:(t,r,e)=>{var n=e(8411),o=e(1705),i=e(8013),c=e(3935),u=e(3266),a=e(7225),f=e(4431),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=c(t),r=u(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},111:(t,r,e)=>{var n=e(9974),o=e(693).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},254:(t,r)=>{r.f=Object.getOwnPropertySymbols},9974:(t,r,e)=>{var n=e(7225),o=e(3935),i=e(5467).indexOf,c=e(7189);t.exports=function(t,r){var e,u=o(t),a=0,f=[];for(e in u)!n(c,e)&&n(u,e)&&f.push(e);for(;r.length>a;)n(u,e=r[a++])&&(~i(f,e)||f.push(e));return f}},1705:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},5445:(t,r,e)=>{"use strict";var n=e(2176),o=e(1485);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},4309:(t,r,e)=>{var n=e(5525),o=e(111),i=e(254),c=e(2078);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(c(t)),e=i.f;return e?r.concat(e(t)):r}},2353:(t,r,e)=>{var n=e(4192);t.exports=n},9732:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},1773:(t,r,e)=>{var n=e(2078),o=e(4367),i=e(4226);t.exports=function(t,r){if(n(t),o(r)&&r.constructor===t)return r;var e=i.f(t);return(0,e.resolve)(r),e.promise}},2009:(t,r,e)=>{var n=e(1249);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},1249:(t,r,e)=>{var n=e(4192),o=e(6044),i=e(7225),c=e(1364),u=e(957),a=e(2610),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,r,e,u){var a,f=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(a=s(e)).source||(a.source=p.join("string"==typeof r?r:""))),t!==n?(f?!v&&t[r]&&(l=!0):delete t[r],l?t[r]=e:o(t,r,e)):l?t[r]=e:c(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},9596:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},1364:(t,r,e)=>{var n=e(4192),o=e(6044);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},7709:(t,r,e)=>{"use strict";var n=e(5525),o=e(8369),i=e(9626),c=e(8411),u=i("species");t.exports=function(t){var r=n(t),e=o.f;c&&r&&!r[u]&&e(r,u,{configurable:!0,get:function(){return this}})}},2467:(t,r,e)=>{var n=e(8369).f,o=e(7225),i=e(9626)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},8736:(t,r,e)=>{var n=e(9725),o=e(6855),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},9925:(t,r,e)=>{var n=e(4192),o=e(1364),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},9725:(t,r,e)=>{var n=e(4954),o=e(9925);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.8.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1205:(t,r,e)=>{var n=e(2078),o=e(3970),i=e(9626)("species");t.exports=function(t,r){var e,c=n(t).constructor;return void 0===c||null==(e=n(c)[i])?r:o(e)}},5645:(t,r,e)=>{var n,o,i,c=e(4192),u=e(5886),a=e(2749),f=e(1483),s=e(8127),p=e(5564),l=e(9122),v=c.location,h=c.setImmediate,d=c.clearImmediate,y=c.process,g=c.MessageChannel,x=c.Dispatch,m=0,b={},w=function(t){if(b.hasOwnProperty(t)){var r=b[t];delete b[t],r()}},j=function(t){return function(){w(t)}},S=function(t){w(t.data)},E=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var r=[],e=1;arguments.length>e;)r.push(arguments[e++]);return b[++m]=function(){("function"==typeof t?t:Function(t)).apply(void 0,r)},n(m),m},d=function(t){delete b[t]},l?n=function(t){y.nextTick(j(t))}:x&&x.now?n=function(t){x.now(j(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=S,n=a(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&v&&"file:"!==v.protocol&&!u(E)?(n=E,c.addEventListener("message",S,!1)):n="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),w(t)}}:function(t){setTimeout(j(t),0)}),t.exports={set:h,clear:d}},5191:(t,r,e)=>{var n=e(294),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},3935:(t,r,e)=>{var n=e(6127),o=e(9596);t.exports=function(t){return n(o(t))}},294:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},9204:(t,r,e)=>{var n=e(294),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},3266:(t,r,e)=>{var n=e(4367);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},2176:(t,r,e)=>{var n={};n[e(9626)("toStringTag")]="z",t.exports="[object z]"===String(n)},6855:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3345:(t,r,e)=>{var n=e(2211);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},9626:(t,r,e)=>{var n=e(4192),o=e(9725),i=e(7225),c=e(6855),u=e(2211),a=e(3345),f=o("wks"),s=n.Symbol,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},2994:(t,r,e)=>{var n=e(2176),o=e(1249),i=e(5445);n||o(Object.prototype,"toString",i,{unsafe:!0})},4258:(t,r,e)=>{"use strict";var n,o,i,c,u=e(2365),a=e(4954),f=e(4192),s=e(5525),p=e(3180),l=e(1249),v=e(2009),h=e(2467),d=e(7709),y=e(4367),g=e(3970),x=e(5563),m=e(957),b=e(8705),w=e(3997),j=e(1205),S=e(5645).set,E=e(9203),O=e(1773),T=e(9911),P=e(4226),k=e(9732),M=e(2610),I=e(3469),A=e(9626),_=e(9122),C=e(2203),N=A("species"),F="Promise",R=M.get,L=M.set,D=M.getterFor(F),z=p,U=f.TypeError,W=f.document,q=f.process,G=s("fetch"),K=P.f,B=K,H=!!(W&&W.createEvent&&f.dispatchEvent),V="function"==typeof PromiseRejectionEvent,Y="unhandledrejection",J=I(F,(function(){if(m(z)===String(z)){if(66===C)return!0;if(!_&&!V)return!0}if(a&&!z.prototype.finally)return!0;if(C>=51&&/native code/.test(z))return!1;var t=z.resolve(1),r=function(t){t((function(){}),(function(){}))};return(t.constructor={})[N]=r,!(t.then((function(){}))instanceof r)})),Q=J||!w((function(t){z.all(t).catch((function(){}))})),X=function(t){var r;return!(!y(t)||"function"!=typeof(r=t.then))&&r},Z=function(t,r){if(!t.notified){t.notified=!0;var e=t.reactions;E((function(){for(var n=t.value,o=1==t.state,i=0;e.length>i;){var c,u,a,f=e[i++],s=o?f.ok:f.fail,p=f.resolve,l=f.reject,v=f.domain;try{s?(o||(2===t.rejection&&et(t),t.rejection=1),!0===s?c=n:(v&&v.enter(),c=s(n),v&&(v.exit(),a=!0)),c===f.promise?l(U("Promise-chain cycle")):(u=X(c))?u.call(c,p,l):p(c)):l(n)}catch(t){v&&!a&&v.exit(),l(t)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&tt(t)}))}},$=function(t,r,e){var n,o;H?((n=W.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),f.dispatchEvent(n)):n={promise:r,reason:e},!V&&(o=f["on"+t])?o(n):t===Y&&T("Unhandled promise rejection",e)},tt=function(t){S.call(f,(function(){var r,e=t.facade,n=t.value;if(rt(t)&&(r=k((function(){_?q.emit("unhandledRejection",n,e):$(Y,e,n)})),t.rejection=_||rt(t)?2:1,r.error))throw r.value}))},rt=function(t){return 1!==t.rejection&&!t.parent},et=function(t){S.call(f,(function(){var r=t.facade;_?q.emit("rejectionHandled",r):$("rejectionhandled",r,t.value)}))},nt=function(t,r,e){return function(n){t(r,n,e)}},ot=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,Z(t,!0))},it=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw U("Promise can't be resolved itself");var n=X(r);n?E((function(){var e={done:!1};try{n.call(r,nt(it,e,t),nt(ot,e,t))}catch(r){ot(e,r,t)}})):(t.value=r,t.state=1,Z(t,!1))}catch(r){ot({done:!1},r,t)}}};J&&(z=function(t){x(this,z,F),g(t),n.call(this);var r=R(this);try{t(nt(it,r),nt(ot,r))}catch(t){ot(r,t)}},(n=function(t){L(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(z.prototype,{then:function(t,r){var e=D(this),n=K(j(this,z));return n.ok="function"!=typeof t||t,n.fail="function"==typeof r&&r,n.domain=_?q.domain:void 0,e.parent=!0,e.reactions.push(n),0!=e.state&&Z(e,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,r=R(t);this.promise=t,this.resolve=nt(it,r),this.reject=nt(ot,r)},P.f=K=function(t){return t===z||t===i?new o(t):B(t)},a||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,r){var e=this;return new z((function(t,r){c.call(e,t,r)})).then(t,r)}),{unsafe:!0}),"function"==typeof G&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(z,G.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:J},{Promise:z}),h(z,F,!1,!0),d(F),i=s(F),u({target:F,stat:!0,forced:J},{reject:function(t){var r=K(this);return r.reject.call(void 0,t),r.promise}}),u({target:F,stat:!0,forced:a||J},{resolve:function(t){return O(a&&this===i?z:this,t)}}),u({target:F,stat:!0,forced:Q},{all:function(t){var r=this,e=K(r),n=e.resolve,o=e.reject,i=k((function(){var e=g(r.resolve),i=[],c=0,u=1;b(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(r,t).then((function(t){f||(f=!0,i[a]=t,--u||n(i))}),o)})),--u||n(i)}));return i.error&&o(i.value),e.promise},race:function(t){var r=this,e=K(r),n=e.reject,o=k((function(){var o=g(r.resolve);b(t,(function(t){o.call(r,t).then(e.resolve,n)}))}));return o.error&&n(o.value),e.promise}})},6622:(t,r,e)=>{var n=e(2365),o=e(4192),i=e(7410),c=[].slice,u=function(t){return function(r,e){var n=arguments.length>2,o=n?c.call(arguments,2):void 0;return t(n?function(){("function"==typeof r?r:Function(r)).apply(this,o)}:r,e)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})}}]);