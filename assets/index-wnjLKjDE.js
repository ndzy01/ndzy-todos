import{r as p,j as e,a as G}from"./react-Tf5a63N3.js";import{c as K}from"./react-dom-L-9RVvDo.js";import{L as W,B as J}from"./react-router-dom-XpqpMlL4.js";import{A as B,s as c,B as y,a as X,S,F as u,I as O,D as _,b as T,c as Z,R as Q,C as E,T as ee,L as U,P as N,d as te,z as se}from"./antd-huGbXqYr.js";import{O as ae,d as re,e as k}from"./react-router-HlPHIle8.js";import{u as oe,a as H,b as ne}from"./ahooks-Y0YILfgT.js";import{L as ie}from"./rc-virtual-list-wNqXS0I-.js";import{d as C}from"./dayjs-I44_pL56.js";import{a as le}from"./axios-L6U4YIEh.js";import{c as de}from"./@wxcloud-VArnRXkh.js";import{l as ce}from"./lodash-xRwbkVY_.js";import{C as h}from"./crypto-js-cnNLbfBj.js";import{Z as me,m as he,c as ue,u as pe}from"./@wangeditor-gzx6jVfq.js";import{D as xe}from"./@ant-design-YHducWEY.js";import"./@babel-fXcOJB-X.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-1q7uUoWE.js";import"./rc-util-xukx7Y_4.js";import"./react-is-q81m-9gd.js";import"./classnames-RRvKwVVO.js";import"./rc-resize-observer-eVgrWCWY.js";import"./resize-observer-polyfill-B32NGzNS.js";import"./rc-motion-X9fqJuYP.js";import"./rc-picker-oHPgYHrN.js";import"./@rc-component-ceuPAu_r.js";import"./rc-menu-AESOuZPN.js";import"./rc-overflow-FWSRE92-.js";import"./rc-select-u4w8cWpt.js";import"./@ctrl-_Y40OLZn.js";import"./rc-drawer-McDEyZtA.js";import"./rc-field-form-zpGsYgxD.js";import"./async-validator-BHjhHa7C.js";import"./rc-notification-Yya6HL_O.js";import"./rc-tooltip-LSJy-BWL.js";import"./rc-table-d-fKDs8l.js";import"./rc-tree-nXQD7AhY.js";import"./rc-checkbox-prImYzzG.js";import"./rc-pagination-LEV33DQG.js";import"./rc-dropdown-iBisxkpV.js";import"./throttle-debounce-5p4B7Tol.js";import"./rc-input-bNT6nvS-.js";import"./rc-textarea-516bxAe_.js";import"./tslib-9i2l26Ba.js";import"./@emotion-folQEnri.js";import"./stylis-3miXmfPm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const $={loading:!1,list:[],tags:[]},fe=(s,t)=>{switch(t.type){case"UPDATE":return{...s,...t.payload||{}};default:return s}},b=p.createContext({state:$,dispatch:()=>{}}),{Content:ge}=B,ye=()=>e.jsx(B,{className:"ndzy-layout",children:e.jsx(ge,{children:e.jsx("div",{className:"layout-content p-16",children:e.jsx(ae,{})})})});c.config({top:100,duration:3,maxCount:1});const je=de.initCloud(),z=je.Cloud({identityless:!0,resourceAppid:"wxf18966ace3bbbd97",resourceEnv:"prod-3gjeiq7x1fbed11e"});z.init();localStorage.getItem("USE_LOCAL_SERVICE")||localStorage.setItem("USE_LOCAL_SERVICE","1");localStorage.getItem("BASE_URL")||localStorage.setItem("BASE_URL","http://localhost:3000");const R=localStorage.getItem("BASE_URL"),Ee=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0",Ce=Ee&&R?R:"https://ndzy-server.vercel.app",v=le.create({baseURL:Ce,timeout:6e4,withCredentials:!1});v.interceptors.request.use(s=>{const t=localStorage.getItem("token");return t&&(s.headers={Authorization:"Basic "+t}),s},s=>{Promise.reject(s)});v.interceptors.response.use(s=>{const t=s.data;return s.data.status===1&&c.error(s.data.msg),s.data.status===0&&c.success(s.data.msg),t},s=>{let t="";if(s&&s.response)switch(s.response.status){case 302:t="接口重定向了！",c.error(t);break;case 400:t="参数不正确！",c.error(t);break;case 401:t="您未登录，或者登录已经超时，请先登录！",console.log("ndzy---log---ndzy",t,"------");break;case 403:t="您没有权限操作！",c.error(t);break;case 404:t=`请求地址出错: ${s.response.config.url}`,c.error(t);break;case 408:t="请求超时！",c.error(t);break;case 409:t="系统已存在相同数据！",c.error(t);break;case 500:t="服务器内部错误！",c.error(t);break;case 501:t="服务未实现！",c.error(t);break;case 502:t="网关错误！",c.error(t);break;case 503:t="服务不可用！",c.error(t);break;case 504:t="服务暂时无法访问，请稍后再试！",c.error(t);break;case 505:t="HTTP 版本不受支持！",c.error(t);break;default:t="异常问题，请联系管理员！",c.error(t);break}return Promise.reject(t)});const Se=s=>Object.keys(s).map(t=>s[t]?`${encodeURIComponent(t)}=${encodeURIComponent(s[t])}`:"").filter(t=>t).join("&"),be=s=>{const{url:t="",data:i={},params:n={}}=s;let r=t;const a=localStorage.getItem("token"),l={"X-WX-SERVICE":"ndzy-service"};return a&&(l.Authorization="Basic "+a),s.method==="GET"&&!ce.isEmpty(n)&&(r+="?"+Se(n)),new Promise((x,f)=>{z.callContainer({...s,config:{env:"prod-3gjeiq7x1fbed11e"},path:r,header:l,method:s.method,data:i}).then(d=>{d.data.status===1&&c.error(d.data.msg),d.data.status===0&&c.success(d.data.msg),x(d.data)}).catch(()=>{f("网络错误")})})},Te=s=>s&&s<C().endOf("day"),V=()=>{let s=new Date().getTime();return typeof performance<"u"&&typeof performance.now=="function"&&(s+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const n=(s+Math.random()*16)%16|0;return s=Math.floor(s/16),(i=="x"?n:n&3|8).toString(16)})},Y=()=>{let s="";for(let t=0;t<8;t++)s+=V().replace(/-/g,"");return s},Ie=(s,t,i)=>{const n=h.enc.Utf8.parse(t),r=h.enc.Utf8.parse(i),a=h.enc.Hex.parse(s),l=h.enc.Base64.stringify(a);return h.AES.decrypt(l,n,{iv:r,mode:h.mode.CBC,padding:h.pad.Pkcs7,hasher:h.algo.SHA256}).toString(h.enc.Utf8).toString()},M=s=>{const t=Y(),i=Y(),n=h.enc.Utf8.parse(t),r=h.enc.Utf8.parse(i),a=h.enc.Utf8.parse(s),l=h.AES.encrypt(a,n,{iv:r,mode:h.mode.CBC,padding:h.pad.Pkcs7,hasher:h.algo.SHA256});return{keyBase:t,ivBase:i,text:l.ciphertext.toString().toUpperCase()}},Ae={labelCol:{xs:{span:6},sm:{span:6}},wrapperCol:{xs:{span:18},sm:{span:18}}},L=()=>{const s=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0"?v:be,{dispatch:t}=p.useContext(b),i=()=>{t({type:"UPDATE",payload:{loading:!0}}),s({url:"/users/loginInfo",method:"GET"}).then(o=>{t({type:"UPDATE",payload:{user:o.data[0],loading:!1}})}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})},n=()=>{t({type:"UPDATE",payload:{loading:!0}}),s({url:"/tags",method:"GET"}).then(o=>{t({type:"UPDATE",payload:{tags:o.data,loading:!1}})}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})},r=(o={})=>{t({type:"UPDATE",payload:{loading:!0}}),s({url:"/todos",method:"GET",params:o}).then(m=>{t({type:"UPDATE",payload:{list:m.data.map(j=>({...j,detail:Ie(j.detail,j.keyBase,j.ivBase)})),loading:!1}})}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})};return{initUser:i,initTags:n,createTodo:(o,m)=>{t({type:"UPDATE",payload:{loading:!0}});const{text:j,keyBase:A,ivBase:w}=M(o.detail);s({url:"/todos",method:"POST",data:{...o,deadline:C(o.deadline).format("YYYY-MM-DD"),operationSource:"h5",detail:j,keyBase:A,ivBase:w}}).then(()=>{t({type:"UPDATE",payload:{loading:!1}}),r(),m&&m()}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})},editTodo:(o,m,j)=>{t({type:"UPDATE",payload:{loading:!0}});const{text:A,keyBase:w,ivBase:q}=M(o.detail);s({url:`/todos/${m.id}`,method:"PATCH",data:{name:o.name,detail:A,keyBase:w,ivBase:q,deadline:C(o.deadline).format("YYYY-MM-DD"),tagId:o.tagId}}).then(()=>{t({type:"UPDATE",payload:{loading:!1}}),r(),j&&j()}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})},getAllTodo:r,finishTodo:o=>{t({type:"UPDATE",payload:{loading:!0}}),s({url:`/todos/${o.id}`,method:"PATCH",data:{isFinish:!0}}).then(()=>{r()}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})},delTodo:o=>{t({type:"UPDATE",payload:{loading:!0}}),s({url:`/todos/${o.id}`,method:"DELETE",data:{isFinish:!0}}).then(()=>{r()}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})},recoverTodo:o=>{t({type:"UPDATE",payload:{loading:!0}}),s({url:`/todos/${o.id}`,method:"PATCH",data:{isFinish:!1}}).then(()=>{r()}).catch(()=>{t({type:"UPDATE",payload:{loading:!1}})})},switchService:()=>{localStorage.getItem("USE_LOCAL_SERVICE")==="0"?localStorage.setItem("USE_LOCAL_SERVICE","1"):localStorage.setItem("USE_LOCAL_SERVICE","0"),window.location.reload()}}},we=({children:s,...t})=>p.isValidElement(s)?p.cloneElement(s,{...t}):s,I=({title:s,btnName:t,children:i,...n})=>{const[r,a]=oe({open:!1});return e.jsxs(e.Fragment,{children:[e.jsx(y,{type:"link",onClick:()=>a({open:!0}),children:t}),e.jsx(X,{destroyOnClose:!0,open:r.open,title:s,placement:"right",width:"100%",onClose:()=>a({open:!1}),children:e.jsx(we,{onClose:()=>a({open:!1}),...n,children:r&&i})})]})},F=s=>e.jsxs(I,{title:"查看",btnName:"查看",children:[e.jsx("div",{style:{padding:"0 8px"},id:`preview-${V()}`,className:"ndzy-preview",dangerouslySetInnerHTML:{__html:s.detail}}),e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("span",{style:{color:"blue"},children:["创建人：",s.userName||"--"]}),e.jsxs("span",{style:{color:"green"},children:["标签：",s.tagName||"--"]}),e.jsxs("span",{style:{color:"red"},children:["终止日期：",C(s.deadline).format("YYYY-MM-DD")]})]})}),e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("span",{children:["创建日期：",C(s.createdAt).subtract(8,"h").format("YYYY-MM-DD")]}),e.jsxs("span",{children:["更新日期：",C(s.updatedAt).subtract(8,"h").format("YYYY-MM-DD")]})]})})]});me.registerModule(he);function Ue({value:s,onChange:t}){const[i,n]=p.useState(null),[r,a]=p.useState("");p.useEffect(()=>{a(s)},[s]);const l={},x={placeholder:"请输入内容..."};return p.useEffect(()=>()=>{i!=null&&(i.destroy(),n(null))},[i]),e.jsx(e.Fragment,{children:e.jsxs("div",{style:{border:"1px solid #ccc",zIndex:100},children:[e.jsx(ue,{editor:i,defaultConfig:l,mode:"default",style:{borderBottom:"1px solid #ccc"}}),e.jsx(pe,{defaultConfig:x,value:r,onCreated:n,onChange:f=>{a(f.getHtml()),t(f.getHtml())},mode:"default",style:{overflowY:"hidden",minHeight:330}})]})})}const P=s=>{const{createTodo:t,editTodo:i}=L(),{state:n}=p.useContext(b),r=a=>s.id?i(a,{id:s.id},s.onClose):t(a,s.onClose);return e.jsxs(u,{initialValues:{name:s.name,deadline:s.deadline?C(s.deadline):C(),detail:s.detail,tagId:s.tagId},preserve:!1,name:"edit",onFinish:r,scrollToFirstError:!0,children:[e.jsx(u.Item,{name:"name",label:"名称",rules:[{required:!0,message:"名称不能为空"}],children:e.jsx(O.TextArea,{rows:1})}),e.jsx(u.Item,{name:"deadline",label:"终止时间",rules:[{required:!0,message:"终止时间不能为空"}],children:e.jsx(_,{className:"w-100",format:"YYYY-MM-DD",disabledDate:Te})}),e.jsx(u.Item,{name:"detail",label:"详情",rules:[{required:!0,message:"详情不能为空"}],children:e.jsx(Ue,{})}),e.jsx(u.Item,{name:"tagId",label:"标签",rules:[{required:!0,message:"请选择一个标签"}],children:e.jsx(T,{options:n.tags.map(a=>({label:`${a.name}-(${a.userName})`,value:a.id}))})}),e.jsx(u.Item,{children:e.jsx(Z,{offsetBottom:16,children:e.jsx(y,{loading:n.loading,type:"primary",htmlType:"submit",children:s.id?"保存":"创建"})})})]})},{RangePicker:D}=_,ke=()=>{const[s]=u.useForm(),t=p.useRef(null),i=H(t),{getAllTodo:n,switchService:r}=L(),{state:a}=p.useContext(b),l=Number(i==null?void 0:i.width)>800?8:24,[x,f]=p.useState(!1);return e.jsx("div",{ref:t,children:e.jsx(u,{form:s,...Ae,name:"search",onFinish:d=>{Object.keys(d).map(g=>{d[g]||delete d[g],(g==="createdRange"||g==="updatedRange"||g==="deadlineRange")&&d[g]&&(d[g]=JSON.stringify(d[g].map(o=>C(o).format("YYYY-MM-DD"))))}),n(d)},scrollToFirstError:!0,children:e.jsxs(Q,{gutter:24,children:[e.jsx(E,{span:l,children:e.jsx(u.Item,{name:"name",label:"名称",children:e.jsx(O,{className:"w-100",allowClear:!0})})}),x&&e.jsxs(e.Fragment,{children:[e.jsx(E,{span:l,children:e.jsx(u.Item,{name:"tagId",label:"标签",children:e.jsx(T,{allowClear:!0,className:"w-100",options:a.tags.map(d=>({label:`${d.name}-(${d.userName})`,value:d.id}))})})}),e.jsx(E,{span:l,children:e.jsx(u.Item,{name:"operationSource",label:"来源",children:e.jsx(T,{allowClear:!0,className:"w-100",options:[{label:"h5",value:"h5"},{label:"微信",value:"wx"}]})})}),e.jsx(E,{span:l,children:e.jsx(u.Item,{name:"isFinish",label:"状态",children:e.jsx(T,{allowClear:!0,className:"w-100",options:[{label:"处理中",value:"0"},{label:"已完成",value:"1"}]})})}),e.jsx(E,{span:l,children:e.jsx(u.Item,{name:"deadlineRange",label:"截止时间",children:e.jsx(D,{style:{width:"100%"}})})}),e.jsx(E,{span:l,children:e.jsx(u.Item,{name:"createdRange",label:"创建时间",children:e.jsx(D,{style:{width:"100%"}})})}),e.jsx(E,{span:l,children:e.jsx(u.Item,{name:"updatedRange",label:"更新时间",children:e.jsx(D,{style:{width:"100%"}})})})]}),e.jsx(E,{span:l,children:e.jsxs(S,{children:[e.jsx(y,{loading:a.loading,type:"primary",htmlType:"submit",children:"搜索"}),e.jsx(y,{type:"link",onClick:()=>{s.resetFields(),n()},children:"重置"}),e.jsxs("a",{style:{fontSize:12},onClick:()=>{f(!x)},children:[e.jsx(xe,{rotate:x?180:0}),x?"收起":"展开"]})]})}),e.jsx(E,{span:l,children:e.jsxs(S,{children:[e.jsx(I,{title:"新建",btnName:"新建",children:e.jsx(P,{})}),e.jsxs(y,{type:"link",onClick:r,children:["环境：",localStorage.getItem("USE_LOCAL_SERVICE")==="0"?"本地环境":"线上环境"]}),e.jsx("div",{children:a.user?e.jsxs("div",{style:{minWidth:33},className:"sky-blue center",children:["用户：",a.user.name||a.user.nickname]}):e.jsx("div",{style:{minWidth:33},className:"sky-blue center",children:"用户：游客"})})]})})]})})})},De=()=>{const t=p.useRef(null),i=H(t),{state:n}=p.useContext(b),{initUser:r,initTags:a,getAllTodo:l,finishTodo:x,delTodo:f,recoverTodo:d}=L();ne(()=>{r(),a(),l()});const g=[{title:"名称",dataIndex:"name",width:80},{title:"进度",dataIndex:"deadline",width:100,render:(o,m)=>{if(Number(m.isFinish)===0)return e.jsx("span",{style:{color:"red"},children:"处理中"});if(Number(m.isFinish)===1)return e.jsx("span",{style:{color:"green"},children:"已完成"})}},{title:"截止日期",dataIndex:"deadline",width:100},{title:"标签",dataIndex:"tagName",width:100},{title:"用户",dataIndex:"userName",width:100},{title:"创建时间",dataIndex:"createdAt",width:100},{title:"更新时间",dataIndex:"updatedAt",width:100},{title:"操作",width:120,fixed:"right",render:(o,m)=>e.jsxs(S,{children:[e.jsx(F,{...m}),Number(m.isFinish)===0?e.jsxs(S,{children:[e.jsx(I,{title:"编辑",btnName:"编辑",...m,children:e.jsx(P,{})}),e.jsx(y,{type:"link",onClick:()=>x(m),children:"完成"})]}):Number(m.isFinish)===1?e.jsxs(S,{children:[e.jsx(y,{type:"link",onClick:()=>d(m),children:"恢复"}),e.jsx(N,{title:"删除将无法恢复,确定删除?",onConfirm:()=>f(m),children:e.jsx(y,{type:"link",children:" 删除"})})]}):null]})}];return e.jsxs("div",{ref:t,style:{height:"100%"},children:[e.jsx(ke,{}),Number(i==null?void 0:i.width)>800?e.jsx(ee,{loading:n.loading,virtual:!0,columns:g,scroll:{x:900,y:600},rowKey:"id",dataSource:n.list,pagination:!1,locale:{emptyText:e.jsx("div",{className:"center",children:"暂无待办事项"})}}):e.jsx(U,{loading:n.loading,children:e.jsx(ie,{data:n.list,height:600,itemHeight:40,itemKey:"id",children:o=>e.jsxs(U.Item,{actions:[e.jsx(F,{...o}),...Number(o.isFinish)===0?[e.jsx(I,{title:"编辑",btnName:"编辑",...o,children:e.jsx(P,{})}),e.jsx(y,{type:"link",onClick:()=>x(o),children:"完成"})]:[e.jsx(y,{type:"link",onClick:()=>d(o),children:"恢复"}),e.jsx(N,{title:"删除将无法恢复,确定删除?",onConfirm:()=>f(o),children:e.jsx(y,{type:"link",children:" 删除"})})],...Number(o.isFinish)===0?[]:[]],children:[e.jsx(U.Item.Meta,{title:o.name,description:o.deadline}),e.jsx("div",{children:Number(o.isFinish)===0&&e.jsx("span",{style:{color:"red"},children:"处理中"})}),e.jsx("div",{children:Number(o.isFinish)===1&&e.jsx("span",{style:{color:"green"},children:"已完成"})})]},o.id)})})]})},Pe=()=>e.jsx("div",{className:"center",children:e.jsxs("div",{children:[e.jsx("h2",{children:"页面不存在"}),e.jsx("p",{children:e.jsx(W,{to:"/ndzy-todos/",children:"返回首页"})})]})}),ve=()=>{const[s,t]=p.useReducer(fe,$);return e.jsx(te,{locale:se,children:e.jsx(b.Provider,{value:{state:s,dispatch:t},children:e.jsx(re,{children:e.jsxs(k,{path:"/ndzy-todos/",element:e.jsx(ye,{}),children:[e.jsx(k,{index:!0,element:e.jsx(De,{})}),e.jsx(k,{path:"*",element:e.jsx(Pe,{})})]})})})})};K.createRoot(document.getElementById("root")).render(e.jsx(G.StrictMode,{children:e.jsx(J,{children:e.jsx(ve,{})})}));
