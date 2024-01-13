import{c as P,f as ut,g as mr,e as U,h as Et}from"./@babel-W7-Wn9hY.js";import{r as t}from"./react-10p77hjm.js";import{r as Rt}from"./react-dom-4B3MfQw0.js";import{c as Fr,a as I,d as xt,u as Wt,r as ft,s as Ar,e as Tt,f as zt,h as Bt,i as Ne,j as lt,k as Ht,l as dt,g as vt,m as _t,n as Vt,o as Ft}from"./rc-util-ZPCrP7KH.js";import{c as rr}from"./classnames-feG2F_pn.js";import{R as $t}from"./rc-resize-observer-Mq987d7x.js";import{C as kt}from"./rc-motion-HJD7aCph.js";import"./react-is-q81m-9gd.js";var Lt=t.createContext(null),mt=[];function At(e,a){var r=t.useState(function(){if(!Fr())return null;var g=document.createElement("div");return g}),o=P(r,1),n=o[0],u=t.useRef(!1),l=t.useContext(Lt),v=t.useState(mt),h=P(v,2),d=h[0],y=h[1],c=l||(u.current?void 0:function(g){y(function(D){var R=[g].concat(ut(D));return R})});function C(){n.parentElement||document.body.appendChild(n),u.current=!0}function f(){var g;(g=n.parentElement)===null||g===void 0||g.removeChild(n),u.current=!1}return I(function(){return e?l?l(C):C():f(),f},[e]),I(function(){d.length&&(d.forEach(function(g){return g()}),y(mt))},[d]),[n,c]}function It(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Ut="rc-util-locker-".concat(Date.now()),ht=0;function qt(e){var a=!!e,r=t.useState(function(){return ht+=1,"".concat(Ut,"_").concat(ht)}),o=P(r,1),n=o[0];I(function(){if(a){var u=xt(document.body).width,l=It();Wt(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(u,"px);"):"",`
}`),n)}else ft(n);return function(){ft(n)}},[a,n])}var gt=!1;function jt(e){return typeof e=="boolean"&&(gt=e),gt}var yt=function(a){return a===!1?!1:!Fr()||!a?null:typeof a=="string"?document.querySelector(a):typeof a=="function"?a():a},Nt=t.forwardRef(function(e,a){var r=e.open,o=e.autoLock,n=e.getContainer;e.debug;var u=e.autoDestroy,l=u===void 0?!0:u,v=e.children,h=t.useState(r),d=P(h,2),y=d[0],c=d[1],C=y||r;t.useEffect(function(){(l||r)&&c(r)},[r,l]);var f=t.useState(function(){return yt(n)}),g=P(f,2),D=g[0],R=g[1];t.useEffect(function(){var A=yt(n);R(A??null)});var E=At(C&&!D),T=P(E,2),M=T[0],s=T[1],z=D??M;qt(o&&r&&Fr()&&(z===M||z===document.body));var q=null;if(v&&Ar(v)&&a){var Q=v;q=Q.ref}var Z=Tt(q,a);if(!C||!Fr()||D===void 0)return null;var re=z===!1||jt(),V=v;return a&&(V=t.cloneElement(v,{ref:Z})),t.createElement(Lt.Provider,{value:s},re?V:Rt.createPortal(V,z))});function Qt(e){var a=e.prefixCls,r=e.align,o=e.arrow,n=e.arrowPos,u=o||{},l=u.className,v=u.content,h=n.x,d=h===void 0?0:h,y=n.y,c=y===void 0?0:y,C=t.useRef();if(!r||!r.points)return null;var f={position:"absolute"};if(r.autoArrow!==!1){var g=r.points[0],D=r.points[1],R=g[0],E=g[1],T=D[0],M=D[1];R===T||!["t","b"].includes(R)?f.top=c:R==="t"?f.top=0:f.bottom=0,E===M||!["l","r"].includes(E)?f.left=d:E==="l"?f.left=0:f.right=0}return t.createElement("div",{ref:C,className:rr("".concat(a,"-arrow"),l),style:f},v)}function Jt(e){var a=e.prefixCls,r=e.open,o=e.zIndex,n=e.mask,u=e.motion;return n?t.createElement(kt,mr({},u,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(l){var v=l.className;return t.createElement("div",{style:{zIndex:o},className:rr("".concat(a,"-mask"),v)})}):null}var Gt=t.memo(function(e){var a=e.children;return a},function(e,a){return a.cache}),Kt=t.forwardRef(function(e,a){var r=e.popup,o=e.className,n=e.prefixCls,u=e.style,l=e.target,v=e.onVisibleChanged,h=e.open,d=e.keepDom,y=e.fresh,c=e.onClick,C=e.mask,f=e.arrow,g=e.arrowPos,D=e.align,R=e.motion,E=e.maskMotion,T=e.forceRender,M=e.getPopupContainer,s=e.autoDestroy,z=e.portal,q=e.zIndex,Q=e.onMouseEnter,Z=e.onMouseLeave,re=e.onPointerEnter,V=e.ready,A=e.offsetX,de=e.offsetY,me=e.offsetR,ie=e.offsetB,he=e.onAlign,x=e.onPrepare,B=e.stretch,S=e.targetWidth,Y=e.targetHeight,$=typeof r=="function"?r():r,ue=h||d,te=(M==null?void 0:M.length)>0,tr=t.useState(!M||!te),Ue=P(tr,2),ge=Ue[0],qe=Ue[1];if(I(function(){!ge&&te&&l&&qe(!0)},[ge,te,l]),!ge)return null;var ae="auto",H={left:"-1000vw",top:"-1000vh",right:ae,bottom:ae};if(V||!h){var X,le=D.points,ve=D.dynamicInset||((X=D._experimental)===null||X===void 0?void 0:X.dynamicInset),je=ve&&le[0][1]==="r",ar=ve&&le[0][0]==="b";je?(H.right=me,H.left=ae):(H.left=A,H.right=ae),ar?(H.bottom=ie,H.top=ae):(H.top=de,H.bottom=ae)}var F={};return B&&(B.includes("height")&&Y?F.height=Y:B.includes("minHeight")&&Y&&(F.minHeight=Y),B.includes("width")&&S?F.width=S:B.includes("minWidth")&&S&&(F.minWidth=S)),h||(F.pointerEvents="none"),t.createElement(z,{open:T||ue,getContainer:M&&function(){return M(l)},autoDestroy:s},t.createElement(Jt,{prefixCls:n,open:h,zIndex:q,mask:C,motion:E}),t.createElement($t,{onResize:he,disabled:!h},function(Qe){return t.createElement(kt,mr({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:T,leavedClassName:"".concat(n,"-hidden")},R,{onAppearPrepare:x,onEnterPrepare:x,visible:h,onVisibleChanged:function(J){var ye;R==null||(ye=R.onVisibleChanged)===null||ye===void 0||ye.call(R,J),v(J)}}),function(we,J){var ye=we.className,w=we.style,Ee=rr(n,ye,o);return t.createElement("div",{ref:zt(Qe,a,J),className:Ee,style:U(U(U(U({"--arrow-x":"".concat(g.x||0,"px"),"--arrow-y":"".concat(g.y||0,"px")},H),F),w),{},{boxSizing:"border-box",zIndex:q},u),onMouseEnter:Q,onMouseLeave:Z,onPointerEnter:re,onClick:c},f&&t.createElement(Qt,{prefixCls:n,arrow:f,arrowPos:g,align:D}),t.createElement(Gt,{cache:!h&&!y},$))})}))}),Zt=t.forwardRef(function(e,a){var r=e.children,o=e.getTriggerDOMNode,n=Ar(r),u=t.useCallback(function(v){Bt(a,o?o(v):v)},[o]),l=Tt(u,r.ref);return n?t.cloneElement(r,{ref:l}):r}),Ct=t.createContext(null);function Mt(e){return e?Array.isArray(e)?e:[e]:[]}function Yt(e,a,r,o){return t.useMemo(function(){var n=Mt(r??a),u=Mt(o??a),l=new Set(n),v=new Set(u);return e&&(l.has("hover")&&(l.delete("hover"),l.add("click")),v.has("hover")&&(v.delete("hover"),v.add("click"))),[l,v]},[e,a,r,o])}function Xt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===a[0]:e[0]===a[0]&&e[1]===a[1]}function Ot(e,a,r,o){for(var n=r.points,u=Object.keys(e),l=0;l<u.length;l+=1){var v,h=u[l];if(Xt((v=e[h])===null||v===void 0?void 0:v.points,n,o))return"".concat(a,"-placement-").concat(h)}return""}function bt(e,a,r,o){return a||(r?{motionName:"".concat(e,"-").concat(r)}:o?{motionName:o}:null)}function gr(e){return e.ownerDocument.defaultView}function st(e){for(var a=[],r=e==null?void 0:e.parentElement,o=["hidden","scroll","clip","auto"];r;){var n=gr(r).getComputedStyle(r),u=n.overflowX,l=n.overflowY,v=n.overflow;[u,l,v].some(function(h){return o.includes(h)})&&a.push(r),r=r.parentElement}return a}function hr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?a:e}function dr(e){return hr(parseFloat(e),0)}function St(e,a){var r=U({},e);return(a||[]).forEach(function(o){if(!(o instanceof HTMLBodyElement||o instanceof HTMLHtmlElement)){var n=gr(o).getComputedStyle(o),u=n.overflow,l=n.overflowClipMargin,v=n.borderTopWidth,h=n.borderBottomWidth,d=n.borderLeftWidth,y=n.borderRightWidth,c=o.getBoundingClientRect(),C=o.offsetHeight,f=o.clientHeight,g=o.offsetWidth,D=o.clientWidth,R=dr(v),E=dr(h),T=dr(d),M=dr(y),s=hr(Math.round(c.width/g*1e3)/1e3),z=hr(Math.round(c.height/C*1e3)/1e3),q=(g-D-T-M)*s,Q=(C-f-R-E)*z,Z=R*z,re=E*z,V=T*s,A=M*s,de=0,me=0;if(u==="clip"){var ie=dr(l);de=ie*s,me=ie*z}var he=c.x+V-de,x=c.y+Z-me,B=he+c.width+2*de-V-A-q,S=x+c.height+2*me-Z-re-Q;r.left=Math.max(r.left,he),r.top=Math.max(r.top,x),r.right=Math.min(r.right,B),r.bottom=Math.min(r.bottom,S)}}),r}function wt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(a),o=r.match(/^(.*)\%$/);return o?e*(parseFloat(o[1])/100):parseFloat(r)}function Pt(e,a){var r=a||[],o=P(r,2),n=o[0],u=o[1];return[wt(e.width,n),wt(e.height,u)]}function Dt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function er(e,a){var r=a[0],o=a[1],n,u;return r==="t"?u=e.y:r==="b"?u=e.y+e.height:u=e.y+e.height/2,o==="l"?n=e.x:o==="r"?n=e.x+e.width:n=e.x+e.width/2,{x:n,y:u}}function Le(e,a){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(o,n){return n===a?r[o]||"c":o}).join("")}function pt(e,a,r,o,n,u,l){var v=t.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:n[o]||{}}),h=P(v,2),d=h[0],y=h[1],c=t.useRef(0),C=t.useMemo(function(){return a?st(a):[]},[a]),f=t.useRef({}),g=function(){f.current={}};e||g();var D=Ne(function(){if(a&&r&&e){let ee=function(Se,Ie){var Oe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ee,pe=$.x+Se,cr=$.y+Ie,fr=pe+X,Hr=cr+H,tt=Math.max(pe,Oe.left),at=Math.max(cr,Oe.top),nt=Math.min(fr,Oe.right),ot=Math.min(Hr,Oe.bottom);return Math.max(0,(nt-tt)*(ot-at))},Br=function(){Re=$.y+b,Te=Re+H,$e=$.x+N,Ke=$e+X};var T,M,s=a,z=s.ownerDocument,q=gr(s),Q=q.getComputedStyle(s),Z=Q.width,re=Q.height,V=Q.position,A=s.style.left,de=s.style.top,me=s.style.right,ie=s.style.bottom,he=s.style.overflow,x=U(U({},n[o]),u),B=z.createElement("div");(T=s.parentElement)===null||T===void 0||T.appendChild(B),B.style.left="".concat(s.offsetLeft,"px"),B.style.top="".concat(s.offsetTop,"px"),B.style.position=V,B.style.height="".concat(s.offsetHeight,"px"),B.style.width="".concat(s.offsetWidth,"px"),s.style.left="0",s.style.top="0",s.style.right="auto",s.style.bottom="auto",s.style.overflow="hidden";var S;if(Array.isArray(r))S={x:r[0],y:r[1],width:0,height:0};else{var Y=r.getBoundingClientRect();S={x:Y.x,y:Y.y,width:Y.width,height:Y.height}}var $=s.getBoundingClientRect(),ue=z.documentElement,te=ue.clientWidth,tr=ue.clientHeight,Ue=ue.scrollWidth,ge=ue.scrollHeight,qe=ue.scrollTop,ae=ue.scrollLeft,H=$.height,X=$.width,le=S.height,ve=S.width,je={left:0,top:0,right:te,bottom:tr},ar={left:-ae,top:-qe,right:Ue-ae,bottom:ge-qe},F=x.htmlRegion,Qe="visible",we="visibleFirst";F!=="scroll"&&F!==we&&(F=Qe);var J=F===we,ye=St(ar,C),w=St(je,C),Ee=F===Qe?w:ye,O=J?w:Ee;s.style.left="auto",s.style.top="auto",s.style.right="0",s.style.bottom="0";var yr=s.getBoundingClientRect();s.style.left=A,s.style.top=de,s.style.right=me,s.style.bottom=ie,s.style.overflow=he,(M=s.parentElement)===null||M===void 0||M.removeChild(B);var xe=hr(Math.round(X/parseFloat(Z)*1e3)/1e3),We=hr(Math.round(H/parseFloat(re)*1e3)/1e3);if(xe===0||We===0||lt(r)&&!Ht(r))return;var Cr=x.offset,ne=x.targetOffset,Ir=Pt($,Cr),Mr=P(Ir,2),oe=Mr[0],p=Mr[1],se=Pt(S,ne),br=P(se,2),Sr=br[0],Ur=br[1];S.x-=Sr,S.y-=Ur;var Je=x.points||[],G=P(Je,2),Pe=G[0],qr=G[1],Ce=Dt(qr),K=Dt(Pe),wr=er(S,Ce),nr=er($,K),De=U({},x),N=wr.x-nr.x+oe,b=wr.y-nr.y+p,ce=ee(N,b),fe=ee(N,b,w),ze=er(S,["t","l"]),or=er($,["t","l"]),ir=er(S,["b","r"]),ur=er($,["b","r"]),j=x.overflow||{},jr=j.adjustX,Pr=j.adjustY,Ge=j.shiftX,lr=j.shiftY,Dr=function(Ie){return typeof Ie=="boolean"?Ie:Ie>=0},Re,Te,$e,Ke;Br();var vr=Dr(Pr),sr=K[0]===Ce[0];if(vr&&K[0]==="t"&&(Te>O.bottom||f.current.bt)){var Be=b;sr?Be-=H-le:Be=ze.y-ur.y-p;var He=ee(N,Be),Qr=ee(N,Be,w);He>ce||He===ce&&(!J||Qr>=fe)?(f.current.bt=!0,b=Be,p=-p,De.points=[Le(K,0),Le(Ce,0)]):f.current.bt=!1}if(vr&&K[0]==="b"&&(Re<O.top||f.current.tb)){var _=b;sr?_+=H-le:_=ir.y-or.y-p;var Rr=ee(N,_),Jr=ee(N,_,w);Rr>ce||Rr===ce&&(!J||Jr>=fe)?(f.current.tb=!0,b=_,p=-p,De.points=[Le(K,0),Le(Ce,0)]):f.current.tb=!1}var Tr=Dr(jr),$r=K[1]===Ce[1];if(Tr&&K[1]==="l"&&(Ke>O.right||f.current.rl)){var _e=N;$r?_e-=X-ve:_e=ze.x-ur.x-oe;var kr=ee(_e,b),Gr=ee(_e,b,w);kr>ce||kr===ce&&(!J||Gr>=fe)?(f.current.rl=!0,N=_e,oe=-oe,De.points=[Le(K,1),Le(Ce,1)]):f.current.rl=!1}if(Tr&&K[1]==="r"&&($e<O.left||f.current.lr)){var Ve=N;$r?Ve+=X-ve:Ve=ir.x-or.x-oe;var Lr=ee(Ve,b),Ze=ee(Ve,b,w);Lr>ce||Lr===ce&&(!J||Ze>=fe)?(f.current.lr=!0,N=Ve,oe=-oe,De.points=[Le(K,1),Le(Ce,1)]):f.current.lr=!1}Br();var Me=Ge===!0?0:Ge;typeof Me=="number"&&($e<w.left&&(N-=$e-w.left-oe,S.x+ve<w.left+Me&&(N+=S.x-w.left+ve-Me)),Ke>w.right&&(N-=Ke-w.right-oe,S.x>w.right-Me&&(N+=S.x-w.right+Me)));var Fe=lr===!0?0:lr;typeof Fe=="number"&&(Re<w.top&&(b-=Re-w.top-p,S.y+le<w.top+Fe&&(b+=S.y-w.top+le-Fe)),Te>w.bottom&&(b-=Te-w.bottom-p,S.y>w.bottom-Fe&&(b+=S.y-w.bottom+Fe)));var Ye=$.x+N,Xe=Ye+X,be=$.y+b,Nr=be+H,Ae=S.x,ke=Ae+ve,Er=S.y,Kr=Er+le,Zr=Math.max(Ye,Ae),xr=Math.min(Xe,ke),Yr=(Zr+xr)/2,Xr=Yr-Ye,Or=Math.max(be,Er),Wr=Math.min(Nr,Kr),pr=(Or+Wr)/2,et=pr-be;l==null||l(a,De);var zr=yr.right-$.x-(N+$.width),rt=yr.bottom-$.y-(b+$.height);y({ready:!0,offsetX:N/xe,offsetY:b/We,offsetR:zr/xe,offsetB:rt/We,arrowX:Xr/xe,arrowY:et/We,scaleX:xe,scaleY:We,align:De})}}),R=function(){c.current+=1;var M=c.current;Promise.resolve().then(function(){c.current===M&&D()})},E=function(){y(function(M){return U(U({},M),{},{ready:!1})})};return I(E,[o]),I(function(){e||E()},[e]),[d.ready,d.offsetX,d.offsetY,d.offsetR,d.offsetB,d.arrowX,d.arrowY,d.scaleX,d.scaleY,d.align,R]}function ea(e,a,r,o,n){I(function(){if(e&&a&&r){let c=function(){o(),n()};var u=a,l=r,v=st(u),h=st(l),d=gr(l),y=new Set([d].concat(ut(v),ut(h)));return y.forEach(function(C){C.addEventListener("scroll",c,{passive:!0})}),d.addEventListener("resize",c,{passive:!0}),o(),function(){y.forEach(function(C){C.removeEventListener("scroll",c),d.removeEventListener("resize",c)})}}},[e,a,r])}function ra(e,a,r,o,n,u,l,v){var h=t.useRef(e),d=t.useRef(!1);h.current!==e&&(d.current=!0,h.current=e),t.useEffect(function(){var y=dt(function(){d.current=!1});return function(){dt.cancel(y)}},[e]),t.useEffect(function(){if(a&&o&&(!n||u)){var y=function(){var q=!1,Q=function(V){var A=V.target;q=l(A)},Z=function(V){var A=V.target;!d.current&&h.current&&!q&&!l(A)&&v(!1)};return[Q,Z]},c=y(),C=P(c,2),f=C[0],g=C[1],D=y(),R=P(D,2),E=R[0],T=R[1],M=gr(o);M.addEventListener("mousedown",f,!0),M.addEventListener("click",g,!0),M.addEventListener("contextmenu",g,!0);var s=vt(r);return s&&(s.addEventListener("mousedown",E,!0),s.addEventListener("click",T,!0),s.addEventListener("contextmenu",T,!0)),function(){M.removeEventListener("mousedown",f,!0),M.removeEventListener("click",g,!0),M.removeEventListener("contextmenu",g,!0),s&&(s.removeEventListener("mousedown",E,!0),s.removeEventListener("click",T,!0),s.removeEventListener("contextmenu",T,!0))}}},[a,r,o,n,u])}var ta=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function aa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nt,a=t.forwardRef(function(r,o){var n=r.prefixCls,u=n===void 0?"rc-trigger-popup":n,l=r.children,v=r.action,h=v===void 0?"hover":v,d=r.showAction,y=r.hideAction,c=r.popupVisible,C=r.defaultPopupVisible,f=r.onPopupVisibleChange,g=r.afterPopupVisibleChange,D=r.mouseEnterDelay,R=r.mouseLeaveDelay,E=R===void 0?.1:R,T=r.focusDelay,M=r.blurDelay,s=r.mask,z=r.maskClosable,q=z===void 0?!0:z,Q=r.getPopupContainer,Z=r.forceRender,re=r.autoDestroy,V=r.destroyPopupOnHide,A=r.popup,de=r.popupClassName,me=r.popupStyle,ie=r.popupPlacement,he=r.builtinPlacements,x=he===void 0?{}:he,B=r.popupAlign,S=r.zIndex,Y=r.stretch,$=r.getPopupClassNameFromAlign,ue=r.fresh,te=r.alignPoint,tr=r.onPopupClick,Ue=r.onPopupAlign,ge=r.arrow,qe=r.popupMotion,ae=r.maskMotion,H=r.popupTransitionName,X=r.popupAnimation,le=r.maskTransitionName,ve=r.maskAnimation,je=r.className,ar=r.getTriggerDOMNode,F=Et(r,ta),Qe=re||V||!1,we=t.useState(!1),J=P(we,2),ye=J[0],w=J[1];I(function(){w(_t())},[]);var Ee=t.useRef({}),O=t.useContext(Ct),yr=t.useMemo(function(){return{registerSubPopup:function(m,k){Ee.current[m]=k,O==null||O.registerSubPopup(m,k)}}},[O]),xe=Vt(),We=t.useState(null),Cr=P(We,2),ne=Cr[0],Ir=Cr[1],Mr=Ne(function(i){lt(i)&&ne!==i&&Ir(i),O==null||O.registerSubPopup(xe,i)}),oe=t.useState(null),p=P(oe,2),se=p[0],br=p[1],Sr=t.useRef(null),Ur=Ne(function(i){lt(i)&&se!==i&&(br(i),Sr.current=i)}),Je=t.Children.only(l),G=(Je==null?void 0:Je.props)||{},Pe={},qr=Ne(function(i){var m,k,W=se;return(W==null?void 0:W.contains(i))||((m=vt(W))===null||m===void 0?void 0:m.host)===i||i===W||(ne==null?void 0:ne.contains(i))||((k=vt(ne))===null||k===void 0?void 0:k.host)===i||i===ne||Object.values(Ee.current).some(function(L){return(L==null?void 0:L.contains(i))||i===L})}),Ce=bt(u,qe,X,H),K=bt(u,ae,ve,le),wr=t.useState(C||!1),nr=P(wr,2),De=nr[0],N=nr[1],b=c??De,ce=Ne(function(i){c===void 0&&N(i)});I(function(){N(c||!1)},[c]);var fe=t.useRef(b);fe.current=b;var ze=t.useRef([]);ze.current=[];var or=Ne(function(i){var m;ce(i),((m=ze.current[ze.current.length-1])!==null&&m!==void 0?m:b)!==i&&(ze.current.push(i),f==null||f(i))}),ir=t.useRef(),ur=function(){clearTimeout(ir.current)},j=function(m){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;ur(),k===0?or(m):ir.current=setTimeout(function(){or(m)},k*1e3)};t.useEffect(function(){return ur},[]);var jr=t.useState(!1),Pr=P(jr,2),Ge=Pr[0],lr=Pr[1];I(function(i){(!i||b)&&lr(!0)},[b]);var Dr=t.useState(null),Re=P(Dr,2),Te=Re[0],$e=Re[1],Ke=t.useState([0,0]),vr=P(Ke,2),sr=vr[0],Be=vr[1],He=function(m){Be([m.clientX,m.clientY])},Qr=pt(b,ne,te?sr:se,ie,x,B,Ue),_=P(Qr,11),Rr=_[0],Jr=_[1],Tr=_[2],$r=_[3],_e=_[4],kr=_[5],Gr=_[6],Ve=_[7],Lr=_[8],Ze=_[9],Me=_[10],Fe=Yt(ye,h,d,y),Ye=P(Fe,2),Xe=Ye[0],be=Ye[1],Nr=Xe.has("click"),Ae=be.has("click")||be.has("contextMenu"),ke=Ne(function(){Ge||Me()}),Er=function(){fe.current&&te&&Ae&&j(!1)};ea(b,se,ne,ke,Er),I(function(){ke()},[sr,ie]),I(function(){b&&!(x!=null&&x[ie])&&ke()},[JSON.stringify(B)]);var Kr=t.useMemo(function(){var i=Ot(x,u,Ze,te);return rr(i,$==null?void 0:$(Ze))},[Ze,$,x,u,te]);t.useImperativeHandle(o,function(){return{nativeElement:Sr.current,forceAlign:ke}});var Zr=t.useState(0),xr=P(Zr,2),Yr=xr[0],Xr=xr[1],Or=t.useState(0),Wr=P(Or,2),pr=Wr[0],et=Wr[1],zr=function(){if(Y&&se){var m=se.getBoundingClientRect();Xr(m.width),et(m.height)}},rt=function(){zr(),ke()},ee=function(m){lr(!1),Me(),g==null||g(m)},Br=function(){return new Promise(function(m){zr(),$e(function(){return m})})};I(function(){Te&&(Me(),Te(),$e(null))},[Te]);function Se(i,m,k,W){Pe[i]=function(L){var _r;W==null||W(L),j(m,k);for(var it=arguments.length,ct=new Array(it>1?it-1:0),Vr=1;Vr<it;Vr++)ct[Vr-1]=arguments[Vr];(_r=G[i])===null||_r===void 0||_r.call.apply(_r,[G,L].concat(ct))}}(Nr||Ae)&&(Pe.onClick=function(i){var m;fe.current&&Ae?j(!1):!fe.current&&Nr&&(He(i),j(!0));for(var k=arguments.length,W=new Array(k>1?k-1:0),L=1;L<k;L++)W[L-1]=arguments[L];(m=G.onClick)===null||m===void 0||m.call.apply(m,[G,i].concat(W))}),ra(b,Ae,se,ne,s,q,qr,j);var Ie=Xe.has("hover"),Oe=be.has("hover"),pe,cr;Ie&&(Se("onMouseEnter",!0,D,function(i){He(i)}),Se("onPointerEnter",!0,D,function(i){He(i)}),pe=function(){(b||Ge)&&j(!0,D)},te&&(Pe.onMouseMove=function(i){var m;(m=G.onMouseMove)===null||m===void 0||m.call(G,i)})),Oe&&(Se("onMouseLeave",!1,E),Se("onPointerLeave",!1,E),cr=function(){j(!1,E)}),Xe.has("focus")&&Se("onFocus",!0,T),be.has("focus")&&Se("onBlur",!1,M),Xe.has("contextMenu")&&(Pe.onContextMenu=function(i){var m;fe.current&&be.has("contextMenu")?j(!1):(He(i),j(!0)),i.preventDefault();for(var k=arguments.length,W=new Array(k>1?k-1:0),L=1;L<k;L++)W[L-1]=arguments[L];(m=G.onContextMenu)===null||m===void 0||m.call.apply(m,[G,i].concat(W))}),je&&(Pe.className=rr(G.className,je));var fr=U(U({},G),Pe),Hr={},tt=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];tt.forEach(function(i){F[i]&&(Hr[i]=function(){for(var m,k=arguments.length,W=new Array(k),L=0;L<k;L++)W[L]=arguments[L];(m=fr[i])===null||m===void 0||m.call.apply(m,[fr].concat(W)),F[i].apply(F,W)})});var at=t.cloneElement(Je,U(U({},fr),Hr)),nt={x:kr,y:Gr},ot=ge?U({},ge!==!0?ge:{}):null;return t.createElement(t.Fragment,null,t.createElement($t,{disabled:!b,ref:Ur,onResize:rt},t.createElement(Zt,{getTriggerDOMNode:ar},at)),t.createElement(Ct.Provider,{value:yr},t.createElement(Kt,{portal:e,ref:Mr,prefixCls:u,popup:A,className:rr(de,Kr),style:me,target:se,onMouseEnter:pe,onMouseLeave:cr,onPointerEnter:pe,zIndex:S,open:b,keepDom:Ge,fresh:ue,onClick:tr,mask:s,motion:Ce,maskMotion:K,onVisibleChanged:ee,onPrepare:Br,forceRender:Z,autoDestroy:Qe,getPopupContainer:Q,align:Ze,arrow:ot,arrowPos:nt,ready:Rr,offsetX:Jr,offsetY:Tr,offsetR:$r,offsetB:_e,onAlign:ke,stretch:Y,targetWidth:Yr/Ve,targetHeight:pr/Lr})))});return a}const fa=aa(Nt);function da(e){var a=t.createContext(void 0),r=function(n){var u=n.value,l=n.children,v=t.useRef(u);v.current=u;var h=t.useState(function(){return{getValue:function(){return v.current},listeners:new Set}}),d=P(h,1),y=d[0];return I(function(){Rt.unstable_batchedUpdates(function(){y.listeners.forEach(function(c){c(u)})})},[u]),t.createElement(a.Provider,{value:y},l)};return{Context:a,Provider:r,defaultValue:e}}function ma(e,a){var r=Ne(typeof a=="function"?a:function(c){if(a===void 0)return c;if(!Array.isArray(a))return c[a];var C={};return a.forEach(function(f){C[f]=c[f]}),C}),o=t.useContext(e==null?void 0:e.Context),n=o||{},u=n.listeners,l=n.getValue,v=t.useRef();v.current=r(o?l():e==null?void 0:e.defaultValue);var h=t.useState({}),d=P(h,2),y=d[1];return I(function(){if(!o)return;function c(C){var f=r(C);Ft(v.current,f,!0)||y({})}return u.add(c),function(){u.delete(c)}},[o]),v.current}function ha(){var e=t.createContext(null);function a(){return t.useContext(e)}function r(n,u){var l=Ar(n),v=function(d,y){var c=l?{ref:y}:{},C=t.useRef(0),f=t.useRef(d),g=a();return g!==null?t.createElement(n,mr({},d,c)):((!u||u(f.current,d))&&(C.current+=1),f.current=d,t.createElement(e.Provider,{value:C.current},t.createElement(n,mr({},d,c))))};return l?t.forwardRef(v):v}function o(n,u){var l=Ar(n),v=function(d,y){var c=l?{ref:y}:{};return a(),t.createElement(n,mr({},d,c))};return l?t.memo(t.forwardRef(v),u):t.memo(v,u)}return{makeImmutable:r,responseImmutable:o,useImmutableMark:a}}export{Nt as P,fa as T,da as a,ha as c,ma as u};
