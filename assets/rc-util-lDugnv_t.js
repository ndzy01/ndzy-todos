import{a as ne,r as m,R as Ee}from"./react-v0wmBK7J.js";import{r as P}from"./react-is-q81m-9gd.js";import{R as he,a as Ne}from"./react-dom-UBVWOR3A.js";import{d as g,e as p,f as D,r as ye,c as N,o as re,p as y}from"./@babel-3ekFMeiY.js";function H(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return ne.Children.forEach(e,function(t){t==null&&!n.keepEmpty||(Array.isArray(t)?r=r.concat(H(t)):P.isFragment(t)&&t.props?r=r.concat(H(t.props.children,n)):r.push(t))}),r}var O={},Se=function(n){};function we(e,n){}function Re(e,n){}function Ae(){O={}}function te(e,n,r){!n&&!O[r]&&(e(!1,r),O[r]=!0)}function w(e,n){te(we,e,n)}function _e(e,n){te(Re,e,n)}w.preMessage=Se;w.resetWarned=Ae;w.noteOnce=_e;function Me(e){return e instanceof HTMLElement||e instanceof SVGElement}function un(e){return Me(e)?e:e instanceof ne.Component?he.findDOMNode(e):null}function Ce(e,n,r){var t=m.useRef({});return(!("value"in t.current)||r(t.current.condition,n))&&(t.current.value=e(),t.current.condition=n),t.current.value}function Te(e,n){typeof e=="function"?e(n):g(e)==="object"&&e&&"current"in e&&(e.current=n)}function Oe(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=n.filter(function(a){return a});return t.length<=1?t[0]:function(a){n.forEach(function(i){Te(i,a)})}}function sn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ce(function(){return Oe.apply(void 0,n)},n,function(t,a){return t.length!==a.length||t.every(function(i,o){return i!==a[o]})})}function be(e){var n,r,t=P.isMemo(e)?e.type.type:e.type;return!(typeof t=="function"&&!((n=t.prototype)!==null&&n!==void 0&&n.render)||typeof e=="function"&&!((r=e.prototype)!==null&&r!==void 0&&r.render))}function cn(e){return!m.isValidElement(e)||P.isFragment(e)?!1:be(e)}function fn(e,n){var r=p({},e);return Array.isArray(n)&&n.forEach(function(t){delete r[t]}),r}var ae=function(n){return+setTimeout(n,16)},ie=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(ae=function(n){return window.requestAnimationFrame(n)},ie=function(n){return window.cancelAnimationFrame(n)});var W=0,F=new Map;function oe(e){F.delete(e)}var Ue=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;W+=1;var t=W;function a(i){if(i===0)oe(t),n();else{var o=ae(function(){a(i-1)});F.set(t,o)}}return a(r),t};Ue.cancel=function(e){var n=F.get(e);return oe(e),ie(n)};function ue(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ie(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var B="data-rc-order",V="data-rc-priority",Le="rc-util-key",b=new Map;function se(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):Le}function R(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function Pe(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function ce(e){return Array.from((b.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function fe(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!ue())return null;var r=n.csp,t=n.prepend,a=n.priority,i=a===void 0?0:a,o=Pe(t),c=o==="prependQueue",s=document.createElement("style");s.setAttribute(B,o),c&&i&&s.setAttribute(V,"".concat(i)),r!=null&&r.nonce&&(s.nonce=r==null?void 0:r.nonce),s.innerHTML=e;var f=R(n),d=f.firstChild;if(t){if(c){var l=ce(f).filter(function(v){if(!["prepend","prependQueue"].includes(v.getAttribute(B)))return!1;var _=Number(v.getAttribute(V)||0);return i>=_});if(l.length)return f.insertBefore(s,l[l.length-1].nextSibling),s}f.insertBefore(s,d)}else f.appendChild(s);return s}function le(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=R(n);return ce(r).find(function(t){return t.getAttribute(se(n))===e})}function ln(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=le(e,n);if(r){var t=R(n);t.removeChild(r)}}function De(e,n){var r=b.get(e);if(!r||!Ie(document,r)){var t=fe("",n),a=t.parentNode;b.set(e,a),e.removeChild(t)}}function dn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=R(r);De(t,r);var a=le(n,r);if(a){var i,o;if((i=r.csp)!==null&&i!==void 0&&i.nonce&&a.nonce!==((o=r.csp)===null||o===void 0?void 0:o.nonce)){var c;a.nonce=(c=r.csp)===null||c===void 0?void 0:c.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var s=fe(e,r);return s.setAttribute(se(r),n),s}function mn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function a(i,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=t.has(i);if(w(!s,"Warning: There may be circular references"),s)return!1;if(i===o)return!0;if(r&&c>1)return!1;t.add(i);var f=c+1;if(Array.isArray(i)){if(!Array.isArray(o)||i.length!==o.length)return!1;for(var d=0;d<i.length;d++)if(!a(i[d],o[d],f))return!1;return!0}if(i&&o&&g(i)==="object"&&g(o)==="object"){var l=Object.keys(i);return l.length!==Object.keys(o).length?!1:l.every(function(v){return a(i[v],o[v],f)})}return!1}return a(e,n)}var j=ue()?m.useLayoutEffect:m.useEffect,Fe=function(n,r){var t=m.useRef(!0);j(function(){return n(t.current)},r),j(function(){return t.current=!1,function(){t.current=!0}},[])},G=function(n,r){Fe(function(t){if(!t)return n()},r)};function U(e,n){for(var r=e,t=0;t<n.length;t+=1){if(r==null)return;r=r[n[t]]}return r}function de(e,n,r,t){if(!n.length)return r;var a=ye(n),i=a[0],o=a.slice(1),c;return!e&&typeof i=="number"?c=[]:Array.isArray(e)?c=D(e):c=p({},e),t&&r===void 0&&o.length===1?delete c[i][o[0]]:c[i]=de(c[i],o,r,t),c}function M(e,n,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&t&&r===void 0&&!U(e,n.slice(0,-1))?e:de(e,n,r,t)}function Ke(e){return g(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function q(e){return Array.isArray(e)?[]:{}}var ke=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function vn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=q(n[0]);return n.forEach(function(a){function i(o,c){var s=new Set(c),f=U(a,o),d=Array.isArray(f);if(d||Ke(f)){if(!s.has(f)){s.add(f);var l=U(t,o);d?t=M(t,o,[]):(!l||g(l)!=="object")&&(t=M(t,o,q(f))),ke(f).forEach(function(v){i([].concat(D(o),[v]),s)})}}else t=M(t,o,f)}i([])}),t}function z(e){var n=m.useRef();n.current=e;var r=m.useCallback(function(){for(var t,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(i))},[]);return r}function Q(e){var n=m.useRef(!1),r=m.useState(e),t=N(r,2),a=t[0],i=t[1];m.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function o(c,s){s&&n.current||i(c)}return[a,o]}function C(e){return e!==void 0}function gn(e,n){var r=n||{},t=r.defaultValue,a=r.value,i=r.onChange,o=r.postState,c=Q(function(){return C(a)?a:C(t)?typeof t=="function"?t():t:typeof e=="function"?e():e}),s=N(c,2),f=s[0],d=s[1],l=a!==void 0?a:f,v=o?o(l):l,_=z(i),ve=Q([l]),K=N(ve,2),k=K[0],ge=K[1];G(function(){var h=k[0];f!==h&&_(f,h)},[k]),G(function(){C(a)||d(a)},[a]);var pe=z(function(h,x){d(h,x),ge([l],x)});return[v,pe]}function me(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function xe(e){return me(e)instanceof ShadowRoot}function pn(e){return xe(e)?me(e):null}var He=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,We=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Be="".concat(He," ").concat(We).split(/[\s\n]+/),Ve="aria-",je="data-";function Y(e,n){return e.indexOf(n)===0}function En(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;n===!1?r={aria:!0,data:!0,attr:!0}:n===!0?r={aria:!0}:r=p({},n);var t={};return Object.keys(e).forEach(function(a){(r.aria&&(a==="role"||Y(a,Ve))||r.data&&Y(a,je)||r.attr&&Be.includes(a))&&(t[a]=e[a])}),t}var u={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var r=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||r>=u.F1&&r<=u.F12)return!1;switch(r){case u.ALT:case u.CAPS_LOCK:case u.CONTEXT_MENU:case u.CTRL:case u.DOWN:case u.END:case u.ESC:case u.HOME:case u.INSERT:case u.LEFT:case u.MAC_FF_META:case u.META:case u.NUMLOCK:case u.NUM_CENTER:case u.PAGE_DOWN:case u.PAGE_UP:case u.PAUSE:case u.PRINT_SCREEN:case u.RIGHT:case u.SHIFT:case u.UP:case u.WIN_KEY:case u.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=u.ZERO&&n<=u.NINE||n>=u.NUM_ZERO&&n<=u.NUM_MULTIPLY||n>=u.A&&n<=u.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case u.SPACE:case u.QUESTION_MARK:case u.NUM_PLUS:case u.NUM_MINUS:case u.NUM_PERIOD:case u.NUM_DIVISION:case u.SEMICOLON:case u.DASH:case u.EQUALS:case u.COMMA:case u.PERIOD:case u.SLASH:case u.APOSTROPHE:case u.SINGLE_QUOTE:case u.OPEN_SQUARE_BRACKET:case u.BACKSLASH:case u.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},E=p({},Ne),Ge=E.version,qe=E.render,ze=E.unmountComponentAtNode,A;try{var Qe=Number((Ge||"").split(".")[0]);Qe>=18&&(A=E.createRoot)}catch{}function $(e){var n=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&g(n)==="object"&&(n.usingClientEntryPoint=e)}var S="__rc_react_root__";function Ye(e,n){$(!0);var r=n[S]||A(n);$(!1),r.render(e),n[S]=r}function $e(e,n){qe(e,n)}function hn(e,n){if(A){Ye(e,n);return}$e(e,n)}function Ze(e){return I.apply(this,arguments)}function I(){return I=re(y().mark(function e(n){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then(function(){var a;(a=n[S])===null||a===void 0||a.unmount(),delete n[S]}));case 1:case"end":return t.stop()}},e)})),I.apply(this,arguments)}function Xe(e){ze(e)}function Nn(e){return L.apply(this,arguments)}function L(){return L=re(y().mark(function e(n){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(A===void 0){t.next=2;break}return t.abrupt("return",Ze(n));case 2:Xe(n);case 3:case"end":return t.stop()}},e)})),L.apply(this,arguments)}const Je=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),r=n.width,t=n.height;if(r||t)return!0}if(e.getBoundingClientRect){var a=e.getBoundingClientRect(),i=a.width,o=a.height;if(i||o)return!0}}return!1};var T;function en(e){if(typeof document>"u")return 0;if(e||T===void 0){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var r=document.createElement("div"),t=r.style;t.position="absolute",t.top="0",t.left="0",t.pointerEvents="none",t.visibility="hidden",t.width="200px",t.height="150px",t.overflow="hidden",r.appendChild(n),document.body.appendChild(r);var a=n.offsetWidth;r.style.overflow="scroll";var i=n.offsetWidth;a===i&&(i=r.clientWidth),document.body.removeChild(r),T=a-i}return T}function Z(e){var n=e.match(/^(.*)px$/),r=Number(n==null?void 0:n[1]);return Number.isNaN(r)?en():r}function yn(e){if(typeof document>"u"||!e||!(e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),r=n.width,t=n.height;return{width:Z(r),height:Z(t)}}function nn(){var e=p({},Ee);return e.useId}var X=0,J=nn();const Sn=J?function(n){var r=J();return n||r}:function(n){var r=m.useState("ssr-id"),t=N(r,2),a=t[0],i=t[1];return m.useEffect(function(){var o=X;X+=1,i("rc_unique_".concat(o))},[]),n||a},wn=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function ee(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Je(e)){var r=e.nodeName.toLowerCase(),t=["input","select","textarea","button"].includes(r)||e.isContentEditable||r==="a"&&!!e.getAttribute("href"),a=e.getAttribute("tabindex"),i=Number(a),o=null;return a&&!Number.isNaN(i)?o=i:t&&o===null&&(o=0),t&&e.disabled&&(o=null),o!==null&&(o>=0||n&&o<0)}return!1}function Rn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=D(e.querySelectorAll("*")).filter(function(t){return ee(t,n)});return ee(e,n)&&r.unshift(e),r}export{gn as A,cn as B,En as C,U as D,M as E,Rn as F,un as G,_e as H,u as K,Fe as a,w as b,ue as c,yn as d,sn as e,Oe as f,pn as g,Te as h,z as i,Me as j,Je as k,Ue as l,wn as m,Sn as n,Ce as o,mn as p,vn as q,ln as r,be as s,fn as t,dn as u,hn as v,we as w,Nn as x,H as y,Q as z};
