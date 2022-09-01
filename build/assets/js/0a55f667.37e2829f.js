"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[2488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,h=u["".concat(l,".").concat(y)]||u[y]||c[y]||i;return r?o.createElement(h,a(a({ref:t},d),{},{components:r})):o.createElement(h,a({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:17},a="Build or Preview App",p={unversionedId:"flutter/build-or-preview-app",id:"flutter/build-or-preview-app",title:"Build or Preview App",description:"Build App",source:"@site/docs/flutter/build-or-preview-app.md",sourceDirName:"flutter",slug:"/flutter/build-or-preview-app",permalink:"/docs/flutter/build-or-preview-app",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"flutter",previous:{title:"Supabase Integration",permalink:"/docs/flutter/supabase-integration"},next:{title:"Deploy or Download code",permalink:"/docs/flutter/deploy-or-download-code"}},l={},s=[{value:"Build App",id:"build-app",level:2},{value:"<strong>Step 1:</strong>",id:"step-1",level:4},{value:"<strong>Step 2:</strong>",id:"step-2",level:4},{value:"<strong>Step 3:</strong>",id:"step-3",level:4},{value:"Preview App",id:"preview-app",level:2},{value:"<strong>Step 1:</strong>",id:"step-1-1",level:4},{value:"<strong>Step 2:</strong>",id:"step-2-1",level:4},{value:"Shareable Preview",id:"shareable-preview",level:3}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build-or-preview-app"},"Build or Preview App"),(0,n.kt)("h2",{id:"build-app"},"Build App"),(0,n.kt)("p",null,"Get your complete app code by building your app, and then ",(0,n.kt)("a",{href:"/docs/flutter/deploy-or-download-code#download"},"download")," or sync it with ",(0,n.kt)("a",{href:"/docs/flutter/deploy-or-download-code#sync-application-code-to-gitlab"},"GitLab")," & ",(0,n.kt)("a",{href:"/docs/flutter/deploy-or-download-code#sync-application-code-to-github"},"GitHub"),"."),(0,n.kt)("p",null,"As you are done with your Flutter app setup, by modifying UI, adding actions on widgets or want to directly get the view code, follow the below steps for the same;"),(0,n.kt)("h4",{id:"step-1"},(0,n.kt)("strong",{parentName:"h4"},"Step 1:")),(0,n.kt)("p",null,"Go to the screen list, and click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Build app"),"."),(0,n.kt)("h4",{id:"step-2"},(0,n.kt)("strong",{parentName:"h4"},"Step 2:")),(0,n.kt)("p",null,"As you click on it, it will start building your app by redirecting you to a page where you can see the build ",(0,n.kt)("strong",{parentName:"p"},"progress")," and also some ",(0,n.kt)("strong",{parentName:"p"},"app information")," which will help you know your generated code easily, like ",(0,n.kt)("strong",{parentName:"p"},"SDK versions"),", ",(0,n.kt)("strong",{parentName:"p"},"Libraries")," used in the app code, ",(0,n.kt)("strong",{parentName:"p"},"Package Structure"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example banner",src:r(97247).Z,width:"1916",height:"1140"})),(0,n.kt)("h4",{id:"step-3"},(0,n.kt)("strong",{parentName:"h4"},"Step 3:")),(0,n.kt)("p",null,"Once, it is completed it will redirect you to the ",(0,n.kt)("strong",{parentName:"p"},"code view"),", from where you can ",(0,n.kt)("a",{href:"/docs/flutter/deploy-or-download-code#download"},"download")," the source code or sync it to ",(0,n.kt)("a",{href:"/docs/flutter/deploy-or-download-code#sync-application-code-to-gitlab"},"GitLab")," & ",(0,n.kt)("a",{href:"/docs/flutter/deploy-or-download-code#sync-application-code-to-github"},"GitHub"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can build your app again in case you make any changes and get your app code again!")),(0,n.kt)("h2",{id:"preview-app"},"Preview App"),(0,n.kt)("p",null,"Preview your complete app design right here to see your app\u2019s generated design results and make changes priorly again to get your design results more accurately."),(0,n.kt)("p",null,"As you are done with your Flutter app design setup, by modifying UI, or want to check out the design results of screens, follow below steps;"),(0,n.kt)("h4",{id:"step-1-1"},(0,n.kt)("strong",{parentName:"h4"},"Step 1:")),(0,n.kt)("p",null,"Go to the screen list, and click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Preview")," button."),(0,n.kt)("h4",{id:"step-2-1"},(0,n.kt)("strong",{parentName:"h4"},"Step 2:")),(0,n.kt)("p",null,"As you click on it, it will start to build your design code, within few minutes it will show you a page where you can check or preview your app design, as shown below;"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Switch between different devices\u2019 resolutions easily, and check how it fits in.")),(0,n.kt)("p",null,"On the Preview page, you can switch between different screens and preview them live here and check each screen\u2019s UI easily."),(0,n.kt)("h3",{id:"shareable-preview"},"Shareable Preview"),(0,n.kt)("p",null,"Easily share the generated preview with your teams for your app in DhiWise, by simply copying the generated link from here in the top right corner."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example banner",src:r(25836).Z,width:"1916",height:"1140"})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Got a question?\xa0",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,n.kt)("strong",{parentName:"a"},"Ask here")),"."))}c.isMDXComponent=!0},97247:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/flutter-build-app-e447135d3bb21ab9337f30c736592d29.gif"},25836:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/flutter-perview-a7933551aa1c52e3ca6398a26d1aff97.gif"}}]);