"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,w=d["".concat(a,".").concat(g)]||d[g]||l[g]||i;return n?o.createElement(w,s(s({ref:t},c),{},{components:n})):o.createElement(w,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"Setup BigQuery Destination",date:"2020-03-02",sidebar_position:50},s=void 0,p={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination/index",title:"Setup BigQuery Destination",description:"Snowplow supports streaming data into BigQuery in near real-time.",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-bigquery-destination/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:50,frontMatter:{title:"Setup BigQuery Destination",date:"2020-03-02",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Add additional enrichments",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/add-additional-enrichments/"},next:{title:"Setup Google Cloud Storage (GCS) Destination",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-google-cloud-storage-gcs-destination/"}},a={},u=[],c={toc:u};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow supports streaming data into BigQuery in near real-time."),(0,r.kt)("p",null,"In order to do this, you need to setup the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/"},"BigQuery Loader"),". This loads enriched events from the enriched Pub/Sub topic, and streams them into BigQuery."))}l.isMDXComponent=!0}}]);