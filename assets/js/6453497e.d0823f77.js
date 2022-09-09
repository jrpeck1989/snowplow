"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[75732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(26169);const l={title:"Usage Guide",date:"2020-04-03",sidebar_position:30},r=void 0,s={unversionedId:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/usage-guide/index",id:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/usage-guide/index",title:"Usage Guide",description:"",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/usage-guide/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/usage-guide",slug:"/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/usage-guide/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/usage-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/usage-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:30,frontMatter:{title:"Usage Guide",date:"2020-04-03",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Setup guide for GCP",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/setup-guide-for-aws-2/"},next:{title:"Control Plane API",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-0/control-plane-api/"}},p={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.ZP,{mdxType:"Block2083"}))}d.isMDXComponent=!0},26169:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={toc:[{value:"Overview",id:"overview",level:2},{value:"First time usage",id:"first-time-usage",level:2},{value:"Connecting to the instance for the first time",id:"connecting-to-the-instance-for-the-first-time",level:3},{value:"Changing the super API key for the local Iglu schema registry",id:"changing-the-super-api-key-for-the-local-iglu-schema-registry",level:3},{value:"Generating a pair of read/write API keys for the local Iglu schema registry",id:"generating-a-pair-of-readwrite-api-keys-for-the-local-iglu-schema-registry",level:3},{value:"Copying your Iglu repository to Snowplow Mini (optional)",id:"copying-your-iglu-repository-to-snowplow-mini-optional",level:3},{value:"Setting up HTTPS (optional)",id:"setting-up-https-optional",level:3},{value:"Setting baseURL for Swagger UI (optional)",id:"setting-baseurl-for-swagger-ui-optional",level:3},{value:"Sending events to Snowplow Mini",id:"sending-events-to-snowplow-mini",level:2},{value:"Example events",id:"example-events",level:3},{value:"Events from tracker",id:"events-from-tracker",level:3},{value:"Accessing the Elasticsearch API",id:"accessing-the-elasticsearch-api",level:2},{value:"Viewing the data in Kibana",id:"viewing-the-data-in-kibana",level:2},{value:"Index patterns",id:"index-patterns",level:3},{value:"Discover your data",id:"discover-your-data",level:3},{value:"Uploading custom enrichments",id:"uploading-custom-enrichments",level:2},{value:"Adding a custom schema",id:"adding-a-custom-schema",level:2},{value:"Adding an external Iglu repository",id:"adding-an-external-iglu-repository",level:2},{value:"Using an external Postgres instance",id:"using-an-external-postgres-instance",level:2}]};function l(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page refers to version 0.6.x of Snowplow Mini. It also assumes an already running Snowplow Mini instance."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,i.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,i.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates (because they can)")),(0,i.kt)("h2",{id:"first-time-usage"},"First time usage"),(0,i.kt)("p",null,"This section is dedicated to the steps that need performing when accessing the Snowplow Mini instance for the first time."),(0,i.kt)("h3",{id:"connecting-to-the-instance-for-the-first-time"},"Connecting to the instance for the first time"),(0,i.kt)("p",null,"You can access the Snowplow Mini instance at the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"http://<public dns>/home"),"\xa0address. While accessing Snowplow Mini services, HTTP authentication is required. As a result, you will be prompted for credentials which are\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"USERNAME_PLACEHOLDER"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"PASSWORD_PLACEHOLDER"),"\xa0by default."),(0,i.kt)("p",null,"You\xa0",(0,i.kt)("strong",{parentName:"p"},"should"),'\xa0change these default credentials to something to your liking by going to the Control Plane tab (the last one) and fill the "Change username and password for basic http authentication" form towards the bottom.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that only alphanumeric passwords are supported.")),(0,i.kt)("p",null,"You will then be prompted for those new credentials."),(0,i.kt)("h3",{id:"changing-the-super-api-key-for-the-local-iglu-schema-registry"},"Changing the super API key for the local Iglu schema registry"),(0,i.kt)("p",null,"As as second step, you should change the super API key for the Iglu schema registry that is bundled with Snowplow Mini. This API key can be changed via the Control Plane tab."),(0,i.kt)("p",null,"Given that this API key must be a UUID, you will need to generate one by running\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"uuidgen"),"\xa0at the command line, or by using an online UUID generator like\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/"},"this one"),". Make a note of this UUID, you'll need it to upload your own event and context schemas to Snowplow Mini in the next subsection."),(0,i.kt)("h3",{id:"generating-a-pair-of-readwrite-api-keys-for-the-local-iglu-schema-registry"},"Generating a pair of read/write API keys for the local Iglu schema registry"),(0,i.kt)("p",null,"To add schemas to the Iglu repository bundled with Snowplow Mini, you have to create a dedicated pair of API keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"http://<public dns>/iglu-server")),(0,i.kt)("li",{parentName:"ul"},"Input the super API key set up in step 2.2 in the input box in the top right corner"),(0,i.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"keygen"),"\xa0section"),(0,i.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/auth/keygen"),"\xa0operation"),(0,i.kt)("li",{parentName:"ul"},"Input the appropriate\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"vendor_prefix"),"\xa0for this API key"),(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Try it out!")),(0,i.kt)("li",{parentName:"ul"},"You should receive a JSON similar to:")),(0,i.kt)("p",null,'{\n"read": "deadbeef-dead-beef-dead-beefdeadbeef",\n"write": "deadbeef-dead-beef-dead-beefdeadbeef"\n}'),(0,i.kt)("h3",{id:"copying-your-iglu-repository-to-snowplow-mini-optional"},"Copying your Iglu repository to Snowplow Mini (optional)"),(0,i.kt)("p",null,"To test and send non-standard Snowplow events such as your own custom-contexts and unstructured events you can load them into the Iglu repository local to the Snowplow Mini instance."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get a local copy of your Iglu repository which contains your schemas. This should be modelled after\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/tree/master/schemas"},"this folder")),(0,i.kt)("li",{parentName:"ol"},"Download the latest Igluctl from Bintray:")),(0,i.kt)("p",null,"wget ",(0,i.kt)("a",{parentName:"p",href:"http://dl.bintray.com/snowplow/snowplow-generic/igluctl%5C_0.7.0.zip"},"http://dl.bintray.com/snowplow/snowplow-generic/igluctl\\_0.7.0.zip"),"\nunzip -j igluctl","_","0.7.0.zip"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the executable with the following input:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The address of the Iglu repository:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"http://<public dns>/iglu-server")),(0,i.kt)("li",{parentName:"ul"},"The Super API Key you created in step 2.2"),(0,i.kt)("li",{parentName:"ul"},"The path to your schemas For example to load the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"iglu-central"),"\xa0repository into Iglu Server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/igluctl static push iglu-central/schemas http://<public dns>/iglu-server 980ae3ab-3aba-4ffe-a3c2-3b2e24e2ffce --public\n")),(0,i.kt)("p",null,"Note: this example assumes the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"iglu-central"),"\xa0repository has been cloned in the same directory as where executable is run."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After uploading the schemas, you will need to clear the cache with the restart button under the Control Plane tab in the Snowplow Mini dashboard.")),(0,i.kt)("h3",{id:"setting-up-https-optional"},"Setting up HTTPS (optional)"),(0,i.kt)("p",null,"If you want to use HTTPS to connect to Snowplow Mini, you need to submit a domain name via the Control Plane. Make sure that the domain name you submit is redirected to the IP of the server Snowplow Mini is running from."),(0,i.kt)("h3",{id:"setting-baseurl-for-swagger-ui-optional"},"Setting baseURL for Swagger UI (optional)"),(0,i.kt)("p",null,"Behind the scenes, Snowplow Mini 0.6.0 uses Iglu Server 0.3.0 which\xa0",(0,i.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/04/19/iglu-r9-bulls-eye-released/#server-improvements"},"introduced"),"\xa0a new configuration parameter,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repo-server.baseURL"),"\xa0for Swagger UI to function properly."),(0,i.kt)("p",null,"This is an optional step as you may want to interact with Iglu Server through other channels, e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"cURL"),"."),(0,i.kt)("p",null,"If you'd like to use Swagger UI, you need to follow rest of this section."),(0,i.kt)("p",null,"Browse to Control plane tab on home page and you should see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Iglu Server config file:"),"\xa0form towards top of the page."),(0,i.kt)("p",null,"Save Iglu Server\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-mini/blob/0.6.1/gcp/large/provisioning/resources/configs/iglu-server.conf"},"configuration"),"."),(0,i.kt)("p",null,"Set\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"repo-server.baseURL"),"\xa0to Snowplow Mini's public DNS, i.e. deployment address. Note that you should omit the protocol (i.e. http(s)://), because Swagger UI will automatically prepend that. You should also append\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"/iglu-server"),". Note that there is no trailing slash."),(0,i.kt)("p",null,"For example, if your deployment address is\xa0",(0,i.kt)("a",{parentName:"p",href:"http://my-iglu-server.com/"},"http://my-iglu-server.com"),"\xa0then your\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"baseURL"),"\xa0should be\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"my-iglu-server.com/iglu-server"),"."),(0,i.kt)("p",null,"Upload the file through Control Plane. A notification\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Uploaded successfully"),"\xa0should appear at right top of the page. Now Swagger UI is ready for use."),(0,i.kt)("h2",{id:"sending-events-to-snowplow-mini"},"Sending events to Snowplow Mini"),(0,i.kt)("p",null,"Now that the first time usage steps have been dealt with, you can send some events!"),(0,i.kt)("h3",{id:"example-events"},"Example events"),(0,i.kt)("p",null,"An easy way to quickly send a few test events is to use our example web page."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open up the Snowplow Mini UI at:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"http://<public dns>/home")),(0,i.kt)("li",{parentName:"ol"},"Login with username and password which you choose in step 2.1"),(0,i.kt)("li",{parentName:"ol"},"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Example Events"),"\xa0tab"),(0,i.kt)("li",{parentName:"ol"},"Press the event triggering buttons on the page!")),(0,i.kt)("h3",{id:"events-from-tracker"},"Events from tracker"),(0,i.kt)("p",null,"You can instrument any other Snowplow tracker by specifying the collector URL as the public DNS of the Snowplow Mini instance."),(0,i.kt)("h2",{id:"accessing-the-elasticsearch-api"},"Accessing the Elasticsearch API"),(0,i.kt)("p",null,"Snowplow Mini makes the Elasticsearch HTTP API available at\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"http://<public dns>/elasticsearch"),", you can check it's working by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Checking the Elasticsearch API is available:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl --user username:password http://<public dns>/elasticsearch")),(0,i.kt)("li",{parentName:"ul"},"You should see a\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"200 OK"),"\xa0response"))),(0,i.kt)("li",{parentName:"ul"},"Checking the number of good events we sent in step 3:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl --user username:password http://<public dns>/elasticsearch/good/good/_count")),(0,i.kt)("li",{parentName:"ul"},"You should see the appropriate count of sent events")))),(0,i.kt)("h2",{id:"viewing-the-data-in-kibana"},"Viewing the data in Kibana"),(0,i.kt)("p",null,"Data sent to Snowplow Mini will be processed and loaded into Elasticsearch in real time. In turn, it will be made available in Kibana. To view the data in Kibana, navigate in your browser to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"http://<public dns>/kibana")),(0,i.kt)("h3",{id:"index-patterns"},"Index patterns"),(0,i.kt)("p",null,"Snowplow Mini comes with two index patterns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"good"),"\xa0: For all of your good events, indexed on\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"collector_tstamp"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bad"),"\xa0: For all of your bad events, indexed in\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"failure_tstamp"),".")),(0,i.kt)("h3",{id:"discover-your-data"},"Discover your data"),(0,i.kt)("p",null,"Once you've loaded Kibana you should be able to view the data via the discover interface:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75911).Z,width:"3344",height:"1786"})),(0,i.kt)("p",null,"This is the Kibana Discover UI. You can view the number of events recorded over time on the histogram at the top. By selecting one of the bars you can zoom into just those events:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(36678).Z,width:"3334",height:"1768"})),(0,i.kt)("p",null,"You can then inspect the individual event data in the UI below:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54269).Z,width:"3348",height:"1782"})),(0,i.kt)("h2",{id:"uploading-custom-enrichments"},"Uploading custom enrichments"),(0,i.kt)("p",null,"You can add new custom enrichments via the Control Plane tab. The only thing you have to do is submit the enrichment file which you created according to this\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Configurable-enrichments"},"wiki page"),". If the enrichment relies on additional schemas these should be uploaded to the Iglu repository."),(0,i.kt)("h2",{id:"adding-a-custom-schema"},"Adding a custom schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input the write API key created in subsection 2.3 in the input box in the top right corner"),(0,i.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"schemas"),"\xa0section"),(0,i.kt)("li",{parentName:"ul"},"Develop the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/schemas/{vendor}/{name}/{schemaFormat}/{version}"),"\xa0operation"),(0,i.kt)("li",{parentName:"ul"},"Fill the vendor, name, format, version and body according to your schema in the form"),(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Try it out!"))),(0,i.kt)("h2",{id:"adding-an-external-iglu-repository"},"Adding an external Iglu repository"),(0,i.kt)("p",null,"If you already have an external Iglu repository available, instead of copying it inside the Iglu repository bundled with the Snowplow Mini instance as shown in 2.4, you can add it directly with the Control Plane's\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Add an external Iglu repository"),"\xa0form. Note that if you're using a static repository hosted on S3, you can omit providing an API key."),(0,i.kt)("h2",{id:"using-an-external-postgres-instance"},"Using an external Postgres instance"),(0,i.kt)("p",null,"Browse to Control plane tab on home page and you should see\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Iglu Server config file:"),"\xa0form towards top of the page."),(0,i.kt)("p",null,"Save Iglu Server\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-mini/blob/master/provisioning/resources/configs/iglu-server.conf"},"configuration"),"."),(0,i.kt)("p",null,"Update postgres connection settings per your external Postgres connection information."),(0,i.kt)("p",null,"Upload the file through Control Plane. A notification\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Uploaded successfully"),"\xa0should appear at right top of the page."),(0,i.kt)("p",null,"Assuming it is a clean and fresh Postgres instance, 2 tables,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"apikeys"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"schemas"),", are to be created by you."),(0,i.kt)("p",null,"Let's create\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"apikeys"),"\xa0table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h \"mydbinstance.cyb6dd6wajhe.us-east-1.rds.amazonaws.com\" -p 5432 -d iglu -U snowplow << EOF\n> CREATE TABLE public.apikeys (uid uuid NOT NULL, vendor_prefix character varying(200) NOT NULL, permission character varying(20) DEFAULT 'read'::character varying NOT NULL, createdat timestamp without time zone NOT NULL);\n> ALTER TABLE public.apikeys OWNER TO snowplow;\n> ALTER TABLE ONLY public.apikeys ADD CONSTRAINT apikeys_pkey PRIMARY KEY (uid);\n> EOF\n")),(0,i.kt)("p",null,"Instead of executing multiple psql commands with each of these commands, this is a workaround to execute multiple commands at single psql command."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},">"),"\xa0is printed by psql after entering each line. After entering above 3 lines as input to psql, hit\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"EOF"),"\xa0keyboard combination or enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"EOF"),"\xa0text and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Password for user snowplow:"),"\xa0will appear and then we input our password."),(0,i.kt)("p",null,"Let's create\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"schemas"),"\xa0table similarly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h \"mydbinstance.cyb6dd6wajhe.us-east-1.rds.amazonaws.com\" -p 5432 -d iglu -U snowplow << EOF\n> CREATE TABLE public.schemas (schemaid integer NOT NULL, vendor character varying(200) NOT NULL, name character varying(50) NOT NULL, format character varying(50) NOT NULL, version character varying(50) NOT NULL, schema text NOT NULL, createdat timestamp without time zone NOT NULL, updatedat timestamp without time zone NOT NULL, ispublic boolean NOT NULL);\n> ALTER TABLE public.schemas OWNER TO snowplow;\n> CREATE SEQUENCE public.schemas_schemaid_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;\n> ALTER TABLE public.schemas_schemaid_seq OWNER TO snowplow;\n> ALTER SEQUENCE public.schemas_schemaid_seq OWNED BY public.schemas.schemaid;\n> ALTER TABLE ONLY public.schemas ALTER COLUMN schemaid SET DEFAULT nextval('public.schemas_schemaid_seq'::regclass);\n> ALTER TABLE ONLY public.schemas ADD CONSTRAINT schemas_pkey PRIMARY KEY (schemaid);\n> EOF\n")),(0,i.kt)("p",null,"Now that we have our tables, we need to insert a super api key into\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"apikeys"),"\xa0table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h \"mydbinstance.cyb6dd6wajhe.us-east-1.rds.amazonaws.com\" -p 5432 -d iglu -U snowplow \\\n-c \"insert into apikeys(uid, vendor_prefix, permission, createdat) values ('8de87fb0-8b8c-4c3a-b30e-6c425bf9d268', '*', 'super', current_timestamp);\"\n")),(0,i.kt)("p",null,"Last step, for Iglu Resolver to work, you should send this apikey through\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Add apikey for local Iglu Server:"),"\xa0form under Control Plane tab."),(0,i.kt)("p",null,"Now, this external Postgres is ready to be used. The schemas uploaded to Iglu Server will reside in this external Postgres instance."))}l.isMDXComponent=!0},75911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen-Shot-2020-04-13-at-13.20.22-03d1d8618ba1de28e3fe9904e3179f81.png"},54269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen-Shot-2020-04-13-at-13.23.16-1d11aa9df2877d5b59d02a47692aaf48.png"},36678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen-Shot-2020-04-13-at-13.32.26-f02164034a5a18343989e540d1c3f2c4.png"}}]);