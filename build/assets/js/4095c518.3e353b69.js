"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[7021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,m=p["".concat(s,".").concat(b)]||p[b]||c[b]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},87483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:2},l="Database",i={unversionedId:"android/more-features/database",id:"android/more-features/database",title:"Database",description:"The database is the most common way of storing and managing data. In most cases, databases are managed on the server-side and mobile applications communicate with them through the network. In case of internet unavailability, such an application doesn't work.",source:"@site/docs/android/more-features/database.md",sourceDirName:"android/more-features",slug:"/android/more-features/database",permalink:"/docs/android/more-features/database",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"android",previous:{title:"Constant",permalink:"/docs/android/more-features/constant"}},s={},d=[{value:"Create a table",id:"create-a-table",level:2},{value:"Database table attributes",id:"database-table-attributes",level:2},{value:"You can move attributes up and down by dragging them.",id:"you-can-move-attributes-up-and-down-by-dragging-them",level:4}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database"},"Database"),(0,r.kt)("p",null,"The database is the most common way of storing and managing data. In most cases, databases are managed on the server-side and mobile applications communicate with them through the network. In case of internet unavailability, such an application doesn't work."),(0,r.kt)("p",null,"Implementing a local database helps to manage such problems. The local database can be used to sync and store data on mobile devices or to manage offline features of the apps. This will help to make applications fast and work offline or on low internet connectivity."),(0,r.kt)("p",null,"DhiWise Android app builder supports ",(0,r.kt)("strong",{parentName:"p"},"Room DB"),", code generated with local database table will be in Room DB."),(0,r.kt)("h2",{id:"create-a-table"},"Create a table"),(0,r.kt)("p",null,'Click on the \u2795 icon on the database page, add "',(0,r.kt)("strong",{parentName:"p"},"Table name"),'" and "',(0,r.kt)("strong",{parentName:"p"},"Table description"),'".'),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create table")," button to save and create a database table."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(67880).Z,width:"945",height:"315"})),(0,r.kt)("h2",{id:"database-table-attributes"},"Database table attributes"),(0,r.kt)("p",null,"You can add as many attributes as you want. You need to add up to 6 details to add an attribute:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Attributes"),(0,r.kt)("td",null,"Add the name of an attribute.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Data type"),(0,r.kt)("td",null,"Select data type based on the value. Allowed data types are as below: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"INTEGER | STRING | FLOAT | DOUBLE | BOOLEAN | Array | Relation"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Value"),(0,r.kt)("td",null,"For array and relation, you can define the relation or value array by selecting the respective table. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Default"),(0,r.kt)("td",null,"Select default, it can be ",(0,r.kt)("b",null,"null")," or ",(0,r.kt)("b",null,"user-defined"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"N (Nullable)"),(0,r.kt)("td",null,"Generate variable that allows null value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"P (Primary key)"),(0,r.kt)("td",null,"Define primary index of the table (Nullable attribute can't be a primary key)"))),(0,r.kt)("h4",{id:"you-can-move-attributes-up-and-down-by-dragging-them"},"You can move attributes up and down by dragging them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Remove it by clicking on the "X" remove icon beside.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")," to add attribute values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," button to update the constant file name or description."))),(0,r.kt)("p",null,"All the database tables are listed in the left panel, you can switch from one file to another just by clicking on the table name."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Got a question?\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,r.kt)("strong",{parentName:"a"},"Ask here")),"."))}c.isMDXComponent=!0},67880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createtable-af4a7a33a5b236a779a83593a5e227ef.png"}}]);