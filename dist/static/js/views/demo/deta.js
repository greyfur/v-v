webpackJsonp([1],{12:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(2),i=r(6),a=r.n(i),u=r(5),c=r.n(u);n.default.use(o.a);var s=new o.a({routes:[{path:"/",component:a.a},{path:"/list/:id",component:c.a}]});new n.default({router:s}).$mount("#app")},18:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{getId:id}},creates:function(){this.$route.params.id},props:["id"]}},19:function(t,e){},2:function(t,e,r){"use strict";function n(t,e){}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function a(t,e,r){void 0===e&&(e={});var n,o=r||u;try{n=o(t||"")}catch(t){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.slice():a}return n}function u(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=Pt(r.shift()),o=r.length>0?Pt(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function c(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return Lt(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(Lt(e)):n.push(Lt(e)+"="+Lt(t)))}),n.join("&")}return Lt(e)+"="+Lt(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function s(t,e,r,n){var o=n&&n.options.stringifyQuery,i={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:f(e,o),matched:t?p(t):[]};return r&&(i.redirectedFrom=f(r,o)),Object.freeze(i)}function p(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function f(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||c;return(r||"/")+i(n)+o}function h(t,e){return e===Mt?t===e:!!e&&(t.path&&e.path?t.path.replace(Ut,"")===e.path.replace(Ut,"")&&t.hash===e.hash&&l(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&l(t.query,e.query)&&l(t.params,e.params)))}function l(t,e){void 0===t&&(t={}),void 0===e&&(e={});var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?l(n,o):String(n)===String(o)})}function d(t,e){return 0===t.path.replace(Ut,"/").indexOf(e.path.replace(Ut,"/"))&&(!e.hash||t.hash===e.hash)&&v(t.query,e.query)}function v(t,e){for(var r in e)if(!(r in t))return!1;return!0}function y(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function m(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=m(e.children)))return e}}function g(t){if(!g.installed){g.installed=!0,At=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",$t),t.component("router-link",zt);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}function b(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function w(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function x(t){return t.replace(/\/\//g,"/")}function k(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=Qt.exec(t));){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?j(k):m?".*":"[^"+C(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function _(t,e){return O(k(t,e))}function E(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=n||{},u=a.pretty?E:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Bt(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?R(f):u(f),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');o+=s.prefix+p}}else o+=s}return o}}function C(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function j(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){return t.keys=e,t}function $(t){return t.sensitive?"":"i"}function T(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return A(t,e)}function S(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(P(t[o],e,r).source);return A(new RegExp("(?:"+n.join("|")+")",$(r)),e)}function q(t,e,r){return L(k(t,r),e,r)}function L(t,e,r){Bt(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=C(u);else{var c=C(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var p=C(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",A(new RegExp("^"+i,$(r)),e)}function P(t,e,r){return Bt(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?T(t,e):Bt(t)?S(t,e,r):q(t,e,r)}function U(t,e,r){try{return(Xt[t]||(Xt[t]=Ft.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function M(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){I(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function I(t,e,r,n,o,i){var a=n.path,u=n.name,c=z(a,o),s=n.pathToRegexpOptions||{};"boolean"==typeof n.caseSensitive&&(s.sensitive=n.caseSensitive);var p={path:c,regex:H(c,s),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(n){var o=i?x(i+"/"+n.path):void 0;I(t,e,r,n,p,o)}),void 0!==n.alias){(Array.isArray(n.alias)?n.alias:[n.alias]).forEach(function(i){var a={path:i,children:n.children};I(t,e,r,a,o,p.path||"/")})}e[p.path]||(t.push(p.path),e[p.path]=p),u&&(r[u]||(r[u]=p))}function H(t,e){var r=Ft(t,[],e);return r}function z(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:x(e.path+"/"+t)}function V(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){o=B({},o),o._normalized=!0;var i=B(B({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=U(u,i,"path "+e.path)}return o}var c=w(o.path||""),s=e&&e.path||"/",p=c.path?b(c.path,s,r||o.append):s,f=a(c.query,o.query,n&&n.options.parseQuery),h=o.hash||c.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function B(t,e){for(var r in e)t[r]=e[r];return t}function F(t,e){function r(t){M(t,c,p,f)}function n(t,r,n){var o=V(t,r,!1,e),i=o.name;if(i){var u=f[i];if(!u)return a(null,o);var s=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in o.params)&&s.indexOf(h)>-1&&(o.params[h]=r.params[h]);if(u)return o.path=U(u.path,o.params,'named route "'+i+'"'),a(u,o,n)}else if(o.path){o.params={};for(var l=0;l<c.length;l++){var d=c[l],v=p[d];if(D(v.regex,o.path,o.params))return a(v,o,n)}}return a(null,o)}function o(t,r){var o=t.redirect,i="function"==typeof o?o(s(t,r,null,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,r);var u=i,c=u.name,p=u.path,h=r.query,l=r.hash,d=r.params;if(h=u.hasOwnProperty("query")?u.query:h,l=u.hasOwnProperty("hash")?u.hash:l,d=u.hasOwnProperty("params")?u.params:d,c){f[c];return n({_normalized:!0,name:c,query:h,hash:l,params:d},void 0,r)}if(p){var v=K(p,t);return n({_normalized:!0,path:U(v,d,'redirect route with path "'+v+'"'),query:h,hash:l},void 0,r)}return a(null,r)}function i(t,e,r){var o=U(r,e.params,'aliased route with path "'+r+'"'),i=n({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,r,n){return t&&t.redirect?o(t,n||r):t&&t.matchAs?i(t,r,t.matchAs):s(t,r,n,e)}var u=M(t),c=u.pathList,p=u.pathMap,f=u.nameMap;return{match:n,addRoutes:r}}function D(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=u)}return!0}function K(t,e){return b(t,e.parent?e.parent.path:"/",!0)}function J(){window.addEventListener("popstate",function(t){Q(),t.state&&t.state.key&&nt(t.state.key)})}function N(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=X(),i=o(e,r,n?t:null);if(i){var a="object"==typeof i;if(a&&"string"==typeof i.selector){var u=document.querySelector(i.selector);if(u){var c=i.offset&&"object"==typeof i.offset?i.offset:{};c=Z(c),t=Y(u,c)}else W(i)&&(t=G(i))}else a&&W(i)&&(t=G(i));t&&window.scrollTo(t.x,t.y)}})}}function Q(){var t=rt();t&&(Yt[t]={x:window.pageXOffset,y:window.pageYOffset})}function X(){var t=rt();if(t)return Yt[t]}function Y(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function W(t){return tt(t.x)||tt(t.y)}function G(t){return{x:tt(t.x)?t.x:window.pageXOffset,y:tt(t.y)?t.y:window.pageYOffset}}function Z(t){return{x:tt(t.x)?t.x:0,y:tt(t.y)?t.y:0}}function tt(t){return"number"==typeof t}function et(){return Gt.now().toFixed(3)}function rt(){return Zt}function nt(t){Zt=t}function ot(t,e){Q();var r=window.history;try{e?r.replaceState({key:Zt},"",t):(Zt=et(),r.pushState({key:Zt},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function it(t){ot(t,!0)}function at(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function ut(t){return function(e,r,n){var i=!1,a=0,u=null;ct(t,function(t,e,r,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=pt(function(e){e.__esModule&&e.default&&(e=e.default),t.resolved="function"==typeof e?e:At.extend(e),r.components[c]=e,--a<=0&&n()}),f=pt(function(t){var e="Failed to resolve async component "+c+": "+t;u||(u=o(t)?t:new Error(e),n(u))});try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||n()}}function ct(t,e){return st(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function st(t){return Array.prototype.concat.apply([],t)}function pt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}function ft(t){if(!t)if(Vt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ht(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function lt(t,e,r,n){var o=ct(t,function(t,n,o,i){var a=dt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return st(n?o.reverse():o)}function dt(t,e){return"function"!=typeof t&&(t=At.extend(t)),t.options[e]}function vt(t){return lt(t,"beforeRouteLeave",mt,!0)}function yt(t){return lt(t,"beforeRouteUpdate",mt)}function mt(t,e){if(e)return function(){return t.apply(e,arguments)}}function gt(t,e,r){return lt(t,"beforeRouteEnter",function(t,n,o,i){return bt(t,o,i,e,r)})}function bt(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&n.push(function(){wt(t,e.instances,r,o)})})}}function wt(t,e,r,n){e[r]?t(e[r]):n()&&setTimeout(function(){wt(t,e,r,n)},16)}function xt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function kt(t){var e=xt(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function _t(){var t=Et();return"/"===t.charAt(0)||(Ot("/"+t),!1)}function Et(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Rt(t){window.location.hash=t}function Ot(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;window.location.replace(n+"#"+t)}function Ct(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function jt(t,e,r){var n="hash"===r?"#"+e:e;return t?x(t+"/"+n):n}var At,$t={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,a=e.data;a.routerView=!0;for(var u=o.$createElement,c=r.name,s=o.$route,p=o._routerViewCache||(o._routerViewCache={}),f=0,h=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&f++,o._inactive&&(h=!0),o=o.$parent;if(a.routerViewDepth=f,h)return u(p[c],a,n);var l=s.matched[f];if(!l)return p[c]=null,u();var d=p[c]=l.components[c];return a.registerRouteInstance=function(t,e){var r=l.instances[c];(e&&r!==t||!e&&r===t)&&(l.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){l.instances[c]=e.componentInstance},a.props=i(s,l.props&&l.props[c]),u(d,a,n)}},Tt=/[!'()*]/g,St=function(t){return"%"+t.charCodeAt(0).toString(16)},qt=/%2C/g,Lt=function(t){return encodeURIComponent(t).replace(Tt,St).replace(qt,",")},Pt=decodeURIComponent,Ut=/\/?$/,Mt=s(null,{path:"/"}),It=[String,Object],Ht=[String,Array],zt={name:"router-link",props:{to:{type:It,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Ht,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,a=o.route,u=o.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,l=null==p?"router-link-active":p,v=null==f?"router-link-exact-active":f,g=null==this.activeClass?l:this.activeClass,b=null==this.exactActiveClass?v:this.exactActiveClass,w=i.path?s(null,i,null,r):a;c[b]=h(n,w),c[g]=this.exact?c[b]:d(n,w);var x=function(t){y(t)&&(e.replace?r.replace(i):r.push(i))},k={click:y};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var _={class:c};if("a"===this.tag)_.on=k,_.attrs={href:u};else{var E=m(this.$slots.default);if(E){E.isStatic=!1;var R=At.util.extend;(E.data=R({},E.data)).on=k;(E.data.attrs=R({},E.data.attrs)).href=u}else _.on=k}return t(this.tag,_,this.$slots.default)}},Vt="undefined"!=typeof window,Bt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Ft=P,Dt=k,Kt=_,Jt=O,Nt=L,Qt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Ft.parse=Dt,Ft.compile=Kt,Ft.tokensToFunction=Jt,Ft.tokensToRegExp=Nt;var Xt=Object.create(null),Yt=Object.create(null),Wt=Vt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Gt=Vt&&window.performance&&window.performance.now?window.performance:Date,Zt=et(),te=function(t,e){this.router=t,this.base=ft(e),this.current=Mt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},te.prototype.confirmTransition=function(t,e,r){var i=this,a=this.current,u=function(t){o(t)&&(i.errorCbs.length?i.errorCbs.forEach(function(e){e(t)}):(n(!1,"uncaught error during route navigation:"),console.error(t))),r&&r(t)};if(h(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var c=ht(this.current.matched,t.matched),s=c.updated,p=c.deactivated,f=c.activated,l=[].concat(vt(p),this.router.beforeHooks,yt(s),f.map(function(t){return t.beforeEnter}),ut(f));this.pending=t;var d=function(e,r){if(i.pending!==t)return u();try{e(t,a,function(t){!1===t||o(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):r(t)})}catch(t){u(t)}};at(l,d,function(){var r=[];at(gt(f,r,function(){return i.current===t}).concat(i.router.resolveHooks),d,function(){if(i.pending!==t)return u();i.pending=null,e(t),i.router.app&&i.router.app.$nextTick(function(){r.forEach(function(t){t()})})})})},te.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var ee=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&J(),window.addEventListener("popstate",function(t){var r=n.current;n.transitionTo(xt(n.base),function(t){o&&N(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){ot(x(n.base+t.fullPath)),N(n.router,t,i,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){it(x(n.base+t.fullPath)),N(n.router,t,i,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(xt(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?ot(e):it(e)}},e.prototype.getCurrentLocation=function(){return xt(this.base)},e}(te),re=function(t){function e(e,r,n){t.call(this,e,r),n&&kt(this.base)||_t()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;window.addEventListener("hashchange",function(){_t()&&t.transitionTo(Et(),function(t){Ot(t.fullPath)})})},e.prototype.push=function(t,e,r){this.transitionTo(t,function(t){Rt(t.fullPath),e&&e(t)},r)},e.prototype.replace=function(t,e,r){this.transitionTo(t,function(t){Ot(t.fullPath),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Et()!==e&&(t?Rt(e):Ot(e))},e.prototype.getCurrentLocation=function(){return Et()},e}(te),ne=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),oe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=F(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Wt&&!1!==t.fallback,this.fallback&&(e="hash"),Vt||(e="abstract"),this.mode=e,e){case"history":this.history=new ee(this,t.base);break;case"hash":this.history=new re(this,t.base,this.fallback);break;case"abstract":this.history=new ne(this,t.base)}},ie={currentRoute:{}};oe.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},ie.currentRoute.get=function(){return this.history&&this.history.current},oe.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var r=this.history;if(r instanceof ee)r.transitionTo(r.getCurrentLocation());else if(r instanceof re){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},oe.prototype.beforeEach=function(t){return Ct(this.beforeHooks,t)},oe.prototype.beforeResolve=function(t){return Ct(this.resolveHooks,t)},oe.prototype.afterEach=function(t){return Ct(this.afterHooks,t)},oe.prototype.onReady=function(t,e){this.history.onReady(t,e)},oe.prototype.onError=function(t){this.history.onError(t)},oe.prototype.push=function(t,e,r){this.history.push(t,e,r)},oe.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},oe.prototype.go=function(t){this.history.go(t)},oe.prototype.back=function(){this.go(-1)},oe.prototype.forward=function(){this.go(1)},oe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},oe.prototype.resolve=function(t,e,r){var n=V(t,e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:jt(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},oe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Mt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(oe.prototype,ie),oe.install=g,oe.version="2.7.0",Vt&&window.Vue&&window.Vue.use(oe),e.a=oe},25:function(t,e){},30:function(t,e){},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/"}},[t._v("\n  \t  在换回来呗\n  \t")]),t._v(" "),r("a",{attrs:{href:"../home/list.html"}},[t._v("回到主页面")])],1)},staticRenderFns:[]}},39:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/list/12"}},[t._v("\n  \t  路由切换list\n  \t")]),t._v(" "),r("a",{attrs:{href:"./home2.html"}},[t._v("跳到home2")])],1)},staticRenderFns:[]}},5:function(t,e,r){r(25);var n=r(1)(r(18),r(34),null,null);t.exports=n.exports},6:function(t,e,r){r(30);var n=r(1)(r(19),r(39),null,null);t.exports=n.exports}},[12]);