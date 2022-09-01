"use strict";(self.webpackChunkdhiwise_document=self.webpackChunkdhiwise_document||[]).push([[7621],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?t.createElement(g,i(i({ref:n},u),{},{components:a})):t.createElement(g,i({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},51964:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=a(87462),r=(a(67294),a(3905));const s={sidebar_position:0},i="Create APIs",o={unversionedId:"node/generate-apis/crud/create-apis",id:"node/generate-apis/crud/create-apis",title:"Create APIs",description:"Create",source:"@site/docs/node/generate-apis/crud/create-apis.md",sourceDirName:"node/generate-apis/crud",slug:"/node/generate-apis/crud/create-apis",permalink:"/docs/node/generate-apis/crud/create-apis",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"node",previous:{title:"CRUD APIs",permalink:"/docs/node/generate-apis/crud/"},next:{title:"Read APIs",permalink:"/docs/node/generate-apis/crud/read-apis"}},l={},c=[{value:"Create Blog",id:"create-blog",level:2},{value:"A valid sample request",id:"a-valid-sample-request",level:4},{value:"JSON",id:"json",level:4},{value:"cURL",id:"curl",level:4},{value:"Nodejs-Axios",id:"nodejs-axios",level:4},{value:"Sample success response:",id:"sample-success-response",level:4},{value:"Create Bulk Blogs",id:"create-bulk-blogs",level:2},{value:"Sample Request",id:"sample-request",level:4},{value:"JSON",id:"json-1",level:4},{value:"cURL",id:"curl-1",level:4},{value:"Nodejs-Axois",id:"nodejs-axois",level:4},{value:"Sample success response:",id:"sample-success-response-1",level:4}],u={toc:c};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-apis"},"Create APIs"),(0,r.kt)("div",{className:"grid grid-cols-2 gap-20"},(0,r.kt)("a",{className:"Card",href:"/docs/node/generate-apis/crud/create-apis#create-blog"},(0,r.kt)("h4",null,"Create")),(0,r.kt)("a",{className:"Card",href:"/docs/node/generate-apis/crud/create-apis#create-bulk-blogs"},(0,r.kt)("h4",null,"Bulk Create"))),(0,r.kt)("h2",{id:"create-blog"},"Create Blog"),(0,r.kt)("p",null,"To create a document of a Blog."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API URL:")," ",(0,r.kt)("e",{className:"post method"},"POST")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<Base URL>/client/api/v1/blog/create")),(0,r.kt)("h4",{id:"a-valid-sample-request"},"A valid sample request"),(0,r.kt)("h4",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "title": "Tasty",\n  "alternativeHeadline": "User-friendly",\n  "image": "Orchestrator",\n  "publishDate": "Direct",\n  "author": {\n    "name": "Samantha Herman IV",\n    "image": "payment",\n    "email": "Cecil_Renner7@yahoo.com"\n  },\n  "publisher": {\n    "name": "Gustavo Wyman",\n    "url": "Concrete",\n    "logo": "reboot"\n  },\n  "articleSection": "Home",\n  "articleBody": "Account",\n  "description": "redefine",\n  "slug": "Islands",\n  "url": "parse",\n  "isDraft": true\n}\n')),(0,r.kt)("h4",{id:"curl"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'curl --location \n--request POST \'<Base URL>/client/api/v1/blog/create\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "title": "Tasty",\n  "alternativeHeadline": "User-friendly",\n  "image": "Orchestrator",\n  "publishDate": "Direct",\n  "author": {\n    "name": "Samantha Herman IV",\n    "image": "payment",\n    "email": "Cecil_Renner7@yahoo.com"\n  },\n  "publisher": {\n    "name": "Gustavo Wyman",\n    "url": "Concrete",\n    "logo": "reboot"\n  },\n  "articleSection": "Home",\n  "articleBody": "Account",\n  "description": "redefine",\n  "slug": "Islands",\n  "url": "parse",\n  "isDraft": true\n}\'\n')),(0,r.kt)("h4",{id:"nodejs-axios"},"Nodejs-Axios"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require(\'axios\');\nvar data = JSON.stringify({\n  "title": "Tasty",\n  "alternativeHeadline": "User-friendly",\n  "image": "Orchestrator",\n  "publishDate": "Direct",\n  "author": {\n    "name": "Samantha Herman IV",\n    "image": "payment",\n    "email": "Cecil_Renner7@yahoo.com"\n  },\n  "publisher": {\n    "name": "Gustavo Wyman",\n    "url": "Concrete",\n    "logo": "reboot"\n  },\n  "articleSection": "Home",\n  "articleBody": "Account",\n  "description": "redefine",\n  "slug": "Islands",\n  "url": "parse",\n  "isDraft": true\n});\n\nvar config = {\n  method: \'post\',\n  url: \'<Base URL>/client/api/v1/blog/create\',\n  headers: { \n    \'Content-Type\': \'application/json\',\n    \'Authorization\': \'Bearer {token}\'\n  },\n  data : data\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n')),(0,r.kt)("h4",{id:"sample-success-response"},"Sample success response:"),(0,r.kt)("p",null,"Status code: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "status": "SUCCESS",\n  "message": "Your request is successfully executed",\n  "data": {\n    "_id": "61792caa9cdd1621b49c4b9d",\n    "title": "Tasty",\n    "alternativeHeadline": "User-friendly",\n    "image": "Orchestrator",\n    "publishDate": "Direct",\n    "author": {\n      "name": "Samantha Herman IV",\n      "image": "payment",\n      "email": "Cecil_Renner7@yahoo.com"\n    },\n    "publisher": {\n      "name": "Gustavo Wyman",\n      "url": "Concrete",\n      "logo": "reboot"\n    },\n    "articleSection": "Home",\n    "articleBody": "Account",\n    "description": "redefine",\n    "slug": "tasty",\n    "url": "parse",\n    "isDraft": true,\n    "addedBy": "6179186894c816c40ae15987",\n    "createdAt": "2021-10-27T10:40:42.873Z",\n    "updatedAt": "2021-10-27T10:40:42.873Z",\n    "isDeleted": false,\n    "isActive": true,\n    "id": "61792caa9cdd1621b49c4b9d"\n  }\n}\n')),(0,r.kt)("p",null,"A request which violates validation given in the model file:"),(0,r.kt)("p",null,'Here in the Blog model, the "alternativeHeadline" field can not be a number, it should be a string. So if pass invalid data, then a response will look like a given response'),(0,r.kt)("p",null,"Status code: ",(0,r.kt)("e",{className:"delete method"},"422")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "status": "VALIDATION_ERROR",\n  "message": "Invalid values in parameters, \\"alternativeHeadline\\" must be a string",\n  "data": {}\n}\n')),(0,r.kt)("h2",{id:"create-bulk-blogs"},"Create Bulk Blogs"),(0,r.kt)("p",null,"To add multiple Blogs to the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API URL:")," ",(0,r.kt)("e",{className:"post method"},"POST")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<Base URL>/client/api/v1/blog/addBulk")),(0,r.kt)("h4",{id:"sample-request"},"Sample Request"),(0,r.kt)("h4",{id:"json-1"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "data": [\n    {\n      "title": "Tasty",\n      "alternativeHeadline": "User-friendly",\n      "image": "Orchestrator",\n      "publishDate": "Direct",\n      "author": {\n        "name": "Samantha Herman IV",\n        "image": "payment",\n        "email": "Cecil_Renner7@yahoo.com"\n      },\n      "publisher": {\n        "name": "Gustavo Wyman",\n        "url": "Concrete",\n        "logo": "reboot"\n      },\n      "articleSection": "Home",\n      "articleBody": "Account",\n      "description": "redefine",\n      "slug": "Islands",\n      "url": "parse",\n      "isDraft": true\n    },\n    {\n      "title": "Tasty2",\n      "alternativeHeadline": "User-friendlyness",\n      "image": "Orchestrators",\n      "publishDate": "Direct2",\n      "author": {\n        "name": "Samantha Hermana IV",\n        "image": "payments",\n        "email": "Cecil_Renner75@yahoo.com"\n      },\n      "publisher": {\n        "name": "Gustavo Wcman",\n        "url": "Concrete-stone",\n        "logo": "reboot-machine"\n      },\n      "articleSection": "Home-2",\n      "articleBody": "Accounts",\n      "description": "redefined",\n      "slug": "Island",\n      "url": "parsed",\n      "isDraft": true\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"curl-1"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'curl -X \'POST\' \\\n  \'<Base URL>/client/api/v1/blog/addBulk\' \\\n  -H \'accept: application/json\' \\\n  -H \'Authorization: Bearer {token}\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "data": [\n    {\n      "title": "Tasty",\n      "alternativeHeadline": "User-friendly",\n      "image": "Orchestrator",\n      "publishDate": "Direct",\n      "author": {\n        "name": "Samantha Herman IV",\n        "image": "payment",\n        "email": "Cecil_Renner7@yahoo.com"\n      },\n      "publisher": {\n        "name": "Gustavo Wyman",\n        "url": "Concrete",\n        "logo": "reboot"\n      },\n      "articleSection": "Home",\n      "articleBody": "Account",\n      "description": "redefine",\n      "slug": "Islands",\n      "url": "parse",\n      "isDraft": true\n    },\n    {\n      "title": "Tasty2",\n      "alternativeHeadline": "User-friendlyness",\n      "image": "Orchestrators",\n      "publishDate": "Direct2",\n      "author": {\n        "name": "Samantha Hermana IV",\n        "image": "payments",\n        "email": "Cecil_Renner75@yahoo.com"\n      },\n      "publisher": {\n        "name": "Gustavo Wcman",\n        "url": "Concrete-stone",\n        "logo": "reboot-machine"\n      },\n      "articleSection": "Home-2",\n      "articleBody": "Accounts",\n      "description": "redefined",\n      "slug": "Island",\n      "url": "parsed",\n      "isDraft": true\n    }\n  ]\n}\'\n')),(0,r.kt)("h4",{id:"nodejs-axois"},"Nodejs-Axois"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require(\'axios\');\nvar data = JSON.stringify({\n  "data": [\n    {\n      "data": [\n        {\n          "title": "Tasty",\n          "alternativeHeadline": "User-friendly",\n          "image": "Orchestrator",\n          "publishDate": "Direct",\n          "author": {\n            "name": "Samantha Herman IV",\n            "image": "payment",\n            "email": "Cecil_Renner7@yahoo.com"\n          },\n          "publisher": {\n            "name": "Gustavo Wyman",\n            "url": "Concrete",\n            "logo": "reboot"\n          },\n          "articleSection": "Home",\n          "articleBody": "Account",\n          "description": "redefine",\n          "slug": "Islands",\n          "url": "parse",\n          "isDraft": true\n        },\n        {\n          "title": "Tasty2",\n          "alternativeHeadline": "User-friendlyness",\n          "image": "Orchestrators",\n          "publishDate": "Direct2",\n          "author": {\n            "name": "Samantha Hermana IV",\n            "image": "payments",\n            "email": "Cecil_Renner75@yahoo.com"\n          },\n          "publisher": {\n            "name": "Gustavo Wcman",\n            "url": "Concrete-stone",\n            "logo": "reboot-machine"\n          },\n          "articleSection": "Home-2",\n          "articleBody": "Accounts",\n          "description": "redefined",\n          "slug": "Island",\n          "url": "parsed",\n          "isDraft": true\n        }\n      ]\n    }\n  ]\n});\n\nvar config = {\n  method: \'post\',\n  url: \'<Base URL>/client/api/v1/blog/addBulk\',\n  headers: { \n    \'Content-Type\': \'application/json\', \n    \'Authorization\': \'Bearer {token}\'\n  },\n  data : data\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n\n')),(0,r.kt)("h4",{id:"sample-success-response-1"},"Sample success response:"),(0,r.kt)("p",null,"Status code: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "status": "SUCCESS",\n  "message": "Your request is successfully executed",\n  "data": [\n    {\n      "title": "Tasty",\n      "alternativeHeadline": "User-friendly",\n      "image": "Orchestrator",\n      "publishDate": "Direct",\n      "author": {\n        "name": "Samantha Herman IV",\n        "image": "payment",\n        "email": "Cecil_Renner7@yahoo.com"\n      },\n      "publisher": {\n        "name": "Gustavo Wyman",\n        "url": "Concrete",\n        "logo": "reboot"\n      },\n      "articleSection": "Home",\n      "articleBody": "Account",\n      "description": "redefine",\n      "slug": "Islands",\n      "url": "parse",\n      "isDraft": true,\n      "id": "617921bb256df40a522b81ae",\n      "_id": "617921bb256df40a522b81ae",\n      "createdAt": "2022-07-27T19:29:12.653Z",\n      "updatedAt": "2022-08-09T11:44:55.574Z",\n      "isDeleted": false,\n      "isActive": true\n    },\n    {\n      "title": "Tasty2",\n      "alternativeHeadline": "User-friendlyness",\n      "image": "Orchestrators",\n      "publishDate": "Direct2",\n      "author": {\n        "name": "Samantha Hermana IV",\n        "image": "payments",\n        "email": "Cecil_Renner75@yahoo.com"\n      },\n      "publisher": {\n        "name": "Gustavo Wcman",\n        "url": "Concrete-stone",\n        "logo": "reboot-machine"\n      },\n      "articleSection": "Home-2",\n      "articleBody": "Accounts",\n      "description": "redefined",\n      "slug": "Island",\n      "url": "parsed",\n      "isDraft": true,\n      "id": "617921bb256df40a522b81af",\n      "_id": "617921bb256df40a522b81af",\n      "createdAt": "2022-07-27T19:29:12.653Z",\n      "updatedAt": "2022-08-09T11:44:55.574Z",\n      "isDeleted": false,\n      "isActive": true\n    }\n  ]\n}\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Got a question? ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/rFMnCG5MZ7"},(0,r.kt)("strong",{parentName:"a"},"Ask here")),"."))}d.isMDXComponent=!0}}]);