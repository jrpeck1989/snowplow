"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[3081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),A=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=A(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=A(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(g,c(c({ref:t},s),{},{components:a})):r.createElement(g,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var A=2;A<o;A++)c[A]=a[A];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(67294),n=a(86010),o=a(53438),c=a(39960),i=a(13919),l=a(95999);const A="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return r.createElement(c.Z,{href:t,className:(0,n.Z)("card padding--lg",A)},a)}function d(e){let{href:t,icon:a,title:o,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",s),title:o},a," ",o),c&&r.createElement("p",{className:(0,n.Z)("text--truncate",p),title:c},c))}function g(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?r.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){var t;let{item:a}=e;const n=(0,i.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(d,{href:a.href,icon:n,title:a.label,description:null==c?void 0:c.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(w,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){let{items:t,className:a}=e;return r.createElement("section",{className:(0,n.Z)("row",a)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},31492:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(e){return"Actively Maintained"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Actively Maintained",title:"Actively Maintained badge",className:"img_ev3q"})):"Maintained"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Maintained&color=9e62dd&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Maintained",title:"Maintained badge",className:"img_ev3q"})):"Early Release"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Early%20Release&color=014477&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Early Release",title:"Early Release badge",className:"img_ev3q"})):"Unsupported"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Unsupported&color=24292e&labelColor=lightgrey&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Unsupported",title:"Unsupported badge",className:"img_ev3q"})):"Snowplow Tracker Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/v/snowplow/snowplow-tracker",alt:"Latest version"}):"React Native Tracker Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/v/@snowplow/react-native-tracker",alt:"Latest version"})):"Pypi Tracker Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/v/snowplow-tracker",alt:"Latest version"})):"Snowplow Tracker PHP Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/php-v/snowplow/snowplow-tracker",alt:"PHP Version"}):"Snowplow Tracker React Native Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/dependency-version/@snowplow/react-native-tracker/peer/react-native",alt:"React Native Version"})):"Snowplow Tracker Pypi Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/pyversions/snowplow-tracker",alt:"React Native Version"})):void 0}},43557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>A,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),o=a(31492),c=a(52991),i=a(53438);const l={title:"JavaScript Tracker",date:"2021-03-24",sidebar_position:200},A=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/index",title:"JavaScript Tracker",description:"The JavaScript Tracker supports both synchronous and asynchronous tags. We recommend the asynchronous tags in nearly all instances, as these do not slow down page load times.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:200,frontMatter:{title:"JavaScript Tracker",date:"2021-03-24",sidebar_position:200},sidebar:"defaultSidebar",previous:{title:"Getting the domain user information from the Snowplow Cookie",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/"},next:{title:"Quick start guide",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/web-quick-start-guide/"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{badgeType:"Actively Maintained",mdxType:"Badges"}),(0,n.kt)("p",null,"The JavaScript Tracker supports both synchronous and asynchronous tags. We recommend the asynchronous tags in nearly all instances, as these do not slow down page load times."),(0,n.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);