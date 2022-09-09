"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[49207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Predefined vs custom entities",date:"2020-02-27",sidebar_position:40},i=void 0,s={unversionedId:"understanding-tracking-design/predefined-vs-custom-entities/index",id:"understanding-tracking-design/predefined-vs-custom-entities/index",title:"Predefined vs custom entities",description:"Predefined contexts",source:"@site/docs/understanding-tracking-design/predefined-vs-custom-entities/index.md",sourceDirName:"understanding-tracking-design/predefined-vs-custom-entities",slug:"/understanding-tracking-design/predefined-vs-custom-entities/",permalink:"/docs/understanding-tracking-design/predefined-vs-custom-entities/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/understanding-tracking-design/predefined-vs-custom-entities/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:40,frontMatter:{title:"Predefined vs custom entities",date:"2020-02-27",sidebar_position:40},sidebar:"defaultSidebar",previous:{title:"Out-of-the-box vs custom events",permalink:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/"},next:{title:"Managing data structures via the API",permalink:"/docs/understanding-tracking-design/managing-data-structures-via-the-api-2/"}},c={},p=[{value:"Predefined contexts",id:"predefined-contexts",level:2},{value:"Custom contexts",id:"custom-contexts",level:2},{value:"Snowplow JavaScript Tracker v3",id:"snowplow-javascript-tracker-v3",level:5},{value:"Snowplow JavaScript Tracker v2",id:"snowplow-javascript-tracker-v2",level:5}],d={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"predefined-contexts"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Contexts-overview#predefined-contexts"}),"Predefined contexts"),(0,r.kt)("p",null,"Predefined contexts are Snowplow authored web contexts and are available with the JavaScript tracker. They are enabled at the tracker initialization step and thus the associated data will be added automatically to any Snowplow event fired on the page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'window.snowplow("newTracker", "sp", "{{COLLECTOR_URL}}", {\n    appId: "cfe23a"\n  },\n  contexts: {\n    webPage: true,\n    performanceTiming: true,\n    gaCookies: true,\n    geolocation: false\n  }\n});\n')),(0,r.kt)("h2",{id:"custom-contexts"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Contexts-overview#custom-contexts"}),"Custom contexts"),(0,r.kt)("p",null,"Custom contexts let you add additional information about the circumstances surrounding an event by attaching context through entities represented with a\xa0",(0,r.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"self-describing JSON"),"."),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"contexts"),"\xa0argument to any method is always\xa0",(0,r.kt)("em",{parentName:"p"},"optional"),". If set, it must be a self-describing JSON including at least one\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"name: property"),"\xa0pair in JSON provided as a value to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\xa0property of the self-describing JSON, where\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\xa0is the name for an individual context entry."),(0,r.kt)("p",null,"It generally looks like the one below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "schema": "iglu:com.snowplowanalytics/ad_click/jsonschema/1-0-0",\n    "data": {\n        "bannerId": "4732ce23d345"\n    }\n}\n')),(0,r.kt)("p",null,"A few dos and don'ts for\xa0",(0,r.kt)("em",{parentName:"p"},"context names"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do name each context entry however you like"),(0,r.kt)("li",{parentName:"ul"},"Do use a context name to identify a set of associated data points which make sense to your business"),(0,r.kt)("li",{parentName:"ul"},"Do use the same contexts across multiple different events and event types"),(0,r.kt)("li",{parentName:"ul"},"Don't use multiple different context names to refer to the same set of data points")),(0,r.kt)("p",null,"A few dos and don'ts for the\xa0_JSON_s inside each context entry JSONs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do use any of the data types supported by custom unstructured events"),(0,r.kt)("li",{parentName:"ul"},"Do use Snowplow datatype suffixes if the data type would otherwise be unclear"),(0,r.kt)("li",{parentName:"ul"},"Don't nest properties as with custom unstructured events, the structure must be flat")),(0,r.kt)("p",null,"If you want to create your own custom context, you must create a\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"data structure for it"),". Since more than one can be attached to an event, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\xa0argument (if it is provided at all) should be a\xa0",(0,r.kt)("em",{parentName:"p"},"non-empty array of self-describing JSONs"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:"),"\xa0Even if only one custom context is being attached to an event, it still needs to be wrapped in an array."),(0,r.kt)("p",null,"Here are two examples of custom context JSONs. One describes a page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    schema: \"iglu:com.example_company/page/jsonschema/1-2-1\",\n    data: {\n        pageType: 'test',\n        lastUpdated: new Date(2016,3,10)\n    }\n}\n")),(0,r.kt)("p",null,"and the other describes a user on that page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    schema: \"iglu:com.example_company/user/jsonschema/2-0-0\",\n    data: {\n      userType: 'tester',\n    }\n}\n")),(0,r.kt)("p",null,"Below is a JavaScript tracker example how the above custom contexts could be attached to a page view event:"),(0,r.kt)("h5",{id:"snowplow-javascript-tracker-v3"},"Snowplow JavaScript Tracker v3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Snowplow JavaScript Tracker v3 API\nwindow.snowplow(\n    'trackPageView',\n    {\n      context: [{ // array of custom contexts\n        schema: \"iglu:com.example_company/page/jsonschema/1-2-1\",\n        data: {\n            pageType: 'test',\n            lastUpdated: new Date(2016,3,10)\n        }\n      },\n      {\n        schema: \"iglu:com.example_company/user/jsonschema/2-0-0\",\n        data: {\n          userType: 'tester',\n        }\n      }]\n    });\n")),(0,r.kt)("h5",{id:"snowplow-javascript-tracker-v2"},"Snowplow JavaScript Tracker v2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Snowplow JavaScript Tracker v2 API\nwindow.snowplow(\n    'trackPageView',\n    null,\n    [{ // array of custom contexts\n      schema: \"iglu:com.example_company/page/jsonschema/1-2-1\",\n      data: {\n        pageType: 'test',\n        lastUpdated: new Date(2016,3,10)\n      }\n    },\n    {\n      schema: \"iglu:com.example_company/user/jsonschema/2-0-0\",\n      data: {\n        userType: 'tester',\n      }\n    }]\n);\n")))}l.isMDXComponent=!0}}]);