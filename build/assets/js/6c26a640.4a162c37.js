"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[7605],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>y});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(o),y=r,m=u["".concat(l,".").concat(y)]||u[y]||c[y]||a;return o?n.createElement(m,i(i({ref:t},s),{},{components:o})):n.createElement(m,i({ref:t},s))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},53643:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:12},i="Build App",p={unversionedId:"ios/build-app",id:"ios/build-app",title:"Build App",description:"Build App",source:"@site/docs/ios/build-app.md",sourceDirName:"ios",slug:"/ios/build-app",permalink:"/docs/ios/build-app",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"ios",previous:{title:"Add APIs and Enviroment Variables",permalink:"/docs/ios/add-apis-and-enviroment-variables"},next:{title:"Deploy or Download code",permalink:"/docs/ios/deploy-or-download-code"}},l={},d=[{value:"Build App",id:"build-app-1",level:2},{value:"<strong>Step 1:</strong>",id:"step-1",level:4},{value:"<strong>Step 2:</strong>",id:"step-2",level:4},{value:"<strong>Step 3:</strong>",id:"step-3",level:4}],s={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-app"},"Build App"),(0,r.kt)("h2",{id:"build-app-1"},"Build App"),(0,r.kt)("p",null,"Get your complete app code by building your app, and then ",(0,r.kt)("a",{href:"/docs/ios/deploy-or-download-code#download"},"download")," or sync it with ",(0,r.kt)("a",{href:"/docs/ios/deploy-or-download-code#sync-application-code-to-gitlab"},"GitLab")," & ",(0,r.kt)("a",{href:"/docs/ios/deploy-or-download-code#sync-application-code-to-github"},"GitHub"),"."),(0,r.kt)("p",null,"As you are done with your iOS app setup, by modifying UI, adding actions on widgets or want to directly get the view code, follow the below steps for the same;"),(0,r.kt)("h4",{id:"step-1"},(0,r.kt)("strong",{parentName:"h4"},"Step 1:")),(0,r.kt)("p",null,"Go to the screen list, and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Build app"),"."),(0,r.kt)("h4",{id:"step-2"},(0,r.kt)("strong",{parentName:"h4"},"Step 2:")),(0,r.kt)("p",null,"As you click on it, it will start building your app by redirecting you to a page where you can see the build ",(0,r.kt)("strong",{parentName:"p"},"progress")," and also some ",(0,r.kt)("strong",{parentName:"p"},"app information")," which will help you know your generated code easily, like ",(0,r.kt)("strong",{parentName:"p"},"SDK versions"),", ",(0,r.kt)("strong",{parentName:"p"},"Libraries")," used in the app code, ",(0,r.kt)("strong",{parentName:"p"},"Package Structure"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:o(23110).Z,width:"1922",height:"1236"})),(0,r.kt)("h4",{id:"step-3"},(0,r.kt)("strong",{parentName:"h4"},"Step 3:")),(0,r.kt)("p",null,"Once, it is completed it will redirect you to the ",(0,r.kt)("strong",{parentName:"p"},"code view"),", from where you can ",(0,r.kt)("a",{href:"/docs/ios/deploy-or-download-code#download"},"download")," the source code or sync it to ",(0,r.kt)("a",{href:"/docs/ios/deploy-or-download-code#sync-application-code-to-gitlab"},"GitLab")," & ",(0,r.kt)("a",{href:"/docs/ios/deploy-or-download-code#sync-application-code-to-github"},"GitHub"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can build your app again in case you make any changes and get your app code again!")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Got a question?\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,r.kt)("strong",{parentName:"a"},"Ask here")),"."))}c.isMDXComponent=!0},23110:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Build-app-ce5103b103a52bc0850e974b6905814f.gif"}}]);