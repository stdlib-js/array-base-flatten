// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-grev@v0.0.10-esm/index.mjs";function d(s,r,e,t,n){var i;for(i=0;i<r;i++)e[n]=s[i],n+=t}function o(s,r,e,t,n,i,d){var a,m,j,l;for(a=(j=t+1)===r,m=e[t],l=0;l<m;l++)a?(n[d]=s[l],d+=i):d=o(s[l],r,e,j,n,i,d);return d}function a(s,a,m,j,l,f){var p=a.length;return 0===p?j:1===p?(d(s,a[0],j,l,f),j):m?(function(s,a,m,j,l,f){var p,h,b,v,u,c,g;for(p=r(m),o(s,a,m,0,h=e(p),1,0),u=t(m,b="row-major"),d(m,a,v=e(a),1,0),i(a,v,1),i(a,u,1),g=0;g<p;g++)c=n(v,u,0,b,g,"throw"),j[f]=h[c],f+=l}(s,p,a,j,l,f),j):(o(s,p,a,0,j,l,f),j)}function m(s,t,n){return a(s,t,n,e(r(t)),1,0)}s(m,"assign",a);export{a as assign,m as default};
//# sourceMappingURL=index.mjs.map
