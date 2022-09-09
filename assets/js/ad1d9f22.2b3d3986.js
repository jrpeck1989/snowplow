"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[71963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||n;return r?o.createElement(u,i(i({ref:t},c),{},{components:r})):o.createElement(u,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={title:"Stream Collector",date:"2020-11-02",sidebar_position:20},i=void 0,l={unversionedId:"pipeline-components-and-applications/stream-collector/index",id:"pipeline-components-and-applications/stream-collector/index",title:"Stream Collector",description:"The Stream Collector receives raw Snowplow events sent over HTTP by trackers or webhooks. It serializes them to a\xa0Thrift\xa0record format, and then writes them to a sink. Currently supported sinks are:",source:"@site/docs/pipeline-components-and-applications/stream-collector/index.md",sourceDirName:"pipeline-components-and-applications/stream-collector",slug:"/pipeline-components-and-applications/stream-collector/",permalink:"/docs/pipeline-components-and-applications/stream-collector/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/stream-collector/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:20,frontMatter:{title:"Stream Collector",date:"2020-11-02",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Snowplow 21.04 Pennine Alps",permalink:"/docs/pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-04-pennine-alps/"},next:{title:"Set up the stream collector",permalink:"/docs/pipeline-components-and-applications/stream-collector/setup/"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"User identification",id:"user-identification",level:3},{value:"Collector stream formats",id:"collector-stream-formats",level:3},{value:"Beyond the collector",id:"beyond-the-collector",level:2},{value:"Technical architecture",id:"technical-architecture",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Stream Collector receives raw Snowplow events sent over HTTP by ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/"},"trackers")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-data-from-third-parties/"},"webhooks"),". It serializes them to a\xa0",(0,a.kt)("a",{parentName:"p",href:"http://thrift.apache.org/"},"Thrift"),"\xa0record format, and then writes them to a sink. Currently supported sinks are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://aws.amazon.com/kinesis/"},"Amazon Kinesis")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/pubsub/"},"Google PubSub")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://kafka.apache.org/"},"Apache Kafka")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://nsq.io/"},"NSQ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/sqs/"},"Amazon SQS")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"stdout"),"\xa0for a custom stream collection process")),(0,a.kt)("p",null,"The Stream Collector supports cross-domain Snowplow deployments, setting a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"user_id"),"\xa0(used to identify unique visitors) server side to reliably identify the same user across domains.",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Scala-stream-collector#how-it-works"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("h3",{id:"user-identification"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Scala-stream-collector#user-identification"}),"User identification"),(0,a.kt)("p",null,"The Stream Collector allows the use of a third-party cookie, making user tracking across domains possible."),(0,a.kt)("p",null,"In a nutshell: the Stream Collector receives events from a tracker, sets/updates a third-party user tracking cookie, and returns the pixel to the client. The ID in this third-party user tracking cookie is stored in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"network_userid"),"\xa0field in Snowplow events."),(0,a.kt)("p",null,"In pseudocode terms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'if (request contains an "sp" cookie) {\n    Record that cookie as the user identifier\n    Set that cookie with a now+1 year cookie expiry\n    Add the headers and payload to the output array\n} else {\n    Set the "sp" cookie with a now+1 year cookie expiry\n    Add the headers and payload to the output array\n}\n')),(0,a.kt)("h3",{id:"collector-stream-formats"},"Collector stream formats"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Stream collector"),"\xa0produces\xa0",(0,a.kt)("strong",{parentName:"p"},"streams"),"\xa0of Snowplow events (records). The data (payload) is serialized by utilizing\xa0",(0,a.kt)("a",{parentName:"p",href:"http://thrift.apache.org/"},"Apache Thrift framefork"),"."),(0,a.kt)("p",null,"Binary serialization allows for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"simpler data structure"),(0,a.kt)("li",{parentName:"ul"},"smaller size"),(0,a.kt)("li",{parentName:"ul"},"faster transfer"),(0,a.kt)("li",{parentName:"ul"},"easier (programmatical) parsing")),(0,a.kt)("p",null,"The Snowplow Thrift raw event format conforms to\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/CollectorPayload/thrift/1-0-0"},"this Thrift schema"),". For easier perception, the structure of the collector payload is depicted below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"struct CollectorPayload {\n    31337: string schema\n\n    // Required fields which are intrinsic properties of HTTP\n    100: string ipAddress\n\n    // Required fields which are Snowplow-specific\n    200: i64 timestamp\n    210: string encoding\n    220: string collector\n\n    // Optional fields which are intrinsic properties of HTTP\n    300: optional string userAgent\n    310: optional string refererUri\n    320: optional string path\n    330: optional string querystring\n    340: optional string body\n    350: optional list&lt;string&gt; headers\n    360: optional string contentType\n\n    // Optional fields which are Snowplow-specific\n    400: optional string hostname\n    410: optional string networkUserId\n}\n")),(0,a.kt)("h2",{id:"beyond-the-collector"},"Beyond the collector"),(0,a.kt)("p",null,"The raw event stream generated by the collector is typically processed by two downstream consumers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enrich"),"\xa0reads thrift-serialized payloads from the raw stream and writes the\xa0",(0,a.kt)("em",{parentName:"li"},"enriched"),"\xa0Snowplow event to another stream."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Snowplow S3 Loader")," (AWS only)\xa0reads thrift-serialized payloads from the raw stream,\xa0",(0,a.kt)("em",{parentName:"li"},"encodes"),"\xa0and wraps them into\xa0",(0,a.kt)("a",{parentName:"li",href:"http://thrift.apache.org/"},"Thrift"),"\xa0by means of\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/twitter/elephant-bird"},"ElephantBird library"),",\xa0",(0,a.kt)("em",{parentName:"li"},"compresses"),"\xa0the data using\xa0",(0,a.kt)("a",{parentName:"li",href:"http://blog.cloudera.com/blog/2009/11/hadoop-at-twitter-part-1-splittable-lzo-compression/"},"splittable LZO"),"\xa0or GZIP , and writes them to\xa0",(0,a.kt)("em",{parentName:"li"},"S3"))),(0,a.kt)("p",null,"The output of Snowplow S3 Loader is a projection of raw event data (serialized Thrift records, not enriched) in the form of a compressed LZO file."),(0,a.kt)("p",null,"Each\xa0",(0,a.kt)("inlineCode",{parentName:"p"},".lzo"),"\xa0file has a corresponding\xa0",(0,a.kt)("inlineCode",{parentName:"p"},".lzo.index"),"\xa0file containing the byte offsets for the LZO blocks, so that the blocks can be processed in parallel using Spark."),(0,a.kt)("p",null,'Generally, the LZO file generated by Snowplow S3 Loader could be depicted as an "onion-like" layered object as shown below.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(16546).Z,width:"540",height:"460"})),(0,a.kt)("h2",{id:"technical-architecture"},"Technical architecture"),(0,a.kt)("p",null,"The Stream Collector is written in scala and built on top of\xa0",(0,a.kt)("a",{parentName:"p",href:"http://doc.akka.io/docs/akka-http/current/scala/http/"},"akka-http"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/stream-collector"},"GitHub repository")))}d.isMDXComponent=!0},16546:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/lzo-file-decc29c12c11921f63dd2dfb33cd542c.png"}}]);