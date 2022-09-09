"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[34553],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,v=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"Analytics SDK - Scala",date:"2020-11-02",sidebar_position:100},o=void 0,l={unversionedId:"modeling-your-data/analytics-sdk/analytics-sdk-scala/index",id:"modeling-your-data/analytics-sdk/analytics-sdk-scala/index",title:"Analytics SDK - Scala",description:"1\\. Overview",source:"@site/docs/modeling-your-data/analytics-sdk/analytics-sdk-scala/index.md",sourceDirName:"modeling-your-data/analytics-sdk/analytics-sdk-scala",slug:"/modeling-your-data/analytics-sdk/analytics-sdk-scala/",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-scala/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/modeling-your-data/analytics-sdk/analytics-sdk-scala/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:100,frontMatter:{title:"Analytics SDK - Scala",date:"2020-11-02",sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Analytics SDKs",permalink:"/docs/modeling-your-data/analytics-sdk/"},next:{title:"Analytics SDK - JavaScript",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-javascript/"}},s={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Compatibility",id:"2-compatibility",level:2},{value:"3. Setup",id:"3-setup",level:2},{value:"3.1 SBT",id:"31-sbt",level:3},{value:"3.2 Gradle",id:"32-gradle",level:3},{value:"3.3 Maven",id:"33-maven",level:3},{value:"4. Scala Analytics SDK Event Transformer",id:"4-scala-analytics-sdk-event-transformer",level:2},{value:"4.1 Overview",id:"41-overview",level:3},{value:"4.2 The JSON Event Transformer",id:"42-the-json-event-transformer",level:3},{value:"Event inventory",id:"event-inventory",level:4},{value:"4.3 Examples",id:"43-examples",level:3},{value:"4.3.1 Using from Apache Spark",id:"431-using-from-apache-spark",level:4},{value:"4.3.2 Using from AWS Lambda",id:"432-using-from-aws-lambda",level:4}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-overview"},"1","."," Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-scala-analytics-sdk"},"Snowplow Analytics SDK for Scala")," lets you work with ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/canonical-event/"},"Snowplow enriched events")," in your Scala event processing,",(0,i.kt)("br",{parentName:"p"}),"\n","data modeling and machine-learning jobs. You can use this SDK with ",(0,i.kt)("a",{parentName:"p",href:"http://spark.apache.org/"},"Apache Spark"),", ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),", ",(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/twitter/scalding"},"Scalding"),", ",(0,i.kt)("a",{parentName:"p",href:"http://samza.apache.org/"},"Apache Samza")," and other JVM-compatible data processing frameworks."),(0,i.kt)("p",null,"The Scala Analytics SDK makes it significantly easier to build applications that consume Snowplow enriched data directly from Kinesis or S3."),(0,i.kt)("h2",{id:"2-compatibility"},"2","."," Compatibility"),(0,i.kt)("p",null,"Snowplow Scala Analytics SDK was compiled against Scala versions 2.12 and 2.13.\nMinimum required Java Runtime is JRE8."),(0,i.kt)("h2",{id:"3-setup"},"3","."," Setup"),(0,i.kt)("p",null,"The latest version of Snowplow Scala Analytics SDK is 2.1.0 and it is available on Maven Central."),(0,i.kt)("h3",{id:"31-sbt"},"3.1 SBT"),(0,i.kt)("p",null,"If you\u2019re using SBT, add the following lines to your build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Dependency\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-analytics-sdk" % "2.1.0"\n')),(0,i.kt)("p",null,"Note the double percent (",(0,i.kt)("inlineCode",{parentName:"p"},"%%"),") between the group and artifactId. This will ensure that you get the right package for your Scala version."),(0,i.kt)("h3",{id:"32-gradle"},"3.2 Gradle"),(0,i.kt)("p",null,"If you are using Gradle in your own job, then add following lines in your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    // Snowplow Scala Analytics SDK\n    compile 'com.snowplowanalytics:snowplow-scala-analytics-sdk_2.12:2.1.0'\n    }\n")),(0,i.kt)("p",null,"Note that you need to change ",(0,i.kt)("inlineCode",{parentName:"p"},"_2.12")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"_2.13")," in artifactId if you're using Scala 2.13."),(0,i.kt)("h3",{id:"33-maven"},"3.3 Maven"),(0,i.kt)("p",null,"If you are using Maven in your own job, then add following lines in your ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-analytics-sdk_2.12</artifactId>\n    <version>2.1.0</version>\n</dependency>\n")),(0,i.kt)("p",null,"Note that you need to change ",(0,i.kt)("inlineCode",{parentName:"p"},"_2.12")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"_2.13")," in artifactId if you're using Scala 2.13."),(0,i.kt)("h2",{id:"4-scala-analytics-sdk-event-transformer"},"4","."," Scala Analytics SDK Event Transformer"),(0,i.kt)("h3",{id:"41-overview"},"4.1 Overview"),(0,i.kt)("p",null,"The Snowplow enriched event is a relatively complex TSV string containing scalars and self-describing JSONs.",(0,i.kt)("br",{parentName:"p"}),"\n","Rather than work with this structure directly, Snowplow analytics SDKs ship with ",(0,i.kt)("em",{parentName:"p"},"event transformers"),", which translate the Snowplow enriched event format into other formats that are more convenient for engineers and analysts."),(0,i.kt)("p",null,"As the Snowplow enriched event format evolves towards a cleaner ",(0,i.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Apache Avro"),"-","based structure, we will be updating this SDK to maintain compatibility across different enriched event versions."),(0,i.kt)("p",null,"Working with the Snowplow Scala Analytics SDK therefore has two major advantages over working with Snowplow enriched events directly:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The SDK reduces your development time by providing analyst- and developer-friendly transformations of the Snowplow enriched event format;"),(0,i.kt)("li",{parentName:"ol"},"The SDK futureproofs your code against new releases of Snowplow which update our enriched event format.")),(0,i.kt)("p",null,"Currently the Analytics SDK for Scala ships with one event transformer: the JSON Event Transformer."),(0,i.kt)("h3",{id:"42-the-json-event-transformer"},"4.2 The JSON Event Transformer"),(0,i.kt)("p",null,"The JSON Event Transformer takes a Snowplow enriched event and converts it into a JSON ready for further processing. This transformer was adapted from the code used to load Snowplow events into Elasticsearch in the Kinesis real-time pipeline."),(0,i.kt)("p",null,"The JSON Event Transformer converts a Snowplow enriched event into an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," case class, a representation of a canonical Snowplow event, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Event(\n  app_id = Some("angry-birds"),\n  platform = Some("web"),\n  etl_tstamp = Some(Instant.parse("2017-01-26T00:01:25.292Z")),\n  collector_tstamp = Instant.parse("2013-11-26T00:02:05Z"),\n  dvce_created_tstamp = Some(Instant.parse("2013-11-26T00:03:57.885Z")),\n  event = Some("page_view"),\n  event_id = UUID.fromString("c6ef3124-b53a-4b13-a233-0088f79dcbcb"),\n  txn_id = Some(41828),\n  name_tracker = Some("cloudfront-1"),\n  v_tracker = Some("js-2.1.0"),\n  v_collector = "clj-tomcat-0.1.0",\n  v_etl = "serde-0.5.2"\n  /* ... */\n)\n')),(0,i.kt)("p",null,"This case class can be rendered into a JSON object, and subsequently a JSON string, or worked with to interact with the event's fields in a typesafe manner."),(0,i.kt)("p",null,"The most complex piece of processing is the handling of the self-describing JSONs found in the enriched event's ",(0,i.kt)("inlineCode",{parentName:"p"},"unstruct_event"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"contexts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"derived_contexts")," fields. Currently there are two alternative behaviors for handling them in the event transformer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Under the original "lossy" behavior, if an enriched event contained a ',(0,i.kt)("inlineCode",{parentName:"li"},"com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1"),", then the unstructured event field would be rendered in the final JSON like this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"unstruct_event_com_snowplowanalytics_snowplow_link_click_1": {\n  "targetUrl": "http://www.example.com",\n  "elementClasses": ["foreground"],\n  "elementId": "exampleLink"\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'Under the new "lossless" behavior, available since 0.3.1, if an enriched event contained a ',(0,i.kt)("inlineCode",{parentName:"li"},"com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1"),", then the final JSON (if turned into a string) would contain a self-describing JSON object instead:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"unstruct_event": {\n  "schema": "iglu:com.snowplowanalytics.snowplow/link_click/1-0-1",\n  "data": {\n    "targetUrl": "http://www.example.com",\n    "elementClasses": ["foreground"],\n    "elementId": "exampleLink"\n  }\n}\n')),(0,i.kt)("p",null,"Along with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," case class, the JSON Event Transformer comes with the following functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Event.parse(line)")," - similar to the old ",(0,i.kt)("inlineCode",{parentName:"li"},"transform")," function, this method accepts an enriched Snowplow event as a string and returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," instance as a result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event.toJson(lossy)")," - similar to the old ",(0,i.kt)("inlineCode",{parentName:"li"},"getValidatedJsonEvent")," function, it transforms an ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," into a validated JSON whose keys are the field names corresponding to the EnrichedEvent POJO of the Scala Common Enrich project. If the lossy argument is true, any self-describing events in the fields (unstruct","_","event, contexts and derived","_",'contexts) are returned in a "shredded" format, e.g. ',(0,i.kt)("inlineCode",{parentName:"li"},'"unstruct_event_com_acme_1_myField": "value"'),". If it is set to false, they are not flattened into underscore-separated top-level fields, using a standard self-describing format instead."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event.inventory")," - extracts metadata from the event containing information about the types and Iglu URIs of its shred properties (unstruct","_","event, contexts and derived","_","contexts). Unlike version 0.3.0, it no longer requires a ",(0,i.kt)("inlineCode",{parentName:"li"},"transformWithInventory")," call and can be obtained from any ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"atomic")," - returns the event as a map of keys to Circe JSON values, while dropping inventory fields. This method can be used to modify an event's JSON AST before converting it into a final result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ordered")," - returns the event as a list of key/Circe JSON value pairs. Unlike ",(0,i.kt)("inlineCode",{parentName:"li"},"atomic"),", which has randomized key ordering, this method returns the keys in the order of the canonical event model, and is particularly useful for working with relational databases.")),(0,i.kt)("h4",{id:"event-inventory"},"Event inventory"),(0,i.kt)("p",null,"An event's inventory is simply a list of metadata about its shredded types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Where it was extracted from: ",(0,i.kt)("inlineCode",{parentName:"li"},"unstruct_event")," column (",(0,i.kt)("inlineCode",{parentName:"li"},"UnstructEvent"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"contexts")," column (",(0,i.kt)("inlineCode",{parentName:"li"},"Contexts(CustomContexts)"),") or ",(0,i.kt)("inlineCode",{parentName:"li"},"derived_contexts")," column (",(0,i.kt)("inlineCode",{parentName:"li"},"Contexts(DerivedContexts)"),")"),(0,i.kt)("li",{parentName:"ol"},"Its Iglu URI (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"iglu:com.acme/context/jsonschema/1-0-0"),"), stored as an Iglu ",(0,i.kt)("inlineCode",{parentName:"li"},"SchemaKey")," instance.")),(0,i.kt)("h3",{id:"43-examples"},"4.3 Examples"),(0,i.kt)("h4",{id:"431-using-from-apache-spark"},"4.3.1 Using from Apache Spark"),(0,i.kt)("p",null,"The Scala Analytics SDK is a great fit for performing Snowplow ",(0,i.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2016/03/16/introduction-to-event-data-modeling/"},"event data modeling")," in Apache Spark and Spark Streaming."),(0,i.kt)("p",null,"Here\u2019s the code we use internally for our own data modeling jobs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import cats.data.Validated\nimport com.snowplowanalytics.snowplow.analytics.scalasdk.Event\n\nval events = input.flatMap(line => \n  Event.parse(line) match {\n    case Validated.Valid(event) => Some(event.toJson(true).noSpaces)\n    case Validated.Invalid(_) => None\n  }\n)\n\nval dataframe = spark.read.json(events: _*)\n")),(0,i.kt)("h4",{id:"432-using-from-aws-lambda"},"4.3.2 Using from AWS Lambda"),(0,i.kt)("p",null,"The Scala Analytics SDK is a great fit for performing analytics-on-write, monitoring or alerting on Snowplow event streams using AWS Lambda."),(0,i.kt)("p",null,"Here\u2019s some sample code for transforming enriched events into JSON inside a Scala Lambda:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import com.snowplowanalytics.snowplow.analytics.scalasdk.Event\n\ndef recordHandler(event: KinesisEvent) {\n\n  val events = for {\n    rec <- event.getRecords\n    line = new String(rec.getKinesis.getData.array())\n    event = Event.parse(line)\n  } yield event\n\n  /* ... */\n}\n")))}p.isMDXComponent=!0}}]);