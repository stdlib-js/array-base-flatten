// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-grev@v0.2.0-esm/index.mjs";var d="throw";function a(s,r,e,t,n){var i;for(i=0;i<r;i++)e[n]=s[i],n+=t}function o(s,r,e,t,n,i,d){var a,m,j,l;for(a=(j=t+1)===r,m=e[t],l=0;l<m;l++)a?(n[d]=s[l],d+=i):d=o(s[l],r,e,j,n,i,d);return d}function m(s,m,j,l,v,f){var p=m.length;return 0===p?l:1===p?(a(s,m[0],l,v,f),l):j?(function(s,m,j,l,v,f){var p,h,b,u,c,g,x;for(p=r(j),o(s,m,j,0,h=e(p),1,0),c=t(j,b="row-major"),a(j,m,u=e(m),1,0),i(m,u,1),i(m,c,1),x=0;x<p;x++)g=n(u,c,0,b,x,d),l[f]=h[g],f+=v}(s,p,m,l,v,f),l):(o(s,p,m,0,l,v,f),l)}function j(s,t,n){return m(s,t,n,e(r(t)),1,0)}s(j,"assign",m);export{m as assign,j as default};
//# sourceMappingURL=index.mjs.map
