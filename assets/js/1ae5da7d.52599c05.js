"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[37325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?i.createElement(m,a(a({ref:t},l),{},{components:r})):i.createElement(m,a({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const o={title:"Copyright & License",date:"2020-11-24",sidebar_position:10},a=void 0,s={unversionedId:"contributing/copyright-license/index",id:"contributing/copyright-license/index",title:"Copyright & License",description:"Copyright",source:"@site/docs/contributing/copyright-license/index.md",sourceDirName:"contributing/copyright-license",slug:"/contributing/copyright-license/",permalink:"/docs/contributing/copyright-license/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/contributing/copyright-license/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:10,frontMatter:{title:"Copyright & License",date:"2020-11-24",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Contributor License Agreement",permalink:"/docs/contributing/contributor-license-agreement/"},next:{title:"Tutorials",permalink:"/docs/tutorials/"}},c={},p=[{value:"Copyright",id:"copyright",level:2},{value:"License",id:"license",level:2},{value:"Snowplow JavaScript Tracker",id:"snowplow-javascript-tracker",level:4},{value:"Third-party, git-submoduled contributions",id:"third-party-git-submoduled-contributions",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"copyright"},"Copyright"),(0,n.kt)("p",null,"Snowplow is copyright 2012-2022 Snowplow Analytics Ltd."),(0,n.kt)("h2",{id:"license"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Copyright-and-license#license"}),"License"),(0,n.kt)("p",null,"The majority of the Snowplow project is licensed under the\xa0",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"Apache License, Version 2.0"),' (the "License"); you may not use this software except in compliance with the License.'),(0,n.kt)("p",null,'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'),(0,n.kt)("h4",{id:"snowplow-javascript-tracker"},"Snowplow JavaScript Tracker"),(0,n.kt)("p",null,"The Snowplow JavaScript Tracker mono-repository is distributed under ",(0,n.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/BSD-3-Clause"},"BSD 3 Clause"),". The Snowplow JavaScript Tracker was originally based on Anthon Pang's\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"piwik.js"),", and has maintained the same license for distribution."),(0,n.kt)("h2",{id:"third-party-git-submoduled-contributions"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Copyright-and-license#third-party-git-submoduled-contributions"}),"Third-party, git-submoduled contributions"),(0,n.kt)("p",null,"The loosely-coupled architecture of Snowplow makes it easy to swap out individual sub-system implementations for first- or third-party alternatives."),(0,n.kt)("p",null,"The Snowplow Analytics team curate some third-party sub-system implementations by git-submoduling those GitHub repositories into the Snowplow repositories."),(0,n.kt)("p",null,"Please note that third-party, git-submoduled contributions to Snowplow remain the copyright of their respective authors."),(0,n.kt)("p",null,"Third-party, git-submoduled contributions may be released under a different license to\xa0",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"Apache License, Version 2.0"),"; please consult the licensing information in their original GitHub repositories for confirmation."))}u.isMDXComponent=!0}}]);