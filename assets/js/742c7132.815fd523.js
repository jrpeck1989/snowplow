"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[63229],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>w});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),w=n,h=c["".concat(i,".").concat(w)]||c[w]||d[w]||s;return o?a.createElement(h,r(r({ref:t},u),{},{components:o})):a.createElement(h,r({ref:t},u))}));function w(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<s;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},54780:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const s={title:"Setup Snowplow Open Source on AWS",date:"2020-02-25",sidebar_position:10},r=void 0,l={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/index",title:"Setup Snowplow Open Source on AWS",description:"Quick Start",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:10,frontMatter:{title:"Setup Snowplow Open Source on AWS",date:"2020-02-25",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Feature Comparison",permalink:"/docs/getting-started-on-snowplow-open-source/what-is-snowplow-open-source/feature-comparison/"},next:{title:"Setting up your AWS environment",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/"}},i={},p=[{value:"Installation Guide",id:"installation-guide",level:2},{value:"Setup a Snowplow Collector",id:"setup-a-snowplow-collector",level:2},{value:"Setup a Data Source",id:"setup-a-data-source",level:2},{value:"Setup a Snowplow Tracker",id:"setup-a-snowplow-tracker",level:3},{value:"Setup a Third-Party Webhook",id:"setup-a-third-party-webhook",level:3},{value:"Setup Enrich",id:"setup-enrich",level:2},{value:"Setup alternative data stores (e.g. Redshift, SnowflakeDB, Elastic, Indicative)",id:"setup-alternative-data-stores-eg-redshift-snowflakedb-elastic-indicative",level:2},{value:"Data modeling",id:"data-modeling",level:2},{value:"Analyse your data!",id:"analyse-your-data",level:2}],u={toc:p};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Quick Start"),(0,n.kt)("p",null,"We have built a set of ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/snowplow-devops"},"terraform")," modules, which automates the setting up & deployment of the required infrastructure & applications for an operational Snowplow open source pipeline, with just a handful of input variables required on your side.\xa0"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/open-source-quick-start/quick-start-installation-guide-on-aws/"},"Quick Start Installation Guide on AWS")),(0,n.kt)("h2",{id:"installation-guide"},"Installation Guide"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:o(54973).Z,width:"699",height:"125"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/"},"Setup your AWS environment")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#collector"},"Setup a Snowplow Collector")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#sources"},"Setup one or more sources using trackers or webhooks")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#enrich"},"Setup Enrich")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#data-store"},"Setup alternative data stores (e.g. Redshift, PostgreSQL)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#modeling"},"Data modeling in Redshift")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#analysis"},"Analyze your data!"))),(0,n.kt)("h2",{id:"setup-a-snowplow-collector"},"Setup a Snowplow Collector"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(91302).Z,width:"699",height:"125"})),(0,n.kt)("p",null,"The Snowplow collector receives data from Snowplow trackers and webhooks, and writes them to a stream for further processing. Setting up a collector is the first step in the Snowplow setup process."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/"},"Setup your Snowplow collector"))),(0,n.kt)("h2",{id:"setup-a-data-source"},"Setup a Data Source"),(0,n.kt)("p",null,"Snowplow supports two types of data sources: trackers (SDKs) for integrating your own apps, and webhooks for ingesting data from third parties via HTTP(S)."),(0,n.kt)("h3",{id:"setup-a-snowplow-tracker"},"Setup a Snowplow Tracker"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(81971).Z,width:"699",height:"125"})),(0,n.kt)("p",null,"Snowplow trackers generate event data and send that data to Snowplow collectors to be captured. The most popular Snowplow tracker to-date is the JavaScript Tracker, which is integrated in websites (either directly or via a tag management solution) the same way that any web analytics tracker (e.g. Google Analytics or Omniture tags) is integrated."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-trackers/"},"Setup your first tracker"))),(0,n.kt)("h3",{id:"setup-a-third-party-webhook"},"Setup a Third-Party Webhook"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(19394).Z,width:"699",height:"125"})),(0,n.kt)("p",null,"Snowplow allows you to collect events via the ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Webhook"},"webhooks")," of supported third-party software."),(0,n.kt)("p",null,'Webhooks allow this third-party software to send their own internal event streams to Snowplow collectors to be captured. Webhooks are sometimes referred to as "streaming APIs" or "HTTP response APIs".'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-webhooks/"},"Setup your first webhook"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: once you have setup a collector and tracker or webhook, you can pause and perform the remainder of the setup steps later"),". That is because your data is being successfully generated and logged. When you eventually setup enrich",(0,n.kt)("a",{parentName:"p",href:"#step-3-setup-enrich"}),", you will be able to process all the data you have logged since setup."),(0,n.kt)("h2",{id:"setup-enrich"},"Setup Enrich"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(46442).Z,width:"699",height:"125"})),(0,n.kt)("p",null,"The Snowplow enrichment process processes raw events from a collector and"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Cleans up the data")," into a format that is easier to parse / analyse"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Enriches the data")," (e.g. infers the location of the visitor from his / her IP address and infers the search engine keywords from the query string)"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Stores the cleaned, enriched data"))),(0,n.kt)("p",null,"Once you have setup Enrich, the process for taking the raw data generated by the collector, cleaning and enriching it will be automated."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/"},"Setup Enrich")," now")),(0,n.kt)("h2",{id:"setup-alternative-data-stores-eg-redshift-snowflakedb-elastic-indicative"},"Setup alternative data stores (e.g. Redshift, SnowflakeDB, Elastic, Indicative)"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(78577).Z,width:"699",height:"125"})),(0,n.kt)("p",null,"Most Snowplow users store their web event data in at least two places: S3 for processing in Spark (e.g. to enable machine learning via MLLib) and a database (e.g. Redshift) for more traditional OLAP analysis."),(0,n.kt)("p",null,"The RDB Loader is an EMR step to regularly transfer data from S3 into other databases e.g. Redshift. If you ",(0,n.kt)("strong",{parentName:"p"},"only")," wish to process your data using Spark on EMR, you do not need to setup the RDB Loader. However, if you would find it convenient to have your data in another data store (e.g. Redshift) then you can set this up at this stage."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/"},"Setup loading data into different destinations"),".")),(0,n.kt)("h2",{id:"data-modeling"},"Data modeling"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(97678).Z,width:"699",height:"125"})),(0,n.kt)("p",null,"Once your data is stored in S3 and Redshift, the basic setup is complete. You now have access to the event stream: a long list of packets of data, where each packet represents a single event. While it is possible to do analysis directly on this event stream, it is common to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Join event-level data with other data sets (e.g. customer data)"),(0,n.kt)("li",{parentName:"ol"},"Aggregate event-level data into smaller data sets (e.g. sessions)"),(0,n.kt)("li",{parentName:"ol"},"Apply business logic (e.g. user segmentation)")),(0,n.kt)("p",null,"We call this process ",(0,n.kt)("em",{parentName:"p"},"data modeling"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-data-models/"},"Get started with data modeling in Snowplow!"))),(0,n.kt)("h2",{id:"analyse-your-data"},"Analyse your data!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(12847).Z,width:"699",height:"125"})),(0,n.kt)("p",null,"Now that data is stored in S3 and potentially also Redshift, you are in a position to start analyzing the event stream or data from the derived tables in Redshift, if a data model has been built. As part of the setup guide we run through the steps necessary to perform some initial analysis and plugin a couple of analytics tools, to get you started."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modeling-your-data/analytics-sdk/"},"Get started analysing Snowplow data!"))),(0,n.kt)("p",null,"You now have all six Snowplow subsystems working! The Snowplow setup is complete!"))}d.isMDXComponent=!0},54973:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-all-44f076e61b669561e7708cf4b3edb22e.png"},12847:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-analytics-3498f005bf6469d4f472061bdcc14d6d.png"},91302:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-collector-785db1c8bef9e6095363ebd7c9037824.png"},97678:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-datamodeling-64316f9e83ef457c4591c92c1807a9a3.png"},46442:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-enrich-3830b3fb3be004407b2881d34d056cf9.png"},78577:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-storage-e0b192593efd1b6d49ab3c40a4e58778.png"},81971:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-trackers-24dd0780ff0a125a0a8dff4fe8e5ae51.png"},19394:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/snowplow-aws-pipeline-webhooks-764193bf2c10bfed56eb46d409b62a56.png"}}]);