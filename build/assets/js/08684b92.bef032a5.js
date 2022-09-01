"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=l(n),u=o,f=g["".concat(s,".").concat(u)]||g[u]||c[u]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:3},a="Change Widget",p={unversionedId:"flutter/change-widget",id:"flutter/change-widget",title:"Change Widget",description:"After fetching Figma, the algorithm identifies the components in your design and generates UI on the basis of it for your app. However, not all UI components may be appropriately identified. Therefore, use the change widget functionality to modify the widget to its appropriate type.",source:"@site/docs/flutter/change-widget.md",sourceDirName:"flutter",slug:"/flutter/change-widget",permalink:"/docs/flutter/change-widget",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"flutter",previous:{title:"Resolve Overflow Issues",permalink:"/docs/flutter/ui-customisation/resolve-overflow-issue"},next:{title:"Navigation",permalink:"/docs/flutter/navigation"}},s={},l=[{value:"How to change widget",id:"how-to-change-widget",level:2},{value:"<strong>Step 1:</strong>",id:"step-1",level:4},{value:"<strong>Step 2:</strong>",id:"step-2",level:4},{value:"Generated code snippet",id:"generated-code-snippet",level:4}],d={toc:l};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-widget"},"Change Widget"),(0,o.kt)("p",null,"After fetching Figma, the algorithm identifies the components in your design and generates UI on the basis of it for your app. However, not all UI components may be appropriately identified. Therefore, use the change widget functionality to modify the widget to its appropriate type."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out other supported change view from here",(0,o.kt)("a",{href:"/docs/Designguidelines/component-specific-guidelines/change-view-components"},"Learn more"))),(0,o.kt)("h2",{id:"how-to-change-widget"},"How to change widget"),(0,o.kt)("h4",{id:"step-1"},(0,o.kt)("strong",{parentName:"h4"},"Step 1:")),(0,o.kt)("p",null,"In the screen design, go to the widget you wish to modify."),(0,o.kt)("h4",{id:"step-2"},(0,o.kt)("strong",{parentName:"h4"},"Step 2:")),(0,o.kt)("p",null,"Just erase the widget name and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Space")," for a widget suggestion and select the appropriate widget you wish to modify."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:n(9315).Z,width:"1812",height:"1180"})),(0,o.kt)("p",null,"Based on the modified widget, related widget properties are also added together so you can change the properties or their value easily."),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"Example",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For example, a ",(0,o.kt)("strong",{parentName:"p"},"button")," might be identified as an ",(0,o.kt)("strong",{parentName:"p"},"image"),"; so, it can be easily changed to the ",(0,o.kt)("strong",{parentName:"p"},"button")," component.")),(0,o.kt)("h4",{id:"generated-code-snippet"},"Generated code snippet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class LoginScreen extends GetWidget<LoginController> {\n  @override\n  Widget build(BuildContext context) {\n    return SafeArea(\n        child: Scaffold(\n            backgroundColor: ColorConstant.whiteA700,\n            body: Container(\n                width: size.width,\n                child: SingleChildScrollView(\n                    child: Container(\n                      CustomButton(\n                          width: 343,\n                          text: "lbl_sign_in".tr,\n                          margin: getMargin(left: 16, top: 16, right: 16),\n                          onTap: onTapSignin2),\n                    )))));\n  }\n}\n')),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Got a question?\xa0",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,o.kt)("strong",{parentName:"a"},"Ask here")),"."))}c.isMDXComponent=!0},9315:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Change-Widget-f02e1577ba9ca22e3929dd0f50bcdd4b.gif"}}]);