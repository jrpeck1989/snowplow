"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[93110],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),h=n,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return o?r.createElement(k,l(l({ref:t},c),{},{components:o})):r.createElement(k,l({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},94277:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={title:"What is the Quick Start for Open Source?",date:"2021-07-08",sidebar_position:50},l=void 0,i={unversionedId:"open-source-quick-start/what-is-the-quick-start-for-open-source/index",id:"open-source-quick-start/what-is-the-quick-start-for-open-source/index",title:"What is the Quick Start for Open Source?",description:"Snowplow is an Open-Core Behavioral Data Platform that helps businesses of all sizes collect, govern and model behavioral data. This product is built on the world's largest open source project for collecting behavioral data.",source:"@site/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/index.md",sourceDirName:"open-source-quick-start/what-is-the-quick-start-for-open-source",slug:"/open-source-quick-start/what-is-the-quick-start-for-open-source/",permalink:"/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:50,frontMatter:{title:"What is the Quick Start for Open Source?",date:"2021-07-08",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Snowplow Open Source Quick Start",permalink:"/docs/open-source-quick-start/"},next:{title:"Feature Comparison",permalink:"/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/feature-comparison/"}},s={},u=[{value:"How does the quick start edition compare?",id:"how-does-the-quick-start-edition-compare",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Snowplow is an Open-Core Behavioral Data Platform that helps businesses of all sizes collect, govern and model ",(0,n.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/what-is-behavioral-data/"},"behavioral data"),". This product is built on the world's largest ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow"},"open source project")," for collecting behavioral data."),(0,n.kt)("p",null,"This quick start guide will get you up and running with a Snowplow open source pipeline - and deliver rich behavioural data to stream, lake and warehouse in less than an hour.\xa0"),(0,n.kt)("p",null,"The data pipeline that you will have set up by the end of this guide will look similar to the following (this will vary by cloud and can be designed to suit your needs due to our modular approach):"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(6760).Z,width:"960",height:"496"})),(0,n.kt)("p",null,"We have built a set of ",(0,n.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/language/modules/develop/index.html"},"terraform")," modules, which automates the setting up & deployment of the required infrastructure & applications for an operational Snowplow open source pipeline, with just a handful of input variables required on your side.\xa0"),(0,n.kt)("p",null,"By the end of this guide,\xa0 you will be able to:\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Collect granular, well-structured data with our suite of web, mobile and server side ",(0,n.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/"},"SDKs")),(0,n.kt)("li",{parentName:"ul"},"Create your own ",(0,n.kt)("a",{parentName:"li",href:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/"},"custom events and entities")," "),(0,n.kt)("li",{parentName:"ul"},"Easily enable and disable our suite of ",(0,n.kt)("a",{parentName:"li",href:"/docs/enriching-your-data/available-enrichments/"},"out-of-the-box enrichments")," "),(0,n.kt)("li",{parentName:"ul"},"Consume your rich data in real time from a choice of over 5 supported destinations (kinesis, pubsub, S3, Postgres or ElasticSearch)")),(0,n.kt)("h2",{id:"how-does-the-quick-start-edition-compare"},"How does the quick start edition compare?"),(0,n.kt)("p",null,"Out-of-the-box, the quick start edition will:\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Handle up to ~100 events per second (~9 million events per day)"),(0,n.kt)("li",{parentName:"ul"},"Cost ~$200 (depending on data transfer costs) per month for ~100 events per second in AWS infrastructure costs, and ~$240 on GCP")),(0,n.kt)("p",null,"It will get you up and running as quickly as possible with Snowplow's open source product so that you can start exploring how to run & manage a Snowplow pipeline that will help you to deliver value with rich, high quality behavioural data to power multiple use cases.\xa0"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,(0,n.kt)("strong",null,"Description")),(0,n.kt)("td",null,(0,n.kt)("strong",null,"Limitations"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://try.snowplowanalytics.com/"},"Try Snowplow")),(0,n.kt)("td",null,"A trial of Snowplow BDP that can be used by anyone to start collecting web and mobile data in minutes."),(0,n.kt)("td",null,"* No custom enrichments",(0,n.kt)("br",null),"* No custom events & entities",(0,n.kt)("br",null),"* No first party server cookies",(0,n.kt)("br",null),"* No real time stream; real time POC not possible",(0,n.kt)("br",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("strong",null,"Open Source")," ",(0,n.kt)("strong",null,"Quick Start")),(0,n.kt)("td",null,(0,n.kt)("strong",null,"The quickest way for anyone with a basic level of cloud experience and access to a cloud account to get started with Snowplow Open Source.")),(0,n.kt)("td",null,"* Handles ~100 events per second out-of-the-box (can be configured to handle a higher throughput)",(0,n.kt)("br",null),(0,n.kt)("br",null),"* No support for the following destinations:",(0,n.kt)("br",null),"** Redshift",(0,n.kt)("br",null),"** BigQuery (coming soon!)",(0,n.kt)("br",null),"** Indicative",(0,n.kt)("br",null))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://snowplowanalytics.com/snowplow-open-source/"},"Open Source")),(0,n.kt)("td",null,"The building blocks that give you the freedom to run and manage the leading open source data pipeline."),(0,n.kt)("td",null,(0,n.kt)("br",null),"* No implementation guidance & ongoing strategic support\xa0",(0,n.kt)("br",null),"* No managed upgrades",(0,n.kt)("br",null),"* 24x7 technical support not provided\xa0",(0,n.kt)("br",null),"* No SLAs",(0,n.kt)("br",null),"* No data quality monitoring dashboard, or failed event alerting",(0,n.kt)("br",null),"* No pipeline monitoring or console for editing your pipeline configurations",(0,n.kt)("br",null),"* No workflow tooling for adding & evolving your data structures",(0,n.kt)("br",null),"* No data modelling console to manage how data is prepared for consumption",(0,n.kt)("br",null),"* No access to cloud outage protection, or cross cloud data delivery")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://snowplowanalytics.com/snowplow-bdp/"},"Snowplow BDP")),(0,n.kt)("td",null,"The best Behavioural Data Platform on the market. Reliable, secure, backed by SLAs plus unrivalled expertise that comes from running data pipelines for 100s of customers."),(0,n.kt)("td",null,"None",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",null,"See side by side feature comparison ",(0,n.kt)("a",{href:"/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/feature-comparison/"},"here"),".\xa0"))))))}p.isMDXComponent=!0},6760:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/image-3-a1907b8751d8e7f041d722da50aa9d15.png"}}]);