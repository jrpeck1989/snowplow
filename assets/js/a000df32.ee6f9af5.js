"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1104],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(a),k=r,u=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60134:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Sending events",date:"2020-02-26",sidebar_position:30},i=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/sending-events/index",id:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/sending-events/index",title:"Sending events",description:"Additional type safety",source:"@site/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/sending-events/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/sending-events",slug:"/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/sending-events/",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/sending-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/sending-events/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:30,frontMatter:{title:"Sending events",date:"2020-02-26",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/initialization/"},next:{title:"Subject methods",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-5-0/subject-methods/"}},p={},c=[{value:"Additional type safety",id:"additional-type-safety",level:3},{value:"<code>trackSelfDescribingEvent</code>",id:"trackselfdescribingevent",level:3},{value:"<code>trackStructEvent</code>",id:"trackstructevent",level:3},{value:"<code>trackPageView</code>",id:"trackpageview",level:3},{value:"<code>trackError</code>",id:"trackerror",level:3},{value:"<code>trackAddToCart</code>",id:"trackaddtocart",level:3},{value:"<code>trackRemoveFromCart</code>",id:"trackremovefromcart",level:3},{value:"<code>trackTransaction</code>",id:"tracktransaction",level:3},{value:"<code>trackTransactionItem</code>",id:"tracktransactionitem",level:3},{value:"Setting timestamp",id:"setting-timestamp",level:3}],d={toc:c};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"additional-type-safety"},"Additional type safety"),(0,r.kt)("p",null,"Since 0.5.0 self-describing events and contexts can be sent with ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaKey"),"\xa0wrapper from\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/wiki/Scala-iglu-core"},"Iglu Core"),"\xa0for additional type-safety."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val pageTypeContext = SelfDescribingJson(\n  SchemaKey("com.acme", "page_type", "jsonschema", SchemaVer(1,0,0)),\n  ("type" -> "promotional") ~ ("backgroundColor" -> "red")\n)\nt.trackPageView(url, contexts = List(pageTypeContext))\n')),(0,r.kt)("h3",{id:"trackselfdescribingevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackSelfDescribingEvent")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent"),"\xa0to track a custom Self-describing events (previously known as Unstructured Events) which consists of a name and an unstructured set of properties. This is useful when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to track event types which are proprietary/specific to your business (i.e. not already part of Snowplow), or"),(0,r.kt)("li",{parentName:"ul"},"You want to track events which have unpredictable or frequently changing properties")),(0,r.kt)("p",null,"You can use its alias\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackUnstructEvent"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unstructuredEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"Self-describing JSON containing unstructured event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelfDescribingJson"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contexts")),(0,r.kt)("td",{parentName:"tr",align:null},"List of custom contexts for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List[SelfDescribingJson]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Device created timestamp or true timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[Timestamp]"))))),(0,r.kt)("p",null,"Create a Snowplow unstructured event\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/wiki/Self-describing-JSONs"},"self-describing JSON"),"\xa0using the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/json4s/json4s#dsl-rules"},"json4s DSL"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.json4s.JsonDSL._\n\nval productViewEvent = SelfDescribingJson(\n  "iglu:com.acme/product_view/jsonschema/1-0-0",\n  ("userType" -> "tester") ~ ("sku" -> "0000013")\n)\n')),(0,r.kt)("p",null,"Send it using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackSelfDescribingEvent"),"\xa0tracker method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"tracker.trackSelfDescribingEvent(productViewEvent)\n")),(0,r.kt)("p",null,"You can attach any number of custom contexts to an event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val pageTypeContext = SelfDescribingJson(\n  "iglu:com.acme/page_type/jsonschema/1-0-0",\n  ("type" -> "promotional") ~ ("backgroundColor" -> "red")\n)\n\nval userContext = SelfDescribingJson(\n  "iglu:com.acme/user/jsonschema/1-0-0",\n  ("userType" -> "tester")\n)\n\nt.trackSelfDescribingEvent(productViewEvent, List(pageTypeContext, userContext))\n')),(0,r.kt)("h3",{id:"trackstructevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackStructEvent")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackStructEvent"),"\xa0to track a custom event happening in your app which fits the Google Analytics-style structure of having up to five fields (with only the first two required)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"action"),"\xa0belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"A string to provide additional dimensions to the event data"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[String]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"property")),(0,r.kt)("td",{parentName:"tr",align:null},"A string describing the object or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[String]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"A value to provide numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[Double]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contexts")),(0,r.kt)("td",{parentName:"tr",align:null},"List of custom contexts for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List[SelfDescribingJson]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Device created timestamp or true timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[Timestamp]"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val pageTypeContext = SelfDescribingJson(\n  "iglu:com.acme/page_type/jsonschema/1-0-0",\n  ("type" -> "promotional") ~ ("backgroundColor" -> "red")\n)\n\nval userContext = SelfDescribingJson(\n  "iglu:com.acme/user/jsonschema/1-0-0",\n  ("userType" -> "tester")\n)\n\nt.trackStructEvent("commerce", "order", property=Some("book"), contexts=List(pageTypeContext, userContext))\n')),(0,r.kt)("h3",{id:"trackpageview"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackPageView")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackPageView"),"\xa0to track a user viewing a page within your app. Arguments are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pageUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the page"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pageTitle")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the page"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[String]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"referrer")),(0,r.kt)("td",{parentName:"tr",align:null},"The address which linked to the page"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[String]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contexts")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom contexts for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List[SelfDescribingJson]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the pageview occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[Timestamp]"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'t.trackPageView("www.example.com", Some("example"), Some("www.referrer.com"))\n')),(0,r.kt)("h3",{id:"trackerror"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackError")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackError"),"\xa0to track exceptions raised during your app's execution. Arguments are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Validation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"Any throwable need to be tracked"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Throwable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contexts")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom contexts for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List[SelfDescribingJson]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the pageview occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option[Timestamp]"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"try {\n  1 / 0\n} catch {\n  case e: java.lang.ArithmeticException =>\n    t.trackError(e)\n}\n")),(0,r.kt)("p",null,"Note: this tracker should not be used to track exceptions happening in tracker itself, use\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Scala-Tracker#callbacks"},"callbacks"),"\xa0mechanism for that."),(0,r.kt)("h3",{id:"trackaddtocart"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackAddToCart")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackAddToCart"),"\xa0to track an add-to-cart event."),(0,r.kt)("h3",{id:"trackremovefromcart"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackRemoveFromCart")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackRemoveFromCart"),"\xa0to track a remove-from-cart event."),(0,r.kt)("h3",{id:"tracktransaction"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackTransaction")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackTransaction"),"\xa0to record view of transaction. Fire a ",(0,r.kt)("inlineCode",{parentName:"p"},"trackTransaction"),"\xa0to register the transaction, and then fire ",(0,r.kt)("inlineCode",{parentName:"p"},"trackTransactionItem"),"\xa0to log specific data about the items that were part of that transaction."),(0,r.kt)("h3",{id:"tracktransactionitem"},(0,r.kt)("inlineCode",{parentName:"h3"},"trackTransactionItem")),(0,r.kt)("p",null,"To track an ecommerce transaction item. Fire a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackTransaction"),"\xa0to register the transaction, and then fire\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackTransactionItem"),"\xa0to log specific data about the items that were part of that transaction."),(0,r.kt)("h3",{id:"setting-timestamp"},"Setting timestamp"),(0,r.kt)("p",null,"By default, Scala Tracker will generate a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"dvce_created_tstamp"),"\xa0and add it to event payload. You also can manually set it using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),"\xa0argument in all tracking methods. It should be in milliseconds since the Unix epoch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"tracker.trackSelfDescribingEvent(productViewEvent, Nil, Some(1432806619000L))\n")),(0,r.kt)("p",null,"Beside of it, you can set\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"true_tstamp"),'\xa0if you have more reliable source about event timestamp. You can tag timstamp as "true" using class\xa0',(0,r.kt)("inlineCode",{parentName:"p"},"TrueTimestamp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"tracker.trackSelfDescribingEvent(productViewEvent, Nil, Some(Tracker.TrueTimestamp(1432806619000L)))\n")),(0,r.kt)("p",null,"Now event will be sent with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ttm"),"\xa0parameter instead of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"dtm"),"."))}s.isMDXComponent=!0}}]);