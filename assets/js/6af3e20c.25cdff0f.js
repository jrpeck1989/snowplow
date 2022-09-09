"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[49651],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,g=p["".concat(s,".").concat(u)]||p[u]||f[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Accessing failed events in file storage",date:"2021-10-13",sidebar_position:50},o=void 0,l={unversionedId:"managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index",id:"managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index",title:"Accessing failed events in file storage",description:"When failed events are generated on your pipeline the raw event payload along with details about the failure are saved into file storage (S3 on AWS, GCS on Google Cloud).",source:"@site/docs/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index.md",sourceDirName:"managing-data-quality/failed-events/accessing-failed-events-in-file-storage",slug:"/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/",permalink:"/docs/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:50,frontMatter:{title:"Accessing failed events in file storage",date:"2021-10-13",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Understanding failed events",permalink:"/docs/managing-data-quality/failed-events/understanding-failed-events/"},next:{title:"Monitoring failed events in the Console",permalink:"/docs/managing-data-quality/failed-events/failed-events-in-the-ui/"}},s={},d=[{value:"Retrieving raw data from S3 on AWS",id:"retrieving-raw-data-from-s3-on-aws",level:2},{value:"Retrieving raw data from GCS on GCP",id:"retrieving-raw-data-from-gcs-on-gcp",level:2}],c={toc:d};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When failed events are generated on your pipeline the raw event payload along with details about the failure are saved into file storage (S3 on AWS, GCS on Google Cloud)."),(0,i.kt)("p",null,"You can directly access and download examples of events that are failing from file storage, this is useful for further investigation and also required to design a recovery using the Recovery Builder."),(0,i.kt)("h2",{id:"retrieving-raw-data-from-s3-on-aws"},"Retrieving raw data from S3 on AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to your AWS Console account and navigate to the sub-account that contains your Snowplow pipeline"),(0,i.kt)("li",{parentName:"ul"},"Navigate to your S3 storage buckets"),(0,i.kt)("li",{parentName:"ul"},"You should find a bucket with a name ending in ",(0,i.kt)("inlineCode",{parentName:"li"},"-kinesis-s3-bad")," and within that a folder with your pipeline name e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"prod1")),(0,i.kt)("li",{parentName:"ul"},"Navigate into this folder and you should see ",(0,i.kt)("inlineCode",{parentName:"li"},"partitioned")," (search if it isn't visible), and within this a folder for each type of failed event. Select the relevant type for the failed events you wish to find."),(0,i.kt)("li",{parentName:"ul"},"You can now browse the folder using date and time to find a batch of failed events that occurred on that date / time period.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(64702).Z,width:"1276",height:"781"})),(0,i.kt)("p",null,"Step 1 - login to AWS and navigate to S3, find or search for the '-kinesis-s3-bad' folder for your pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(39386).Z,width:"1276",height:"781"})),(0,i.kt)("p",null,"Step 2 - locate or search for the folder called 'partitioned'"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(39386).Z,width:"1276",height:"781"})),(0,i.kt)("p",null,"Step 3 - select the relevant folder for your error type"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(13554).Z,width:"1276",height:"781"})),(0,i.kt)("p",null,"Step 4 - use the date and timestamps to find a batch of failed events that will contain an example of the event you wish to find"),(0,i.kt)("h2",{id:"retrieving-raw-data-from-gcs-on-gcp"},"Retrieving raw data from GCS on GCP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to your Google Cloud Platform account and navigate to the project that contains your Snowplow pipeline"),(0,i.kt)("li",{parentName:"ul"},"Navigate to your Google Cloud Storage buckets"),(0,i.kt)("li",{parentName:"ul"},"You should find a bucket named with a prefix of ",(0,i.kt)("inlineCode",{parentName:"li"},"sp-storage-loader-bad")),(0,i.kt)("li",{parentName:"ul"},"Navigating into this you should see ",(0,i.kt)("inlineCode",{parentName:"li"},"partitioned"),", and within this a folder for each type of failed event. Select the relevant type for the failed event you wish to find."),(0,i.kt)("li",{parentName:"ul"},"You can now drill down by year, month, day, and hour to find a batch of failed events that occured on that date / time period.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(64794).Z,width:"1409",height:"886"})),(0,i.kt)("p",null,"Step 1 - find the right folder"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(58966).Z,width:"1409",height:"886"})),(0,i.kt)("p",null,"Step 2 - select the partitioned folder"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(27346).Z,width:"1409",height:"886"})),(0,i.kt)("p",null,"Step 3 - select the relevant folder for your error type"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(62744).Z,width:"1409",height:"886"})),(0,i.kt)("p",null,"Step 4 - drill down into the folder structure by year, month, day and time"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(22007).Z,width:"1409",height:"886"})),(0,i.kt)("p",null,"Step 5 - once you find the raw files you can download them and view them in a text editor"))}f.isMDXComponent=!0},64794:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-gcs-1-ba52c0737b95e4a2f54777cfccef3df2.jpg"},58966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-gcs-2-a91853d0d0df4501d25a7f4d3a964281.jpg"},27346:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-gcs-3-46e49ccef31512c9375deafa5f115c96.jpg"},62744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-gcs-6-25555744ddb50b7026df16975f0350f6.jpg"},22007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-gcs-7-26a0e6a98aea028185da83ff11409ca9.jpg"},64702:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-s3-1-84031c8dbe10799d17c6f929c7d5fd54.jpg"},39386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-s3-4-76b13fa30ce9af8ec672e4b5e23f5a36.jpg"},13554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed-evs-s3-5-08e23c59d143d1cb880d89e84e16a35b.jpg"}}]);