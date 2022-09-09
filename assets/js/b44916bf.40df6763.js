"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[80247],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(o),g=n,d=f["".concat(l,".").concat(g)]||f[g]||u[g]||a;return o?r.createElement(d,c(c({ref:t},p),{},{components:o})):r.createElement(d,c({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},42541:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=o(87462),n=(o(67294),o(3905)),a=o(50375);const c={title:"Configuring cookie settings",date:"2022-09-07",sidebar_position:100},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/configuring-cookies/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/configuring-cookies/index",title:"Configuring cookie settings",description:"",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/configuring-cookies/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/configuring-cookies",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/configuring-cookies/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/configuring-cookies/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/configuring-cookies/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:100,frontMatter:{title:"Configuring cookie settings",date:"2022-09-07",sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Cookies & Local Storage",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/"},next:{title:"How the tracker stores state",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/"}},s={},p=[],u={toc:p};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{mdxType:"Block"}))}f.isMDXComponent=!0},50375:(e,t,o)=>{o.d(t,{ZP:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={toc:[]};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Snowplow allows for a highly configurable cookie set up. This allows for you to create optimal first party tracking in a privacy-first world, including anonymous and cookieless tracking."),(0,n.kt)("p",null,"Below you'll find a flow chart to help you with your cookie configuration, guiding you through the configuration options for both your ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/stream-collector/"},"Snowplow Collector")," and the ",(0,n.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/"},"Snowplow JavaScript Tracker"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///assets/config-calculator-snowplow-open-source.pdf"},"Cookie configuration for Open Source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///assets/config-calculator-snowplow-bdp.pdf"},"Cookie configuration for Snowplow BDP"))))}c.isMDXComponent=!0}}]);