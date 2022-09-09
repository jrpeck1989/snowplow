"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[36643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||a;return n?o.createElement(u,r(r({ref:t},s),{},{components:n})):o.createElement(u,r({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"Pingdom",date:"2020-02-26",sidebar_position:100},r=void 0,l={unversionedId:"collecting-data/collecting-data-from-third-parties/pingdom/index",id:"collecting-data/collecting-data-from-third-parties/pingdom/index",title:"Pingdom",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/pingdom/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/pingdom",slug:"/collecting-data/collecting-data-from-third-parties/pingdom/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/pingdom/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/pingdom/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:100,frontMatter:{title:"Pingdom",date:"2020-02-26",sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"PagerDuty",permalink:"/docs/collecting-data/collecting-data-from-third-parties/pagerduty/"},next:{title:"Sendgrid",permalink:"/docs/collecting-data/collecting-data-from-third-parties/sendgrid/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Configure Pingdom",id:"configure-pingdom",level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.pingdom.com/"},"Pingdom"),"."),(0,i.kt)("p",null,"Available events are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Incident assigned"),(0,i.kt)("li",{parentName:"ul"},"Incident notification of being closed")),(0,i.kt)("h3",{id:"compatibility"},"Compatibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/0.9.14"},"Snowplow 0.9.14"),"+"," (",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors only)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.pingdom.com/Knowledgebase/Article/View/94/0/users-and-alerting-end-points"},"Pingdom webhook API"))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Integrating Pingdom's webhooks into Snowplow is a two-stage process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure Pingdom to send events to Snowplow"),(0,i.kt)("li",{parentName:"ol"},"(Optional) Create the Pingdom events tables into Amazon Redshift")),(0,i.kt)("h2",{id:"configure-pingdom"},"Configure Pingdom"),(0,i.kt)("p",null,"First login to your Pingdom account and click on the\xa0",(0,i.kt)("strong",{parentName:"p"},"Alerting"),"\xa0button which will be on the left hand side of the screen."),(0,i.kt)("p",null,"Now click on\xa0",(0,i.kt)("strong",{parentName:"p"},"Alerting Endpoints"),"\xa0in the submenu and then click the\xa0",(0,i.kt)("strong",{parentName:"p"},"Add Alerting Endpoint"),"\xa0button in the top right hand corner."),(0,i.kt)("p",null,"You should now see the following screen:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41014).Z,width:"980",height:"825"})),(0,i.kt)("p",null,"Fill in the name of your new\xa0",(0,i.kt)("strong",{parentName:"p"},"Alerting Endpoint"),"; for example: 'Snowplow Pingdom Webhook'."),(0,i.kt)("p",null,"Now click\xa0",(0,i.kt)("strong",{parentName:"p"},"Add Contact Method"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select Url/Webhook for the\xa0",(0,i.kt)("strong",{parentName:"li"},"How should we contact you?"),"\xa0dropdown menu."),(0,i.kt)("li",{parentName:"ul"},"Fill in your Collector URL in the\xa0",(0,i.kt)("strong",{parentName:"li"},"Webhook URL"),"\xa0field.")),(0,i.kt)("p",null,"For the\xa0",(0,i.kt)("strong",{parentName:"p"},"Webhook URL"),"\xa0field you will need to provide the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by Pingdom:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.pingdom/v1?aid=<company code>\n")),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"aid="),"\xa0name-value pair in your URI's querystring is optional; this is the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0parameter taken from the\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),". You can use it to specify which company in Pingdom these call complete events belong to. Putting it all together, our setup screen now looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(21398).Z,width:"678",height:"340"})),(0,i.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.pingdom/v1?aid=<company code>&p=<platform code>\n")),(0,i.kt)("p",null,"Supported platform codes can again be found in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,i.kt)("p",null,"After we have finished adding the contact method simply click\xa0",(0,i.kt)("strong",{parentName:"p"},"Save Settings"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(58131).Z,width:"980",height:"550"})),(0,i.kt)("p",null,"You will now need to add this endpoint to your\xa0",(0,i.kt)("strong",{parentName:"p"},"Alert Policies"),"\xa0for the webhook to be used."),(0,i.kt)("p",null,"Navigate to the\xa0",(0,i.kt)("strong",{parentName:"p"},"Alert Policies"),"\xa0page by clicking the\xa0",(0,i.kt)("strong",{parentName:"p"},"Alert Policies"),"\xa0button in the\xa0",(0,i.kt)("strong",{parentName:"p"},"Alerting"),"\xa0submenu."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have not set up an\xa0",(0,i.kt)("strong",{parentName:"li"},"Alert Policy"),"\xa0before please consult this guide before continuing:\xa0",(0,i.kt)("a",{parentName:"li",href:"https://support.pingdom.com/Knowledgebase/Article/View/95/28/setting-up-alerts"},"Setting up Pingdom Alerts"))),(0,i.kt)("p",null,"Now select the policy which you want the webhook to be activated from (click anywhere on the row with the policy), or create an entirely new policy for the webhook."),(0,i.kt)("p",null,"Select the small dropdown arrow at the end of the description of what is currently occuring for this policy and click\xa0",(0,i.kt)("strong",{parentName:"p"},"Edit"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(71889).Z,width:"1204",height:"267"})),(0,i.kt)("p",null,"Now click in the\xa0",(0,i.kt)("strong",{parentName:"p"},"Add more people (cc)"),"\xa0field and type in the name that you gave to your webhook endpoint."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83249).Z,width:"678",height:"475"})),(0,i.kt)("p",null,"Save the changes you have made to the policy, anything being monitored that has this policy assigned will now trigger the webhook as well!"),(0,i.kt)("p",null,"There are other configurations for how you can send information from Pingdom we suggest having a look at the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://support.pingdom.com/Knowledgebase/Article/View/94/0/users-and-alerting-end-points"},"Pingdom webhook API"),"\xa0for more information on contact methods and settings if this method does not suit your needs."))}d.isMDXComponent=!0},41014:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pingdom-1-936a45d317eb5a20e91b2b56ceb452ad.png"},21398:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pingdom-2-7e417e35a971fa0cfa065096fe0057a8.png"},58131:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pingdom-3-78e2312d8f63132275853d7f69bfead0.png"},71889:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pingdom-4-0ea7c774e18ff683c1f5b356b6ad5173.png"},83249:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pingdom-5-d2744589cc056988a56c214610e86103.png"}}]);