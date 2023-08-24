"use strict";var s=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var x=s(function(I,L){
var D=require('@stdlib/ndarray-base-shape2strides/dist'),E=require('@stdlib/ndarray-base-vind2bind/dist'),F=require('@stdlib/ndarray-base-numel/dist'),w=require('@stdlib/blas-ext-base-grev/dist'),y=require('@stdlib/array-base-zeros/dist'),G="throw";function z(a,r,n,e,u){var i;for(i=0;i<r;i++)n[u]=a[i],u+=e}function o(a,r,n,e,u,i,v){var q,l,t,c;for(t=e+1,q=t===r,l=n[e],c=0;c<l;c++)q?(u[v]=a[c],v+=i):v=o(a[c],r,n,t,u,i,v);return v}function M(a,r,n,e,u,i){var v,q,l,t,c,j,g;for(v=F(n),q=y(v),o(a,r,n,0,q,1,0),l="row-major",c=D(n,l),t=y(r),z(n,r,t,1,0),w(r,t,1),w(r,c,1),g=0;g<v;g++)j=E(t,c,0,l,g,G),e[i]=q[j],i+=u}function R(a,r,n,e,u,i){var v=r.length;return v===0?e:v===1?(z(a,r[0],e,u,i),e):n?(M(a,v,r,e,u,i),e):(o(a,v,r,0,e,u,i),e)}L.exports=R
});var b=s(function(J,O){
var S=require('@stdlib/ndarray-base-numel/dist'),k=require('@stdlib/array-base-zeros/dist'),m=x();function p(a,r,n){var e=k(S(r));return m(a,r,n,e,1,0)}O.exports=p
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=b(),B=x();A(C,"assign",B);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
