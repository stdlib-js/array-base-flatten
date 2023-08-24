// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,a=t.__lookupGetter__,f=t.__lookupSetter__;var i=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var c,l,s,v;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((l="value"in i)&&(a.call(r,e)||f.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=i.value,r.__proto__=c):r[e]=i.value),s="get"in i,v="set"in i,l&&(s||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,e,i.get),v&&u&&u.call(r,e,i.set),r};function c(r,e,t){i(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){var e,t,n;if(0===(e=r.length))return 0;for(t=1,n=0;n<e;n++)t*=r[n];return t}function s(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}function v(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,o;for(e=r.length,t=[],o=0;o<e;o++)t.push(0);for(n=1,o=e-1;o>=0;o--)t[o]=n,n*=r[o];return t}(r)}function _(r,e,t,n,o,u){var a,f,i,c,l;for(a=r.length,f=1,l=0;l<a;l++)f*=r[l];if("clamp"===u)o<0?o=0:o>=f&&(o=f-1);else if("wrap"===u)o<0?(o+=f)<0&&0!==(o%=f)&&(o+=f):o>=f&&(o-=f)>=f&&(o%=f);else if(o<0||o>=f)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+f+". Value: `"+o+"`.");if(i=t,"column-major"===n){for(l=0;l<a;l++)o-=c=o%r[l],o/=r[l],i+=c*e[l];return i}for(l=a-1;l>=0;l--)o-=c=o%r[l],o/=r[l],i+=c*e[l];return i}c(v,"assign",(function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)}));var p=Math.floor;function g(r,e){return r[e]}function d(r,e){return r.get(e)}function m(r,e,t){r[e]=t}function b(r,e,t){r.set(t,e)}function h(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?d:g,setter:e?b:m}}function y(r,e,t,n){var o,u,a,f,i,c,l,s;for(o=e.data,u=e.setter,a=e.getter,l=p(r/2),c=(i=n)+(r-1)*t,s=0;s<l;s++)f=a(o,i),u(o,i,a(o,c)),u(o,c,f),i+=t,c-=t;return e}function j(r,e,t){var n,o,u,a,f,i,c;if(r<=0)return e;if((a=h(e)).accessors)return y(r,a,t,o=t<0?(1-r)*t:0),a.data;if(i=p(r/2),1===t){if(u=r-1,(f=i%3)>0)for(o=0;o<f;o++)n=e[o],e[o]=e[u],e[u]=n,u-=1;if(i<3)return e;for(o=f;o<i;o+=3)n=e[o],e[o]=e[u],e[u]=n,n=e[o+1],e[o+1]=e[u-1],e[u-1]=n,n=e[o+2],e[o+2]=e[u-2],e[u-2]=n,u-=3;return e}for(u=(o=t<0?(1-r)*t:0)+(r-1)*t,c=0;c<i;c++)n=e[o],e[o]=e[u],e[u]=n,o+=t,u-=t;return e}c(j,"ndarray",(function(r,e,t,n){var o,u,a,f,i,c,l;if(r<=0)return e;if((f=h(e)).accessors)return y(r,f,t,n),f.data;if(c=p(r/2),u=n,1===t){if(a=u+r-1,(i=c%3)>0)for(l=0;l<i;l++)o=e[u],e[u]=e[a],e[a]=o,u+=t,a-=t;if(c<3)return e;for(l=i;l<c;l+=3)o=e[u],e[u]=e[a],e[a]=o,o=e[u+1],e[u+1]=e[a-1],e[a-1]=o,o=e[u+2],e[u+2]=e[a-2],e[a-2]=o,u+=3,a-=3;return e}for(a=u+(r-1)*t,l=0;l<c;l++)o=e[u],e[u]=e[a],e[a]=o,u+=t,a-=t;return e}));function w(r,e,t,n,o){var u;for(u=0;u<e;u++)t[o]=r[u],o+=n}function x(r,e,t,n,o,u,a){var f,i,c,l;for(f=(c=n+1)===e,i=t[n],l=0;l<i;l++)f?(o[a]=r[l],a+=u):a=x(r[l],e,t,c,o,u,a);return a}function E(r,e,t,n,o,u){var a=e.length;return 0===a?n:1===a?(w(r,e[0],n,o,u),n):t?(function(r,e,t,n,o,u){var a,f,i,c,p,g,d;for(x(r,e,t,0,f=s(a=l(t)),1,0),p=v(t,i="row-major"),w(t,e,c=s(e),1,0),j(e,c,1),j(e,p,1),d=0;d<a;d++)g=_(c,p,0,i,d,"throw"),n[u]=f[g],u+=o}(r,a,e,n,o,u),n):(x(r,a,e,0,n,o,u),n)}function O(r,e,t){return E(r,e,t,s(l(e)),1,0)}c(O,"assign",E);export{E as assign,O as default};
//# sourceMappingURL=mod.js.map
