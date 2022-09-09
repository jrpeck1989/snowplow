"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[9663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Out-of-the-box vs custom events",date:"2020-02-24",sidebar_position:30},o=void 0,s={unversionedId:"understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/index",id:"understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/index",title:"Out-of-the-box vs custom events",description:"Snowplow authored events",source:"@site/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/index.md",sourceDirName:"understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities",slug:"/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/",permalink:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:30,frontMatter:{title:"Out-of-the-box vs custom events",date:"2020-02-24",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Understanding events and entities",permalink:"/docs/understanding-tracking-design/understanding-events-entities/"},next:{title:"Predefined vs custom entities",permalink:"/docs/understanding-tracking-design/predefined-vs-custom-entities/"}},l={},c=[{value:"Snowplow authored events",id:"snowplow-authored-events",level:2},{value:"Custom events",id:"custom-events",level:2},{value:"Self-describing events",id:"self-describing-events",level:3},{value:"Structured events",id:"structured-events",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"snowplow-authored-events"},"Snowplow authored events"),(0,a.kt)("p",null,'Snowplow supports a large number of events "out of the box", most of which are fairly standard in a web analytics context.'),(0,a.kt)("p",null,"Examples of events that we support include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Page views and Screen views"),(0,a.kt)("li",{parentName:"ul"},"Page pings"),(0,a.kt)("li",{parentName:"ul"},"Link clicks"),(0,a.kt)("li",{parentName:"ul"},"Form fill-ins (for the web)"),(0,a.kt)("li",{parentName:"ul"},"Form submissions"),(0,a.kt)("li",{parentName:"ul"},"Transactions")),(0,a.kt)("p",null,"For events that Snowplow natively supports, there is generally a specific API for tracking that event type in Snowplow. For example, if you want to track a page view using the Javascript tracker, you do so with the following Javascript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"window.snowplow('trackPageView');\n")),(0,a.kt)("p",null,"Whereas if you were tracking a screen view in an iOS app using the iOS tracker, you\u2019d do so like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'let event = ScreenView(name: "DemoScreenName", screenId: UUID())\ntracker.track(event)\n')),(0,a.kt)("p",null,"In general, each tracker will have a specific API call for tracking any events that have been defined by the Snowplow team, and you should refer to the\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/"},"tracker-specific documentation"),"\xa0to make sure that this is set up correctly."),(0,a.kt)("h2",{id:"custom-events"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Events-overview#custom-events"}),"Custom events"),(0,a.kt)("p",null,"If you wish to track an event that you have designed yourself, and therefore isn't a Snowplow authered event, then you can track them using the approach of ",(0,a.kt)("em",{parentName:"p"},"self-describing events"),"."),(0,a.kt)("h3",{id:"self-describing-events"},"Self-describing events"),(0,a.kt)("p",null,"Self-describing events are events you define yourself. A\xa0",(0,a.kt)("strong",{parentName:"p"},"self-describing event"),"\xa0consists of two elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"name"),'\xa0of the self-describing event, e.g. "Game saved" or "Returned order".'),(0,a.kt)("li",{parentName:"ul"},"A set of\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"key: value"),"\xa0properties (also known as a hash, associative array or dictionary)")),(0,a.kt)("p",null,"Self-describing events are great:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Where you want to track event types which are proprietary/specific to your business (i.e. not already part of Snowplow)"),(0,a.kt)("li",{parentName:"ul"},"Where you want to track events which have unpredictable or frequently changing properties")),(0,a.kt)("p",null,"The set of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"key: value"),"\xa0properties in self-describing events is represented with\xa0",(0,a.kt)("strong",{parentName:"p"},"self-describing JSON"),"\xa0which can have arbitrarily many fields."),(0,a.kt)("p",null,"For example, to track a self-describing event with Javascript tracker (v3), you make use of the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent"),"\xa0method with the pattern shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"window.snowplow('trackSelfDescribingEvent', { \n  event: { \n    schema: '...', \n    data: { ... } \n  } \n});\n")),(0,a.kt)("p",null,"More specific example using JavaScript tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"window.snowplow('trackSelfDescribingEvent', {\n    event: {\n        schema: 'iglu:com.acme_company/viewed_product/jsonschema/2-0-0',\n        data: {\n            productId: 'ASO01043',\n            category: 'Dresses',\n            brand: 'ACME',\n            returning: true,\n            price: 49.95,\n            sizes: ['xs', 's', 'l', 'xl', 'xxl'],\n            availableSince: new Date(2013,3,7)\n        }\n    }\n});\n")),(0,a.kt)("p",null,"Note that with\xa0",(0,a.kt)("strong",{parentName:"p"},"self-desribing"),"\xa0events, the number of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"key: value"),"\xa0pairs can vary and is determined by business model of the entity associated with the event."),(0,a.kt)("p",null,"Therefore, for Snowplow to be able to validate and extract the data self-describing JSON would have to be sent with the event. By its definition, self-describing JSON includes a ",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"reference to JSON schema")," which has to be in place by the time enrichment process takes place. It allows for maximum customisation of the self describing events."),(0,a.kt)("p",null,"Knowing in advance what the expected structure and format of data should be as a necessity to be able to handle events and contexts."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"Structuring your data with schemas"),"."),(0,a.kt)("h3",{id:"structured-events"},"Structured events"),(0,a.kt)("p",null,"Alternatively, if you don't wish to define your own schemas, you can generate a\xa0",(0,a.kt)("strong",{parentName:"p"},"structured event"),", you get five parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Category"),": The name for the group of objects you want to track."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Action"),": A string that is used to define the user in action for the category of object."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Label"),": An optional string which identifies the specific object being actioned."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Property"),": An optional string describing the object or the action performed on it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Value"),": An optional numeric data to quantify or further describe the user action.")),(0,a.kt)("p",null,"Important"),(0,a.kt)("p",null,"We recommend using Self Describing events whenever possible as they give more control and semantic meaning to your data tracking."))}d.isMDXComponent=!0}}]);