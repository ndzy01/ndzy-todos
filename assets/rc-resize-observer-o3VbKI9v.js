import{k as N,l as $,a as L,_ as j,e as I,d as A,g as F}from"./@babel-3ekFMeiY.js";import{r as t}from"./react-v0wmBK7J.js";import{s as G,e as K,G as C,y as T}from"./rc-util-lDugnv_t.js";import{i as V}from"./resize-observer-polyfill-B32NGzNS.js";var b=t.createContext(null);function X(e){var i=e.children,r=e.onBatchResize,o=t.useRef(0),n=t.useRef([]),a=t.useContext(b),l=t.useCallback(function(d,u,f){o.current+=1;var h=o.current;n.current.push({size:d,element:u,data:f}),Promise.resolve().then(function(){h===o.current&&(r==null||r(n.current),n.current=[])}),a==null||a(d,u,f)},[r,a]);return t.createElement(b.Provider,{value:l},i)}var c=new Map;function Y(e){e.forEach(function(i){var r,o=i.target;(r=c.get(o))===null||r===void 0||r.forEach(function(n){return n(o)})})}var M=new V(Y);function q(e,i){c.has(e)||(c.set(e,new Set),M.observe(e)),c.get(e).add(i)}function J(e,i){c.has(e)&&(c.get(e).delete(i),c.get(e).size||(M.unobserve(e),c.delete(e)))}var Q=function(e){N(r,e);var i=$(r);function r(){return L(this,r),i.apply(this,arguments)}return j(r,[{key:"render",value:function(){return this.props.children}}]),r}(t.Component);function U(e,i){var r=e.children,o=e.disabled,n=t.useRef(null),a=t.useRef(null),l=t.useContext(b),d=typeof r=="function",u=d?r(n):r,f=t.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),h=!d&&t.isValidElement(u)&&G(u),O=h?u.ref:null,D=K(O,n),z=function(){var v;return C(n.current)||(n.current&&A(n.current)==="object"?C((v=n.current)===null||v===void 0?void 0:v.nativeElement):null)||C(a.current)};t.useImperativeHandle(i,function(){return z()});var E=t.useRef(e);E.current=e;var _=t.useCallback(function(s){var v=E.current,w=v.onResize,P=v.data,y=s.getBoundingClientRect(),p=y.width,m=y.height,R=s.offsetWidth,g=s.offsetHeight,x=Math.floor(p),k=Math.floor(m);if(f.current.width!==x||f.current.height!==k||f.current.offsetWidth!==R||f.current.offsetHeight!==g){var W={width:x,height:k,offsetWidth:R,offsetHeight:g};f.current=W;var S=R===Math.round(p)?p:R,B=g===Math.round(m)?m:g,H=I(I({},W),{},{offsetWidth:S,offsetHeight:B});l==null||l(H,s,P),w&&Promise.resolve().then(function(){w(H,s)})}},[]);return t.useEffect(function(){var s=z();return s&&!o&&q(s,_),function(){return J(s,_)}},[n.current,o]),t.createElement(Q,{ref:a},h?t.cloneElement(u,{ref:D}):u)}var Z=t.forwardRef(U),ee="rc-observer-key";function re(e,i){var r=e.children,o=typeof r=="function"?[r]:T(r);return o.map(function(n,a){var l=(n==null?void 0:n.key)||"".concat(ee,"-").concat(a);return t.createElement(Z,F({},e,{key:l,ref:a===0?i:void 0}),n)})}var te=t.forwardRef(re);te.Collection=X;export{te as R};
