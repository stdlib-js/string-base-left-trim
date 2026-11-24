"use strict";var e=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(v){throw (t=0, v)}};};var s=e(function(A,i){
var c=typeof String.prototype.trimLeft!="undefined";i.exports=c
});var a=e(function(B,o){
var m=require('@stdlib/string-base-replace/dist'),q=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;function x(r){return m(r,q,"")}o.exports=x
});var l=e(function(E,f){
var y=String.prototype.trimLeft;f.exports=y
});var p=e(function(H,n){
var L=l();function S(r){return L.call(r)}n.exports=S
});var b=s(),d=a(),g=p(),u;b?u=g:u=d;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
