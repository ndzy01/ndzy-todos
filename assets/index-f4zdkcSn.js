import{r as d,j as e,a as J}from"./react-Tf5a63N3.js";import{c as X}from"./react-dom-L-9RVvDo.js";import{L as Z,B as Q}from"./react-router-dom-MFmCInc-.js";import{s as u,A as z,B as x,a as ee,S as A,F as g,I as L,D as H,b as k,c as te,R as se,C as E,T as oe,L as D,P as Y,d as re,z as ae}from"./antd-6y1swOzq.js";import{d as T}from"./dayjs-I44_pL56.js";import{l as ne}from"./socket.io-client-IQIgtGCP.js";import{a as ie}from"./axios-L6U4YIEh.js";import{c as le}from"./@wxcloud-VArnRXkh.js";import{l as de}from"./lodash-xRwbkVY_.js";import{C as p}from"./crypto-js-cnNLbfBj.js";import{a as ce,O as me,d as ue,e as v}from"./react-router-_w-FNBej.js";import{u as he,a as $,b as pe,c as xe}from"./ahooks-pvCHVYsX.js";import{L as ge}from"./rc-virtual-list-ndp4EOBa.js";import{Z as ye,m as fe,c as je,u as Ce}from"./@wangeditor-gzx6jVfq.js";import{D as Ee}from"./@ant-design-Aq87BQXm.js";import"./@babel-fXcOJB-X.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-aZQYQeYp.js";import"./rc-util-MuZmlthd.js";import"./react-is-q81m-9gd.js";import"./classnames-RRvKwVVO.js";import"./rc-resize-observer-EvetPw9M.js";import"./resize-observer-polyfill-B32NGzNS.js";import"./rc-motion-US3v7rSN.js";import"./rc-overflow-5c684BAk.js";import"./rc-picker-c2rgXf5t.js";import"./@rc-component-GVPyGy1S.js";import"./rc-menu-llqNlVpY.js";import"./rc-select-1Y2qwDsG.js";import"./@ctrl-_Y40OLZn.js";import"./rc-drawer-jstnhiOO.js";import"./rc-field-form-iBbHa6wp.js";import"./async-validator-BHjhHa7C.js";import"./rc-notification-JATChWhP.js";import"./rc-tooltip-jSjB7CjI.js";import"./rc-table-QWXOqrV0.js";import"./rc-tree-xwD5Y_7G.js";import"./rc-checkbox-WSXnycII.js";import"./rc-pagination-QHC3hAwc.js";import"./rc-dropdown-OIa4IJqi.js";import"./throttle-debounce-5p4B7Tol.js";import"./rc-input-rx7E-1zV.js";import"./rc-textarea-qr8GBR_c.js";import"./engine.io-client-Uz0TRVm7.js";import"./engine.io-parser-33FB7g9V.js";import"./@socket.io-3-vkxHAM.js";import"./socket.io-parser-QJaHYohl.js";import"./tslib-9i2l26Ba.js";import"./@emotion-folQEnri.js";import"./stylis-3miXmfPm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const V={loading:!1,list:[],tags:[],rooms:[],messages:[],room:""},Te=(s,t)=>{switch(t.type){case"UPDATE":return{...s,...t.payload||{}};default:return s}},S=d.createContext({state:V,dispatch:()=>{}});u.config({top:100,duration:3,maxCount:1});const Se=le.initCloud(),q=Se.Cloud({identityless:!0,resourceAppid:"wxf18966ace3bbbd97",resourceEnv:"prod-3gjeiq7x1fbed11e"});q.init();localStorage.getItem("USE_LOCAL_SERVICE")||localStorage.setItem("USE_LOCAL_SERVICE","1");localStorage.getItem("BASE_URL")||localStorage.setItem("BASE_URL","http://localhost:3000");const F=localStorage.getItem("BASE_URL"),be=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0",Ae=be&&F?F:"https://ndzy-server.vercel.app",M=ie.create({baseURL:Ae,timeout:6e4,withCredentials:!1});M.interceptors.request.use(s=>{const t=localStorage.getItem("token");return t&&(s.headers={Authorization:"Basic "+t}),s},s=>{Promise.reject(s)});M.interceptors.response.use(s=>{const t=s.data;return s.data.status===1&&u.error(s.data.msg),s.data.status===0&&u.success(s.data.msg),t},s=>{let t="";if(s&&s.response)switch(s.response.status){case 302:t="接口重定向了！",u.error(t);break;case 400:t="参数不正确！",u.error(t);break;case 401:t="您未登录，或者登录已经超时，请先登录！",console.log("ndzy---log---ndzy",t,"------");break;case 403:t="您没有权限操作！",u.error(t);break;case 404:t=`请求地址出错: ${s.response.config.url}`,u.error(t);break;case 408:t="请求超时！",u.error(t);break;case 409:t="系统已存在相同数据！",u.error(t);break;case 500:t="服务器内部错误！",u.error(t);break;case 501:t="服务未实现！",u.error(t);break;case 502:t="网关错误！",u.error(t);break;case 503:t="服务不可用！",u.error(t);break;case 504:t="服务暂时无法访问，请稍后再试！",u.error(t);break;case 505:t="HTTP 版本不受支持！",u.error(t);break;default:t="异常问题，请联系管理员！",u.error(t);break}return Promise.reject(t)});const Ie=s=>Object.keys(s).map(t=>s[t]?`${encodeURIComponent(t)}=${encodeURIComponent(s[t])}`:"").filter(t=>t).join("&"),ve=s=>{const{url:t="",data:o={},params:n={}}=s;let a=t;const r=localStorage.getItem("token"),i={"X-WX-SERVICE":"ndzy-service"};return r&&(i.Authorization="Basic "+r),s.method==="GET"&&!de.isEmpty(n)&&(a+="?"+Ie(n)),new Promise((c,y)=>{q.callContainer({...s,config:{env:"prod-3gjeiq7x1fbed11e"},path:a,header:i,method:s.method,data:o}).then(m=>{m.data.status===1&&u.error(m.data.msg),m.data.status===0&&u.success(m.data.msg),c(m.data)}).catch(()=>{y("网络错误")})})},ke=s=>s&&s<T().endOf("day"),G=()=>{let s=new Date().getTime();return typeof performance<"u"&&typeof performance.now=="function"&&(s+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,o=>{const n=(s+Math.random()*16)%16|0;return s=Math.floor(s/16),(o=="x"?n:n&3|8).toString(16)})},B=()=>{let s="";for(let t=0;t<8;t++)s+=G().replace(/-/g,"");return s},we=(s,t,o)=>{const n=p.enc.Utf8.parse(t),a=p.enc.Utf8.parse(o),r=p.enc.Hex.parse(s),i=p.enc.Base64.stringify(r);return p.AES.decrypt(i,n,{iv:a,mode:p.mode.CBC,padding:p.pad.Pkcs7,hasher:p.algo.SHA256}).toString(p.enc.Utf8).toString()},O=s=>{const t=B(),o=B(),n=p.enc.Utf8.parse(t),a=p.enc.Utf8.parse(o),r=p.enc.Utf8.parse(s),i=p.AES.encrypt(r,n,{iv:a,mode:p.mode.CBC,padding:p.pad.Pkcs7,hasher:p.algo.SHA256});return{keyBase:t,ivBase:o,text:i.ciphertext.toString().toUpperCase()}},Re={labelCol:{xs:{span:6},sm:{span:6}},wrapperCol:{xs:{span:18},sm:{span:18}}},Ue=ne("https://ndzy-service-89589-7-1307521321.sh.run.tcloudbase.com"),I=()=>{const s=ce(),t=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0"?M:ve,{dispatch:o}=d.useContext(S),n=l=>{o({type:"UPDATE",payload:{room:l}})},a=()=>{o({type:"UPDATE",payload:{loading:!0}}),t({url:"/users/loginInfo",method:"GET"}).then(l=>{o({type:"UPDATE",payload:{user:l.data,loading:!1}})}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})},r=()=>{o({type:"UPDATE",payload:{loading:!0}}),t({url:"/tags",method:"GET"}).then(l=>{o({type:"UPDATE",payload:{tags:l.data,loading:!1}})}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})},i=(l={})=>{o({type:"UPDATE",payload:{loading:!0}}),t({url:"/todos",method:"GET",params:l}).then(b=>{o({type:"UPDATE",payload:{list:b.data.map(C=>({...C,detail:we(C.detail,C.keyBase,C.ivBase)})),loading:!1}})}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})};return{initUser:a,initTags:r,createTodo:(l,b)=>{o({type:"UPDATE",payload:{loading:!0}});const{text:C,keyBase:R,ivBase:U}=O(l.detail);t({url:"/todos",method:"POST",data:{...l,deadline:T(l.deadline).format("YYYY-MM-DD"),operationSource:"h5",detail:C,keyBase:R,ivBase:U}}).then(()=>{o({type:"UPDATE",payload:{loading:!1}}),i(),b&&b()}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})},editTodo:(l,b,C)=>{o({type:"UPDATE",payload:{loading:!0}});const{text:R,keyBase:U,ivBase:K}=O(l.detail);t({url:`/todos/${b.id}`,method:"PATCH",data:{name:l.name,detail:R,keyBase:U,ivBase:K,deadline:T(l.deadline).format("YYYY-MM-DD"),tagId:l.tagId}}).then(()=>{o({type:"UPDATE",payload:{loading:!1}}),i(),C&&C()}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})},getAllTodo:i,finishTodo:l=>{o({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"PATCH",data:{isFinish:!0}}).then(()=>{i()}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})},delTodo:l=>{o({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"DELETE",data:{isFinish:!0}}).then(()=>{i()}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})},recoverTodo:l=>{o({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"PATCH",data:{isFinish:!1}}).then(()=>{i()}).catch(()=>{o({type:"UPDATE",payload:{loading:!1}})})},switchService:()=>{localStorage.getItem("USE_LOCAL_SERVICE")==="0"?localStorage.setItem("USE_LOCAL_SERVICE","1"):localStorage.setItem("USE_LOCAL_SERVICE","0"),window.location.reload()},getAllRooms:()=>{t({url:"/chats/rooms",method:"GET"}).then(l=>{o({type:"UPDATE",payload:{rooms:l.data}})})},getAllMessages:l=>{t({url:"/chats",method:"GET",params:l}).then(b=>{o({type:"UPDATE",payload:{messages:b.data}})})},socket:Ue,setRoom:n,navigate:s}},{Content:De}=z,Pe=()=>{const{navigate:s,getAllRooms:t}=I();return d.useEffect(()=>{t()},[]),e.jsx(z,{className:"ndzy-layout",children:e.jsx(De,{children:e.jsxs("div",{className:"layout-content p-16",children:[e.jsx(x,{onClick:()=>s("/ndzy-todos"),children:"主页"}),e.jsx(x,{onClick:()=>s("/ndzy-todos/rooms"),children:"聊天"}),e.jsx(me,{})]})})})},Ne=({children:s,...t})=>d.isValidElement(s)?d.cloneElement(s,{...t}):s,w=({title:s,btnName:t,children:o,...n})=>{const[a,r]=he({open:!1});return e.jsxs(e.Fragment,{children:[e.jsx(x,{type:"link",onClick:()=>r({open:!0}),children:t}),e.jsx(ee,{destroyOnClose:!0,open:a.open,title:s,placement:"right",width:"100%",onClose:()=>r({open:!1}),children:e.jsx(Ne,{onClose:()=>r({open:!1}),...n,children:a&&o})})]})},_=s=>e.jsxs(w,{title:"查看",btnName:"查看",children:[e.jsx("div",{style:{padding:"0 8px"},id:`preview-${G()}`,className:"ndzy-preview",dangerouslySetInnerHTML:{__html:s.detail}}),e.jsx("div",{children:e.jsxs(A,{children:[e.jsxs("span",{style:{color:"blue"},children:["创建人：",s.userName||"--"]}),e.jsxs("span",{style:{color:"green"},children:["标签：",s.tagName||"--"]}),e.jsxs("span",{style:{color:"red"},children:["终止日期：",T(s.deadline).format("YYYY-MM-DD")]})]})}),e.jsx("div",{children:e.jsxs(A,{children:[e.jsxs("span",{children:["创建日期：",T(s.createdAt).subtract(8,"h").format("YYYY-MM-DD")]}),e.jsxs("span",{children:["更新日期：",T(s.updatedAt).subtract(8,"h").format("YYYY-MM-DD")]})]})})]});ye.registerModule(fe);function W({value:s,onChange:t}){const[o,n]=d.useState(null),[a,r]=d.useState("");d.useEffect(()=>{r(s)},[s]);const i={},c={placeholder:"请输入内容..."};return d.useEffect(()=>()=>{o!=null&&(o.destroy(),n(null))},[o]),e.jsx(e.Fragment,{children:e.jsxs("div",{style:{border:"1px solid #ccc",zIndex:100},children:[e.jsx(je,{editor:o,defaultConfig:i,mode:"default",style:{borderBottom:"1px solid #ccc"}}),e.jsx(Ce,{defaultConfig:c,value:a,onCreated:n,onChange:y=>{r(y.getHtml()),t(y.getHtml())},mode:"default",style:{overflowY:"hidden",minHeight:330}})]})})}const N=s=>{const{createTodo:t,editTodo:o}=I(),{state:n}=d.useContext(S),a=r=>s.id?o(r,{id:s.id},s.onClose):t(r,s.onClose);return e.jsxs(g,{initialValues:{name:s.name,deadline:s.deadline?T(s.deadline):T(),detail:s.detail,tagId:s.tagId},preserve:!1,name:"edit",onFinish:a,scrollToFirstError:!0,children:[e.jsx(g.Item,{name:"name",label:"名称",rules:[{required:!0,message:"名称不能为空"}],children:e.jsx(L.TextArea,{rows:1})}),e.jsx(g.Item,{name:"deadline",label:"终止时间",rules:[{required:!0,message:"终止时间不能为空"}],children:e.jsx(H,{className:"w-100",format:"YYYY-MM-DD",disabledDate:ke})}),e.jsx(g.Item,{name:"detail",label:"详情",rules:[{required:!0,message:"详情不能为空"}],children:e.jsx(W,{})}),e.jsx(g.Item,{name:"tagId",label:"标签",rules:[{required:!0,message:"请选择一个标签"}],children:e.jsx(k,{options:n.tags.map(r=>({label:`${r.name}-(${r.userName})`,value:r.id}))})}),e.jsx(g.Item,{children:e.jsx(te,{offsetBottom:16,children:e.jsx(x,{loading:n.loading,type:"primary",htmlType:"submit",children:s.id?"保存":"创建"})})})]})},{RangePicker:P}=H,Le=()=>{const[s]=g.useForm(),t=d.useRef(null),o=$(t),{getAllTodo:n,switchService:a}=I(),{state:r}=d.useContext(S),i=Number(o==null?void 0:o.width)>800?8:24,[c,y]=d.useState(!1);return e.jsx("div",{ref:t,children:e.jsx(g,{form:s,...Re,name:"search",onFinish:m=>{Object.keys(m).map(f=>{m[f]||delete m[f],(f==="createdRange"||f==="updatedRange"||f==="deadlineRange")&&m[f]&&(m[f]=JSON.stringify(m[f].map(h=>T(h).format("YYYY-MM-DD"))))}),n(m)},scrollToFirstError:!0,children:e.jsxs(se,{gutter:24,children:[e.jsx(E,{span:i,children:e.jsx(g.Item,{name:"name",label:"名称",children:e.jsx(L,{className:"w-100",allowClear:!0})})}),c&&e.jsxs(e.Fragment,{children:[e.jsx(E,{span:i,children:e.jsx(g.Item,{name:"tagId",label:"标签",children:e.jsx(k,{allowClear:!0,className:"w-100",options:r.tags.map(m=>({label:`${m.name}-(${m.userName})`,value:m.id}))})})}),e.jsx(E,{span:i,children:e.jsx(g.Item,{name:"operationSource",label:"来源",children:e.jsx(k,{allowClear:!0,className:"w-100",options:[{label:"h5",value:"h5"},{label:"微信",value:"wx"}]})})}),e.jsx(E,{span:i,children:e.jsx(g.Item,{name:"isFinish",label:"状态",children:e.jsx(k,{allowClear:!0,className:"w-100",options:[{label:"处理中",value:"0"},{label:"已完成",value:"1"}]})})}),e.jsx(E,{span:i,children:e.jsx(g.Item,{name:"deadlineRange",label:"截止时间",children:e.jsx(P,{style:{width:"100%"}})})}),e.jsx(E,{span:i,children:e.jsx(g.Item,{name:"createdRange",label:"创建时间",children:e.jsx(P,{style:{width:"100%"}})})}),e.jsx(E,{span:i,children:e.jsx(g.Item,{name:"updatedRange",label:"更新时间",children:e.jsx(P,{style:{width:"100%"}})})})]}),e.jsx(E,{span:i,children:e.jsxs(A,{children:[e.jsx(x,{loading:r.loading,type:"primary",htmlType:"submit",children:"搜索"}),e.jsx(x,{type:"link",onClick:()=>{s.resetFields(),n()},children:"重置"}),e.jsxs("a",{style:{fontSize:12},onClick:()=>{y(!c)},children:[e.jsx(Ee,{rotate:c?180:0}),c?"收起":"展开"]})]})}),e.jsx(E,{span:i,children:e.jsxs(A,{children:[e.jsx(w,{title:"新建",btnName:"新建",children:e.jsx(N,{})}),e.jsxs(x,{type:"link",onClick:a,children:["环境：",localStorage.getItem("USE_LOCAL_SERVICE")==="0"?"本地环境":"线上环境"]}),e.jsx("div",{children:r.user?e.jsxs("div",{style:{minWidth:33},className:"sky-blue center",children:["用户：",r.user.name||r.user.nickname]}):e.jsx("div",{style:{minWidth:33},className:"sky-blue center",children:"用户：游客"})})]})})]})})})},Me=()=>{const t=d.useRef(null),o=$(t),{state:n}=d.useContext(S),{initUser:a,initTags:r,getAllTodo:i,finishTodo:c,delTodo:y,recoverTodo:m}=I();pe(()=>{a(),r(),i()});const f=[{title:"名称",dataIndex:"name",width:80},{title:"进度",dataIndex:"deadline",width:100,render:(h,j)=>{if(Number(j.isFinish)===0)return e.jsx("span",{style:{color:"red"},children:"处理中"});if(Number(j.isFinish)===1)return e.jsx("span",{style:{color:"green"},children:"已完成"})}},{title:"截止日期",dataIndex:"deadline",width:100},{title:"标签",dataIndex:"tagName",width:100},{title:"用户",dataIndex:"userName",width:100},{title:"创建时间",dataIndex:"createdAt",width:100},{title:"更新时间",dataIndex:"updatedAt",width:100},{title:"操作",width:120,fixed:"right",render:(h,j)=>e.jsxs(A,{children:[e.jsx(_,{...j}),Number(j.isFinish)===0?e.jsxs(A,{children:[e.jsx(w,{title:"编辑",btnName:"编辑",...j,children:e.jsx(N,{})}),e.jsx(x,{type:"link",onClick:()=>c(j),children:"完成"})]}):Number(j.isFinish)===1?e.jsxs(A,{children:[e.jsx(x,{type:"link",onClick:()=>m(j),children:"恢复"}),e.jsx(Y,{title:"删除将无法恢复,确定删除?",onConfirm:()=>y(j),children:e.jsx(x,{type:"link",children:" 删除"})})]}):null]})}];return e.jsxs("div",{ref:t,style:{height:"100%"},children:[e.jsx(Le,{}),Number(o==null?void 0:o.width)>800?e.jsx(oe,{loading:n.loading,virtual:!0,columns:f,scroll:{x:900,y:600},rowKey:"id",dataSource:n.list,pagination:!1,locale:{emptyText:e.jsx("div",{className:"center",children:"暂无待办事项"})}}):e.jsx(D,{loading:n.loading,children:e.jsx(ge,{data:n.list,height:600,itemHeight:40,itemKey:"id",children:h=>e.jsxs(D.Item,{actions:[e.jsx(_,{...h}),...Number(h.isFinish)===0?[e.jsx(w,{title:"编辑",btnName:"编辑",...h,children:e.jsx(N,{})}),e.jsx(x,{type:"link",onClick:()=>c(h),children:"完成"})]:[e.jsx(x,{type:"link",onClick:()=>m(h),children:"恢复"}),e.jsx(Y,{title:"删除将无法恢复,确定删除?",onConfirm:()=>y(h),children:e.jsx(x,{type:"link",children:" 删除"})})],...Number(h.isFinish)===0?[]:[]],children:[e.jsx(D.Item.Meta,{title:h.name,description:h.deadline}),e.jsx("div",{children:Number(h.isFinish)===0&&e.jsx("span",{style:{color:"red"},children:"处理中"})}),e.jsx("div",{children:Number(h.isFinish)===1&&e.jsx("span",{style:{color:"green"},children:"已完成"})})]},h.id)})})]})},Ye=()=>e.jsx("div",{className:"center",children:e.jsxs("div",{children:[e.jsx("h2",{children:"页面不存在"}),e.jsx("p",{children:e.jsx(Z,{to:"/ndzy-todos/",children:"返回首页"})})]})}),Fe=()=>{const[s,t]=d.useState(""),{socket:o,getAllRooms:n}=I(),{state:a}=d.useContext(S);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:16,border:"1px dashed #666",padding:16},children:[e.jsx(L,{value:s,onChange:r=>t(r.target.value),placeholder:"请输入房间号"}),e.jsx(x,{onClick:()=>{var r;a.user&&s&&(o.emit("createRoom",{roomName:s,userId:(r=a.user)==null?void 0:r.id}),n(),t(""))},children:"创建房间"})]})},Be=()=>{const{socket:s,navigate:t,setRoom:o}=I(),{state:n}=d.useContext(S);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:16,border:"1px dashed #666",padding:16},children:n.rooms.map(a=>e.jsxs("div",{style:{color:n.room===a.name?"pink":""},children:["房间：",a.name,"  ",e.jsx(x,{onClick:()=>{var r;o(a.name),s.emit("joinRoom",{roomName:a.name,userId:(r=n.user)==null?void 0:r.id}),t("/ndzy-todos/room")},children:"加入"})]}))})},Oe=()=>e.jsxs("div",{children:[e.jsx(Fe,{}),e.jsx("br",{}),e.jsx(Be,{})]}),_e=()=>{const[s,t]=d.useState(""),{socket:o,getAllMessages:n}=I(),{state:a}=d.useContext(S),r=d.useRef(null),i=xe(r,{onFocus:()=>{n({name:a.room})},onBlur:()=>{}});return d.useEffect(()=>{n({name:a.room})},[]),e.jsxs("div",{ref:r,style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:16,border:i?"1px dashed #666":"",padding:16},children:[e.jsx("div",{style:{height:200,overflow:"scroll"},children:a.messages.map(c=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16,padding:4},children:[e.jsxs("div",{children:["用户：",c.sender.nickname]}),e.jsxs("div",{children:["消息：",c.text]}),e.jsx("div",{children:c.createdAt})]}))}),e.jsx(W,{value:s,onChange:c=>t(c),placeholder:"请输入信息"}),e.jsx(x,{onClick:()=>{var c;a.room&&(o.emit("sendMessageToRoom",{roomName:a.room,message:s,userId:(c=a.user)==null?void 0:c.id}),n({name:a.room}),t(""))},children:"发送"})]})},ze=()=>{const{state:s}=d.useContext(S);return e.jsxs("div",{children:["房间： ",s.room,e.jsx(_e,{})]})},He=()=>{const[s,t]=d.useReducer(Te,V);return e.jsx(re,{locale:ae,children:e.jsx(S.Provider,{value:{state:s,dispatch:t},children:e.jsx(ue,{children:e.jsxs(v,{path:"/ndzy-todos/",element:e.jsx(Pe,{}),children:[e.jsx(v,{index:!0,element:e.jsx(Me,{})}),e.jsx(v,{path:"/ndzy-todos/rooms",element:e.jsx(Oe,{})}),e.jsx(v,{path:"/ndzy-todos/room",element:e.jsx(ze,{})}),e.jsx(v,{path:"*",element:e.jsx(Ye,{})})]})})})})};X.createRoot(document.getElementById("root")).render(e.jsx(J.StrictMode,{children:e.jsx(Q,{children:e.jsx(He,{})})}));