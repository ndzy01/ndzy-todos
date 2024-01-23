import{r as u,j as e,a as re}from"./react-Tf5a63N3.js";import{c as ne}from"./react-dom-L-9RVvDo.js";import{L as oe,B as le}from"./react-router-dom-XpqpMlL4.js";import{s as x,F as i,I as T,D as ie,S as v,A as de,B as h,a as C,P as N,b as ce,c as q,d as me,e as ue,T as G,L,f as pe,C as he,z as xe}from"./antd-66kLY75m.js";import{d as I}from"./dayjs-I44_pL56.js";import{a as ye}from"./axios-G2rPRu76.js";import{c as ge}from"./@wxcloud-VArnRXkh.js";import{l as fe}from"./lodash-MYjC_vaG.js";import{C as f}from"./crypto-js-cnNLbfBj.js";import{a as je,O as Ee,d as Te,e as D}from"./react-router-HlPHIle8.js";import{Z as be,m as Ce,c as Ie,u as Se}from"./@wangeditor-gzx6jVfq.js";import{u as Ae,a as we,b as Pe,c as ke,d as Y}from"./ahooks-XqKTiDhy.js";import{L as De}from"./rc-virtual-list-BXD3VVHE.js";import{D as Ue,O as ve}from"./@ant-design-G0262HYq.js";import"./@babel-fXcOJB-X.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-1q7uUoWE.js";import"./rc-util-44hGjeVP.js";import"./react-is-q81m-9gd.js";import"./classnames-RRvKwVVO.js";import"./rc-resize-observer-ck5JqIRG.js";import"./resize-observer-polyfill-B32NGzNS.js";import"./rc-motion-7vv53bTg.js";import"./rc-picker-xixrHE6j.js";import"./@rc-component-oibO48Qt.js";import"./rc-menu-Q3iJPZGu.js";import"./rc-overflow-VxRkfzAh.js";import"./rc-select-WtCpbyab.js";import"./@ctrl-_Y40OLZn.js";import"./rc-drawer-fZgySpmT.js";import"./rc-field-form-Rdl82lVd.js";import"./async-validator-BHjhHa7C.js";import"./rc-notification-7I1nwpoC.js";import"./rc-tooltip-dc6ms-Ot.js";import"./rc-table-PhNwxsIQ.js";import"./rc-tree-xZ6JQgv9.js";import"./rc-checkbox-bfzdVFQB.js";import"./rc-dropdown-QKhfUTW0.js";import"./rc-pagination-6SoAqjZS.js";import"./throttle-debounce-5p4B7Tol.js";import"./copy-to-clipboard-ds7YnVhZ.js";import"./toggle-selection-fekekO1r.js";import"./rc-textarea-Ly7unUNs.js";import"./rc-input-zn8sb5C_.js";import"./tslib-9i2l26Ba.js";import"./@emotion-folQEnri.js";import"./stylis-3miXmfPm.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const K={loading:!1,list:[],tags:[],records:[]},Ne=(t,a)=>{switch(a.type){case"UPDATE":return{...t,...a.payload||{}};default:return t}},b=u.createContext({state:K,dispatch:()=>{}});x.config({top:100,duration:3,maxCount:1});const Le=ge.initCloud(),W=Le.Cloud({identityless:!0,resourceAppid:"wxf18966ace3bbbd97",resourceEnv:"prod-3gjeiq7x1fbed11e"});W.init();localStorage.getItem("USE_LOCAL_SERVICE")||localStorage.setItem("USE_LOCAL_SERVICE","1");localStorage.getItem("BASE_URL")||localStorage.setItem("BASE_URL","http://localhost:3000");const _=localStorage.getItem("BASE_URL"),Re=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0",Fe=Re&&_?_:"https://ndzy-server.vercel.app",F=ye.create({baseURL:Fe,timeout:6e4,withCredentials:!1});F.interceptors.request.use(t=>{const a=localStorage.getItem("token");return a&&(t.headers={Authorization:"Basic "+a}),t},t=>{Promise.reject(t)});F.interceptors.response.use(t=>{const a=t.data;return t.data.status===1&&x.error(t.data.msg),t.data.status===0&&x.success(t.data.msg),t.data.status===2&&localStorage.setItem("token",""),a},t=>{let a="";if(t&&t.response)switch(t.response.status){case 302:a="接口重定向了！",x.error(a);break;case 400:a="参数不正确！",x.error(a);break;case 401:break;case 403:a="您没有权限操作！",x.error(a);break;case 404:a=`请求地址出错: ${t.response.config.url}`,x.error(a);break;case 408:a="请求超时！",x.error(a);break;case 409:a="系统已存在相同数据！",x.error(a);break;case 500:a="服务器内部错误！",x.error(a);break;case 501:a="服务未实现！",x.error(a);break;case 502:a="网关错误！",x.error(a);break;case 503:a="服务不可用！",x.error(a);break;case 504:a="服务暂时无法访问，请稍后再试！",x.error(a);break;case 505:a="HTTP 版本不受支持！",x.error(a);break;default:a="异常问题，请联系管理员！",x.error(a);break}return Promise.reject(a)});const Be=t=>Object.keys(t).map(a=>t[a]?`${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`:"").filter(a=>a).join("&"),Oe=t=>{const{url:a="",data:s={},params:o={}}=t;let n=a;const r=localStorage.getItem("token"),c={"X-WX-SERVICE":"ndzy-service"};return r&&(c.Authorization="Basic "+r),t.method==="GET"&&!fe.isEmpty(o)&&(n+="?"+Be(o)),new Promise((p,m)=>{W.callContainer({...t,config:{env:"prod-3gjeiq7x1fbed11e"},path:n,header:c,method:t.method,data:s}).then(y=>{y.data.status===1&&x.error(y.data.msg),y.data.status===0&&x.success(y.data.msg),y.data.status===2&&localStorage.setItem("token",""),p(y.data)}).catch(()=>{m("网络错误")})})},Me=t=>t&&t<I().endOf("day"),X=()=>{let t=new Date().getTime();return typeof performance<"u"&&typeof performance.now=="function"&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const o=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(s=="x"?o:o&3|8).toString(16)})},H=()=>{let t="";for(let a=0;a<8;a++)t+=X().replace(/-/g,"");return t},V=(t,a,s)=>{const o=f.enc.Utf8.parse(a),n=f.enc.Utf8.parse(s),r=f.enc.Hex.parse(t),c=f.enc.Base64.stringify(r);return f.AES.decrypt(c,o,{iv:n,mode:f.mode.CBC,padding:f.pad.Pkcs7,hasher:f.algo.SHA256}).toString(f.enc.Utf8).toString()},U=t=>{const a=H(),s=H(),o=f.enc.Utf8.parse(a),n=f.enc.Utf8.parse(s),r=f.enc.Utf8.parse(t),c=f.AES.encrypt(r,o,{iv:n,mode:f.mode.CBC,padding:f.pad.Pkcs7,hasher:f.algo.SHA256});return{keyBase:a,ivBase:s,text:c.ciphertext.toString().toUpperCase()}},B={labelCol:{xs:{span:6},sm:{span:6}},wrapperCol:{xs:{span:18},sm:{span:18}}},O={wrapperCol:{span:14,offset:2}},S=()=>{const t=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0"?F:Oe,a=je(),{dispatch:s}=u.useContext(b),[o,n]=u.useState(""),r=(l,d={})=>{a(l,{...d})},c=()=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/users/loginInfo",method:"GET"}).then(l=>{s({type:"UPDATE",payload:{user:l.data[0],loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},p=()=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/tags",method:"GET"}).then(l=>{s({type:"UPDATE",payload:{tags:l.data,loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},m=(l={})=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/todos",method:"GET",params:l}).then(d=>{s({type:"UPDATE",payload:{list:d.data.map(j=>({...j,detail:V(j.detail,j.keyBase,j.ivBase)})),loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},y=(l,d)=>{s({type:"UPDATE",payload:{loading:!0}});const{text:j,keyBase:A,ivBase:P}=U(l.detail);t({url:"/todos",method:"POST",data:{...l,deadline:I(l.deadline).format("YYYY-MM-DD"),operationSource:"h5",detail:j,keyBase:A,ivBase:P}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),m(),d&&d()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},M=(l,d,j)=>{s({type:"UPDATE",payload:{loading:!0}});const{text:A,keyBase:P,ivBase:se}=U(l.detail);t({url:`/todos/${d.id}`,method:"PATCH",data:{name:l.name,detail:A,keyBase:P,ivBase:se,deadline:I(l.deadline).format("YYYY-MM-DD"),tagId:l.tagId}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),m(),j&&j()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},g=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"PATCH",data:{isFinish:!0}}).then(()=>{m()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},E=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"DELETE",data:{isFinish:!0}}).then(()=>{m()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},Z=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"PATCH",data:{isFinish:!1}}).then(()=>{m()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},J=()=>{localStorage.setItem("token",""),r("/ndzy-todos/"),window.location.reload()},Q=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/users/login",method:"POST",data:l}).then(d=>{s({type:"UPDATE",payload:{loading:!1}}),d&&d.data&&d.data.token&&(localStorage.setItem("token",d.data.token),r("/ndzy-todos/"),window.location.reload())}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},ee=(l,d)=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/users/register",method:"POST",data:l}).then(j=>{s({type:"UPDATE",payload:{loading:!1}}),j.status===0&&d&&d()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},te=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/tags/${l}`,method:"DELETE"}).then(()=>{p()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},ae=()=>{o&&(s({type:"UPDATE",payload:{loading:!0}}),t({url:"/tags",method:"POST",data:{name:o}}).then(()=>{n(""),p()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})}))},k=()=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/records",method:"GET"}).then(l=>{s({type:"UPDATE",payload:{records:l.data.map(d=>({...d,txt:V(d.txt,d.keyBase,d.ivBase)})),loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})};return{inputValue:o,initUser:c,initTags:p,createTodo:y,editTodo:M,goPage:r,getAllTodo:m,finishTodo:g,delTodo:E,recoverTodo:Z,signOut:J,login:Q,register:ee,delTag:te,handleCreateTag:ae,setInputValue:n,switchService:()=>{localStorage.getItem("USE_LOCAL_SERVICE")==="0"?localStorage.setItem("USE_LOCAL_SERVICE","1"):localStorage.setItem("USE_LOCAL_SERVICE","0"),window.location.reload()},getAllRecord:k,addRecord:l=>{s({type:"UPDATE",payload:{loading:!0}});const{text:d,keyBase:j,ivBase:A}=U(l.txt);t({url:"/records",method:"POST",data:{...l,txt:d,keyBase:j,ivBase:A}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),k()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},updateRecord:(l,d)=>{s({type:"UPDATE",payload:{loading:!0}});const{text:j,keyBase:A,ivBase:P}=U(d.txt);t({url:`/records/${l}`,method:"PATCH",data:{name:d.name,txt:j,keyBase:A,ivBase:P,txtInfo:d.txtInfo}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),k()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},delRecord:l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/records/${l}`,method:"DELETE"}).then(()=>{k()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})}}};be.registerModule(Ce);function Ye({value:t,onChange:a}){const[s,o]=u.useState(null),[n,r]=u.useState("");u.useEffect(()=>{r(t)},[t]);const c={},p={placeholder:"请输入内容..."};return u.useEffect(()=>()=>{s!=null&&(s.destroy(),o(null))},[s]),e.jsx(e.Fragment,{children:e.jsxs("div",{style:{border:"1px solid #ccc",zIndex:100},children:[e.jsx(Ie,{editor:s,defaultConfig:c,mode:"default",style:{borderBottom:"1px solid #ccc"}}),e.jsx(Se,{defaultConfig:p,value:n,onCreated:o,onChange:m=>{r(m.getHtml()),a(m.getHtml())},mode:"default",style:{overflowY:"hidden",minHeight:330}})]})})}const R=t=>{const{createTodo:a,editTodo:s}=S(),{state:o}=u.useContext(b),n=r=>t.id?s(r,{id:t.id},t.onClose):a(r,t.onClose);return e.jsxs(i,{initialValues:{name:t.name,deadline:t.deadline?I(t.deadline):I(),detail:t.detail,tagId:t.tagId},preserve:!1,name:"edit",onFinish:n,scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"name",label:"名称",rules:[{required:!0,message:"名称不能为空"}],children:e.jsx(T.TextArea,{rows:1})}),e.jsx(i.Item,{name:"deadline",label:"终止时间",rules:[{required:!0,message:"终止时间不能为空"}],children:e.jsx(ie,{className:"w-100",format:"YYYY-MM-DD",disabledDate:Me})}),e.jsx(i.Item,{name:"detail",label:"详情",rules:[{required:!0,message:"详情不能为空"}],children:e.jsx(Ye,{})}),e.jsx(i.Item,{name:"tagId",label:"标签",rules:[{required:!0,message:"请选择一个标签"}],children:e.jsx(v,{options:o.tags.map(r=>({label:`${r.name}-(${r.userName})`,value:r.id}))})}),e.jsx(i.Item,{children:e.jsx(de,{offsetBottom:16,children:e.jsx(h,{loading:o.loading,type:"primary",htmlType:"submit",children:t.id?"保存":"创建"})})})]})},_e=()=>{const t=u.useRef(null),a=u.useRef(null),{inputValue:s,delTag:o,handleCreateTag:n,setInputValue:r}=S(),{state:c}=u.useContext(b),[p]=Ae(c.tags,{containerTarget:t,wrapperTarget:a,itemHeight:60,overscan:10});return e.jsxs("div",{children:[e.jsxs(C.Compact,{className:"w-100",children:[e.jsx(T,{placeholder:"请输入",value:s,onChange:m=>r(m.target.value)}),e.jsx(h,{loading:c.loading,type:"primary",onClick:n,children:"添加"})]}),e.jsx("div",{ref:t,style:{height:window.innerHeight/2,overflow:"auto",marginTop:16},children:e.jsx("div",{ref:a,children:p.map(m=>{var y;return e.jsx("div",{style:{height:52,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #e8e8e8",marginBottom:8},children:e.jsxs("div",{className:"between w-100",children:[e.jsxs("div",{className:"between",children:[m.data.name,((y=c.user)==null?void 0:y.role)==="0"&&e.jsx(N,{title:"删除将无法恢复,确定删除?",onConfirm:()=>o(m.data.id),children:e.jsx(h,{children:" 删除"})})]}),e.jsx("div",{children:e.jsx(C,{children:e.jsxs("span",{children:["创建人：",m.data.userName||"--"]})})})]})},m.data.id)})})})]})},He=({children:t,...a})=>u.isValidElement(t)?u.cloneElement(t,{...a}):t,w=({title:t,btnName:a,children:s,...o})=>{const[n,r]=we({open:!1});return e.jsxs(e.Fragment,{children:[e.jsx(h,{type:"link",onClick:()=>r({open:!0}),children:a}),e.jsx(ce,{destroyOnClose:!0,open:n.open,title:t,placement:"right",width:"100%",onClose:()=>r({open:!1}),children:e.jsx(He,{onClose:()=>r({open:!1}),...o,children:n&&s})})]})},Ve=()=>{const{login:t}=S(),{state:a}=u.useContext(b);return e.jsxs(i,{...B,name:"login",onFinish:t,scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"mobile",label:"手机号",rules:[{required:!0,message:"请输入你的手机号!"}],children:e.jsx(T,{className:"w-100"})}),e.jsx(i.Item,{name:"password",label:"密码",rules:[{required:!0,message:"请输入密码!"}],hasFeedback:!0,children:e.jsx(T.Password,{})}),e.jsx(i.Item,{...O,children:e.jsx(h,{loading:a.loading,type:"primary",htmlType:"submit",children:"登录"})})]})},ze=({onClose:t})=>{const{register:a}=S(),{state:s}=u.useContext(b);return e.jsxs(i,{...B,name:"register",onFinish:o=>a(o,t),scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"nickname",label:"昵称",rules:[{required:!0,message:"请输入你的昵称!",whitespace:!0}],children:e.jsx(T,{})}),e.jsx(i.Item,{name:"mobile",label:"手机号",rules:[{required:!0,message:"请输入你的手机号!"}],children:e.jsx(T,{className:"w-100"})}),e.jsx(i.Item,{name:"password",label:"密码",rules:[{required:!0,message:"请输入密码!"}],hasFeedback:!0,children:e.jsx(T.Password,{})}),e.jsx(i.Item,{name:"confirm",label:"确认密码",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"请再次输入密码!"},({getFieldValue:o})=>({validator(n,r){return!r||o("password")===r?Promise.resolve():Promise.reject(new Error("两次密码不匹配!"))}})],children:e.jsx(T.Password,{})}),e.jsx(i.Item,{...O,children:e.jsx(h,{loading:s.loading,type:"primary",htmlType:"submit",children:"注册"})})]})},{Header:$e,Content:qe}=q,Ge=()=>{const{signOut:t,switchService:a,goPage:s}=S(),{state:o}=u.useContext(b),n=[{key:"0",label:e.jsx(w,{title:"登陆",btnName:"登陆",children:e.jsx(Ve,{})})},{key:"1",label:e.jsx(w,{title:"注册",btnName:"注册",children:e.jsx(ze,{})})},{key:"2",label:e.jsx(h,{type:"link",onClick:t,children:"登出"})},{key:"3",label:e.jsx(h,{type:"link",onClick:a,children:localStorage.getItem("USE_LOCAL_SERVICE")==="0"?"本地环境":"线上环境"})},{key:"4",label:e.jsx(h,{type:"link",onClick:()=>s("/ndzy-todos/records"),children:"records"})}];return e.jsxs(q,{className:"ndzy-layout",children:[e.jsx($e,{className:"ndzy-header",children:e.jsxs(C,{className:"mb-16",children:[o.user?e.jsx("div",{style:{minWidth:33},className:"sky-blue center",children:o.user.name||o.user.nickname}):e.jsx("div",{style:{minWidth:33},className:"sky-blue center",children:"游客"}),e.jsx(h,{type:"link",onClick:()=>s("/ndzy-todos"),children:"home"}),e.jsx(w,{title:"标签",btnName:"标签",children:e.jsx(_e,{})}),e.jsx(w,{title:"新建",btnName:"新建",children:e.jsx(R,{})}),e.jsx(me,{menu:{items:n},children:e.jsx("a",{onClick:r=>r.preventDefault(),children:"其他"})})]})}),e.jsx(qe,{children:e.jsx("div",{className:"layout-content p-16",children:e.jsx(Ee,{})})})]})},Ke=({value:t})=>{const a=X();return e.jsx("div",{style:{padding:"0 8px"},id:`preview-${a}`,className:"ndzy-preview",dangerouslySetInnerHTML:{__html:t}})},z=t=>e.jsxs(w,{title:"查看",btnName:"查看",children:[e.jsx(Ke,{value:t.detail}),e.jsx("div",{children:e.jsxs(C,{children:[e.jsxs("span",{style:{color:"blue"},children:["创建人：",t.userName||"--"]}),e.jsxs("span",{style:{color:"green"},children:["标签：",t.tagName||"--"]}),e.jsxs("span",{style:{color:"red"},children:["终止日期：",I(t.deadline).format("YYYY-MM-DD")]})]})}),e.jsx("div",{children:e.jsxs(C,{children:[e.jsxs("span",{children:["创建日期：",I(t.createdAt).subtract(8,"h").format("YYYY-MM-DD")]}),e.jsxs("span",{children:["更新日期：",I(t.updatedAt).subtract(8,"h").format("YYYY-MM-DD")]})]})})]}),We=({onClose:t})=>{const[a,s]=u.useState(!1),{getAllTodo:o}=S(),{state:n}=u.useContext(b);return e.jsxs(i,{initialValues:{operationSource:"h5",isFinish:"0"},...B,name:"search",onFinish:r=>{Object.keys(r).map(c=>{r[c]||delete r[c]}),o(r),t()},scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"name",label:"名称",children:e.jsx(T,{className:"w-100",allowClear:!0})}),e.jsxs("div",{style:{display:a?"block":"none"},children:[e.jsx(i.Item,{name:"tagId",label:"标签",children:e.jsx(v,{className:"w-100",options:n.tags.map(r=>({label:`${r.name}-(${r.userName})`,value:r.id}))})}),e.jsx(i.Item,{name:"operationSource",label:"来源",children:e.jsx(v,{className:"w-100",options:[{label:"h5",value:"h5"},{label:"微信",value:"wx"}]})}),e.jsx(i.Item,{name:"isFinish",label:"状态",children:e.jsx(v,{className:"w-100",options:[{label:"处理中",value:"0"},{label:"已完成",value:"1"}]})})]}),e.jsx(i.Item,{...O,style:{display:"flex",justifyContent:"end"},children:e.jsxs(C,{style:{width:240},children:[e.jsx(h,{loading:n.loading,type:"primary",htmlType:"submit",children:"搜索"}),e.jsx(h,{type:"link",onClick:()=>o(),children:"重置"}),e.jsxs("a",{style:{fontSize:12},onClick:()=>{s(!a)},children:[e.jsx(Ue,{rotate:a?180:0}),a?"收起":"展开"]})]})})]})},Xe=()=>{const t=u.useRef(null),a=Pe(t),{state:s}=u.useContext(b),{initUser:o,initTags:n,getAllTodo:r,finishTodo:c,delTodo:p,recoverTodo:m}=S();ke(()=>{o(),n(),r()});const y=[{title:"名称",dataIndex:"name",width:80},{title:"进度",dataIndex:"deadline",width:100,render:(g,E)=>{if(Number(E.isFinish)===0)return e.jsx("span",{style:{color:"red"},children:"处理中"});if(Number(E.isFinish)===1)return e.jsx("span",{style:{color:"green"},children:"已完成"})}},{title:"截止日期",dataIndex:"deadline",width:100},{title:"标签",dataIndex:"tagName",width:100},{title:"用户",dataIndex:"userName",width:100},{title:"创建时间",dataIndex:"createdAt",width:100},{title:"更新时间",dataIndex:"updatedAt",width:100},{title:"操作",width:120,fixed:"right",render:(g,E)=>e.jsxs(C,{children:[e.jsx(z,{...E}),Number(E.isFinish)===0?e.jsxs(C,{children:[e.jsx(w,{title:"编辑",btnName:"编辑",...E,children:e.jsx(R,{})}),e.jsx(h,{type:"link",onClick:()=>c(E),children:"完成"})]}):Number(E.isFinish)===1?e.jsxs(C,{children:[e.jsx(h,{type:"link",onClick:()=>m(E),children:"恢复"}),e.jsx(N,{title:"删除将无法恢复,确定删除?",onConfirm:()=>p(E),children:e.jsx(h,{type:"link",children:" 删除"})})]}):null]})}];return e.jsxs("div",{ref:t,children:[e.jsx("div",{className:"center",children:s.loading&&e.jsx(ue,{})}),e.jsx(We,{}),Number(a==null?void 0:a.width)>800?e.jsx(G,{virtual:!0,columns:y,scroll:{x:900,y:600},rowKey:"id",dataSource:s.list,pagination:!1,locale:{emptyText:e.jsx("div",{className:"center",children:"暂无待办事项"})}}):e.jsx(L,{children:e.jsx(De,{data:s.list,height:400,itemHeight:40,itemKey:"email",children:g=>e.jsxs(L.Item,{actions:[e.jsx(z,{...g}),...Number(g.isFinish)===0?[e.jsx(w,{title:"编辑",btnName:"编辑",...g,children:e.jsx(R,{})}),e.jsx(h,{type:"link",onClick:()=>c(g),children:"完成"})]:[e.jsx(h,{type:"link",onClick:()=>m(g),children:"恢复"}),e.jsx(N,{title:"删除将无法恢复,确定删除?",onConfirm:()=>p(g),children:e.jsx(h,{type:"link",children:" 删除"})})],...Number(g.isFinish)===0?[]:[]],children:[e.jsx(L.Item.Meta,{title:g.name,description:g.deadline}),e.jsx("div",{children:Number(g.isFinish)===0&&e.jsx("span",{style:{color:"red"},children:"处理中"})}),e.jsx("div",{children:Number(g.isFinish)===1&&e.jsx("span",{style:{color:"green"},children:"已完成"})})]},g.id)})})]})},Ze=()=>e.jsx("div",{className:"center",children:e.jsxs("div",{children:[e.jsx("h2",{children:"页面不存在"}),e.jsx("p",{children:e.jsx(oe,{to:"/",children:"返回首页"})})]})}),{Paragraph:$}=pe,Je=()=>{const[t]=i.useForm(),{getAllRecord:a,addRecord:s,delRecord:o}=S(),{state:n}=u.useContext(b);Y(()=>{a()},[]),Y(()=>{t.setFieldsValue({name:"",txt:"",txtInfo:""})},[n.records]);const r=p=>{p&&s(p)},c=[{title:"名称",dataIndex:"name",width:60,render:p=>e.jsx($,{copyable:!0,children:p})},{title:"txt",dataIndex:"txt",width:120,render:p=>e.jsx($,{copyable:!0,children:p})},{title:"描述",dataIndex:"txtInfo",width:20},{title:"操作",width:20,fixed:"right",render:(p,m)=>{var y;return((y=n.user)==null?void 0:y.role)==="0"&&e.jsx(N,{title:"删除将无法恢复,确定删除?",onConfirm:()=>o(m.id),children:e.jsx(ve,{})})}}];return e.jsxs("div",{children:[e.jsxs(i,{variant:"filled",style:{maxWidth:600},onFinish:r,form:t,children:[e.jsx(i.Item,{label:"name",name:"name",rules:[{required:!0,message:"不能为空"}],children:e.jsx(T,{placeholder:"请输入"})}),e.jsx(i.Item,{label:"txt",name:"txt",rules:[{required:!0,message:"不能为空"}],children:e.jsx(T,{placeholder:"请输入"})}),e.jsx(i.Item,{label:"txtInfo",name:"txtInfo",children:e.jsx(T,{placeholder:"请输入"})}),e.jsx(i.Item,{wrapperCol:{offset:6,span:16},children:e.jsx(h,{type:"primary",htmlType:"submit",loading:n.loading,children:"添加"})})]}),e.jsx(G,{virtual:!0,columns:c,scroll:{y:600},rowKey:"id",dataSource:n.records,pagination:!1,locale:{emptyText:e.jsx("div",{className:"center",children:"暂无待办事项"})}})]})},Qe=()=>{const[t,a]=u.useReducer(Ne,K);return e.jsx(he,{locale:xe,children:e.jsx(b.Provider,{value:{state:t,dispatch:a},children:e.jsx(Te,{children:e.jsxs(D,{path:"/ndzy-todos/",element:e.jsx(Ge,{}),children:[e.jsx(D,{index:!0,element:e.jsx(Xe,{})}),e.jsx(D,{path:"/ndzy-todos/records",element:e.jsx(Je,{})}),e.jsx(D,{path:"*",element:e.jsx(Ze,{})})]})})})})};ne.createRoot(document.getElementById("root")).render(e.jsx(re.StrictMode,{children:e.jsx(le,{children:e.jsx(Qe,{})})}));
