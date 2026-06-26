"use strict";var s=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var x=s(function(I,L){
var D=require('@stdlib/ndarray-base-shape2strides/dist'),E=require('@stdlib/ndarray-base-vind2bind/dist'),F=require('@stdlib/ndarray-base-numel/dist'),w=require('@stdlib/blas-ext-base-grev/dist'),y=require('@stdlib/array-base-zeros/dist'),G="throw";function z(i,r,a,e,u){var v;for(v=0;v<r;v++)a[u]=i[v],u+=e}function o(i,r,a,e,u,v,n){var q,l,t,c;for(t=e+1,q=t===r,l=a[e],c=0;c<l;c++)q?(u[n]=i[c],n+=v):n=o(i[c],r,a,t,u,v,n);return n}function M(i,r,a,e,u,v){var n,q,l,t,c,j,g;for(n=F(a),q=y(n),o(i,r,a,0,q,1,0),l="row-major",c=D(a,l),t=y(r),z(a,r,t,1,0),w(r,t,1),w(r,c,1),g=0;g<n;g++)j=E(t,c,0,l,g,G),e[v]=q[j],v+=u}function R(i,r,a,e,u,v){var n=r.length;return n===0?e:n===1?(z(i,r[0],e,u,v),e):a?(M(i,n,r,e,u,v),e):(o(i,n,r,0,e,u,v),e)}L.exports=R
});var b=s(function(J,O){
var S=require('@stdlib/ndarray-base-numel/dist'),k=require('@stdlib/array-base-zeros/dist'),m=x();function p(i,r,a){var e=k(S(r));return m(i,r,a,e,1,0)}O.exports=p
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=b(),B=x();A(C,"assign",B);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
