"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38901],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22163:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={title:"Adding plugins to your tracker",date:"2021-04-19",sidebar_position:500},o=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker/index",title:"Adding plugins to your tracker",description:"The Snowplow JavaScript Trackers v3 allow extension via plugins. There a number of official Snowplow plugins, but we also encourage building your own. You can either include them directly in your codebase or tag management tool, or you could publish them to npm as public packages that the whole community can use.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:500,frontMatter:{title:"Adding plugins to your tracker",date:"2021-04-19",sidebar_position:500},sidebar:"defaultSidebar",previous:{title:"Plugins",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/"},next:{title:"Creating your own plugins",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins/"}},l={},p=[{value:"Tracker Initialization",id:"tracker-initialization",level:2},{value:"After Tracker Initialization",id:"after-tracker-initialization",level:2}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Snowplow JavaScript Trackers v3 allow extension via plugins. There a number of official Snowplow plugins, but we also encourage building your own. You can either include them directly in your codebase or tag management tool, or you could publish them to npm as public packages that the whole community can use."),(0,a.kt)("p",null,"There are two ways to add plugins:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"During tracker intialization"),(0,a.kt)("li",{parentName:"ul"},"Dynamically after tracker intialization")),(0,a.kt)("h2",{id:"tracker-initialization"},"Tracker Initialization"),(0,a.kt)("p",null,"To add a plugin at tracker intialisation, you include the plugin in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugins")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newTracker } from '@snowplow/browser-tracker';\nimport { PerformanceTimingPlugin } from '@snowplow/browser-plugin-performance-timing';\n\nnewTracker('sp', '{{collector_url_here}}', {\n  appId: 'my-app-id',\n  contexts: {\n    webPage: true // default, can be omitted\n  },\n  plugins: [ PerformanceTimingPlugin() ]\n});\n")),(0,a.kt)("h2",{id:"after-tracker-initialization"},"After Tracker Initialization"),(0,a.kt)("p",null,"To add a plugin after tracker intialisation, you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"addPlugin")," and pass the plugin in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newTracker, addPlugin } from '@snowplow/browser-tracker';\nimport { PerformanceTimingPlugin } from '@snowplow/browser-plugin-performance-timing';\n\nnewTracker('sp', '{{collector_url_here}}', {\n  appId: 'my-app-id',\n  contexts: {\n    webPage: true // default, can be omitted\n  }\n});\n\n...\n\naddPlugin({ plugin: PerformanceTimingPlugin() });\n")))}u.isMDXComponent=!0}}]);