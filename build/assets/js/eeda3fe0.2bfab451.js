"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[9751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?i.createElement(g,a(a({ref:n},u),{},{components:t})):i.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const o={sidebar_position:2},a="Unwanted Components",s={unversionedId:"Designguidelines/quality-guidelines/unwanted-components",id:"Designguidelines/quality-guidelines/unwanted-components",title:"Unwanted Components",description:"Play with what is really needed!",source:"@site/docs/Designguidelines/quality-guidelines/unwanted-components.md",sourceDirName:"Designguidelines/quality-guidelines",slug:"/Designguidelines/quality-guidelines/unwanted-components",permalink:"/docs/Designguidelines/quality-guidelines/unwanted-components",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"Designguidelines",previous:{title:"Invisible Components",permalink:"/docs/Designguidelines/quality-guidelines/invisible-components"},next:{title:"Components Outside Frame",permalink:"/docs/Designguidelines/quality-guidelines/components-outside-screen"}},l={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unwanted-components"},"Unwanted Components"),(0,r.kt)("p",null,"Play with what is really needed!"),(0,r.kt)("p",null,"Sometimes while designing a new screen, a Rectangle is placed over it and it is duplicated, but all the components of the previous screen are also placed on the newly created screen, which is a bad practice to be done."),(0,r.kt)("p",null,"Avoid such practices while you design a new screen, as it will affect on DhiWise while you convert your design to code."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only keep components that are to be displayed in the design, and remove the others.")),(0,r.kt)("p",null,"Also remove extra elements being put on the other areas of the design, like the below GIF, as it will lead to misidentification of a component."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Got a question?\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,r.kt)("strong",{parentName:"a"},"Ask here")),"."))}p.isMDXComponent=!0}}]);