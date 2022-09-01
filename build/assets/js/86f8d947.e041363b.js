"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[9510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,u=d["".concat(l,".").concat(k)]||d[k]||g[k]||p;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<p;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const p={sidebar_position:5},o="Tagging components in Figma",i={unversionedId:"Designguidelines/tagging-components-in-figma",id:"Designguidelines/tagging-components-in-figma",title:"Tagging components in Figma",description:"DhiWise auto-identifies all your screen view components and generates a complete code for the same. Generally, it auto-detects the components, but sometimes due to design changes, it may not able to identify them.",source:"@site/docs/Designguidelines/tagging-components-in-figma.md",sourceDirName:"Designguidelines",slug:"/Designguidelines/tagging-components-in-figma",permalink:"/docs/Designguidelines/tagging-components-in-figma",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"Designguidelines",previous:{title:"Image Masking",permalink:"/docs/Designguidelines/quality-guidelines/image-masking"}},l={},m=[{value:"<strong>Guidelines to follow before tagging</strong>",id:"guidelines-to-follow-before-tagging",level:2},{value:"<strong>How to set a tag in Figma</strong>",id:"how-to-set-a-tag-in-figma",level:2},{value:"AppBar",id:"appbar",level:3},{value:"AutoCompleteTextField",id:"autocompletetextfield",level:3},{value:"BottomAppB<strong>ar</strong>",id:"bottomappbar",level:3},{value:"BottomBar",id:"bottombar",level:3},{value:"BottomSheet",id:"bottomsheet",level:3},{value:"Calendar",id:"calendar",level:3},{value:"CheckBox",id:"checkbox",level:3},{value:"ChipView",id:"chipview",level:3},{value:"CircleImage",id:"circleimage",level:3},{value:"CircleProgressBar",id:"circleprogressbar",level:3},{value:"Dialog",id:"dialog",level:3},{value:"DrawerItem",id:"draweritem",level:3},{value:"Dropdown",id:"dropdown",level:3},{value:"EditText",id:"edittext",level:3},{value:"ExpandableList",id:"expandablelist",level:3},{value:"FloatingActionButton",id:"floatingactionbutton",level:3},{value:"FloatingTextField",id:"floatingtextfield",level:3},{value:"Footer",id:"footer",level:3},{value:"Grid",id:"grid",level:3},{value:"Header",id:"header",level:3},{value:"IconButton",id:"iconbutton",level:3},{value:"Image",id:"image",level:3},{value:"List",id:"list",level:3},{value:"Map",id:"map",level:3},{value:"OTPView",id:"otpview",level:3},{value:"ProgressBar",id:"progressbar",level:3},{value:"Radio",id:"radio",level:3},{value:"RadioGroup",id:"radiogroup",level:3},{value:"RatingBar",id:"ratingbar",level:3},{value:"SearchView",id:"searchview",level:3},{value:"SeekBar",id:"seekbar",level:3},{value:"Sidebar",id:"sidebar",level:3},{value:"Slider &amp; Page Indicator",id:"slider--page-indicator",level:3},{value:"Staggered",id:"staggered",level:3},{value:"Switch",id:"switch",level:3},{value:"Tab &amp; Pager",id:"tab--pager",level:3},{value:"TextArea",id:"textarea",level:3},{value:"WebView",id:"webview",level:3}],s={toc:m};function g(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tagging-components-in-figma"},"Tagging components in Figma"),(0,r.kt)("p",null,"DhiWise auto-identifies all your screen view components and generates a complete code for the same. Generally, it auto-detects the components, but sometimes due to design changes, it may not able to identify them. "),(0,r.kt)("p",null,"To get the component identified in Figma, you can do the following things;"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refer to the ",(0,r.kt)("a",{href:"/docs/Designguidelines/intro"},"design guidelines")," or ",(0,r.kt)("a",{href:"/docs/Designguidelines/component-specific-guidelines/"},"component-specific guidelines")," which should be followed while screen designing in Figma. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tag a specific component")," in Figma and get it auto-identified in DhiWise."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Change the view of the misidentified component to the correct one in DhiWise.  For Flutter ",(0,r.kt)("a",{href:"/docs/flutter/change-widget"},"learn here"),", and for React ",(0,r.kt)("a",{href:"/docs/react/change-view"},"learn here"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tagging components")," in Figma helps in auto-identifying components in the screen design easily when they are not auto-identified. Tag a component if it seems to be complex or you want to get it correctly identified in DhiWise. "),(0,r.kt)("p",null,"Before tagging a component, follow the below guides to set a tag on a component:"),(0,r.kt)("h2",{id:"guidelines-to-follow-before-tagging"},(0,r.kt)("strong",{parentName:"h2"},"Guidelines to follow before tagging")),(0,r.kt)("p",null,"In Figma design, the components which are placed in screen design must be placed in a proper ",(0,r.kt)("a",{href:"https://help.figma.com/hc/en-us/articles/360039832054-Frames-and-Groups#h_a4b01a8f-859e-4478-a2af-4a2b802701a3"},"Group"),". To learn about the grouping guidelines follow the ",(0,r.kt)("a",{href:"/docs/Designguidelines/generalGuidelines/group-components-and-layers"},"Group components and layers")," guidelines."),(0,r.kt)("p",null,"Proper ",(0,r.kt)("strong",{parentName:"p"},"grouping")," and ",(0,r.kt)("strong",{parentName:"p"},"layering")," of design elements will help in tagging a component easily, which will accurately help in identifying the component in DhiWise."),(0,r.kt)("p",null,"Follow the below guidelines to learn how to tag a component in Figma:"),(0,r.kt)("h2",{id:"how-to-set-a-tag-in-figma"},(0,r.kt)("strong",{parentName:"h2"},"How to set a tag in Figma")),(0,r.kt)("p",null,"In your app\u2019s Figma file, go to the screen in which you want to set a tag on the component."),(0,r.kt)("p",null,"Select the ",(0,r.kt)("a",{href:"https://help.figma.com/hc/en-us/articles/360039832054-Frames-and-Groups#h_a4b01a8f-859e-4478-a2af-4a2b802701a3"},"Group")," or ",(0,r.kt)("a",{href:"https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma"},"Frame")," of that particular component from the left sidebar of the Figma panel in the ",(0,r.kt)("strong",{parentName:"p"},"Layers")," section, and set a tag on it by renaming it."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don't provide a ",(0,r.kt)("strong",{parentName:"p"},"Tag name")," by yourself! Set the Tag name as mentioned in each component. ")),(0,r.kt)("p",null,"The name format is differentiated based on the type of components, as some components also need other elements for their complete design like ",(0,r.kt)("a",{href:"/docs/Designguidelines/tagging-components-in-figma#tab--pager"},"Tab & Pager"),", and ",(0,r.kt)("a",{href:"/docs/Designguidelines/tagging-components-in-figma#slider--page-indicator"},"Slider & Pager indicator"),"."),(0,r.kt)("p",null,"Follow the below name format for giving the component a Tag;"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Format:")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'{**Group or Frame name**} + \u201c:" + {**Tag**}')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Example:")," Group1:Button")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group or Frame name:")," The name which is given in the Figma design."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag:")," Tag added to the component from the list of available Tag names attached to a specific component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference Tag:")," A number added for the reference of a tagged component to know that it has an attached element. It is added only for the components like Tab & Pager, and Slider & Pager indicator."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{href:"/docs/Designguidelines/tagging-components-in-figma#tab--pager"},"Tab & Pager"),", and ",(0,r.kt)("a",{href:"/docs/Designguidelines/tagging-components-in-figma#slider--page-indicator"},"Slider & Pager indicator"),";"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Format:")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'{**Group or Frame name**} + \u201c:" + {**Tag**} + \u201c:\u201d + {**Reference Tag**}')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Example:")," Group1:Tab:1,"),(0,r.kt)("p",{parentName:"admonition"},"Group121:Pager:1,"),(0,r.kt)("p",{parentName:"admonition"},"Group122:Pager:1")),(0,r.kt)("p",null,"Follow the supported components below to learn how to set a tag on each of them,"),(0,r.kt)("h3",{id:"appbar"},"AppBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": AppBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + AppBar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group1:AppBar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(13617).Z,width:"2260",height:"1326"})),(0,r.kt)("h3",{id:"autocompletetextfield"},"AutoCompleteTextField"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": AutoCompleteTextField"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + AutoCompleteTextField')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:AutoCompleteTextField"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(799).Z,width:"2262",height:"1470"})),(0,r.kt)("h3",{id:"bottomappbar"},"BottomAppB",(0,r.kt)("strong",{parentName:"h3"},"ar")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": BottomAppBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + BottomAppBar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Frame1:BottomAppBar"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If BottomAppBar/ BottomBar includes ",(0,r.kt)("strong",{parentName:"p"},"FloatingActionButton"),", then also add Tag for it with BottomAppBar/ BottomBar.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(92878).Z,width:"2300",height:"1226"})),(0,r.kt)("h3",{id:"bottombar"},"BottomBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": BottomBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + BottomBar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:BottomBar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(92878).Z,width:"2300",height:"1226"})),(0,r.kt)("h3",{id:"bottomsheet"},"BottomSheet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": BottomSheet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + BottomSheet')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:BottomSheet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(43508).Z,width:"2208",height:"1646"})),(0,r.kt)("h3",{id:"calendar"},"Calendar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Calendar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Calendar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Calendar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(48067).Z,width:"2330",height:"1442"})),(0,r.kt)("h3",{id:"checkbox"},"CheckBox"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": CheckBox"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + CheckBox')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:CheckBox"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(90790).Z,width:"1770",height:"1218"})),(0,r.kt)("h3",{id:"chipview"},"ChipView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": ChipView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + ChipView')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:ChipView"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(52227).Z,width:"2516",height:"1340"})),(0,r.kt)("h3",{id:"circleimage"},"CircleImage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": CircleImage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + CircleImage')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:CircleImage"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(13262).Z,width:"2778",height:"1402"})),(0,r.kt)("h3",{id:"circleprogressbar"},"CircleProgressBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": CircleProgressBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + CircleProgressBar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:CircleProgressBar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(1756).Z,width:"2436",height:"1536"})),(0,r.kt)("h3",{id:"dialog"},"Dialog"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Dialog"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Dialog')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Dialog"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(93861).Z,width:"2064",height:"1604"})),(0,r.kt)("h3",{id:"draweritem"},"DrawerItem"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": DrawerItem"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + DrawerItem')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:DrawerItem"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(63676).Z,width:"2186",height:"1366"})),(0,r.kt)("h3",{id:"dropdown"},"Dropdown"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Dropdown"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Dropdown')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Dropdown"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(55187).Z,width:"2434",height:"1402"})),(0,r.kt)("h3",{id:"edittext"},"EditText"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": EditText"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + EditText')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:EditText"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(46229).Z,width:"2260",height:"1496"})),(0,r.kt)("h3",{id:"expandablelist"},"ExpandableList"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": ExpandableList"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + ExpandableList')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:ExpandableList"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(46668).Z,width:"2382",height:"1402"})),(0,r.kt)("h3",{id:"floatingactionbutton"},"FloatingActionButton"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Fab"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Fab')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group1:Fab"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(23805).Z,width:"2478",height:"1282"})),(0,r.kt)("h3",{id:"floatingtextfield"},"FloatingTextField"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": FloatingTextField"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + FloatingTextField')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:FloatingTextField"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(9126).Z,width:"2330",height:"1400"})),(0,r.kt)("h3",{id:"footer"},"Footer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Footer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Footer')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Footer"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(23591).Z,width:"2838",height:"1034"})),(0,r.kt)("h3",{id:"grid"},"Grid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Grid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Grid')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Grid"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(80082).Z,width:"2236",height:"1658"})),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Header"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Header')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Header"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(90929).Z,width:"2814",height:"1116"})),(0,r.kt)("h3",{id:"iconbutton"},"IconButton"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": IconButton"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + IconButton')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:IconButton"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(19493).Z,width:"1502",height:"1124"})),(0,r.kt)("h3",{id:"image"},"Image"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Image"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Image')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Image"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(69501).Z,width:"2462",height:"1526"})),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": List"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + List')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:List"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(70652).Z,width:"1624",height:"1332"})),(0,r.kt)("h3",{id:"map"},"Map"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Map"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Map')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Map"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(9985).Z,width:"2262",height:"1612"})),(0,r.kt)("h3",{id:"otpview"},"OTPView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": OtpView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + OtpView')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:OtpView"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(41308).Z,width:"2400",height:"1352"})),(0,r.kt)("h3",{id:"progressbar"},"ProgressBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": ProgressBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + ProgressBar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:ProgressBar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(62770).Z,width:"2402",height:"1568"})),(0,r.kt)("h3",{id:"radio"},"Radio"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Radio"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Radio')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Radio"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(60769).Z,width:"1472",height:"1336"})),(0,r.kt)("h3",{id:"radiogroup"},"RadioGroup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": RadioGroup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + RadioGroup')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:RadioGroup"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(43106).Z,width:"1464",height:"1434"})),(0,r.kt)("h3",{id:"ratingbar"},"RatingBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": RatingBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + RatingBar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:RatingBar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(49303).Z,width:"2252",height:"1234"})),(0,r.kt)("h3",{id:"searchview"},"SearchView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": SearchView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + SearchView')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:SearchView"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(92711).Z,width:"2342",height:"1064"})),(0,r.kt)("h3",{id:"seekbar"},"SeekBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": SeekBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + SeekBar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:SeekBar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(17974).Z,width:"2322",height:"1164"})),(0,r.kt)("h3",{id:"sidebar"},"Sidebar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Sidebar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Sidebar')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Sidebar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(68374).Z,width:"2420",height:"1422"})),(0,r.kt)("h3",{id:"slider--page-indicator"},"Slider & Page Indicator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name for Slider"),": Slider"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name for Pager Indicator"),": PagerIndicator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Slider + {Reference Tag}')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + PagerIndicator + {Reference Tag}')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Slider:1,\nGroup123:PagerIndicator:1,"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The reference tag number given should be the same for one group, and different for another group in the design.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(21191).Z,width:"2130",height:"1066"})),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"Web"),", it has other two supported properties,"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name for previous slider control"),": PreviousSliderControl"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name for next slider control"),": NextSliderControl"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Slider:1,\nGroup123:PagerIndicator:1,\nGroup445:PreviousSliderControl:1,\nGroup445:NextSliderControl:1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(49960).Z,width:"2736",height:"1300"})),(0,r.kt)("h3",{id:"staggered"},"Staggered"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Staggered"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Staggered')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Staggered"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(561).Z,width:"2252",height:"1508"})),(0,r.kt)("h3",{id:"switch"},"Switch"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Switch"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Switch')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Switch"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(82140).Z,width:"2346",height:"1214"})),(0,r.kt)("h3",{id:"tab--pager"},"Tab & Pager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Tab"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": Pager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + Tab + {Reference Tag}')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:Tab:1,"),(0,r.kt)("p",null,"Group12:Pager:1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(39897).Z,width:"2152",height:"1518"})),(0,r.kt)("h3",{id:"textarea"},"TextArea"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": TextArea"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + TextArea')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:TextArea"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(5477).Z,width:"2176",height:"1404"})),(0,r.kt)("h3",{id:"webview"},"WebView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tag name"),": WebView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},'{Group or Frame name} + \u201c:" + WebView')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," Group12:WebView"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:a(10266).Z,width:"2292",height:"1486"})))}g.isMDXComponent=!0},799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AutocompleteTextfield-00ecf0560365a35116e06f85939ff449.png"},92878:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Bottombar-2d06c8d22a41b508e4bc6fee37366499.png"},43508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Bottomsheet-9b32b627ac44f914c5b6f94f54e239ea.png"},48067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Calendar-84f5c64c8ebe019b2a998dbc3fadbfa7.png"},90790:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Checkbox-5fadb866607dd02a7b6b76315347af4f.png"},52227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Chipview-2aef0fb3655f50a3f109a68df4247d98.png"},13262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CircleImage-cfcb285aace60b66ab3eb06a75e70ebb.png"},1756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CricleProgressbar-5c396edc44a0ca7449cab3929235a973.png"},93861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dialog-c8565aa17770db22caf132fd22832864.png"},63676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DrawerItem-c98ae30a6a8c2f70901da788d20f205b.png"},55187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dropdown-c5dedf49dd7bec5fb4eab3a2f8017b75.png"},46229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EditText-7e1fda33749347e8424cbab017b6838c.png"},46668:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ExpandList-e010b2006f58b085534975cbe3ffdaba.png"},23805:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Fab-74f0f151d7c4832e053c52ea48778147.png"},9126:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FloatingTextField-9a83b2f562d3ec48fe6ed77501da4059.png"},23591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Footer-4c50165e9d98c73fcbbdd4965d48ef96.png"},80082:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Grid-f3e8938ad062e97594fd315feba698a4.png"},90929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Header-001feef0bcb43020363a1ab96447eed0.png"},19493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IconButton-6053d9ce117b3b39b8539f6f3f0de6a9.png"},69501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Image-e0574b678f32edeb6653f2c2ab6d7d1f.png"},70652:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/List-413f77a8237b9fba18165c90f50051a7.png"},9985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Map-6329884f29cfa43142b291ae77bb153c.png"},41308:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OTPView-47a942dbe43c87fc010b0ebe93cb393e.png"},62770:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Progressbar-63a199286db451f154fe3b2bfe43e264.png"},60769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Radio-796a925ebdb8af68088fba2d75ed9307.png"},43106:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/RadioGroup-5b5088f5a3a5881a36ff52fb566b48aa.png"},49303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Rating-5833e5062e400ad996b0761e5a5e56a2.png"},92711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Searchview-805864ecf104cb75cb8cc01c87fd5c02.png"},17974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Seekbar-5342b5d2fcc037f4f1bd836ba27e2fd5.png"},68374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Sidebar-d90ef903746376ce52310a4883bdde01.png"},49960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Slider-prev-next-06e2bc0a64f4ce0b6f5f84ff66212c49.png"},21191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Slider-ecbc475738cf057880e7beb3cf39684a.png"},561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staggered-90ff3f9240fb389fc24d32287d8c61ba.png"},82140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Switch-12922b391daaaa3bfc597b8c6f861065.png"},39897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tab&pager-6414766dd36b21f5a4a8e096c3474b5c.png"},5477:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/TextArea-a67570637ff96bea1815f97c67957498.png"},10266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Webview-31cea4562ac9677037f20f4ada3a10c2.png"},13617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/appbar-0ec8eaf13758f6dd5cb9247f391fa330.png"}}]);