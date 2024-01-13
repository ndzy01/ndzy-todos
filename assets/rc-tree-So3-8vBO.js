import{d as Te,f as ne,e as R,h as ke,b as w,g as W,k as qe,l as Ve,a as Ye,q as z,_ as ze,c as te,s as Xe}from"./@babel-W7-Wn9hY.js";import{c as B}from"./classnames-feG2F_pn.js";import{b as X,y as dt,t as st,C as Je,a as Ke,K as ie}from"./rc-util-ZPCrP7KH.js";import{r as x}from"./react-10p77hjm.js";import{L as lt}from"./rc-virtual-list-G-esyE_c.js";import{C as ct}from"./rc-motion-HJD7aCph.js";import"./react-is-q81m-9gd.js";function F(r,d){return r[d]}var ut=["children"];function Qe(r,d){return"".concat(r,"-").concat(d)}function ft(r){return r&&r.type&&r.type.isTreeNode}function ve(r,d){return r??d}function me(r){var d=r||{},p=d.title,e=d._title,o=d.key,l=d.children,v=p||"title";return{title:v,_title:e||[v],key:o||"key",children:l||"children"}}function pt(r){function d(p){var e=dt(p);return e.map(function(o){if(!ft(o))return X(!o,"Tree/TreeNode can only accept TreeNode as children."),null;var l=o.key,v=o.props,t=v.children,n=ke(v,ut),a=R({key:l},n),i=d(t);return i.length&&(a.children=i),a}).filter(function(o){return o})}return d(r)}function De(r,d,p){var e=me(p),o=e._title,l=e.key,v=e.children,t=new Set(d===!0?[]:d),n=[];function a(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return i.map(function(c,f){for(var g=Qe(s?s.pos:"0",f),h=ve(c[l],g),y,u=0;u<o.length;u+=1){var K=o[u];if(c[K]!==void 0){y=c[K];break}}var m=R(R({},st(c,[].concat(ne(o),[l,v]))),{},{title:y,key:h,parent:s,pos:g,children:null,data:c,isStart:[].concat(ne(s?s.isStart:[]),[f===0]),isEnd:[].concat(ne(s?s.isEnd:[]),[f===i.length-1])});return n.push(m),d===!0||t.has(h)?m.children=a(c[v]||[],m):m.children=[],m})}return a(r),n}function vt(r,d,p){var e={};Te(p)==="object"?e=p:e={externalGetKey:p},e=e||{};var o=e,l=o.childrenPropName,v=o.externalGetKey,t=o.fieldNames,n=me(t),a=n.key,i=n.children,s=l||i,c;v?typeof v=="string"?c=function(h){return h[v]}:typeof v=="function"&&(c=function(h){return v(h)}):c=function(h,y){return ve(h[a],y)};function f(g,h,y,u){var K=g?g[s]:r,m=g?Qe(y.pos,h):"0",k=g?[].concat(ne(u),[g]):[];if(g){var N=c(g,m),E={node:g,index:h,pos:m,key:N,parentPos:y.node?y.pos:null,level:y.level+1,nodes:k};d(E)}K&&K.forEach(function(D,b){f(D,b,{node:g,pos:m,level:y?y.level+1:-1},k)})}f(null)}function gt(r){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=d.initWrapper,e=d.processEntity,o=d.onProcessFinished,l=d.externalGetKey,v=d.childrenPropName,t=d.fieldNames,n=arguments.length>2?arguments[2]:void 0,a=l||n,i={},s={},c={posEntities:i,keyEntities:s};return p&&(c=p(c)||c),vt(r,function(f){var g=f.node,h=f.index,y=f.pos,u=f.key,K=f.parentPos,m=f.level,k=f.nodes,N={node:g,nodes:k,index:h,key:u,pos:y,level:m},E=ve(u,y);i[y]=N,s[E]=N,N.parent=i[K],N.parent&&(N.parent.children=N.parent.children||[],N.parent.children.push(N)),e&&e(N,c)},{externalGetKey:a,childrenPropName:v,fieldNames:t}),o&&o(c),c}function fe(r,d){var p=d.expandedKeys,e=d.selectedKeys,o=d.loadedKeys,l=d.loadingKeys,v=d.checkedKeys,t=d.halfCheckedKeys,n=d.dragOverNodeKey,a=d.dropPosition,i=d.keyEntities,s=F(i,r),c={eventKey:r,expanded:p.indexOf(r)!==-1,selected:e.indexOf(r)!==-1,loaded:o.indexOf(r)!==-1,loading:l.indexOf(r)!==-1,checked:v.indexOf(r)!==-1,halfChecked:t.indexOf(r)!==-1,pos:String(s?s.pos:""),dragOver:n===r&&a===0,dragOverGapTop:n===r&&a===-1,dragOverGapBottom:n===r&&a===1};return c}function M(r){var d=r.data,p=r.expanded,e=r.selected,o=r.checked,l=r.loaded,v=r.loading,t=r.halfChecked,n=r.dragOver,a=r.dragOverGapTop,i=r.dragOverGapBottom,s=r.pos,c=r.active,f=r.eventKey,g=R(R({},d),{},{expanded:p,selected:e,checked:o,loaded:l,loading:v,halfChecked:t,dragOver:n,dragOverGapTop:a,dragOverGapBottom:i,pos:s,active:c,key:f});return"props"in g||Object.defineProperty(g,"props",{get:function(){return X(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),r}}),g}function Ze(r,d){var p=new Set;return r.forEach(function(e){d.has(e)||p.add(e)}),p}function ht(r){var d=r||{},p=d.disabled,e=d.disableCheckbox,o=d.checkable;return!!(p||e)||o===!1}function yt(r,d,p,e){for(var o=new Set(r),l=new Set,v=0;v<=p;v+=1){var t=d.get(v)||new Set;t.forEach(function(s){var c=s.key,f=s.node,g=s.children,h=g===void 0?[]:g;o.has(c)&&!e(f)&&h.filter(function(y){return!e(y.node)}).forEach(function(y){o.add(y.key)})})}for(var n=new Set,a=p;a>=0;a-=1){var i=d.get(a)||new Set;i.forEach(function(s){var c=s.parent,f=s.node;if(!(e(f)||!s.parent||n.has(s.parent.key))){if(e(s.parent.node)){n.add(c.key);return}var g=!0,h=!1;(c.children||[]).filter(function(y){return!e(y.node)}).forEach(function(y){var u=y.key,K=o.has(u);g&&!K&&(g=!1),!h&&(K||l.has(u))&&(h=!0)}),g&&o.add(c.key),h&&l.add(c.key),n.add(c.key)}})}return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(Ze(l,o))}}function Kt(r,d,p,e,o){for(var l=new Set(r),v=new Set(d),t=0;t<=e;t+=1){var n=p.get(t)||new Set;n.forEach(function(c){var f=c.key,g=c.node,h=c.children,y=h===void 0?[]:h;!l.has(f)&&!v.has(f)&&!o(g)&&y.filter(function(u){return!o(u.node)}).forEach(function(u){l.delete(u.key)})})}v=new Set;for(var a=new Set,i=e;i>=0;i-=1){var s=p.get(i)||new Set;s.forEach(function(c){var f=c.parent,g=c.node;if(!(o(g)||!c.parent||a.has(c.parent.key))){if(o(c.parent.node)){a.add(f.key);return}var h=!0,y=!1;(f.children||[]).filter(function(u){return!o(u.node)}).forEach(function(u){var K=u.key,m=l.has(K);h&&!m&&(h=!1),!y&&(m||v.has(K))&&(y=!0)}),h||l.delete(f.key),y&&v.add(f.key),a.add(f.key)}})}return{checkedKeys:Array.from(l),halfCheckedKeys:Array.from(Ze(v,l))}}function Se(r,d,p,e){var o=[],l;e?l=e:l=ht;var v=new Set(r.filter(function(i){var s=!!F(p,i);return s||o.push(i),s})),t=new Map,n=0;Object.keys(p).forEach(function(i){var s=p[i],c=s.level,f=t.get(c);f||(f=new Set,t.set(c,f)),f.add(s),n=Math.max(n,c)}),X(!o.length,"Tree missing follow keys: ".concat(o.slice(0,100).map(function(i){return"'".concat(i,"'")}).join(", ")));var a;return d===!0?a=yt(v,t,n,l):a=Kt(v,d.halfCheckedKeys,t,n,l),a}var we=x.createContext(null),mt=function(d){for(var p=d.prefixCls,e=d.level,o=d.isStart,l=d.isEnd,v="".concat(p,"-indent-unit"),t=[],n=0;n<e;n+=1){var a;t.push(x.createElement("span",{key:n,className:B(v,(a={},w(a,"".concat(v,"-start"),o[n]),w(a,"".concat(v,"-end"),l[n]),a))}))}return x.createElement("span",{"aria-hidden":"true",className:"".concat(p,"-indent")},t)};const kt=x.memo(mt);var Nt=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],Ie="open",Ae="close",xt="---",Ct=function(r){qe(p,r);var d=Ve(p);function p(){var e;Ye(this,p);for(var o=arguments.length,l=new Array(o),v=0;v<o;v++)l[v]=arguments[v];return e=d.call.apply(d,[this].concat(l)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.cacheIndent=void 0,e.onSelectorClick=function(t){var n=e.props.context.onNodeClick;n(t,M(e.props)),e.isSelectable()?e.onSelect(t):e.onCheck(t)},e.onSelectorDoubleClick=function(t){var n=e.props.context.onNodeDoubleClick;n(t,M(e.props))},e.onSelect=function(t){if(!e.isDisabled()){var n=e.props.context.onNodeSelect;n(t,M(e.props))}},e.onCheck=function(t){if(!e.isDisabled()){var n=e.props,a=n.disableCheckbox,i=n.checked,s=e.props.context.onNodeCheck;if(!(!e.isCheckable()||a)){var c=!i;s(t,M(e.props),c)}}},e.onMouseEnter=function(t){var n=e.props.context.onNodeMouseEnter;n(t,M(e.props))},e.onMouseLeave=function(t){var n=e.props.context.onNodeMouseLeave;n(t,M(e.props))},e.onContextMenu=function(t){var n=e.props.context.onNodeContextMenu;n(t,M(e.props))},e.onDragStart=function(t){var n=e.props.context.onNodeDragStart;t.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(t,z(e));try{t.dataTransfer.setData("text/plain","")}catch{}},e.onDragEnter=function(t){var n=e.props.context.onNodeDragEnter;t.preventDefault(),t.stopPropagation(),n(t,z(e))},e.onDragOver=function(t){var n=e.props.context.onNodeDragOver;t.preventDefault(),t.stopPropagation(),n(t,z(e))},e.onDragLeave=function(t){var n=e.props.context.onNodeDragLeave;t.stopPropagation(),n(t,z(e))},e.onDragEnd=function(t){var n=e.props.context.onNodeDragEnd;t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,z(e))},e.onDrop=function(t){var n=e.props.context.onNodeDrop;t.preventDefault(),t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,z(e))},e.onExpand=function(t){var n=e.props,a=n.loading,i=n.context.onNodeExpand;a||i(t,M(e.props))},e.setSelectHandle=function(t){e.selectHandle=t},e.getNodeState=function(){var t=e.props.expanded;return e.isLeaf()?null:t?Ie:Ae},e.hasChildren=function(){var t=e.props.eventKey,n=e.props.context.keyEntities,a=F(n,t)||{},i=a.children;return!!(i||[]).length},e.isLeaf=function(){var t=e.props,n=t.isLeaf,a=t.loaded,i=e.props.context.loadData,s=e.hasChildren();return n===!1?!1:n||!i&&!s||i&&a&&!s},e.isDisabled=function(){var t=e.props.disabled,n=e.props.context.disabled;return!!(n||t)},e.isCheckable=function(){var t=e.props.checkable,n=e.props.context.checkable;return!n||t===!1?!1:n},e.syncLoadData=function(t){var n=t.expanded,a=t.loading,i=t.loaded,s=e.props.context,c=s.loadData,f=s.onNodeLoad;a||c&&n&&!e.isLeaf()&&!e.hasChildren()&&!i&&f(M(e.props))},e.isDraggable=function(){var t=e.props,n=t.data,a=t.context.draggable;return!!(a&&(!a.nodeDraggable||a.nodeDraggable(n)))},e.renderDragHandler=function(){var t=e.props.context,n=t.draggable,a=t.prefixCls;return n!=null&&n.icon?x.createElement("span",{className:"".concat(a,"-draggable-icon")},n.icon):null},e.renderSwitcherIconDom=function(t){var n=e.props.switcherIcon,a=e.props.context.switcherIcon,i=n||a;return typeof i=="function"?i(R(R({},e.props),{},{isLeaf:t})):i},e.renderSwitcher=function(){var t=e.props.expanded,n=e.props.context.prefixCls;if(e.isLeaf()){var a=e.renderSwitcherIconDom(!0);return a!==!1?x.createElement("span",{className:B("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},a):null}var i=B("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(t?Ie:Ae)),s=e.renderSwitcherIconDom(!1);return s!==!1?x.createElement("span",{onClick:e.onExpand,className:i},s):null},e.renderCheckbox=function(){var t=e.props,n=t.checked,a=t.halfChecked,i=t.disableCheckbox,s=e.props.context.prefixCls,c=e.isDisabled(),f=e.isCheckable();if(!f)return null;var g=typeof f!="boolean"?f:null;return x.createElement("span",{className:B("".concat(s,"-checkbox"),n&&"".concat(s,"-checkbox-checked"),!n&&a&&"".concat(s,"-checkbox-indeterminate"),(c||i)&&"".concat(s,"-checkbox-disabled")),onClick:e.onCheck},g)},e.renderIcon=function(){var t=e.props.loading,n=e.props.context.prefixCls;return x.createElement("span",{className:B("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),t&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var t=e.state.dragNodeHighlight,n=e.props,a=n.title,i=a===void 0?xt:a,s=n.selected,c=n.icon,f=n.loading,g=n.data,h=e.props.context,y=h.prefixCls,u=h.showIcon,K=h.icon,m=h.loadData,k=h.titleRender,N=e.isDisabled(),E="".concat(y,"-node-content-wrapper"),D;if(u){var b=c||K;D=b?x.createElement("span",{className:B("".concat(y,"-iconEle"),"".concat(y,"-icon__customize"))},typeof b=="function"?b(e.props):b):e.renderIcon()}else m&&f&&(D=e.renderIcon());var C;typeof i=="function"?C=i(g):k?C=k(g):C=i;var S=x.createElement("span",{className:"".concat(y,"-title")},C);return x.createElement("span",{ref:e.setSelectHandle,title:typeof i=="string"?i:"",className:B("".concat(E),"".concat(E,"-").concat(e.getNodeState()||"normal"),!N&&(s||t)&&"".concat(y,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},D,S,e.renderDropIndicator())},e.renderDropIndicator=function(){var t=e.props,n=t.disabled,a=t.eventKey,i=e.props.context,s=i.draggable,c=i.dropLevelOffset,f=i.dropPosition,g=i.prefixCls,h=i.indent,y=i.dropIndicatorRender,u=i.dragOverNodeKey,K=i.direction,m=!!s,k=!n&&m&&u===a,N=h??e.cacheIndent;return e.cacheIndent=h,k?y({dropPosition:f,dropLevelOffset:c,indent:N,prefixCls:g,direction:K}):null},e}return ze(p,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var o=this.props.selectable,l=this.props.context.selectable;return typeof o=="boolean"?o:l}},{key:"render",value:function(){var o,l=this.props,v=l.eventKey,t=l.className,n=l.style,a=l.dragOver,i=l.dragOverGapTop,s=l.dragOverGapBottom,c=l.isLeaf,f=l.isStart,g=l.isEnd,h=l.expanded,y=l.selected,u=l.checked,K=l.halfChecked,m=l.loading,k=l.domRef,N=l.active;l.data;var E=l.onMouseMove,D=l.selectable,b=ke(l,Nt),C=this.props.context,S=C.prefixCls,O=C.filterTreeNode,P=C.keyEntities,T=C.dropContainerKey,$=C.dropTargetKey,I=C.draggingNodeKey,A=this.isDisabled(),_=Je(b,{aria:!0,data:!0}),U=F(P,v)||{},de=U.level,se=g[g.length-1],H=this.isDraggable(),G=!A&&H,J=I===v,le=D!==void 0?{"aria-selected":!!D}:void 0;return x.createElement("div",W({ref:k,className:B(t,"".concat(S,"-treenode"),(o={},w(o,"".concat(S,"-treenode-disabled"),A),w(o,"".concat(S,"-treenode-switcher-").concat(h?"open":"close"),!c),w(o,"".concat(S,"-treenode-checkbox-checked"),u),w(o,"".concat(S,"-treenode-checkbox-indeterminate"),K),w(o,"".concat(S,"-treenode-selected"),y),w(o,"".concat(S,"-treenode-loading"),m),w(o,"".concat(S,"-treenode-active"),N),w(o,"".concat(S,"-treenode-leaf-last"),se),w(o,"".concat(S,"-treenode-draggable"),H),w(o,"dragging",J),w(o,"drop-target",$===v),w(o,"drop-container",T===v),w(o,"drag-over",!A&&a),w(o,"drag-over-gap-top",!A&&i),w(o,"drag-over-gap-bottom",!A&&s),w(o,"filter-node",O&&O(M(this.props))),o)),style:n,draggable:G,"aria-grabbed":J,onDragStart:G?this.onDragStart:void 0,onDragEnter:H?this.onDragEnter:void 0,onDragOver:H?this.onDragOver:void 0,onDragLeave:H?this.onDragLeave:void 0,onDrop:H?this.onDrop:void 0,onDragEnd:H?this.onDragEnd:void 0,onMouseMove:E},le,_),x.createElement(kt,{prefixCls:S,level:de,isStart:f,isEnd:g}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),p}(x.Component),pe=function(d){return x.createElement(we.Consumer,null,function(p){return x.createElement(Ct,W({},d,{context:p}))})};pe.displayName="TreeNode";pe.isTreeNode=1;function j(r,d){if(!r)return[];var p=r.slice(),e=p.indexOf(d);return e>=0&&p.splice(e,1),p}function Y(r,d){var p=(r||[]).slice();return p.indexOf(d)===-1&&p.push(d),p}function Le(r){return r.split("-")}function Et(r,d){var p=[],e=F(d,r);function o(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];l.forEach(function(v){var t=v.key,n=v.children;p.push(t),o(n)})}return o(e.children),p}function bt(r){if(r.parent){var d=Le(r.pos);return Number(d[d.length-1])===r.parent.children.length-1}return!1}function Dt(r){var d=Le(r.pos);return Number(d[d.length-1])===0}function _e(r,d,p,e,o,l,v,t,n,a){var i,s=r.clientX,c=r.clientY,f=r.target.getBoundingClientRect(),g=f.top,h=f.height,y=(a==="rtl"?-1:1)*(((o==null?void 0:o.x)||0)-s),u=(y-12)/e,K=F(t,p.props.eventKey);if(c<g+h/2){var m=v.findIndex(function(I){return I.key===K.key}),k=m<=0?0:m-1,N=v[k].key;K=F(t,N)}var E=K.key,D=K,b=K.key,C=0,S=0;if(!n.includes(E))for(var O=0;O<u&&bt(K);O+=1)K=K.parent,S+=1;var P=d.props.data,T=K.node,$=!0;return Dt(K)&&K.level===0&&c<g+h/2&&l({dragNode:P,dropNode:T,dropPosition:-1})&&K.key===p.props.eventKey?C=-1:(D.children||[]).length&&n.includes(b)?l({dragNode:P,dropNode:T,dropPosition:0})?C=0:$=!1:S===0?u>-1.5?l({dragNode:P,dropNode:T,dropPosition:1})?C=1:$=!1:l({dragNode:P,dropNode:T,dropPosition:0})?C=0:l({dragNode:P,dropNode:T,dropPosition:1})?C=1:$=!1:l({dragNode:P,dropNode:T,dropPosition:1})?C=1:$=!1,{dropPosition:C,dropLevelOffset:S,dropTargetKey:K.key,dropTargetPos:K.pos,dragOverNodeKey:b,dropContainerKey:C===0?null:((i=K.parent)===null||i===void 0?void 0:i.key)||null,dropAllowed:$}}function Fe(r,d){if(r){var p=d.multiple;return p?r.slice():r.length?[r[0]]:r}}function Pe(r){if(!r)return null;var d;if(Array.isArray(r))d={checkedKeys:r,halfCheckedKeys:void 0};else if(Te(r)==="object")d={checkedKeys:r.checked||void 0,halfCheckedKeys:r.halfChecked||void 0};else return X(!1,"`checkedKeys` is not an array or an object"),null;return d}function He(r,d){var p=new Set;function e(o){if(!p.has(o)){var l=F(d,o);if(l){p.add(o);var v=l.parent,t=l.node;t.disabled||v&&e(v.key)}}}return(r||[]).forEach(function(o){e(o)}),ne(p)}function St(r){var d=r.dropPosition,p=r.dropLevelOffset,e=r.indent,o={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(d){case-1:o.top=0,o.left=-p*e;break;case 1:o.bottom=0,o.left=-p*e;break;case 0:o.bottom=0,o.left=e;break}return x.createElement("div",{style:o})}function Pt(r,d){var p=x.useState(!1),e=te(p,2),o=e[0],l=e[1];Ke(function(){if(o)return r(),function(){d()}},[o]),Ke(function(){return l(!0),function(){l(!1)}},[])}var Ot=["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"],et=function(d,p){var e=d.className,o=d.style,l=d.motion,v=d.motionNodes,t=d.motionType,n=d.onMotionStart,a=d.onMotionEnd,i=d.active,s=d.treeNodeRequiredProps,c=ke(d,Ot),f=x.useState(!0),g=te(f,2),h=g[0],y=g[1],u=x.useContext(we),K=u.prefixCls,m=v&&t!=="hide";Ke(function(){v&&m!==h&&y(m)},[v]);var k=function(){v&&n()},N=x.useRef(!1),E=function(){v&&!N.current&&(N.current=!0,a())};Pt(k,E);var D=function(C){m===C&&E()};return v?x.createElement(ct,W({ref:p,visible:h},l,{motionAppear:t==="show",onVisibleChanged:D}),function(b,C){var S=b.className,O=b.style;return x.createElement("div",{ref:C,className:B("".concat(K,"-treenode-motion"),S),style:O},v.map(function(P){var T=W({},(Xe(P.data),P.data)),$=P.title,I=P.key,A=P.isStart,_=P.isEnd;delete T.children;var U=fe(I,s);return x.createElement(pe,W({},T,U,{title:$,active:i,data:P.data,key:I,isStart:A,isEnd:_}))}))}):x.createElement(pe,W({domRef:p,className:e,style:o},c,{active:i}))};et.displayName="MotionTreeNode";var Tt=x.forwardRef(et);function wt(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],p=r.length,e=d.length;if(Math.abs(p-e)!==1)return{add:!1,key:null};function o(l,v){var t=new Map;l.forEach(function(a){t.set(a,!0)});var n=v.filter(function(a){return!t.has(a)});return n.length===1?n[0]:null}return p<e?{add:!0,key:o(r,d)}:{add:!1,key:o(d,r)}}function Ue(r,d,p){var e=r.findIndex(function(t){return t.key===p}),o=r[e+1],l=d.findIndex(function(t){return t.key===p});if(o){var v=d.findIndex(function(t){return t.key===o.key});return d.slice(l+1,v)}return d.slice(l+1)}var Lt=["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"],Ge={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Mt=function(){},ae="RC_TREE_MOTION_".concat(Math.random()),Oe={key:ae},tt={key:ae,level:0,index:0,pos:"0",node:Oe,nodes:[Oe]},Be={parent:null,children:[],pos:tt.pos,data:Oe,title:null,key:ae,isStart:[],isEnd:[]};function We(r,d,p,e){return d===!1||!p?r:r.slice(0,Math.ceil(p/e)+1)}function je(r){var d=r.key,p=r.pos;return ve(d,p)}function $t(r){for(var d=String(r.data.key),p=r;p.parent;)p=p.parent,d="".concat(p.data.key," > ").concat(d);return d}var nt=x.forwardRef(function(r,d){var p=r.prefixCls,e=r.data;r.selectable,r.checkable;var o=r.expandedKeys,l=r.selectedKeys,v=r.checkedKeys,t=r.loadedKeys,n=r.loadingKeys,a=r.halfCheckedKeys,i=r.keyEntities,s=r.disabled,c=r.dragging,f=r.dragOverNodeKey,g=r.dropPosition,h=r.motion,y=r.height,u=r.itemHeight,K=r.virtual,m=r.focusable,k=r.activeItem,N=r.focused,E=r.tabIndex,D=r.onKeyDown,b=r.onFocus,C=r.onBlur,S=r.onActiveChange,O=r.onListChangeStart,P=r.onListChangeEnd,T=ke(r,Lt),$=x.useRef(null),I=x.useRef(null);x.useImperativeHandle(d,function(){return{scrollTo:function(V){$.current.scrollTo(V)},getIndentWidth:function(){return I.current.offsetWidth}}});var A=x.useState(o),_=te(A,2),U=_[0],de=_[1],se=x.useState(e),H=te(se,2),G=H[0],J=H[1],le=x.useState(e),ge=te(le,2),Ne=ge[0],re=ge[1],xe=x.useState([]),he=te(xe,2),Ce=he[0],q=he[1],rt=x.useState(null),Me=te(rt,2),ot=Me[0],Ee=Me[1],$e=x.useRef(e);$e.current=e;function be(){var L=$e.current;J(L),re(L),q([]),Ee(null),P()}Ke(function(){de(o);var L=wt(U,o);if(L.key!==null)if(L.add){var V=G.findIndex(function(ce){var ue=ce.key;return ue===L.key}),Q=We(Ue(G,e,L.key),K,y,u),oe=G.slice();oe.splice(V+1,0,Be),re(oe),q(Q),Ee("show")}else{var Z=e.findIndex(function(ce){var ue=ce.key;return ue===L.key}),ee=We(Ue(e,G,L.key),K,y,u),ye=e.slice();ye.splice(Z+1,0,Be),re(ye),q(ee),Ee("hide")}else G!==e&&(J(e),re(e))},[o,e]),x.useEffect(function(){c||be()},[c]);var it=h?Ne:e,Re={expandedKeys:o,selectedKeys:l,loadedKeys:t,loadingKeys:n,checkedKeys:v,halfCheckedKeys:a,dragOverNodeKey:f,dropPosition:g,keyEntities:i};return x.createElement(x.Fragment,null,N&&k&&x.createElement("span",{style:Ge,"aria-live":"assertive"},$t(k)),x.createElement("div",null,x.createElement("input",{style:Ge,disabled:m===!1||s,tabIndex:m!==!1?E:null,onKeyDown:D,onFocus:b,onBlur:C,value:"",onChange:Mt,"aria-label":"for screen reader"})),x.createElement("div",{className:"".concat(p,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden",border:0,padding:0}},x.createElement("div",{className:"".concat(p,"-indent")},x.createElement("div",{ref:I,className:"".concat(p,"-indent-unit")}))),x.createElement(lt,W({},T,{data:it,itemKey:je,height:y,fullHeight:!1,virtual:K,itemHeight:u,prefixCls:"".concat(p,"-list"),ref:$,onVisibleChange:function(V,Q){var oe=new Set(V),Z=Q.filter(function(ee){return!oe.has(ee)});Z.some(function(ee){return je(ee)===ae})&&be()}}),function(L){var V=L.pos,Q=W({},(Xe(L.data),L.data)),oe=L.title,Z=L.key,ee=L.isStart,ye=L.isEnd,ce=ve(Z,V);delete Q.key,delete Q.children;var ue=fe(ce,Re);return x.createElement(Tt,W({},Q,ue,{title:oe,active:!!k&&Z===k.key,pos:V,data:L.data,isStart:ee,isEnd:ye,motion:h,motionNodes:Z===ae?Ce:null,motionType:ot,onMotionStart:O,onMotionEnd:be,treeNodeRequiredProps:Re,onMouseMove:function(){S(null)}}))}))});nt.displayName="NodeList";var Rt=10,at=function(r){qe(p,r);var d=Ve(p);function p(){var e;Ye(this,p);for(var o=arguments.length,l=new Array(o),v=0;v<o;v++)l[v]=arguments[v];return e=d.call.apply(d,[this].concat(l)),e.destroyed=!1,e.delayedDragEnterLogic=void 0,e.loadingRetryTimes={},e.state={keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null,fieldNames:me()},e.dragStartMousePosition=null,e.dragNode=void 0,e.currentMouseOverDroppableNodeKey=null,e.listRef=x.createRef(),e.onNodeDragStart=function(t,n){var a=e.state,i=a.expandedKeys,s=a.keyEntities,c=e.props.onDragStart,f=n.props.eventKey;e.dragNode=n,e.dragStartMousePosition={x:t.clientX,y:t.clientY};var g=j(i,f);e.setState({draggingNodeKey:f,dragChildrenKeys:Et(f,s),indent:e.listRef.current.getIndentWidth()}),e.setExpandedKeys(g),window.addEventListener("dragend",e.onWindowDragEnd),c==null||c({event:t,node:M(n.props)})},e.onNodeDragEnter=function(t,n){var a=e.state,i=a.expandedKeys,s=a.keyEntities,c=a.dragChildrenKeys,f=a.flattenNodes,g=a.indent,h=e.props,y=h.onDragEnter,u=h.onExpand,K=h.allowDrop,m=h.direction,k=n.props,N=k.pos,E=k.eventKey,D=z(e),b=D.dragNode;if(e.currentMouseOverDroppableNodeKey!==E&&(e.currentMouseOverDroppableNodeKey=E),!b){e.resetDragState();return}var C=_e(t,b,n,g,e.dragStartMousePosition,K,f,s,i,m),S=C.dropPosition,O=C.dropLevelOffset,P=C.dropTargetKey,T=C.dropContainerKey,$=C.dropTargetPos,I=C.dropAllowed,A=C.dragOverNodeKey;if(c.indexOf(P)!==-1||!I){e.resetDragState();return}if(e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach(function(_){clearTimeout(e.delayedDragEnterLogic[_])}),b.props.eventKey!==n.props.eventKey&&(t.persist(),e.delayedDragEnterLogic[N]=window.setTimeout(function(){if(e.state.draggingNodeKey!==null){var _=ne(i),U=F(s,n.props.eventKey);U&&(U.children||[]).length&&(_=Y(i,n.props.eventKey)),"expandedKeys"in e.props||e.setExpandedKeys(_),u==null||u(_,{node:M(n.props),expanded:!0,nativeEvent:t.nativeEvent})}},800)),b.props.eventKey===P&&O===0){e.resetDragState();return}e.setState({dragOverNodeKey:A,dropPosition:S,dropLevelOffset:O,dropTargetKey:P,dropContainerKey:T,dropTargetPos:$,dropAllowed:I}),y==null||y({event:t,node:M(n.props),expandedKeys:i})},e.onNodeDragOver=function(t,n){var a=e.state,i=a.dragChildrenKeys,s=a.flattenNodes,c=a.keyEntities,f=a.expandedKeys,g=a.indent,h=e.props,y=h.onDragOver,u=h.allowDrop,K=h.direction,m=z(e),k=m.dragNode;if(k){var N=_e(t,k,n,g,e.dragStartMousePosition,u,s,c,f,K),E=N.dropPosition,D=N.dropLevelOffset,b=N.dropTargetKey,C=N.dropContainerKey,S=N.dropAllowed,O=N.dropTargetPos,P=N.dragOverNodeKey;i.indexOf(b)!==-1||!S||(k.props.eventKey===b&&D===0?e.state.dropPosition===null&&e.state.dropLevelOffset===null&&e.state.dropTargetKey===null&&e.state.dropContainerKey===null&&e.state.dropTargetPos===null&&e.state.dropAllowed===!1&&e.state.dragOverNodeKey===null||e.resetDragState():E===e.state.dropPosition&&D===e.state.dropLevelOffset&&b===e.state.dropTargetKey&&C===e.state.dropContainerKey&&O===e.state.dropTargetPos&&S===e.state.dropAllowed&&P===e.state.dragOverNodeKey||e.setState({dropPosition:E,dropLevelOffset:D,dropTargetKey:b,dropContainerKey:C,dropTargetPos:O,dropAllowed:S,dragOverNodeKey:P}),y==null||y({event:t,node:M(n.props)}))}},e.onNodeDragLeave=function(t,n){e.currentMouseOverDroppableNodeKey===n.props.eventKey&&!t.currentTarget.contains(t.relatedTarget)&&(e.resetDragState(),e.currentMouseOverDroppableNodeKey=null);var a=e.props.onDragLeave;a==null||a({event:t,node:M(n.props)})},e.onWindowDragEnd=function(t){e.onNodeDragEnd(t,null,!0),window.removeEventListener("dragend",e.onWindowDragEnd)},e.onNodeDragEnd=function(t,n){var a=e.props.onDragEnd;e.setState({dragOverNodeKey:null}),e.cleanDragState(),a==null||a({event:t,node:M(n.props)}),e.dragNode=null,window.removeEventListener("dragend",e.onWindowDragEnd)},e.onNodeDrop=function(t,n){var a,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=e.state,c=s.dragChildrenKeys,f=s.dropPosition,g=s.dropTargetKey,h=s.dropTargetPos,y=s.dropAllowed;if(y){var u=e.props.onDrop;if(e.setState({dragOverNodeKey:null}),e.cleanDragState(),g!==null){var K=R(R({},fe(g,e.getTreeNodeRequiredProps())),{},{active:((a=e.getActiveItem())===null||a===void 0?void 0:a.key)===g,data:F(e.state.keyEntities,g).node}),m=c.indexOf(g)!==-1;X(!m,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var k=Le(h),N={event:t,node:M(K),dragNode:e.dragNode?M(e.dragNode.props):null,dragNodesKeys:[e.dragNode.props.eventKey].concat(c),dropToGap:f!==0,dropPosition:f+Number(k[k.length-1])};i||u==null||u(N),e.dragNode=null}}},e.cleanDragState=function(){var t=e.state.draggingNodeKey;t!==null&&e.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),e.dragStartMousePosition=null,e.currentMouseOverDroppableNodeKey=null},e.triggerExpandActionExpand=function(t,n){var a=e.state,i=a.expandedKeys,s=a.flattenNodes,c=n.expanded,f=n.key,g=n.isLeaf;if(!(g||t.shiftKey||t.metaKey||t.ctrlKey)){var h=s.filter(function(u){return u.key===f})[0],y=M(R(R({},fe(f,e.getTreeNodeRequiredProps())),{},{data:h.data}));e.setExpandedKeys(c?j(i,f):Y(i,f)),e.onNodeExpand(t,y)}},e.onNodeClick=function(t,n){var a=e.props,i=a.onClick,s=a.expandAction;s==="click"&&e.triggerExpandActionExpand(t,n),i==null||i(t,n)},e.onNodeDoubleClick=function(t,n){var a=e.props,i=a.onDoubleClick,s=a.expandAction;s==="doubleClick"&&e.triggerExpandActionExpand(t,n),i==null||i(t,n)},e.onNodeSelect=function(t,n){var a=e.state.selectedKeys,i=e.state,s=i.keyEntities,c=i.fieldNames,f=e.props,g=f.onSelect,h=f.multiple,y=n.selected,u=n[c.key],K=!y;K?h?a=Y(a,u):a=[u]:a=j(a,u);var m=a.map(function(k){var N=F(s,k);return N?N.node:null}).filter(function(k){return k});e.setUncontrolledState({selectedKeys:a}),g==null||g(a,{event:"select",selected:K,node:n,selectedNodes:m,nativeEvent:t.nativeEvent})},e.onNodeCheck=function(t,n,a){var i=e.state,s=i.keyEntities,c=i.checkedKeys,f=i.halfCheckedKeys,g=e.props,h=g.checkStrictly,y=g.onCheck,u=n.key,K,m={event:"check",node:n,checked:a,nativeEvent:t.nativeEvent};if(h){var k=a?Y(c,u):j(c,u),N=j(f,u);K={checked:k,halfChecked:N},m.checkedNodes=k.map(function(O){return F(s,O)}).filter(function(O){return O}).map(function(O){return O.node}),e.setUncontrolledState({checkedKeys:k})}else{var E=Se([].concat(ne(c),[u]),!0,s),D=E.checkedKeys,b=E.halfCheckedKeys;if(!a){var C=new Set(D);C.delete(u);var S=Se(Array.from(C),{checked:!1,halfCheckedKeys:b},s);D=S.checkedKeys,b=S.halfCheckedKeys}K=D,m.checkedNodes=[],m.checkedNodesPositions=[],m.halfCheckedKeys=b,D.forEach(function(O){var P=F(s,O);if(P){var T=P.node,$=P.pos;m.checkedNodes.push(T),m.checkedNodesPositions.push({node:T,pos:$})}}),e.setUncontrolledState({checkedKeys:D},!1,{halfCheckedKeys:b})}y==null||y(K,m)},e.onNodeLoad=function(t){var n=t.key,a=new Promise(function(i,s){e.setState(function(c){var f=c.loadedKeys,g=f===void 0?[]:f,h=c.loadingKeys,y=h===void 0?[]:h,u=e.props,K=u.loadData,m=u.onLoad;if(!K||g.indexOf(n)!==-1||y.indexOf(n)!==-1)return null;var k=K(t);return k.then(function(){var N=e.state.loadedKeys,E=Y(N,n);m==null||m(E,{event:"load",node:t}),e.setUncontrolledState({loadedKeys:E}),e.setState(function(D){return{loadingKeys:j(D.loadingKeys,n)}}),i()}).catch(function(N){if(e.setState(function(D){return{loadingKeys:j(D.loadingKeys,n)}}),e.loadingRetryTimes[n]=(e.loadingRetryTimes[n]||0)+1,e.loadingRetryTimes[n]>=Rt){var E=e.state.loadedKeys;X(!1,"Retry for `loadData` many times but still failed. No more retry."),e.setUncontrolledState({loadedKeys:Y(E,n)}),i()}s(N)}),{loadingKeys:Y(y,n)}})});return a.catch(function(){}),a},e.onNodeMouseEnter=function(t,n){var a=e.props.onMouseEnter;a==null||a({event:t,node:n})},e.onNodeMouseLeave=function(t,n){var a=e.props.onMouseLeave;a==null||a({event:t,node:n})},e.onNodeContextMenu=function(t,n){var a=e.props.onRightClick;a&&(t.preventDefault(),a({event:t,node:n}))},e.onFocus=function(){var t=e.props.onFocus;e.setState({focused:!0});for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];t==null||t.apply(void 0,a)},e.onBlur=function(){var t=e.props.onBlur;e.setState({focused:!1}),e.onActiveChange(null);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];t==null||t.apply(void 0,a)},e.getTreeNodeRequiredProps=function(){var t=e.state,n=t.expandedKeys,a=t.selectedKeys,i=t.loadedKeys,s=t.loadingKeys,c=t.checkedKeys,f=t.halfCheckedKeys,g=t.dragOverNodeKey,h=t.dropPosition,y=t.keyEntities;return{expandedKeys:n||[],selectedKeys:a||[],loadedKeys:i||[],loadingKeys:s||[],checkedKeys:c||[],halfCheckedKeys:f||[],dragOverNodeKey:g,dropPosition:h,keyEntities:y}},e.setExpandedKeys=function(t){var n=e.state,a=n.treeData,i=n.fieldNames,s=De(a,t,i);e.setUncontrolledState({expandedKeys:t,flattenNodes:s},!0)},e.onNodeExpand=function(t,n){var a=e.state.expandedKeys,i=e.state,s=i.listChanging,c=i.fieldNames,f=e.props,g=f.onExpand,h=f.loadData,y=n.expanded,u=n[c.key];if(!s){var K=a.indexOf(u),m=!y;if(X(y&&K!==-1||!y&&K===-1,"Expand state not sync with index check"),m?a=Y(a,u):a=j(a,u),e.setExpandedKeys(a),g==null||g(a,{node:n,expanded:m,nativeEvent:t.nativeEvent}),m&&h){var k=e.onNodeLoad(n);k&&k.then(function(){var N=De(e.state.treeData,a,c);e.setUncontrolledState({flattenNodes:N})}).catch(function(){var N=e.state.expandedKeys,E=j(N,u);e.setExpandedKeys(E)})}}},e.onListChangeStart=function(){e.setUncontrolledState({listChanging:!0})},e.onListChangeEnd=function(){setTimeout(function(){e.setUncontrolledState({listChanging:!1})})},e.onActiveChange=function(t){var n=e.state.activeKey,a=e.props,i=a.onActiveChange,s=a.itemScrollOffset,c=s===void 0?0:s;n!==t&&(e.setState({activeKey:t}),t!==null&&e.scrollTo({key:t,offset:c}),i==null||i(t))},e.getActiveItem=function(){var t=e.state,n=t.activeKey,a=t.flattenNodes;return n===null?null:a.find(function(i){var s=i.key;return s===n})||null},e.offsetActiveKey=function(t){var n=e.state,a=n.flattenNodes,i=n.activeKey,s=a.findIndex(function(g){var h=g.key;return h===i});s===-1&&t<0&&(s=a.length),s=(s+t+a.length)%a.length;var c=a[s];if(c){var f=c.key;e.onActiveChange(f)}else e.onActiveChange(null)},e.onKeyDown=function(t){var n=e.state,a=n.activeKey,i=n.expandedKeys,s=n.checkedKeys,c=n.fieldNames,f=e.props,g=f.onKeyDown,h=f.checkable,y=f.selectable;switch(t.which){case ie.UP:{e.offsetActiveKey(-1),t.preventDefault();break}case ie.DOWN:{e.offsetActiveKey(1),t.preventDefault();break}}var u=e.getActiveItem();if(u&&u.data){var K=e.getTreeNodeRequiredProps(),m=u.data.isLeaf===!1||!!(u.data[c.children]||[]).length,k=M(R(R({},fe(a,K)),{},{data:u.data,active:!0}));switch(t.which){case ie.LEFT:{m&&i.includes(a)?e.onNodeExpand({},k):u.parent&&e.onActiveChange(u.parent.key),t.preventDefault();break}case ie.RIGHT:{m&&!i.includes(a)?e.onNodeExpand({},k):u.children&&u.children.length&&e.onActiveChange(u.children[0].key),t.preventDefault();break}case ie.ENTER:case ie.SPACE:{h&&!k.disabled&&k.checkable!==!1&&!k.disableCheckbox?e.onNodeCheck({},k,!s.includes(a)):!h&&y&&!k.disabled&&k.selectable!==!1&&e.onNodeSelect({},k);break}}}g==null||g(t)},e.setUncontrolledState=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!e.destroyed){var i=!1,s=!0,c={};Object.keys(t).forEach(function(f){if(f in e.props){s=!1;return}i=!0,c[f]=t[f]}),i&&(!n||s)&&e.setState(R(R({},c),a))}},e.scrollTo=function(t){e.listRef.current.scrollTo(t)},e}return ze(p,[{key:"componentDidMount",value:function(){this.destroyed=!1,this.onUpdated()}},{key:"componentDidUpdate",value:function(){this.onUpdated()}},{key:"onUpdated",value:function(){var o=this.props,l=o.activeKey,v=o.itemScrollOffset,t=v===void 0?0:v;l!==void 0&&l!==this.state.activeKey&&(this.setState({activeKey:l}),l!==null&&this.scrollTo({key:l,offset:t}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"resetDragState",value:function(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}},{key:"render",value:function(){var o,l=this.state,v=l.focused,t=l.flattenNodes,n=l.keyEntities,a=l.draggingNodeKey,i=l.activeKey,s=l.dropLevelOffset,c=l.dropContainerKey,f=l.dropTargetKey,g=l.dropPosition,h=l.dragOverNodeKey,y=l.indent,u=this.props,K=u.prefixCls,m=u.className,k=u.style,N=u.showLine,E=u.focusable,D=u.tabIndex,b=D===void 0?0:D,C=u.selectable,S=u.showIcon,O=u.icon,P=u.switcherIcon,T=u.draggable,$=u.checkable,I=u.checkStrictly,A=u.disabled,_=u.motion,U=u.loadData,de=u.filterTreeNode,se=u.height,H=u.itemHeight,G=u.virtual,J=u.titleRender,le=u.dropIndicatorRender,ge=u.onContextMenu,Ne=u.onScroll,re=u.direction,xe=u.rootClassName,he=u.rootStyle,Ce=Je(this.props,{aria:!0,data:!0}),q;return T&&(Te(T)==="object"?q=T:typeof T=="function"?q={nodeDraggable:T}:q={}),x.createElement(we.Provider,{value:{prefixCls:K,selectable:C,showIcon:S,icon:O,switcherIcon:P,draggable:q,draggingNodeKey:a,checkable:$,checkStrictly:I,disabled:A,keyEntities:n,dropLevelOffset:s,dropContainerKey:c,dropTargetKey:f,dropPosition:g,dragOverNodeKey:h,indent:y,direction:re,dropIndicatorRender:le,loadData:U,filterTreeNode:de,titleRender:J,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop}},x.createElement("div",{role:"tree",className:B(K,m,xe,(o={},w(o,"".concat(K,"-show-line"),N),w(o,"".concat(K,"-focused"),v),w(o,"".concat(K,"-active-focused"),i!==null),o)),style:he},x.createElement(nt,W({ref:this.listRef,prefixCls:K,style:k,data:t,disabled:A,selectable:C,checkable:!!$,motion:_,dragging:a!==null,height:se,itemHeight:H,virtual:G,focusable:E,focused:v,tabIndex:b,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:ge,onScroll:Ne},this.getTreeNodeRequiredProps(),Ce))))}}],[{key:"getDerivedStateFromProps",value:function(o,l){var v=l.prevProps,t={prevProps:o};function n(E){return!v&&E in o||v&&v[E]!==o[E]}var a,i=l.fieldNames;if(n("fieldNames")&&(i=me(o.fieldNames),t.fieldNames=i),n("treeData")?a=o.treeData:n("children")&&(X(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),a=pt(o.children)),a){t.treeData=a;var s=gt(a,{fieldNames:i});t.keyEntities=R(w({},ae,tt),s.keyEntities)}var c=t.keyEntities||l.keyEntities;if(n("expandedKeys")||v&&n("autoExpandParent"))t.expandedKeys=o.autoExpandParent||!v&&o.defaultExpandParent?He(o.expandedKeys,c):o.expandedKeys;else if(!v&&o.defaultExpandAll){var f=R({},c);delete f[ae],t.expandedKeys=Object.keys(f).map(function(E){return f[E].key})}else!v&&o.defaultExpandedKeys&&(t.expandedKeys=o.autoExpandParent||o.defaultExpandParent?He(o.defaultExpandedKeys,c):o.defaultExpandedKeys);if(t.expandedKeys||delete t.expandedKeys,a||t.expandedKeys){var g=De(a||l.treeData,t.expandedKeys||l.expandedKeys,i);t.flattenNodes=g}if(o.selectable&&(n("selectedKeys")?t.selectedKeys=Fe(o.selectedKeys,o):!v&&o.defaultSelectedKeys&&(t.selectedKeys=Fe(o.defaultSelectedKeys,o))),o.checkable){var h;if(n("checkedKeys")?h=Pe(o.checkedKeys)||{}:!v&&o.defaultCheckedKeys?h=Pe(o.defaultCheckedKeys)||{}:a&&(h=Pe(o.checkedKeys)||{checkedKeys:l.checkedKeys,halfCheckedKeys:l.halfCheckedKeys}),h){var y=h,u=y.checkedKeys,K=u===void 0?[]:u,m=y.halfCheckedKeys,k=m===void 0?[]:m;if(!o.checkStrictly){var N=Se(K,!0,c);K=N.checkedKeys,k=N.halfCheckedKeys}t.checkedKeys=K,t.halfCheckedKeys=k}}return n("loadedKeys")&&(t.loadedKeys=o.loadedKeys),t}}]),p}(x.Component);at.defaultProps={prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:St,allowDrop:function(){return!0},expandAction:!1};at.TreeNode=pe;export{pe as C,at as T,Se as a,j as b,gt as c,Y as d,He as e,me as f,pt as g};
