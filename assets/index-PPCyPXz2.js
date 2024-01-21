import{r as h,j as e,a as ae}from"./react-Tf5a63N3.js";import{c as se}from"./react-dom-L-9RVvDo.js";import{L as re,B as oe}from"./react-router-dom-XpqpMlL4.js";import{s as x,F as i,I as j,D as ne,S as D,A as le,B as g,a as T,P as k,b as ie,c as _,d as de,e as ce,T as M,f as me,C as ue,z as pe}from"./antd-KgIJid94.js";import{d as b}from"./dayjs-I44_pL56.js";import{a as he}from"./axios-G2rPRu76.js";import{c as xe}from"./@wxcloud-VArnRXkh.js";import{l as ye}from"./lodash-MYjC_vaG.js";import{C as y}from"./crypto-js-cnNLbfBj.js";import{a as ge,O as fe,d as je,e as w}from"./react-router-HlPHIle8.js";import{Z as Ee,m as Te,c as be,u as Ce}from"./@wangeditor-gzx6jVfq.js";import{u as Ie,a as Ae,b as Se,c as L}from"./ahooks-l02ZQawt.js";import{O as Pe}from"./@ant-design-oGzNwhgm.js";import"./@babel-fXcOJB-X.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-1q7uUoWE.js";import"./rc-util-44hGjeVP.js";import"./react-is-q81m-9gd.js";import"./classnames-RRvKwVVO.js";import"./rc-resize-observer-ck5JqIRG.js";import"./resize-observer-polyfill-B32NGzNS.js";import"./rc-motion-7vv53bTg.js";import"./rc-picker-xixrHE6j.js";import"./@rc-component-oibO48Qt.js";import"./rc-menu-Q3iJPZGu.js";import"./rc-overflow-VxRkfzAh.js";import"./rc-select-WtCpbyab.js";import"./rc-virtual-list-BXD3VVHE.js";import"./@ctrl-_Y40OLZn.js";import"./rc-drawer-fZgySpmT.js";import"./rc-field-form-Rdl82lVd.js";import"./async-validator-BHjhHa7C.js";import"./rc-notification-7I1nwpoC.js";import"./rc-tooltip-dc6ms-Ot.js";import"./rc-table-PhNwxsIQ.js";import"./rc-tree-xZ6JQgv9.js";import"./rc-checkbox-bfzdVFQB.js";import"./rc-dropdown-QKhfUTW0.js";import"./rc-pagination-6SoAqjZS.js";import"./throttle-debounce-5p4B7Tol.js";import"./copy-to-clipboard-ds7YnVhZ.js";import"./toggle-selection-fekekO1r.js";import"./rc-textarea-Ly7unUNs.js";import"./rc-input-zn8sb5C_.js";import"./tslib-9i2l26Ba.js";import"./@emotion-folQEnri.js";import"./stylis-3miXmfPm.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const V={loading:!1,list:[],tags:[],records:[]},we=(t,a)=>{switch(a.type){case"UPDATE":return{...t,...a.payload||{}};default:return t}},E=h.createContext({state:V,dispatch:()=>{}});x.config({top:100,duration:3,maxCount:1});localStorage.getItem("USE_LOCAL_SERVICE")||localStorage.setItem("USE_LOCAL_SERVICE","1");localStorage.getItem("BASE_URL")||localStorage.setItem("BASE_URL","http://localhost:3000");const B=localStorage.getItem("BASE_URL"),Ue=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0",De=Ue&&B?B:"https://ndzy-server.vercel.app",v=he.create({baseURL:De,timeout:6e4,withCredentials:!1});v.interceptors.request.use(t=>{const a=localStorage.getItem("token");return a&&(t.headers={Authorization:"Basic "+a}),t},t=>{Promise.reject(t)});v.interceptors.response.use(t=>{const a=t.data;return t.data.status===1&&x.error(t.data.msg),t.data.status===0&&x.success(t.data.msg),t.data.status===2&&localStorage.setItem("token",""),a},t=>{let a="";if(t&&t.response)switch(t.response.status){case 302:a="接口重定向了！",x.error(a);break;case 400:a="参数不正确！",x.error(a);break;case 401:break;case 403:a="您没有权限操作！",x.error(a);break;case 404:a=`请求地址出错: ${t.response.config.url}`,x.error(a);break;case 408:a="请求超时！",x.error(a);break;case 409:a="系统已存在相同数据！",x.error(a);break;case 500:a="服务器内部错误！",x.error(a);break;case 501:a="服务未实现！",x.error(a);break;case 502:a="网关错误！",x.error(a);break;case 503:a="服务不可用！",x.error(a);break;case 504:a="服务暂时无法访问，请稍后再试！",x.error(a);break;case 505:a="HTTP 版本不受支持！",x.error(a);break;default:a="异常问题，请联系管理员！",x.error(a);break}return Promise.reject(a)});const ke=t=>Object.keys(t).map(a=>t[a]?`${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`:"").filter(a=>a).join("&"),ve=xe.initCloud(),H=ve.Cloud({identityless:!0,resourceAppid:"wxf18966ace3bbbd97",resourceEnv:"prod-3gjeiq7x1fbed11e"});H.init();const Ne=t=>{const{url:a="",data:s={},params:n={}}=t;let o=a;const r=localStorage.getItem("token"),m={"X-WX-SERVICE":"ndzy-service"};return r&&(m.Authorization="Basic "+r),t.method==="GET"&&!ye.isEmpty(n)&&(o+="?"+ke(n)),new Promise((p,u)=>{H.callContainer({...t,config:{env:"prod-3gjeiq7x1fbed11e"},path:o,header:m,method:t.method,data:s}).then(c=>{c.data.status===1&&x.error(c.data.msg),c.data.status===0&&x.success(c.data.msg),c.data.status===2&&localStorage.setItem("token",""),p(c.data)}).catch(()=>{u("网络错误")})})},Re=t=>t&&t<b().endOf("day"),q=()=>{let t=new Date().getTime();return typeof performance<"u"&&typeof performance.now=="function"&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const n=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(s=="x"?n:n&3|8).toString(16)})},F=()=>{let t="";for(let a=0;a<8;a++)t+=q().replace(/-/g,"");return t},O=(t,a,s)=>{const n=y.enc.Utf8.parse(a),o=y.enc.Utf8.parse(s),r=y.enc.Hex.parse(t),m=y.enc.Base64.stringify(r);return y.AES.decrypt(m,n,{iv:o,mode:y.mode.CBC,padding:y.pad.Pkcs7,hasher:y.algo.SHA256}).toString(y.enc.Utf8).toString()},U=t=>{const a=F(),s=F(),n=y.enc.Utf8.parse(a),o=y.enc.Utf8.parse(s),r=y.enc.Utf8.parse(t),m=y.AES.encrypt(r,n,{iv:o,mode:y.mode.CBC,padding:y.pad.Pkcs7,hasher:y.algo.SHA256});return{keyBase:a,ivBase:s,text:m.ciphertext.toString().toUpperCase()}},N={labelCol:{xs:{span:6},sm:{span:6}},wrapperCol:{xs:{span:18},sm:{span:18}}},R={wrapperCol:{span:14,offset:2}},C=()=>{const t=(localStorage.getItem("USE_LOCAL_SERVICE")||"0")==="0"?v:Ne,a=ge(),{dispatch:s}=h.useContext(E),[n,o]=h.useState(""),r=(l,d={})=>{a(l,{...d})},m=()=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/users/loginInfo",method:"GET"}).then(l=>{s({type:"UPDATE",payload:{user:l.data[0],loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},p=()=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/tags",method:"GET"}).then(l=>{s({type:"UPDATE",payload:{tags:l.data,loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},u=(l={})=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/todos",method:"GET",params:l}).then(d=>{s({type:"UPDATE",payload:{list:d.data.map(f=>({...f,detail:O(f.detail,f.keyBase,f.ivBase)})),loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},c=(l,d)=>{s({type:"UPDATE",payload:{loading:!0}});const{text:f,keyBase:I,ivBase:S}=U(l.detail);t({url:"/todos",method:"POST",data:{...l,deadline:b(l.deadline).format("YYYY-MM-DD"),operationSource:"h5",detail:f,keyBase:I,ivBase:S}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),u(),d&&d()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},$=(l,d,f)=>{s({type:"UPDATE",payload:{loading:!0}});const{text:I,keyBase:S,ivBase:te}=U(l.detail);t({url:`/todos/${d.id}`,method:"PATCH",data:{name:l.name,detail:I,keyBase:S,ivBase:te,deadline:b(l.deadline).format("YYYY-MM-DD"),tagId:l.tagId}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),u(),f&&f()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},G=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"PATCH",data:{isFinish:!0}}).then(()=>{u()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},K=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"DELETE",data:{isFinish:!0}}).then(()=>{u()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},W=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/todos/${l.id}`,method:"PATCH",data:{isFinish:!1}}).then(()=>{u()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},X=()=>{localStorage.setItem("token",""),r("/ndzy-todos/"),window.location.reload()},Z=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/users/login",method:"POST",data:l}).then(d=>{s({type:"UPDATE",payload:{loading:!1}}),d&&d.data&&d.data.token&&(localStorage.setItem("token",d.data.token),r("/ndzy-todos/"),window.location.reload())}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},J=(l,d)=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/users/register",method:"POST",data:l}).then(f=>{s({type:"UPDATE",payload:{loading:!1}}),f.status===0&&d&&d()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},Q=l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/tags/${l}`,method:"DELETE"}).then(()=>{p()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},ee=()=>{n&&(s({type:"UPDATE",payload:{loading:!0}}),t({url:"/tags",method:"POST",data:{name:n}}).then(()=>{o(""),p()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})}))},P=()=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:"/records",method:"GET"}).then(l=>{s({type:"UPDATE",payload:{records:l.data.map(d=>({...d,txt:O(d.txt,d.keyBase,d.ivBase)})),loading:!1}})}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})};return{inputValue:n,initUser:m,initTags:p,createTodo:c,editTodo:$,goPage:r,getAllTodo:u,finishTodo:G,delTodo:K,recoverTodo:W,signOut:X,login:Z,register:J,delTag:Q,handleCreateTag:ee,setInputValue:o,switchService:()=>{localStorage.getItem("USE_LOCAL_SERVICE")==="0"?localStorage.setItem("USE_LOCAL_SERVICE","1"):localStorage.setItem("USE_LOCAL_SERVICE","0"),window.location.reload()},getAllRecord:P,addRecord:l=>{s({type:"UPDATE",payload:{loading:!0}});const{text:d,keyBase:f,ivBase:I}=U(l.txt);t({url:"/records",method:"POST",data:{...l,txt:d,keyBase:f,ivBase:I}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),P()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},updateRecord:(l,d)=>{s({type:"UPDATE",payload:{loading:!0}});const{text:f,keyBase:I,ivBase:S}=U(d.txt);t({url:`/records/${l}`,method:"PATCH",data:{name:d.name,txt:f,keyBase:I,ivBase:S,txtInfo:d.txtInfo}}).then(()=>{s({type:"UPDATE",payload:{loading:!1}}),P()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})},delRecord:l=>{s({type:"UPDATE",payload:{loading:!0}}),t({url:`/records/${l}`,method:"DELETE"}).then(()=>{P()}).catch(()=>{s({type:"UPDATE",payload:{loading:!1}})})}}};Ee.registerModule(Te);function Le({value:t,onChange:a}){const[s,n]=h.useState(null),[o,r]=h.useState("");h.useEffect(()=>{r(t)},[t]);const m={},p={placeholder:"请输入内容..."};return h.useEffect(()=>()=>{s!=null&&(s.destroy(),n(null))},[s]),e.jsx(e.Fragment,{children:e.jsxs("div",{style:{border:"1px solid #ccc",zIndex:100},children:[e.jsx(be,{editor:s,defaultConfig:m,mode:"default",style:{borderBottom:"1px solid #ccc"}}),e.jsx(Ce,{defaultConfig:p,value:o,onCreated:n,onChange:u=>{r(u.getHtml()),a(u.getHtml())},mode:"default",style:{overflowY:"hidden",minHeight:330}})]})})}const z=t=>{const{createTodo:a,editTodo:s}=C(),{state:n}=h.useContext(E),o=r=>t.id?s(r,{id:t.id},t.onClose):a(r,t.onClose);return e.jsxs(i,{initialValues:{name:t.name,deadline:t.deadline?b(t.deadline):b(),detail:t.detail,tagId:t.tagId},preserve:!1,name:"edit",onFinish:o,scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"name",label:"名称",rules:[{required:!0,message:"名称不能为空"}],children:e.jsx(j.TextArea,{rows:1})}),e.jsx(i.Item,{name:"deadline",label:"终止时间",rules:[{required:!0,message:"终止时间不能为空"}],children:e.jsx(ne,{className:"w-100",format:"YYYY-MM-DD",disabledDate:Re})}),e.jsx(i.Item,{name:"detail",label:"详情",rules:[{required:!0,message:"详情不能为空"}],children:e.jsx(Le,{})}),e.jsx(i.Item,{name:"tagId",label:"标签",rules:[{required:!0,message:"请选择一个标签"}],children:e.jsx(D,{options:n.tags.map(r=>({label:`${r.name}-(${r.userName})`,value:r.id}))})}),e.jsx(i.Item,{children:e.jsx(le,{offsetBottom:16,children:e.jsx(g,{loading:n.loading,type:"primary",htmlType:"submit",children:t.id?"保存":"创建"})})})]})},Be=()=>{const t=h.useRef(null),a=h.useRef(null),{inputValue:s,delTag:n,handleCreateTag:o,setInputValue:r}=C(),{state:m}=h.useContext(E),[p]=Ie(m.tags,{containerTarget:t,wrapperTarget:a,itemHeight:60,overscan:10});return e.jsxs("div",{children:[e.jsxs(T.Compact,{className:"w-100",children:[e.jsx(j,{placeholder:"请输入",value:s,onChange:u=>r(u.target.value)}),e.jsx(g,{loading:m.loading,type:"primary",onClick:o,children:"添加"})]}),e.jsx("div",{ref:t,style:{height:window.innerHeight/2,overflow:"auto",marginTop:16},children:e.jsx("div",{ref:a,children:p.map(u=>{var c;return e.jsx("div",{style:{height:52,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #e8e8e8",marginBottom:8},children:e.jsxs("div",{className:"between w-100",children:[e.jsxs("div",{className:"between",children:[u.data.name,((c=m.user)==null?void 0:c.role)==="0"&&e.jsx(k,{title:"删除将无法恢复,确定删除?",onConfirm:()=>n(u.data.id),children:e.jsx(g,{children:" 删除"})})]}),e.jsx("div",{children:e.jsx(T,{children:e.jsxs("span",{children:["创建人：",u.data.userName||"--"]})})})]})},u.data.id)})})})]})},Fe=({children:t,...a})=>h.isValidElement(t)?h.cloneElement(t,{...a}):t,A=({title:t,btnName:a,children:s,...n})=>{const[o,r]=Ae({open:!1});return e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"link",onClick:()=>r({open:!0}),children:a}),e.jsx(ie,{destroyOnClose:!0,open:o.open,title:t,placement:"right",width:"100%",onClose:()=>r({open:!1}),children:e.jsx(Fe,{onClose:()=>r({open:!1}),...n,children:o&&s})})]})},Oe=()=>{const{login:t}=C(),{state:a}=h.useContext(E);return e.jsxs(i,{...N,name:"login",onFinish:t,scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"mobile",label:"手机号",rules:[{required:!0,message:"请输入你的手机号!"}],children:e.jsx(j,{className:"w-100"})}),e.jsx(i.Item,{name:"password",label:"密码",rules:[{required:!0,message:"请输入密码!"}],hasFeedback:!0,children:e.jsx(j.Password,{})}),e.jsx(i.Item,{...R,children:e.jsx(g,{loading:a.loading,type:"primary",htmlType:"submit",children:"登录"})})]})},Ye=({onClose:t})=>{const{register:a}=C(),{state:s}=h.useContext(E);return e.jsxs(i,{...N,name:"register",onFinish:n=>a(n,t),scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"nickname",label:"昵称",rules:[{required:!0,message:"请输入你的昵称!",whitespace:!0}],children:e.jsx(j,{})}),e.jsx(i.Item,{name:"mobile",label:"手机号",rules:[{required:!0,message:"请输入你的手机号!"}],children:e.jsx(j,{className:"w-100"})}),e.jsx(i.Item,{name:"password",label:"密码",rules:[{required:!0,message:"请输入密码!"}],hasFeedback:!0,children:e.jsx(j.Password,{})}),e.jsx(i.Item,{name:"confirm",label:"确认密码",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"请再次输入密码!"},({getFieldValue:n})=>({validator(o,r){return!r||n("password")===r?Promise.resolve():Promise.reject(new Error("两次密码不匹配!"))}})],children:e.jsx(j.Password,{})}),e.jsx(i.Item,{...R,children:e.jsx(g,{loading:s.loading,type:"primary",htmlType:"submit",children:"注册"})})]})},_e=({onClose:t})=>{const{getAllTodo:a}=C(),{state:s}=h.useContext(E);return e.jsxs(i,{initialValues:{operationSource:"h5",isFinish:"0"},...N,name:"search",onFinish:n=>{a(n),t()},scrollToFirstError:!0,children:[e.jsx(i.Item,{name:"name",label:"名称",children:e.jsx(j,{className:"w-100"})}),e.jsx(i.Item,{name:"tagId",label:"标签",children:e.jsx(D,{className:"w-100",options:s.tags.map(n=>({label:`${n.name}-(${n.userName})`,value:n.id}))})}),e.jsx(i.Item,{name:"operationSource",label:"来源",children:e.jsx(D,{className:"w-100",options:[{label:"h5",value:"h5"},{label:"微信",value:"wx"}]})}),e.jsx(i.Item,{name:"isFinish",label:"状态",children:e.jsx(D,{className:"w-100",options:[{label:"进行中",value:"0"},{label:"已完成",value:"1"}]})}),e.jsx(i.Item,{...R,children:e.jsx(g,{loading:s.loading,type:"primary",htmlType:"submit",children:"搜索"})})]})},{Header:Me,Content:Ve}=_,He=()=>{const{signOut:t,getAllTodo:a,switchService:s,goPage:n}=C(),{state:o}=h.useContext(E),r=[{key:"0",label:e.jsx(A,{title:"登陆",btnName:"登陆",children:e.jsx(Oe,{})})},{key:"1",label:e.jsx(A,{title:"标签",btnName:"标签",children:e.jsx(Be,{})})},{key:"2",label:e.jsx(A,{title:"注册",btnName:"注册",children:e.jsx(Ye,{})})},{key:"3",label:e.jsx(g,{type:"link",onClick:t,children:"登出"})},{key:"4",label:e.jsx(g,{type:"link",onClick:s,children:localStorage.getItem("USE_LOCAL_SERVICE")==="0"?"本地环境":"线上环境"})},{key:"5",label:e.jsx(g,{type:"link",onClick:()=>n("/ndzy-todos/records"),children:"records"})},{key:"6",label:e.jsx(A,{title:"搜索",btnName:"搜索",children:e.jsx(_e,{})})}];return e.jsxs(_,{className:"ndzy-layout",children:[e.jsx(Me,{className:"ndzy-header",children:e.jsxs(T,{className:"mb-16",children:[o.user?e.jsx("div",{style:{minWidth:33},className:"sky-blue center",children:o.user.name||o.user.nickname}):e.jsx("div",{style:{minWidth:33},className:"sky-blue center",children:"游客"}),e.jsx(g,{type:"link",onClick:()=>n("/ndzy-todos"),children:"home"}),e.jsx(A,{title:"新建",btnName:"新建",children:e.jsx(z,{})}),e.jsx(g,{type:"link",onClick:()=>a(),children:"重置"}),e.jsx(de,{menu:{items:r},children:e.jsx("a",{onClick:m=>m.preventDefault(),children:"其他"})})]})}),e.jsx(Ve,{children:e.jsx("div",{className:"layout-content p-16",children:e.jsx(fe,{})})})]})},qe=({value:t})=>{const a=q();return e.jsx("div",{style:{padding:"0 8px"},id:`preview-${a}`,className:"ndzy-preview",dangerouslySetInnerHTML:{__html:t}})},ze=t=>e.jsxs(A,{title:"查看",btnName:"查看",children:[e.jsx(qe,{value:t.detail}),e.jsx("div",{children:e.jsxs(T,{children:[e.jsxs("span",{style:{color:"blue"},children:["创建人：",t.userName||"--"]}),e.jsxs("span",{style:{color:"green"},children:["标签：",t.tagName||"--"]}),e.jsxs("span",{style:{color:"red"},children:["终止日期：",b(t.deadline).format("YYYY-MM-DD")]})]})}),e.jsx("div",{children:e.jsxs(T,{children:[e.jsxs("span",{children:["创建日期：",b(t.createdAt).subtract(8,"h").format("YYYY-MM-DD")]}),e.jsxs("span",{children:["更新日期：",b(t.updatedAt).subtract(8,"h").format("YYYY-MM-DD")]})]})})]}),$e=()=>{const{state:t}=h.useContext(E),{initUser:a,initTags:s,getAllTodo:n,finishTodo:o,delTodo:r,recoverTodo:m}=C();Se(()=>{a(),s(),n()});const p=[{title:"名称",dataIndex:"name",width:80},{title:"操作",width:120,render:(u,c)=>e.jsxs(T,{children:[e.jsx(ze,{...c}),Number(c.isFinish)===0?e.jsxs(T,{children:[e.jsx(A,{title:"编辑",btnName:"编辑",...c,children:e.jsx(z,{})}),e.jsx(g,{type:"link",onClick:()=>o(c),children:"完成"})]}):Number(c.isFinish)===1?e.jsxs(T,{children:[e.jsx(g,{type:"link",onClick:()=>m(c),children:"恢复"}),e.jsx(k,{title:"删除将无法恢复,确定删除?",onConfirm:()=>r(c),children:e.jsx(g,{type:"link",children:" 删除"})})]}):null]})},{title:"进度",dataIndex:"deadline",width:100,render:(u,c)=>{if(Number(c.isFinish)===0)return e.jsx("span",{style:{color:"red"},children:"处理中"});if(Number(c.isFinish)===1)return e.jsx("span",{style:{color:"green"},children:"已完成"})}},{title:"截止日期",dataIndex:"deadline",width:100},{title:"标签",dataIndex:"tagName",width:100},{title:"用户",dataIndex:"userName",width:100},{title:"创建时间",dataIndex:"createdAt",width:100},{title:"更新时间",dataIndex:"updatedAt",width:100}];return e.jsxs("div",{children:[e.jsx("div",{className:"center",children:t.loading&&e.jsx(ce,{})}),e.jsx(M,{virtual:!0,columns:p,scroll:{x:900,y:600},rowKey:"id",dataSource:t.list,pagination:!1,locale:{emptyText:e.jsx("div",{className:"center",children:"暂无待办事项"})}})]})},Ge=()=>e.jsx("div",{className:"center",children:e.jsxs("div",{children:[e.jsx("h2",{children:"页面不存在"}),e.jsx("p",{children:e.jsx(re,{to:"/",children:"返回首页"})})]})}),{Paragraph:Y}=me,Ke=()=>{const[t]=i.useForm(),{getAllRecord:a,addRecord:s,delRecord:n}=C(),{state:o}=h.useContext(E);L(()=>{a()},[]),L(()=>{t.setFieldsValue({name:"",txt:"",txtInfo:""})},[o.records]);const r=p=>{p&&s(p)},m=[{title:"名称",dataIndex:"name",width:60,render:p=>e.jsx(Y,{copyable:!0,children:p})},{title:"txt",dataIndex:"txt",width:120,render:p=>e.jsx(Y,{copyable:!0,children:p})},{title:"描述",dataIndex:"txtInfo",width:20},{title:"操作",width:20,fixed:"right",render:(p,u)=>{var c;return((c=o.user)==null?void 0:c.role)==="0"&&e.jsx(k,{title:"删除将无法恢复,确定删除?",onConfirm:()=>n(u.id),children:e.jsx(Pe,{})})}}];return e.jsxs("div",{children:[e.jsxs(i,{variant:"filled",style:{maxWidth:600},onFinish:r,form:t,children:[e.jsx(i.Item,{label:"name",name:"name",rules:[{required:!0,message:"不能为空"}],children:e.jsx(j,{placeholder:"请输入"})}),e.jsx(i.Item,{label:"txt",name:"txt",rules:[{required:!0,message:"不能为空"}],children:e.jsx(j,{placeholder:"请输入"})}),e.jsx(i.Item,{label:"txtInfo",name:"txtInfo",children:e.jsx(j,{placeholder:"请输入"})}),e.jsx(i.Item,{wrapperCol:{offset:6,span:16},children:e.jsx(g,{type:"primary",htmlType:"submit",loading:o.loading,children:"添加"})})]}),e.jsx(M,{virtual:!0,columns:m,scroll:{y:600},rowKey:"id",dataSource:o.records,pagination:!1,locale:{emptyText:e.jsx("div",{className:"center",children:"暂无待办事项"})}})]})},We=()=>{const[t,a]=h.useReducer(we,V);return e.jsx(ue,{locale:pe,children:e.jsx(E.Provider,{value:{state:t,dispatch:a},children:e.jsx(je,{children:e.jsxs(w,{path:"/ndzy-todos/",element:e.jsx(He,{}),children:[e.jsx(w,{index:!0,element:e.jsx($e,{})}),e.jsx(w,{path:"/ndzy-todos/records",element:e.jsx(Ke,{})}),e.jsx(w,{path:"*",element:e.jsx(Ge,{})})]})})})})};se.createRoot(document.getElementById("root")).render(e.jsx(ae.StrictMode,{children:e.jsx(oe,{children:e.jsx(We,{})})}));
