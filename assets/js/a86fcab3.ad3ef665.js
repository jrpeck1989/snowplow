"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[92386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),a=n(67294),r=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:f,groupId:h,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),b=(0,l.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:C}=(0,s.U)(),[N,T]=(0,a.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),o=k[n].value;o!==N&&(E(t),T(o),null!=h&&C(h,String(o)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=x.indexOf(e.currentTarget)+1;n=null!=(o=x[t])?o:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:S,onFocus:O,onClick:O},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},38231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={title:"Configuring how events are sent",date:"2022-08-30",sidebar_position:40},s="Configuring how events are sent",u={unversionedId:"collecting-data/collecting-from-own-applications/mobile-trackers/configuring-how-events-are-sent/index",id:"collecting-data/collecting-from-own-applications/mobile-trackers/configuring-how-events-are-sent/index",title:"Configuring how events are sent",description:"A user interacts with your app: an event is generated and tracked using track method of TrackerController. But the event must be sent to your event collector, to enter your pipeline, before it has any value.",source:"@site/docs/collecting-data/collecting-from-own-applications/mobile-trackers/configuring-how-events-are-sent/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/mobile-trackers/configuring-how-events-are-sent",slug:"/collecting-data/collecting-from-own-applications/mobile-trackers/configuring-how-events-are-sent/",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/configuring-how-events-are-sent/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/mobile-trackers/configuring-how-events-are-sent/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:40,frontMatter:{title:"Configuring how events are sent",date:"2022-08-30",sidebar_position:40},sidebar:"defaultSidebar",previous:{title:"Tracking specific client-side properties",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/client-side-properties/"},next:{title:"Set up the remote configuration",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/remote-configuration/"}},c={},p=[{value:"Configuring the network connection",id:"configuring-the-network-connection",level:2},{value:"Persisting events with a custom EventStore",id:"persisting-events-with-a-custom-eventstore",level:2},{value:"What happens if an event fails to send?",id:"what-happens-if-an-event-fails-to-send",level:2},{value:"Configuring how many events to send in one request",id:"configuring-how-many-events-to-send-in-one-request",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-how-events-are-sent"},"Configuring how events are sent"),(0,a.kt)("p",null,"A user interacts with your app: an event is generated and tracked using ",(0,a.kt)("inlineCode",{parentName:"p"},"track")," method of ",(0,a.kt)("inlineCode",{parentName:"p"},"TrackerController"),". But the event must be sent to your event collector, to enter your pipeline, before it has any value."),(0,a.kt)("p",null,"The tracker allows the configuration of the network connection, event sending, and buffering of events. The default configurations will be sufficient for many Snowplow users but a better fine tuning can be set through the ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitterConfiguration"),"."),(0,a.kt)("h2",{id:"configuring-the-network-connection"},"Configuring the network connection"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkConfiguration")," is used to specify the collector endpoint:"),(0,a.kt)(r.Z,{groupId:"platform",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ios",label:"iOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let networkConfig = NetworkConfiguration(endpoint: "http://collector-endpoint")\n'))),(0,a.kt)(i.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'NetworkConfiguration networkConfig = new NetworkConfiguration("http://collector-endpoint");\n')))),(0,a.kt)("p",null,'The URL path for your collector endpoint should include the protocol, "http" or "https". If not included in the URL, "https" connection will be used by default.'),(0,a.kt)("p",null,"In particular cases it can be useful to have a full control of the component in charge to send the events. This can be achieved with a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkConnection")," that will take care to send the events to the collector:"),(0,a.kt)(r.Z,{groupId:"platform",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ios",label:"iOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let network = DefaultNetworkConnection.build { (builder) in\n      builder.setUrlEndpoint(url)\n      builder.setHttpMethod(method)\n      builder.setEmitThreadPoolSize(20)\n      builder.setByteLimitPost(52000)\n}\nlet networkConfig = NetworkConfiguration(networkConnection: network)\n")),(0,a.kt)("p",null,"In the example above we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultNetworkConnection")," but it can be used any custom component that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkConnection")," interface.")),(0,a.kt)(i.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"OkHttpNetworkConnection connection =\n      new OkHttpNetworkConnection.OkHttpNetworkConnectionBuilder(url, getApplicationContext())\n            .method(method)\n            .emitTimeout(10)\n            .build();\n\nNetworkConfiguration networkConfig = new NetworkConfiguration(connection);\n")),(0,a.kt)("p",null,"In the example above we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"OkHttpNetworkConnection")," but it can be used any custom component that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkConnection")," interface."))),(0,a.kt)("h2",{id:"persisting-events-with-a-custom-eventstore"},"Persisting events with a custom EventStore"),(0,a.kt)("p",null,"The tracker sends events asynchrounously in batches using POST requests. In case the collector is not reachable, the events are stored in an internal component called ",(0,a.kt)("inlineCode",{parentName:"p"},"EventStore")," based on a SQLite database. The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventStore")," can be overriden with a custom one in case the developer require a different solution to persist the events before sending."),(0,a.kt)(r.Z,{groupId:"platform",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ios",label:"iOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let eventStore = SQLiteEventStore(namespace: kNamespace);\nlet emitterConfig = EmitterConfiguration()\n      .eventStore(eventStore)\n"))),(0,a.kt)(i.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"EventStore eventStore = new SQLiteEventStore(getApplicationContext(), kNamespace);\n\nEmitterConfiguration emitterConfiguration = new EmitterConfiguration()\n      .eventStore(eventStore);\n")))),(0,a.kt)("p",null,"In the example above we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"SQLiteEventStore")," but it can be used any custom component that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventStore")," interface."),(0,a.kt)("h2",{id:"what-happens-if-an-event-fails-to-send"},"What happens if an event fails to send?"),(0,a.kt)("p",null,"To prevent unnecessary requests being made while the collector is unavailable, a backoff is added to all subsequent event sending attempts. This resets after a request is successful."),(0,a.kt)("p",null,"The tracker has an option for setting response codes not to retry after. The intended use is for codes such as ",(0,a.kt)("inlineCode",{parentName:"p"},"400 Bad Request"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"401 Unauthorised"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"403 Forbidden"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"410 Gone"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"422 Unprocessable Entity"),". When received in response from the Collector, the tracker doesn't retry to send events. Requests with all other 3xx, 4xx, and 5xx status codes are retried. The set of status codes for which events should be retried or not is customizable in ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitterConfiguration"),"."),(0,a.kt)("p",null,"By default, the tracker retries sending events on all 3xx, 4xx, and 5xx status codes except the status codes indicated above. You may override the default behaviour using the ",(0,a.kt)("inlineCode",{parentName:"p"},"customRetryForStatusCodes"),". Please note that not retrying sending events to the Collector means that the events will be dropped when they fail to be sent. The ",(0,a.kt)("inlineCode",{parentName:"p"},"customRetryForStatusCodes")," needs a dictionary that maps integers (status codes) to booleans (true for retry and false for not retry)."),(0,a.kt)(r.Z,{groupId:"platform",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ios",label:"iOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let emitterConfig = EmitterConfiguration()\n    .customRetryForStatusCodes({403, true}) // retry sending events even if collector returns 403 status\n"))),(0,a.kt)(i.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"EmitterConfiguration emitterConfiguration = new EmitterConfiguration()\n      .customRetryForStatusCodes(new HashMap<>() {{ put(403, true); }});\n")))),(0,a.kt)("h2",{id:"configuring-how-many-events-to-send-in-one-request"},"Configuring how many events to send in one request"),(0,a.kt)("p",null,"The tracker sends events in batches. The tracker allows only a choice of 1 (",(0,a.kt)("inlineCode",{parentName:"p"},"BufferOption.single"),"), 10 (",(0,a.kt)("inlineCode",{parentName:"p"},"BufferOption.defaultGroup"),") or 25 (",(0,a.kt)("inlineCode",{parentName:"p"},"BufferOption.largeGroup"),") events per payload. The tracker sends the events as soon as possible using the ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferOption.Single")," option. Even with a different batching option the events are sent as soon as the event sending is automatically triggered after 5 seconds."),(0,a.kt)("p",null,"Configure the batch size like this:"),(0,a.kt)(r.Z,{groupId:"platform",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ios",label:"iOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let emitterConfig = EmitterConfiguration()\n      .bufferOption(BufferOption.defaultGroup)\n"))),(0,a.kt)(i.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"EmitterConfiguration emitterConfiguration = new EmitterConfiguration()\n      .bufferOption(BufferOption.DefaultGroup);\n")))))}m.isMDXComponent=!0}}]);