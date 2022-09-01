"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[7e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3},i="CRUD Actions",s={unversionedId:"node/crud-actions",id:"node/crud-actions",title:"CRUD Actions",description:"CRUD action (controllers method setup) helps developers create model-wise CRUD APIs for different platforms. Moreover, developers can set up custom middleware and apply them to APIs like bulk create & bulk update, etc.",source:"@site/docs/node/crud-actions.md",sourceDirName:"node",slug:"/node/crud-actions",permalink:"/docs/node/crud-actions",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"node",previous:{title:"Routes",permalink:"/docs/node/routes"},next:{title:"Role Access",permalink:"/docs/node/role-access"}},c={},l=[{value:"Model list",id:"model-list",level:4},{value:"Set up CRUD actions",id:"set-up-crud-actions",level:2},{value:"Generated code snippet",id:"generated-code-snippet",level:4}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crud-actions"},"CRUD Actions"),(0,o.kt)("p",null,"CRUD action (",(0,o.kt)("strong",{parentName:"p"},"controllers method setup"),") helps developers create model-wise CRUD APIs for different platforms. Moreover, developers can set up custom middleware and apply them to APIs like bulk create & bulk update, etc."),(0,o.kt)("p",null,"Decide which platform has access to which information."),(0,o.kt)("h4",{id:"model-list"},"Model list"),(0,o.kt)("p",null,"Configure your model-wise permissions for the respective platform such as ",(0,o.kt)("strong",{parentName:"p"},"Mobile app"),", ",(0,o.kt)("strong",{parentName:"p"},"front")," (",(0,o.kt)("strong",{parentName:"p"},"website"),"), ",(0,o.kt)("strong",{parentName:"p"},"desktop"),", and ",(0,o.kt)("strong",{parentName:"p"},"admin"),"."),(0,o.kt)("h2",{id:"set-up-crud-actions"},"Set up CRUD actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can either give ",(0,o.kt)("strong",{parentName:"p"},"all CRUD permission")," or just a few; Set authentication for each platform.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Developers also have the option to bulk create in order to configure and provide access to large query requests at once.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select Auth to apply an auth policy to the CRUD actions."))),(0,o.kt)("p",null,"On the top right-hand corner, you have the ",(0,o.kt)("strong",{parentName:"p"},"reset button")," which will reset all the models."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:r(85078).Z,width:"1916",height:"1132"})),(0,o.kt)("h4",{id:"generated-code-snippet"},"Generated code snippet"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:r(60895).Z,width:"1178",height:"490"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:r(23377).Z,width:"1036",height:"494"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:r(333).Z,width:"1294",height:"514"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Got a question?\xa0",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,o.kt)("strong",{parentName:"a"},"Ask here")),"."))}d.isMDXComponent=!0},85078:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/crud-action-f8f3ebc280a7796abe36aa4cae9ea019.png"},60895:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/crudaction-code-1-01bcea2d49d8861bea0de84a8e7552a3.png"},23377:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/crudaction-code-2-1a6067f1d359974f98dbce833de8da46.png"},333:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/crudaction-code-3-a1dfa71c156ccd0a1b137cd355bfd212.png"}}]);