"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[69632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=u(n),w=o,f=c["".concat(p,".").concat(w)]||c[w]||d[w]||s;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const s={title:"Setup EmrEtlRunner (pre-R35)",date:"2020-02-26",sidebar_position:20},i=void 0,a={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/index",title:"Setup EmrEtlRunner (pre-R35)",description:"Data is loaded from S3 -> Redshift by two applications:",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:20,frontMatter:{title:"Setup EmrEtlRunner (pre-R35)",date:"2020-02-26",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"RDB Loader 1.0.0",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-rdb-loader-post-r35/"},next:{title:"Install EmrEtlRunner",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/"}},p={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data is loaded from S3 -> Redshift by two applications:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"RDB Shredder: this takes the enriched data in S3 and transforms it into a format suitable for loading into Redshift (called the shredded format), which is also stored in S3"),(0,o.kt)("li",{parentName:"ol"},"RDB Loader: which takes the shredded data from S3, and loads it into Redshift.")),(0,o.kt)("p",null,"Both applications are EMR jobs. They are orchestrated using EmrEtlRunner. In this setup guide we'll walk you through how to setup EmrEtlRunner correctly, so that the shredding and loading process are successfully run. This comes down to passing EmrEtlRunner a correct configuration file."))}d.isMDXComponent=!0}}]);