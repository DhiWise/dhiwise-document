"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[3142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,k=c["".concat(p,".").concat(f)]||c[f]||s[f]||l;return n?o.createElement(k,a(a({ref:t},d),{},{components:n})):o.createElement(k,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const l={sidebar_position:15},a="File Upload",i={unversionedId:"flutter/file-upload",id:"flutter/file-upload",title:"File Upload",description:"Currently, this feature is not available on app.dhiwise.com. Stay tuned!",source:"@site/docs/flutter/file-upload.md",sourceDirName:"flutter",slug:"/flutter/file-upload",permalink:"/docs/flutter/file-upload",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"flutter",previous:{title:"Add Permissions",permalink:"/docs/flutter/add-permissions"},next:{title:"Firebase Integration",permalink:"/docs/flutter/firebase-integration"}},p={},u=[{value:"How to setup File upload",id:"how-to-setup-file-upload",level:2},{value:"<strong>Step 1:</strong>",id:"step-1",level:4},{value:"<strong>Step 2:</strong>",id:"step-2",level:4},{value:"<strong>Step 3:</strong>",id:"step-3",level:4},{value:"<strong>Step 4:</strong>",id:"step-4",level:4},{value:"<strong>Step 5:</strong>",id:"step-5",level:4}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-upload"},"File Upload"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently, this feature is not available on ",(0,r.kt)("a",{href:"https://app.dhiwise.com/sign-up",target:"_blank"},"app.dhiwise.com.")," Stay tuned!")),(0,r.kt)("p",null,"Upload files you wish in your app by setting up file upload in a few easy steps in DhiWise."),(0,r.kt)("h2",{id:"how-to-setup-file-upload"},"How to setup File upload"),(0,r.kt)("p",null,"Before starting the setup you must require a file upload API to upload your file from your app. Add this API to your app in DhiWise, to know how to add it ",(0,r.kt)("a",{href:"/docs/flutter/add-apis-and-enviroment-variables"},"learn here"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The upload file API is required before your start API binding.")),(0,r.kt)("h4",{id:"step-1"},(0,r.kt)("strong",{parentName:"h4"},"Step 1:")),(0,r.kt)("p",null,"Select the widget on which you want to integrate the upload API, and on the onClick property select API integration, to know how to integrate an API ",(0,r.kt)("a",{href:"/docs/flutter/api-integration"},"Click here"),"."),(0,r.kt)("h4",{id:"step-2"},(0,r.kt)("strong",{parentName:"h4"},"Step 2:")),(0,r.kt)("p",null,"Inside API integration, select upload API."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For the Header in Handle request, select Content-type multipart/form-data")),(0,r.kt)("h4",{id:"step-3"},(0,r.kt)("strong",{parentName:"h4"},"Step 3:")),(0,r.kt)("p",null,"Next, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Selected file")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Handle request")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," for file upload."),(0,r.kt)("h4",{id:"step-4"},(0,r.kt)("strong",{parentName:"h4"},"Step 4:")),(0,r.kt)("p",null,"As you select ",(0,r.kt)("inlineCode",{parentName:"p"},"Selected file")," you need to provide the type and format of the file you want to upload. ",(0,r.kt)("inlineCode",{parentName:"p"},"Select type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Select format")," of your file from the below supported types;"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Image"),(0,r.kt)("td",null,"Upload image files",(0,r.kt)("br",null),(0,r.kt)("code",null,"jpeg"),"  | ",(0,r.kt)("code",null," png"),"  | ",(0,r.kt)("code",null," tiff"),"  | ",(0,r.kt)("code",null," heic"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Video"),(0,r.kt)("td",null,"Upload video files",(0,r.kt)("br",null),(0,r.kt)("code",null,"mp4"),"  | ",(0,r.kt)("code",null," mov"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Audio"),(0,r.kt)("td",null,"Upload audio files",(0,r.kt)("br",null),(0,r.kt)("code",null,"mp3"),"  | ",(0,r.kt)("code",null," wav"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Document"),(0,r.kt)("td",null,"Upload document files",(0,r.kt)("br",null),(0,r.kt)("code",null,"doc"),"  | ",(0,r.kt)("code",null," pdf"),"  | ",(0,r.kt)("code",null," xls"),"  | ",(0,r.kt)("code",null," ppt"),"  | ",(0,r.kt)("code",null," txt ")))),(0,r.kt)("h4",{id:"step-5"},(0,r.kt)("strong",{parentName:"h4"},"Step 5:")),(0,r.kt)("p",null,"Next, you need to provide maximum size for file to be uploaded, along with size type from ",(0,r.kt)("strong",{parentName:"p"},"KB")," or ",(0,r.kt)("strong",{parentName:"p"},"MB"),"."),(0,r.kt)("p",null," Next, you can handle API response, as well set actions on success and failure of the API. ",(0,r.kt)("a",{href:"/docs/flutter/api-integration#step-2-handle-response"},"Learn more")),(0,r.kt)("p",null," At this stage, you have Upload file functionality added to your application! "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Got a question?\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,r.kt)("strong",{parentName:"a"},"Ask here")),"."))}s.isMDXComponent=!0}}]);