"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[886],{3905:(e,o,r)=>{r.d(o,{Zo:()=>d,kt:()=>b});var n=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),p=function(e){var o=n.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},d=function(e){var o=p(e.components);return n.createElement(l.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,w=u["".concat(l,".").concat(b)]||u[b]||c[b]||a;return r?n.createElement(w,s(s({ref:o},d),{},{components:r})):n.createElement(w,s({ref:o},d))}));function b(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},21322:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),t=(r(67294),r(3905));const a={title:"Run the RDB loader",date:"2021-09-14",sidebar_position:50},s=void 0,i={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/index",title:"Run the RDB loader",description:"The RDB loader is published on Docker Hub",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-loader/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:50,frontMatter:{title:"Run the RDB loader",date:"2021-09-14",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Run the RDB shredder",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder/"},next:{title:"RDB loader monitoring",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring/"}},l={},p=[],d={toc:p};function c(e){let{components:o,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The RDB loader is ",(0,t.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/snowplow/snowplow-rdb-loader"},"published on Docker Hub")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker pull snowplow/snowplow-rdb-loader:1.2.0\n")),(0,t.kt)("p",null,"It is configured by providing a base-64 encoded ",(0,t.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/"},"configuration hocon")," and a ",(0,t.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"iglu resolver")," on the command line:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"docker run \\\n  snowplow/snowplow-rdb-loader- \\\n  --iglu-config ewogICJzY2hlbWEiOiAiaWdsdTpjb20uc25vd3Bsb3dhbmFseXRp .... \\\n  --config ewogICJuYW1lIjogIkFjbWUgUmVkc2hpZnQiLAog ....\n")),(0,t.kt)("p",null,"The config options are format are described in the ",(0,t.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/"},"configuration reference"),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Please pay attention that schemas for all self-describing JSONs flowing through RDB Loader must be hosted on Iglu Server 0.6.0 or above.")," Iglu Central is static registry and if you use Snowplow-authored schemas \u2013 you need to upload all schemas from there as well."))}c.isMDXComponent=!0}}]);