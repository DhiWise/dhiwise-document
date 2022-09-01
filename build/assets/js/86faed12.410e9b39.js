"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[9218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34528:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:2},r="Configure Model",l={unversionedId:"reactadminpanel/configure-model",id:"reactadminpanel/configure-model",title:"Configure Model",description:"Select models (from the auto-populated backend models) to showcase on your React admin panel, as well as configure CRUD operations for those models. Furthermore, configure model attributes, and how the model attributes should look. Also, link model attributes to other models according to its requirements.",source:"@site/docs/reactadminpanel/configure-model.md",sourceDirName:"reactadminpanel",slug:"/reactadminpanel/configure-model",permalink:"/docs/reactadminpanel/configure-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reactadminpanel",previous:{title:"Layout Configuration",permalink:"/docs/reactadminpanel/layout-configuration"},next:{title:"Dashboard Setup",permalink:"/docs/reactadminpanel/dashboard-setup"}},s={},p=[{value:"Step 1: Showcase models",id:"step-1-showcase-models",level:2},{value:"Step 2 - Set up model attributes",id:"step-2---set-up-model-attributes",level:2},{value:"Step 3 - Configure relationship among attributes/ Array &amp; JSON",id:"step-3---configure-relationship-among-attributes-array--json",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-model"},"Configure Model"),(0,o.kt)("p",null,"Select models (from the auto-populated backend models) to showcase on your React admin panel, as well as configure CRUD operations for those models. Furthermore, configure model attributes, and how the model attributes should look. Also, link model attributes to other models according to its requirements. "),(0,o.kt)("h2",{id:"step-1-showcase-models"},"Step 1: Showcase models"),(0,o.kt)("p",null,"Select which models to show on your admin panel and configure their CRUD operations, as well as set up custom action icons."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:a(16568).Z,width:"1918",height:"1146"})),(0,o.kt)("h2",{id:"step-2---set-up-model-attributes"},"Step 2 - Set up model attributes"),(0,o.kt)("p",null,"Select the attributes to display on React admin panel for each model & select action. For example, select which attributes to display in detail view or add/edit form. "),(0,o.kt)("p",null,"A model can have several attributes with different data types but depending on the view type you have the functionality to choose the required attributes input widget (form components). "),(0,o.kt)("p",null,"Developers will get view type options such as add/edit, listing, and detail view to your model list."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("e",{className:"hightlight"},"Add/Edit"),(0,o.kt)("p",{parentName:"li"},"  Configure attributes, labels, data type, input type (form components), and read-only. In input type, you can select which form component you want to input such as input widget, text area widget, email input, URL input, radio button, check box, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("e",{className:"hightlight"},"Listing"),(0,o.kt)("p",{parentName:"li"},"  In listings, you can label the way your data is shown. You can configure attributes, tables, and data types. Additionally, you have the option of search and sorting. To set up specific attributes, for searching and sorting.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("e",{className:"hightlight"},"Detail view"),(0,o.kt)("p",{parentName:"li"},"  Select attributes you want to show in detail view with label customization feature.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("e",{className:"hightlight"},"Clone data"),(0,o.kt)("p",{parentName:"li"},"  Clone the data attribute configuration you have already set in any action then replicate it in other actions.  "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:a(71089).Z,width:"1914",height:"1144"})),(0,o.kt)("h2",{id:"step-3---configure-relationship-among-attributes-array--json"},"Step 3 - Configure relationship among attributes/ Array & JSON"),(0,o.kt)("h4",null,(0,o.kt)("e",{className:"hightlight"},"Relationship")),(0,o.kt)("p",null,"If developers have mapped out relations between models in their Node.js application those same models will be available in step 3 to configure those model relations (attributes projection) in the React admin panel as well. "),(0,o.kt)("admonition",{title:"Example",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Product model attributes will have a relation with the purchase order model. ")),(0,o.kt)("h4",null,(0,o.kt)("e",{className:"hightlight"},"Array/JSON")),(0,o.kt)("p",null,"If developers have selected JSON or array data type in their node.js models the Array/JSON option will appear. In the JSON ARRAY feature, developers can define sub-attributes. "),(0,o.kt)("admonition",{title:"Example",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'A customer can have a single attribute such as \u201caddress\u201d with JSON data type then sub-attributes will be like "addressLine1", "addressLine2", "city", "pincode".')),(0,o.kt)("p",null,"Therefore, configure which model attributes are required to connect with other models. Also, define sub-attributes, for Node.js model attributes containing data type JSON or ARRAY"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Once all the configurations are complete developers can click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Built app")," and get the code within a few seconds. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example banner",src:a(38181).Z,width:"1914",height:"1144"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Got a question?\xa0",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,o.kt)("strong",{parentName:"a"},"Ask here")),"."))}d.isMDXComponent=!0},16568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/model-setup-20ec6879657dcc9a6e5e6b7c20be8473.png"},71089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/setup-model2-080a92b083f071b0f31e8a48d274c721.png"},38181:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/setup-model3-c6f8a08b742bc4942a571fda6b50553c.png"}}]);