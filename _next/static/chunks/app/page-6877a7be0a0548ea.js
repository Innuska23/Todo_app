(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2112:(e,t,r)=>{Promise.resolve().then(r.bind(r,6268)),Promise.resolve().then(r.bind(r,6115)),Promise.resolve().then(r.bind(r,6995))},2466:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var a=r(7758);let s="https://jsonplaceholder.typicode.com/todos",o=async()=>{try{return(await a.A.get(s,{params:{_limit:10}})).data||[]}catch(e){return console.error("Error fetching todos:",e),[]}},l=async e=>{try{return(await a.A.post(s,e)).data}catch(e){return console.error("Error adding todo:",e),null}},n=async e=>{try{return(await a.A.delete("".concat(s,"/").concat(e))).data}catch(e){return console.error("Error deleting todo:",e),null}};var i=r(8755),d=r(6947),c=r(8159);let u=()=>{let e=(0,i.jE)(),{data:t=[],isLoading:r,isError:a}=(0,d.I)({queryKey:["todos"],queryFn:o}),s=(0,c.n)({mutationFn:l,onMutate:async t=>{await e.cancelQueries({queryKey:["todos"]});let r=e.getQueryData(["todos"]),a={id:Date.now(),...t};return e.setQueryData(["todos"],e=>[a,...e||[]]),{previousTodos:r}},onError:(t,r,a)=>{e.setQueryData(["todos"],a.previousTodos)},onSettled:()=>{}}),u=(0,c.n)({mutationFn:n,onMutate:async t=>{await e.cancelQueries({queryKey:["todos"]});let r=e.getQueryData(["todos"]);return e.setQueryData(["todos"],e=>e.filter(e=>e.id!==t)),{previousTodos:r}},onError:(t,r,a)=>{e.setQueryData(["todos"],a.previousTodos)},onSettled:()=>{}});return{todos:t,isLoading:r,isError:a,addTodo:s.mutate,deleteTodo:u.mutate}}},6115:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(3797),s=r(4385),o=r(2466),l=r(6207),n=r(5066);let i=()=>{let{addTodo:e}=(0,o.A)(),[t,r]=(0,s.useState)(""),[i,d]=(0,s.useState)(!1),c=(0,n.A)("px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2","w-full sm:w-64","border-gray-300 focus:ring-blue-400");return(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between mb-5 gap-3",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold uppercase text-blue-600 drop-shadow-sm",children:"Todo App"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:[(0,a.jsx)("input",{type:"text",value:t,onChange:e=>r(e.target.value),placeholder:"Enter todo...",className:c}),(0,a.jsx)(l.A,{variant:"primary",onClick:()=>{if(!t.trim())return d(!0);e({title:t,completed:!1}),r(""),d(!1)},children:"Add"}),i&&(0,a.jsx)("p",{className:"text-red-500 text-sm mb-4",children:i})]})]})}},6207:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var a=r(3797),s=r(5066),o=r(9705);let l={primary:"bg-blue-500 text-white hover:bg-blue-600",secondary:"bg-gray-200 text-gray-700 hover:bg-gray-300",danger:"bg-red-500 text-white hover:bg-red-600",outline:"border border-gray-300 text-gray-600 hover:bg-gray-100"},n={sm:"px-3 py-1 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"},i=e=>{let{children:t,type:r="button",onClick:i,disabled:d=!1,loading:c=!1,variant:u="primary",size:m="md",className:x="",iconLeft:y=null,iconRight:p=null,fullWidth:h=!1}=e;return(0,a.jsx)("button",{type:r,onClick:i,disabled:d||c,className:(0,s.A)("inline-flex items-center justify-center gap-2 rounded font-medium transition duration-200 cursor-pointer min-w-32",l[u],n[m],h&&"w-full",(d||c)&&"opacity-50 cursor-not-allowed",x),children:c?(0,a.jsx)(o.A,{}):(0,a.jsxs)(a.Fragment,{children:[y&&(0,a.jsx)("span",{className:"inline-flex",children:y}),t,p&&(0,a.jsx)("span",{className:"inline-flex",children:p})]})})}},6268:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(3797),s=r(4319),o=r(8755),l=r(4385);function n(e){let{children:t}=e,[r]=(0,l.useState)(()=>new s.E);return(0,a.jsx)(o.Ht,{client:r,children:t})}},6995:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var a=r(3797),s=r(6137),o=r(4385),l=r(2466),n=r(9705),i=r(5066),d=r(4839),c=r(6207);let u=e=>{let{todo:t,onDelete:r}=e,s=(0,i.A)("flex w-full items-center justify-between","gap-3 p-4 border rounded-lg shadow","bg-gray-50 hover:bg-gray-100 transition-colors");return(0,a.jsxs)(d.P.li,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},layout:!0,className:s,children:[(0,a.jsx)("span",{className:"flex-1 text-left text-gray-800",children:t.title}),(0,a.jsx)("div",{className:"flex items-center gap-2",children:(0,a.jsx)(c.A,{variant:"danger",onClick:()=>r(t.id),children:"Delete"})})]})};function m(){let{todos:e,isLoading:t,deleteTodo:r,addTodo:i}=(0,l.A)(),[d,c]=(0,o.useState)(""),m=()=>{d.trim()&&(i({title:d,completed:!1}),c(""))};return t?(0,a.jsx)(n.A,{}):(0,a.jsx)("ul",{className:"space-y-4",children:(0,a.jsx)(s.N,{children:e.map(e=>(0,a.jsx)(u,{todo:e,onDelete:r,onAdd:m},e.id))})})}},9705:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(3797);let s=()=>(0,a.jsxs)("svg",{className:"animate-spin h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]})}},e=>{var t=t=>e(e.s=t);e.O(0,[997,937,350,358],()=>t(2112)),_N_E=e.O()}]);