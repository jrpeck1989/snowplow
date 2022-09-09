"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[31319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||a;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},38898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Hybrid Apps",date:"2022-08-30",sidebar_position:70},i="Hybrid Apps",c={unversionedId:"collecting-data/collecting-from-own-applications/mobile-trackers/hybrid-apps/index",id:"collecting-data/collecting-from-own-applications/mobile-trackers/hybrid-apps/index",title:"Hybrid Apps",description:"This feature is available since v4.",source:"@site/docs/collecting-data/collecting-from-own-applications/mobile-trackers/hybrid-apps/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/mobile-trackers/hybrid-apps",slug:"/collecting-data/collecting-from-own-applications/mobile-trackers/hybrid-apps/",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/hybrid-apps/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/mobile-trackers/hybrid-apps/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:70,frontMatter:{title:"Hybrid Apps",date:"2022-08-30",sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"Anonymous Tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/anonymous-tracking/"},next:{title:"Android - Google Play Data Safety",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/android-google-play-data-safety/"}},p={},l=[],s={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hybrid-apps"},"Hybrid Apps"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This feature is available since v4.")),(0,n.kt)("p",null,"Hybrid apps are mobile apps that in addition to a native interface, provide part of the UI through an embedded Web view. Snowplow events are tracked from both the native code (e.g., written in Swift or Kotlin) as well as the Web view (in JavaScript). Our goal is to have both events tracked from the native code as well as the Web view share the same session and appear as tracked with the same tracker."),(0,n.kt)("p",null,"This use case is supported by implementing the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-webview-tracker"},"Snowplow WebView tracker")," in the Web view in your app. The WebView tracker is able to pass events to the iOS tracker which sends them to the collector."),(0,n.kt)("p",null,"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://snowplow-incubator.github.io/snowplow-hybrid-apps-accelerator/"},"Snowplow Hybrid Apps Tracking tutorial")," for a step-by-step guide how to set up tracking in hybrid apps."))}d.isMDXComponent=!0}}]);